# Behavioral Economics Audit — doulab.net — 2026-06-01

## Scope

Behavioral-economics review of doulab.net public surfaces with emphasis on the primary conversion path (ClarityScan®) and the high-trust decision moments that a senior B2B buyer (CIO, Innovation Director, public-sector lead) traverses. Sources reviewed:

- `doulab-site/AGENTS.md`
- `doulab-site/docs/ops/doulab-net-backlog.md`
- `src/pages/index.tsx` (hero, problem reel, services, numbers strip, case studies teaser, principles, final CTA)
- `src/pages/services/index.tsx`, `src/pages/services/clarityscan.tsx`
- `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`
- `src/pages/what-we-do/index.tsx`, `src/pages/work-with-us/index.tsx`
- `src/components/Hero.tsx`, `src/components/FinalCta.tsx`
- `src/components/case-studies/CaseStudyCards.tsx`, `caseStudiesData.tsx`
- `blog/` titles
- `src/constants/urls.ts` (price/checkout entry)

Out of scope: copy rewriting beyond illustrative deltas; visual design; technical SEO; the frozen `clients.doulab.net` surface.

## Method

Each finding maps a concrete on-site artifact (file:line) to one or more BE concepts. Recommendations are constrained to ethically defensible interventions — verifiable claims, transparent framing, honest scarcity, and choice architectures that respect the senior buyer's autonomy. Severity reflects expected effect on the qualified-buyer conversion funnel; effort uses S/M/L (S ≤ 1 day, M ≤ 1 week, L > 1 week or cross-functional).

Concepts in play: anchoring, framing (gain/loss), loss aversion, choice architecture, defaults, decoy effect, social proof, ethical scarcity, endowment effect, status quo bias, ambiguity aversion, peak-end rule, decision fatigue, action bias, hyperbolic discounting, identifiable victim, fluency/processing ease.

## Findings (ranked)

### BE-001 — Hero buries the most decision-relevant anchor: time-to-value
- Concepts: anchoring + framing (gain) + ambiguity aversion
- Severity: High • Impact: 5 • Effort: S
- Location: `src/pages/index.tsx:705-717` (Hero props), `src/components/Hero.tsx:103-113`
- Observation: The hero headline is conceptual ("Innovation, Foresight and Repeatable Delivery") and the subtitle restates the same nouns. The single quantitative anchor a senior buyer can act on — "15 to 20 minutes" baseline — is demoted to `ctaNote` (`src/pages/index.tsx:717`) and only appears after the buttons. The dominant anchor a visitor leaves with is therefore "consulting", not "20-minute decision artifact".
- Recommendation: Promote the time anchor and the deliverable into the H1 or subtitle. Example: subtitle = "Get a 20-minute innovation maturity baseline and a 30/60/90 plan." This anchors low cost-of-entry before any commitment cue, reducing ambiguity aversion for the first-time visitor. Keep claims verifiable.
- Evidence: `src/pages/index.tsx:705`, `src/pages/index.tsx:717`.

### BE-002 — Missing price anchor on the ClarityScan service page
- Concepts: anchoring + ambiguity aversion + decision fatigue
- Severity: High • Impact: 5 • Effort: S
- Location: `src/pages/services/clarityscan.tsx:60-170`
- Observation: The page links to Stripe Checkout (`CLARITYSCAN_CHECKOUT_URL`) but never displays a price, currency, or what's included for the fee. A senior buyer cannot pre-qualify without leaving the page for Stripe. The "Pricing?" answer on Work-with-us (`src/pages/work-with-us/index.tsx:292-294`) only says "Fixed-fee" — no number. Absence of a price anchor in a paid-first flow forces a click that resembles the dark pattern of "price after intent capture", even though it isn't intended that way.
- Recommendation: Publish the ClarityScan fixed fee and what is included directly on `services/clarityscan.tsx` (e.g., a `What you get` card at line ~111 augmented with "USD X, fixed fee, includes 20-min session + PDF snapshot + 30/60/90 template"). A visible anchor lowers ambiguity aversion, lets the buyer self-qualify, and is ethically the right disclosure. If the fee is intentionally withheld, document the reason.
- Evidence: `src/pages/services/clarityscan.tsx:109-128`, `src/pages/work-with-us/index.tsx:292-294`, `src/constants/urls.ts:5`.

