---
title: Webhooks
sidebar_position: 13
---

# Webhooks

An organization registers its own HTTPS endpoint and event types, and gets HMAC-signed, thin-payload notifications with exponential-backoff retries and dead-lettering after 8 attempts ([ADR-026](/architecture/adr/adr-026-webhooks)).

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/webhooks` | Register a subscription | `webhooks:manage` |
| `GET` | `/webhooks` | List subscriptions | — |
| `DELETE` | `/webhooks/:id` | Remove a subscription | — |
| `GET` | `/webhooks/:id/deliveries` | Delivery log | — |
| `POST` | `/webhooks/deliveries/:deliveryId/retry` | Manually retry one delivery | — |

## Register a subscription

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

Event types follow an `<entity>.<event>` pattern: `identity.*`, `product.*`, `order.*`.

## Delivery

Deliveries are queued durably in Postgres and dispatched from a periodic sweep — **never inline** in the request that triggered the event, so an unreachable partner endpoint can't slow down or fail an OSPI write. Each payload is signed with HMAC using the subscription's secret; verify the signature before trusting a delivery. After 8 failed attempts a delivery is dead-lettered and must be retried manually via `POST /webhooks/deliveries/:deliveryId/retry`.

This covers an organization's own outbound channel only (Deel 5/8). The separate category/brand-scoped partner-distribution subscription model (Deel 14) is not built yet.
