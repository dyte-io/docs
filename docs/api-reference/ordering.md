---
title: Ordering & Commerce
sidebar_position: 11
---

# Ordering & Commerce

An **Offer** is a seller's commercial listing for a product — sellable even without owning it, given an active `ORDERING` sharing grant from the owner. An **Order** splits per seller into one **OrderGroup** each, containing **OrderLines** ([ADR-011](/architecture/adr/adr-011-ordering-mvp-simplifications)).

There is no payment integration, no automatic stock reservation, and no credit-limit/contract-term validation — accepting an order is still a manual seller decision. Offers and Orders are nonetheless real commercial records; get commercial/legal sign-off before connecting real trading partners.

## Offers

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/offers` | Create an offer | `offers:write` |
| `GET` | `/offers` | List the caller's own offers | — |
| `GET` | `/products/:productId/offers` | List offers for a product | — |
| `DELETE` | `/offers/:id` | Withdraw an offer | `offers:write` |
| `POST` | `/offers/:id/buyer-minimums` | Set a buyer-specific minimum order quantity | `offers:write` |
| `GET` | `/offers/:id/buyer-minimums` | List per-buyer minimum overrides | `offers:write` |
| `DELETE` | `/offers/:id/buyer-minimums/:buyerOrganizationId` | Remove an override | `offers:write` |

A per-buyer minimum ([ADR-021](/architecture/adr/adr-021-per-buyer-offer-minimum)) replaces the offer's default `minimumQuantity` for that one buyer; `addLine` checks the override before falling back to the default.

## Orders

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/orders` | Create a draft order | `orders:write` |
| `GET` | `/orders` | List orders | — |
| `GET` | `/orders/:id` | Get one order | — |
| `POST` | `/orders/:id/lines` | Add a line, referencing an offer | `orders:write` |
| `DELETE` | `/orders/:id/lines/:lineId` | Remove a line | `orders:write` |
| `POST` | `/orders/:id/submit` | Submit the draft, creating one `OrderGroup` per seller | `orders:write` |
| `POST` | `/orders/:id/groups/:groupId/accept` | Seller accepts their group | `orders:write` |
| `POST` | `/orders/:id/groups/:groupId/reject` | Seller rejects their group | `orders:write` |
| `PUT` | `/orders/:id/groups/:groupId/status` | Move a group through `PROCESSING → FULFILLED → COMPLETE` | `orders:write` |

`OrderLine.quantity` and both `minimumQuantity` fields are `Decimal`, not integers — quantities like `4.5 kg` are representable ([ADR-024](/architecture/adr/adr-024-product-identity-lifecycle-and-decimal-quantity)).

## Walkthrough

```http
POST /api/v1/offers                                    # as A, for one of its products
POST /api/v1/orders                                     # as B → draft
POST /api/v1/orders/{id}/lines                          # as B, referencing A's offer
POST /api/v1/orders/{id}/submit                         # as B → creates one OrderGroup for A
POST /api/v1/orders/{id}/groups/{groupId}/accept        # as A
PUT  /api/v1/orders/{id}/groups/{groupId}/status        # as A: PROCESSING → FULFILLED → COMPLETE
```

`POST /orders` and `POST /orders/:id/submit` both support the `Idempotency-Key` header — see [API conventions](/api-reference#idempotency).