### BE-003 — Final CTA pairs equal-weight options; no default
- Concepts: choice architecture + defaults + status quo bias
- Severity: High • Impact: 4 • Effort: S
- Location: `src/pages/index.tsx:730-738`, `src/components/FinalCta.tsx:90-101`, `src/pages/services/index.tsx:154-161`
- Observation: Every final CTA presents two options of similar verbal weight ("Start with ClarityScan®" / "Book a discovery call"). The buttons are stylistically differentiated (primary/secondary) but the copy does not signal a recommended path. For a senior buyer scanning at end-of-page (peak-end rule applies), the dual ask increases decision cost and routes lower-intent visitors to the free call instead of the paid diagnostic.
- Recommendation: Add an explicit, ethical default. One line under the buttons such as: "Most teams start with ClarityScan® — book a call only if you need scoping help first." This is honest disclosure of the recommended path. It nudges without restricting choice.
- Evidence: `src/pages/index.tsx:733-738`.

### BE-004 — No decoy/tiered framing on Services overview
- Concepts: decoy effect + anchoring + choice architecture
- Severity: Medium • Impact: 4 • Effort: M
- Location: `src/pages/services/index.tsx:67-150`
- Observation: The five service cards (Diagnostics, Workshops, Programs, Coaching, Future Studies) are presented as a flat horizontal menu. There is no visual "Most popular" or "Recommended starting point" tag, and no scope/price ladder. Without a comparative frame, every option looks equally valid, which increases choice load and pushes buyers toward inaction (status quo bias).
- Recommendation: Introduce an ethical anchor on the card grid: tag ClarityScan® with "Start here" and IMM-P® with "Most chosen by public-sector partners" only if true. Order cards as a scope ladder (Diagnostic → Workshop → Program → Coaching → Foresight). This is choice architecture, not manipulation, because each label is verifiable.
- Evidence: `src/pages/services/index.tsx:69-149`.

### BE-005 — Problem reel uses fear framing without recovery framing
- Concepts: loss aversion + framing (loss) + peak-end rule
- Severity: Medium • Impact: 3 • Effort: S
- Location: `src/pages/index.tsx:80-161`, `src/pages/index.tsx:163-253`
- Observation: All eight problem cards open with a failure cause and a punishing effect ("Change meets resistance", "ROI suffers", "timelines slip"). Loss framing is appropriate to motivate action, but the reel ends on the eighth loss with no "after" image, only one small follow-up paragraph at `src/pages/index.tsx:233-251`. The peak-end rule means the lasting impression is anxiety, not agency. This also risks attribution backlash from a CIO who already knows the problem.
- Recommendation: Convert each card from "cause → effect → metric" into "cause → effect → what changes after ClarityScan®" (one short line). Keep loss framing as the entry hook but pair every card with a near-future gain. Alternative cheaper fix: insert a single "After ClarityScan®" card at the end of the reel as the visual closer.
- Evidence: `src/pages/index.tsx:83-160`, `src/pages/index.tsx:163-253`.

### BE-006 — Social proof underused; logos and named clients are hidden
- Concepts: social proof + identifiable-victim heuristic + fluency
- Severity: High • Impact: 4 • Effort: S
- Location: `src/pages/index.tsx:352-359`, `src/pages/services/index.tsx:58-62`, `src/pages/work-with-us/index.tsx:247-253`
- Observation: The homepage Case Studies teaser shows four cards but no client-logo strip and no named pull-quote. The Services page mentions clients in a single text line ("Trusted by organizations like OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones") with no logos. The Work-with-us page does have a `proofStrip` of five logos (`src/pages/work-with-us/index.tsx:247-253`) but the highest-trafficked landing surfaces don't. For B2B senior buyers, identifiable institutional clients are the single strongest decision input.
- Recommendation: Add a logo strip immediately under the homepage hero (above the Problem section). Use the same `proofStrip` pattern already proven on `work-with-us`. Add one named, attributed pull-quote to the homepage case studies section. Logos and named quotes are ethical social proof.
- Evidence: `src/pages/work-with-us/index.tsx:247-253` (pattern exists), `src/pages/index.tsx:352-359` (where it is missing).

