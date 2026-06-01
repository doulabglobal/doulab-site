# Content & Copy Audit — doulab.net — 2026-06-01

## Scope of this audit

This audit reviews the visible English-language copy and microcopy across the marketing surface of doulab.net (Docusaurus v3, English-only). Coverage:

- Homepage hero, sections, and final CTA: `src/pages/index.tsx`
- Top-level marketing pages: `src/pages/what-we-do/`, `about/`, `case-studies/`, `insights/`, `contact/`, `vigia-futura/`, `work-with-us/`, `ecosystems/`, `book-clarityscan.tsx`
- Service pages: `src/pages/services/clarityscan.tsx`, `services/innovation-maturity.tsx`, `services/index.tsx` (sampled), and case-study data
- Shared components: `Hero.tsx`, `FinalCta.tsx`, `CaseStudyCards.tsx`, `caseStudiesData.tsx`, `WhitepaperCards.tsx`
- Navigation surfaces: `docusaurus.config.ts` (tagline, navbar, footer)
- Research entry points: `docs/research-resources/index.mdx`
- Blog: titles and intro paragraphs of all 4 published posts in `blog/`

Out-of-scope: deep MDX content of the Innovation Lab Guide chapters, the Distributed Federated Agentic AI whitepaper body, and legal copy (`privacy-terms.tsx`). Those are flagged for hand-off where relevant.

The lens is Content & Copy strategy only: value proposition clarity, tone, scannability, headline strength, jargon load, CTA microcopy, brand-term hygiene, and message coherence across pages. Visual design, IA structure, conversion plumbing, SEO meta, and accessibility are flagged for hand-off and not graded here.

## Method

1. Read project governance and backlog (`AGENTS.md`, `docs/ops/doulab-net-backlog.md`) to understand frozen vs. live surfaces and recent terminology normalization passes (C7, C9).
2. Read the navigation/footer source-of-truth (`docusaurus.config.ts`) to anchor the verbal identity (tagline, navbar labels, footer copy).
3. Read each marketing page top-to-bottom, capturing exact strings, headline patterns, CTA labels, and microcopy.
4. Cross-checked product/brand terms (ClarityScan®, IMM-P®, MicroCanvas® / MCF, Vigía Futura) across pages with Grep.
5. Sampled blog post frontmatter and first 30+ lines for tone and positioning consistency.
6. Compared site claims against the canonical positioning in `AGENTS.md` / backlog (IMM-P® not "IMM®"; MCF v2.2 in IMM page vs. v2.1 elsewhere; "Latin America + Caribbean" framing).

Findings are ranked by impact × scope of damage to value proposition clarity / trust.

## Findings (ranked)

### COPY-001 — Broken brand mark "ClarityScanr" still ships in primary CTAs

- Severity: High
- Impact: 5
- Effort: S
- Location:
  - `src/pages/services/clarityscan.tsx:164` (Final CTA on the ClarityScan® page itself)
  - `src/pages/services/index.tsx:49` (Services hero primary CTA)
- Observation: Phase C9 was supposed to normalize ClarityScanr → ClarityScan® across `src/pages`. Two instances slipped through, and both are on primary conversion buttons. The label currently reads as a typo on the most important pages in the funnel.
- Recommendation: Replace `'Book a ClarityScanr online'` with `'Book a ClarityScan® online'` in both files. Add a CI guard (regex `ClarityScanr|IMM-Pr|MicroCanvasr`) to fail builds on any future drift.
- Evidence:
  - `clarityscan.tsx:164` — `label: 'Book a ClarityScanr online',`
  - `services/index.tsx:49` — `label: 'Book a ClarityScanr online'`

### COPY-002 — Footer registered-mark line contradicts site-wide product naming

