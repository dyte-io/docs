---
title: Authentication
sidebar_position: 2
---

# Authentication

Human users authenticate with JWT access/refresh token pairs; machines authenticate with API keys. Both are presented the same way: `Authorization: Bearer <token>`.

## Endpoints

| Method | Path | Description | Auth |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | Create a new Organization + Owner user, returns a token pair | none |
| `POST` | `/auth/login` | Exchange email/password for a token pair | none |
| `POST` | `/auth/refresh` | Exchange a refresh token for a new access token | none |
| `POST` | `/auth/logout` | Revoke the current session | Bearer |
| `POST` | `/auth/logout-all` | Revoke every session for the current user (Deel 21 §42) | Bearer |
| `GET` | `/auth/sessions` | List active sessions (device/IP metadata) | Bearer |
| `DELETE` | `/auth/sessions/:id` | Revoke one session | Bearer |
| `POST` | `/auth/api-clients` | Mint a new `ospi_<clientId>.<secret>` API key | Bearer + `org:manage` |

## Register

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "organizationName": "Acme Manufacturing",
  "email": "owner@acme.example",
  "password": "at-least-8-characters",
  "firstName": "Ada",
  "lastName": "Lovelace"
}
```

Creates the Organization, its Owner user (seeded with the `'*'` wildcard permission), and returns a token pair:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "d1b2c3...",
  "expiresIn": 900
}
```

## Login / refresh

```http
POST /api/v1/auth/login
Content-Type: application/json

{ "email": "owner@acme.example", "password": "at-least-8-characters" }
```

```http
POST /api/v1/auth/refresh
Content-Type: application/json

{ "refreshToken": "d1b2c3..." }
```

Access tokens expire in ≤15 minutes; refresh tokens back a `Session` row with an absolute 7-day cap. Revoking a session (`DELETE /auth/sessions/:id` or `POST /auth/logout[-all]`) blocks future refreshes immediately, but an already-issued access token keeps working for its own remaining TTL — a deliberate, bounded-exposure trade-off, not an oversight.

## API keys (machine-to-machine)

```http
POST /api/v1/auth/api-clients
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "ERP sync",
  "scopes": ["products:write", "inventory:write"]
}
```

`scopes` is validated against the real, enforced permission catalogue (see [Roles & Permissions](/guides/roles-and-permissions)) — `'*'` grants full org-wide access, equivalent to the Owner role. Requires `org:manage` on the caller.

The resulting key is used exactly like a JWT: `Authorization: Bearer ospi_<clientId>.<secret>`.
