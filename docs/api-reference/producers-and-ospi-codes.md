---
title: Producers & OSPI Codes
sidebar_position: 4
---

# Producers & OSPI Codes

An organization registers as a **Producer**, is issued a **Producer Code** (the `AAAA` segment), and then mints **OSPI Identities** — the global, checksum-verified product/variant identifier. See [ADR-004](/architecture/adr/adr-004-ospi-code-checksum) and [ADR-008](/architecture/adr/adr-008-ospi-code-segment-widths) for how the identifier format and checksum are actually implemented.

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/producers` | Register a producer under the caller's organization | `producers:write` |
| `GET` | `/producers` | List producers | — |
| `POST` | `/producers/:producerId/codes` | Issue a Producer Code | `producers:write` |
| `POST` | `/ospi-identities` | Mint an OSPI Identity | `products:write` |
| `POST` | `/ospi-identities/validate` | Validate a code's checksum without minting anything | — |
| `GET` | `/ospi-identities/:code` | Look up an identity by its full code | — |
| `POST` | `/ospi-identities/:id/retire` | `RESERVED/REGISTERED/ACTIVE/SUSPENDED → RETIRED` | `products:write` |
| `POST` | `/ospi-identities/:id/suspend` | `→ SUSPENDED` | `products:write` |
| `POST` | `/ospi-identities/:id/reactivate` | `SUSPENDED → ACTIVE` | `products:write` |

## Register a producer and issue a code

```http
POST /api/v1/producers
Authorization: Bearer <token>
Content-Type: application/json

{ "name": "Acme Manufacturing" }
```

```http
POST /api/v1/producers/{producerId}/codes
Authorization: Bearer <token>
Content-Type: application/json

{ "code": "ACME" }
```

`code` is the `AAAA` segment: A–Z0–9, up to 12 characters.

## Mint an OSPI Identity

```http
POST /api/v1/ospi-identities
Authorization: Bearer <token>
Idempotency-Key: 6b1f...
Content-Type: application/json

{
  "producerCodeId": "prc_...",
  "categoryCode": "123456",
  "companyProductId": "00012345",
  "variantCode": "0001",
  "serialBatch": "00000001",
  "version": 1
}
```

| Field | Segment | Notes |
| --- | --- | --- |
| `producerCodeId` | `AAAA` | The issued Producer Code |
| `categoryCode` | `BBBBBB` | Up to 6 chars |
| `companyProductId` | `CCCCCCCC` | Producer-supplied product identifier (Deel 4 §14), up to 8 chars |
| `variantCode` | `DDDD` | Optional, up to 4 chars |
| `serialBatch` | `EEEEEEEE` | Optional, up to 8 chars |
| `version` | `V` | 1–9, default 1 |
| — | `FFF` | Computed checksum, never supplied — see ADR-004 |

Pass `reserved: true` (optionally with `reservedUntil`) to **reserve** an identity — the code exists and is held, without a product attached yet — for ERP sync, bulk import, or manufacturing workflows that need a code before the product record is fully assembled ([ADR-024](/architecture/adr/adr-024-product-identity-lifecycle-and-decimal-quantity)). Attaching it to a product later moves it straight to `ACTIVE`, no separate un-reserve step needed.

In practice you usually don't call this endpoint directly — `POST /products` accepts the same fields under an `identity` block and mints the identity in the same call. Use this endpoint directly when you need to reserve a code before the product exists, or when issuing identities in bulk ahead of catalog creation.

### Lifecycle

```
RESERVED → REGISTERED → ACTIVE → SUSPENDED → RETIRED
```

`SUSPENDED` and `RETIRED` are one-way past `ACTIVE` except the explicit `reactivate` action (`SUSPENDED → ACTIVE` only — `RETIRED` is terminal).

## Validate and resolve a code

`POST /ospi-identities/validate` checks a code's structure and checksum without touching the database — useful for client-side scan validation before calling the network at all.

For looking up what a code actually identifies (product, manufacturer, variants, documents), see the public [OSPI Code Resolver](/api-reference/search#resolver) — it doesn't require authentication, matching the "scan a code, no login" use case (Deel 4 §26-27).
