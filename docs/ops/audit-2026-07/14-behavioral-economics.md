---
title: "Audit 2026-07 — 14 Behavioral economics (bilingual)"
status: draft
role: behavioral-economics
locale-scope: EN + ES
---

# Behavioral Economics Audit — doulab.net — 2026-07 (bilingual)

## Scope

Behavioral-economics review of both locales (EN at `/`, ES at `/es/*`) with the primary conversion target unchanged from June: the **ClarityScan® tiered diagnostic**, now publicly priced (T1 CHF 150 on hero + cards + final CTA; T2 / T3 scope-based with dedicated subpages).

Surfaces reviewed:

- EN `src/pages/index.tsx`, `src/pages/services/clarityscan.tsx`, `src/pages/services/clarityscan/{audit,diagnostic}.tsx`, `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/work-with-us/index.tsx`.
- ES `i18n/es/docusaurus-plugin-content-pages/index.tsx`, `…/services/clarityscan.tsx`, `…/services/clarityscan/{audit,diagnostic}.tsx`, `…/book-clarityscan*.tsx`.

Out of scope: copy rewriting beyond illustrative deltas; visual design; technical SEO; frozen `clients.doulab.net`. Brand-locked terms (IMM-P®, MCF®, ClarityScan®) kept; copy-strategy ownership ceded to role 03.

## Method

Each finding maps a concrete file:line to ≥1 BE concept (anchoring, loss aversion, defaults, social proof, choice architecture, decoy effect, reciprocity, ethical scarcity, mental accounting, peak-end, ambiguity aversion, endowment, action bias). Recommendations are ethically defensible (verifiable claims, honest scarcity). Bilingual delta noted where EN buyer (Swiss/global, CHF-fluent) and ES buyer (LATAM, CHF unusual, higher price sensitivity) require different framing.

**June carryover.** The following 2026-06 findings are wholly or substantially resolved and not re-filed: BE-001 (hero now anchors "15-20 minutes" via `ctaNote`), BE-002 (CHF 150 published on hero, tier card, final CTA, schema), BE-004 (scope ladder via 3-tier card grid + T2/T3 subpages), BE-011 (Schedule/Discuss/Act remain unnumbered but the tiered ladder absorbs the original concern), BE-013 (gloss problem persists but is owned by role 03 / content). BE-014 partially resolved (T2/T3 secondary CTA now reads "Talk to us about T2 / T3" — distinct from generic discovery). Remaining live items below.

Severity: P0 (blocks revenue / trust) > P1 (measurable funnel loss) > P2 (clear lift available) > P3 (polish). Impact 1-5. Effort S ≤ 1 day, M ≤ 1 week, L > 1 week.

---

## Findings

### BEHE-001 — Post-payment success page wastes the peak-commitment moment (carryover, still open)
- Concepts: endowment effect, peak-end rule, action bias, reciprocity
- Severity: **P1** • Impact: 4 • Effort: S
- Location: `src/pages/book-clarityscan-success.tsx:8-50`; ES `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx`
- Observation: The single highest-commitment moment in the entire funnel (buyer just paid CHF 150) still produces only two sentences and an auto-`window.open` to Microsoft Bookings. No ownership artifact ("Your snapshot template is reserved"), no prep checklist, no .ics, no preview of the deliverable. Endowment value is left on the table at the exact moment it would crystallize.
- Recommendation: On success page, add (a) a short prep checklist ("Bring: one strategic question, one delivery bottleneck, one current decision"), (b) a downloadable one-pager describing the radar + ladder + 30/60/90 they will receive (creates pre-session endowment), (c) "Add to calendar" .ics or explicit Bookings link with expected slot windows. Mirror in ES with LATAM-appropriate phrasing.
- Why kept (vs June BE-008): No diff in this file since June; carry to P1 because it is the cheapest-to-build, highest-trust-payoff change in the audit.

