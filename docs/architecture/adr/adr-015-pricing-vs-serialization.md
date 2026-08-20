---
title: "ADR-015: Pricing/Checkout Resolve at SKU Level, Never at Serial/Batch Level"
sidebar_label: "ADR-015"
sidebar_position: 15
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** product owner — a checkout/POS system will not always receive the full OSPI code,
since not every serial number is sent to every register; pricing must not depend on it.

## Context

The product owner correctly observed that point-of-sale/checkout systems generally do not carry
a product's full, per-unit identity — not every physical unit's serial number is transmitted to
every register — and asked whether the OSPI code needs to change to accommodate this.

Re-reading the code format against the actual schema surfaced two real problems, only one of
which the code format itself has anything to do with:

1. **The code format already separates the two concerns**, and didn't need to change.
   `AAAA-BBBBBB-CCCCCCCC-DDDD` (Producer-Category-CompanyProductId-Variant) is the SKU-level
   identity — what a price is set against. `EEEEEEEE` (Serial/Batch) is a unit-level identity
   layered on top, and already defaults to a fixed `00000000` placeholder when unused
   (ADR-008). A checkout system that only ever sees the SKU-level segments (or a code with the
   serial segment left at its placeholder) was already a valid, spec-compliant scenario.

2. **The schema, as built, did not actually implement that separation correctly.**
   `OspiIdentity` carried `variantCode` and `serialBatch` as fields, but its uniqueness
   constraint was `@@unique([producerCodeId, companyProductId])` — no variant, no serial. In
   practice this meant **at most one OSPI identity could ever be issued per companyProductId,
   full stop**. Issuing a second code for a different variant, let alone one per serialized
   unit, would immediately collide on this constraint. `variantCode`/`serialBatch` were fields
   in name only.

   Separately, `Offer` (where price lives) referenced only `productId`, with no way to price a
   variant differently from its sibling variants — a real gap regardless of serialization,
   since different sizes/colors/configurations of the same product routinely have different
   prices.

## Decision

**SKU-level identity** (what pricing/checkout resolve against) now spans Producer + Category +
CompanyProductId + Variant:

- `OspiIdentity`'s uniqueness is now `@@unique([producerCodeId, companyProductId, variantCode])`
  — one identity per producer + companyProductId + variant, serial/batch deliberately excluded.
- `ProductVariant` gets its own `ospiIdentityId` — a variant carries its own full OSPI code
  (its own barcode/label), independent of the parent Product's code. `sku` stays as an
  additional internal label alongside the OSPI code, not a substitute for it.
  **Amendment (2026-08-17, product owner decision):** originally `ospiIdentityId` was optional
  (mint one only if the producer explicitly needed a distinct code for that variant). The
  product owner decided every variant should always get its own code — closer to how GS1/GTIN
  is used in practice (each size/color = its own barcode), and more consistent with ADR-005's
  decision to position OSPI as an independent standard rather than an internal-only feature.
  `ProductVariant.ospiIdentityId` is now **required**, not optional; `POST /products/:id/variants`
  now requires exactly one of `identity`/`ospiIdentityId` (previously either could be omitted),
  mirroring the validation `POST /products` already used for the base product.
- `Offer` gets an optional `variantId` — a price can now target a specific variant instead of
  only the base product. `OrderLine` snapshots `variantId` alongside the existing
  `sellerOrganizationId` denormalization, for the same reason (known at order time, before any
  grouping/fulfillment exists).

**Unit-level identity** (a specific physical item or batch's real serial number) is explicitly
**not** part of `OspiIdentity`/`Product`/`Offer` at all. A new `SerializedUnit` table holds it:
`{ productId, variantId?, serialBatch, fullCode }`, where `fullCode` is computed once at
registration by substituting the real serial into the parent Product/Variant's other segments
and recomputing the checksum (`ospi-code.util.buildOspiCode`), then stored. Registering the same
serial twice for the same product/variant produces the *identical* `fullCode` and collides on
its `@unique` constraint — that, not a compound key over a nullable `variantId` (which Postgres
would treat as always-distinct on `NULL`), is what actually prevents duplicates.

This means: pricing, catalog search, and checkout all key off `Product`/`ProductVariant`, and
never need a serial number to function — matching the product owner's requirement directly.
`SerializedUnit` exists purely for traceability, warranty, recalls, and per-item DPP linkage,
where a specific physical item's identity does matter.

## Consequences

- Existing `POST /products` / `POST /ospi-identities` behavior for products without variants is
  unchanged — this only adds capability, it doesn't require every product to define variants or
  register serialized units.
- `POST /products/:id/variants` now optionally accepts the same `identity`/`ospiIdentityId`
  shape `POST /products` already accepted, to mint a variant's own code.
- `POST /offers` now optionally accepts `variantId`.
- New endpoints: `POST /products/:id/serialized-units` (register a unit's real serial),
  `GET /products/:id/serialized-units` (list). Both require authentication and ownership of the
  product — there is deliberately no public lookup-by-serial endpoint in this build. If one is
  ever added, it should follow ADR-014's pattern (`@OptionalAuth()` + `Document.visibility`-style
  gating), not reuse the serial's guessability as a security property, for the same reasons
  ADR-013/014 already established for DPP/catalog resolution.
- `SerializedUnit` is a new RLS-protected, owner-organization-only table (`prisma/sql/rls.sql`)
  — no cross-org visibility rule exists for it yet; add one via the Sharing model (ADR-010) if a
  future use case needs a partner to see another org's serialized units (e.g. drop-shipping).
- This is a breaking schema change relative to the pre-ADR-015 build (nothing has been deployed
  yet, so no migration-compatibility concern) — `OspiIdentity`'s uniqueness constraint changing
  shape means any already-issued identities that happened to collide on the old, broader
  constraint would need re-evaluation, though none exist yet in this sandbox (no database was
  ever reachable to issue any).
