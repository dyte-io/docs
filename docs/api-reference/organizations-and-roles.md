---
title: Organizations & Roles
sidebar_position: 3
---

# Organizations & Roles

An Organization is the tenant. Every row elsewhere in the API is scoped to one, either directly or transitively.

## Organization & legal entities

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `GET` | `/organizations/me` | Get the caller's own organization | — |
| `PATCH` | `/organizations/:id` | Update organization profile | `org:manage` |
| `GET` | `/organizations/me/legal-entities` | List legal entities | — |
| `POST` | `/organizations/me/legal-entities` | Add a legal entity | `org:manage` |

## Users

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `GET` | `/organizations/me/users` | List users in the caller's organization | `org:manage` |
| `POST` | `/organizations/me/users` | Invite a second user (needed before any role beyond the sole Owner exists) | `org:manage` |
| `GET` | `/organizations/me/roles` | List roles available in the organization | — |

Every organization is created with exactly one user — its Owner, holding the `'*'` wildcard permission. `POST /organizations/me/users` is what makes a second user, and therefore custom/scoped roles, possible at all.

## Roles & permissions

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `GET` | `/permissions` | The canonical, enforced permission catalogue | — |
| `POST` | `/roles` | Create a custom role | `roles:manage` |
| `GET` | `/roles` | List roles | — |
| `GET` | `/users/:userId/roles` | List a user's roles | — |
| `POST` | `/users/:userId/roles` | Assign a role to a user | `roles:manage` |
| `DELETE` | `/users/:userId/roles/:roleId` | Revoke a role from a user | `roles:manage` |

### Permission catalogue

`GET /permissions` returns the flat list every `@RequirePermissions(...)` check actually enforces:

```json
[
  "producers:write", "products:write", "orders:write", "offers:write",
  "connections:write", "inventory:write", "org:manage", "dpp:manage",
  "documents:write", "attributes:write", "classification:manage",
  "sharing:write", "roles:manage", "webhooks:manage", "categories:govern"
]
```

`'*'` is a separate wildcard — not a real resource permission — that grants every permission within the caller's own organization; it's what the seeded Owner role holds.

A role can additionally be scoped to a single Category or Location (enforced for `products:write` and `inventory:write`), and two system roles — **Catalog Editor** and **Read Only** — are seeded for every organization automatically.

`categories:govern` is cross-organization by design: it approves or rejects proposals for the *shared* global category registry, not the granting organization's own data. There is no separate "platform tenant" concept beyond an env-configured `PLATFORM_OPERATOR_ORG_ID` — grant it only to roles in the platform operator's own bootstrap organization.

### Create a custom role

```http
POST /api/v1/roles
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Inventory Manager",
  "permissions": ["inventory:write", "products:write"]
}
```
