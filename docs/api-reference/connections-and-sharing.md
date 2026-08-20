---
title: Connections & Sharing
sidebar_position: 9
---

# Connections & Sharing

This is the entire access-control model for cross-organization data. A **Connection** is the umbrella relationship between two organizations; a **Sharing Grant** riding on an `ACTIVE` connection scopes exactly what's visible. Read [ADR-010](/architecture/adr/adr-010-sharing-scope-model) and [ADR-022](/architecture/adr/adr-022-rule-based-sharing-scopes) before connecting two real organizations.

## Connections

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/connections` | Request a connection to another organization | `connections:write` |
| `GET` | `/connections` | List the caller's connections | — |
| `POST` | `/connections/:id/accept` | Accept an incoming request | `connections:write` |
| `POST` | `/connections/:id/reject` | Reject an incoming request | `connections:write` |
| `POST` | `/connections/:id/suspend` | Suspend an active connection | `connections:write` |
| `POST` | `/connections/:id/terminate` | Terminate a connection | `connections:write` |

Lifecycle: `REQUESTED → ACTIVE` (via accept) or `REQUESTED → REJECTED`, and `ACTIVE → SUSPENDED → ACTIVE` or `→ TERMINATED`.

## Sharing grants

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/sharing-grants` | Create a grant on an active connection | `sharing:write` |
| `GET` | `/sharing-grants` | List grants | — |
| `DELETE` | `/sharing-grants/:id` | Revoke a grant | `sharing:write` |

```http
POST /api/v1/sharing-grants
Authorization: Bearer <token>
Content-Type: application/json

{
  "connectionId": "cnx_...",
  "targetType": "ALL_PRODUCTS",
  "dataCategories": ["PRODUCT_DATA", "INVENTORY"],
  "ruleFilter": { "attributes": [{ "code": "region", "equals": "EU" }] }
}
```

`targetType` is `PRODUCT`, `PRODUCT_CATEGORY`, or `ALL_PRODUCTS`. `ruleFilter` ([ADR-022](/architecture/adr/adr-022-rule-based-sharing-scopes)) additionally ANDs an attribute-based rule onto that targeting — e.g. "everything tagged `region=EU`". Rules are a flat AND list only; there is no OR/negation or rule grouping yet.

`SharingService.hasAccess(...)` is the single enforcement point used by every cross-organization read below.

## Partner-facing reads

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/partner/organizations/:organizationId/products` | Products another organization has shared with you |
| `GET` | `/partner/organizations/:organizationId/products/:productId` | One shared product |
| `GET` | `/partner/organizations/:organizationId/products/:productId/inventory` | Its inventory, filtered through `quantityDisplayMode` |
| `GET` | `/partner/organizations/:organizationId/products/:productId/documents` | Its documents, filtered by document `visibility` |

## Walkthrough: connect two organizations

```http
POST /api/v1/connections                     # as A, targeting B's org ID → REQUESTED
POST /api/v1/connections/{id}/accept          # as B → ACTIVE
POST /api/v1/sharing-grants                   # as A: targetType ALL_PRODUCTS, dataCategories [PRODUCT_DATA, INVENTORY]
GET  /api/v1/partner/organizations/{aOrgId}/products   # as B — now returns A's products
```

To also trade, continue with [Ordering & Commerce](/api-reference/ordering) — an `Offer` requires an active `ORDERING` sharing grant if the seller doesn't own the product.
