---
title: "ADR-034: Document Metadata Model"
sidebar_label: "ADR-034"
sidebar_position: 34
---

**Status:** Accepted
**Date:** 2026-08-20
**Raised by:** re-audit against the source spec (2026-08-19), Phase 4 (product content &
relationships) of the self-directed build sequence (`BACKLOG.md`) — item 16, the last item of
Phase 4, found independently by 2 of 5 re-audit passes across 6 chapters.

## Context

Deel 3 §36-37, Deel 6 §46-48, Deel 7 §50-53, Deel 13 §7-31, Deel 18 §9-26, and Deel 22 §67-69 all
describe the same gap: `Document` (ADR-017 built only the storage *backend* — where bytes actually
live — not this metadata shape) had no `documentType`, no integrity/dedup mechanism, no validity
window, no lifecycle state, and no certificate-specific fields. Concretely, from Deel 13 alone:

- **Standardized document/asset types** (Deel 13 §14, Deel 7 §50): `PRIMARY_IMAGE`,
  `GALLERY_IMAGE`, `TECHNICAL_DRAWING`, `DATASHEET`, `MANUAL`, `CERTIFICATE`, `DECLARATION`,
  `SAFETY_DOCUMENT`, `INSTALLATION_GUIDE`, `VIDEO` — the union across both chapters.
- **Integrity and dedup via checksum** (Deel 13 §9-10): every upload gets a SHA-256; identical
  bytes uploaded twice can reuse the same stored asset rather than doubling storage.
- **Validity windows** (Deel 7 §52): `validFrom`/`validUntil`, "voor certificaten is dit
  essentieel," but meaningful for any document type.
- **Document versions / current-version clarity** (Deel 7 §51): "de actuele versie moet duidelijk
  bepaald zijn."
- **Certificate-specific metadata** (Deel 13 §27-28): `certificateNumber`, `issuer`
  (preferably a real `issuerOrganizationId` when the issuer is itself an OSPI organization),
  `issuedAt`, `scope`.
- **Ordering** (Deel 13 §16): `sortOrder` as presentation metadata.

**A real, explicit distinction the spec draws but this ADR deliberately collapses**: Deel 13 §15
separates "asset type" (intrinsic to the file) from "product role" (how one specific product uses
it — "an image can be the primary image for one product and a gallery image for another"), which
only matters if a single physical asset is reused across multiple products via a many-to-many
`ProductAsset` join. `Document.productId` remains a direct, nullable FK in this build (one document,
at most one product) — not restructured into that join table — so there is nothing for "type" and
"role" to differ ACROSS in practice; this ADR uses one field, `documentType`, covering the full
union list.

## Decision

**`Document` gains**: `documentType` (the union enum above, default `OTHER`), `lifecycleStatus`
(`ACTIVE`/`SUPERSEDED`/`ARCHIVED`, default `ACTIVE` — answers "which version is current" via
filtering rather than a separate version-chain model: an old version moves to `SUPERSEDED`, not
deleted), `validFrom`/`validUntil`, `checksum` (SHA-256 hex), `sortOrder` (default `0`), and
`certificateMetadata` (a single `Json?` blob — `{certificateNumber?, issuer?,
issuerOrganizationId?, issuedAt?, scope?}` — collapsed from 5 separate typed columns since none of
them need to be queried or joined on in this pass; `issuerOrganizationId` inside the JSON is a
convention pointing at a real Organization id when known, not a DB-enforced foreign key).

**Real SHA-256 dedup, not just a stored hash**: `DocumentsService.upload()` computes the checksum
from the actual decoded bytes, then checks for an existing `Document` in the same organization with
the identical checksum. If found, the NEW document row reuses that existing row's `storageRef`
instead of calling `DocumentStorageService.upload()` a second time — the underlying bytes are
genuinely stored once, while the new row still gets its own name/`productId`/`documentType`, since
the same physical file can legitimately serve a different role attached to a different product.
`CreateDocumentDto` (the metadata-only path, which never sees any bytes) accepts an optional
caller-supplied `checksum` instead, since there's nothing to compute one from at that layer.

**`PATCH /documents/:id`** (new) updates `documentType`/`lifecycleStatus`/`validFrom`/`validUntil`/
`sortOrder`/`certificateMetadata` without ever touching the stored file — metadata corrections
(e.g. discovering a certificate's real expiry after upload, or marking an old manual `SUPERSEDED`)
shouldn't require re-uploading bytes that haven't changed.

**`GET /documents?documentType=SAFETY_DOCUMENT`** (new filter) — the concrete query this metadata
exists to answer ("does this product have a safety document"), validated against the known enum
with a clean `400` on an unrecognized value rather than a raw ORM error.

**Deliberately NOT built in this pass** (flagged, not silently dropped): Deel 13 §30's document
provenance (`uploadedBy`/`sourceOrganization`/`sourceSystem`/`sourceReference`) — not part of this
item's already-agreed field list; Deel 13 §17-19's per-locale document content (a `Manual` in
`nl-BE`/`fr-BE`/`en-GB`) — a related but separate concern from ADR-032's product-field localization,
not attempted here; Deel 7 §53's digital signatures — explicitly named by the spec itself as
post-MVP ("Dit wordt niet verplicht voor MVP maar het datamodel mag dit niet onmogelijk maken" — the
new nullable, additive fields don't foreclose adding this later).

## Consequences

- Verified end-to-end over live HTTP against a live Postgres instance: uploading a `CERTIFICATE`
  document with `validFrom`/`validUntil` and full `certificateMetadata`
  (`certificateNumber`/`issuer`/`scope`) round-tripped correctly, and its `checksum` was
  independently recomputed in Python from the same raw bytes and confirmed to match exactly.
  Uploading the IDENTICAL bytes a second time with a different name and `documentType: DATASHEET`
  produced a distinct new `Document` row that reused the exact same `storageRef` as the first —
  confirming the dedup actually skips a second physical store, not just a second checksum
  computation. `PATCH /documents/:id` correctly moved a document to `SUPERSEDED` without touching
  its stored bytes. `GET /documents?documentType=DATASHEET` and `?documentType=CERTIFICATE`
  correctly returned exactly the matching documents each; an unrecognized `documentType` value
  correctly `400`'d instead of surfacing a raw database error.
- This closes `BACKLOG.md` Phase 4 (product content & relationships) in full — ADR-032
  (localization), ADR-033 (relationships), and now ADR-034 (document metadata) together deliver
  everything that phase named, narrowed in the specific, documented ways each ADR states.
