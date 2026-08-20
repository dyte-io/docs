---
title: "ADR-013: DPP Public Access Uses a Dedicated High-Entropy Token, Not the Checksum"
sidebar_label: "ADR-013"
sidebar_position: 13
---

**Status:** Accepted — explicitly ratified by product owner (2026-08-17): the 256-bit token + rotation approach is sufficient as-is; no additional layer (temporary/expiring tokens, IP/geolocation restriction) requested.
**Date:** 2026-08-17
**Raised by:** product owner — a published DPP page must not be reachable by guessing/enumeration,
without requiring a password (Deel 12's "scan a QR code" use case has no login step).

## Context

`GET /dpp/:id` (added when the DPP scaffold was built) exposes a PUBLISHED `DppRecord`
without authentication. It was originally keyed by the record's own database ID (a random
UUID). The product owner correctly flagged that the OSPI code checksum (ADR-004) must not be
repurposed as the access barrier here: the checksum is only 3 characters — 32,768 possible
values — and is explicitly documented (Deel 4 §25, and ADR-004 itself) as an error-detection
mechanism, not a security mechanism. An attacker could enumerate every checksum value against
a known code body in well under a second. Weakening the checksum's design to also serve as an
access barrier would make it both a worse checksum and a worse access barrier.

Using the database primary key (a v4 UUID, ~122 bits of entropy) as the sole public identifier
was already reasonably resistant to brute-force guessing, but it conflates two different
things: an internal row identifier, and a "possession of this link grants access" capability.
That conflation makes it impossible to revoke a leaked link without deleting the underlying
record, and ties a security property to a value (the primary key) that was never designed to
carry one.

## Decision

Every `DppRecord` gets a dedicated `accessToken`: 256 bits of randomness
(`crypto.randomBytes(32)`, base64url-encoded — same generation pattern already used for M2M
API keys in `AuthService.createApiClient`), generated at record creation and stored in a
unique, indexed column, **separate from both the database `id` and the OSPI code**.

- The public endpoint moves from `GET /dpp/:id` to `GET /dpp/:accessToken` — the database `id`
  is never exposed in the public/QR-code URL at all.
- The token is the sole credential: no password, no login, matching the "scan and view" DPP
  use case. Its entropy (2^256 possibilities) makes online enumeration infeasible regardless
  of rate limiting, though rate limiting remains recommended defense-in-depth (still not
  implemented anywhere in this build — see README known limitations).
- A dedicated owner-only endpoint, `POST /dpp-records/:id/rotate-token`, regenerates the
  token. This immediately invalidates every previously-issued QR code/link for that record —
  the intended response to a suspected leak, without deleting the DPP record or its history.
- Only `PUBLISHED` records are reachable this way at all (unchanged from the original design)
  — `DRAFT`/`VALIDATING`/`VALID`/`SUSPENDED` records return 404 regardless of token.

## Consequences

- The checksum (ADR-004) is untouched and keeps its original, narrower job.
- Owners must distribute the *token-bearing* URL (returned on record creation and on
  rotation), not a URL built from the record's `id`. This is a breaking change to the DPP
  controller's route shape — acceptable since nothing has been deployed yet.
- A future rate-limiting layer (already flagged generally in the README) should still cover
  this endpoint, as defense-in-depth against token-guessing is cheap insurance even though the
  entropy alone makes it impractical today.
