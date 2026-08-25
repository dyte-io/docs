---
title: Quickstart
sidebar_position: 2
---

# Quickstart

This walks through the smallest real path from nothing to a product with a resolvable OSPI code, using the actual endpoints of the [`ospi-platform`](https://github.com/BrickeVD/ospi-platform) API. All paths are relative to `/api/v1`.

## 1. Register an organization

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "organizationName": "Acme Manufacturing",
  "email": "owner@acme.example",
  "password": "at-least-8-characters"
}
```

Returns a JWT access/refresh token pair. Use the access token as `Authorization: Bearer <token>` on every call below. See [Authentication](/guides/authentication) for the full token lifecycle.

## 2. Register as a producer and get a Producer Code

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

## 3. Create a product — this mints its OSPI code in the same call

```http
POST /api/v1/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Stainless Steel Water Bottle 750ml",
  "identity": {
    "producerCodeId": "{producerCodeId}",
    "categoryCode": "123456",
    "companyProductId": "00012345"
  }
}
```

The response includes the product and its newly issued `OspiIdentity` — the full code, checksum included.

## 4. Look it up like a scanner would

```http
GET /api/v1/search/resolve/{code}
```

No `Authorization` header needed — this is the public resolver, matching a real "scan the code" flow.

## What's next

- [Full API reference](/api-reference) for every resource shown above, plus categories, attributes, documents, and inventory.
- [Connections & Sharing](/api-reference/connections-and-sharing) once you need a second organization to see this product.
- [Ordering & Commerce](/api-reference/ordering) once you need to actually sell it.
