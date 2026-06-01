# Conversion / Lead-gen Audit — doulab.net — 2026-06-01

## Scope

Read-only audit of the conversion funnel on doulab.net. Examines CTA hierarchy, frequency, wording, and placement; the ClarityScan booking funnel (the site's main entry-point diagnostic, paid-first via Stripe then booked via Microsoft Bookings); the /contact page; trust signals (case studies, testimonials, logos, credentials, pricing transparency); and friction points where a serious buyer would stall. Builds on Phase C11 (current-state inventory) and Phase C12 (target UX spec) — does not duplicate their funnel-mapping tables. New findings focus on conversion quality, not on the mailto-to-booking migration (Phase C11–C16 closed that gap).

Files examined:
- `src/pages/index.tsx`, `src/pages/contact/index.tsx`, `src/pages/what-we-do/index.tsx`, `src/pages/work-with-us/index.tsx`, `src/pages/services/{index,clarityscan,diagnostics,coaching-mentoring,custom-workshops,innovation-maturity,innovation-readiness-workshop}.tsx`
- `src/pages/case-studies/{index,afp-siembra,alpha-inversiones,fundapec,ogtic-redlab}.tsx`
- `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`
- `src/components/{Hero,FinalCta}.tsx`, `src/components/case-studies/CaseStudyCards.tsx`
- `src/constants/urls.ts`, `docs/ops/booking-{architecture,link-map}.md`
- `docs/ops/phase-c11-service-conversion-audit.md`, `docs/ops/phase-c12-conversion-ux-spec.md`

## Method

1. Inventoried every CTA across primary funnel pages: label, destination type, position, data-cta attribute, and "exit type" (internal nav vs. booking vs. payment).
2. Mapped the ClarityScan paid-first funnel as a step graph and counted decision points / unknowns presented to the visitor before commitment.
3. Cross-referenced trust-signal density (named clients, named individuals on the buy side, quoted endorsements, third-party validation, credentials) against the asks.
4. Tested for friction: missing price, missing duration/commitment, missing "what happens after I pay," ambiguous next-step copy, button label collisions.
5. Looked for dark patterns (forced urgency, hidden costs, opt-out friction, confirm-shaming) and noted ethical alternatives where any temptation exists.

Severity: P0 blocks conversion / breaks trust; P1 measurably leaks qualified visitors; P2 polish / optimization. Impact 1–5 reflects expected effect on qualified booking/payment rate. Effort S < 1 day, M = 1–3 days, L > 3 days.

## Findings (ranked)

### CONV-001 — ClarityScan price is invisible across the entire site (P0)
- severity: P0
- impact: 5
- effort: S
- location: `src/pages/services/clarityscan.tsx` (entire file), `src/pages/services/diagnostics.tsx:82-99`, `src/pages/index.tsx:710-716`, `src/pages/case-studies/index.tsx:80-88`, `src/pages/work-with-us/index.tsx:127-138`, `src/pages/services/index.tsx:49`, `src/constants/urls.ts:5`
- observation: The primary "Book a ClarityScan® online" CTA is paid-first via Stripe (`CLARITYSCAN_CHECKOUT_URL`). Nowhere on the site — services page, diagnostics page, FAQ, or work-with-us — is the price disclosed before the visitor lands in Stripe Checkout. `services/clarityscan.tsx` describes duration (15–20 min), audience, deliverables, and `How it works`, but has zero price, currency, or "what's included for the fee" line. The FAQ on `work-with-us/index.tsx:76-81` answers "Pricing?" only as "Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope" — a non-answer for a fixed-fee paid-first product. This forces a click into Stripe to learn the cost, which is a major drop-off point for serious B2B buyers who require pre-approval. It also reads as a hidden cost.
- recommendation: Add a visible price card on `services/clarityscan.tsx` (under "What you get" or before the final CTA) showing price, currency, what's included, refund/cancel policy, and "Pay then schedule" flow note. Mirror a compact "From $X" line near the hero CTA on `index.tsx`, `case-studies/index.tsx`, and `work-with-us/index.tsx`. Update the work-with-us FAQ answer to state the ClarityScan price explicitly.
- evidence: `src/pages/services/clarityscan.tsx:108-128` (What you get section, no price); `src/pages/work-with-us/index.tsx:76-81` (FAQ answer); `src/constants/urls.ts:5` (single Stripe link, no metadata exposed)

### CONV-002 — Stripe payment success page silently auto-pops a new window with no payment summary (P0)
- severity: P0
- impact: 4
- effort: S
- location: `src/pages/book-clarityscan-success.tsx:9-17, 28-46`
- observation: After Stripe confirms payment, the success page (a) auto-`window.open`s the Microsoft Bookings tab on mount, (b) shows no order summary (amount paid, receipt id, customer email, what was purchased), and (c) the only "support" link is `/contact`, which is a routing dead-end relative to a paid customer's likely problem (rescheduling or refund). Auto-popups are popup-blocked by most modern browsers; when blocked, the page reads "We already opened the scheduling page in a new tab for you" — which is then false. There is no reassurance the booking is a separate step rather than complete.
- recommendation: Remove the auto `window.open` (or keep it but stop claiming it happened in copy). Render explicit confirmation: "Payment received — €/$ X — receipt sent to your.email@…". Show the Bookings step as a numbered "Step 2 of 2" with the scheduling button. Add a non-mailto support route (booking.doulab.net/support or a dedicated /clarityscan-help page) so paid customers don't bounce into a generic contact funnel.
- evidence: `src/pages/book-clarityscan-success.tsx:11-15` (effectful popup), `:29-32` (copy claims tab is open), `:44-46` (mailto/contact-only fallback)

### CONV-003 — Zero testimonials, named-buyer quotes, or attributed endorsements on the entire site (P0)
- severity: P0
- impact: 5
- effort: M
- location: sitewide; grep for "testimonial|quote" returns zero matches in `src/`
- observation: Doulab sells consulting and a paid diagnostic to public-sector and regulated-finance buyers — a category where buyer committees demand peer references. The site has logos (`work-with-us/index.tsx:247-253`: AFP Siembra, OGTIC, Alpha, FUNDAPEC, Runway) and case study narratives, but no first-person testimonials, no quoted sponsor names, no titles, no LinkedIn-verifiable references, and no headshots. The case studies (e.g. `case-studies/afp-siembra.tsx`) describe what Doulab did but never quote the AFP Siembra sponsor saying it worked. For a buyer at the "should I pay for ClarityScan or book a 20-min call" decision point, this is the largest missing trust artifact on the site.
- recommendation: Add at least 3 attributed, full-name + title + organization testimonials with consent. Place: hero of `services/clarityscan.tsx`, footer of `case-studies/*.tsx` pages, sidebar of `contact/index.tsx`. Use the ethical version: real names, real roles, with right-to-review links to a public LinkedIn profile or press release. Avoid stock-photo composites or initials-only quotes — they read as fabricated.
- evidence: Grep for testimonial/quote in `src/` returned zero matches; `src/pages/work-with-us/index.tsx:247-253` (logo strip only); `src/pages/case-studies/afp-siembra.tsx:207-220` (Outcomes block — no sponsor quote)

### CONV-004 — CTA hierarchy is duplicated and primary intent is unclear; ClarityScan and "discovery call" compete on every page (P1)
- severity: P1
- impact: 4
- effort: M
- location: `src/pages/index.tsx:710-737`, `src/pages/what-we-do/index.tsx:112-122, 323-340`, `src/pages/case-studies/index.tsx:80-88, 150-163`, `src/pages/work-with-us/index.tsx:97-102, 304-323`, `src/pages/services/clarityscan.tsx:70-78, 162-168`
- observation: Almost every page presents two near-equal-weight CTAs in both hero and FinalCta: "Start with ClarityScan®" (internal) + "Book a discovery call" (booking.doulab.net/discovery) — or paid Stripe vs. internal Explore. On `services/index.tsx:49-50` the primary becomes Stripe Checkout and the secondary is the explainer page (inverted from `index.tsx:710-716`). On `case-studies/index.tsx:80-86` and `work-with-us/index.tsx:97-98` the primary is "Explore ClarityScan" (an internal page) with the Stripe CTA secondary. The result: the visitor cannot tell whether the "right" first action is a 20-min free call or a paid 15-min diagnostic, and which they should pick. CTA decision fatigue at every section.
- recommendation: Pick one north-star CTA per visitor intent. Recommended pattern: above-the-fold = paid ClarityScan (high-intent) + low-commitment "Not ready? Book a 20-min discovery" link styled as link-button, not equal-weight button. Standardize hero pattern across pages (one primary, one tertiary). Use the same primary label everywhere: "Book a ClarityScan® — $X" (with price). See CONV-001.
- evidence: compare `src/pages/services/index.tsx:49-50` (Stripe primary) vs. `src/pages/case-studies/index.tsx:80-86` (internal primary) vs. `src/pages/index.tsx:710-716` (internal primary). Three different "primary" answers in the same funnel.

### CONV-005 — `/book-clarityscan` page auto-popups external booking and offers no in-context confirmation (P1)
- severity: P1
- impact: 3
- effort: S
- location: `src/pages/book-clarityscan.tsx:9-19, 29-49`
- observation: The page is essentially an empty shell that fires `window.open(CLARITYSCAN_BOOKING_URL)` on mount and shows "Redirecting you to our Outlook booking page". This route does not appear to be linked from the funnel today (sitewide CTAs go directly to either `CLARITYSCAN_CHECKOUT_URL` Stripe or `booking.doulab.net/discovery`). It is `noindex,follow` but still publicly reachable. If it is reachable by old emails or by Stripe failure-fallback, it inverts the paid-first model: it routes the visitor to scheduling without payment. If it is dead code, it should be removed.
- recommendation: Decide its role. Either (a) delete it and remove `CLARITYSCAN_BOOKING_URL` from runtime constants if not used by the success flow, or (b) repurpose it as the post-payment scheduling step (replacing the popup-driven success page from CONV-002). Do not leave a route that bypasses payment for a paid-first product.
- evidence: `src/pages/book-clarityscan.tsx:14` (`window.open` on mount), `:25` (`noindex,follow`), `src/constants/urls.ts:2-3` (booking URL exposed alongside Stripe URL)

### CONV-006 — "Talk to us" / "Book a discovery call" never quantifies commitment beyond a single 20-min mention (P1)
- severity: P1
- impact: 3
- effort: S
- location: `src/pages/services/clarityscan.tsx:77, 168`, `src/pages/services/coaching-mentoring.tsx:156, 171, 186, 201`, `src/pages/services/custom-workshops.tsx:67`, `src/pages/services/diagnostics.tsx:50, 111, 127, 229`, `src/pages/case-studies/*.tsx` (every Hero secondary)
- observation: The only place a discovery call duration is mentioned is `src/pages/contact/index.tsx:73` ("Book a 20-minute discovery call") and the hero subtitle there. Every other "Talk to us", "Book a discovery call", "Enquire", and "Start a workshop brief" CTA omits the duration, the agenda, who will be on the call, whether it is recorded, and what the prep is. Coaching/Mentoring retainer cards each say "Enquire about [tier]" with no indication of what "enquire" produces (proposal? a price? another call?). For an executive buyer this reads as ambiguous and increases hesitation.
- recommendation: Standard microcopy under every booking CTA: "20 min, no prep, with Luis Santiago. We confirm within 2 business days." Add agenda/prep specifics on the retainer cards. Re-use the `ctaNote` slot on `FinalCta` consistently — currently it carries a brand-mark line ("Built on MicroCanvas® v2.1 and IMM-P® gates.") instead of useful expectations setting.
- evidence: `src/components/FinalCta.tsx:97-101` (`ctaNote` rendering), `src/pages/contact/index.tsx:90` (the one place that gets it right: "No prep required. We confirm a time and send a brief follow up.")

### CONV-007 — Contact page "Send a short brief" routes to /briefing but the briefing meeting type is undocumented; visitor cannot tell what they're signing up for (P1)
- severity: P1
- impact: 3
- effort: S
- location: `src/pages/contact/index.tsx:124-142`, `src/components/FinalCta.tsx:124-127` (`SitewideDiscoveryCta` default `emailHref = booking.doulab.net/briefing`), `docs/ops/booking-link-map.md:1-13`
- observation: "Send a short brief" is the only secondary entrypoint for visitors not ready for a discovery call. It says "Outcome: tailored options within 3 to 5 business days" and "Format: email or slide deck, your choice" but the CTA opens `booking.doulab.net/briefing` — i.e. a calendar/booking page, not a form. The booking-link-map says `/briefing` is "Reserved for ... briefing CTAs" with destination "TBD (Cloudflare Redirect Rules C2)". So the visitor expecting to upload or write a brief lands in a meeting scheduler. Mismatch between label, copy, and behavior — qualified leads who don't want yet another call will bounce.
- recommendation: Either (a) build a short brief form (CONV-009) and route /briefing to it, or (b) rename the CTA "Schedule a briefing call" and align copy with what /briefing actually does. Confirm the `/briefing` Cloudflare redirect target and document it in `booking-link-map.md`.
- evidence: `src/pages/contact/index.tsx:127-141` (copy promises async brief, link is scheduler), `docs/ops/booking-link-map.md:7-12` (destinations marked TBD)

### CONV-008 — All bookings exit doulab.net to third-party domains; the funnel loses attribution and continuity (P1)
- severity: P1
- impact: 3
- effort: M
- location: `src/constants/urls.ts:2-5`, `docs/ops/booking-architecture.md`, every page that links to `booking.doulab.net/*` or `buy.stripe.com/*`
- observation: Three exit surfaces: Stripe Checkout (buy.stripe.com), Microsoft Bookings under booking.doulab.net (CNAME), and `/contact` for the legal/privacy mailto. There is no embedded booking — every conversion crosses an origin boundary. Cloudflare Web Analytics (per LOG-2025-08-27-04) cannot follow the user across origins and Stripe success returns to a Doulab page only via the paid-first flow. There is no observable success event for booking.doulab.net/discovery, /hdworkshop, /fdworkshop, or /briefing. The `data-cta` attributes are well-instrumented at click-time (CONV-Plus) but conversion is unmeasured at completion.
- recommendation: At minimum, treat the post-booking landing as a success surface: configure Microsoft Bookings confirmation page to redirect to `/booking-success?type=discovery` (or per type), and render an internal success page that confirms the booking and shows the next step. This closes the loop for attribution and gives the visitor a Doulab-branded confirmation moment.
- evidence: `src/constants/urls.ts:1-5`; Phase C12 section F "Instrumentation" lists booking-completion event as required but no implementation exists; `docs/ops/booking-architecture.md:8-25`

### CONV-009 — No alternative async path; every conversion forces a synchronous call or paid checkout (P1)
- severity: P1
- impact: 4
- effort: M
- location: sitewide; `src/pages/contact/index.tsx` is the relevant page
- observation: After the C13–C16 mailto migration, the funnel cleanly routes to scheduling. But it removed the only async option (mailto with brief). The contact page now offers: discovery call, briefing call (also synchronous, see CONV-007), or ClarityScan payment. There is no low-friction "tell us about you in 3 fields and we'll route you" form. For prospects who (a) don't have a calendar window in the next 2 weeks, (b) are evaluating multiple vendors, (c) need internal approval before a call, or (d) are simply not in a buying mode, the funnel is closed. Phase C12 anticipated this ("Option C — Unified Request briefing without email ... short form + auto-routing") but the form was never built.
- recommendation: Add a single short form (name, organization, role, "what are you trying to solve" textarea, optional budget range) at `/contact` as a parallel option, posted to a Cloudflare Worker or Pages Function and routed by intent. Privacy-first (no third-party form embed). This restores async capture without reintroducing mailto.
- evidence: `src/pages/contact/index.tsx:103-158` (three cards, two are sync bookings, one is the privacy disclosure); `docs/ops/phase-c11-service-conversion-audit.md:50-54` (Option C as planned but unbuilt)

### CONV-010 — Case study CTA cards bury "Request a briefing" as primary and don't reinforce paid ClarityScan path (P2)
- severity: P2
- impact: 3
- effort: S
- location: `src/pages/case-studies/afp-siembra.tsx:289-311`, mirrored on the other three case studies
- observation: Each case study ends with three CTA briefing cards. The first card asks "Prefer a briefing?" → `booking.doulab.net/briefing`. The "Recommended path" card next to it actually states the right funnel sequence: `Discovery call → ClarityScan → Gate 1 pilot`. But the cards do not make that sequence clickable — only "Request a briefing" is a button. A reader who just finished a 5-minute case study about AFP Siembra has high intent; making the "Recommended path" the primary CTA card (with a button to Stripe or to /services/clarityscan) would convert better than a fourth meeting type.
- recommendation: Re-order: make "Recommended path" the first/largest card with the ClarityScan paid CTA as its button. Demote "Prefer a briefing?" to a secondary card. Optionally include a 1-line outcome from the case ("AFP Siembra moved from ad-hoc to gated delivery in X months — see if your team is ready").
- evidence: `src/pages/case-studies/afp-siembra.tsx:289-311` (CTA cards layout and order)

### CONV-011 — Homepage exposes a `/contact` route in the success-page fallback that mailto-routes paid customers (P2)
- severity: P2
- impact: 2
- effort: S
- location: `src/pages/book-clarityscan-success.tsx:44-46`, `src/pages/contact/index.tsx:17` (`EMAIL = 'hello@doulab.net'` retained for schema only)
- observation: The success page tells paid customers needing help to "Contact the Doulab team" → `/contact`. The contact page itself is now non-mailto for primary CTAs, but `EMAIL` is still embedded in JSON-LD contactPoint (`contact/index.tsx:27-29`) and the success page's "reply to your receipt email" implies a Stripe-side support channel. Paid customers should have a clearer support path than the generic /contact funnel. Minor risk of leaving customers feeling "I just paid and got dropped in a sales funnel."
- recommendation: Build a dedicated `/clarityscan-support` page (or anchor on /services/clarityscan) with: rescheduling link, refund policy, and a non-mailto support form. Keep `EMAIL` in JSON-LD for legal/contact-point compliance.
- evidence: `src/pages/book-clarityscan-success.tsx:44-46`; `src/pages/contact/index.tsx:17, 27-30`

### CONV-012 — No credentials, no founder bio, no proof-of-expertise above the booking ask (P2)
- severity: P2
- impact: 3
- effort: M
- location: every service page; `src/pages/services/clarityscan.tsx` (no author bio), `src/pages/services/coaching-mentoring.tsx`, `src/pages/contact/index.tsx`
- observation: For coaching, mentoring, and consulting services, the buyer wants to know who delivers the work before paying or booking. `clarityscan.tsx` mentions methodology (MCF 2.1, IMM-P®) but no author identity, years of experience, sectors served at a personal level, certifications, prior roles, or speaking/teaching credentials. The footer/about page has Luis Santiago Arias as `author` in meta but no inline practitioner card on the service pages. For a high-trust diagnostic, a one-line "Delivered by Luis Santiago, [N] years in innovation operating models, ex-[X]" + linked LinkedIn would lift conversion.
- recommendation: Add a compact "Who delivers this" card on `services/clarityscan.tsx`, `services/coaching-mentoring.tsx`, `services/innovation-maturity.tsx`. Single source it from a reusable `<Practitioner>` component. Include LinkedIn link, photo, 1 sentence positioning. Hand-off to Content & copy + Brand & visual design.
- evidence: Grep across `src/pages/services/` shows no "About the practitioner", "Your guide", or bio component; only `<meta name="author">` in head

### CONV-013 — `FinalCta` `ctaNote` field is used for brand-mark trivia instead of conversion microcopy on most pages (P2)
- severity: P2
- impact: 2
- effort: S
- location: `src/pages/index.tsx:737`, `src/pages/what-we-do/index.tsx:339`, `src/pages/case-studies/index.tsx:162`, `src/pages/services/clarityscan.tsx:169`, `src/pages/work-with-us/index.tsx:99`, plus every case study final CTA
- observation: 10+ pages set `ctaNote="Built on MicroCanvas® v2.1 and IMM-P® gates."` as the last word under the primary CTA. This is brand framing — useful elsewhere — but the slot directly under a CTA is the highest-leverage spot for risk reduction microcopy ("Free if not a fit", "No prep required", "Cancel anytime", "Privacy-first, no third-party forms"). Only `contact/index.tsx:90` and a couple of case studies use it well.
- recommendation: Move trademark/method framing into a footer line or a subtle inline note. Replace `ctaNote` on every page with risk-reduction copy specific to the offer: ClarityScan → "Pay then schedule, 15 to 20 minutes, refundable within 24 hours" (or actual policy); discovery → "20 min, no prep, no obligation"; case studies → "Get your baseline in 15 to 20 minutes." Audit each occurrence.
- evidence: Repeated `ctaNote="Built on MicroCanvas® v2.1 and IMM-P® gates."` across 8+ pages

### CONV-014 — Coaching/Mentoring retainer tiers show hours but no price and no anchor; high-intent buyer cannot self-qualify (P2)
- severity: P2
- impact: 3
- effort: S
- location: `src/pages/services/coaching-mentoring.tsx:144-210`
- observation: Four tiers (Lite, Standard, Pro, Enterprise) listed with hours only. No price, no per-hour anchor, no "starting at" line, no even an indicative range. Every card CTA is "Enquire about [tier]" → same `booking.doulab.net/discovery` URL. The cards therefore do not differentiate at click level — the visitor cannot tell why they would book about "Lite" vs "Pro" before talking. Buyer must enter a sales call to learn price, which filters out the modern self-serve buyer entirely.
- recommendation: Publish indicative monthly pricing (or "from $X / month") per tier; if pricing varies, use a clear "Custom" tag on Enterprise only and price the first three. Add a "fit check" line per tier (e.g. "Best for: founder + 1 initiative" vs "Best for: leadership team across 3+ initiatives"). Differentiate the CTA destinations or pre-fill the booking with tier metadata if Microsoft Bookings supports it.
- evidence: `src/pages/services/coaching-mentoring.tsx:146-205`

### CONV-015 — No price/duration disclosure on workshops; "discovery call" gate appears before any commercial info (P2)
- severity: P2
- impact: 3
- effort: S
- location: `src/pages/services/custom-workshops.tsx:67`, `src/pages/services/innovation-readiness-workshop.tsx` (per C11 inventory routes to `booking.doulab.net/fdworkshop`)
- observation: Same pattern as CONV-001 / CONV-014. Half-day and full-day workshops are linked but no price band, no headcount cap, no "what's included" anchor. CTA is "Start a workshop brief" → discovery call. A workshop buyer with budget approval already in hand has no fast path to commit; they must first do a discovery call.
- recommendation: Show indicative pricing band per workshop format, max headcount, half-day vs full-day time block, what artifacts are delivered. Add a direct booking CTA for buyers who already know they want it (`booking.doulab.net/hdworkshop` / `fdworkshop`) alongside the discovery option.
- evidence: `src/pages/services/custom-workshops.tsx:67`; Phase C11 inventory rows for Custom Workshops

### CONV-016 — `NumbersStrip` proof cards lack outcome metrics; "labs co-created" is activity, not outcome (P2)
- severity: P2
- impact: 2
- effort: M
- location: `src/pages/index.tsx:329-350`
- observation: The "Proof, by the numbers" strip says "7 innovation labs co-created", "25+ institutions per year supported", "2 to 4 sessions per week for 12 months". These are delivery counts (activity), not customer outcomes. The contrast: a buyer wants to see "decision latency cut by X%", "time to first MVP reduced from Y to Z weeks", "Gate 1 hit rate improved from A to B" — all metrics Doulab actually tracks per the case studies (`afp-siembra.tsx:214-216`). The homepage proof feels softer than the case studies it links to.
- recommendation: Replace at least one of the three with a buyer-outcome metric pulled from a case (with attribution). Coordinate with MCF/IMM-P domain expert hand-off to pick metrics that are defensible. Avoid inflating; "from X case studies, median Y improvement in Z" is honest.
- evidence: `src/pages/index.tsx:331-334`; compare to `src/pages/case-studies/afp-siembra.tsx:207-219`

## Quick wins — top 5

1. **CONV-001 — Publish ClarityScan price on `services/clarityscan.tsx` and mirror "From $X" near every paid CTA.** Single largest blocker. Effort S, impact 5.
2. **CONV-013 — Replace boilerplate `ctaNote` ("Built on MCF…") with risk-reduction microcopy on every page.** Effort S, impact 2-3, hits 8+ pages.
3. **CONV-002 — Strip auto-popup from `book-clarityscan-success.tsx`; render payment summary + explicit Step 2 of 2.** Effort S, impact 4.
4. **CONV-006 — Standardize "20 min, no prep" microcopy under every discovery-call CTA.** Effort S, impact 3, sitewide consistency.
5. **CONV-010 — Re-order case-study CTA briefing cards so "Recommended path" with ClarityScan is the primary action.** Effort S, impact 3.

## Strategic bets — top 3

1. **CONV-003 — Build a real testimonial/reference layer: named, attributed, with photos and consent.** This is the single highest-leverage trust upgrade for the consulting model. Hand-off: Sales & positioning + Content & copy + Brand & visual design + Security & privacy (consent). 3–4 weeks.
2. **CONV-009 — Add a privacy-first async brief form at `/contact` as a parallel path to scheduling.** Restores the async capture mode lost in C13–C16 without reintroducing mailto. Hand-off: Code quality (Cloudflare Worker/Pages Function), Security & privacy, Analytics. 1–2 weeks.
3. **CONV-008 + CONV-012 — Close the post-booking attribution loop AND publish a practitioner-credentials block.** Together they shift the funnel from "vendor I clicked" to "expert I chose" + measurable end-to-end conversion. Hand-off: Analytics, Brand & visual design, IA & UX strategist. 2–3 weeks.

## Out of scope / hand-offs

- IA & UX strategist: CTA hierarchy normalization (CONV-004), case study CTA card re-ordering (CONV-010).
- Brand & visual design: testimonial component design (CONV-003), practitioner card design (CONV-012), price card / pricing band component (CONV-001, CONV-014, CONV-015).
- Content & copy: testimonial collection and consent (CONV-003), microcopy rewrite across `ctaNote` slots (CONV-013), discovery-call expectations setting (CONV-006), retainer "best for" copy (CONV-014).
- SEO: pricing visibility may affect snippet/SERP behavior; coordinate with Service schema (`services/clarityscan.tsx:25-36` already declares `Service` but no `Offer`/`offers` block).
- Performance: not affected by these changes; removing the auto-popup in CONV-002 marginally improves CWV on the success page.
- Accessibility: success page (CONV-002) `role="status"` will need an updated `aria-live` announcement when the auto-popup is removed.
- Security & privacy: brief form (CONV-009) must avoid third-party form vendors per the privacy-first stance (`work-with-us`-page FAQ implies this); GDPR/CH disclosures already exist.
- Analytics: booking-completion events (CONV-008); event schema for new success surface.
- Code quality: dead-code decision on `book-clarityscan.tsx` (CONV-005); reusable `<Practitioner>` and `<PriceCard>` components.
- Blog & editorial: not in scope here.
- i18n readiness: pricing in single currency is a future i18n concern (ES rollout planned per B-P2-03).
- MCF/IMM-P domain expert: outcome metrics for NumbersStrip (CONV-016); ensures any "median improvement" claims are defensible.
- Behavioral economics: anchor pricing on retainer tiers (CONV-014), decoy/center-stage pricing layout.
- Behavioral psychology: trust signals layering (CONV-003, CONV-012), risk-reduction microcopy framing (CONV-013).
- Sales & positioning: pricing strategy decision (CONV-001, CONV-014, CONV-015) — needs Luis's call.
- Mobile-first / responsive: testimonial/price-card components must be designed mobile-first; not in this audit's scope.

No dark-pattern temptations observed in the current site. The conversion flow is honest. Two ethical guardrails worth flagging proactively so they are not added later:
- When adding pricing/anchors per CONV-014, avoid fake "was $X now $Y" anchors; use plain tier framing.
- When adding testimonials per CONV-003, do not use AI-generated portraits or initials-only quotes; require real attribution and a verifiable link.
- When adding async form per CONV-009, do not pre-tick marketing consent; opt-in checkboxes only.
- The success page (CONV-002) must show payment confirmation regardless of whether the visitor schedules — do not gate the receipt on the second action.

## Open questions for Luis

1. **Is the ClarityScan price intentionally hidden** (e.g. price-anchored against perceived value, regional pricing, or A/B testing inside Stripe) or is it an oversight? CONV-001 assumes oversight.
2. **What is the actual refund / reschedule policy for paid ClarityScan?** Needed to write CONV-013 microcopy honestly.
3. **Is `/book-clarityscan` (the route, not the success page) reachable from any active link or external campaign?** If not, can it be deleted (CONV-005)?
4. **Do you have written consent on file from the AFP Siembra, OGTIC, Alpha, FUNDAPEC, or Runway sponsors to publish a named testimonial?** Drives CONV-003 feasibility.
5. **What is the target persona for the discovery call vs. ClarityScan paid?** This determines whether CONV-004 should resolve toward paid-primary (high-intent only) or call-primary (top-of-funnel).
6. **Is the `/briefing` Microsoft Bookings type live and what does it look like to the visitor?** Determines CONV-007 fix direction.
7. **Are you willing to publish coaching retainer indicative pricing**, or is the consulting positioning strictly bespoke? Drives CONV-014.
8. **What outcome metrics from real engagements are publishable** (CONV-016) — i.e. which numbers are both defensible and approved-for-publication?
