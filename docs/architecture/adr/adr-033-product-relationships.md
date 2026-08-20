---
title: "ADR-033: Product Relationships Model"
sidebar_label: "ADR-033"
sidebar_position: 33
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 4 (product content &
relationships) of the self-directed build sequence (`BACKLOG.md`) — item 15, found independently
by 3 of 5 re-audit passes.

## Context

Deel 7 §39-42, Deel 10 §43-44, Deel 22 §25-29/§107, and Deel 26 §48-51 all describe products
relating to other products, converging on one concrete model (Deel 22 §26): a relationship has a
`sourceProduct`, `relationshipType`, `targetProduct`, `metadata`, and a `validFrom`/`validUntil`
window. Two structural requirements are explicit:

- **Directionality where relevant** (Deel 22 §28): "Product A supersedes Product B" is not the
  same claim as "Product B supersedes Product A" — the database must store direction explicitly,
  not treat every relationship as inherently symmetric.
- **Independent visibility** (Deel 7 §42): a relationship can be private or public, separately
  from the product's own publication state — "een interne ERP-relatie hoeft niet automatisch
  publiek te worden."

The union of relationship-type examples across all four chapters: `replacement_for`,
`compatible_with`, `accessory_for`/`accessory_of`, `part_of`, `contains`, `variant_of`,
`supersedes`, `requires`.

**Explicitly out of scope, by the spec's own words**: Deel 7 §43-44 (Product Bundles, Bill of
Materials) are named as *separate*, deliberately modular features — "BOM functionaliteit wordt
modulair gehouden zodat het core Product model niet onnodig complex wordt." This ADR does not build
either. Product *Family* (variants of one base product) is separately and correctly already
covered by `Product`/`ProductVariant` (ADR-010) — this ADR is additive, not a duplicate of that.

## Decision

**New `ProductRelationship(sourceProductId, targetProductId, relationshipType, visibility,
metadata, validFrom, validUntil)`**, directional by construction — there is no symmetric/bidirectional
flag or auto-generated reverse row; a caller wanting the converse relationship queryable creates a
second, separate row. `relationshipType` is the eight-value union above
(`REPLACEMENT_FOR | ACCESSORY_FOR | COMPATIBLE_WITH | PART_OF | CONTAINS | VARIANT_OF | SUPERSEDES |
REQUIRES`). A unique constraint on `(sourceProductId, targetProductId, relationshipType)` prevents
exact duplicates while still allowing the same product pair to carry multiple *different*
relationship types (e.g. both `ACCESSORY_FOR` and `COMPATIBLE_WITH`).

**Cross-organization by design, not an oversight**: creating a relationship only requires the
caller to own the SOURCE product — the target just needs to exist, in any organization. "A
third-party accessory maker declares their product is `COMPATIBLE_WITH` someone else's printer" is
a real, legitimate use case this platform's multi-tenant marketplace nature explicitly calls for,
not an access-control gap to close.

**Visibility gates cross-organization reads, checked per-relationship-row, not per-queried-product**:
a relationship is visible to a caller if it's `PUBLIC`, or if the caller's organization owns
EITHER the source or the target of that specific row — independent of which of the two products the
`GET .../relationships` call happened to be made through. This matters concretely: the target
organization (who didn't create the relationship) can still see a `PRIVATE` relationship pointing at
their own product, while a completely unrelated third organization sees only the `PUBLIC` ones.
Default visibility is `PRIVATE` (Deel 7 §42's own framing — public is the exception, not the
default). The same rule is enforced twice: once in `ProductsService.listRelationships` and once in
`prisma/sql/rls.sql`'s new policy, matching this codebase's established defense-in-depth pattern.

**Deletion is restricted to the source product's owner** — the party that created the relationship
is the one who can retract it; the target owner (even though they can *see* a relationship pointing
at their product) cannot unilaterally delete someone else's declared relationship about their own
product.

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance with two genuinely separate
  organizations, reproducing Deel 22 §27's own worked example almost exactly: "Printer A"
  (organization 1) declared `COMPATIBLE_WITH` "Cartridge B" (organization 2, never granted any
  special access) — the cross-organization creation succeeded. A duplicate of the exact same
  (source, target, type) triple correctly `409`'d; a product declaring a relationship to itself
  correctly `400`'d. With the relationship left at its default `PRIVATE` visibility: organization 1
  (the source owner) and organization 2 (the target owner, despite never having created it)
  BOTH correctly saw it when listing their own product's relationships, while a freshly-registered,
  completely unrelated third organization correctly saw zero. Adding a second, `PUBLIC` relationship
  between the same two products then correctly became visible to that third organization — while
  the original `PRIVATE` one remained invisible to them, confirming the filter operates per-row,
  not "product has any public relationship, show them all." Deletion authorization was verified
  from both sides: the target owner (organization 2) attempting to delete the relationship via their
  own product's route correctly `404`'d (they can see it, not retract it), while the actual source
  owner (organization 1) deleted it successfully.
- RLS added for `product_relationships`, matching the same visibility rule as the application-layer
  check — a single join against `products` matched on EITHER `sourceProductId` or
  `targetProductId`, the same bilateral-visibility shape `connections`/`sharing_grants` already use
  for their own two-party relationships, applied here to a join instead of two direct columns.