- Severity: High
- Impact: 4
- Effort: S
- Location: `docusaurus.config.ts:136`
- Observation: Footer reads `© ${year} Doulab. MicroCanvas® and IMM® are registered marks.` Across the rest of the site the program is consistently called `IMM-P®` (Innovation Maturity Model Program). The footer therefore registers a different mark than the one shown to users on every service and home page. Either the underlying mark is "IMM®" and the product is "IMM-P®", or the footer is wrong; either way the visible message is incoherent.
- Recommendation: Confirm the registered mark with Luis. Most likely target: `© ${year} Doulab. MicroCanvas®, IMM®, IMM-P®, and ClarityScan® are marks of Doulab.` ClarityScan® is also marked on pages but absent from the footer attribution.
- Evidence: `docusaurus.config.ts:136` — `copyright: \`© ${new Date().getFullYear()} Doulab. MicroCanvas® and IMM® are registered marks.\``

### COPY-003 — MCF version mismatch (v2.1 vs. v2.2) across the site

- Severity: High
- Impact: 4
- Effort: M
- Location:
  - v2.1: `src/pages/index.tsx:489`, `pages/what-we-do/index.tsx:107,119,196,305,339`, `about/index.tsx:54,166,288`, `insights/index.tsx:249,257,427`, `case-studies/index.tsx:87`, `contact/index.tsx:178`, `services/clarityscan.tsx:78,169`, `services/index.tsx:51`, `work-with-us/index.tsx:99`
  - v2.2: `src/pages/services/innovation-maturity.tsx:36,122,178,196,259,478,724`
- Observation: The IMM-P® service page consistently references MicroCanvas Framework v2.2 / MCF 2.2 / IMM 2.2 ("domain scoring, phase readiness, evidence gates"). Every other page still says MCF v2.1 / MCF 2.1. Visitors who land on IMM-P® and then bounce to the homepage or About will see the framework appear to roll backward by a minor version. The MCF card on the homepage and the docs link (`/docs/research-resources/microcanvas`) also still say v2.1.
- Recommendation: Decide canonical version (almost certainly v2.2 given IMM 2.2 governance language is the newest content) and align sitewide. Update CTA notes from "Built on MicroCanvas® v2.1 and IMM-P® gates." to "Built on MicroCanvas® v2.2 and IMM-P® gates." Update the homepage MCF card title (`MicroCanvas Framework v2.1` at `index.tsx:489`) and its link target. Add the version string to a single constant so this never desyncs again.
- Evidence (sample): `services/innovation-maturity.tsx:196` — `ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2."` vs. `services/clarityscan.tsx:78` — `ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."`

### COPY-004 — Homepage hero promises a deliverable the visitor never sees defined

- Severity: High
- Impact: 4
- Effort: S
- Location: `src/pages/index.tsx:658, 717, 737`
- Observation: The hero description says "You will get a short baseline and a 30, 60, 90 plan." The hero CTA note repeats "Get your baseline in 15 to 20 minutes." Nowhere on the homepage above the fold (or in the immediate next section) is "ClarityScan" defined as the baseline mechanism. A first-time visitor sees the promise of a "baseline" and a registered-mark product name "ClarityScan®" on the primary button without being told the two are the same thing. The connection only resolves further down in the Problem section microcopy.
- Recommendation: Tighten the hero body to bind the promise to the product in one sentence. Example replacement for `body`: "We help organizations make innovation repeatable and foresight practical. Start with ClarityScan®, our 15–20 minute diagnostic that gives you a baseline and a 30/60/90 plan." Then the CTA "Start with ClarityScan®" needs no separate translation.
- Evidence: `index.tsx:657-658` — `description = 'We help people and organizations make innovation repeatable and foresight practical, so strategy turns into sustainable outcomes. You will get a short baseline and a 30, 60, 90 plan.';`

### COPY-005 — Tagline (`docusaurus.config.ts`) and homepage value prop are disconnected

- Severity: Medium
- Impact: 3
- Effort: S
- Location: `docusaurus.config.ts:9`; `src/pages/index.tsx:705-707`
- Observation: The site tagline is `'We unlock global prosperity by helping others create better futures'` — abstract and mission-grade. The homepage hero title is `'Innovation, Foresight and Repeatable Delivery'` — concrete and capability-grade. The About page reuses the tagline verbatim as the page lead (`about/index.tsx:151`). There is no bridge between the two registers, and the tagline appears on every page in `<head>` metadata while never appearing in any visible body copy except About. The result is a brand voice that oscillates between aspirational-NGO and pragmatic-consulting without a connective layer.
- Recommendation: Either (a) demote the mission tagline to About-only and replace the site tagline with the operational promise ("Innovation, foresight, and repeatable delivery for Latin America and the Caribbean"), or (b) keep the mission tagline but add a one-line operational subline that appears in social-card descriptions and About. The current split forces the reader to do the translation.
- Evidence: `docusaurus.config.ts:9` — `tagline: 'We unlock global prosperity by helping others create better futures',`

