# Phase B4-P3.1 Legal Consolidation

## Decision
- Canonical route: `/privacy-terms`
- Forward route: `/terms-and-conditions`

## Rationale
- `/privacy-terms` already contains the full privacy + terms content and analytics/booking disclosures.
- Consolidating reduces duplication and avoids conflicting updates.
- Keeping `/terms-and-conditions` live preserves external links while making the canonical path explicit.

## User-path UX
- `/privacy-terms`: full policy content with anchors for Privacy, Analytics, Bookings, Terms, Contact.
- `/terms-and-conditions`: minimal forward page with a clear CTA to `/privacy-terms#terms` and `/privacy-terms#privacy`.

## Route behavior
- `/privacy-terms` keeps its existing `noindex,follow` meta; content is authoritative.
- `/terms-and-conditions` includes `noindex,follow` to avoid duplicate indexing.
- Canonical link on `/terms-and-conditions` points to `/privacy-terms`.
