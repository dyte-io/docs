---
title: Core concepts
sidebar_position: 4
---

# Core concepts

## Organization

The tenant. Every row you create belongs to one. An organization is created by `POST /auth/register`, starts with exactly one user (its Owner, holding every permission), and can invite more users once it needs more than one.

## Producer, Producer Code, OSPI Identity

Three layers, minted in order:

1. **Producer** — your organization registers itself as a maker of goods.
2. **Producer Code** — a short code (e.g. `ACME`) issued to that producer; this is the `AAAA` segment of every OSPI code it issues.
3. **OSPI Identity** — the actual global identifier for one product or variant: producer code + category code + your own product ID + optional variant/serial segments + a computed checksum. See [Producers & OSPI Codes](/api-reference/producers-and-ospi-codes).

In practice, step 3 usually happens inline: `POST /products` accepts an `identity` block and mints the OSPI Identity in the same call that creates the product.

## Product vs. Variant vs. Serialized Unit

- A **Product** is the thing you sell. It always has its own OSPI Identity.
- A **Variant** (size, color, ...) is a distinct sellable configuration — it **always** gets its own OSPI Identity too, not a suffix of the parent's.
- A **Serialized Unit** is one physical, individually-serialized item (a specific bottle off the line) — optional, computed from its parent identity, and never required just to price or sell the product.

Pricing (`Offer`) always resolves at the Product/Variant level. A point-of-sale system that never sees an individual serial number still resolves price correctly, by design.

## Category & Attributes

A **Category** can declare which attributes are required, recommended, optional, or forbidden for products in it. `POST /products/:id/validate` scores a product against its category's effective schema — publishing is genuinely blocked until the score says the product is ready. Categories can be private to your organization, or proposed as **global** (shared registry, subject to approval by a `categories:govern` holder).

## Connections & Sharing Grants

Two organizations don't see each other's data by default. A **Connection** is the relationship (request → accept); a **Sharing Grant** riding on that connection is the actual permission slip — which products, and which data categories (product data, inventory, content, ordering). Nothing crosses an organization boundary without one.

## Offers & Orders

An **Offer** is a seller's commercial listing for a product they may not even own (given a sharing grant that includes `ORDERING` access). An **Order** is placed by a buyer, referencing offers, and is split automatically into one **Order Group** per seller — each seller accepts, processes, and fulfils their own group independently.

## Everything else in one line each

- **Documents** — file metadata (datasheets, certificates) attached to a product, each with its own visibility.
- **Inventory** — stock per location; availability is always computed, never stored.
- **Search & Resolver** — full-text search across your (and shared) products, plus a public "scan the code" lookup.
- **Digital Product Passport** — a generic, versioned attribute checklist per product; explicitly not a compliance implementation yet.
- **Webhooks** — your own outbound event stream, HMAC-signed.
- **Audit log** — every mutation is logged, separately from application logs.

Next: [Errors](/guides/errors), [Idempotency & rate limits](/guides/idempotency-and-rate-limits), or straight to the [API Reference](/api-reference).
