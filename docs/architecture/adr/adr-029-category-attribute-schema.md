---
title: "ADR-029: Category → Attribute Schema Linkage"
sidebar_label: "ADR-029"
sidebar_position: 29
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 3 (the spec's own
"architectural centerpiece") of the self-directed build sequence (`BACKLOG.md`) — item 11, the
first item of Phase 3 and a hard dependency for item 13 (completeness scoring).

## Context

Deel 11 §30-33/§41-43 and Deel 24 §2/§39-53/§84/§110-116 describe a category (the spec's own word:
"classification") determining which attributes are `REQUIRED`/`RECOMMENDED`/`OPTIONAL` for a
product in it, with three concrete mechanics:

- **Conditional requirements** (§32): `Battery powered = true → Battery capacity = REQUIRED` — a
  rule can depend on another attribute's value, not just be unconditionally on/off.
- **Inheritance** (§41): a child classification inherits its parent's required attributes (the
  spec's own worked example: `Electric Motor {power, voltage, frequency}` → child `AC Motor`
  inherits all three and adds its own `phase_count`).
- **Override rules** (§42): a child MAY re-specify an inherited attribute's requirement level, but
  must NOT silently change what the attribute *means* — `power` can never start meaning
  `temperature` partway down the tree.

Before this ADR, `Category`, `ClassificationNode`, and `AttributeDefinition` were three completely
unlinked models — nothing determined which attributes applied to which category, so
`AttributeValue` rows could be set with zero relationship to what a product's category actually
required.

## Decision

**Terminology mapping, stated explicitly**: the spec's text uses "classification" for this feature,
which in THIS codebase's existing modeling could mean either of two different things —
`Category` (the field actually set on every `Product.categoryId`, carrying the org/global-registry
split from ADR-020) or `ClassificationScheme`/`Node`/`Assignment` (a separate, parallel taxonomy
structure that exists in the schema but has no product-facing consumer anywhere in this build).
This ADR attaches the schema to `Category`, not `ClassificationNode`, because Category is the one
that's actually load-bearing — every product already has exactly one, `ClassificationAssignment`
is optional and currently unused by any read path. Attaching required-attribute rules to the
unused structure would build a feature nothing could ever trigger.

**New `CategoryAttributeSchema`** (`categoryId`, `attributeDefinitionId`, `requirement`
(`REQUIRED`/`RECOMMENDED`/`OPTIONAL`/`FORBIDDEN`), optional `conditionOnAttributeDefinitionId` +
`conditionOnValue`) — one row per (category, attribute) pair. A conditional rule's `requirement`
only applies when the product's own value for the condition attribute matches
`conditionOnValue`; unconditional otherwise (both null).

**Inheritance and override, resolved at read time, not materialized**: `GET
/categories/:id/attributes` walks the category's ancestor chain (via `Category.parentId`) root to
leaf, merging each level's rules into the one before it — a closer-to-leaf rule for the SAME
`attributeDefinitionId` replaces (not adds to) an inherited one, deliberately keyed by the
attribute's stable id (never by name), which structurally guarantees §42's "never silently change
what an attribute means" — a rule can only ever override `power`'s requirement level, it can never
repoint the same key at a different attribute. No materialized/denormalized "effective schema"
table — this is computed fresh on every read, correct-by-construction over a small number of
ancestor levels, with room to add caching later if that read ever shows up as a hot path.

**Scope narrowed from item 11's full backlog description in one place, documented rather than
silently dropped**: attribute-schema *management* (create/update/delete a rule) is only supported
for organization-owned categories, not shared/global (`organizationId IS NULL`) ones. A global
category's schema would be registry governance — the same class of action as `categories:govern`
approve/reject (ADR-020) — and enforcing that correctly means checking `PlatformOperatorGuard`'s
`PLATFORM_OPERATOR_ORG_ID` logic, which lives in a guard, not something this ADR wanted to
duplicate inline in a service to support a comparatively rare case. Attempting to set a schema on a
global category returns a clear `403 GLOBAL_CATEGORY_SCHEMA_NOT_SUPPORTED` rather than a confusing
404 or silent no-op. Reads (`GET /categories/:id/attributes`) work for global categories too — only
writing a schema on one is unsupported.

**Deliberately NOT built in this pass** (all explicitly Deel 11 topics, left for later if a real
need appears): §33 attribute-level constraints (numeric min/max, allowed units) — a different,
additive concern from requirement level; §34-35 enum versioning; §39-40 attribute namespaces
(`ospi:power` vs `manufacturer:internal_code`) and manufacturer-private extension attributes. None
of these block item 13 (completeness scoring, the actual reason item 11 was sequenced first) — that
item only needs to know REQUIRED/RECOMMENDED/OPTIONAL/FORBIDDEN plus the conditional check, which
this ADR delivers in full.

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance, reproducing the spec's own
  worked examples: created `Electric Motor` (parent) with `power`/`voltage` REQUIRED, `AC Motor`
  (child) with its own `phase_count` REQUIRED plus a conditional `battery_capacity` REQUIRED (only
  when `battery_powered = true`) and an OVERRIDE of the inherited `voltage` down to RECOMMENDED.
  `GET /categories/:acMotorId/attributes` correctly returned exactly four entries: `power`
  (inherited from the parent, still REQUIRED, `inheritedFromCategoryId` pointing at the parent),
  `voltage` (the child's own RECOMMENDED override, `inheritedFromCategoryId: null`), `phase_count`
  and `battery_capacity` (both the child's own). `GET /categories/:electricMotorId/attributes`
  (the parent) correctly showed only its own two rules with zero leakage of the child's rules —
  confirming the merge only ever flows down the tree, never sideways or up.
  Validation confirmed live: a self-referential condition (an attribute conditioning its own
  requirement) and a `conditionOnValue` supplied without its paired
  `conditionOnAttributeDefinitionId` were both rejected with `400`; attempting to set a schema on a
  freshly-created global category proposal correctly returned `403
  GLOBAL_CATEGORY_SCHEMA_NOT_SUPPORTED`; deleting a rule correctly removed it from the effective
  schema on the next read; and a second, unrelated organization attempting to write OR read the
  first organization's private category's schema both correctly 404'd.
- RLS added for `category_attribute_schemas`, joined through the parent category's
  `organizationId` (matching the existing `categories` policy's own `IS NULL OR = current org`
  handling, since global-category rows must remain readable even though writing them isn't
  supported yet).
- Sets up item 13 (completeness scoring, `POST /products/:id/validate`) to consume this schema
  directly — that item is next, per `BACKLOG.md`'s own dependency ordering, precisely because it
  needed this data to exist first.
