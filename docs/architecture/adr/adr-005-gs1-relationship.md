---
title: "ADR-005: Relationship to GS1/GTIN (MVP stance)"
sidebar_label: "ADR-005"
sidebar_position: 5
---

**Status:** Accepted — strategic positioning decided by product owner (2026-08-17); legal/standards-body execution still outstanding, see below.
**Date:** 2026-08-16

## Context

The documentation treats GTIN only as "an additional identifier" without addressing overlap, licensing, or the rationale for a new global scheme alongside the incumbent GS1 standard.

## Decision (MVP scope only)

For the MVP, OSPI does **not** claim to replace or compete with GS1/GTIN. `Product` and `ProductVariant` records have an **optional** `gtin` field stored alongside the OSPI code. OSPI codes are additive, internal-platform identifiers; no claim is made about global registry status, standards-body governance, or legal interoperability with GS1.

**Strategic decision (2026-08-17, product owner):** the question this ADR originally deferred —
complement GS1, integrate with it, or position as an independent standard — is now answered:
**OSPI is positioned as its own, independent identification standard**, not merely an internal
platform feature or a layer on top of GS1. This changes the framing but not, on its own, much
of the engineering: OSPI codes were already independently generated and resolved end-to-end
(`ospi-code.util.ts`, the Identity/Search modules) without any dependency on GS1 infrastructure
— that part of the build already matched "independent standard" before this decision existed.
What the decision actually changes:
- Documentation/positioning language should stop hedging with "does not claim to replace or
  compete with GS1" — that sentence above is now superseded by this update, kept only for
  history.
- `gtin` stays as an **optional, supplementary** field, not removed: most real products will
  carry both identifiers for the foreseeable future (retail channels built on GS1 don't
  disappear because OSPI exists), and an independent standard is not weakened by also
  interoperating with an established one. This is a "both/and," not "either/or."
- Actually *operating* as an independent standard — trademark/naming clearance, a real
  standards-body or governance structure (Constitution's still-open "who owns/governs OSPI"
  question), external communications, and any claims made to producers/regulators — is
  business/legal work outside what this build session can do. The engineering stance is
  decided; the institutional work to back that stance publicly is not.

**Update (2026-08-17):** the follow-up flagged below is now done — `gtin` is checksum-validated
against GS1's published check-digit algorithm (`src/products/gtin.util.ts`, wired into
`CreateProductDto`/`UpdateProductDto` via a custom `@IsGtin()` class-validator decorator).
Supports GTIN-8/12/13/14. This only confirms the value is a *structurally valid* GTIN (correct
length, correct check digit) — it does **not** confirm the number was actually issued/registered
to anyone via GS1's real registry, since this build has no connectivity or business relationship
with GS1. That distinction matters: a syntactically valid but never-issued GTIN will still pass.

## Consequences

- This defers, rather than answers, the strategic question ("standard body vs. platform feature") raised in the earlier documentation review. That question is a business/governance decision, not an engineering one, and is out of scope for this build session.
- The README roadmap explicitly calls this out as **unresolved and requiring a decision from the product owner before any external-facing "standard" claims are made**.
- Checksum validation closes the narrower, purely technical gap this ADR originally flagged
  ("no validation against GS1's actual check-digit algorithm implemented yet") without touching
  the strategic question at all — those are independent, and only the technical one was ever an
  engineering task Claude could resolve unilaterally.