### BEHE-002 — Homepage final CTA has no recommended default ("Most teams start with…")
- Concepts: default bias, choice architecture, status quo bias, peak-end rule
- Severity: **P1** • Impact: 4 • Effort: S
- Location: EN `src/pages/index.tsx:667-675`; ES `i18n/es/…/index.tsx:668-676`; EN hero `src/pages/index.tsx:641-656`
- Observation: Final CTA pairs "Start with ClarityScan®" (primary) and "Book a discovery call" (secondary) with equal verbal weight. The button styling differs (primary/secondary) but the copy never names the recommended path. Lower-intent visitors flow to the free discovery call instead of the CHF 150 paid diagnostic. The visible `ctaNote` ("Get your baseline in 15 to 20 minutes") describes the deliverable, not the recommendation. Same shape in ES.
- Recommendation: Replace `ctaNote` (or add a one-line caption under it) with an explicit default cue: EN "Most teams start with ClarityScan® Tier 1 (CHF 150). Book a discovery call only if you need help scoping Tier 2 or Tier 3." ES "La mayoría comienza con ClarityScan® Nivel 1 (CHF 150). La llamada de descubrimiento es para ayudarte a dimensionar Nivel 2 o Nivel 3." This is an honest disclosure of buyer-flow reality, not manipulation.
- Why kept (vs June BE-003): June logged this; recheck confirms unchanged in both locales.

### BEHE-003 — Homepage has no client-logo strip; social proof remains buried on Work-with-us only
- Concepts: social proof, identifiable-institution heuristic, fluency, ambiguity aversion
- Severity: **P1** • Impact: 5 • Effort: S
- Location: EN `src/pages/index.tsx` (no logo strip anywhere; CaseStudiesTeaser at lines 289-297 shows card images only); ES `i18n/es/…/index.tsx` (same shape); existing logo strip pattern at `src/pages/work-with-us/index.tsx:246-252` (AFP Siembra, OGTIC, Alpha, FUNDAPEC + 1 more).
- Observation: For senior B2B / institutional buyers (the entire ClarityScan T2/T3 ICP), the single highest-leverage decision input is "who else trusts them". Four named institutional clients (one Dominican AFP pension fund, one bank, one education foundation, one government CIO office) exist, are logo-permissioned (already public on `/work-with-us`), and are completely absent from the highest-trafficked page on the site in both locales. ES is more affected — LATAM buyers index even more heavily on institutional proof.
- Recommendation: Reuse the existing `.proofStrip` block from `work-with-us` and insert it on `index.tsx` immediately under the Hero, above `<ProblemSection />` (line 659). Identical EN/ES — logos are language-neutral. Add one line above strip: EN "Trusted by:" / ES "Confían en nosotros:". No new assets needed.
- Why kept (vs June BE-006): Logos still missing from homepage in both locales.

### BEHE-004 — No mental-accounting frame around CHF 150 — especially harmful in ES (LATAM)
- Concepts: mental accounting, anchoring, ambiguity aversion
- Severity: **P1** • Impact: 4 • Effort: S
- Location: EN `src/pages/services/clarityscan.tsx:174-182` (Tier 1 card), `:359-372` (Final CTA); ES `i18n/es/…/services/clarityscan.tsx` same anchors.
- Observation: CHF 150 is shown as a raw number with no contextualization. For a Swiss/EU buyer this anchors near "an hour of a junior consultant" or "a business lunch in Zurich". For a LATAM buyer (the ES surface), CHF is **not a daily currency**, conversion math (CHF → USD ≈ 165, → DOP ≈ 10,000, → MXN ≈ 3,300) is friction, and 150 in local terms reads larger than intended. No mental-accounting bridge exists in either locale.
- Recommendation: Under the CHF 150 line on Tier 1 card and on the Final CTA, add an italic microcopy line. EN: "About the cost of a 30-minute strategy call — but you keep the PDF." ES: "Aproximadamente USD 165 / equivalente a media hora de consultoría — y te llevas el informe en PDF." Honest, verifiable, reframes the number from "purchase" to "swap". Do not add live FX widget (volatile, fragile, adds JS).
- Bilingual note: Recommendation differs by locale. EN gets a time-equivalence anchor; ES gets a currency-equivalence anchor first, then the time anchor.