### COPY-006 — Regional positioning (Latin America + Caribbean) is absent from public copy

- Severity: Medium
- Impact: 4
- Effort: M
- Location: Sitewide. Specifically missing from `index.tsx` hero/description, `what-we-do/index.tsx`, `about/index.tsx`, `services/index.tsx`, footer.
- Observation: Per the audit brief, Doulab is a consulting firm focused on Latin America and the Caribbean. The site does not say so. Schema.org `areaServed` on every service is set to `'Global'` (`what-we-do/index.tsx:66,77,86`; `services/clarityscan.tsx:33`; `services/innovation-maturity.tsx:38`). The regional positioning appears once in a blog post ("Vigía Futura: Why Latin America Needs a Strategic Foresight Observatory") and once in the new ecosystems essay; it never appears in the marketing pages a buyer reads first. Proof points (AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC/RedLab) are all Dominican Republic — readers can infer it but never see it confirmed.
- Recommendation: Decide whether the firm wants to read as "global with LATAM/Caribbean roots" or "LATAM/Caribbean specialist with global reach". Both are defensible; the site currently chooses neither. Add a single sentence to the homepage hero or Numbers strip: "Based in the Dominican Republic; working across Latin America and the Caribbean since 2018." Mirror in About "Our story" and in the JSON-LD `areaServed`.
- Evidence: `what-we-do/index.tsx:66,77,86` — `areaServed: 'Global'`; `about/index.tsx:30` foundingDate 2018 with no region tag.

### COPY-007 — "Final CTA" copy is identical on five+ pages — site reads as a template

- Severity: Medium
- Impact: 3
- Effort: M
- Location: Identical "Ready to make innovation repeatable?" + body on `index.tsx:733-734`, `what-we-do/index.tsx:326-327`, `about/index.tsx:279-280`, `insights/index.tsx:418-419`. Variants appear on `case-studies/`, `contact/` ("Ready to talk?"), and `vigia-futura/` ("Ready to build future ready capacity?").
- Observation: The repeated headline "Ready to make innovation repeatable?" with the identical body sentence ("We will meet you where you are and co-create the path forward.") makes the site feel mass-produced once a reader visits more than two pages. The phrase "co-create the path forward" is also recognizable AI-pattern language and appears verbatim on 4 surfaces. CTA note "Built on MicroCanvas® v2.1 and IMM-P® gates." appears 12+ times.
- Recommendation: Differentiate by context. On About, lead with provenance ("Want the same approach for your team?"). On Case Studies, lead with proof ("Want results like these?"). On Insights, lead with method ("Turn an insight into a 30/60/90"). Keep the buttons identical; vary the headline + 1 sentence body. Retire the phrase "co-create the path forward."
- Evidence: `about/index.tsx:280` and `insights/index.tsx:419` — same string: `body="Start with a quick diagnostic or book a discovery call. We will meet you where you are and co‑create the path forward."`

### COPY-008 — Jargon-dense section on `/services/innovation-maturity` blocks entry

