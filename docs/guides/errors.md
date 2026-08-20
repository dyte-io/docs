---
title: Errors
sidebar_position: 5
---

# Errors

Every error response, from every endpoint, has the same shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "email must be a valid email address",
    "requestId": "b6f1c2b0-2f3e-4b9a-9b0e-1a2b3c4d5e6f"
  }
}
```

- **`code`** — a stable, machine-readable string derived from the HTTP status (e.g. `VALIDATION_ERROR` for 400, `NOT_FOUND` for 404, `FORBIDDEN` for 403).
- **`message`** — human-readable, safe to show a developer. Validation failures on multiple fields are joined into one string.
- **`requestId`** — echoes the `X-Request-Id` header you sent, or a generated UUID if you didn't send one. Include it when reporting an issue — it's what the server logs against internally.

Internal stack traces and unexpected exceptions are never sent to the client — an unhandled error still returns this exact shape with `code: "INTERNAL_ERROR"`.

## Common status codes

| Status | Meaning |
| --- | --- |
| `400` | Validation failed, or a business rule rejected the request (e.g. publishing a product that isn't ready) |
| `401` | Missing or invalid `Authorization` header |
| `403` | Authenticated, but missing the required permission |
| `404` | Resource doesn't exist, or exists in another organization you can't see |
| `409` | Conflict — a stale optimistic-concurrency write, an idempotency key reused with different attributes, or an attempted overwrite of a `VERIFIED` attribute value |
| `429` | Rate limited (see [Idempotency & rate limits](/guides/idempotency-and-rate-limits)) |

## A note on 404 vs. 403

Reading a resource that belongs to another organization returns `404`, not `403` — the API doesn't reveal whether a resource exists in a tenant you can't see.
