---
title: "ADR-017: Object Storage via a Swappable Interface, Local-Disk Implementation for Now"
sidebar_label: "ADR-017"
sidebar_position: 17
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** product owner priority pick, among four follow-ups selected together with ADR-018 (RBAC), ADR-019 (bulk endpoints), and the network-wide search extension of ADR-012.

## Context

Before this, `Document.storageRef` was a caller-supplied opaque string with nothing behind it —
there was no `POST /documents/upload`, only `POST /documents` registering *metadata* the caller
promised pointed at a file stored somewhere else. A real S3/GCS/Azure Blob integration is the
obvious real answer, but this build environment has no cloud credentials and no network access
to install a cloud SDK or verify it against a real bucket — the same constraint documented
throughout this session (see README "Known limitations").

## Decision

`DocumentStorageService` (`src/documents/storage/document-storage.interface.ts`) is the seam:
`upload(...)`, `getDownloadUrl(...)`, `delete(...)`. `DocumentsService` and every controller are
written against this interface, not a concrete implementation.

`LocalDocumentStorageService` is the current binding (`DocumentsModule`'s `DOCUMENT_STORAGE`
provider) — a **real, working implementation**, not a stub: it actually writes bytes to disk
(`DOCUMENT_STORAGE_DIR`, default `./storage/documents`) and reads them back. It is not a fake
that returns made-up URLs. What it is not: cloud-backed, distributed across multiple app
instances, or backed by anything with built-in redundancy — it's exactly as durable as the
single machine's disk it runs on.

- `POST /documents/upload` accepts `{ name, filename, mimeType, contentBase64, productId?,
  visibility? }`, decodes and stores the content, then creates the `Document` metadata row in
  one call — collapsing the previous two-step "upload elsewhere, then register" flow.
- Content travels as base64 in a JSON body, not `multipart/form-data`. A real multipart path
  (via `@nestjs/platform-express`'s `FileInterceptor`) needs the `multer` package, which isn't
  in `package.json` and can't be installed here (no network access) — using it without
  installing it would mean shipping code that references a dependency nobody has verified
  resolves. Base64-in-JSON needed zero new dependencies (built-in `Buffer`/`fs` only) and is a
  real, working upload path today. A capped size (20MB, `MAX_UPLOAD_BYTES` in
  `documents.service.ts`) keeps this reasonable for spec sheets/certificates/images; large media
  should get a real multipart/streaming path before this is used for anything bigger.
- `GET /documents/:id/download-url` resolves a document to a fetchable reference. Today that's
  a local filesystem path (no web server exposes the storage directory as an HTTP path in this
  build) — a real deployment replaces this with either a static-file route or a signed,
  time-limited URL, which is exactly what `getDownloadUrl` on a real cloud implementation would
  return natively without changing its call sites.
- `storageRef` format is `local://<uuid><ext>` — always a freshly generated UUID on disk, never
  the caller-supplied filename, so a crafted filename can't path-traverse out of the storage
  directory. Verified directly (not just by inspection): a standalone script wrote a file,
  round-tripped its exact byte content back, confirmed a `local://../../etc/passwd`-style
  reference is rejected, and confirmed delete actually removes the file.

## Consequences

- Swapping in a real cloud backend later is one new class implementing `DocumentStorageService`
  plus changing the `DOCUMENT_STORAGE` provider binding in `DocumentsModule` — `DocumentsService`
  and every controller stay untouched.
- **Not production-durable as-is.** Local disk means: no redundancy, doesn't survive the
  container/VM being replaced, and doesn't work correctly with more than one API process unless
  they share a filesystem (e.g. a mounted volume) — the same "not distributed" caveat ADR-016's
  rate limiter already carries, for the same underlying reason (no infrastructure available to
  install/verify a distributed alternative here).
- `storage/` is gitignored — uploaded file bytes should not end up in the repository.
- `MAX_UPLOAD_BYTES` (20MB) and base64-in-JSON are an MVP-scale choice, not a permanent one; a
  multipart/streaming path is the right follow-up once `multer` (or an equivalent) can actually
  be installed and tested.