- Severity: Medium
- Impact: 4
- Effort: M
- Location: `src/pages/services/innovation-maturity.tsx:295-338` (the "How IMM 2.2 measures maturity" domain grid) and `:374-468` (the 5 phases stack)
- Observation: Within four screens of the hero, a non-specialist reader is asked to absorb: "domain-based scoring with phase readiness overlays", "Evidence & epistemic discipline", "Decision logic & governance", "Iteration & adaptive improvement", "Systemic & AI governance", "Tier 1 / Tier 2 / Tier 3", plus a 5-phase × 8-bullet structure with terms like "OKRs/KPIs measurement plan", "concierge tests", "kill criteria", "GTM channels", "scale economics", "DPI building blocks". The vocabulary is correct for a senior innovation buyer but the page does not warm them up. The hero subtitle "Assess. Strengthen. Accelerate." is too abstract to set context for the depth that follows. Public-sector buyers in the proof strip (OGTIC, FUNDAPEC) are unlikely to read past "epistemic discipline" without a translation.
- Recommendation: Add a one-paragraph "Plain-English summary" admonition right after the hero, before "What you get". Sample copy: "In plain terms: we measure how well your organization decides under uncertainty (evidence, governance, culture, iteration, AI/data) and we install a weekly rhythm so that gets better. Read on for the operating detail." Defer the 5-phase stack behind a `<details>` or a tab so the page does not present 50+ bullets in a single scroll. Replace "epistemic discipline" with "evidence discipline" (already used elsewhere as a synonym).
- Evidence: `innovation-maturity.tsx:304` — `<h3>Evidence & epistemic discipline</h3>`; `:328` — `<h3>Systemic & AI governance</h3>`.

### COPY-009 — Two ecosystem pages are public stubs that damage credibility

- Severity: Medium
- Impact: 3
- Effort: S
- Location: `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx`
- Observation: Both pages ship to production with two-sentence placeholder bodies: "Page in progress. We'll publish program structure, cohorts and outcomes here." and "Launching 2025. We'll share milestones, member orgs and startup stats here." 2025 has passed (today is 2026-06-01) so the second page is now also factually stale. These pages are indexable and discoverable through site search and the OGTIC/RedLab case study which mentions "RedLab Innovation Network".
- Recommendation: Either (a) remove from production routes until content exists, (b) `noindex` them and link them only from a "what's coming" section, or (c) replace each with a 200-word page that points to the OGTIC/RedLab case study, the coordination-threshold blog post, and a "subscribe for updates" CTA. The current state is worse than not having the URL.
- Evidence: `ecosystems/redlab.tsx:10` — `<p>Page in progress. We'll publish program structure, cohorts and outcomes here.</p>`; `red-incubadoras.tsx:10` — `<p>Launching 2025. We'll share milestones, member orgs and startup stats here.</p>`

### COPY-010 — Comma-instead-of-colon punctuation reads as translation artifact

- Severity: Low
- Impact: 2
- Effort: S
- Location: Pervasive. Examples: `index.tsx:264` ("Diagnostics, Know Where You Stand"), `:280` ("Workshops, Spark Aligned Action"), `:291` ("Programs, Build Innovation Capacity"), `:337` ("Proof, by the numbers"), `:347` ("Notes, counts reflect..."), `:539` ("What you get, a baseline..."), `:178` ("Outcomes, faster decisions..."); also `what-we-do/index.tsx:178,199,262`; `contact/index.tsx:90,107,131,135,151,169,181,189`; `about/index.tsx:182` ("Diagnostics, know where you stand").
- Observation: A clear pattern: headings and microcopy use a comma where English convention is a colon or em-dash. "Diagnostics, Know Where You Stand" should be "Diagnostics: know where you stand" or "Diagnostics — know where you stand". "Outcomes, faster decisions, shorter cycles" should be "Outcomes: faster decisions, shorter cycles". The pattern is consistent enough to suggest a deliberate stylistic choice but it reads as Spanish punctuation carried over (or as MDX that originally had em-dashes lost during a sanitization pass). On an English-only site selling to bilingual buyers, this slightly undermines the impression of native English copy.
- Recommendation: Run a single pass replacing the "Heading, supporting clause" pattern with "Heading: supporting clause" or "Heading — supporting clause". Pick one and apply consistently. Approximately 30–50 instances site-wide. Editorial decision, not a translation issue.
- Evidence: `index.tsx:264` — `<h3>Diagnostics, Know Where You Stand</h3>`; `index.tsx:280` — `<h3>Workshops, Spark Aligned Action</h3>`

### COPY-011 — IMM-P® positioning bounces between "12+12 weeks" and "domain-based, evidence-first"

