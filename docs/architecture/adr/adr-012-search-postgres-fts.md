---
title: "ADR-012: Search Uses PostgreSQL Full-Text Search for MVP"
sidebar_label: "ADR-012"
sidebar_position: 12
---

**Status:** Accepted for MVP; revisit when scale/query complexity requires it
**Date:** 2026-08-16

## Context

Deel 19 describes a full CQRS-style discovery layer: core DB as source of truth, an event/
change-log feeding a dedicated Search Index (Elasticsearch/OpenSearch/Solr) and a Graph,
behind a separate eventually-consistent Discovery API. Constitution §29 explicitly permits
starting with PostgreSQL and adding a dedicated search engine only when the use case requires
it (§38 — no premature complexity/optimization).

## Decision

For this build pass, product search is implemented as a **synchronous PostgreSQL full-text
search** directly against the `products` table (a generated `tsvector` column over name +
description, combined with `ILIKE`/exact filters for category, status, attributes) — no
separate index, no change-log/event pipeline, no eventual consistency, no Elasticsearch/
OpenSearch dependency.

The **OSPI Code Resolver** (`OSPI Code -> Product -> Manufacturer -> ...`, Deel 19 §1) is
implemented as a straightforward endpoint that reuses `IdentityService.lookupCode` plus
eager-loaded relations — not a separate "Graph" system.

"Related products" (a tiny slice of what Deel 19 calls the OSPI Graph) is implemented as a
simple query — other products sharing the same classification node or category — not a graph
database or recommendation engine.

## Consequences

- Search is only as fast/relevant as PostgreSQL FTS allows. This is expected to need
  replacing with a dedicated engine once catalogue size or query complexity (geo search,
  faceting, "compatible with product Y" relationship queries from Deel 19 §3) exceeds what FTS
  handles well — the README roadmap flags this explicitly so it isn't mistaken for "search is
  done."
- Because search reads directly from the transactional tables, there is no eventual-consistency
  lag (a change is searchable immediately) — this is *stricter* than the target architecture,
  not equivalent to it; don't assume the eventual-consistency behavior described in Deel 19 §6-7
  once a real index is introduced later.

## Amendment (2026-08-17): bounded network-wide search

Product owner priority pick, among four follow-ups selected together with ADR-017 (document
storage), ADR-018 (RBAC), and ADR-019 (bulk endpoints). `GET /search/products` previously only
ever searched the caller's own organization; the original ADR text above flagged network-wide
search as unimplemented because a full `SharingGrant` intersection per candidate row is
expensive without a real index.

`?scope=network` now exists as a deliberately **bounded** version of that: `SearchService`
additionally includes products from any organization that granted the caller an ACTIVE,
unexpired `PRODUCT_DATA` sharing grant (ADR-010) with `targetType` `ALL_PRODUCTS` or
`PRODUCT_CATEGORY`. It resolves those grants with two ordinary (non-raw) Prisma queries first,
then folds the resulting organization/category set into the existing raw-SQL query as a bounded
`IN (...)` / row-constructor `IN (...)` condition — cheap, because the grant lookup is itself
indexed and small (a caller has at most a handful of active grants), not because full-text
search itself got any faster.

**Individual `PRODUCT`-targeted grants are deliberately excluded** from `scope=network` — folding
potentially thousands of single-product grants into this query would mean an unbounded `OR
productId = ...` list per search, which is exactly the per-candidate-grant cost this ADR
originally flagged as too expensive without a real index. Those grants remain reachable via the
existing Partner endpoints (`sharing/partner.controller.ts`) and `resolveCode`, just not via this
general listing query. `?scope=own` (still the default) is unaffected.
