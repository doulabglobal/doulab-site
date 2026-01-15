# Phase B1 Site Reevaluation (doulab.net)

## Summary
- IA/Routes: Docusaurus routes include docs (/docs), blog (/blog), and pages under src/pages. Potentially unexpected route: `/markdown-page` (sample page).
- Booking findings: Mixed providers (Outlook Bookings and Calendly). Placeholder link `https://outlook.office.com/book/REPLACE_ME` exists. Booking entrypoints currently scattered across pages/components.
- Locale purity: i18n configured for en-only; no locale-prefixed routes. Content appears primarily EN with occasional ES markers in some files (see scan).
- Component parity: No EntityHeader or DocBadges definitions/usages found. Inline styles present across multiple pages/components.

## Decisions needed
- Keep or remove `/markdown-page`.
- Clarify whether `/privacy-terms` and `/terms-and-conditions` should remain separate or be consolidated.
- Define the booking provider strategy behind booking.doulab.net and standardize entrypoints.

## Evidence pointers
- `ops/audits/doulab-net/routes-and-ia.md`
- `ops/audits/doulab-net/booking-link-inventory.md`
- `ops/audits/doulab-net/locale-purity-scan.md`
- `ops/audits/doulab-net/component-parity-scan.md`
