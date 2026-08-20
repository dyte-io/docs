---
title: "ADR-016: In-Memory, Opt-In Rate Limiting on Unauthenticated Endpoints"
sidebar_label: "ADR-016"
sidebar_position: 16
---

**Status:** Accepted — explicitly ratified by product owner (2026-08-17): a single-process, non-distributed limiter is acceptable for first launch; upgrading to a Redis-backed distributed limiter is deferred until it's actually needed, not a launch blocker.
**Date:** 2026-08-17

## Context

ADR-013 (DPP public access token), ADR-014 (code resolution visibility), and ADR-015
(serialized units) each flagged the same follow-up: no rate limiting exists anywhere in this
build, and several endpoints are reachable without authentication (`GET /dpp/:accessToken`,
`GET /search/resolve/:code`) or without it being required (`POST /auth/login`,
`POST /auth/register`, `POST /auth/refresh`). Entropy alone (DPP's 256-bit token) or a
producer's own visibility choice (`resolve/:code`'s `Document.visibility` enforcement) reduces
what an attacker gains from guessing, but neither stops someone from simply making a very large
number of requests — that has always needed a request-rate control, not an access-control one.

The normal production answer (`@nestjs/throttler` backed by Redis, or an edge/CDN-level
limiter) isn't buildable in this sandbox: there is no network access to install new npm
packages, and Redis itself isn't provisioned (ADR-001 already deferred Redis/BullMQ until the
first async job needed it). Waiting for that infrastructure before shipping any rate limiting
at all would leave the endpoints above with zero request-rate protection indefinitely.

## Decision

A small, dependency-free `RateLimitGuard` (`src/common/guards/rate-limit.guard.ts`), registered
as a fourth global guard alongside `AuthGuard`/`PermissionsGuard`. It is **opt-in**: a route is
only limited if annotated with `@RateLimit({ points, windowSeconds })`; every other route is an
unaffected pass-through. Applied to:

- `POST /auth/register` (10/min), `POST /auth/login` (10/min), `POST /auth/refresh` (20/min) —
  classic brute-force/abuse targets, `@Public()` by necessity.
- `GET /search/resolve/:code` (30/min) — the endpoint ADR-014 explicitly reasoned should stay
  reachable without login, with rate limiting as the actual mitigation against
  `companyProductId` enumeration (not the login wall ADR-014 deliberately avoided).
- `GET /dpp/:accessToken` (60/min, higher allowance) — token entropy is already the primary
  defense (ADR-013); this is defense-in-depth, not the main control, hence the looser limit.

Enforcement is a fixed-window counter, keyed by organization for authenticated callers
(`request.principal.organizationId`, so one shared office IP doesn't throttle an entire
authenticated org) and by IP for unauthenticated callers (`x-forwarded-for` first hop, falling
back to the socket address) — which is the case that actually matters for the endpoints above,
since none of them require a principal to be reachable at all.

## Consequences

- **Explicitly not distributed.** Each API process holds its own in-memory counters. With N
  processes behind a load balancer, the effective per-caller limit is `points * N`, not
  `points`. This is a real, stated limitation — acceptable for a single-process MVP deployment
  or as defense-in-depth behind an edge/CDN limiter, but **must be replaced with a Redis-backed
  limiter before this build runs as more than one process in production.**
- `x-forwarded-for` is trusted as given — this build has no reverse-proxy configuration that
  strips/normalizes it, so a client could in principle spoof it to evade IP-based limiting when
  not sitting behind a proxy that overwrites the header. A production deployment must ensure
  only the actual edge proxy can set this header.
- Memory is bounded opportunistically (a sweep of expired entries triggers once the tracked-key
  count crosses 50,000) rather than via a scheduled job — acceptable at MVP scale, worth
  revisiting if this becomes a high-traffic public surface.
- `429 Too Many Requests` responses use this build's standard error envelope (`{ error: { code:
  'RATE_LIMITED', message } }`), consistent with `GlobalExceptionFilter`.
