---
title: "ADR-022: Rule-Based/Dynamic Sharing Scopes"
sidebar_label: "ADR-022"
sidebar_position: 22
---

**Status:** Accepted
**Date:** 2026-08-18
**Backlog:** priority queue item 1 — buildable without a new product decision, a natural
extension of ADR-010's model.

## Context

ADR-010 explicitly deferred rule-based/dynamic scoping (Deel 14 §12-13, e.g. "share everything
tagged region=EU") — only explicit `PRODUCT`/`PRODUCT_CATEGORY`/`ALL_PRODUCTS` targeting was
built. A seller with hundreds of products who wants to share "everything tagged region=EU" (or
"everything with material=steel", or any attribute-driven segment) currently has to either grant
`ALL_PRODUCTS` (over-sharing) or maintain a `PRODUCT`-targeted grant per matching product by hand
(brittle — a new EU product doesn't automatically get shared without remembering to add it).

## Decision

Add an optional `SharingGrant.ruleFilter` (`Json?`) — an array of rules, ANDed together, each
`{ attributeCode: string, operator: 'eq' | 'neq' | 'in' | 'contains', value: unknown }`. A rule
matches a product when the product carries an `AttributeValue` for an `AttributeDefinition` with
that `code` (visible to the owner org — global or their own, same visibility rule as attribute
definitions elsewhere) whose value satisfies the operator against the rule's value.

`ruleFilter` is evaluated **alongside**, not instead of, the existing `targetType` check
(`SharingService.hasAccess` / `resolveAccessibleProductFilter`, ADR-010's single enforcement
point) — a product is only in scope for a grant if it matches `targetType` **and** every rule in
`ruleFilter`. This makes `targetType: ALL_PRODUCTS` + `ruleFilter: [{attributeCode: "region",
operator: "eq", value: "EU"}]` the direct MVP answer to "share everything tagged region=EU," and
composes just as well with `PRODUCT_CATEGORY` ("everything in category X that's also tagged
region=EU") or even `PRODUCT` (redundant but well-defined — the single product must still match).

Operators are deliberately minimal: `eq`/`neq` for exact match, `in` for "one of a list," and
`contains` for substring-on-a-string or membership-in-an-array attribute values. No comparison
operators (`gt`/`lt`) — no attribute value in this schema currently benefits from ordered
comparison (`MEASUREMENT` is a `{value, unitCode}` object, not a bare number) and adding them
without a real use case would be speculative.

**Validation happens twice, for two different reasons:**
- At grant-creation time (`SharingService.createGrant`), every `ruleFilter[].attributeCode` is
  checked against real `AttributeDefinition` rows (global or the owner's own) and rejected with
  `400 UNKNOWN_ATTRIBUTE_CODE` if unrecognized — this catches a typo immediately instead of
  producing a grant that silently never matches anything.
- At read time (`matchesRuleFilter`), a rule with no matching attribute value on the product
  simply fails to match (the product is out of scope) rather than throwing — a product that never
  got the attribute assigned is not an error condition, it's just not in this grant's scope.

`resolveAccessibleProductFilter` (used by `PartnerService.listPartnerProducts` to list a partner's
visible catalogue) previously returned `{ allProducts, productIds, categoryIds }` and let the
caller build an `OR` query — sufficient when `PRODUCT_CATEGORY` unconditionally meant "every
product in that category." Rule filters break that shortcut (a `PRODUCT_CATEGORY` + `ruleFilter`
grant means only *some* products in that category), so this method now resolves every non-trivial
grant to a concrete product-ID list itself (querying each grant's base `targetType` scope, then
narrowing by attribute values when a `ruleFilter` is present) and returns `{ allProducts,
productIds }`. The `allProducts: true` fast path is preserved for the common case: an
`ALL_PRODUCTS` grant with no `ruleFilter` at all still short-circuits without touching attribute
data.

## Consequences

- `POST /sharing-grants` accepts an optional `ruleFilter: SharingRuleDto[]`; `GET
  /sharing-grants` and the stored grant both return it as-is.
- `src/sharing/rule-filter.util.ts` is pure, dependency-free logic (`parseRuleFilter`,
  `matchesRuleFilter`) with its own Jest spec (`rule-filter.util.spec.ts`) — the parsing/operator
  semantics are fully unit-tested; the DB-touching parts (`SharingService.hasAccess`,
  `resolveAccessibleProductFilter`, `assertAttributeCodesExist`) were verified end-to-end over
  real HTTP against a live Postgres instance (register two orgs, connect them, tag two products
  `region=EU`/`region=US`, grant `ALL_PRODUCTS` + `region=EU`, confirm the grantee's product list
  and direct-fetch both include the EU product and exclude the US one; confirm a typo\'d
  `attributeCode` is rejected with `400` at grant creation).
- No OR logic between rules, no nested rule groups, no "share everything NOT tagged X" — a flat
  AND list is the entire language for now. If a real need for OR/negation groups emerges, that's
  a follow-up ADR, not a silent extension of this one.
- Two unrelated pre-existing bugs were found and fixed while building and end-to-end testing this
  feature (both only reachable by a live HTTP round trip through `ValidationPipe`, never caught by
  `tsc` or unit tests): `RegisterDto.firstName`/`lastName` were documented as optional
  (`@ApiProperty({ required: false })`) but missing `@IsOptional()`, so omitting them failed
  validation; `SetAttributeValueDto.value` had no class-validator decorator at all, so
  `ValidationPipe`'s `whitelist: true` silently stripped it and `forbidNonWhitelisted: true` then
  rejected every request as `"property value should not exist"` — the attribute-value-setting
  endpoints (`POST /products/:id/attribute-values`, `POST /variants/:id/attribute-values`) were
  completely unusable via the API before this fix. A codebase-wide scan for the same
  missing-decorator pattern (`ApiPropertyOptional`/`required: false` without `@IsOptional`, and
  `unknown`/`any`/`Record<`-typed DTO properties without any class-validator decorator) found no
  further instances.