- Severity: Medium
- Impact: 3
- Effort: M
- Location: `index.tsx:293` ("Install culture, process, and metrics to scale innovation reliably"), `what-we-do/index.tsx:172-176` ("IMM-P®, 12 + 12 weeks ... Discovery and Validation → Efficiency and Scale, with explicit gates and KPIs"), `services/innovation-maturity.tsx:158, 175-179, 197, 491-526` (a more sophisticated domain-based, 5-phase, tiered model with 12-week core / 24+ week rollout / multi-team options).
- Observation: The way IMM-P® is sold changes across three pages:
  - Homepage: a service pillar about "culture, process, and metrics".
  - What we do: a fixed 12+12 week sprint with two gates (Gate 1 and Gate 2).
  - Service page: a flexible operating system with 5 phases, 3 tiers, 3 delivery options, and IMM 2.2 governance.
  
  The two-gate framing (Gate 1 / Gate 2) at `what-we-do/index.tsx:175-176` directly contradicts the five-phase-each-with-its-own-gate framing on the service page (`innovation-maturity.tsx:387, 406, 425, 444, 463`). A reader who reads both pages will think the offer changed.
- Recommendation: The service page is clearly the most mature articulation. Bring the homepage and What-we-do summaries in line: replace "12+12 weeks, two gates" with "Five phases with evidence gates; most teams start with a 12-week core track." Keep a single source of truth — extract the IMM-P® one-line description into a constants file and reference it from every card.
- Evidence: `what-we-do/index.tsx:175-176` — `<li><strong>Gate 1</strong>, go or no go after Discovery</li> <li><strong>Gate 2</strong>, go or no go before MVP or Scale</li>` vs. `innovation-maturity.tsx:368` — `Five phases. Weekly masterclasses + clinics. Clear gates, owners, and decision criteria.`

### COPY-012 — `/book-clarityscan` redirect page is exposed and confusing

- Severity: Low
- Impact: 2
- Effort: S
- Location: `src/pages/book-clarityscan.tsx`
- Observation: This page auto-opens a Stripe/Outlook booking URL in a new tab and then shows the message "Booking ClarityScan®." (note the period after the registered mark — reads as a sentence fragment), followed by "We are opening the booking page in a new tab" and "Redirecting you to our Outlook booking page." The user-visible copy reveals an internal vendor name ("Outlook booking page") that the rest of the site does not — every other page abstracts this as "Book a ClarityScan® online via Stripe Checkout" or "Book a discovery call". Mixed signals: is it Stripe or Outlook?
- Recommendation: Change the title to "Booking ClarityScan®" (drop trailing period), replace "Outlook booking page" with "secure booking page" (vendor-agnostic), and align the flow language: the site sells ClarityScan® as paid-first via Stripe Checkout (per backlog C16) — this page should say "Opening Stripe Checkout in a new tab" if that's the actual destination, otherwise rename the page.
- Evidence: `book-clarityscan.tsx:31` — `<PageHeader title="Booking ClarityScan®." body={<p>We are opening the booking page in a new tab.</p>} />`; `:33` — `Redirecting you to our Outlook booking page.`

### COPY-013 — "Vigía Futura" introduced inconsistently — sometimes a product, sometimes an observatory, sometimes both

- Severity: Low
- Impact: 3
- Effort: M
- Location: `index.tsx:316` ("Future Studies / Foresight research and training"), `what-we-do/index.tsx:256` ("Foresight program with indices"), `vigia-futura/index.tsx:99-101` ("Strategic foresight observatory ... live radar, executive briefings, policy and venture labs, and training"), `about/index.tsx:248-251` ("Future studies / Foresight research and training"), `services/innovation-maturity.tsx` (not mentioned at all in IMM-P phases despite Phase 05 covering "trend sensing & foresight" at `:458`).
- Observation: Across the site, Vigía Futura is called: a service pillar named "Future Studies", a "foresight program", a "strategic foresight observatory", and a research+training capability. The homepage card uses the generic English label "Future Studies" with no mention of the brand name Vigía Futura at all — a reader has to click through to see the actual product name. The roadmap dates on the Vigía Futura page itself (`vigia-futura/index.tsx:319-321`: Q3 2025, Q4 2025, Q1 2026) are now all in the past relative to today (2026-06-01).
- Recommendation: Pick one anchor metaphor (recommend "strategic foresight observatory" — it is specific and distinctive). Use the Spanish name Vigía Futura on every surface, with a short English gloss on first appearance. Update the homepage card from "Future Studies" to "Vigía Futura, foresight observatory". Refresh the roadmap on `/vigia-futura` — Q3 2025 dates in mid-2026 look abandoned.
- Evidence: `index.tsx:316` — `<h3>Future Studies</h3>`; `vigia-futura/index.tsx:319` — `<li><strong>Q3 2025:</strong> Radar v1 launch...</li>`