### BEHE-005 — No honest scarcity / cadence cue on the booking flow (carryover, still open)
- Concepts: ethical scarcity, action bias, hyperbolic discounting
- Severity: **P2** • Impact: 3 • Effort: S
- Location: EN `src/pages/services/clarityscan.tsx:359-372` (final CTA), `book-clarityscan.tsx`; ES counterparts.
- Observation: NumbersStrip at `src/pages/index.tsx:266-286` still cites "2 to 4 per week sessions" — a real cadence constraint. The ClarityScan service page and the booking page never surface this near the CTA. Without a future-pacing cue, a senior buyer's default is "I'll think about it" (status quo).
- Recommendation: On `services/clarityscan.tsx` final CTA `ctaNote`, replace current note with: EN "Doulab runs 2-4 Tier 1 sessions per week. Next available slots are usually 5-7 business days out." ES "Doulab realiza 2-4 sesiones Nivel 1 por semana. Los próximos cupos suelen estar a 5-7 días hábiles." Same on `book-clarityscan.tsx`. Verifiable, defensible, no fake countdown.
- Why kept (vs June BE-010): Unchanged in both locales.

### BEHE-006 — Tier 2 (Diagnostic) is not visually anchored as "the typical next step" — decoy effect unused
- Concepts: decoy effect, choice architecture, anchoring
- Severity: **P2** • Impact: 4 • Effort: S
- Location: EN `src/pages/services/clarityscan.tsx:173-237` (three tier cards); ES same lines.
- Observation: The three tier cards (T1 / T2 / T3) are rendered with equal visual weight. Classic three-tier pricing benefits from explicitly marking the middle option as recommended (decoy effect: T1 + T3 nudge buyer toward T2). Currently T1 is anchored only on price, T3 only on regulator language; T2 is the "no flag" middle and reads as a neutral fallback rather than the natural enterprise default.
- Recommendation: Add an explicit badge to the T2 card: EN "Most chosen by enterprise teams" / ES "El más elegido por equipos corporativos" — but **only if true**. If the actual modal sale is T1, instead badge T1 with "Start here". Implementation: add a visual tag (CSS pill) in the `<article className="card" aria-labelledby="tier-2-card">` block. Ethical: the tag describes reality, not manipulation.
- Open question: which tier is the actual modal sale in 2024-2026 to date? Decides which card gets badged (see open questions).

### BEHE-007 — `book-clarityscan.tsx` no longer auto-redirects but offers zero "what happens next" framing
- Concepts: ambiguity aversion, action bias, reciprocity
- Severity: **P2** • Impact: 3 • Effort: S
- Location: EN `src/pages/book-clarityscan.tsx:9-41`; ES counterpart.
- Observation: The page (a 41-line stub) shows a header, one button, and one fallback link. The auto-`window.open` from June (BE-009) is gone — good. But the page never tells the buyer what happens after they click Open the booking page: Do they pay first? Pick a time first? Get a receipt? Get a calendar invite? A senior enterprise buyer with strict procurement reflex will read the empty page as "system not ready" and bounce. (Contrast: `book-clarityscan-success.tsx` *does* still auto-`window.open` at line 12 — see BEHE-001.)
- Recommendation: Add a 3-step numbered list above the CTA: EN "1. Pick a 20-minute slot on Microsoft Bookings. 2. We send a Stripe payment link by email. 3. You arrive to a prepared session within 5-7 business days." ES equivalent. Removes ambiguity aversion, leverages reciprocity (we tell you the process upfront, you trust the process). Pair with BEHE-005 cadence line.

