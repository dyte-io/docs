---
title: Architecture overview
sidebar_label: Overview
sidebar_position: 1
slug: /
---

# Architecture overview

This section documents how the OSPI platform ([`ospi-platform`](https://github.com/BrickeVD/ospi-platform)) is actually built, and — just as importantly — every place the source specification left something ambiguous, conflicting, or unspecified, and what the build decided instead.

The source specification is a set of 26 domain chapters ("Deel 1" through "Deel 26") plus a Project Constitution. Those chapters were written independently over time and, in several places, disagree with each other or describe something that cannot literally be implemented as written (a checksum algorithm applied to the wrong kind of data, duplicate chapters with diverging enum values, ambiguous identifier segment widths). Rather than silently picking one interpretation, every such judgment call was written down as a numbered **Architecture Decision Record (ADR)**.

## How to use this section

- **Start with [ADR-001](/architecture/adr/adr-001-technology-stack)** for why the platform is a NestJS/PostgreSQL modular monolith rather than a microservice mesh.
- **Read [ADR-004](/architecture/adr/adr-004-ospi-code-checksum) and [ADR-008](/architecture/adr/adr-008-ospi-code-segment-widths) before issuing any OSPI code to a real external party** — together they define the actual, implemented public identifier format. The source documents' Luhn-checksum description is mathematically broken (Luhn operates on numeric digit streams, not a 3-character alphanumeric segment); ADR-004 replaces it with a CRC-16/base32 checksum instead, explicitly flagged as requiring formal ratification before production issuance.
- **Read [ADR-010](/architecture/adr/adr-010-sharing-scope-model) and [ADR-022](/architecture/adr/adr-022-rule-based-sharing-scopes)** before connecting two real organizations — together they are the entire access-control model for cross-organization data.
- Several ADRs are marked **provisional / requires ratification**. Treat those as open decisions for the team, not settled fact.
- Some questions are explicitly **not** answered by any ADR because they aren't engineering questions — see [Open governance questions](#open-governance-questions) below.

## Domain chapters implemented

| Deel | Title | Status |
| --- | --- | --- |
| Constitution §43 | MVP boundary (Identity, Organizations, Auth, Producer Codes, OSPI Codes, Products, Variants, Categories, Attributes, Classification, Documents, Audit) | Built |
| Deel 12 | Digital Product Passport | Built as a generic scaffold — **not** an EU ESPR compliance implementation, see [ADR-006](/architecture/adr/adr-006-dpp-espr-stance) |
| Deel 14 | Product Sharing & Data Distribution | Built |
| Deel 15 | Connections, Partners & Ecosystem | Built |
| Deel 16 | Inventory, Availability & Where to Find | Built |
| Deel 17 | Ordering & Commerce API | Built (no payments, no automatic stock reservation — see [ADR-011](/architecture/adr/adr-011-ordering-mvp-simplifications)) |
| Deel 19 | Search, Discovery, Product Resolver & OSPI Graph | Built (PostgreSQL full-text search, not a dedicated search engine — see [ADR-012](/architecture/adr/adr-012-search-postgres-fts)) |

## Open governance questions

These are recorded because they materially affect how the platform should be used, but no ADR resolves them — they are not engineering problems:

- Who owns/governs the OSPI standard itself (foundation, consortium, single company)?
- The relationship to GS1/GTIN — complement, integrate, or compete? (`gtin` values are checksum-validated against GS1's published algorithm, but this does **not** confirm registration with GS1 — see [ADR-005](/architecture/adr/adr-005-gs1-relationship).)
- Legal review of Digital Product Passport claims against the actual EU ESPR delegated acts.

Treat these as blocking for anything beyond internal prototyping, particularly once real money moves through the Ordering module.

See also: [Domain model](/architecture/domain-model).
