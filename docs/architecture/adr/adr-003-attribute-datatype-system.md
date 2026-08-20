---
title: "ADR-003: Attribute Datatype System"
sidebar_label: "ADR-003"
sidebar_position: 3
---

**Status:** Accepted
**Date:** 2026-08-16

## Context

- Deel 11 (Classification, Taxonomy & Attribute Engine, §21): `TEXT, INTEGER, DECIMAL, BOOLEAN, DATE, DATETIME, ENUM, MEASUREMENT, REFERENCE`
- Deel 24 (Attribute System, Units, Classification..., §7): `STRING, TEXT, INTEGER, DECIMAL, BOOLEAN, DATE, DATETIME, ENUM, MEASUREMENT, REFERENCE, URL, EMAIL`

Deel 24 splits `STRING` from `TEXT` and adds `URL`/`EMAIL`, which Deel 11 does not have.

## Decision

Adopt Deel 24's superset, with an explicit distinction:

- `STRING` — short text, single line, indexable/filterable (e.g. model number)
- `TEXT` — long-form text, not typically used for filtering (e.g. description)
- `INTEGER`, `DECIMAL`, `BOOLEAN`, `DATE`, `DATETIME` — standard scalars
- `ENUM` — closed set of allowed values, defined per `AttributeDefinition`
- `MEASUREMENT` — numeric value + unit reference (needs a `Unit` reference table — not fully specified in either source; modeled here as `{ value: Decimal, unitCode: String }`)
- `REFERENCE` — reference to another entity (e.g. another product, a classification node)
- `URL`, `EMAIL` — validated string subtypes

## Consequences

- `AttributeValue` storage uses a single JSONB `value` column with the `dataType` on `AttributeDefinition` driving validation at the application layer, rather than a wide sparse table — this keeps the schema extensible per Constitution §19 without per-category migrations.
- Unit handling (`MEASUREMENT`) is intentionally minimal in this MVP: a `unitCode` string with no unit-conversion engine yet. Flagged in the roadmap as a follow-up (unit conversion/normalization is described only in prose in Deel 24, with no concrete algorithm).
