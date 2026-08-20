---
title: Roles & permissions
sidebar_position: 8
---

# Roles & permissions

## The permission catalogue

Every permission check in the API is against one of a fixed, real set of codes — there's no free-text permission string that happens to not gate anything:

```
producers:write   products:write     orders:write        offers:write
connections:write inventory:write    org:manage          dpp:manage
documents:write   attributes:write   classification:manage
sharing:write     roles:manage       webhooks:manage      categories:govern
```

Fetch the live list at any time with `GET /permissions`.

`'*'` is a separate wildcard, not one of the codes above — it grants every permission within your own organization, and it's what the automatically-seeded **Owner** role holds.

## Seeded roles

Every organization gets two additional system roles for free, alongside its Owner:

- **Catalog Editor** — product/category/inventory-oriented write access.
- **Read Only** — no write permissions.

## Custom roles

```http
POST /api/v1/roles
Authorization: Bearer <token>
Content-Type: application/json

{ "name": "Inventory Manager", "permissions": ["inventory:write", "products:write"] }
```

```http
POST /api/v1/users/{userId}/roles
Authorization: Bearer <token>
Content-Type: application/json

{ "roleId": "rol_..." }
```

## Scoping a role to one Category or Location

A role can be narrowed to a single Category or Location — enforced specifically for `products:write` and `inventory:write`. A user with `products:write` scoped to Category X can edit products in X, but a `403 FORBIDDEN_SCOPE` if they try to move a product into a category they aren't scoped to, or edit a product with no category at all while scoped-only.

## `categories:govern` is different from everything else

Every other permission governs data *inside your own organization*. `categories:govern` is the one exception — it approves or rejects **global** category proposals for the shared registry used across every organization on the platform. There's no separate "platform tenant" flag; a `PLATFORM_OPERATOR_ORG_ID` environment variable on the server gates the governance routes to one organization. Grant this permission deliberately, and only within that organization.

See [API Reference → Organizations & Roles](/api-reference/organizations-and-roles) for the full endpoint list.
