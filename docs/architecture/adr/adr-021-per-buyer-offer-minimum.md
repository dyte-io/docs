---
title: "ADR-021: Per-Buyer Minimum Order Quantity Override"
sidebar_label: "ADR-021"
sidebar_position: 21
---

**Status:** Accepted
**Date:** 2026-08-17
**Raised by:** user decision (asked directly via AskUserQuestion; option chosen: "Uitgebreide MOQ per koper" / extended MOQ per buyer), backlog item 4.

## Context

`Offer.minimumQuantity` is a single value applying to every buyer of that offer. Deel 17
(Ordering & Commerce API) and real B2B practice both call for sellers to negotiate different
minimums per buyer relationship (a long-standing distributor gets a lower MOQ than a new,
unverified buyer) without maintaining a second, near-duplicate `Offer` row per relationship. Three
options were put to the user directly: (a) leave it as a single platform-wide minimum per offer
(status quo, no change); (b) let a buyer request an exception negotiated through a message/
approval flow; (c) let the seller directly set a per-buyer override value. The user chose (c).

## Decision

- New `OfferBuyerMinimum` model: `(offerId, buyerOrganizationId)` unique pair, one
  `minimumQuantity` value, owned/writable only by the offer's seller.
- `POST /offers/:id/buyer-minimums` (seller-only, `offers:write`) upserts an override for one
  buyer org — calling it again for the same buyer replaces the previous value, it does not stack.
- `GET /offers/:id/buyer-minimums` / `DELETE /offers/:id/buyer-minimums/:buyerOrganizationId`
  round out seller-side management; both are also seller-only.
- `OrdersService.addLine()` now resolves `effectiveMinimum` as: the caller's own
  `OfferBuyerMinimum` override if one exists for `(offer, principal.organizationId)`, else the
  offer's own `minimumQuantity`. The override **replaces**, it does not add to or floor against,
  the offer-level minimum — a seller sets exactly one effective threshold per buyer, never two
  thresholds a buyer would need to satisfy simultaneously.

## Consequences

- A seller can grant a buyer a *lower* MOQ (the common case — a trusted distributor) or a
  *higher* one (e.g. a buyer the seller wants to discourage from small orders) — the model does
  not constrain the direction, only that it's a single seller-controlled number per buyer.
- Buyers cannot see other buyers' overrides (the RLS policy on `offer_buyer_minimums` scopes read
  access to the seller, or to the specific buyer org the row belongs to) — a buyer only ever sees
  their own effective minimum via the normal offer/order flow, not a competitor's negotiated
  terms.
- No notification or negotiation flow exists — the seller sets the number unilaterally. Option
  (b) (buyer-initiated request/approval) was explicitly not chosen and would need its own ADR if
  a future backlog item calls for it.
- Deleting an override silently falls back to the offer's own `minimumQuantity` — there is no
  "removed override, buyer now blocked entirely" state; removing an override can only ever raise
  or lower a buyer's effective minimum back to the offer default, never revoke ordering access
  outright (that remains a separate concern — sharing grants / offer withdrawal).
