---
title: Documents
sidebar_position: 7
---

# Documents

Document metadata — datasheets, certificates, manuals, images — attached to products, with real file storage behind a swappable abstraction ([ADR-017](/architecture/adr/adr-017-document-storage-abstraction)).

## Endpoints

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/documents` | Create document metadata (reference an already-stored file) | `documents:write` |
| `POST` | `/documents/upload` | Upload file content and create the document in one call | `documents:write` |
| `GET` | `/documents` | List documents, filterable by `?documentType=` | — |
| `GET` | `/documents/:id` | Get one document | — |
| `PATCH` | `/documents/:id` | Metadata-only correction | `documents:write` |
| `GET` | `/documents/:id/download-url` | Resolve a stored document to a fetchable reference | — |

## Upload

```http
POST /api/v1/documents/upload
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "prd_...",
  "documentType": "DATASHEET",
  "fileName": "datasheet-v2.pdf",
  "contentBase64": "JVBERi0xLjQK...",
  "visibility": "PUBLIC"
}
```

Content is currently accepted as base64-in-JSON (no `multipart`/`multer` dependency wired up in this build). Uploads are deduplicated by a real SHA-256 `checksum` — identical bytes reuse the existing `storageRef` instead of being stored twice. Storage is currently a real local-filesystem implementation — durable for a single API process, but not redundant and not shared across multiple processes; swapping in a cloud backend is a provider-binding change, not a rewrite of `DocumentsService` or any controller.

## Metadata fields

`documentType`, `lifecycleStatus`, `validFrom`/`validUntil`, `checksum` (SHA-256), `sortOrder`, and `certificateMetadata` ([ADR-034](/architecture/adr/adr-034-document-metadata)).

## Visibility

Each document carries a producer-set `visibility`:

- **`PUBLIC`** — always returned, including through the unauthenticated [OSPI Code Resolver](/api-reference/search#resolver).
- **`RESTRICTED`** — only returned once the caller's organization is the owner or holds an active `CONTENT` sharing grant.
- **`PRIVATE`** — never returned through the resolver or partner-facing reads.
