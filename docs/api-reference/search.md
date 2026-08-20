---
title: Search & Discovery
sidebar_position: 10
---

# Search & Discovery

## Endpoints

| Method | Path | Description | Auth |
| --- | --- | --- | --- |
| `GET` | `/search/products` | Full-text product search | Bearer |
| `GET` | `/search/products/:id/related` | Related products via shared category/classification | Bearer |
| `GET` | `/search/resolve/:code` | OSPI Code Resolver | none (optional) |

## Product search

```http
GET /api/v1/search/products?q=stainless+bottle&scope=network
Authorization: Bearer <token>
```

`GET /search/products` runs directly against PostgreSQL full-text search — there is no dedicated search engine behind it ([ADR-012](/architecture/adr/adr-012-search-postgres-fts)). Default `scope` is the caller's own organization. `?scope=network` additionally includes products from organizations that granted the caller an active `PRODUCT_DATA` sharing grant scoped `ALL_PRODUCTS` or `PRODUCT_CATEGORY` — individual `PRODUCT`-targeted grants are deliberately excluded from this general listing (folding those in would be an unbounded per-candidate-grant cost without a real search index); they're still reachable via the [Partner endpoints](/api-reference/connections-and-sharing#partner-facing-reads).

## Resolver

```http
GET /api/v1/search/resolve/OSPI-ACME-123456-00012345-0001-00000001-1-K3F
```

Reachable **without login** — matches the "scan a code, no login" use case (Deel 4 §26-27). An OSPI code and its basic identity (name, category, manufacturer) are treated as public registry data. Returns the full chain: code → product → manufacturer → variants → documents.

What *is* access-controlled is each attached document's `visibility` — `PUBLIC` documents always come back, `RESTRICTED` ones only once the caller (if authenticated) holds an active `CONTENT` grant, `PRIVATE` ones never come back through this endpoint. This endpoint is rate-limited (see [API conventions](/api-reference#rate-limiting)).
