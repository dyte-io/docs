---
title: "ADR-024: OSPI Identity Lifecycle, Product Publication Lifecycle, and Decimal Order Quantity"
sidebar_label: "ADR-024"
sidebar_position: 24
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 1 of the product-owner-ordered
build sequence (`BACKLOG.md`) — bundled because all five findings touch the same
`Product`/`OspiIdentity`/`OrderLine` migration surface, and later phases (`Quote`, completeness
scoring) depend on this one landing cleanly first.

## Context

Five concrete, unambiguous findings from the re-audit, none requiring a business-policy decision:

1. **`OspiIdentity` had no status field at all** (Deel 4 §36-41, Deel 23 §81-84) — the spec
   requires `RESERVED → REGISTERED → ACTIVE → SUSPENDED → RETIRED`, with permanent, no-reuse
   retirement as a hard invariant that was previously unenforceable (no field to check).
2. **`Product` had no `PUBLISHED` state** (Deel 10 §16-22/§65) — the spec's product lifecycle is
   `DRAFT → ACTIVE → PUBLISHED → DEPRECATED → RETIRED`, with a dedicated publish/unpublish/retire
   API (`POST /products/:id/publish` etc.), distinct from the generic status field.
3. **No `RECALLED` status** (Deel 19 §24-25, explicitly safety-critical: "a recalled product must
   stay resolvable, not hidden").
4. **No `publicationState` audience dimension** (Deel 7 §68-69, Deel 22 §78-81) —
   `PRIVATE/PARTNER_ONLY/PUBLIC/SCHEDULED`, independent of `ProductStatus` and currently conflated
   into it.
5. **No optimistic concurrency on Product updates** (Deel 22 §110-111) — no `version` field, no
   client-supplied expected-version on `PATCH`, no `409` on a stale write.
6. **`OrderLine.quantity` was `Int`** (Deel 17 §29, explicit: "niet uitsluitend integers" — e.g.
   `4.5 kg`, `10.75 m`).

## Decision

**Identity lifecycle** (`OspiIdentityStatus`: `RESERVED | REGISTERED | ACTIVE | SUSPENDED |
RETIRED`, default `REGISTERED`):
- `IssueOspiIdentityDto` gains optional `reserved`/`reservedUntil` — a reservation is the same
  code-minting call, just tagged `RESERVED` with an optional expiry, per Deel 4 §37's "useful for
  ERP sync/bulk imports/manufacturing workflows" framing. **Not built**: an automatic sweep that
  expires a stale reservation — `reservedUntil` is stored and returned, but nothing currently acts
  on it passing. A real deployment would want a scheduled job to release expired reservations;
  out of scope for this pass, flagged rather than silently assumed.
- Attaching an identity to a `Product` or `ProductVariant` (`ProductsService.create`/`addVariant`)
  promotes it straight to `ACTIVE` from either `RESERVED` or `REGISTERED` — Deel 4 §38's
  REGISTERED-vs-ACTIVE distinction ("OSPI knows this identity" vs. "usable per visibility rules")
  maps cleanly onto "minted but unattached" vs. "attached to something real," so no separate
  manual activation step is needed once a real Product/Variant exists.
- `SUSPENDED`/`RETIRED` identities can never be (re-)attached — checked in both `create()` and
  `addVariant()`. `IdentityService.retireIdentity`/`suspendIdentity`/`reactivateIdentity` are new,
  ownership-checked, audited transitions (`POST /ospi-identities/:id/retire|suspend|reactivate`).
  Retiring does **not** detach an already-attached Product/Variant — Deel 4 §41's own example
  ("Old Identity → Retired → New Identity") is precisely "keep the old code resolvable, mint a new
  one for the actual replacement," not "sever the link."

**Product publication lifecycle**: `PUBLISHED` and `RECALLED` added to the existing
`ProductStatus` enum (now `DRAFT | ACTIVE | PUBLISHED | RECALLED | DISCONTINUED | ARCHIVED`).
`DISCONTINUED`/`ARCHIVED` are **not** renamed to the spec's `DEPRECATED`/`RETIRED` wording — they
already implement the same semantics (`ARCHIVED` = "no hard delete, prefer RETIRE over DELETE,"
already built) and renaming a working, already-referenced enum value for wording-only reasons is
churn with no functional benefit. `ProductsService.publish`/`unpublish`/`retire`/`recall` are
dedicated, audited, valid-transition-checked actions
(`POST /products/:id/publish|unpublish|retire|recall`) layered on top of the pre-existing generic
`PATCH` (which still accepts any status directly, unchanged — the dedicated endpoints exist for
audit-log clarity and spec-fidelity, not because the generic path needed to be locked down).
Lookups (`IdentityService.lookupCode`, `SearchService.resolveCode`) were already and remain
status-agnostic, so a `RECALLED` product stays resolvable exactly as Deel 19 requires, with no
extra carve-out needed.

**Publication state**: `PublicationState` (`PRIVATE | PARTNER_ONLY | PUBLIC | SCHEDULED`, default
`PRIVATE`) added as `Product.publicationState`, settable via the generic `PATCH`. Deliberately
**just the field** — nothing in `SharingService` or `SearchService` currently reads it to gate
cross-org visibility, and `SCHEDULED` has no sweep that flips it to `PUBLIC` on its own. Wiring
this into the real access-control checks (and, if wanted, a scheduler for `SCHEDULED`) is real,
separate follow-up work; storing the value without silently claiming the enforcement exists too
was judged better than not building it at all.

**Optimistic concurrency**: `Product.version: Int @default(1)`, incremented on every update
(generic `PATCH` and all four dedicated lifecycle actions alike). `UpdateProductDto.expectedVersion`
is **optional**, not mandatory — a caller that omits it keeps the pre-existing last-write-wins
behavior (no unannounced breaking change for anything already calling `PATCH /products/:id`); a
caller that supplies it gets a real `409 VERSION_CONFLICT` on a stale write. This is deliberately
narrower than Deel 22 §108's separate `ProductVersion` snapshot/history table (full point-in-time
reconstruction) — that's a different, larger feature this ADR does not build.