### BEHE-008 — Reciprocity surface (free research / blog) is invisible at conversion moment
- Concepts: reciprocity, fluency, peak-end rule
- Severity: **P2** • Impact: 3 • Effort: S
- Location: EN `src/pages/services/clarityscan.tsx` (no inline link to MCF docs or blog from the service page until the implicit `IMM-DT` microcopy at :238-241); ES same.
- Observation: Doulab gives away substantial free value (MCF v2.2 docs at `/docs/research-resources/microcanvas`, the blog, IMM whitepapers). None of it is surfaced on the ClarityScan service page near the CTA. Reciprocity research suggests that visibly receiving a free artifact *before* the ask raises paid conversion. The current page treats the buyer as already-convinced.
- Recommendation: Add a "Before you buy" microcopy block just above the final CTA: EN "Want to preview the method first? Read the [MicroCanvas Framework v2.2](/docs/research-resources/microcanvas) (free) or the [Decision latency post](/blog/clarityscan-decision-latency). Then come back." ES equivalent (these docs already exist in ES). One-paragraph, no new pages.

### BEHE-009 — Numbers strip KPIs are inputs, not buyer-outcome anchors (carryover narrowed)
- Concepts: anchoring, fluency, ambiguity aversion
- Severity: **P2** • Impact: 3 • Effort: M (requires evidence collection)
- Location: EN `src/pages/index.tsx:266-286`; ES counterpart.
- Observation: Three KPIs unchanged since June: "7 innovation labs co-created", "25+ institutions per year supported", "2 to 4 per week sessions". All are inputs (delivery counts), not outcomes (decision latency reduction, cycle time, gate-pass rate). A senior buyer parses inputs as "you stay busy" not "you make me succeed". The disclosure footnote is honest but does not strengthen the anchor.
- Recommendation: Replace at least one input KPI with a buyer-outcome metric drawn from the case studies. Candidate from AFP Siembra / Alpha / FUNDAPEC / OGTIC engagements: median decision latency reduced from X to Y, or median time-to-first-gate-pass. Keep round numbers (fluency). Same EN/ES. Effort is M because it requires one round of evidence sourcing from prior engagements.
- Why kept (vs June BE-007): Same numbers in production.

### BEHE-010 — Loss-aversion framing on `ProblemSection` is paired but never tied to the CHF 150 price tag
- Concepts: loss aversion, framing, mental accounting
- Severity: **P3** • Impact: 3 • Effort: S
- Location: EN `src/pages/index.tsx:28-191` (four problem cards with paired "How Doulab responds"); ES same.
- Observation: The June BE-005 concern about pure loss framing is partially addressed — each cause card now pairs a loss ("21% engagement, USD 438B lost") with a Doulab response. Good. But the loss numbers are massive (438B, "third decade of low growth") and the response is qualitative ("ClarityScan produces a one-page baseline"). The buyer does not connect the cost of inaction to the cost of acting. A reader who registers "I might be wasting USD X in delivery friction" should immediately see "ClarityScan T1 costs CHF 150 to find out".
- Recommendation: Below the problem grid (around line 165, in the green "What we measure" callout), add one line: EN "The cheapest move is to measure first. ClarityScan® Tier 1 is CHF 150." ES "Lo más económico es medir primero. ClarityScan® Nivel 1 cuesta CHF 150." Directly bridges the loss frame to the price anchor. Single line, no restructure.

### BEHE-011 — ES copy uses straight CHF anchoring without acknowledging LATAM purchasing-power asymmetry
- Concepts: framing, mental accounting, status signaling
- Severity: **P3** • Impact: 3 • Effort: S
- Location: ES `i18n/es/docusaurus-plugin-content-pages/services/clarityscan.tsx:78`, `:177`, `:364-372`.
- Observation: ES copy was translated faithfully from EN; "CHF 150" appears 1:1 with no localization. For LATAM enterprise buyers, CHF is a status-signaling currency (Swiss-grade), which can cut both ways: (a) positively for premium positioning, (b) negatively as "this is not built for our market". Currently the page chooses neither — it just translates the number.
- Recommendation: Pick a stance and codify it. Option A (recommended): keep CHF (premium signal) but pair with the BEHE-004 microcopy bridge. Option B: list CHF + USD equivalent on the price line (`CHF 150 (~USD 165)`). Option C: switch ES to USD entirely (loses premium signal, may complicate Stripe). Recommendation: Option A — premium positioning is consistent with Doulab's IMM-P® / institutional / regulator-grade brand. Decide explicitly; document the decision in `docs/ops/decisions/`.
- Bilingual delta: This finding is ES-only.

