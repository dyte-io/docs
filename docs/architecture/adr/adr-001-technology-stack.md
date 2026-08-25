---
title: "ADR-001: Technology Stack"
sidebar_label: "ADR-001"
sidebar_position: 1
---

**Status:** Accepted
**Date:** 2026-08-16
**Deciders:** Product owner + Claude (build agent), per explicit request to make pragmatic decisions and document them for later review.

## Context

The Project Constitution (Deel 1, §7) mandates technology neutrality until requirements are settled, and explicitly defers the stack decision ("Nog niet vastgelegd"). The High-Level Architecture doc likewise leaves this open, only noting PostgreSQL as a likely candidate. To begin implementation, a concrete choice is required.

Target scale per Constitution §6.3: from 10 companies / 100,000 products to an architectural guideline of 100,000+ companies / 100,000,000+ products, without a full architectural rewrite.

## Decision

- **Language/runtime:** TypeScript on Node.js
- **API framework:** NestJS (modular, opinionated, DI-based — maps directly onto the "modular monolith first" principle in Constitution §37 and High-Level Architecture's logical module boundaries)
- **ORM/schema:** Prisma, backed by **PostgreSQL**
- **API style:** REST + OpenAPI (via `@nestjs/swagger`), matching Constitution §13 (OpenAPI is mandatory for public APIs)
- **Async/background processing:** BullMQ + Redis (deferred to when the first async job — bulk import — is implemented; not required for the initial skeleton)
- **Deployment:** container-based (Docker), stateless API processes behind a load balancer, per Constitution §8.2/§8.3

## Rationale

At this platform's scale, the dominant bottleneck is the **data layer** (indexing, partitioning, read replicas, caching, search), not the API language. That layer's design is identical in shape regardless of language choice. NestJS enforces domain-bounded modules (Organizations, Identity, Products, Classification, ...) that can later be extracted into independent services when justified (Constitution §37/§38) without a rewrite of the rest of the system. CPU-heavy or bulk work (imports, search indexing, checksum computation at scale) is pushed to asynchronous background workers per Constitution §27 — those workers can be reimplemented in a faster language later without touching the API contract.

TypeScript/NestJS was chosen over Go and Java/Spring primarily for team-scaling reasons: broad hiring pool, native OpenAPI tooling, and Prisma's type-safe handling of the extensible/dynamic attribute model (JSONB + validation layer) fits the domain model described in Deel 11/24 well.

## Alternatives considered

- **Go:** Better raw concurrency/performance, but slower to iterate on a large, evolving domain model (26 chapters worth of entities) and a smaller pool of business-logic-focused developers.
- **Java/Kotlin (Spring Boot):** Proven at this scale (comparable to SAP/Salesforce-class backends), but materially slower development velocity for an MVP-stage product.
- **Python (FastAPI/Django):** Fast to prototype, but weaker performance ceiling for the core API hot path at target scale; better suited to auxiliary data/ML tooling than the core platform.

## Consequences

- The team hired later should be TypeScript/Node-proficient for the core platform; polyglot workers are acceptable for extracted services.
- Prisma migrations become the source of truth for schema evolution; must stay disciplined about migration review given multi-tenant data.
- This ADR does not lock in the *database topology* (single instance vs. sharded vs. multi-region) — see ADR-007.