### COPY-014 — "Three thematic clusters" claim on Vigía Futura is unsupported

- Severity: Low
- Impact: 2
- Effort: S
- Location: `src/pages/vigia-futura/index.tsx:338-340`
- Observation: The "At a glance" section asserts "Three thematic clusters: AI governance, climate futures, and digital trust, 2025 to 2026." with no supporting public artifact (no radar entry, no briefing, no whitepaper) linked anywhere on the page or in `/docs/research-resources/`. The radar section above it shows "No radar items yet" by default until docs tagged `radar` are published. The page therefore promises a stocked observatory it does not yet have.
- Recommendation: Soften to a forward statement until artifacts exist: "Three thematic clusters in development for 2026: AI governance, climate futures, digital trust." Once the first radar entry ships, link it from the cluster name. Similarly soften "250 plus leaders briefed" to "Target: 250+ leaders briefed by year-end" with the current count if available.
- Evidence: `vigia-futura/index.tsx:329-340`

### COPY-015 — Footer "Connect → Email" mailto label is brittle

- Severity: Low
- Impact: 1
- Effort: S
- Location: `docusaurus.config.ts:120`
- Observation: The footer link label is `'Email'` with `href: 'mailto:hello@doulab.net'`. Two issues: (1) the visible label hides the address, so a user who wants the address (to add to a contact or paste elsewhere) has to right-click. (2) the rest of the site routes conversions through `booking.doulab.net` per the Phase C12/C15 conversion-unification work; offering a bare mailto in the footer reopens an exit path the rest of the site closed.
- Recommendation: Either label it `'hello@doulab.net'` (show the address) or replace with a `'Contact us'` link to `/contact` (consistent with the rest of the conversion model). The Contact item is already listed two rows above; recommend dropping the redundant Email row and keeping a single canonical contact entry.
- Evidence: `docusaurus.config.ts:120` — `{ label: 'Email', href: 'mailto:hello@doulab.net' }`

## Quick wins (≤ 1 day) — top 5

1. Fix the two `'Book a ClarityScanr online'` strings (COPY-001). Pure typo on primary CTAs. 10 minutes plus a CI regex guard.
2. Fix the footer registered-marks line to include ClarityScan® and IMM-P® and to match what users see on every page (COPY-002). 5 minutes, but ask Luis first which mark is registered.
3. Decide MCF version and replace v2.1 → v2.2 sitewide (COPY-003). About 25 string replacements. Extract to one constant.
4. Bind the homepage hero promise to ClarityScan® in one sentence (COPY-004). One paragraph rewrite in `index.tsx`.
5. Either delete or backfill the two `ecosystems/*` stub pages (COPY-009) and refresh the Vigía Futura roadmap dates (COPY-013).

## Strategic bets (multi-week) — top 3

1. Differentiate every "Final CTA" block on the site (COPY-007) and retire the formulaic "we will meet you where you are and co-create the path forward" sentence. Pair this with the COPY-005 tagline decision: settle the brand voice between mission-grade ("We unlock global prosperity...") and operational ("Innovation, foresight, repeatable delivery") and apply consistently. This is the single biggest tone-coherence move on the site.
2. Add explicit Latin America + Caribbean positioning across hero, About, footer, and JSON-LD `areaServed` (COPY-006). This requires a positioning decision from Luis (specialist vs. global with regional roots) and then a coordinated pass across about 8 surfaces, plus all schema.org blocks.
3. Restructure the IMM-P® service page for non-specialists (COPY-008) and unify the IMM-P® summary across home / what-we-do / service page (COPY-011). This is editorial restructuring, not a rewrite — add a plain-English admonition, defer the 5-phase stack behind progressive disclosure, and pull the one-line product description into a single constant.