---

## Quick wins — top 5 (each ≤ 1 day, high leverage)

1. **BEHE-003** — Drop the existing `.proofStrip` from `work-with-us` onto the homepage hero base, both locales. (Impact 5)
2. **BEHE-002** — Add explicit default-recommendation copy under the homepage final CTA. (Impact 4)
3. **BEHE-004** — Add mental-accounting microcopy under CHF 150 on Tier 1 card + final CTA. EN/ES diverge. (Impact 4)
4. **BEHE-001** — Build out `book-clarityscan-success.tsx` with prep checklist + .ics + preview PDF link. (Impact 4)
5. **BEHE-007** — Add 3-step "what happens next" list to `book-clarityscan.tsx`. (Impact 3)

## Strategic bets — top 3

1. **BEHE-009 + BEHE-006** — Replace at least one input KPI on the Numbers strip with a buyer-outcome metric sourced from a named case study (AFP Siembra / OGTIC most likely candidates). Simultaneously add a "Most chosen by…" badge to the correct tier on `clarityscan.tsx`. Both require an internal data review and one yes/no from the client on attribution. Hand-off: Analytics + Sales + MCF/IMM-P®. (M, cross-team)
2. **BEHE-001 + BEHE-008** — Build the reciprocity + endowment artifact set: a downloadable one-page "What you'll receive" PDF (handed out pre-payment for free, and again on success page), and a curated "Before you buy" reading shelf (3 free MCF/blog links surfaced near CTA). Converts the entire pre-CHF-150 corridor into a reciprocity loop. Hand-off: Conversion + Content & copy + Brand & visual. (M)
3. **BEHE-011** — Make and document an explicit currency-positioning decision for ES (CHF + USD equivalent vs CHF only vs USD only). Touches Sales (price discrimination policy), Conversion, i18n, and Brand. Once decided, codify in `docs/ops/decisions/` so future translators don't drift. Hand-off: Sales + i18n + Conversion. (M)

## Out of scope / hand-offs

- Actual pricing strategy (CHF 150 level, T2/T3 quotes): Sales.
- Visual treatment of the recommended-tier badge: Brand & visual.
- .ics generation + auto-attach on success page: Conversion + Code quality.
- Logo strip imagery (existing in `static/img/`): Brand & visual + Security & privacy (consent re-check for homepage placement).
- Buyer-outcome KPI sourcing (BEHE-009): Analytics + MCF/IMM-P® + Sales.
- Blog title rewrites (June BE-012 carryover, lower leverage): Blog & editorial + SEO.
- A11y for badges and new microcopy: Accessibility.
- "Before you buy" curated reading shelf content: Content & copy + Blog & editorial.

## Open questions for Luis

1. Which ClarityScan tier is the *actual modal sale* across 2024-2026? (Decides which card to badge in BEHE-006; if T1, the badge says "Start here"; if T2, it says "Most chosen by enterprise teams".)
2. Stance on ES currency (BEHE-011): keep CHF as premium signal, dual-display CHF + USD, or switch to USD? Today's silent translation is option D = no stance.
3. For BEHE-009, do you have measurable decision-latency or time-to-first-gate-pass deltas from any named engagement (AFP Siembra most likely) that we can publish? If not, can we collect them in 2026-Q3?
4. For BEHE-001, are you willing to ship a small downloadable "what you'll receive" one-page PDF as the pre-session endowment artifact? (Required for both BEHE-001 and BEHE-008.)
5. For BEHE-005 honest scarcity: is the "2-4 per week" cadence still the real ceiling in mid-2026, or has it moved?
6. For BEHE-002, do you want the recommended-default copy ("Most teams start with ClarityScan® Tier 1") even if the discovery call currently outperforms paid T1 in actual conversion? (If so, the disclosure should not be added until paid T1 is the real modal entry point.)
7. Do you have consent from AFP Siembra, OGTIC, Alpha, FUNDAPEC to display their logos on the homepage hero, in addition to the existing Work-with-us page placement? (Required for BEHE-003.)