**Decimal order quantities**: `OrderLine.quantity`, `Offer.minimumQuantity`, and
`OfferBuyerMinimum.minimumQuantity` all changed from `Int` to `Decimal(14,4)` (matching `price`'s
existing precision, since minimum-quantity and actual-quantity are directly compared against each
other in `OrdersService.addLine` and must stay type-consistent). `AddOrderLineDto.quantity`,
`CreateOfferDto.minimumQuantity`, and `SetOfferBuyerMinimumDto.minimumQuantity` all moved from
`@IsInt()` to `@IsNumber() @IsPositive()`.

## Consequences

- Verified end-to-end over real HTTP against a live Postgres instance: reserving an identity,
  suspending/reactivating/retiring one, confirming a retired identity can't be attached
  (`403 IDENTITY_NOT_ATTACHABLE`), attaching a reserved one and confirming both the stored row
  *and* the create-response's embedded `ospiIdentity` correctly show `ACTIVE` (see the bug fixed
  below), the full publish → recall product lifecycle with `409` on an invalid transition,
  optimistic concurrency correctly rejecting a stale `expectedVersion` and accepting a current
  one, and an offer with `minimumQuantity: 4.5` correctly rejecting a `2.25`-quantity order line
  and accepting a `10.75` one — the exact fractional examples Deel 17 §29 itself gives.
- **A real bug was found and fixed while writing that verification**, not by inspection alone:
  `ProductsService.create`'s response embedded the identity via `include` at creation time, which
  ran *before* the new status-promotion update — so a client attaching a `RESERVED` identity saw
  `ospiIdentity.status: "RESERVED"` in the response even though the stored row was already
  `ACTIVE` a moment later. Fixed by moving the identity-status update before the include-laden
  re-fetch used for the response.
- `Product.version` and `OspiIdentity.status` are additive columns with safe defaults — no data
  migration needed for the (empty, dev) database this was verified against; a real deployment
  with existing rows would see every existing product start at `version: 1` and every existing
  identity default to `REGISTERED` (not `ACTIVE`) on migration, which is honest given none of them
  went through the new "attachment activates" pathway historically. Not treated as a problem to
  solve in this pass — call out to a future backfill only if a real production dataset needs one.
- `PRODUCT_STATUSES`/`RECALLED` reachable via generic `PATCH` too, not just the dedicated
  `/recall` endpoint — same "convenience layer, not a lockdown" choice as publish/unpublish/retire
  above; who is authorized to recall a product is still just `products:write`, same as any other
  status change. If recall ever needs its own, stricter permission (e.g. a dedicated
  `products:recall` reserved for safety/compliance roles), that's a follow-up decision, not
  assumed here.
