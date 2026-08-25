---
title: "ADR-004: OSPI Code Checksum Algorithm"
sidebar_label: "ADR-004"
sidebar_position: 4
---

**Status:** Accepted — explicitly ratified by product owner (2026-08-17), including the decision not to seek external validation before real codes are issued.
**Date:** 2026-08-16

## Context

Deel 4, Deel 10, and Deel 23 consistently describe the OSPI code format as:

```
OSPI-[AAAA]-[BBBBBB]-[CCCCCCCC]-[DDDD]-[EEEEEEEE]-[V]-[FFF]
```

...and all three claim the checksum segment `FFF` (3 alphanumeric characters) is computed via the **Luhn algorithm**. This is internally inconsistent: Luhn is defined over numeric digit streams and produces a single check digit, not a 3-character alphanumeric checksum. All three source documents repeat the same error, so this is not resolvable by picking a "more authoritative" chapter — the underlying algorithm was never actually specified.

## Decision

Replace the checksum with a **base32 (Crockford alphabet) encoded CRC-16/CCITT-FALSE checksum** of the preceding segments (`AAAA-BBBBBB-CCCCCCCC-DDDD-EEEEEEEE-V`, ASCII bytes, no hyphens):

1. Compute CRC-16/CCITT-FALSE over the concatenated identifier body.
2. Encode the resulting 16-bit value using Crockford's Base32 alphabet (excludes ambiguous characters I, L, O, U), left-padded, truncated/mapped to exactly 3 characters (32^3 = 32,768 ≥ 65,536 range requires the top bits to be dropped intentionally — accepted as a detection-only, not cryptographic, checksum, consistent with the original intent of catching transcription errors, not fraud).
3. This is implemented once in `libs/ospi-code/checksum.ts` and is the single source of truth — no other part of the system reimplements it.

This is a pragmatic, unambiguous, implementable replacement for the broken Luhn reference. It is explicitly flagged as a **build-time decision requiring formal sign-off** before OSPI codes are issued to any real external party, since the checksum algorithm is effectively part of the public identifier standard and changing it later breaks previously-issued codes.

## Consequences

- Every previously-drafted example OSPI code in the documentation that shows a Luhn-derived checksum is now invalid and must be regenerated.
- This is the single highest-risk ADR in the initial build: it defines part of a public, supposedly permanent identifier format. Flagged in the README roadmap as **requires human/team ratification before any production code issuance**.
