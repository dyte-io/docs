---
title: Digital Product Passport
sidebar_position: 12
---

# Digital Product Passport

:::caution Not a compliance implementation
This is a generic scaffold — a named, versioned list of required attribute codes, composed live from existing Attributes and Documents with no duplicated data storage. It is **not** mapped to actual EU ESPR delegated acts, and legal review of that mapping is explicitly deferred until post-MVP validation. See [ADR-006](/architecture/adr/adr-006-dpp-espr-stance).
:::

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/dpp-profiles` | Define a profile (which attribute codes are required) | `dpp:manage` |
| `GET` | `/dpp-profiles` | List profiles | — |
| `POST` | `/dpp-records` | Create a record for a product against a profile | `products:write` |
| `POST` | `/dpp-records/:id/validate` | Check completeness against the profile | `products:write` |
| `POST` | `/dpp-records/:id/publish` | Publish (issues/keeps the public access token) | `products:write` |
| `POST` | `/dpp-records/:id/suspend` | Unpublish | `products:write` |
| `POST` | `/dpp-records/:id/rotate-token` | Rotate the public access token without deleting the record | `products:write` |
| `GET` | `/dpp-records/:id` | Get one record (owner view) | — |
| `GET` | `/dpp/:accessToken` | Public view (unauthenticated) | none |

## Public access

`GET /dpp/:accessToken` mirrors "scan a QR code, no login." Access is gated by a dedicated, rotatable 256-bit token — **deliberately not the OSPI code checksum**, which at 3 characters is far too low-entropy to serve as a security barrier ([ADR-013](/architecture/adr/adr-013-dpp-public-access-token)). The database ID is never exposed in the public URL. This endpoint is rate-limited as defense-in-depth on top of the token's entropy.

```http
GET /dpp/8f3a2c1e9b7d4f6a0e5c3b1a9d7f2e4c6a8b0d2f4e6a8c0b2d4f6a8e0c2b4d6f
```
