---
title: "ADR-031: Product/Attribute Completeness Scoring"
sidebar_label: "ADR-031"
sidebar_position: 31
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 3 (attribute/classification
engine) of the self-directed build sequence (`BACKLOG.md`) — item 13, the last item of Phase 3,
sequenced last specifically because it depends on item 11 (ADR-029, `CategoryAttributeSchema`) and
item 12 (ADR-030, `AttributeValue` provenance) both already existing.

## Context

Deel 7 §6-10/§68-69, Deel 11 §72-74, Deel 22 §78-81, and Deel 24 §92-96 describe the same feature
from four chapters, converging on identical concrete requirements:

- **A single percentage is explicitly called insufficient** (Deel 11 §72: "Een enkel percentage is
  onvoldoende voor data stewardship") — the response must also name exactly which attributes are
  missing, not just report a number.
- **The score must be based on more than a flat filled-field ratio** (Deel 7 §6): required,
  recommended, and optional attributes, classification requirements, and publication requirements
  — not "count of filled fields."
- **Completeness ≠ validity** (Deel 24 §94): a field can be filled but wrong (`Voltage = "abc"`).
- **A concrete validation API** (Deel 7 §68): `POST /products/{id}/validate` →
  `{errors, warnings, score, readyForPublication}`.
- **Publishing is gated on completeness** (Deel 7 §7, Deel 22 §78): "Cannot publish" when required
  data is missing — a `Draft → Validation → Ready → Publish` state flow, not merely advisory.

## Decision

**`POST /products/:id/validate`** computes, live, on every call — no materialized/cached score —
against the `CategoryAttributeSchema` effective schema (ADR-029) and the product's own
`AttributeValue` rows (ADR-030):

- **REQUIRED attribute missing** → an `errors` entry (`MISSING_REQUIRED_ATTRIBUTE`), naming the
  attribute by its stable code.
- **RECOMMENDED attribute missing** → a `warnings` entry (`MISSING_RECOMMENDED_ATTRIBUTE`) — soft,
  never blocks.
- **FORBIDDEN attribute carrying a value** → an `errors` entry (`FORBIDDEN_ATTRIBUTE_SET`).
- **No category assigned at all** → an `errors` entry (`NO_CATEGORY`) — without a category, no
  required-attribute schema can even be evaluated, which is itself a completeness gap worth
  surfacing rather than silently treating as "0 requirements, 100% complete."
- **Conditional rules** (Deel 11 §32, via ADR-029) are resolved exactly as they are for the
  effective-schema endpoint: a rule whose condition attribute doesn't match the required value is
  treated as `OPTIONAL` (never counted, never flagged) for that specific product.

**`score`** weights a missing `REQUIRED` attribute twice as heavily as a missing `RECOMMENDED` one
(`(requiredFilled×2 + recommendedFilled) / (requiredTotal×2 + recommendedTotal) × 100`, rounded;
100 when there's nothing to require at all) — a concrete, documented default rather than an
unexplained number, honoring Deel 24 §95's "the exact scoring must remain configurable" by making
this ONE clearly-stated formula rather than pretending a universally-correct weighting exists.
`OPTIONAL` attributes never affect the score, matching Deel 11 §31's own framing ("not every product
needs color information"). **`requiredCompleted`** is the separate, narrower percentage Deel 7 §69's
own example response names explicitly — just required-attribute fill rate, with no
`RECOMMENDED`/`FORBIDDEN` mixed in.

**`readyForPublication`** is `errors.length === 0` — a pure function of the hard blockers, entirely
independent of `score` (the `NO_CATEGORY`-only case demonstrates why: `score` alone would report
100% since there's nothing to require, while `readyForPublication` correctly stays `false`, exactly
the "a single percentage is insufficient" problem Deel 11 §72 names).

**Publishing is a real, enforced gate, not just advisory**: `ProductsService.publish()` now calls
`validateProduct()` first and rejects with `400 PRODUCT_NOT_READY_FOR_PUBLICATION` (carrying the
same `errors` array) when `readyForPublication` is `false` — Deel 7 §7's "cannot publish" and
Deel 22 §78's `Draft → Validation → Ready → Publish` flow are both literal, not aspirational.
`unpublish`/`retire`/`recall`/the generic `PATCH` remain ungated — only the specific act of
publishing requires readiness, matching this build's existing "dedicated lifecycle actions add
guardrails, the generic path stays a lower-friction escape hatch" pattern from ADR-024.

**Deliberately NOT checked** (flagged, not silently assumed covered): Deel 7 §7's own example list
also includes "Safety document" and "Image" as completeness requirements — `Document` has no
`documentType` field yet to distinguish a safety datasheet from any other upload
(`BACKLOG.md` phase 4 item 16), so there's no reliable way to check for one today without either
building that first or writing a misleading heuristic ("has at least one document" is not the same
claim as "has a safety document"). This becomes buildable the moment item 16 lands. Also not built:
Deel 24 §92's full "Validity / Verification / Freshness" quality dimensions beyond completeness —
`AttributeValue.conflictState`/`verifiedAt` (ADR-030) already carry the raw data a freshness/
verification score would consume, but composing them into Deel 11 §73's fuller "Data Quality Score:
94/100" composite is explicitly framed by the spec itself as later work ("Later kan OSPI een
uitgebreider scoremodel gebruiken").

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance: a category with `power`/
  `voltage` REQUIRED, `efficiency_class` RECOMMENDED, and a deliberately-named `legacy_field`
  FORBIDDEN; an empty product against it correctly returned `score: 0`, `requiredCompleted: 0`,
  two named `errors`, one named `warning`, `readyForPublication: false`; filling both REQUIRED
  attributes moved it to `score: 80` (`(2×2+0)/(2×2+1)×100`), `requiredCompleted: 100`, zero
  errors, `readyForPublication: true`; setting the FORBIDDEN attribute's value on top correctly
  reintroduced exactly one error (`FORBIDDEN_ATTRIBUTE_SET`) without moving the score (a forbidden
  value isn't part of the weighted ratio, only a hard block) and flipped `readyForPublication` back
  to `false`. A fresh, clean product (both REQUIRED filled, no FORBIDDEN value) was actually
  published successfully (`201`) through the real `POST /products/:id/publish` endpoint; a product
  still missing REQUIRED attributes was correctly rejected at `publish` time with
  `400 PRODUCT_NOT_READY_FOR_PUBLICATION` before any status transition occurred. A product with no
  category assigned at all correctly showed `score: 100` (nothing to divide by) alongside
  `readyForPublication: false` via the standalone `NO_CATEGORY` error — the exact "percentage alone
  is misleading" scenario the ADR's own design targets.
- This closes `BACKLOG.md` Phase 3 (attribute/classification engine) in full — ADR-029
  (Category → Attribute Schema), ADR-030 (provenance/source), and now ADR-031 (completeness
  scoring) together deliver everything the spec's own "architectural centerpiece" framing named,
  narrowed in the specific, documented ways stated across all three ADRs.
