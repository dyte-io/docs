---
title: API Reference
sidebar_label: Overview
sidebar_position: 1
slug: /
---

# OSPI Platform API

This is the reference for the real, implemented **OSPI Platform API** ([`ospi-platform`](https://github.com/BrickeVD/ospi-platform)) — a NestJS/PostgreSQL REST API covering identity, organizations, products, categories, documents, inventory, cross-organization sharing, search, ordering and the Digital Product Passport scaffold.

A running instance also serves this same information as interactive OpenAPI/Swagger UI at `/api/docs` (JSON at `/api/docs-json`). Every endpoint below is also documented as an interactive page — with request/response schemas and a live "Try It" console — under **Endpoints** in the sidebar, generated directly from that same OpenAPI spec (see [Endpoints overview](/api-reference/reference/ospi-platform-api)).

## Base path

Every route below is shown relative for brevity. The real path is prefixed with `/api/v1`:

```
POST /auth/register     →  POST /api/v1/auth/register
```

The only two exceptions, which stay unprefixed and unversioned: `GET /health` (infra-level monitoring convention) and the Swagger UI/JSON (`/api/docs`, `/api/docs-json`).

## Authentication

Every authenticated route accepts a single `Authorization: Bearer <token>` header, for either:

- A **JWT access token**, issued by `POST /auth/login` or `POST /auth/register` (short-lived, ≤15 minutes) and renewed via `POST /auth/refresh`.
- An **API key**, `ospi_<clientId>.<secret>`, minted via `POST /auth/api-clients` for machine-to-machine use.

See the [Authentication guide](/guides/authentication) for the full register → login → refresh flow, and [Roles & Permissions](/guides/roles-and-permissions) for what each permission code gates.

## Response conventions

**Errors** are always:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "email must be a valid email address",
    "requestId": "b6f1c2b0-2f3e-4b9a-9b0e-1a2b3c4d5e6f"
  }
}
```

Stack traces are never sent to the client — see `GlobalExceptionFilter`.

**List endpoints** accept standard pagination/filter/sort query parameters and return:

```json
{
  "data": [ /* ... */ ],
  "meta": { "page": 1, "pageSize": 20, "total": 137, "totalPages": 7 }
}
```

| Query param | Default | Notes |
| --- | --- | --- |
| `page` | `1` | 1-indexed |
| `pageSize` | `20` | max `100` |
| `sortBy` | — | field name |
| `sortDir` | `asc` | `asc` \| `desc` |

## Idempotency

`POST /products`, `POST /products/bulk`, `POST /products/:id/serialized-units/bulk`, `POST /ospi-identities`, `POST /orders`, and `POST /orders/:id/submit` accept an opt-in `Idempotency-Key` header. Replaying the same key on the same endpoint for the same organization/actor returns the original response unchanged, marked `Idempotent-Replay: true`, instead of executing a duplicate write. Keys are scoped per organization/actor/endpoint/key with a 24-hour TTL. There is no distributed lock — two genuinely concurrent requests with the same key can still both execute.

## Rate limiting

`POST /auth/login`, `POST /auth/register`, `POST /auth/refresh`, `GET /search/resolve/:code`, and `GET /dpp/:accessToken` are rate-limited. The limiter is in-memory and per-process, not distributed — behind more than one API process the effective limit multiplies by process count.

## API sections

| Section | Covers |
| --- | --- |
| [Authentication](/api-reference/authentication) | Register, login, refresh, sessions, API keys |
| [Organizations & Roles](/api-reference/organizations-and-roles) | Organization profile, legal entities, users, custom roles, permission catalogue |
| [Producers & OSPI Codes](/api-reference/producers-and-ospi-codes) | Producer registration, Producer Codes, OSPI Identity issuance & lifecycle |
| [Products & Variants](/api-reference/products-and-variants) | Products, variants, bulk create, publication lifecycle, serialized units, translations, relationships |
| [Categories & Attributes](/api-reference/categories-and-attributes) | Category registry, attribute definitions/values, classification schemes |
| [Documents](/api-reference/documents) | Document upload/metadata, visibility |
| [Inventory](/api-reference/inventory) | Locations, stock, derived availability |
| [Connections & Sharing](/api-reference/connections-and-sharing) | Organization-to-organization connections, sharing grants, partner reads |
| [Search & Discovery](/api-reference/search) | Full-text product search, related products, OSPI code resolver |
| [Ordering & Commerce](/api-reference/ordering) | Offers, orders, order groups/lines |
| [Digital Product Passport](/api-reference/digital-product-passport) | DPP profiles, records, public access |
| [Webhooks](/api-reference/webhooks) | Event subscriptions, delivery log, retries |
