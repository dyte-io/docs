---
title: "ADR-007: Multi-Tenancy Isolation Strategy (MVP)"
sidebar_label: "ADR-007"
sidebar_position: 7
---

**Status:** Accepted for MVP; revisit before onboarding tenants with strict regulatory isolation requirements
**Date:** 2026-08-16

## Context

Deel 6, 9, and 25 all describe tenant isolation as an open decision ("shared schema now, sharding/dedicated DB later, depends on scale"), consistently but without a concrete MVP-level implementation. Constitution §14 mandates isolation must never depend solely on frontend filtering, and must be enforced at application/domain level, with infrastructure-level enforcement "where possible."

## Decision

**Shared database, shared schema, row-level tenant scoping** for MVP:

- Every tenant-owned table has a non-nullable `organizationId` column.
- All Prisma queries go through a repository layer that injects `organizationId` from the authenticated request context — application code never issues a raw query without this scope (enforced via a NestJS guard + a lint rule / code review checklist, documented in the README).
- PostgreSQL Row-Level Security (RLS) policies are additionally enabled on tenant-owned tables as defense-in-depth (Constitution §24 "defense in depth"), using a session-scoped `app.current_org_id` setting checked by RLS policy — so even a bug in application-layer scoping cannot leak cross-tenant data.
- Dedicated schema-per-tenant or database-per-tenant is deferred until a concrete driver emerges (e.g. a large enterprise tenant with contractual data-isolation requirements, or scale where a single Postgres instance's row counts become the bottleneck) — consistent with Constitution §37/§38 (no premature complexity).

## Consequences

- RLS policies must be included in every migration touching a tenant-owned table — this is a hard rule, not optional, given Constitution §6.4 (security by design) and the fact productdata is explicitly flagged as commercially sensitive.
- This is a stronger MVP starting point than the docs describe (they only mention shared-schema informally) — RLS as defense-in-depth was added here because "production-grade architecture" (Constitution §42) was explicitly required even for the MVP.
