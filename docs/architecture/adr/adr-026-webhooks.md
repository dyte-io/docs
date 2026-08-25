---
title: "ADR-026: Outbound Webhooks / Event Subscriptions"
sidebar_label: "ADR-026"
sidebar_position: 26
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 2 (cross-cutting infrastructure)
of the self-directed build sequence (`BACKLOG.md`) — item 7, following ADR-025's Idempotency-Key
work in the same phase.

## Context

Deel 5 §45-50, Deel 8 §42-49, and Deel 14 §29-40 all describe the same requirement from different
angles: OSPI must be able to push real-time change notifications ("OSPI → Webhook → ERP") to an
organization's own external systems, rather than requiring polling. All three sources converge on
the same concrete design points:

- **Registration**: `{url, events[]}`, HTTPS-only (Deel 8 §44).
- **Never synchronous with the write it reports on** (Deel 5 §46, §97): "Product = CREATED,
  Webhook = RETRYING" — a webhook delivery attempt must not be part of the transactional request,
  so an unreachable external endpoint can never block or slow down the OSPI write that triggered it.
- **Signed** (Deel 5 §48, Deel 8 §45, Deel 14 §35): HMAC over the payload with the subscription's
  own secret; Deel 14 §35 additionally names "timestamp; replay protection" explicitly.
- **Exponential-backoff retries, then dead-letter** (Deel 5 §47, Deel 8 §47-48, Deel 14 §36-37) —
  and Deel 8 §48 specifically: "de organisatie moet dit kunnen bekijken en opnieuw proberen" (the
  organization must be able to view and manually retry a dead-lettered delivery).
- **At-least-once, never exactly-once** (Deel 5 §49, Deel 8 §49) — every delivery gets a unique ID
  so the receiver can dedupe; OSPI does not promise single delivery.
- **Thin payload, "webhook + pull"** (Deel 14 §30): a webhook should carry the event type and a
  resource id/version, not the full resource — the receiver re-fetches current state via the normal
  API. This makes retries and signing simpler and avoids ever shipping stale embedded data.

## Decision

**Scope, deliberately narrower than the full spec vision**: this builds an organization's own
outbound notification channel for its own resources — Deel 5/8's "OSPI → Webhook → ERP" framing.
It does **not** build Deel 14's separate, larger feature: a partner subscribing to ANOTHER
organization's products by category/brand/family, using the same rule-based scope engine as
Sharing (ADR-022). That's real, additional complexity (a second access-control dimension on top of
ownership) correctly deferred to `BACKLOG.md` phase 5 item 19 (Distribution/partner-sync API
surface) — this ADR's mechanism is built so that feature can plug into it later rather than invent
its own delivery/retry/signing pipeline.

**Durable, DB-backed queue** — `WebhookDelivery.status`/`nextAttemptAt` on a genuine table, not an
in-memory structure, IS the "Webhook Queue" the architecture diagrams describe (Deel 5 §46 /
Deel 8 §46). A periodic sweep (`WebhooksService.sweepOnce`, `setInterval`, 15s) picks up rows due
for (re)attempt, rather than a job dispatched inline in the triggering request. `WebhooksService.
emit()` — called from `IdentityService`, `ProductsService`, `OrdersService` — creates the delivery
row(s) synchronously (a fast local DB write, safe to await) but fires the actual outbound HTTP
attempt without awaiting it (`void this.attemptDelivery(...)`), so a slow or dead external endpoint
can never add latency to (or fail) the business write it's reporting on. `emit()` itself swallows
its own errors (logged, not thrown) for the identical reason at one layer up: a webhook-subsystem
hiccup must never fail the request that triggered it — this is a deliberate asymmetry with
`AuditService.log`, which the rest of this codebase treats as essential-not-swallowed; webhooks are
explicitly best-effort infrastructure, audit log entries are not.

