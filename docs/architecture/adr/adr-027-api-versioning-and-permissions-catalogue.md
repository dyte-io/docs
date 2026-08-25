---
title: "ADR-027: `/api/v1/` Global Prefix and `GET /permissions` Catalogue"
sidebar_label: "ADR-027"
sidebar_position: 27
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 2 (cross-cutting infrastructure)
of the self-directed build sequence (`BACKLOG.md`) — items 9 and 10, bundled here as both are small,
independent infra wins with no shared code, following the same pattern ADR-024 used for bundling
unrelated small findings that touch nothing else in common.

## Context

Two concrete, unambiguous findings from the re-audit:

1. **No API version prefix** (Deel 5 §6-8, explicitly a "Definition of Done" item) — the spec's own
   base-structure example is literal: `/api/v1/organizations`, `/api/v1/products`, etc., with §7's
   principle that "a breaking change may never be silently introduced into `/v1`" — i.e. this only
   works as a real safety net if it's in place *before* the first breaking change, not retrofitted
   after. Every route in this build was, until now, mounted at the bare root (`/products`,
   `/auth/register`, etc.).
2. **No `GET /permissions` catalogue endpoint** (Deel 9 §67, Deel 25 §126) — `PERMISSIONS`
   (`src/auth/permissions.ts`) already exists as the enforced, single source of truth for every
   `@RequirePermissions(...)` check and for `RolesService`'s own custom-role validation, but nothing
   exposed it over HTTP — a caller building a role-creation UI had to hardcode or guess the list.

## Decision

**`/api/v1/` global prefix** (`app.setGlobalPrefix('api/v1', { exclude: ['health'] })` in
`main.ts`) — applied to every controller route. Two deliberate exclusions:
- **`GET /health`** stays at the bare path — infra-level monitoring convention (load
  balancers/orchestrators expect a stable, version-independent health-check path that doesn't move
  when the API's major version does).
- **Swagger UI/JSON** (`/api/docs`, `/api/docs-json`) are unaffected — `SwaggerModule.setup` mounts
  its own middleware outside the standard controller pipeline, so `setGlobalPrefix` doesn't reach
  it; confirmed live, not assumed. This is also the *right* behavior, not just an artifact: the docs
  describe the versioned API, but documentation tooling isn't itself part of the versioned resource
  contract.

Everything else — every domain controller, `POST /auth/register` through the webhooks/DPP surface
added this session — now lives under `/api/v1/...`. The bare (unprefixed) paths this build used
until now all correctly 404.

**`GET /permissions`** (`RolesController`, no special permission required — any authenticated
caller can read the catalogue, same access level as the existing `GET /roles`) returns
`{ permissions: PERMISSIONS, wildcard: WILDCARD_PERMISSION }` directly from the existing canonical
array — no new data, no duplication, just exposing what already governs every permission check in
the codebase.

## Consequences

- **README route references were left as-is (not mechanically rewritten to add `/api/v1/`)** — the
  README documents dozens of routes across every feature section; a global find-and-replace-style
  edit across all of them is exactly the kind of large, low-value, typo-risking mechanical diff this
  build has avoided elsewhere. A single prominent note was added instead pointing at this ADR and
  stating the real, current base path. The code (and the live-verified Swagger doc) is the source of
  truth; the README's per-route examples remain correct as *relative resource paths*.
- Verified end-to-end against a live, freshly-booted app: `GET /health` still answers unprefixed;
  `GET /api/docs` and `GET /api/docs-json` still work and the JSON's own `paths` correctly show
  `/health` unprefixed alongside `/api/v1/auth/register` etc. for every other route; the old bare
  `POST /auth/register` now 404s; the new `POST /api/v1/auth/register` works end-to-end (real
  organization + user created, real JWT pair issued); `GET /permissions` (behind the new prefix,
  with normal auth) returns the full, current 15-entry catalogue including `webhooks:manage`
  (added earlier this session for ADR-026), confirming it reads live from the enforced array rather
  than a stale copy.
- This is a breaking change for any existing caller of this API — by design, and precisely the
  point of doing it now rather than later (Deel 5 §7): every route moved in one atomic change while
  there are zero real external consumers yet, instead of moving some routes under `/v1` months from
  now while others stay at the root out of inertia.
