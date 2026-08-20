---
title: "ADR-032: Product Localization/Translation Model"
sidebar_label: "ADR-032"
sidebar_position: 32
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 4 (product content &
relationships) of the self-directed build sequence (`BACKLOG.md`) — item 14, found independently
by 4 of 5 re-audit passes, the strongest cross-validated finding of the entire audit. Sequenced
first in Phase 4, per `BACKLOG.md`'s own note, so later product-content features inherit
localization rather than needing a retrofit.

## Context

Six source chapters (Deel 3 §39, Deel 6 §40-42, Deel 7 §54-55, Deel 10 §35-37, Deel 22 §57-61/§102,
Deel 26 §57-59) plus Constitution §21 converge on the same requirement, phrased almost identically
every time: `Product.name`/`description` must not be a single flat string — a product needs
per-locale values (`nl-BE`, `fr-BE`, `en`, `de`, ...), with a predictable fallback chain when a
requested locale is missing. Deel 6 §41 gives a concrete conceptual shape
(`LocalizedValue { resourceId, field, language, value }`) but explicitly says the exact
implementation may differ "zolang dezelfde functionaliteit wordt bereikt." Deel 7 §55 explicitly
scopes the translation *workflow* (request → translate → review → publish) as later work: "Voor
MVP kan dit eenvoudiger worden gehouden."

Before this ADR, `Product.name`/`description` were flat strings with no localization mechanism at
all.

## Decision

**A dedicated `ProductTranslation` table, not a generic polymorphic `LocalizedValue`.** The spec's
own generic shape (`resourceId`/`field`/`language`/`value`) would mean every consumer does
string-keyed, weakly-typed lookups against an arbitrary-entity table — a real departure from this
codebase's established convention of strongly-typed, per-entity relation tables (compare
`AttributeValue`, which is itself scoped to Product/Variant, not "any entity, any field"). Since
the spec explicitly permits an equivalent alternative implementation, this ADR builds
`ProductTranslation(productId, locale, name, description)` instead — one row per (product, locale),
FK-safe, matching the rest of the schema's style.

**`Product.name`/`description` remain the base/fallback values** — no data migration, and zero
behavior change for any existing caller that never asks for a locale. A translation is additive: it
overrides the base for a specific locale, never replaces it.

**Fallback chain** (`localization.util.ts`, unit-tested): requested locale exact match → language-
only prefix (`fr-BE` → `fr`) → the base Product fields. **Resolved independently per field**
(`name`, `description` each walk their own chain) rather than picking one whole translation row —
a translation that only overrides `description` still lets `name` fall through to a
less-specific match or the base value on its own, instead of forcing an unrelated field to inherit
whatever row happened to match first. This directly matches Deel 6 §42's own framing of the
fallback as being about "een gelokaliseerd veld" (a localized *field*), not a whole record.

**Wired into `GET /products/:id?locale=fr-BE`** — `ProductsService.findOne` accepts an optional
`locale` and, when given, returns the resolved `name`/`description` plus `requestedLocale`/
`resolvedLocale` so a caller can tell exactly which locale actually supplied the name they got back
(useful for a UI that wants to show "showing English, no French translation yet"). **Not wired into
`GET /products` (the list/search endpoints)** in this pass — bulk per-row locale resolution across
a listing is a related but separable concern, deliberately deferred rather than adding N-query
resolution cost to every list call without a concrete need for it yet; `findOne` was the
higher-value, unambiguous integration point.

**Translation workflow deliberately NOT built** (Deel 7 §55's own "for MVP, keep this simpler"):
just direct CRUD (`PUT`/`GET`/`DELETE /products/:id/translations[/:locale]`), no
`SUBMITTED → TRANSLATED → REVIEWED → PUBLISHED` review pipeline. Any authenticated org member with
`products:write` can set a translation directly, same access level as editing the base product.

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance, reproducing the spec's own
  worked example nearly verbatim: a product with base `name: "Electric motor"`, an `nl` translation
  (`name` only), and an `fr-BE` translation (`name` + `description`). `GET` without a `locale`
  returned the untouched base values (zero behavior change for existing callers).
  `?locale=fr-BE` returned the exact match on both fields (`resolvedLocale: "fr-BE"`).
  `?locale=fr-FR` (no `fr-BE`, no plain `fr` row exists) correctly fell all the way to base.
  `?locale=nl-BE` correctly fell back to the `nl` row for `name` (`resolvedLocale: "nl"`) while
  `description` — which the `nl` row never set — independently fell all the way through to the
  base value, proving the per-field (not per-row) resolution actually happens live, not just in
  the unit tests. Deleting the `nl` translation and re-querying `?locale=nl-BE` correctly reverted
  to the base name. An empty translation body (`{}`, no `name` or `description`) was correctly
  rejected with `400`. A second, unrelated organization attempting to write a translation onto the
  first organization's product correctly `404`'d.
- RLS added for `product_translations`, joined through the parent product's `organizationId`, same
  pattern as `dpp_records`/`webhook_deliveries`/`sessions`/`category_attribute_schemas`.
- Sets up the rest of Phase 4 (item 15 Product Relationships, item 16 Document metadata) to build on
  a product model that already has real, tested localization — matching `BACKLOG.md`'s own
  sequencing rationale for putting this item first.