**Signing**: `X-OSPI-Signature: t=<unix-seconds>,v1=<hex-hmac-sha256>` (Stripe's well-known shape),
HMAC computed over `${timestamp}.${rawBody}` — bundles integrity and replay protection into one
header and one verification step (`signature.util.ts`, unit-tested both directions: sign then
verify, and reject on tampered body / wrong secret / stale timestamp).

**Retry**: up to 8 attempts, exponential backoff starting at 30s and doubling, capped at 30 minutes
between attempts; the 8th failure moves the delivery to `DEAD_LETTERED`. `POST
/webhooks/deliveries/:id/retry` resets a dead-lettered delivery to a fresh attempt cycle
(`attempts: 0`, immediate re-attempt) per Deel 8 §48's explicit requirement.

**Payload**: thin, per Deel 14 §30 — `{eventId, eventType, occurredAt, organizationId, data}` where
`data` is just `{resourceId, status, ...}`, never the full Product/Order/Identity object. The
receiver is expected to call back into the real API for current state.

**Event catalogue** (`webhook-events.ts`) seeded from the transitions this build actually has —
not the spec's full example lists, which include events with nothing behind them yet (`dpp.updated`,
`content.updated`, etc.): `identity.registered/activated/suspended/reactivated/retired`,
`product.created/published/unpublished/recalled/archived` (`archived` is `ProductsService.retire()`
— it moves `Product.status` to `ARCHIVED`, not a separate "retired" status; named to match the
spec's own `product.archived` term, not the method name), `order.created` (on submit),
`order.updated` (on any `OrderGroup` transition). `product.created`/`identity.activated` fire from
`ProductsService.create`/`addVariant` (attaching an identity is what activates it — see ADR-024).

**Notification scope for multi-party events**: an `Order`/`OrderGroup` event is emitted to BOTH the
buyer's and the seller's organization (a `Set` dedupes when they'd otherwise receive it twice) —
both are genuinely party to that event, unlike a single-owner resource like a Product or Identity.
This is the one place the "notify the resource's owning org" default doesn't hold; documented here
explicitly rather than left implicit in the code.

**Subscription CRUD**: `POST/GET/DELETE /webhooks`, `GET /webhooks/:id/deliveries`,
`POST /webhooks/deliveries/:id/retry` — all behind a new `webhooks:manage` permission. `secret` is
returned in full only once, at creation; every subsequent `GET /webhooks` omits it entirely (Prisma
`select` without the field, not a runtime redaction that could be bypassed by adding an `include`
later). RLS added for both new tables (`webhook_subscriptions`, `webhook_deliveries` via a join to
its parent subscription), following the same pattern as every other tenant-owned table in
`prisma/sql/rls.sql` — see that file's existing caveat: the app doesn't currently call
`PrismaService.withOrgContext()` on the request path, so this is defense-in-depth infrastructure
consistent with the rest of the codebase's (pre-existing, already-documented) gap, not something
this ADR closes.

## Consequences

- Verified end-to-end over a live Postgres instance and a live outbound HTTP path:
  - DTO validation: a non-HTTPS URL and an unrecognized event type are both rejected (400) before
    a subscription is ever created.
  - A subscription pointed at a genuinely unreachable HTTPS host produced a real failed delivery
    attempt (`fetch failed`), scheduled for retry with the correct 30s initial backoff.
  - Forcing `nextAttemptAt` into the past via direct SQL and letting the real sweep (15s interval)
    pick it up repeatedly walked the delivery through attempts 1→8 with the backoff growing each
    time, landing on `DEAD_LETTERED` at exactly attempt 8 — confirmed live, not by code inspection.
  - `POST /webhooks/deliveries/:id/retry` on that dead-lettered delivery correctly reset it and
    fired a fresh attempt; retrying it again while `PENDING` (not `DEAD_LETTERED`) was correctly
    rejected with `403 DELIVERY_NOT_DEAD_LETTERED`.
  - The **success** path was verified against a real local HTTP receiver (inserted directly via SQL
    to bypass the HTTPS-only creation guard, which is a creation-time-only check, not a delivery-time
    one): publishing a product produced a delivery the receiver actually got, with a thin
    `{eventId, eventType, occurredAt, organizationId, data}` body and an `X-OSPI-Signature` header
    whose HMAC was independently recomputed and confirmed to match byte-for-byte — proving the
    signing scheme is receiver-verifiable, not just self-consistent. The delivery row correctly
    moved to `SUCCEEDED` with `deliveredAt` set.
  - Multi-party fan-out: registering `order.created`/`order.updated` subscriptions for both a buyer
    org and a seller org, then submitting a real cross-org order and having the seller accept its
    `OrderGroup`, produced deliveries on **both** organizations' subscriptions for both events —
    confirming the buyer+seller notification scope decision above actually happens, not just reads
    correctly in code.
  - Cross-org isolation: one organization reading or deleting another organization's webhook
    subscription/deliveries both correctly returned `404`, not silently empty or a leak.
- `ioredis`/Redis were **not** used for this feature — the delivery queue is Postgres-backed
  (`WebhookDelivery` rows), a deliberate difference from ADR-025's idempotency cache, which needed
  Redis's TTL semantics for a request-scoped cache in a way a durable business record does not.
- Known, accepted limitation (documented, not silently assumed solved): the sweep is a single
  in-process `setInterval`, not a distributed job queue — correct for this codebase's existing
  single-instance-modular-monolith deployment shape (same tier as `RateLimitGuard`'s in-memory
  design), but a horizontally-scaled deployment would need either a leader-election guard or a real
  job queue (e.g. BullMQ against the now-available Redis) to avoid multiple instances double-sweeping
  the same due rows. Flagged as future work if/when that deployment shape is actually needed.
