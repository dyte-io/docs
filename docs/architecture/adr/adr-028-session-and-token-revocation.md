---
title: "ADR-028: Session Tracking and Token Revocation"
sidebar_label: "ADR-028"
sidebar_position: 28
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 2 (cross-cutting infrastructure)
of the self-directed build sequence (`BACKLOG.md`) — item 8, the last item in Phase 2.

## Context

Deel 21 §42-44 requires, concretely:

- Sessions must be **revocable**, have an **expiration**, carry **device/session info**, and be
  **auditable**.
- A user must be able to **"log out from all devices."**
- Access tokens: short-lived, limited scope, carry organization context (already true — 15 min TTL,
  `organizationId` in the JWT payload since the original build).
- Refresh tokens must be **securely managed**.
- OSPI must be able to **revoke tokens** in a security incident.

Before this change, refresh tokens were purely stateless signed JWTs — `AuthService.refresh()`
checked only the signature and the user's still-`ACTIVE` status. There was no server-side record of
a "session" at all: no way to list active logins, no way to revoke one, and no way to log out
everywhere short of rotating `JWT_SECRET` (which would also invalidate every OTHER user's tokens).

## Decision

**One `Session` row per issued refresh token**, not per access token. This maps directly onto what
a user actually means by "a device I'm logged in on" — the login-to-logout lifetime, not each
15-minute access-token renewal within it. `refresh()` reuses the SAME session id on every renewal
(`sid` in the refresh JWT payload) rather than rotating to a new row per call — simpler, and
sufficient for "list/revoke sessions" to mean exactly what a user expects (one row = one login, not
one row per silent background renewal).

**`Session.expiresAt` is an absolute cap set once at creation** (login/register), never extended on
refresh. A session's total lifetime is bounded to 7 days from first login, however many times it's
refreshed in between — checked authoritatively in `refresh()` even when the refresh JWT's own
signature still verifies past that point. Deliberately simpler than a sliding window; a session that
needs to outlive 7 days requires a fresh login, which is a reasonable, common trade-off.

**Deliberate, bounded access-token exposure window**: access tokens do **not** carry a session
reference and are **not** checked against `Session` state on every authenticated request. Revoking
a session (via `DELETE /auth/sessions/:id` or `POST /auth/logout-all`) stops all FUTURE refreshes
for that session immediately, but an access token already issued keeps working until its own natural
expiry (≤15 minutes) — the same short window that already existed for "the user got deactivated"
before this change. The alternative (looking up `Session` state on every single authenticated
request) would make revocation instantaneous but adds a DB round-trip to the hottest path in the
entire application for a security property already bounded to 15 minutes by the existing short TTL.
Documented explicitly as a deliberate trade-off, not an oversight — a genuine security-incident
response (e.g. rotating `JWT_SECRET`) remains the tool for "invalidate everything, right now,"
unchanged by this ADR.

**Four new endpoints** on `AuthController`:
- `GET /auth/sessions` — the caller's own session history (device/IP, created/last-used/expiry,
  revoked state), auditable per Deel 21 §42 — returns ALL sessions including revoked/expired ones,
  not just active ones, so a user can review what happened, not only what's current.
- `DELETE /auth/sessions/:id` — revoke one specific session (ownership-checked; another user's
  session id 404s, not 403, matching every other ownership check in this codebase).
- `POST /auth/logout` — revoke exactly the session the caller's own refresh token names (public,
  rate-limited like `/auth/refresh` — a client logging out doesn't necessarily still have a valid
  access token to authenticate the call with, so this takes the refresh token as its credential,
  mirroring `/auth/refresh`'s own shape).
- `POST /auth/logout-all` — Deel 21 §42's own literal example, "log out from all devices": revokes
  every one of the caller's un-revoked sessions in one call.

**Device/session metadata** (`userAgent`, `ipAddress`) is captured from the request at
login/register time (`sessionMetaFrom()` in `AuthController`) — best-effort, not validated or
trusted for any security decision, purely informational for the session list.

## Consequences

- Verified end-to-end over a live Postgres instance and real HTTP: registering + logging in from
  two different "devices" (distinct `User-Agent` headers) produced two real, listable `Session` rows
  with correct device/IP/expiry info; refreshing one device's token succeeded and kept the same
  session id; revoking the OTHER device's session via `DELETE /auth/sessions/:id` then attempting to
  refresh that device's (still cryptographically valid, unexpired) refresh token correctly failed
  with `401 SESSION_REVOKED`; `POST /auth/logout-all` correctly revoked every remaining un-revoked
  session and reported the real count; a THIRD device's access token, issued before the
  `logout-all` call, correctly kept working until this test's own verification of the documented
  bounded-exposure design (still valid past the revocation, as designed — not a bug); `POST
  /auth/logout` with a single device's own refresh token correctly revoked just that one session;
  and one user attempting to revoke a DIFFERENT, unrelated user's session correctly got `404`, not a
  leak or a silent no-op.
- RLS added for the new `sessions` table (joined through `users.organizationId`, same pattern as
  `dpp_records`/`webhook_deliveries`), consistent with every other tenant-owned table.
- This closes out `BACKLOG.md` Phase 2 (cross-cutting infrastructure) in full — idempotency
  (ADR-025), webhooks (ADR-026), API versioning + permissions catalogue (ADR-027), and now session
  revocation are all in place for Phase 3 onward to build on without retrofitting.