### BE-007 — "Proof, by the numbers" numbers are weak and undated
- Concepts: anchoring + fluency + ambiguity aversion
- Severity: Medium • Impact: 3 • Effort: S
- Location: `src/pages/index.tsx:329-350`
- Observation: The three KPIs are "7 innovation labs co-created", "25+ institutions per year supported", "2 to 4 per week sessions for 12 months". The first two are weakly tied to the buyer's outcome (decision latency, cycle time). "25+ … per year supported" reads as forward-looking ("from 2025 onward"). A senior buyer parses these as inputs, not outcomes. The disclosure footnote at line 347 helps honesty but does not strengthen the anchor.
- Recommendation: Replace at least one KPI with a verifiable outcome statistic (e.g., "Median decision latency reduced from X to Y across N programs, 2024"). Keep the footnote pattern. Use round-but-honest numbers — they are more fluent and credible.
- Evidence: `src/pages/index.tsx:330-348`.

### BE-008 — Paid-first flow has no endowment-effect handoff
- Concepts: endowment effect + peak-end rule + action bias
- Severity: Medium • Impact: 3 • Effort: S
- Location: `src/pages/book-clarityscan-success.tsx:8-50`
- Observation: After payment (the highest-commitment moment in the entire funnel), the success page shows two sentences and a single button to Microsoft Bookings. There is no ownership cue ("Your snapshot template is reserved"), no calendar-blocking suggestion, no preparation checklist, no expected-deliverable preview. The buyer has just paid yet receives nothing tangible to anchor ownership. This wastes the peak moment of commitment.
- Recommendation: On `book-clarityscan-success.tsx`, add: (a) a short preparation checklist ("Bring: one strategic question, one delivery bottleneck"), (b) a downloadable one-pager describing what they will receive (creates an "I already have something" endowment), (c) optional .ics file or "Add to calendar" link. All ethical, all increase show-rate.
- Evidence: `src/pages/book-clarityscan-success.tsx:28-47`.

### BE-009 — Booking redirect breaks site context without warning
- Concepts: ambiguity aversion + status quo bias + action bias
- Severity: Medium • Impact: 3 • Effort: S
- Location: `src/pages/book-clarityscan.tsx:10-19`
- Observation: `book-clarityscan.tsx` immediately calls `window.open(...)` on mount. The microcopy ("Redirecting you to our Outlook booking page") appears below the fold of the redirect attempt. Pop-up blockers will block this on many enterprise browsers, leaving the user on a near-empty page. A senior buyer who sees an unexpected new tab is likely to assume tracking or third-party risk and abandon. There is also no "what happens after I book" preview.
- Recommendation: Replace auto-redirect with explicit user-initiated CTA + a 3-step list of what happens next ("1. Pick a 20-minute slot, 2. We send a Stripe receipt, 3. You arrive to a prepared session"). This reduces ambiguity aversion and respects enterprise browser policy. Honest, low-effort.
- Evidence: `src/pages/book-clarityscan.tsx:10-19`, `src/pages/book-clarityscan.tsx:30-49`.

### BE-010 — No ethical scarcity or cadence cue anywhere on the funnel
- Concepts: ethical scarcity + action bias + hyperbolic discounting
- Severity: Medium • Impact: 3 • Effort: S
- Location: site-wide; assessed against `src/pages/services/clarityscan.tsx`, `src/pages/work-with-us/index.tsx`, `src/components/FinalCta.tsx`
- Observation: There is zero honest scarcity or cadence signaling. The backlog notes "2-4 sessions per week" of delivery capacity (`src/pages/index.tsx:333`) — a genuine constraint that would be useful disclosure. A senior buyer's natural status quo is to defer; without any future-pacing cue, the visit ends with no commitment hook.
- Recommendation: On the ClarityScan service page, add an honest cadence line near the booking CTA: "Doulab runs 2-4 ClarityScan® sessions per week. Next available slots usually within 5-7 business days." This is verifiable, defensible, and uses scarcity ethically (no fake countdowns). Pair with one calendar-aware sentence on the success page.
- Evidence: `src/pages/index.tsx:333`, `src/pages/services/clarityscan.tsx:132-148`.

