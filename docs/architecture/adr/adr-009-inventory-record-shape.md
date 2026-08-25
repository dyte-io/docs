---
title: "ADR-009: Inventory Record Shape & Scope"
sidebar_label: "ADR-009"
sidebar_position: 9
---

**Status:** Accepted for MVP
**Date:** 2026-08-16

## Context

Deel 16 §5 lists a conceptual `Inventory` record with a single `quantity` and `status` field,
but §6-8 requires computing an `available` quantity from several distinct buckets (on hand,
reserved, allocated, quarantined, damaged, in transit) that must be tracked separately — these
two descriptions are not literally reconcilable as one flat record with one quantity.

Deel 16 §11-12 also describes inventory visibility (`PUBLIC` / `PARTNER_ONLY` / `PRIVATE`) and
quantity display modes (exact / range / boolean / hidden) intended for **external** viewers —
but the actual cross-organization exposure mechanism depends on the Sharing/Connections domain
(Deel 14/15), which is not built yet.

## Decision

1. **One `InventoryRecord` per `(organizationId, productId, locationId)`**, with explicit
   quantity columns per bucket (`onHand`, `reserved`, `allocated`, `quarantined`, `damaged`,
   `inTransit`) rather than one row per bucket. This makes "what's available right now for
   this product at this location" a single-row read instead of an aggregation query — the
   dominant access pattern for "Where to Find" (Deel 16 §1).
2. `availableQuantity` is **always derived**, never stored: `onHand - reserved - allocated -
   quarantined - damaged` (in-transit stock is excluded, since it is explicitly not yet on
   hand — Deel 16 §6 lists it as a distinct bucket from the ones summed in the §8 example).
3. `visibility` and `quantityDisplayMode` fields are stored on the model now (so the schema
   doesn't need to change later), but **enforcement is out of scope for this addition** — every
   endpoint built in this pass is owner-only (`organizationId` = caller's own org, full exact
   detail). Exposing inventory to partners or the public requires the Sharing/Connections
   domain to exist first, so that "who is a partner" is even a resolvable question. Until then,
   `PARTNER_ONLY`/`PUBLIC` values can be set but have no externally-visible effect — flagged in
   the README so this isn't mistaken for a working feature.

## Consequences

- `availabilityStatus` (`AVAILABLE`/`LOW_STOCK`/`OUT_OF_STOCK`/`PRE_ORDER`/`BACKORDER`/
  `DISCONTINUED`/`UNKNOWN`) is derived from the quantities plus an optional manual override
  (`manualStatus`) for states that aren't inferable from stock numbers alone (`PRE_ORDER`,
  `BACKORDER`, `DISCONTINUED`).
- A future Sharing/Connections module must add the actual partner-relationship check before
  `visibility`/`quantityDisplayMode` do anything real.
