---
title: "ADR-019: Synchronous, Bounded Bulk Endpoints — Not a Job Queue"
sidebar_label: "ADR-019"
sidebar_position: 19
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** product owner priority pick, among four follow-ups selected together with ADR-017 (document storage), ADR-018 (RBAC), and the network-wide search extension of ADR-012.

## Context

Every product/identity/serialized-unit creation endpoint in this build was one-at-a-time. A
producer onboarding an existing catalog, or registering a batch of serial numbers, would need
one HTTP round-trip per row — real friction at any real catalog size. The correct long-term
answer is an async job queue (BullMQ + Redis, already anticipated as deferred infrastructure by
ADR-001), but Redis isn't provisioned in this build and there's no network access to install
BullMQ or verify a queue actually processes jobs — the same recurring constraint as ADR-016's
rate limiter and ADR-017's document storage.

## Decision

Two new endpoints, both synchronous (the request doesn't return until every item in the batch
has been attempted) and both bounded:

- `POST /products/bulk` (`BulkCreateProductDto`, max 500 items/call) — loops
  `ProductsService.create` per item.
- `POST /products/:id/serialized-units/bulk` (`BulkRegisterSerializedUnitDto`, max 1000
  items/call) — loops `SerializedUnitsService.register` per item.

Both use a **partial-success model**: each item gets its own `{ success, ... }` outcome in the
response (`{ total, succeeded, failed, results: [...] }`) rather than the whole batch aborting
on the first bad row. A 500-row import failing entirely because row #499 had a typo'd category
code would be a materially worse experience than a per-row report the caller can act on —
this mirrors how a CSV import tool typically reports results, not how a single atomic
transaction behaves.

## Consequences

- **Not a queue.** The caller's HTTP connection stays open for the whole batch — for 500
  sequential `Product` creations (each itself doing an `OspiIdentity` insert +
  `Product` insert + audit log write), this could be a multi-second request. There is no
  progress reporting, no resumability if the connection drops mid-batch (already-created items
  stay created; the caller would need to retry only the failed indices from the response), and
  no true concurrency — items are processed one at a time, in order, deliberately, since
  concurrent writes to the same producer's `ProducerCode`/`companyProductId` uniqueness space
  could otherwise race in confusing ways.
- The 500/1000 item caps exist specifically because this is synchronous — they are not
  arbitrary, they're sized to keep a single request's duration bounded. Real bulk import
  (10,000+ row catalogs, which the Constitution's target scale absolutely implies) still needs
  the async job queue this ADR does not build.
- Each bulk item reuses the exact same validation/authorization path as its single-item
  endpoint (`ProductsService.create`, `SerializedUnitsService.register`) — there is no separate,
  possibly-inconsistent bulk-specific validation logic to keep in sync.
