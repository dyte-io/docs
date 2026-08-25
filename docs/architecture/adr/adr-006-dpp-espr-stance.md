---
title: "ADR-006: DPP / EU ESPR Compliance Stance (MVP scope)"
sidebar_label: "ADR-006"
sidebar_position: 6
---

**Status:** Accepted for MVP — legal/ESPR review explicitly deferred until post-MVP validation (product owner decision, 2026-08-17). Superseded in part by the DPP scaffold actually built (`src/dpp/`, ADR-013) — see note below.
**Date:** 2026-08-16

## Context

Deel 12/18 describe "DPP profiles" as a self-defined concept, with no mapping to the actual EU Ecodesign for Sustainable Products Regulation (ESPR), which is the real regulatory driver for Digital Product Passports and defines category-specific delegated acts (batteries first, textiles/electronics following) with legally binding data requirements.

## Decision (MVP scope only)

**Correction (2026-08-17):** this ADR originally said DPP was "out of scope for this initial
build." That became stale once the build actually proceeded further (per the product owner's
"Maak de rest ook" instruction) and a generic DPP scaffold was built (`src/dpp/`, `DppProfile` →
`DppRecord` → live composition from existing Attributes/Documents — see ADR-013 for its access
model). What's still true, and is the actual substance of this ADR, is the compliance stance:
**no ESPR compliance claim is made or implied by that scaffold.** It's a generic
"profile defines required attributes → compose from existing product data" mechanism (Deel 12
§2/§5), with zero mapping to ESPR's actual category-specific delegated acts. The data model's
extensibility (the same dynamic Attribute/Classification engine used for products generally)
is what made adding the scaffold possible without core schema changes — that part of the
original reasoning held up correctly.

**Product owner decision (2026-08-17):** legal/ESPR review of this scaffold happens later,
after MVP validation — not before. The scaffold stays exactly as generic as it is today until
that review determines what, if anything, needs to change for a real compliance claim.

## Consequences

- This is explicitly flagged in the README roadmap as **not legally reviewed** — before OSPI is marketed as supporting DPP/ESPR compliance, a legal review against the actual regulation (and its category-specific delegated acts) is required. That review is now explicitly scheduled for post-MVP, not blocking current work.
