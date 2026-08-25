---
title: "ADR-020: Category Registry Governance — Proposal & Approval"
sidebar_label: "ADR-020"
sidebar_position: 20
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** user decision (asked directly via AskUserQuestion; option chosen: "Voorstel & goedkeuring" / proposal & approval), backlog item 1.

## Context

`Category` has always supported `organizationId: null` as a "global/shared" category alongside
normal org-scoped ones (see `prisma/sql/rls.sql`'s long-standing comment on the categories
policy), but nothing ever created one — `ProductsService.createCategory` always wrote the
caller's own `organizationId`. Deel 11 (Classification, Taxonomy & Attribute Engine) describes a
shared category registry as part of the platform's value proposition — buyers and sellers on
different tenants should be able to converge on the same categories rather than each maintaining
a private, incompatible taxonomy. The open question was governance: who is allowed to add to the
*shared* registry, and does it require review.

Three options were put to the user directly: (a) first-write-wins, anyone can propose a global
category and it's live immediately; (b) proposal & approval, a global category starts pending and
needs a reviewer to approve it; (c) platform-managed only, no tenant can ever add to the shared
registry at all. The user chose (b).

## Decision

- New `CategoryStatus` enum: `PENDING`, `APPROVED`, `REJECTED`.
- Org-scoped categories (`organizationId` set) are **unchanged**: always private to that org,
  always auto-`APPROVED`, no review step. This ADR only touches the `organizationId: null` case.
- `CreateCategoryDto` gains an optional `scope: 'organization' | 'global'` (defaults to
  `'organization'`). Requesting `'global'` creates a row with `organizationId: null`,
  `status: PENDING`, `proposedByOrganizationId` set to the caller's org.
- A new permission, `categories:govern`, gates three new endpoints: `GET /categories/pending`,
  `POST /categories/:id/approve`, `POST /categories/:id/reject` (with a required
  `rejectionReason` on reject).
- `listCategories()` (the normal, unauthenticated-by-permission listing every product-creation
  flow uses) excludes other organizations' non-`APPROVED` global proposals — a pending or
  rejected global category is invisible outside `GET /categories/pending` until a reviewer acts.
- `ProductsService.create()`'s `categoryId` validation rejects any category that isn't
  `APPROVED` with `CATEGORY_NOT_APPROVED` — a product can never reference a still-pending or
  rejected global category, closing the obvious race (propose a category, immediately tag a
  product with it before anyone reviews it).

## Consequences

- **Amendment (2026-08-19, product owner decision — asked directly via AskUserQuestion,
  option chosen: "Echt platform-tenant-concept bouwen" / build a real platform-tenant concept):**
  the risk below is now closed, not just documented. `PlatformOperatorGuard`
  (`src/common/guards/platform-operator.guard.ts`) is a second, independent check stacked on top
  of `@RequirePermissions('categories:govern')` via a new `@RequirePlatformOperator()` decorator
  on all three governance routes (`GET /categories/pending`, `POST /categories/:id/approve`,
  `POST /categories/:id/reject`): holding the `categories:govern` permission string is no longer
  sufficient on its own, the caller's **organization** must also match `PLATFORM_OPERATOR_ORG_ID`.
  This is deliberately an environment-variable/deployment setting, not a database flag on
  `Organization` with an API write path — any endpoint that could flip "is the platform operator"
  on an org would itself be a self-service privilege-escalation hole (the exact class of bug
  found and fixed the previous day in `POST /auth/api-clients`, see README). The guard fails
  closed: an unset/empty `PLATFORM_OPERATOR_ORG_ID` denies every organization rather than
  silently defaulting to "everyone" or "no one checks." Verified end-to-end over real HTTP: with
  no env var set, even an org's own `'*'`-holding Owner gets `403 NOT_PLATFORM_OPERATOR`; with
  the env var set to org A, org A can list/approve/reject global proposals while org B (including
  attempting to approve its *own* proposal) correctly still gets `403`.
- The original risk, for context: every `User` belongs to exactly one `Organization`, and
  `PermissionsGuard` checks a flat permission-string membership — it is not itself org-scoped
  (only application code that reads `principal.organizationId` enforces tenant boundaries). That
  meant `categories:govern` was, by construction, a **cross-org-by-permission** capability:
  whichever organization's role held it could approve or reject *any* organization's global
  proposals, because a global proposal has no owning org to scope against. Now closed by
  `PlatformOperatorGuard` above.
- The pre-existing `@@unique([organizationId, code])` does not prevent two different global
  (`organizationId = NULL`) proposals from colliding on the same `code`, because Postgres treats
  each `NULL` as distinct for uniqueness purposes — the same class of gap ADR-015 hit with
  `SerializedUnit`. Fixed here with a partial unique index
  (`prisma/sql/category-registry-constraints.sql`, `WHERE "organizationId" IS NULL`) applied
  manually alongside migrations, per the existing `rls.sql` convention. Verified live
  (2026-08-19) against a real Postgres instance: two `INSERT`s of global (`organizationId NULL`)
  categories sharing the same `code` correctly hit `duplicate key value violates unique
  constraint "categories_global_code_unique"`.
- Rejected global proposals are kept (not deleted), with `reviewedByUserId`, `reviewedAt`, and
  `rejectionReason` recorded, so the proposing org can see why and a re-proposal under a
  different code is auditable against the earlier attempt.
