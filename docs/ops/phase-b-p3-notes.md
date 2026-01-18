# Phase B-P3 Notes — Hardening Pass 3

## Observations (pre-change)
- `static/_headers` includes CSP, HSTS, Referrer-Policy, X-Content-Type-Options, Permissions-Policy, and `frame-ancestors` with `X-Frame-Options: DENY`.
- `static/_headers` contains comment lines that may not be accepted by the Cloudflare Pages parser.
- `src/pages/privacy-terms.tsx` references Cloudflare Web Analytics and booking.doulab.net -> Google Calendar appointment links.
- `src/pages/privacy-terms.tsx` includes a duplicated "Switzerland" in the contact line.
- `src/pages/terms-and-conditions.tsx` defines bookings using Microsoft Bookings (not referenced elsewhere in repo).
- No "Human-led, AI-assisted" phrasing found in `src/**` or `docs/**`.

## Changes (post-change)
- Removed comment lines from `static/_headers` to keep Cloudflare Pages header parsing clean while preserving header values.
- Updated booking definition to align with booking.doulab.net -> Google Calendar appointment links in `src/pages/privacy-terms.tsx`.
- Fixed duplicated "Switzerland" in the privacy contact line in `src/pages/privacy-terms.tsx`.
- No "Human-led, AI-assisted" phrasing exists in repo; no normalization needed.

## Evidence
- Headers source: `static/_headers`
- Privacy/terms updates: `src/pages/privacy-terms.tsx`
- Build logs:
  - `ops/audits/doulab-net/logs/build-cf.log`
  - `ops/audits/doulab-net/logs/verify-build.log`
