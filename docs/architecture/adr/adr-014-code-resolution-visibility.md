---
title: "ADR-014: OSPI Codes Are Identifiers, Not Secrets — Visibility on Code Resolution Follows Document.visibility, Not a Login Wall"
sidebar_label: "ADR-014"
sidebar_position: 14
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** product owner — questioned whether checksum + serial number together provide
real guessing-resistance, then (correctly) pushed back that the same product data is often
already public on the producer's own website, so an auth wall on `resolve/:code` might be
solving nothing while breaking the spec's no-login "scan a code" use case.

## Context

Following ADR-013 (DPP access token), a related but distinct question came up: does the OSPI
code itself — specifically the combination of the checksum (ADR-004) and the serial/batch
segment — provide a meaningful security barrier for `GET /search/resolve/:code`
(structural + existence resolution of a code, Deel 4 §26-27 / Deel 19 §1)?

**The checksum contributes zero guessing-resistance, even combined with anything else.** It is
CRC-16/CCITT-FALSE, a deterministic, publicly documented, publicly computable function of the
other segments (ADR-004). An attacker does not need to guess the checksum for a candidate code
body — they compute it. "Checksum + serial" therefore has exactly the same guessing-resistance
as the serial alone; the checksum adds nothing to that combination, by design (its job is
transcription-error detection, not access control).

The real predictability question is `companyProductId` (`CCCCCCCC`) and `serialBatch`
(`EEEEEEEE`). Per Deel 4 §14, `companyProductId` is producer-assigned and explicitly meant to
map onto the producer's own internal numbering — which is very often sequential. `serialBatch`
defaults to a fixed `00000000` placeholder when a producer doesn't use per-unit serialization
(ADR-008). So a determined caller absolutely can enumerate plausible codes for a known producer
code + category.

The first fix considered was requiring authentication on `resolve/:code`, mirroring
`IdentityController.lookupCode` (which was already behind auth). On reflection, prompted
directly by the product owner, that fix is both too strong and not actually targeted at the
real problem:

- **Too strong**: Deel 4 §26-27 describes resolving a code as a no-login "scan and see what it
  is" action — the same use case ADR-013 already protected for DPP specifically. Slapping a
  login wall on general code resolution breaks that for the *entire* endpoint, not just the
  sensitive parts of it.
- **Not targeted**: the basic identity fields this endpoint returns (code exists, product name,
  category, manufacturer) are frequently *already public* on the producer's own website or
  packaging — that's not the data this decision needs to protect. What actually varies in
  sensitivity is attached `Document`s, which already carry a producer-set `visibility`
  (`PUBLIC` / `RESTRICTED` / `PRIVATE`) — a mechanism that predates this ADR but was, before
  this change, not being enforced correctly on this endpoint (`RESTRICTED` documents were
  returned to every caller, anonymous or not).

## Decision

`GET /search/resolve/:code` stays reachable without authentication (`@OptionalAuth()`, a new
guard mode: validates a token if one is present, but does not require one — see
`src/common/decorators/index.ts` / `src/common/guards/auth.guard.ts`). Basic identity data is
treated as public registry data, comparable to looking up a GS1 GTIN — the producer chose to
register it, and its existence is not meant to be a secret.

What actually gates exposure is `Document.visibility`, now enforced correctly:

- `PUBLIC` documents: returned to every caller, anonymous included.
- `RESTRICTED` documents: returned only once `SharingService.hasAccess(ownerOrgId,
  callerOrgId, 'CONTENT', product)` (ADR-010) confirms the caller's organization is the owner
  or holds an active `CONTENT` sharing grant. Anonymous callers and unrelated organizations
  never see these, regardless of how they found the code.
- `PRIVATE` documents: never returned via this endpoint, full stop.

This makes the producer's own per-document visibility choice the actual access-control
boundary — "as indicated in the docs, the producer decides what's public" — rather than
relying on the code being hard to guess, and rather than an all-or-nothing login wall.

Enumeration/bulk-scraping risk from predictable `companyProductId`/`serialBatch` values is
real but is explicitly **not** solved by this ADR — see Consequences. It is a rate-limiting /
abuse-detection problem, not a data-classification problem, and neither this endpoint nor any
other in this build has rate limiting yet (README known limitations).

## Consequences

- `resolve/:code`'s anonymous behavior is now correct relative to what it already exposed for
  every non-`PUBLIC` document before this change (a regression this ADR happens to fix, not
  just a proactive hardening).
- The same visibility logic does **not** retroactively apply to `DppRecord.compose()`
  (ADR-013), which still returns `PUBLIC` + `RESTRICTED` documents to anyone holding a valid
  access token. That's a deliberate difference, not an inconsistency: possession of a DPP
  token is itself evidence of a legitimate reason to view that specific passport (it was
  handed out once, per record, and is revocable), whereas mere knowledge of an OSPI code is
  not — codes are structurally guessable and are not credentials.
- A producer whose `companyProductId` numbering is sequential can still have their catalog's
  *basic identity* (name/category/manufacturer, for `PUBLIC`-classified products) enumerated by
  someone iterating candidate codes — this ADR does not prevent that, because that data is
  treated as intentionally public. If a producer wants their catalog to not be bulk-enumerable
  at all, the mitigation is rate limiting on this endpoint (still a README-flagged gap, not yet
  built) or non-sequential `companyProductId` assignment — not a login wall on lookups, which
  the product owner correctly identified would not have matched the intended use case anyway.
- `SearchModule` now depends on `SharingModule` (previously only `IdentityModule`) to reach
  `SharingService.hasAccess`.
