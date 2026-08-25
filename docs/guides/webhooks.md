---
title: Webhooks
sidebar_position: 7
---

# Webhooks

Instead of polling, register an HTTPS endpoint and OSPI will push events to it as they happen — a product gets published, an order is submitted, an OSPI identity changes state.

## Register an endpoint

```http
POST /api/v1/webhooks
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://erp.acme.example/hooks/ospi",
  "eventTypes": ["product.published", "order.submitted"],
  "secret": "whsec_..."
}
```

Event types follow `<entity>.<event>` — the entities are `identity`, `product`, and `order`.

## Verify the signature

Every delivery is HMAC-signed with the subscription's `secret`. Recompute the signature over the raw request body before trusting a payload — never process a webhook body you haven't verified.

## Delivery, retries, and dead-lettering

Deliveries are queued durably (Postgres-backed) and dispatched from a periodic background sweep, never inline in the request that triggered the event — so a slow or unreachable endpoint on your side never slows down or fails a write on OSPI's side. A failing delivery retries with exponential backoff; after **8 failed attempts** it's dead-lettered.

```http
GET  /api/v1/webhooks/{id}/deliveries
POST /api/v1/webhooks/deliveries/{deliveryId}/retry
```

Use these to inspect what was sent, what your endpoint returned, and to manually replay a dead-lettered delivery once your endpoint is fixed.

## Scope

This is your organization's own outbound channel — events about *your* data. It is not (yet) a subscription to a partner's category- or brand-scoped data stream; that broader distribution model is on the roadmap but unbuilt. For now, use [Sharing Grants](/api-reference/connections-and-sharing) plus polling `GET /partner/organizations/:orgId/products` for cross-organization data changes.

See [API Reference → Webhooks](/api-reference/webhooks) for the full endpoint list.
