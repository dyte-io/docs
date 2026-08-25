---
title: "ADR-010: Sharing Scope Model"
sidebar_label: "ADR-010"
sidebar_position: 10
---

**Status:** Accepted for MVP
**Date:** 2026-08-16

## Context

Deel 14 §10 lists "Scope types" as a single enum: `PRODUCT, PRODUCT_CATEGORY,
PRODUCT_COLLECTION, PRODUCT_FAMILY, ORGANIZATION, CONTENT, DPP, INVENTORY, ORDERING`. This
conflates two different dimensions: **what is being shared** (a specific product, a category
of products, "everything") and **what kind of data about it** (product data, content/documents,
DPP, inventory, ordering capability). As written it's not a single coherent enum.

`PRODUCT_COLLECTION` and `PRODUCT_FAMILY` also refer to entities that don't exist in this
schema (no `Collection` or `ProductFamily` model was built — `Product` + `ProductVariant`
covers what Deel 22/26 call a product family in this build).

## Decision

Split into two orthogonal fields on `SharingGrant`:

- `targetType`: `PRODUCT | PRODUCT_CATEGORY | ALL_PRODUCTS` (what is being shared — a single
  product via `targetId`, every product in a category via `targetId`, or the owner's entire
  product catalogue). `PRODUCT_COLLECTION`/`PRODUCT_FAMILY` are omitted — no such entities
  exist yet; add them here when/if those models are built.
- `dataCategories`: `String[]`, subset of `PRODUCT_DATA | CONTENT | DPP | INVENTORY |
  ORDERING` (what kind of data is included for the target).

A grant is attached to a `Connection` (Deel 15 §2's diagram: Connection is the umbrella
relationship, Sharing Scope determines what's accessible within it) — `SharingGrant` requires
an `ACTIVE` `Connection` between the owner and grantee organizations.

**Not implemented:** rule-based/dynamic scoping (Deel 14 §12-13, e.g. "share everything in
category X with status=published, tagged region=EU"). Only explicit target selection
(`PRODUCT`/`PRODUCT_CATEGORY`/`ALL_PRODUCTS`) is built. A rule engine is a follow-up — see
README roadmap.

## Consequences

- `SharingService.hasAccess(ownerOrgId, viewerOrgId, dataCategory, product)` is the single
  enforcement point used by every cross-organization read endpoint (products, inventory,
  documents). No controller checks sharing grants directly.
- This finally makes `InventoryRecord.visibility = PARTNER_ONLY` (ADR-009) mean something: a
  "partner" is now precisely "an organization with an ACTIVE Connection and an ACTIVE
  SharingGrant covering `INVENTORY` for this product."
