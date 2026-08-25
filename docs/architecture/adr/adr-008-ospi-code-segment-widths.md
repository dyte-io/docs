---
title: "ADR-008: OSPI Code Segment Widths Are Variable, Not Fixed"
sidebar_label: "ADR-008"
sidebar_position: 8
---

**Status:** Accepted — explicitly ratified by product owner (2026-08-17), including the decision not to seek external validation before real codes are issued.
**Date:** 2026-08-16

## Context

Deel 4 §3 shows the format template `OSPI-[AAAA]-[BBBBBB]-[CCCCCCCC]-[DDDD]-[EEEEEEEE]-[V]-[FFF]`, which reads as fixed-width segments (4/6/8/4/8/1/3 characters). But Deel 4 §8 separately states the Producer Code (`AAAA` in the template) allows **up to 12 characters**, which contradicts a literal 4-character fixed width. Deel 4 §21 also requires "one fixed canonical serialization" for optional segments (variant code, serial/batch) without specifying what that is.

## Decision

Treat the bracketed placeholders (`AAAA`, `BBBBBB`, etc.) in the template as **illustrative, not literal fixed widths**. Segments are variable-length, uppercase `A-Z0-9` only (Deel 4 §9), with these MVP-implemented maximum lengths:

- Producer Code: 1–12 characters (per §8, explicit)
- Product Category: 1–6 characters (as a working default; the "OSPI category registry" itself does not exist yet — see README roadmap)
- Company Product ID: 1–8 characters
- Variant Code: 1–4 characters, **omitted segment canonically represented as `0000`** when the product has no variant (resolves the §21 "one fixed standard" requirement, which the source docs leave unspecified)
- Serial/Batch Number: 1–8 characters, **omitted segment canonically represented as `00000000`**
- Version: single digit, starts at `1`
- Checksum: exactly 3 characters (see ADR-004)

## Consequences

- This is a genuine gap-fill, not a neutral transcription of the docs — flagged in the README as **requires ratification** before OSPI codes are issued externally, same as ADR-004.
- The "OSPI category registry" referenced in Deel 4 §12 does not exist as a governed, versioned list anywhere in the current build; Category codes are currently free-form per-organization strings. This is called out explicitly as a roadmap item, not silently implemented as if it were solved.
