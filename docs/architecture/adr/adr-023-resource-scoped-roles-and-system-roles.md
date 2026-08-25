---
title: "ADR-023: Resource-Scoped Roles and Seeded System Roles"
sidebar_label: "ADR-023"
sidebar_position: 23
---

**Status:** Accepted
**Date:** 2026-08-18
**Backlog:** priority queue item 1 — buildable without a new product decision, "natural extensions
of the existing [ADR-018] model."

## Context

ADR-018 added a management layer (create/list/assign/revoke) on top of the existing flat
`Role.permissions: string[]` model, but every role was still necessarily org-wide: holding
`products:write` meant write access to every product in the organization, with no way to grant it
for, say, one category only. The backlog called out two specific, illustrative extensions:
per-resource scoping (a role limited to one Category or one Location) and an `is_system_role` flag
with proper seeded roles beyond the wildcard Owner (e.g. "Catalog Editor," "Read Only").

While building and end-to-end testing this, two pre-existing gaps surfaced that made the feature
untestable as designed and are fixed as part of this ADR (see Consequences):
`Role` had no `@@unique([organizationId, name])` constraint despite `RolesService.create` already
having dead code to catch that exact conflict, and there was no way to add a second user to an
existing organization at all — `InviteUserDto` existed in `organizations/dto.ts`, fully defined,
never wired to any controller or service method. Without a second user, ADR-018's entire
role-assignment feature (and this one) had never actually been exercised beyond a single
always-`'*'` Owner.

## Decision

**Resource scoping.** `Role` gains optional `resourceType` (`CATEGORY | LOCATION`) and
`resourceId`, both-or-neither (validated in `RolesService`, same convention as
`SharingGrant.targetType`/`targetId`). A scoped role's permissions only apply to that one resource
instance — but scoping is only **enforced** for the one permission each type actually covers:
`CATEGORY` → `products:write`, `LOCATION` → `inventory:write` (`SCOPE_ENFORCED_PERMISSION` in
`src/auth/scope.util.ts`). `RolesService.create` rejects any other permission on a scoped role with
`400 UNSUPPORTED_SCOPED_PERMISSION` — better to refuse than silently grant unscoped access to
something the caller believed was narrowed.

Enforcement is two-tier, mirroring how `SharingService.hasAccess` is the single point that turns a
coarse grant into a fine one:
- `PermissionsGuard` (unchanged) still does the coarse "does the caller hold this permission
  anywhere" check via `AuthenticatedPrincipal.permissions` — a category-scoped Catalog Editor must
  still be able to *reach* `POST /products` before their specific category can be checked.
- `src/auth/scope.util.ts`'s `assertResourcePermission(principal, permission, resourceType,
  resourceId)` is the fine check, called once each service knows the concrete target:
  `ProductsService.create/update/addVariant` (against the product's category) and
  `InventoryService.upsertInventory` (against the location). `isScopedOnly(...)` additionally
  makes `categoryId` *required* on product creation when the caller's only `products:write` grant
  is category-scoped — there's no "default" category to silently fall back to.
- `AuthenticatedPrincipal` gained `unscopedPermissions` (permissions from `'*'` or
  `resourceType: null` roles) and `scopedPermissions` (`{permission, resourceType, resourceId}[]`
  from scoped roles), built in `AuthService.validateAccessToken`. API-client principals
  (`validateApiKey`) have no `Role`/`UserRole` at all — their `scopes` are always unscoped.

**System roles.** `Role.isSystemRole: Boolean` (seeded rows only — no endpoint creates
`organizationId: null` roles). Two are seeded in the migration itself (`INSERT` statements
alongside the `ALTER TABLE`, same file, since this is small reference data tied directly to the
schema change, not runtime state): **Catalog Editor** (`products:write`, `attributes:write`,
`classification:manage`, deliberately unscoped — an org can clone it into a category-scoped custom
role via `POST /roles` if they want the narrower version) and **Read Only** (empty
`permissions: []` — every write in this codebase is gated by a permission code and no permission
codes exist for reads, so an empty-permissions role can authenticate and read everything but pass
no write check; a legitimate "Read Only" role, not a placeholder). Both already surface through
`RolesService.list()`'s existing `organizationId: null` clause with no code change needed there.

**Closing the "no second user" gap.** `POST /organizations/me/users` (new, `org:manage`,
`InviteUserDto`) creates a user in the caller's org, requires at least one `roleId` (mirrors
`RolesService.revokeFromUser`'s existing "never leave a user with zero roles" invariant — a
freshly-invited user with zero roles could authenticate but pass no permission check, ever), and
returns a generated temporary password **once**, in the response body — the same "shown only once"
convention `AuthService.createApiClient` already uses for API key secrets. No email delivery
infrastructure exists in this build (see README/ADR notes on deferred infra elsewhere), so getting
that password to the invited user is the caller's responsibility, out of band. The created user is
`ACTIVE` immediately, not `PENDING` — there is no separate accept-invite/set-password flow to
transition out of `PENDING`, and login already rejects non-`ACTIVE` users, so leaving them
`PENDING` would create a user who can never log in.

## Consequences

- Two pre-existing bugs, found while building/testing this feature, are fixed as part of it:
  - `Role` now has `@@unique([organizationId, name])`. `RolesService.create`'s
    `ROLE_NAME_TAKEN` conflict handler predates this ADR but could never actually fire — there was
    no unique constraint to violate. Verified live: creating two roles with the same name in the
    same org now correctly returns `409`.
  - `InviteUserDto.email` gained `@IsEmail()` and `.roleIds` gained `@IsArray()`/`@ArrayNotEmpty()`/
    `@IsString({each: true})` (was previously undecorated beyond `@IsOptional()`, so a non-array
    value could slip through unvalidated) — the same DTO-validation-gap class as ADR-022's fixes,
    found by the same means (an actual HTTP round trip, not `tsc`).
- Verified end-to-end over real HTTP against a live Postgres instance: an owner creates two
  categories and a category-scoped "Editor A" role, invites a second user with it, that user logs
  in with the returned temporary password, successfully creates a product in their category,
  is rejected with `403 FORBIDDEN_SCOPE` creating one in the other category, is rejected with
  `400 CATEGORY_REQUIRED` omitting a category entirely, and is rejected with the plain coarse
  `403 FORBIDDEN` (`PermissionsGuard`) attempting `inventory:write`, which their role doesn't grant
  at all. The same sequence was repeated for a location-scoped "Stock Clerk A" role against
  `inventory:write`, with identical results.
- Still not the fuller resource/action/scope matrix Deel 21 describes: only two resource types,
  only one enforced permission per type, no scoping on `orders:write`/`offers:write`/etc., no
  multi-resource scope (a role scoped to *several* categories), no negative/deny rules. Each of
  those is a real follow-up if a concrete need for it shows up, not a silent gap in this one.
- `POST /organizations/me/users` has no rate limiting or invite-throttling of its own — it's gated
  by `org:manage` same as every other org-admin action, which was judged sufficient for the same
  reason `POST /roles` was (an org's own admin acting within their own org, not an
  external-facing surface).