## Out of scope / hand-offs

- **IA & UX strategist**: The progressive-disclosure recommendation on `/services/innovation-maturity` (COPY-008) needs IA judgment on tab/details/page-split. Two ecosystem stub pages (COPY-009) need an IA decision on whether they belong in nav at all.
- **Brand & visual design**: Decision between mission tagline and operational tagline (COPY-005) is also a brand voice decision, not pure copy.
- **Conversion / lead-gen**: The `/book-clarityscan` redirect page (COPY-012) and the footer mailto (COPY-015) intersect with the canonical booking architecture (`docs/ops/booking-architecture.md`).
- **SEO**: `areaServed` JSON-LD changes for Latin America/Caribbean positioning (COPY-006) need SEO sign-off on regional schema strategy.
- **Sales & positioning**: The "specialist vs. global" question behind COPY-006 is fundamentally a sales positioning decision.
- **MCF/IMM-P domain expert**: COPY-003 (MCF version), COPY-011 (IMM-P framing), and COPY-008 (jargon load on innovation-maturity page) all need expert confirmation that the simplifications do not misrepresent the product.
- **Blog & editorial**: A periodic AI-pattern-language pass (mirrors `BL-ILG-P1-04` in the backlog) should extend from the Innovation Lab Guide to the marketing copy. Specifically the phrases "co-create the path forward", "we will meet you where you are", and the symmetric "Built on MicroCanvas® v… and IMM-P® gates." footer note are templated.
- **i18n readiness**: The comma-for-colon punctuation pattern (COPY-010) and the inconsistent Spanish-name usage of Vigía Futura (COPY-013) will both matter more when the Spanish locale lands (Phase B-P2-03 is closed for plan, not execution).
- **Behavioral economics / psychology**: The "Final CTA" repetition (COPY-007) and the implicit "anchor on price/effort" framing of ClarityScan® ("15–20 minutes", "no prep required", "two business days") could be tuned to better leverage commitment and reciprocity.

## Open questions for Luis

1. **Footer marks (COPY-002)**: Is "IMM®" a separately registered mark from "IMM-P®"? Both? Neither — is "IMM-P®" the only registered mark and the footer is wrong? Is ClarityScan® registered (it is rendered with ® site-wide; absent from footer attribution).
2. **MCF version (COPY-003)**: Is the current public framework version v2.1 or v2.2? The IMM-P® service page implies v2.2; everywhere else still says v2.1. Confirm the canonical version and whether the `/docs/research-resources/microcanvas` doc reflects it.
3. **Regional positioning (COPY-006)**: Should the public English site read as "Latin America + Caribbean specialist with international clients" or "global firm with LATAM/Caribbean roots"? This shapes hero, About, schema.org `areaServed`, and proof-strip narration.
4. **Tagline scope (COPY-005)**: Keep the mission tagline ("We unlock global prosperity...") as the public-facing tagline, or demote it to About / internal use and replace the public tagline with an operational one?
5. **Vigía Futura positioning (COPY-013)**: Is Vigía Futura a Doulab service, a Doulab-led observatory program with external partners, or both? Influences whether the homepage card should say "Future Studies", "Vigía Futura", or "Vigía Futura, foresight observatory".
6. **Booking flow naming (COPY-012)**: Is the ClarityScan® booking destination Stripe Checkout, Outlook booking, or a chain (Stripe → Outlook)? The redirect page mentions Outlook; the rest of the site mentions Stripe Checkout.
7. **Ecosystems pages (COPY-009)**: Do `/ecosystems/redlab` and `/ecosystems/red-incubadoras` still belong in the public site in 2026? If yes, what's the target publication date for the program structure / cohorts content?
