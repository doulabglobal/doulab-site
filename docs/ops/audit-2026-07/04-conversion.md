---
title: "04 — Conversion / lead-gen audit (bilingual) — doulab.net — audit-2026-07"
status: complete
role: Conversion / lead-gen auditor
locale_scope: bilingual (EN at /, ES at /es/*)
---

# Conversion / Lead-gen Audit — doulab.net — 2026-07 (bilingual)

## Scope

Read-only conversion audit of the bilingual production build (EN + ES) at `http://127.0.0.1:4173`. Covers CTA placement and hierarchy, friction, button copy, social proof, trust signals, urgency/scarcity, form complexity, post-checkout flow, fallbacks for visitors who do not book, retargeting hooks, and bilingual conversion parity (do ES CTAs maintain EN patterns? Does the locale switch preserve user intent?).

The 2026-06 audit (`docs/ops/audit-2026-06/04-conversion.md`) closed several structural blockers since this audit's predecessor:

- CONV-2026-06-001 — ClarityScan price visibility: **RESOLVED**. CHF 150 is now present in every primary CTA label ("Book Tier 1: CHF 150"), in the Tier 1 card, in Tier-1 `Service`/`Offer` JSON-LD, and in `services/clarityscan.tsx` body copy. EN and ES parity confirmed.
- CONV-2026-06-006 — discovery-call expectation microcopy: **PARTIALLY RESOLVED**. Most hero/final-CTA `ctaNote` slots now carry useful microcopy ("Get your baseline in 15 to 20 minutes.", "No prep required. We confirm a time and send a brief follow up.").
- CONV-2026-06-013 — `ctaNote` brand-mark boilerplate: **MOSTLY RESOLVED** on home, contact, clarityscan, work-with-us. A residue remains on `custom-workshops.tsx` (`ctaNote="Built on MicroCanvas® v2.2 and IMM-P® gates."`) — folded into CONV-2026-07-006 below.
- CONV-2026-06-016 — NumbersStrip outcome metrics: **UNCHANGED**. Same activity-count framing on home (`pages/index.tsx:267-271` EN / 268-272 ES). Re-filed as CONV-2026-07-009 with bilingual lens.

Findings below are net-new for the 2026-07 audit and explicitly do not relitigate items resolved in audit-2026-06, nor E-J1 (testimonials), which is deferred.

Files examined (and their ES mirrors under `i18n/es/docusaurus-plugin-content-pages/`):

- `src/pages/index.tsx`
- `src/pages/services/clarityscan.tsx`, `src/pages/services/clarityscan/{audit,diagnostic}.tsx`
- `src/pages/services/{index,coaching-mentoring,custom-workshops,diagnostics,innovation-maturity,innovation-readiness-workshop,imm-dt}.tsx`
- `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`
- `src/pages/contact/index.tsx`
- `src/pages/work-with-us/index.tsx`
- `src/constants/urls.ts`
- `docusaurus.config.ts` (i18n + localeDropdown)
- Viewport captures: `ops/audits/doulab-net/viewport-2026-07-prod-v1/{en,es}/{services-clarityscan,contact,work-with-us,home}/...`

## Method

1. Grepped every `data-cta="…"` in `src/` and `i18n/es/`. Built a comparative inventory by page × locale × position (hero / card / final CTA / footer). Flagged ID collisions, missing instrumentation, and locale-agnostic IDs.
2. Walked the ClarityScan paid-first funnel on EN and ES: Stripe Checkout target, success page behavior, scheduling pop-up, post-payment fallback, support routing.
3. Walked the discovery-call funnel: hero CTA → `booking.doulab.net/discovery` → ??? (off-origin). Mapped which pages link to which Microsoft Bookings type (`/discovery`, `/briefing`).
4. Verified bilingual parity: do the ES surfaces preserve CTA hierarchy, microcopy density, and instrumentation? Does the Docusaurus `localeDropdown` preserve path on cross-locale switches?
5. Tested for friction: price disclosure on non-ClarityScan offerings, currency localization for ES/LATAM, post-Stripe receipt clarity, async fallback for non-bookers, dark-pattern check.

Severity: P0 blocks conversion or breaks trust; P1 measurably leaks qualified visitors; P2 polish/optimization; P3 cosmetic. Impact 1–5 reflects expected effect on qualified booking/payment rate. Effort S < 1 day, M = 1–3 days, L > 3 days.

---

## Findings (ranked)

### CONV-2026-07-001 — CHF 150 is the only published currency; ES/LATAM buyer has no localized price (P0)

- severity: P0
- impact: 4
- effort: M
- location: `src/pages/services/clarityscan.tsx:42-45, 78, 85, 177, 366`; `i18n/es/docusaurus-plugin-content-pages/services/clarityscan.tsx:42-45, 78, 85`; `src/constants/urls.ts:5` (single Stripe link for both locales); `src/pages/services/index.tsx:51, 74`; ES mirror; `src/pages/work-with-us/index.tsx:98` and ES mirror
- observation: All visible price strings are `CHF 150` in both EN and ES surfaces. The Stripe Checkout URL is a single global link (`https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00`) shared across locales; the checkout itself will render in CHF for every buyer regardless of locale, and Stripe's geo-detected language may differ from the doulab.net locale the user clicked from. For an ES visitor primarily based in LATAM (Doulab's documented core market, per case studies AFP Siembra / OGTIC / FUNDAPEC), CHF is an unfamiliar currency anchor with high mental-conversion friction, and the absence of a USD or local-currency equivalent makes the diagnostic price feel arbitrary. CHF is also Doulab's domicile currency (CH legal entity), which signals "European boutique pricing" to LATAM buyers — a positioning question, not just a UX one.
- recommendation: One of (a) publish "CHF 150 (≈ USD X)" inline on every visible price (EN + ES) with a one-line note that Stripe charges in CHF; or (b) split Stripe Checkout links by locale (`CLARITYSCAN_CHECKOUT_URL_EN` / `CLARITYSCAN_CHECKOUT_URL_ES`) with a USD-denominated SKU for the ES funnel; or (c) explicitly document the CHF-only positioning and remove this finding. Decision is positioning-led, not technical — flag to Sales & positioning.
- evidence: `src/pages/services/clarityscan.tsx:177` `<p><strong>CHF 150</strong> · 15 to 20 minutes · paid online via Stripe</p>`; `i18n/es/docusaurus-plugin-content-pages/services/clarityscan.tsx:177` (identical CHF 150 in ES card); `src/constants/urls.ts:5-6` (one URL).

### CONV-2026-07-002 — `book-clarityscan-success.tsx` still auto-popups Bookings and claims it succeeded; bilingual (P0)

- severity: P0
- impact: 4
- effort: S
- location: `src/pages/book-clarityscan-success.tsx:9-17, 29-32`; `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx:9-17, 30-32`
- observation: The 2026-06 finding CONV-006-002 flagged the auto-`window.open` plus copy that asserts ("We already opened the scheduling page in a new tab for you" / "Ya abrimos la página de agendamiento en una nueva pestaña para ti"). Both files are unchanged. Modern browsers block the popup whenever the success-page navigation is treated as not user-initiated (Stripe redirect counts as a navigation, not a click — most browsers block); when blocked, the copy is **false** and the visitor sees only "you're all set" with no scheduling actually open. There is no payment summary (no amount, no receipt id, no email confirmation), and the only support fallback is `/contact` — a generic top-of-funnel page. This is the highest-trust moment in the funnel (visitor just spent CHF 150) and the page treats them as a routing problem. ES parity confirms identical defect; ES copy has the same false claim.
- recommendation: Remove the `useEffect` `window.open`. Render: (1) explicit "Payment received — CHF 150 — receipt sent to {email}" (pull from Stripe `customer_email` via session id in the redirect URL); (2) one prominent button "Step 2 of 2: Schedule your session" linking to Microsoft Bookings (manual click survives popup blockers and gives proper opener context); (3) a dedicated `/clarityscan-support` or anchor on the page for reschedule/refund — not `/contact`. Mirror EN copy fixes to ES file.
- evidence: `src/pages/book-clarityscan-success.tsx:9-17` (effectful popup), `:30-32` (copy asserts popup occurred), `:44-46` (mailto/contact-only fallback); ES file identical at the same line offsets.

### CONV-2026-07-003 — Coaching/Mentoring retainers (Lite/Standard/Pro/Enterprise) still publish hours-only, no price anchor; bilingual (P1)

- severity: P1
- impact: 4
- effort: S
- location: `src/pages/services/coaching-mentoring.tsx:144-210`; `i18n/es/docusaurus-plugin-content-pages/services/coaching-mentoring.tsx` (mirror); also `src/pages/services/custom-workshops.tsx:67` (no price band on workshops); `src/pages/services/innovation-readiness-workshop.tsx` (no fee published)
- observation: 2026-06 CONV-014 flagged this; no change. Four retainer tiers carry hours-only (2/4/6/8 live + 1/2/3/4 async per month). Every card CTA is "Enquire about [tier]" → same `booking.doulab.net/discovery` URL with no tier metadata. Visitor cannot self-qualify; "Lite vs Pro" reads as a sales call gate. Custom workshops and the innovation-readiness workshop are also priceless. After the CONV-001 win on ClarityScan, this is now the largest remaining "you must talk to us before you know what it costs" surface — disproportionately blocks self-serve B2B buyers and the ES audience for whom EN-language sales calls are an extra friction layer. Re-filing because the prior finding was severity P2 and is now P1: the surrounding context changed (ClarityScan now has a visible price, so the price-opacity contrast is sharper).
- recommendation: Publish indicative monthly bands per tier ("from CHF X / month") with a clear "Custom" tag on Enterprise only; add "best for" lines per tier (founder + 1 initiative / leadership team / 3+ concurrent programs / multi-BU). Coordinate currency decision with CONV-2026-07-001. If `booking.doulab.net/discovery` supports custom fields, append `?tier=lite|standard|pro|enterprise` so the booking arrives with intent context.
- evidence: `src/pages/services/coaching-mentoring.tsx:147-205` (four cards, hours-only, identical CTA destination); identical structure in ES mirror.

### CONV-2026-07-004 — `data-cta` IDs are locale-agnostic; conversion measurement cannot distinguish EN vs ES (P1)

- severity: P1
- impact: 4
- effort: M
- location: every `src/pages/**/*.tsx` and matching `i18n/es/docusaurus-plugin-content-pages/**/*.tsx`; e.g. `cta.home.hero.clarityscan` is identical EN/ES; `cta.services.clarityscan.hero.book_clarityscan_online` identical; `wwu_start_clarityscan_book_online` identical
- observation: All 26 ES page files reuse the exact same `data-cta` identifiers as their EN counterparts. Cloudflare Web Analytics (and any downstream attribution) groups EN clicks and ES clicks under the same event key. The ES launch is the largest single change in this audit window (commit `eb1c8c8`), and we cannot answer the most-important question about it: "does ES convert at the same rate as EN per CTA?" This is also the precondition for any locale-targeted A/B test, currency experiment, or LATAM campaign attribution. Coordinated with Analytics role (09) for the receiving-end change.
- recommendation: Either (a) namespace by locale: `cta.es.home.hero.clarityscan`, `cta.en.home.hero.clarityscan`; or (b) add a sibling `data-locale="en|es"` attribute on every CTA and have the analytics script join them at event time. Option (b) is one-file in `src/components/Hero.tsx` + `FinalCta.tsx` if the locale is read from `useDocusaurusContext()`. Recommend (b).
- evidence: Grep `data-cta=` across `i18n/es/docusaurus-plugin-content-pages/` returns 26 files; every value identical to its EN sibling. Spot-check: `cta.contact.hero.discovery` appears in both `src/pages/contact/index.tsx:82` and `i18n/es/.../contact/index.tsx:82`.

### CONV-2026-07-005 — `booking.doulab.net/discovery` and `/briefing` are not language-aware; ES visitor lands on an EN Microsoft Bookings page (P1)

- severity: P1
- impact: 3
- effort: M
- location: every ES page that links to `booking.doulab.net/*`. Same single URL string from `src/constants/urls.ts`-style hardcodes used in EN. E.g. `i18n/es/docusaurus-plugin-content-pages/contact/index.tsx:80, 115, 134, 201`; `i18n/es/docusaurus-plugin-content-pages/services/clarityscan.tsx:90, 370`; `i18n/es/docusaurus-plugin-content-pages/work-with-us/index.tsx:168, 313`
- observation: All booking exits go to the same English Microsoft Bookings instance. The ES visitor confidently navigates a Spanish site, clicks "Agenda una llamada de descubrimiento", and arrives at an English calendar UI with English meeting agenda copy. This is a known LATAM friction pattern and a measurable drop-off point. We did not test the live Microsoft Bookings UI for `/discovery`, but Microsoft Bookings does support per-service language; no infrastructure currently routes ES clickers to a Spanish booking page.
- recommendation: Create parallel ES Microsoft Bookings types (`/discovery-es`, `/briefing-es`, `/clarityscan-es`) or set the Bookings page locale to ES on a duplicate service. Add `BOOKING_DISCOVERY_URL_EN` / `BOOKING_DISCOVERY_URL_ES` constants (mirroring CONV-2026-07-001's recommended Stripe split). Until provisioning lands, at minimum append `?lang=es` to ES-side booking links and document in `docs/ops/booking-architecture.md` whether Microsoft Bookings respects it.
- evidence: `src/constants/urls.ts:2-3` is the only place these URLs live; ES files import the same constants. ES pages hard-code `https://booking.doulab.net/discovery` and `https://booking.doulab.net/briefing` with no locale marker.

### CONV-2026-07-006 — `custom-workshops.tsx` reverts to "Built on MicroCanvas® v2.2 and IMM-P® gates." `ctaNote` — last surviving instance of the boilerplate (P2)

- severity: P2
- impact: 2
- effort: S
- location: `src/pages/services/custom-workshops.tsx:69`; `i18n/es/docusaurus-plugin-content-pages/services/custom-workshops.tsx` (mirror)
- observation: 2026-06 CONV-013 flagged this brand-mark `ctaNote` across 8+ pages. The fix is in everywhere else (home: "Get your baseline in 15 to 20 minutes.", contact: "No prep required. We confirm a time and send a brief follow up.", clarityscan: "Tier 1 paid via secure Stripe checkout. Tiers 2 and 3 scoped on a 20-minute discovery call."). Custom workshops still says "Built on MicroCanvas® v2.2 and IMM-P® gates." directly under "Start a workshop brief" — the slot for risk-reduction microcopy is wasted on trademark trivia. ES mirror inherits the same boilerplate ("Construido sobre MicroCanvas® v2.2 y los gates de IMM-P®." or similar). Trivial fix.
- recommendation: Replace EN with "20-minute discovery call to scope the brief. No prep required." and ES with a parallel translation. Grep `Built on MicroCanvas` and `Construido sobre MicroCanvas` across `src/pages/` and `i18n/es/` to catch any residue.
- evidence: `src/pages/services/custom-workshops.tsx:69` `ctaNote="Built on MicroCanvas® v2.2 and IMM-P® gates."`.

### CONV-2026-07-007 — `/book-clarityscan` route still exists, still auto-popups, still bilingual; routes the visitor to scheduling without payment (P2)

- severity: P2
- impact: 2
- effort: S
- location: `src/pages/book-clarityscan.tsx` (EN); `i18n/es/docusaurus-plugin-content-pages/book-clarityscan.tsx` (ES)
- observation: 2026-06 CONV-005 flagged this as dead code that inverts the paid-first model. Both files still exist. `noindex,follow`, so SERPs are protected, but: (a) old emails and any external link still hit the route; (b) the page auto-pops up `CLARITYSCAN_BOOKING_URL` (Microsoft Bookings) on mount — scheduling without payment — which contradicts the paid-first design of the production funnel; (c) the page exists in both locales so the EN/ES dead-code surface has doubled since 2026-06. The auto-popup is also blocked by modern browsers (same defect class as CONV-2026-07-002).
- recommendation: Delete both EN and ES files; remove `CLARITYSCAN_BOOKING_URL` from `src/constants/urls.ts` unless used by the post-payment success flow (CONV-2026-07-002 redesign should redirect it there explicitly). Add a Cloudflare redirect rule `/book-clarityscan` → `/services/clarityscan` for any external link still pointing here. Verify ES `/es/book-clarityscan` is also redirected.
- evidence: `src/pages/book-clarityscan.tsx:9-17` (window.open on mount); ES file is an identical pattern with Spanish copy.

### CONV-2026-07-008 — `work-with-us` FAQ "Pricing?" answer is still vague; ClarityScan price is no longer secret (P2)

- severity: P2
- impact: 2
- effort: S
- location: `src/pages/work-with-us/index.tsx:74-81` (FAQPage JSON-LD), `:290-293` (visible details); `i18n/es/docusaurus-plugin-content-pages/work-with-us/index.tsx:74-81, 290-293`
- observation: After CONV-2026-06-001 was resolved, the home + services + clarityscan pages all publish CHF 150 prominently. The `/work-with-us` FAQ (rendered as page content AND served as `FAQPage` schema to Google) still answers "Pricing?" with "Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope." This is now self-inconsistent (price is visible elsewhere) and a missed SEO/AI-overview opportunity: the FAQPage schema is the highest-value SERP surface for a price query, and it currently does not contain the price. ES mirror inherits the same vagueness.
- recommendation: Update both the page content and the JSON-LD FAQ answer (EN + ES): "ClarityScan® Tier 1 Snapshot is CHF 150, bookable online. Tier 2 and Tier 3 are scope-based. Workshops are fixed-fee per format. Coaching is a monthly retainer. Programs are priced by scope." Re-verify JSON-LD parses after edit; Google's structured-data linter is a one-click sanity check.
- evidence: `src/pages/work-with-us/index.tsx:77-81` (acceptedAnswer text contains no price), `:290-293` (visible details element), identical in ES.

### CONV-2026-07-009 — `NumbersStrip` still activity-only on both home pages; carries through bilingual launch unchanged (P2)

- severity: P2
- impact: 3
- effort: M
- location: `src/pages/index.tsx:267-271`; `i18n/es/docusaurus-plugin-content-pages/index.tsx:268-272`
- observation: 2026-06 CONV-016 flagged the "Proof, by the numbers" strip as activity-only ("7 innovation labs co-created", "25+ institutions per year supported", "2 to 4 sessions per week for 12 months"). No change. The ES launch translated the strings but did not promote any of the buyer-outcome metrics that exist in the case studies (e.g. `case-studies/afp-siembra.tsx` has measurable delivery deltas). Re-filing because the ES audience reads the same activity-count framing and gets the same weak signal. Note: the ProblemSection just above already prepares the visitor for outcome-language ("Decision latency, cycle time, signal quality, and capability growth across IMM dimensions. No activity counts dressed up as outcomes.") — the page literally contradicts itself when "Proof, by the numbers" then shows activity counts.
- recommendation: Replace at least one of three cards with a buyer-outcome metric pulled from a case (attribution-safe). The contradiction with the surrounding ProblemSection copy is the strongest argument; this is a credibility leak, not just an optimization. Co-write with MCF/IMM-P domain expert (Role 13) to pick metrics that are defensible. Mirror EN and ES.
- evidence: `src/pages/index.tsx:267-271` (KPI strings: "7", "25+", "2 to 4 per week"); identical structure in `i18n/es/docusaurus-plugin-content-pages/index.tsx:268-272`.

### CONV-2026-07-010 — Hero secondary CTA on `services/clarityscan.tsx` is "Talk to us about T2 / T3"; serious Tier 2 / Tier 3 buyer lands on a generic 20-min discovery call (P2)

- severity: P2
- impact: 2
- effort: S
- location: `src/pages/services/clarityscan.tsx:90`; ES mirror :90; Tier 2 detail `src/pages/services/clarityscan/diagnostic.tsx:71`; Tier 3 detail `src/pages/services/clarityscan/audit.tsx:75`
- observation: Both Tier 2 and Tier 3 detail pages funnel their "Book a discovery call" CTA to the generic `booking.doulab.net/discovery` URL — the same 20-min general intro the home page uses. A buyer at the Tier 3 audit page is signaling regulated-finance, audit-grade intent; routing them to the same `/discovery` slot as a curious top-of-funnel visitor wastes their context. Microsoft Bookings supports multiple meeting types; there is no `/clarityscan-t2-scoping` or `/clarityscan-t3-scoping` type. The visitor self-selects sophistication on the page and then gets generic intake.
- recommendation: Provision dedicated booking types (`booking.doulab.net/clarityscan-t2`, `/clarityscan-t3`) with longer slots (30-45 min), tier-specific agenda copy, and a short pre-call questionnaire. Update `src/constants/urls.ts` to expose them. ES versions per CONV-2026-07-005.
- evidence: `src/pages/services/clarityscan/diagnostic.tsx:71` `to: 'https://booking.doulab.net/discovery'`; `src/pages/services/clarityscan/audit.tsx:75` same URL.

### CONV-2026-07-011 — Stripe Checkout success URL likely loses locale; ES buyer who pays from `/es/services/clarityscan` returns to `/book-clarityscan-success` (EN) (P3, unverified)

- severity: P3
- impact: 2
- effort: S
- location: `src/constants/urls.ts:5-6` (single Stripe URL); `src/pages/book-clarityscan-success.tsx` + ES mirror at `/es/book-clarityscan-success`
- observation: Stripe Checkout `success_url` is configured in Stripe Dashboard against the SKU/Price object, not in source. Because there is one Stripe Price and one Checkout link for both locales, the `success_url` will redirect every payer to a single URL — almost certainly the EN `/book-clarityscan-success`. ES buyers paying from `/es/services/clarityscan` therefore land on an English thank-you page after the highest-trust moment in the funnel. **Unverified** because the Stripe Dashboard config is outside the repo; flag for confirmation with Luis. If the success URL is `https://doulab.net/book-clarityscan-success` (no locale prefix), this finding is confirmed.
- recommendation: Configure Stripe to redirect ES buyers to `/es/book-clarityscan-success`. Cleanest path: split SKUs as per CONV-2026-07-001 (per-locale Stripe Price IDs, each with its own success URL). Cheaper interim path: a Cloudflare Worker on `/book-clarityscan-success` that inspects `Accept-Language` or a `?locale=es` param injected via Stripe `client_reference_id` and 302-redirects to the ES page.
- evidence: Single Stripe URL in `src/constants/urls.ts`; ES success page exists at parity, so the user-visible regression is real if the redirect lands on the EN URL.

### CONV-2026-07-012 — `/es/contact` Final CTA omits `ctaNote`; EN version has it ("No prep required…"). Bilingual microcopy parity gap. (P3)

- severity: P3
- impact: 1
- effort: S
- location: `src/pages/contact/index.tsx:195-212` (EN FinalCta — no `ctaNote` prop set, so the contact page's value-add `ctaNote` only appears in the Hero); `i18n/es/docusaurus-plugin-content-pages/contact/index.tsx:195-212` (ES — same, also no `ctaNote`)
- observation: This is a "both surfaces equally bad" parity finding rather than EN-vs-ES drift. The Contact page Hero in both locales has good `ctaNote` microcopy ("No prep required. We confirm a time and send a brief follow up." / "No requiere preparación. Confirmamos un horario y enviamos un seguimiento breve."), but the Final CTA at the bottom of the same page in both locales has no `ctaNote` at all — a visitor who scrolls past the hero and reaches the bottom-of-page CTA gets no risk-reduction microcopy at the second commit moment. Including this as P3 because the fix is trivial and the FinalCta slot is high-leverage.
- recommendation: Pass `ctaNote="No prep required. We confirm a time and send a brief follow up."` (EN) and the ES mirror to the `<FinalCta>` on both `contact/index.tsx` files.
- evidence: `src/pages/contact/index.tsx:195-212` — no `ctaNote` key in props; `i18n/es/docusaurus-plugin-content-pages/contact/index.tsx:195-212` — same.

---

## Quick wins — top 5

1. **CONV-2026-07-006 — Replace the last `ctaNote` boilerplate on `custom-workshops.tsx` (EN + ES).** Trivial, one line per locale.
2. **CONV-2026-07-002 — Strip auto-popup from `book-clarityscan-success.tsx` (EN + ES); render explicit payment summary + Step 2 of 2 button.** Highest-trust moment in the funnel; defect carries from 2026-06.
3. **CONV-2026-07-008 — Update `work-with-us` "Pricing?" FAQ (page + JSON-LD) to disclose ClarityScan price (EN + ES).** Aligns with already-public price, recaptures SERP/AI-overview surface.
4. **CONV-2026-07-007 — Delete `/book-clarityscan` (EN + ES) and add a Cloudflare redirect to `/services/clarityscan`.** Dead-code, also bypasses paid-first model.
5. **CONV-2026-07-012 — Add `ctaNote` to the `<FinalCta>` on the Contact page (EN + ES).** One prop per locale.

## Strategic bets — top 3

1. **CONV-2026-07-001 + CONV-2026-07-005 + CONV-2026-07-011 — Localize the conversion infrastructure for ES/LATAM.** Per-locale Stripe SKU (+ USD or local-currency anchor), per-locale Microsoft Bookings types, per-locale Stripe success URL. This is the single biggest unblocker for ES funnel performance and the precondition for any LATAM growth campaign. Hand-off: Sales & positioning (currency decision), Code quality (constants split), Analytics (locale-aware events). 2–3 weeks including Stripe + Bookings provisioning.
2. **CONV-2026-07-004 — Locale-namespaced `data-cta` instrumentation across all CTAs.** Single-file change in `Hero.tsx` and `FinalCta.tsx` if locale is sourced from `useDocusaurusContext()`. Without it, we cannot measure whether the ES launch is converting. Hand-off: Analytics (Role 09). 1 day.
3. **CONV-2026-07-003 + CONV-2026-07-010 — Publish indicative pricing on coaching retainers AND provision tier-specific booking types for ClarityScan T2/T3.** Together they remove the last "you must talk to us to know what it costs / what we're scheduling" friction layer in the funnel after ClarityScan T1 went public. Hand-off: Sales & positioning (price bands), Behavioral economics (tier anchoring/decoy), Code quality (booking URL constants). 1–2 weeks.

## Out of scope / hand-offs

- IA & UX strategist (Role 01): CTA hierarchy across the Tier 2/Tier 3 detail pages; whether T2 deserves its own paid SKU (CONV-2026-07-010).
- Brand & visual design (Role 02): currency-pair display pattern ("CHF 150 ≈ USD X") if CONV-2026-07-001 takes path (a); payment-summary card design for the success page (CONV-2026-07-002).
- Content & copy (Role 03): ES translations for new microcopy (CONV-2026-07-006, -012); pricing FAQ rewrite (CONV-2026-07-008); coaching tier "best for" lines (CONV-2026-07-003).
- SEO (Role 05): FAQPage JSON-LD update changes structured-data signals (CONV-2026-07-008); locale-specific `Offer` schemas if Stripe SKU splits.
- Performance (Role 06): removing auto-popup in CONV-2026-07-002 has a small CWV win on the success page (no script-driven popup).
- Accessibility (Role 07): the `role="status" aria-live="polite"` on `book-clarityscan-success.tsx` will need to announce the *actual* state (not the falsely-claimed open popup) after CONV-2026-07-002 lands.
- Security & privacy (Role 08): no findings here; the funnel remains form-free (good).
- Analytics (Role 09): owns CONV-2026-07-004 (locale-namespacing) and CONV-2026-07-002 (post-payment event firing). Booking-completion attribution is still open from 2026-06 CONV-008 (not re-filed).
- Code quality (Role 10): split `src/constants/urls.ts` into locale-aware constants (CONV-2026-07-001, -005, -011); delete `book-clarityscan.tsx` files (CONV-2026-07-007).
- i18n readiness (Role 12): the biggest i18n gaps in the conversion layer are pricing/checkout/scheduling (CONV-2026-07-001, -005, -011) — flag to i18n role for cross-role consolidation.
- MCF/IMM-P® domain expert (Role 13): defensible outcome metrics for NumbersStrip (CONV-2026-07-009).
- Behavioral economics (Role 14): anchoring/decoy pricing for coaching retainers (CONV-2026-07-003); currency anchor framing if dual-currency pattern lands (CONV-2026-07-001).
- Behavioral psychology (Role 15): risk-reduction microcopy on the success page after popup removal (CONV-2026-07-002).
- Sales & positioning (Role 16): owns the CHF-vs-USD-vs-multi-currency call (CONV-2026-07-001), the coaching pricing publish/no-publish call (CONV-2026-07-003), and the Tier 2/T3 SKU-vs-scope call (CONV-2026-07-010).
- Mobile/responsive (Role 17): success page redesign must mobile-test (CONV-2026-07-002).
- Blog & editorial (Role 11): not in scope.
- E-J1 (testimonials): explicitly deferred; no testimonial findings in this audit.

## Open questions for Luis

1. **Is CHF-only pricing a positioning decision or a residual of CH-domicile billing convenience?** Drives CONV-2026-07-001.
2. **What is the Stripe Checkout `success_url`?** Drives CONV-2026-07-011 confirmation.
3. **Are there Microsoft Bookings types available for an ES-localized discovery call and an ES-localized briefing?** Drives CONV-2026-07-005.
4. **Is `/book-clarityscan` still referenced from any external surface (old email, LinkedIn, deck QR code)?** Drives CONV-2026-07-007 (delete vs redirect).
5. **Are you willing to publish indicative coaching retainer monthly bands (e.g. "from CHF X / month")?** Drives CONV-2026-07-003. The trade-off is self-serve qualification vs bespoke positioning.
6. **For Tier 2 and Tier 3 ClarityScan, are dedicated scoping-call booking types appropriate, or should everything funnel through `/discovery` until volume justifies a split?** Drives CONV-2026-07-010.
7. **What outcome metrics from named engagements are approved-for-publication on the homepage NumbersStrip?** Drives CONV-2026-07-009.
8. **Should ES-locale conversion be reported separately in the Cloudflare Analytics dashboard, or merged with EN?** Drives the namespacing choice in CONV-2026-07-004.

No new dark-pattern temptations observed. Ethical guardrails carried forward from 2026-06 still apply (no fake "was/now" anchors if CONV-2026-07-003 publishes prices; no pre-ticked consent if an async form ever lands; no AI portraits for the eventual testimonial layer).
