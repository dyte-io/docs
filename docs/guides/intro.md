---
title: Introduction
sidebar_position: 1
slug: /
---

# OSPI

**OSPI (Open Standard Product Identification)** is an open standard and API platform for product identity, master data, and cross-organization product data exchange. It gives every product and variant a globally unique, checksum-verified identifier (an **OSPI code**), and a single REST API for managing that product's data, sharing it with other organizations, and trading it.

This documentation covers the reference implementation — [`ospi-platform`](https://github.com/BrickeVD/ospi-platform), a NestJS/PostgreSQL API — not just a paper specification. Every example on this site is a real, working endpoint.

## What you can do with the API

- **Issue identifiers.** Register as a producer, get a Producer Code, and mint OSPI Identities for your products and variants.
- **Manage product master data.** Products, variants, categories, a schema-driven attribute engine, documents, and translations.
- **Track inventory.** Locations and stock, with availability always derived at read time.
- **Share data across organizations.** Request a connection, grant scoped access to exactly the products and data categories you choose.
- **Search and resolve.** Full-text product search, and a public "scan a code, get the product" resolver.
- **Trade.** List offers, place orders, split fulfilment per seller.
- **Publish a Digital Product Passport scaffold.** (Not yet a compliance implementation — see [ADR-006](/architecture/adr/adr-006-dpp-espr-stance).)

## Where to go next

- [Quickstart](/guides/quickstart) — register an organization and mint your first OSPI code in five calls.
- [Authentication](/guides/authentication) — JWTs vs. API keys.
- [Core concepts](/guides/core-concepts) — organizations, identity, products, sharing, in one page.
- [API Reference](/api-reference) — every resource, endpoint by endpoint.
- [Architecture](/architecture) — the 34 decisions behind how the platform is actually built, and the open questions that aren't engineering problems.

## Status

This is a real, running MVP, not a mockup: `npx tsc --noEmit` is clean, the full test suite passes, and the flows documented here (register → issue a producer code → mint an OSPI code → create a product → share it with another organization → order it) have been exercised end-to-end against a real PostgreSQL database. It is **not** production-hardened — see [What's built vs. what's still missing](https://github.com/BrickeVD/ospi-platform#whats-built-vs-whats-still-missing) and the [open governance questions](/architecture#open-governance-questions) before connecting real external parties.
