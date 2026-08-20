---
title: Products & Variants
sidebar_position: 5
---

# Products & Variants

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/products` | Create a product (optionally minting its OSPI identity in the same call) | `products:write` |
| `POST` | `/products/bulk` | Create up to 500 products, partial-success per item | `products:write` |
| `GET` | `/products` | List/search the caller's products | — |
| `GET` | `/products/:id` | Get one product | — |
| `PATCH` | `/products/:id` | Update a product | `products:write` |
| `POST` | `/products/:id/validate` | Completeness score against the category's attribute schema | — |
| `POST` | `/products/:id/publish` | `→ PUBLISHED` (rejects `400` if not `readyForPublication`) | `products:write` |
| `POST` | `/products/:id/unpublish` | Revert publication | `products:write` |
| `POST` | `/products/:id/retire` | `→ ARCHIVED` | `products:write` |
| `POST` | `/products/:id/recall` | `→ RECALLED` | `products:write` |
| `POST` | `/products/:id/variants` | Add a variant (always requires its own OSPI identity) | `products:write` |
| `GET` | `/products/:id/variants` | List variants | — |
| `POST` | `/products/:id/serialized-units` | Register one serial/batch unit | `products:write` |
| `GET` | `/products/:id/serialized-units` | List serialized units | — |
| `POST` | `/products/:id/serialized-units/bulk` | Register up to 1000 units, partial-success per item | `products:write` |
| `PUT` | `/products/:id/translations/:locale` | Set a locale's `name`/`description` | `products:write` |
| `GET` | `/products/:id/translations` | List translations | — |
| `DELETE` | `/products/:id/translations/:locale` | Remove a translation | `products:write` |
| `POST` | `/products/:id/relationships` | Create a directional relationship to another product | `products:write` |
| `GET` | `/products/:id/relationships` | List relationships | — |
| `DELETE` | `/products/:id/relationships/:relationshipId` | Remove a relationship | `products:write` |

## Create a product

```http
POST /api/v1/products
Authorization: Bearer <token>
Idempotency-Key: 9c2a...
Content-Type: application/json

{
  "name": "Stainless Steel Water Bottle 750ml",
  "description": "Double-walled, vacuum-insulated.",
  "categoryId": "cat_...",
  "gtin": "04006381333931",
  "identity": {
    "producerCodeId": "prc_...",
    "categoryCode": "123456",
    "companyProductId": "00012345",
    "version": 1
  }
}
```

`identity` mints a new OSPI Identity for the product in the same call — see [Producers & OSPI Codes](/api-reference/producers-and-ospi-codes). Pass `ospiIdentityId` instead to attach an identity you already reserved. `gtin` (GTIN-8/12/13/14) is checksum-validated but not confirmed against GS1's registry ([ADR-005](/architecture/adr/adr-005-gs1-relationship)).

Statuses: `DRAFT → ACTIVE → PUBLISHED`, with `RECALLED`/`DISCONTINUED`/`ARCHIVED` as terminal-ish states, plus an independent `publicationState` audience field (`PRIVATE`/`PARTNER_ONLY`/`PUBLIC`/`SCHEDULED`).

## Variants

Every variant carries its **own** OSPI identity — `POST /products/:id/variants` always requires an `identity` block or `ospiIdentityId`, the same shape as product creation ([ADR-015](/architecture/adr/adr-015-pricing-vs-serialization)). Pricing (`Offer`) resolves against this SKU-level identity, not against individual serialized units.

## Serialized units

A serialized unit is a lightweight per-unit serial/batch record computed from its parent identity's segments — optional, and never required for pricing:

```http
POST /api/v1/products/{id}/serialized-units
Authorization: Bearer <token>
Content-Type: application/json

{ "serialBatch": "00000001" }
```

Add `"variantId": "..."` to register the unit under a specific variant instead of the base product. Only reachable by the authenticated owner today — there is no public lookup-by-serial endpoint.

## Publication gate

`POST /products/:id/publish` calls the same logic as `POST /products/:id/validate` and rejects with `400` if the product isn't `readyForPublication` — publication is genuinely gated on category-schema completeness, not just an advisory check:

```json
{
  "score": 0.86,
  "requiredCompleted": 6,
  "errors": [],
  "warnings": ["attribute 'care_instructions' recommended but missing"],
  "readyForPublication": true
}
```

## Optimistic concurrency

`PATCH /products/:id` accepts an opt-in `expectedVersion` field on the update payload; a stale write returns a real `409`.

## Relationships

```http
POST /api/v1/products/{id}/relationships
Authorization: Bearer <token>
Content-Type: application/json

{
  "targetProductId": "prd_...",
  "type": "REPLACEMENT_FOR",
  "visibility": "PUBLIC"
}
```

`type` is one of `REPLACEMENT_FOR`, `ACCESSORY_FOR`, `COMPATIBLE_WITH`, `PART_OF`, `CONTAINS`, `VARIANT_OF`, `SUPERSEDES`, `REQUIRES`. Creating a relationship only requires owning the source product — the target can belong to any organization; `PRIVATE`/`PUBLIC` visibility gates whether the other organization can read it back.

## Localization

`GET /products/:id?locale=fr-BE` resolves `name`/`description` through a fallback chain — exact locale → language-only prefix → base fields — resolved independently per field. The base `Product.name`/`description` never change; no `locale` query param means no behavior change.
