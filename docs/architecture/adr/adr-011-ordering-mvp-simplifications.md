---
title: "ADR-011: Ordering & Commerce MVP Simplifications"
sidebar_label: "ADR-011"
sidebar_position: 11
---

**Status:** Accepted for MVP
**Date:** 2026-08-16

## Context

Deel 17 describes a full B2B commerce layer: Offers, multi-seller Master Orders decomposed
into per-seller `OrderGroup` fulfilment groups, a long lifecycle per group (`DRAFT ->
SUBMITTED -> PENDING_ACCEPTANCE -> ACCEPTED -> PROCESSING -> FULFILLED -> COMPLETED`, plus
`REJECTED`/`CANCELLED`/`EXPIRED`/`PARTIALLY_FULFILLED`), seller-side checks against stock,
credit limits, contracts and MOQ (§14), and payment is explicitly noted elsewhere in the
Constitution as a possible future addition, not required now.

## Decision

Implement the structural model faithfully (`Offer`, `Order` as the master record, `OrderGroup`
per seller, `OrderLine` per offer within a group) but with these MVP simplifications, each
flagged rather than silently assumed:

1. **No payments.** No payment/invoicing entity or integration exists. An order reaching
   `COMPLETED` says nothing about whether or how it was paid.
2. **No seller-side business-rule validation.** Accepting an `OrderGroup` does not check
   inventory availability, credit limits, or contract terms against the `Offer`/
   `InventoryRecord` — that's a manual seller decision via the accept/reject endpoint. Wiring
   automatic stock/credit checks is a follow-up.
3. **Master `Order.status` is a simplified rollup**, not itself authoritative: `DRAFT` until
   submitted, `SUBMITTED` once submitted, then `OPEN` while any `OrderGroup` is not in a
   terminal state, `COMPLETED` once every group is `COMPLETED`/`REJECTED`/`CANCELLED`, and
   `PARTIALLY_FULFILLED` if groups ended in a mix of `COMPLETED` and
   `REJECTED`/`CANCELLED`/`PARTIALLY_FULFILLED`. The `OrderGroup.status` per seller is the
   real, authoritative lifecycle (Deel 17 §8-10 — fulfilment responsibility is per seller).
4. **`unitPrice` and `currency` are snapshotted onto `OrderLine`** at order-creation time from
   the `Offer` — later `Offer` price changes never retroactively change an existing order
   (implied by "wat heeft deze klant daadwerkelijk besteld" in Deel 17 §2, but not stated
   explicitly; a reasonable commerce-domain default).

## Consequences

- This is enough to place, split by seller, accept/reject, and progress an order end to end,
  but is **not** a production commerce engine — no payment, no automatic stock reservation on
  order acceptance (a follow-up would tie `OrderGroup` acceptance into
  `InventoryRecord.reserved`, which is not wired up in this pass), no credit/contract checks.

**Amendment (2026-08-19, product owner decision — asked directly via AskUserQuestion):**
per-buyer MOQ is done (ADR-021) and closes one part of §14's checks. For the remaining two
(credit limits, contract-term enforcement), three concrete options were put to the user,
grounded in the actual schema: (a) build both on top of "outstanding order value" as a stand-in
for real credit exposure (a new `SellerBuyerCreditLimit` model mirroring `OfferBuyerMinimum`,
plus one enforceable field on `Offer.conditions`); (b) build credit limits only; (c) explicitly
defer both until the payments decision (already tracked in `BACKLOG.md`'s "Explicitly NOT
queued" section) is made, since a "credit limit" without any real payment/invoice ledger can
only ever be a proxy metric (unpaid vs. paid orders look identical today — `Order.status`
reaching `COMPLETED` says nothing about payment, per point 1 above), and "contract term
enforcement" has no defined shape to enforce beyond the one field either option would invent
ad hoc. The user chose (c): both remain explicitly deferred, not built, until a real
payments/invoicing layer exists to hang "credit" and "contract terms" on. Building a proxy
metric now would mean re-deriving it later once real payment data exists, rather than deriving
it once, correctly, against the real thing.
