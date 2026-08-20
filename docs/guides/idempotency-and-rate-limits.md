---
title: Idempotency & rate limits
sidebar_position: 6
---

# Idempotency & rate limits

## Idempotency

Network retries are normal — a client that times out waiting for a response to `POST /orders` genuinely doesn't know whether the order was created. Rather than risk a duplicate, opt in with an `Idempotency-Key` header:

```http
POST /api/v1/orders
Authorization: Bearer <token>
Idempotency-Key: 6b1f5e2a-...
Content-Type: application/json

{ ... }
```

Retry the exact same request with the same key, and you get back the *original* response, unchanged, marked with an `Idempotent-Replay: true` header — not a second order.

**Where it's supported:** `POST /products`, `POST /products/bulk`, `POST /products/:id/serialized-units/bulk`, `POST /ospi-identities`, `POST /orders`, `POST /orders/:id/submit`. These are exactly the endpoints that create a real, hard-to-undo commitment.

**Scope and TTL:** a key is scoped per organization, per actor (user or API client), per endpoint — the same key on a different endpoint is a different idempotency record. Keys expire after 24 hours.

**Known limitation:** there is no distributed lock behind this. Two genuinely concurrent requests carrying the same key can both execute before either response is recorded. Don't rely on it as a substitute for a unique constraint on data that must never duplicate.

Use a fresh UUID per logical operation, generated once on the client (not regenerated on each retry attempt).

## Rate limits

A small set of endpoints are rate-limited, mostly ones that are either unauthenticated or security-sensitive:

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/refresh`
- `GET /search/resolve/:code`
- `GET /dpp/:accessToken`

Exceeding the limit returns `429`. The limiter is **in-memory and per-process**, not distributed — if the platform is ever deployed behind a load balancer with more than one API process, the effective limit multiplies by the number of processes. Treat the documented limit as a floor, not a guaranteed ceiling, in a multi-process deployment.
