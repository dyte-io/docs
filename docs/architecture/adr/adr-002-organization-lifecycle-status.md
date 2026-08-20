---
title: "ADR-002: Organization Lifecycle Status Enum"
sidebar_label: "ADR-002"
sidebar_position: 2
---

**Status:** Accepted
**Date:** 2026-08-16

## Context

Three source chapters define conflicting status enums for the `Organization` entity:

- Deel 6 (Core Data Model, §6): `ACTIVE / SUSPENDED / INACTIVE`
- Deel 9 (Organizations, Multi-Tenancy..., §8): `ACTIVE / SUSPENDED / CLOSED`
- Deel 25 (Organization, Entity, Identity..., §83): `ACTIVE / SUSPENDED / ARCHIVED / DELETED`

This is a real schema conflict, not a wording difference — a builder must pick one before writing a migration.

## Decision

Adopt a single canonical lifecycle, a superset that preserves the distinct intents found across all three sources:

```
PENDING       -- created, not yet verified/activated (new state; needed for onboarding flow, not explicit in any source but implied by "organization creation" flows in Deel 7/9)
ACTIVE        -- normal operating state
SUSPENDED     -- temporarily disabled (billing issue, policy violation, admin action) — reversible
ARCHIVED      -- soft-closed, read-only, data retained (e.g. organization stopped using the platform) — reversible with admin action
DELETED       -- soft-deleted, data retained per retention policy, not reversible via normal API (matches Constitution §18 auditability + §6.4 data durability — hard deletes of tenant data are not permitted without an explicit, audited, admin-level process)
```

`INACTIVE` (Deel 6) and `CLOSED` (Deel 9) are treated as synonyms folded into `ARCHIVED`.

## Consequences

- Deel 6, Deel 9, and Deel 25 should be marked superseded-by-this-ADR for this specific field in any future documentation consolidation pass.
- All authorization checks must treat `SUSPENDED`, `ARCHIVED`, and `DELETED` organizations as non-writable; `ARCHIVED`/`DELETED` also non-readable via normal tenant-scoped endpoints (admin-only access).
- This does not resolve the broader duplication problem across Deel 6/9/25 (see the earlier documentation-conflict report) — only this one field, which was required to write the Prisma schema.
