---
title: Categories & Attributes
sidebar_position: 6
---

# Categories & Attributes

## Categories

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/categories` | Create a category | `products:write` |
| `GET` | `/categories` | List categories | — |
| `GET` | `/categories/pending` | List `PENDING` global-category proposals | `categories:govern` |
| `POST` | `/categories/:id/approve` | Approve a global-category proposal | `categories:govern` |
| `POST` | `/categories/:id/reject` | Reject a global-category proposal | `categories:govern` |

```http
POST /api/v1/categories
Authorization: Bearer <token>
Content-Type: application/json

{ "code": "DRINKWARE", "name": "Drinkware", "scope": "organization" }
```

`scope: "organization"` (default) is private to your org and usable immediately. `scope: "global"` creates a **proposal** for the shared cross-org registry, starting `PENDING` — only usable on a product once a `categories:govern` holder approves it. `categories:govern` is cross-organization by design; see [Roles & Permissions](/api-reference/organizations-and-roles#roles--permissions).

## Category attribute schemas

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/categories/:categoryId/attribute-schema` | Declare an attribute's requirement level for a category | `products:write` |
| `DELETE` | `/categories/:categoryId/attribute-schema/:attributeDefinitionId` | Remove a schema entry | `products:write` |
| `GET` | `/categories/:categoryId/attributes` | Get the resolved effective schema (inherited down the tree, with child overrides) | — |

A schema entry is `REQUIRED`, `RECOMMENDED`, `OPTIONAL`, or `FORBIDDEN`, and can be conditional on another attribute's value. This effective schema is exactly what `POST /products/:id/validate` scores a product against — see [Products & Variants](/api-reference/products-and-variants#publication-gate).

## Attribute definitions & values

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/attribute-definitions` | Define a new attribute (datatype, code, unit) | `attributes:write` |
| `GET` | `/attribute-definitions` | List attribute definitions | — |
| `POST` | `/products/:productId/attribute-values` | Set an attribute value on a product | `products:write` |
| `POST` | `/variants/:variantId/attribute-values` | Set an attribute value on a variant | `products:write` |
| `POST` | `/attribute-values/:id/verify` | Mark a value as verified as-is | `products:write` |

Every `AttributeValue` carries provenance: `source`, `sourceOrganizationId`, `sourceReference`, `confidence`, and a `conflictState` (`UNVERIFIED` / `VERIFIED` / `CONFLICTED`) — [ADR-030](/architecture/adr/adr-030-attribute-value-provenance). A `VERIFIED` (or already-`CONFLICTED`) value rejects a silently differing overwrite with `409` unless the request passes `forceOverride: true`.

## Classification schemes

| Method | Path | Description | Permission |
| --- | --- | --- | --- |
| `POST` | `/classification-schemes` | Create a classification scheme | `classification:manage` |
| `GET` | `/classification-schemes` | List schemes | — |
| `POST` | `/classification-schemes/:schemeId/nodes` | Add a node to a scheme | `classification:manage` |
| `GET` | `/classification-schemes/:schemeId/nodes` | List nodes in a scheme | — |
| `POST` | `/classification-assignments` | Assign a classification node to a product | `products:write` |

This is a separate tree structure from the Category → Attribute Schema linkage above, and is largely independent of it — attribute requirements are attached to `Category`, not to `ClassificationNode` (see [ADR-029](/architecture/adr/adr-029-category-attribute-schema) for why).
