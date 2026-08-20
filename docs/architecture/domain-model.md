---
title: Domain model
sidebar_label: Domain model
sidebar_position: 2
---

# Domain model

The platform is a single PostgreSQL database (via Prisma) with one module per bounded domain. This page groups the real schema models (`prisma/schema.prisma`) by module — see the linked ADRs for why each shape was chosen where the source spec was ambiguous.

## Organizations & Identity

- **Organization** — the tenant. Every other row in the system is scoped to one, either directly (`organizationId`) or transitively.
- **LegalEntity**, **User**, **Session** — an organization's legal registration and its human users; `Session` backs refresh-token revocation ([ADR-028](/architecture/adr/adr-028-session-and-token-revocation)).
- **Role**, **UserRole** — custom, resource-scoped roles on top of a seeded `'*'` Owner role ([ADR-018](/architecture/adr/adr-018-fine-grained-rbac), [ADR-023](/architecture/adr/adr-023-resource-scoped-roles-and-system-roles)).
- **ApiClient** — machine-to-machine credentials (`ospi_<clientId>.<secret>`).

## Producers & OSPI Codes

- **Producer** — an organization's registration as a producer of goods.
- **ProducerCode** — the `AAAA` segment of the OSPI code, issued per producer.
- **OspiIdentity** — the global product/variant identifier: producer code + company product id + variant, with a `RESERVED → REGISTERED → ACTIVE → SUSPENDED → RETIRED` lifecycle ([ADR-024](/architecture/adr/adr-024-product-identity-lifecycle-and-decimal-quantity)). The checksum and segment-width rules are [ADR-004](/architecture/adr/adr-004-ospi-code-checksum) and [ADR-008](/architecture/adr/adr-008-ospi-code-segment-widths).
- **SerializedUnit** — an optional, lightweight per-unit serial/batch record computed from its parent identity, never required for pricing ([ADR-015](/architecture/adr/adr-015-pricing-vs-serialization)).

## Products & Classification

- **Product**, **ProductVariant** — every variant always carries its own `OspiIdentity`.
- **ProductTranslation** — per-locale `name`/`description` with fallback resolution ([ADR-032](/architecture/adr/adr-032-product-localization)).
- **ProductRelationship** — directional links between products (`REPLACEMENT_FOR`, `ACCESSORY_FOR`, `COMPATIBLE_WITH`, `PART_OF`, `CONTAINS`, `VARIANT_OF`, `SUPERSEDES`, `REQUIRES`) ([ADR-033](/architecture/adr/adr-033-product-relationships)).
- **Category**, **CategoryAttributeSchema** — categories can be organization-owned or proposed as `global` under registry governance ([ADR-020](/architecture/adr/adr-020-category-registry-governance)); a category declares required/recommended/optional/forbidden attributes ([ADR-029](/architecture/adr/adr-029-category-attribute-schema)).
- **AttributeDefinition**, **AttributeValue** — the attribute engine. Every value carries a provenance/source and conflict state ([ADR-030](/architecture/adr/adr-030-attribute-value-provenance)); [ADR-003](/architecture/adr/adr-003-attribute-datatype-system) fixes the datatype system.
- **ClassificationScheme**, **ClassificationNode**, **ClassificationAssignment** — a separate, largely unused classification tree (attribute schemas attach to `Category` instead — see ADR-029 for why).

## Documents & Audit

- **Document** — file metadata (`documentType`, `lifecycleStatus`, `validFrom`/`validUntil`, SHA-256 `checksum`, `certificateMetadata` — [ADR-034](/architecture/adr/adr-034-document-metadata)); storage is behind an abstraction currently bound to local disk ([ADR-017](/architecture/adr/adr-017-document-storage-abstraction)).
- **AuditLog** — explicit `AuditService.log(...)` calls from every mutating service method, kept separate from application logs.

## Inventory

- **Location**, **InventoryRecord** — owner-scoped stock. `availableQuantity`/`availabilityStatus` are always *derived at read time*, never stored ([ADR-009](/architecture/adr/adr-009-inventory-record-shape)).

## Connections, Sharing & Search

- **Connection** — the request/accept/reject/suspend/terminate lifecycle between two organizations.
- **SharingGrant** — riding on an `ACTIVE` connection, scopes exactly which products and data categories a partner can see, optionally narrowed by an attribute-based `ruleFilter` ([ADR-010](/architecture/adr/adr-010-sharing-scope-model), [ADR-022](/architecture/adr/adr-022-rule-based-sharing-scopes)).
- Search is PostgreSQL full-text search plus a public OSPI code resolver ([ADR-012](/architecture/adr/adr-012-search-postgres-fts), [ADR-014](/architecture/adr/adr-014-code-resolution-visibility)).

## Ordering & Commerce

- **Offer** — a seller's commercial listing for a product (sellable even without owning it, given an `ORDERING` sharing grant), with optional per-buyer minimums ([ADR-021](/architecture/adr/adr-021-per-buyer-offer-minimum)).
- **Order**, **OrderGroup**, **OrderLine** — draft → add lines → submit → accept/reject → process → fulfil → complete, split per seller into an `OrderGroup` ([ADR-011](/architecture/adr/adr-011-ordering-mvp-simplifications)).

## Digital Product Passport & Webhooks

- **DppProfile**, **DppRecord** — a named, versioned list of required attribute codes, composed live from existing Attributes/Documents with no duplicated storage. Explicitly not an EU ESPR compliance implementation ([ADR-006](/architecture/adr/adr-006-dpp-espr-stance)); public access is gated by a rotatable 256-bit token, not the (low-entropy) OSPI checksum ([ADR-013](/architecture/adr/adr-013-dpp-public-access-token)).
- **WebhookSubscription**, **WebhookDelivery** — HMAC-signed, thin-payload event notifications with exponential-backoff retries and dead-lettering ([ADR-026](/architecture/adr/adr-026-webhooks)).

---

Every service method filters by `organizationId` explicitly (Constitution §14), and PostgreSQL Row-Level Security is layered on top as defense-in-depth ([ADR-007](/architecture/adr/adr-007-multi-tenancy-isolation)).
