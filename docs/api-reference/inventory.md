---
title: Inventory
sidebar_position: 8
---

# Inventory

Owner-scoped locations and stock records ([ADR-009](/architecture/adr/adr-009-inventory-record-shape)).

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/locations` | Create a location | `inventory:write` |
| `GET` | `/locations` | List locations | — |
| `GET` | `/locations/:id/inventory` | List inventory records at a location | — |
| `PUT` | `/products/:productId/inventory` | Upsert a product's stock at a location | `inventory:write` |
| `GET` | `/products/:productId/inventory` | List a product's inventory across locations | — |

## Upsert stock

```http
PUT /api/v1/products/{productId}/inventory
Authorization: Bearer <token>
Content-Type: application/json

{
  "locationId": "loc_...",
  "quantityOnHand": 480,
  "quantityReserved": 12,
  "visibility": "PARTNER_ONLY",
  "quantityDisplayMode": "EXACT"
}
```

## Derived availability

`availableQuantity` and `availabilityStatus` are **never stored** — they are always computed at read time from the stock quantities, via pure functions shared with the OSPI code engine's testing approach. This means availability is always consistent with the latest stock write, with no separate reconciliation step.

## Partner visibility

`InventoryRecord.visibility` and `quantityDisplayMode` control what a connected partner organization sees through `GET /partner/organizations/:orgId/products/:productId/inventory` (see [Connections & Sharing](/api-reference/connections-and-sharing)) — e.g. an owner can expose only an availability status ("In stock" / "Low stock" / "Out of stock") without revealing exact quantities.
