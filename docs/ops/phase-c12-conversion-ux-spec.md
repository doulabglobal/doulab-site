# Phase C12 - Unified Conversion UX Spec + Mailto Replacement Plan

## A) Current state (concise)

| Service/page | Primary CTA label | Destination type | Post-action flow |
| --- | --- | --- | --- |
| ClarityScan (services/clarityscan) | Book a ClarityScanr online | Stripe payment link | Stripe payment -> success page -> booking.doulab.net/clarityscan |
| ClarityScan (book-clarityscan) | Open booking in a new tab | Booking link | Booking scheduler opens; no success page |
| Diagnostics (services/diagnostics) | Start with ClarityScanr | Internal page | Routes to ClarityScan flow (Stripe -> booking) |
| Diagnostics (Foresight scan) | Enquire | mailto via /contact | Email-based intake; no success page |
| Diagnostics (Operating Model) | Enquire | mailto via /contact | Email-based intake; no success page |
| Coaching & Mentoring | Book an intro call | /contact -> mailto | Email-based intake; no success page |
| Custom Workshops (half-day) | Book a half-day workshop | Booking link | Booking scheduler opens; no success page |
| Custom Workshops (full-day) | Book a discovery call | Booking link | Booking scheduler opens; no success page |
| Innovation Maturity | See program structure | Internal anchor | No conversion step on primary CTA |
| Innovation Maturity (secondary) | Book a ClarityScanr online | Stripe payment link | Stripe payment -> success page -> booking |
| Innovation Readiness Workshop | Book a discovery call | Booking link | Booking scheduler opens; no success page |
| Contact | Email for a time / Email your brief | mailto | Email-based intake; no success page |
| Case studies CTA cards | Request a briefing | /contact -> mailto | Email-based intake; no success page |
| Vigia Futura | Book a briefing | /contact -> mailto | Email-based intake; no success page |

Mailto is a conversion dead-end because it breaks attribution, has no confirmation step, and removes scheduling context.

## B) Target model (default + fallback)

Default recommendation: Book-first, pay-later for consultative services.
- Friction: low (one step to book).
- Operational complexity: medium (follow-up for payment/invoicing).
- Analytics: consistent tracking of booking completion.
- ClarityScan alignment: complements paid-first by using the same booking surface.
- Scalability: best for programs and scoped services.

Fallback recommendation: Paid-first for fixed-fee services.
- Friction: medium (payment before scheduling).
- Operational complexity: low (prepaid reduces no-shows).
- Analytics: Stripe + booking funnel is measurable end-to-end.
- Scalability: best for fixed-fee diagnostics.

## C) Booking entrypoints

Canonical booking routes under booking.doulab.net:
- /clarityscan (existing, paid-first follow-on)
- /briefing (new, replaces all "Request a briefing" mailto)
- /discovery (optional for discovery calls)
- /hdworkshop (existing)
- /fdworkshop (existing)

## D) CTA rules (sitewide)

- No mailto as a primary conversion CTA.
- Case studies: "Request a briefing" routes to booking.doulab.net/briefing.
- Services:
  - Consultative services use booking-first CTAs (discovery/briefing).
  - Fixed-fee services use paid-first CTAs (Stripe -> booking).
- /contact should no longer be the primary entrypoint for service CTAs.

## E) Success + confirmation pattern (beyond ClarityScan)

Standard success page requirements:
- Confirm the action (booking/payment received).
- Summarize next steps (what happens next, when to expect follow-up).
- Provide a scheduling link if not already completed.
- Provide a support contact (non-mailto preferred, or a fallback email).

Confirmation email requirements:
- Human-led note (explicitly human-run with AI-assisted tools where relevant).
- Clear next steps and rescheduling link.
- Optional bilingual microcopy if policy requires it later.

Booking confirmation requirement:
- User sees a clear "what happens next" step immediately after booking.

## F) Instrumentation (high level)

Minimum events:
- CTA click (service + CTA label)
- Stripe checkout start/success (if paid-first)
- Booking completion (booking type)
- Success page view (for both booking-only and paid-first)

## G) Implementation checklist (phased)

Phase 1: eliminate mailto
- Replace mailto CTAs with booking entrypoints.
- Add /briefing booking route.

Phase 2: unify CTAs
- Standardize CTA labels per service category.
- Update /contact to a support-only role.

Phase 3: extend paid-first where appropriate
- Apply paid-first flow to fixed-fee services after validating demand.
