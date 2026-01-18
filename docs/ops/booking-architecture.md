# Booking Architecture (Phase B3)

## Goal
Provide a provider-agnostic booking layer so site CTAs never link directly to vendor scheduling URLs.

## State
- Redirects are managed in Cloudflare Redirect Rules (C2).
- The website links to `booking.doulab.net` canonical routes for scheduling.
- ClarityScan uses a paid-first Stripe Checkout link; scheduling follows via `booking.doulab.net/clarityscan`.

## Canonical routes
- https://booking.doulab.net/
- https://booking.doulab.net/discovery
- https://booking.doulab.net/clarityscan
- https://booking.doulab.net/advisory
- https://booking.doulab.net/hdworkshop
- https://booking.doulab.net/fdworkshop
- https://booking.doulab.net/briefing

## Redirect behavior
- Default: 302 redirects while routes stabilize.
- Option: migrate to 301 once targets are confirmed and stable.

## Governance
- Single source of truth: `docs/ops/booking-link-map.md`.
- External redirect rules are managed in the Cloudflare dashboard (not in repo).
