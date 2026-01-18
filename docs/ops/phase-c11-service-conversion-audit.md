# Phase C11 — Service Conversion Workflow Audit (Current State)

## Scope
- Pages reviewed: `src/pages/services/**`, `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/case-studies/**`, `src/pages/contact/index.tsx`.
- Objective: map current conversion paths and propose standardized target workflows that remove mailto-based CTAs.

## Current state inventory

| Service/page | Primary CTA label | Destination type | Destination | Post-action flow |
| --- | --- | --- | --- | --- |
| ClarityScan (services/clarityscan) | Book a ClarityScan® online | Stripe Payment Link | `https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00` | Stripe payment -> `book-clarityscan-success` -> booking.doulab.net/clarityscan (Microsoft Bookings) |
| ClarityScan (book-clarityscan) | Open booking in a new tab | Booking link | `https://booking.doulab.net/clarityscan` | Booking scheduler opens; no success page |
| Diagnostics (services/diagnostics) | Start with ClarityScan® | Internal page | `/services/clarityscan` | Follows ClarityScan flow (Stripe -> booking) |
| Diagnostics (Foresight scan) | Enquire | Contact (mailto) | `mailto:hello@doulab.net` (via /contact options) | Email-based intake; no success page |
| Diagnostics (Operating Model) | Enquire | Contact (mailto) | `mailto:hello@doulab.net` (via /contact options) | Email-based intake; no success page |
| Coaching & Mentoring | Book an intro call | Contact (mailto) | `/contact` -> mailto | Email-based intake; no success page |
| Custom Workshops (half-day) | Book a half-day workshop | Booking link | `https://booking.doulab.net/hdworkshop` | Booking scheduler opens; no success page |
| Custom Workshops (full-day) | Book a discovery call | Booking link | `https://booking.doulab.net/fdworkshop` | Booking scheduler opens; no success page |
| Innovation Maturity (IMM-P®) | See program structure | Internal anchor | `/services/innovation-maturity#imm-structure` | No conversion step on primary CTA |
| Innovation Maturity (IMM-P®) | Book a ClarityScan® online (secondary) | Stripe Payment Link | `https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00` | Stripe payment -> booking |
| Innovation Readiness Workshop | Book a discovery call | Booking link | `https://booking.doulab.net/fdworkshop` | Booking scheduler opens; no success page |
| Contact | Email for a time / Email your brief | mailto | `mailto:hello@doulab.net` | Email-based intake; no success page |
| Case studies CTA cards | Request a briefing | Internal page | `/contact` -> mailto | Email-based intake; no success page |
| Vigia Futura | Book a briefing | Internal page | `/contact` -> mailto | Email-based intake; no success page |

## Observations
- Mixed conversion surfaces: Stripe (ClarityScan), booking.doulab.net (workshops/ClarityScan scheduling), and mailto (contact + briefing CTAs).
- Stripe flow has a dedicated success page that opens booking; other flows have no success confirmation or scheduling confirmation.
- booking.doulab.net is already the canonical scheduling surface, but not consistently used across services.
- /contact relies on mailto, which is a conversion dead-end for analytics and attribution.

## Target workflow options

### Option A — Paid-first (ClarityScan-style default for fixed-fee offerings)
- Flow: Stripe Payment Link -> Success page -> booking.doulab.net scheduling.
- UX friction: Medium (payment before scheduling).
- Operational burden: Low (prepaid reduces no-shows).
- Analytics points: CTA click, Stripe checkout start/success, success page view, booking completion.
- Fit: Works for fixed-fee diagnostics (ClarityScan, half-day workshop).

### Option B — Book-first, pay-later (for consultative services)
- Flow: booking.doulab.net meeting -> automated follow-up email -> optional Stripe link or invoice.
- UX friction: Low (faster first step).
- Operational burden: Medium (manual follow-up/payment).
- Analytics points: booking click, booking completion, follow-up payment link click.
- Fit: Coaching, Innovation Maturity, and custom workshops that need scoping.

### Option C — Unified “Request briefing” without email
- Flow: booking.doulab.net/briefing (new type) OR short form + auto-routing.
- UX friction: Low to medium (single form/booking).
- Operational burden: Medium (needs routing or event-type setup).
- Analytics points: briefing CTA click, booking completion or form submit, follow-up conversion.
- Fit: Case studies, Vigia Futura, and any “Request a briefing” CTAs.

## Recommendation
- Default: Option B (book-first, pay-later) for all consultative services (Coaching & Mentoring, Innovation Maturity, Vigia Futura, custom workshops that require scoping).
- Fallback: Option A (paid-first) for fixed-fee diagnostics and workshops (ClarityScan and optionally half-day workshop).
- Mailto replacement: migrate /contact CTAs to booking.doulab.net entrypoints or a short form that routes to booking with metadata.

## Next steps (implementation-ready)
- Define booking.doulab.net entrypoints for each service type (clarityscan, discovery, briefing, workshops).
- Introduce a unified success/confirmation pattern for booking flows (similar to ClarityScan success).
- Replace mailto CTAs with booking links or a short form + routing.