### BE-011 — "How it works" steps lack progress framing, increasing decision fatigue
- Concepts: decision fatigue + processing fluency + action bias
- Severity: Low • Impact: 2 • Effort: S
- Location: `src/pages/services/clarityscan.tsx:131-154`
- Observation: The three "How it works" steps (Schedule / Discuss / Act) are equal cards. A senior reader does not see a numbered progression, only icons. Subtle but measurable on attention: numbered steps reduce cognitive load and increase intent to start (action bias).
- Recommendation: Prefix each step with "1.", "2.", "3." in the `h3` and add a thin connector or arrow CSS treatment. Already exists as `processRail` pattern in `work-with-us` (`src/pages/work-with-us/index.tsx:190-215`); reuse it.
- Evidence: `src/pages/services/clarityscan.tsx:131-154`, `src/pages/work-with-us/index.tsx:190-215`.

### BE-012 — Blog titles framed abstractly, missing curiosity-gap hooks
- Concepts: framing + curiosity gap + fluency
- Severity: Low • Impact: 2 • Effort: S
- Location: `blog/2025-08-30-introducing-doulab.md`, `blog/2025-09-12-clarityscan-decision-latency.md`, `blog/2025-09-22-vigia-futura-foresight-observatory.md`, `blog/2026-01-19-coordination-threshold.md`
- Observation: All four blog post titles are conceptual nouns or composite concepts. None contain a number, an outcome, or a contradiction — the standard ingredients of high-fluency executive titles. The blog is a top funnel-entry channel for senior buyers via search and LinkedIn, so this is a measurable signal loss.
- Recommendation: Augment titles with a measurable element or a contrarian frame. Example: "Decision latency: the hidden tax on innovation portfolios" instead of pure concept. Do not change URLs — only display titles and `og:title`. Defensible: titles describe what's inside.
- Evidence: filenames in `blog/`.

### BE-013 — IMM-P®/MCF® jargon density without one-line definitions
- Concepts: processing fluency + ambiguity aversion
- Severity: Medium • Impact: 3 • Effort: S
- Location: `src/pages/index.tsx:293`, `src/pages/services/clarityscan.tsx:78` (`ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."`), `src/pages/what-we-do/index.tsx:107,119,172`
- Observation: Branded terminology (IMM-P®, MCF® 2.1, ClarityScan®, MicroCanvas®, ClarityScan Plus) appears on every page without a single inline definition. A senior buyer arriving from LinkedIn does not yet know which is the diagnostic, which is the program, which is the canvas. High fluency cost = higher abandonment. Note also the visible typo "ClarityScanr" at `src/pages/services/clarityscan.tsx:164` and `src/pages/services/index.tsx:49` (registered-mark rendering bug).
- Recommendation: On first occurrence per page, append a 4-6 word gloss inline: "IMM-P® (our 12+12 week maturity program)". Fix the "ClarityScanr" rendering. Add a one-line legend at page footer if needed. Ethical: this is plain-language disclosure.
- Evidence: `src/pages/services/clarityscan.tsx:164`, `src/pages/services/index.tsx:49`, `src/pages/index.tsx:293`.

### BE-014 — "Talk to us" and "Book a discovery call" point to the same place under different labels
- Concepts: choice architecture + decision fatigue
- Severity: Low • Impact: 2 • Effort: S
- Location: `src/pages/services/clarityscan.tsx:77,168`, `src/pages/index.tsx:716,736`
- Observation: Two different labels ("Talk to us" on ClarityScan; "Book a discovery call" on the homepage) both resolve to `https://booking.doulab.net/discovery`. This creates label inconsistency and the impression of multiple options where only one exists. It increases label-evaluation cost without offering real choice.
- Recommendation: Standardize the secondary CTA label site-wide. Recommend "Book a 20-min discovery call" — verifiable, time-anchored, and reduces ambiguity in one stroke.
- Evidence: `src/pages/services/clarityscan.tsx:77`, `src/pages/services/clarityscan.tsx:168`, `src/pages/index.tsx:716`.

