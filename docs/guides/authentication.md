---
title: Authentication
sidebar_position: 3
---

# Authentication

The API has exactly one way to authenticate a request — a single `Authorization: Bearer <token>` header — but two kinds of token behind it.

## JWTs, for people

`POST /auth/register` and `POST /auth/login` both return a token pair:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "d1b2c3...",
  "expiresIn": 900
}
```

- The **access token** goes in `Authorization: Bearer <accessToken>` and is short-lived — 15 minutes or less.
- The **refresh token** goes to `POST /auth/refresh` to get a new access token, without asking the user to log in again.

Each refresh token backs a `Session` row (device/IP metadata, absolute 7-day expiry). `GET /auth/sessions` lists them; `DELETE /auth/sessions/:id` or `POST /auth/logout-all` revokes them. Revocation blocks *future* refreshes immediately, but an access token already in flight keeps working until its own natural expiry — plan for a ≤15 minute window between "I revoked this session" and "every request using it actually fails."

## API keys, for machines

For a server-to-server integration (an ERP sync, a scheduled import), don't share a human's JWT — mint a dedicated API key instead:

```http
POST /api/v1/auth/api-clients
Authorization: Bearer <token>
Content-Type: application/json

{ "name": "ERP sync", "scopes": ["products:write", "inventory:write"] }
```

The response includes a key formatted `ospi_<clientId>.<secret>` — store it like a password, it's shown once. Use it exactly like a JWT: `Authorization: Bearer ospi_<clientId>.<secret>`.

`scopes` must be real, enforced permission codes (see [Roles & Permissions](/guides/roles-and-permissions)) — minting a key requires `org:manage`, and the scopes you request are capped at what your own role can grant.

## Choosing between them

| | JWT | API key |
| --- | --- | --- |
| Who | A human, via login | A service/integration |
| Lifetime | Minutes (access) / days (refresh) | Until revoked |
| Revocation | Per session, near-immediate for refresh | `DELETE` the client |
| Scoping | Whatever the user's role grants | Explicit `scopes[]`, capped at the caller's own permissions |

See [API Reference → Authentication](/api-reference/authentication) for the full endpoint list.
