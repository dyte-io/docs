---
title: "ADR-025: Idempotency-Key Support for Commitment-Creating Writes"
sidebar_label: "ADR-025"
sidebar_position: 25
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 2 (cross-cutting infrastructure)
of the self-directed build sequence (`BACKLOG.md`) — built early because later phases (Quote,
distribution/partner-sync) create financially/contractually meaningful records too, and should be
able to opt into this mechanism rather than each retrofitting their own.

## Context

Deel 5 §30, Deel 8 §35-37, and Constitution §26 all describe the same requirement: a client that
retries a write after a timeout or dropped connection (never knowing whether the original request
actually landed) must be able to signal "this is the same attempt, not a new one" via an
`Idempotency-Key` header, scoped per (organization, actor, endpoint). Without it, a retried
`POST /orders` or `POST /ospi-identities` after a network blip can silently create a duplicate
order or a duplicate identity — the exact class of bug the spec calls out by name.

## Decision

- **Opt-in per route** via `@Idempotent()` (`IDEMPOTENT_KEY` metadata), enforced by a single global
  `IdempotencyInterceptor` (`APP_INTERCEPTOR`) — not a guard, since it needs to intercept and
  replay the *response*, not just allow/deny the request. A route without the decorator is
  completely unaffected, including a request that happens to carry the header.
- **The header itself is optional even on a decorated route.** `@Idempotent()` means "this
  endpoint honors the header if present," never "this header is required." A caller that omits it
  gets ordinary (non-deduplicated) behavior — this is additive, not a breaking change to any
  existing caller.
- **Cache key** is `idempotency:{organizationId}:{actorType}:{actorId}:{ControllerName}.{handlerName}:{key}`
  — Deel 8 §36's exact scoping (organization + actor + endpoint), built from `request.principal`
  rather than trusting a client-supplied org/actor value.
- **Only successful responses are cached.** A validation error or business-rule rejection (400,
  403, 409, etc.) is safe to simply retry as-is, since it created nothing — caching it would only
  make a transient failure sticky for no benefit. Verified live: two calls with the same key and an
  invalid body both executed and returned distinct `requestId`s, neither was replayed.
- **Only the response BODY is cached, not the raw HTTP status.** Nest computes a route's status
  code the same way on every call (from the route's own decorators/defaults, e.g. `201` for a
  bare `@Post()`), so replaying the cached body through the normal response pipeline reproduces the
  original status for free — without the interceptor reaching into the `Response` object to set
  status/headers itself, which risks a "headers already sent" double-write if the timing is wrong
  anywhere in the pipeline. A replayed response additionally sets `Idempotent-Replay: true` so a
  caller (or this ADR's own verification) can distinguish a replay from a fresh execution even when
  the body is identical.
- **24-hour TTL** in Redis (`src/redis/`, a new `@Global()` `RedisModule`/`RedisService` wrapping
  `ioredis` — the first real Redis usage in this build; `RateLimitGuard` remains deliberately
  in-memory/per-process and untouched by this change) — Deel 8 §37's "retry safety" window, long
  enough to cover realistic retry/backoff behavior without keeping every request body forever.
- **Applied to the endpoints that create a real, would-be-duplicated commitment**: `POST /products`,
  `POST /products/bulk`, `POST /products/:id/serialized-units/bulk`, `POST /ospi-identities`,
  `POST /orders` (draft creation), and `POST /orders/:id/submit` (the actual "creates a commitment"
  moment — splits a draft into per-seller `OrderGroup`s). Read endpoints, status-transition actions
  without a create side-effect (`accept`/`reject`/`publish`/etc.), and `DELETE`s were left
  undecorated — they're either already naturally idempotent or don't create a new row that a retry
  could duplicate.

**Known, accepted limitation — no distributed lock.** Two truly concurrent requests carrying the
same key can both reach the handler before either has cached a result, so both execute; this closes
the "sequential retry after a timeout" case (the common real-world one) but not a genuine race.
Closing that fully needs a `SETNX`-style lock with a wait/retry loop around the handler call, which
is real additional complexity — flagged as a gap rather than silently assumed solved, and left for
a follow-up if a concrete need for it shows up.

## Consequences

- Verified end-to-end over real HTTP against a live Postgres + Redis instance: `POST
  /ospi-identities` sent twice with the same `Idempotency-Key` returned the byte-identical body
  (same `id`, same `createdAt`) on both calls, the second carrying `Idempotent-Replay: true`; the
  database confirmed exactly **one** row was created despite two calls. The same request repeated
  with *no* `Idempotency-Key` header correctly created a genuinely new attempt each time — and the
  second one was independently rejected by the pre-existing `DUPLICATE_COMPANY_PRODUCT_ID` business
  rule, confirming the interceptor doesn't interfere with routes/requests that don't opt in.
- `ioredis` added as a new runtime dependency; `REDIS_URL` added to `.env.example`
  (`redis://localhost:6379` default, matching the existing `DATABASE_URL` pattern).
- This is the first feature in the build with a genuine external-service dependency beyond
  Postgres. If Redis is unreachable, `RedisService.onModuleInit` fails fast at boot (no silent
  fallback to "idempotency disabled") — consistent with `PlatformOperatorGuard`'s fail-closed
  precedent elsewhere in this codebase, but worth naming explicitly since it's a new operational
  dependency for whoever deploys this.