### BE-015 — No commitment device after the discovery call
- Concepts: commitment + endowment + peak-end rule
- Severity: Low • Impact: 2 • Effort: M
- Location: discovery booking flow (external `booking.doulab.net/discovery`); follow-up surface in repo is `src/pages/contact/`
- Observation: The discovery call has no documented "we will send you a one-page recap" promise on the site. After the call, the buyer has nothing tangible from Doulab. No commitment device exists to convert a positive call into action. Senior buyers measure consultants on what arrives after the meeting.
- Recommendation: Publish on the site (e.g., near every "Book a discovery call" CTA) the promise: "After the call you receive a one-page recap with two recommended next steps within 1 business day." Then deliver it. This is a verifiable promise that builds trust and creates a soft endowment (the recap document) before any contract.
- Evidence: `src/pages/index.tsx:716`, `src/components/FinalCta.tsx:112-145`.

## Quick wins — top 5

1. BE-001 — Move the "20-minute baseline" anchor into the homepage hero subtitle. (S, Impact 5)
2. BE-002 — Publish the ClarityScan® fixed fee and what's included on `services/clarityscan.tsx`. (S, Impact 5)
3. BE-006 — Add the existing `proofStrip` logo pattern to the homepage above the Problem section. (S, Impact 4)
4. BE-003 — Add a "Most teams start with ClarityScan®" line under the homepage final CTA. (S, Impact 4)
5. BE-009 — Replace the auto-redirect on `book-clarityscan.tsx` with an explicit "what happens next" 3-step list. (S, Impact 3)

## Strategic bets — top 3

1. BE-008 + BE-015 — Build the post-payment and post-call deliverable system: a downloadable one-pager pre-session, a one-page recap post-call. This converts the peak-end moment of every funnel branch into an endowment artifact. Hand-off: Conversion + Sales + Content & copy. (M, cross-team)
2. BE-004 + BE-007 — Re-architect the Services and Numbers strip as a scope ladder with verified outcome KPIs. Requires one round of evidence collection from past engagements (decision-latency before/after, cycle-time before/after). Hand-off: MCF/IMM-P + Content & copy + Analytics. (L)
3. BE-005 — Convert the homepage Problem reel from pure loss framing to paired loss→after framing tied to ClarityScan® deliverables. This is the highest-leverage emotional architecture change on the site. Hand-off: Content & copy + Behavioral psychology + Brand & visual. (M)

## Out of scope / hand-offs

- Pricing strategy itself (only its disclosure): hand-off Sales.
- Visual treatment of new ladders / decoy tags: hand-off Brand & visual.
- Calendar-blocking and .ics generation on success page: hand-off Conversion + Code quality.
- Logo strip imagery and consent for new client logos: hand-off Sales + Security & privacy.
- Blog title rewrites: hand-off Blog & editorial + Content & copy + SEO (preserve URLs).
- Mobile-first verification of new ladders and scope ladder grid: hand-off Mobile-first + IA & UX.
- KPI sourcing (BE-007): hand-off Analytics + MCF/IMM-P.
- A11y for any new "recommended" tags and badges: hand-off Accessibility.

## Open questions for Luis

1. Is the ClarityScan® fee intentionally hidden (e.g., to allow private-sector vs public-sector price discrimination), or is it just not yet published? This decides BE-002.
2. What is the real weekly delivery cadence ceiling for ClarityScan® right now (for BE-010 honest scarcity)?
3. Do you have measured outcome data (decision latency, cycle time, time-to-first-gate-pass) from at least one engagement that we can quote on the Numbers strip (BE-007)?
4. Are you willing to commit publicly to a "one-page recap within 1 business day" SLA on every discovery call (BE-015)? If not, what is the realistic SLA?
5. Which one of the case study clients (AFP Siembra, Alpha, FUNDAPEC, OGTIC) is most likely to approve a named attributed pull-quote for the homepage (BE-006)?
6. Is "Discovery call" branded the same as in your CRM? If we standardize to "20-min discovery call" (BE-014), does that conflict with the booking template?
7. For the Problem reel (BE-005), are you open to dropping it from 8 cards to 5-6 to make room for "after" framing without lengthening the page?
