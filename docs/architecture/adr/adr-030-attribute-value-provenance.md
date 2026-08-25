---
title: "ADR-030: Attribute Value Provenance/Source Model"
sidebar_label: "ADR-030"
sidebar_position: 30
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 3 (attribute/classification
engine) of the self-directed build sequence (`BACKLOG.md`) — item 12, bundled with item 11
(ADR-029) in the backlog's own framing since both touch `AttributeValue`/`AttributeDefinition`,
built as a separate ADR because the actual work is independent (item 11 is Category-level
requirement rules; item 12 is per-value metadata) and landed in its own commit.

## Context

Deel 11 §50-54/§75-79 and Deel 24 §57-61/§95-105 describe the same requirement from two chapters:
an `AttributeValue` needs to record where it came from, and OSPI must not let one source silently
overwrite another's already-confirmed value without a clear model. Concretely:

- **Provenance metadata** (Deel 11 §51, Deel 24 §57): `source`, `sourceOrganization`,
  `sourceDocument`/`sourceSystem`, `sourceTimestamp`, `confidence`.
- **A canonical source enum** (Deel 24 §58): `MANUFACTURER | SUPPLIER | IMPORT | USER | API |
  CALCULATED | INFERRED`.
- **Field-level federation / attribute ownership** (Deel 11 §75, Deel 24 §101): different
  attributes on the same product can be supplied by different organizations — `Voltage` by the
  manufacturer, `Stock` by a distributor, `RetailPrice` by a retailer.
- **"Geen ongecontroleerde overwrites"** (Deel 11 §76): when organization B uses a shared product,
  B must not silently change organization A's master value.
- **Conflict state** (Deel 24 §103): `VERIFIED | UNVERIFIED | CONFLICTED`.
- **Conflict resolution paths** (Deel 24 §104): owner authority, manual review, source priority,
  verification, explicit override.

Before this ADR, `AttributeValue` had no provenance whatsoever — a write from any source silently
replaced whatever was there, with zero record of who supplied it or whether it had ever been
confirmed.

## Decision

**Scope, narrower than the full spec vision, stated explicitly**: this ADR decorates the existing
single `AttributeValue` row per (product/variant, attribute) with provenance metadata and a real,
enforced "no uncontrolled overwrite" rule. It does **not** build a multi-candidate-value store where
each source's submission is its own row with a separate canonical-selection step — that is
`BACKLOG.md` phase 5 item 21 (Data-proposal / conflict-resolution workflow, Deel 14 §50-57's
`SUBMITTED/UNDER_REVIEW/ACCEPTED/REJECTED/WITHDRAWN` flow), a genuinely larger feature. What this
ADR delivers is the buildable, testable subset: provenance fields on the single row, plus a real
(not merely documented) guard against silently clobbering a confirmed value.

**New fields on `AttributeValue`**: `source` (the Deel 24 §58 enum, default `USER` — an omitted
`source` behaves exactly as every pre-existing caller already does), `sourceOrganizationId`
(defaults to the caller's own org if omitted — this is who *supplied* the value, independent of
which org owns the product itself, enabling the Deel 11 §75 federation case), `sourceReference`
(one free-text field collapsing Deel 11 §51's `sourceDocument`/`sourceSystem` — two fields for the
same "where to look for more detail" need was judged unnecessary granularity), `confidence`
(0..1), and `conflictState` (`UNVERIFIED` default / `VERIFIED` / `CONFLICTED`) with `verifiedAt`/
`verifiedByUserId`.

**The overwrite guard, concretely**: a value in `VERIFIED` or `CONFLICTED` state is protected — a
write proposing a genuinely different value from a different source is rejected with `409
VERIFIED_VALUE_CONFLICT`, and the existing row is flipped to `CONFLICTED` (a persisted, visible
state change, not just a transient error nobody recorded) so the discrepancy shows up on the next
read. A write from the *same* origin, or proposing the *same* value, is never blocked — matching
the value being re-submitted unchanged, or the same source correcting its own prior entry, which
isn't a real conflict. `UNVERIFIED` values have no such protection at all — nothing was ever
confirmed as ground truth, so any write simply replaces it, identical to pre-ADR behavior.

**Resolution paths, mapped onto existing endpoints rather than new ones** (Deel 24 §104):
`POST /attribute-values/:id/verify` is the "manual review"/"verification" path — a human confirms
an `UNVERIFIED` or `CONFLICTED` value is correct as-is, without touching the value itself.
`forceOverride: true` on the normal set-attribute-value call is the "explicit override" path — it
bypasses the guard entirely and always resets the row to `UNVERIFIED` (replacing an authoritative
or disputed value is itself a fresh, not-yet-reviewed claim, regardless of what state it came from).
`owner authority` and `source priority` resolution (Deel 24 §104/§105) are **not** built — both
require a configurable per-organization ranking that doesn't exist yet, correctly left to item 21.

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance, reproducing Deel 11 §52's
  own example almost verbatim (400V vs 415V): set `voltage = 400` with `source: MANUFACTURER`,
  verified it (`conflictState` → `VERIFIED`), then a `SUPPLIER`-sourced write proposing `415`
  correctly returned `409 VERIFIED_VALUE_CONFLICT` — and a direct database check confirmed the
  original row was left completely untouched (`value: 400`, `source: MANUFACTURER`) with only
  `conflictState` flipped to `CONFLICTED`. `forceOverride: true` with the same `415`/`SUPPLIER`
  payload then correctly replaced the value AND reset `conflictState` to `UNVERIFIED` with
  `verifiedAt`/`verifiedByUserId` cleared.
  **A real bug was found and fixed during this verification, not by inspection**: the first
  implementation only reset verification state when the existing row's `conflictState` was exactly
  `VERIFIED` — but the guard itself had already flipped it to `CONFLICTED` on the prior rejected
  attempt, so by the time `forceOverride` ran, the reset condition no longer matched and the stale
  `CONFLICTED`/`verifiedAt`/`verifiedByUserId` silently carried forward onto the new value. Fixed
  by making `forceOverride` unconditionally reset to `UNVERIFIED` regardless of the prior state,
  and broadening the guard itself to protect `CONFLICTED` rows the same as `VERIFIED` ones (a
  disputed value shouldn't be any easier to silently overwrite than a confirmed one). Re-verified
  live after the fix with the same exact sequence.
  Also verified: re-submitting the *same* value/source against an already-`VERIFIED` row succeeds
  normally (not blocked — no real conflict exists); `POST /attribute-values/:id/verify` on an
  already-`VERIFIED` value correctly `403`s; and a user from an unrelated organization attempting
  to verify another organization's attribute value correctly `404`s.
- No RLS policy added for `attribute_values` — it already had none before this ADR (documented,
  pre-existing gap: the table has no direct `organizationId` column and RLS for it was explicitly
  deferred to "route all access through the parent Product's tenant-scoped service methods," per
  `prisma/sql/rls.sql`'s own existing note). Not something this ADR's scope covers or changes.
