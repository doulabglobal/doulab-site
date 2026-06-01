# Sales & Positioning Audit — doulab.net — 2026-06-01

## Scope
Read-only audit of doulab.net as a prospective buyer (CIO, Chief Innovation Officer, public-sector Innovation Director, IDB/foundation program lead) evaluating Doulab against big consultancies (Deloitte, BCG DV), boutique innovation firms, and academic centers. Focus: clarity of offer, who/why, proof depth, differentiation vs. alternatives, pricing transparency, buying-step clarity, executive scannability on a 3-min skim, regional credibility (LAC), and procurement-journey support.

Scope covered: home, what-we-do, services index, clarityscan, custom-workshops, innovation-readiness-workshop, innovation-maturity, case-studies index + 4 case study pages, about, work-with-us, contact, insights, vigia-futura, book-clarityscan redirect, whitepaper/case-study components, blog inventory, innovation-lab-guide chapters list. CSS/visual styling, IA, a11y, performance, and SEO are out of scope (separate audits in this batch).

## Method
- Read each page top-to-bottom as a buyer with 3 minutes.
- Looked for: (1) what is sold in one sentence, (2) buyer/segment fit, (3) outcome promised in client language, (4) why-Doulab vs. alternatives, (5) named clients & quantified outcomes, (6) pricing or range, (7) next-step clarity, (8) procurement signals (security, regional presence, languages, legal).
- Cross-referenced backlog (`docs/ops/doulab-net-backlog.md`) to avoid duplicating already-tracked work.

## Findings (ranked)

### SALES-001 — No named pricing or even price ranges anywhere except a flat "Investment" panel with no numbers
- Severity: high
- Impact: 5
- Effort: M
- Location: `src/pages/services/innovation-readiness-workshop.tsx:432-471` (Standard/Professional/Enterprise tiers — no fees); `src/pages/work-with-us/index.tsx:75-81` ("Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope" — never a number); `src/pages/services/clarityscan.tsx` (no fee shown despite paid-first Stripe flow per backlog C16); `src/pages/services/innovation-maturity.tsx` (no investment band)
- Observation: A CIO comparing Doulab to a BCG-DV pilot quote or a boutique fixed-fee offer cannot bracket the spend. Even ClarityScan®, which is paid-first via Stripe (backlog C16), never shows the actual amount before checkout. "Fixed-fee" without a number is procurement-hostile; for public-sector buyers it makes Doulab nearly impossible to slot into a budget code without a discovery call. The Readiness Workshop has three named tiers with zero price differentiation copy — they read as placeholders.
- Recommendation: Publish at minimum a price band for ClarityScan (e.g., "from US$X / fixed fee"), an order-of-magnitude band per workshop tier ("from US$X / day"), and a programmatic band for IMM-P® (e.g., "12+12 weeks, from US$X, scope-dependent"). If naming exact figures is policy-sensitive, publish "indicative ranges" + "request quote." Government buyers prefer published ranges to inform procurement; absence reads as "too expensive to publish."

### SALES-002 — "Trusted by" line names four logos but no client is quoted, named-decision-maker testimonial, or third-party validation
- Severity: high
- Impact: 5
- Effort: M
- Location: `src/pages/services/index.tsx:58-62` ("Trusted by organizations like OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones."); `src/pages/work-with-us/index.tsx:247-253` (logo strip with no quotes); all four case studies under `src/pages/case-studies/*.tsx`
- Observation: Zero quoted testimonials. Zero sponsor/exec name attribution. Zero "Luis worked with X, here is what X says." Big consultancies win on brand; boutiques win on personal credibility. Doulab has the personal-credibility play available (Luis is named author of MCF and IMM-P) but does not cash it in via client voice. For an IDB program lead, an attributable quote from an OGTIC director would change purchase probability more than any framework diagram.
- Recommendation: Get 2–4 short attributed quotes (role + organization at minimum, name preferred) and place one on each case study hero and one on the home page near the "Proof, by the numbers" strip (`src/pages/index.tsx:329-350`). Add a "selected by" line that says who recommended/contracted Doulab (e.g., "Selected by OGTIC for Cohorts 01 & 02").

### SALES-003 — Outcome KPIs are spoken in Doulab's vocabulary, not the buyer's economic vocabulary
- Severity: high
- Impact: 5
- Effort: M
- Location: `src/pages/index.tsx:329-350` ("7 innovation labs co-created", "25+ institutions per year", "2 to 4 sessions per week"); `src/pages/index.tsx:734` ("decision latency, cycle time, capability growth"); `src/pages/case-studies/afp-siembra.tsx:207-220`; `src/pages/case-studies/alpha-inversiones.tsx:200-227` (training counts, pipeline counts — no revenue, no cost, no time-to-decision delta, no adoption delta with denominators)
- Observation: A CIO does not buy "7 labs co-created." They buy "X% reduction in time-to-pilot," "US$Y cost avoided," "Z product launches reaching production." FUNDAPEC has the strongest concrete numbers (10 → 515 active members, 4,000 validated) — these belong in a homepage strip. AFP Siembra "launched Alcanza app" is stated, but no adoption number, no decision-latency before/after. Decision-latency and cycle-time are mentioned as "tracked" but never given before/after values. This is the single biggest credibility gap vs. Deloitte/BCG, who quote dollars and percentages.
- Recommendation: For each case study, demand and publish ≥1 before/after number per: decision latency, cycle time, adoption, capability score. Move FUNDAPEC's 10→515 / 4,000 to the homepage hero strip. Replace "7 labs co-created" (input metric) with an outcome metric ("X public servants trained, Y initiatives passed Gate 1, Z reached production").

### SALES-004 — Five service-pillar names + ClarityScan + IMM-P + Vigía Futura + MicroCanvas + Vigía indices = offer surface area buyers cannot hold in their head
- Severity: high
- Impact: 4
- Effort: M
- Location: `src/pages/index.tsx:256-327` (5 pillars: Diagnostics, Workshops, Programs, Coaching, Future Studies); `src/pages/services/index.tsx:65-150` (same 5); `src/pages/what-we-do/index.tsx:164-275` (3 products: IMM-P, Diagnostics, Vigía Futura + Workshops + Coaching as articles); `src/pages/about/index.tsx:177-273` (5 pillars again)
- Observation: The buyer journey is fragmented. Home shows 5 pillars; What-we-do shows 3 "Products and Programs" plus pillar articles inserted mid-grid (a code structural bug at `what-we-do/index.tsx:209-235` where workshops/coaching cards live inside the "Products" section, breaking the 3-product promise). Services index re-lists 5. Each page reframes the same offer differently. A CIO leaves uncertain whether Doulab sells "5 services," "3 programs," or "two methods (MCF + IMM-P) wrapped in delivery." Competitors win clarity battles with one diagram and one named entry product.
- Recommendation: Decide one canonical taxonomy. Recommend: "Two methods (MCF 2.1, IMM-P®) delivered through three engagement formats (Diagnostic → Workshop → Program), with one foresight practice (Vigía Futura)." Then rewrite home, what-we-do, services index, and about to repeat the same five nouns in the same order. Kill duplicate pillar narratives between `/about` and `/what-we-do` — one of them should be eliminated or made strictly biographical.

### SALES-005 — "Who is it for?" sections do not match the real LAC enterprise/public-sector ICP
- Severity: high
- Impact: 4
- Effort: S
- Location: `src/pages/what-we-do/index.tsx:140-162` ("Startups / Public institutions / Private organizations / Incubators and accelerators"); `src/pages/services/clarityscan.tsx:82-105` (same four); `src/pages/work-with-us/index.tsx:257-273` (chips: Public sector, Financial services, Education & workforce, Scale-ups & startups, Incubators & accelerators)
- Observation: The case studies are 100% LAC enterprise + government (AFP Siembra = regulated pension; Alpha Inversiones = capital markets; FUNDAPEC = education foundation; OGTIC = central government). Yet every audience tile leads with "Startups." Startups cannot afford Doulab and are not in the case book. This dilutes seriousness for the actual buyer (CIO of a regulated bank in DR, Innovation Director at a ministry, IDB program officer). Listing "Incubators and accelerators" alongside ministries blurs the brand downward.
- Recommendation: Reorder and re-weight. Lead with: "Public institutions (ministries, agencies)," "Regulated financial services (pensions, banks, insurers)," "Foundations & multilaterals (IDB, education, social impact)," then "Scale-ups." Drop incubators/accelerators from primary audience tiles or move to a separate "Ecosystem partners" line. This is a 30-minute copy change with very high ICP-fit signal.

### SALES-006 — Latin America / Caribbean credibility is asserted by case study geography only, never claimed in positioning
- Severity: medium
- Impact: 4
- Effort: S
- Location: Home `src/pages/index.tsx:655-660` ("Innovation, Foresight and Repeatable Delivery, Doulab"); about `src/pages/about/index.tsx:88-99` (no region claim); `src/pages/services/innovation-readiness-workshop.tsx:465-469` mentions "corporate financial institutions in Latin America" but only on one buried page; Schema markup at `src/pages/services/clarityscan.tsx:35` says `areaServed: ['Global']`
- Observation: The cases are Dominican Republic-heavy. The Innovation Lab Guide and Vigía Futura content reinforce LAC. But the homepage, about, services, and JSON-LD all say "Global." A foreign buyer reading the home page cannot tell Doulab is the regional specialist for LAC public sector. An IDB officer or LAC ministry expects regional fluency — they will not infer it from a DR alumni platform case study alone. Meanwhile the workshop page says Doulab is "based in Zürich" (line 478), which is true but creates a Zürich-LAC dissonance unaddressed elsewhere.
- Recommendation: Add a clear regional positioning line in the hero/sub-hero: "Based in Zürich, deeply embedded in Latin America and the Caribbean public sector and regulated finance." Update JSON-LD `areaServed` to `['LATAM','Caribbean','Europe']`. Add a one-line "Languages: English, Spanish" badge near contact and hero. Spanish-language case study versions or summaries (linked from header) would unlock IDB and ministry buyers in a way no copy can.

### SALES-007 — No competitive differentiation copy: "Why Doulab vs. Deloitte / BCG-DV / a local boutique / an academic center"
- Severity: medium
- Impact: 4
- Effort: M
- Location: Absent across the site. Closest proxies: `src/pages/about/index.tsx:159-174` (origin story), `src/pages/index.tsx:625-653` (Principles: Modularity/Foresight/Evidence/Co-Creation — generic)
- Observation: The site never argues why a buyer should pick Doulab over the alternatives the buyer is actively comparing. A CIO comparing a Deloitte fixed-bid will ask "why not them?" The site implicitly answers via "privacy first, no ad pixels" and "evidence packs," but never names the alternative. Boutiques win this argument explicitly ("unlike big consultancies, we install capability instead of leaving slide decks"). Doulab has the substance to make this argument — MCF/IMM-P are proprietary IP, Luis is the named author, the delivery is gate-based and transferable — but the site does not articulate it.
- Recommendation: Add a "Why Doulab" section (home + about) with a short comparison framing: "Big-firm methodology with a small-team partner; we leave installed capability and named owners, not slide decks; our diagnostic baselines are open-source (MCF 2.1) so you can audit our work; pricing is fixed-fee and procurement-friendly." Three to five anti-positioning statements outperform abstract principles for late-stage buyers.

### SALES-008 — Buying-journey CTAs are dominated by ClarityScan® at the cost of an enterprise/government entry path
- Severity: medium
- Impact: 4
- Effort: S
- Location: Every page primary CTA is "Start with ClarityScan®" + "Book a discovery call" / "Book a ClarityScan online." See `src/pages/index.tsx:710-738`, `src/pages/what-we-do/index.tsx:112-122`, `src/pages/about/index.tsx:130-140`, `src/pages/case-studies/index.tsx:80-88`, `src/pages/contact/index.tsx:79-90`. Briefing CTA is buried at `src/pages/contact/index.tsx:124-142` and inside case-study briefing cards e.g. `afp-siembra.tsx:290-298`.
- Observation: ClarityScan is a paid, fixed-fee, 15-20 min self-serve diagnostic. That is fine for a startup or curious manager. It is wrong for an enterprise CIO or a ministry secretary who buys via RFP and would never put a US$X charge on a corporate card to "try the vendor." Their entry product is a private briefing or RFI response. The "Request a briefing" route via `booking.doulab.net/briefing` exists (good — backlog C13) but is consistently demoted to secondary or hidden inside a tertiary card.
- Recommendation: Differentiate CTAs by audience. On enterprise/public-sector-skewed pages (case studies, what-we-do, about), make "Request a private briefing" the primary CTA and ClarityScan secondary. On insights/blog/MCF-curious pages, keep ClarityScan primary. Add a "Procurement and RFP" entry point (one card) on `/work-with-us` for government buyers — naming UNGM, IDB, or local procurement codes if applicable.

### SALES-009 — Case studies present "what we did" comprehensively but bury the buyer-relevant snapshot
- Severity: medium
- Impact: 3
- Effort: S
- Location: `src/pages/case-studies/afp-siembra.tsx:129-138` ("At a glance" — 4 lines, generic); same pattern at `alpha-inversiones.tsx`, `fundapec.tsx`, `ogtic-redlab.tsx`
- Observation: "At a glance" is good practice but the four bullets are abstract ("Evidence first, gates and cadence"). A 3-minute skimmer needs: sponsor role, engagement length, fee band, headline number, transferable lesson. The actual numbers (10→515 active members in FUNDAPEC, 30 employees trained in Alpha, 300+ FutureScapes participants for AFP Siembra) are buried in mid-page paragraphs. The "Recommended path" card (`afp-siembra.tsx:299-302`) is generic ("Discovery → ClarityScan → Gate 1 pilot") — same on every case study; provides zero differentiation.
- Recommendation: Replace generic "At a glance" with a "Snapshot" block: Client (with role of sponsor if cited), Sector, Duration (e.g., 2.5 years), Headline outcome (single number), Method (MCF/IMM-P), Engagement type (program/lab build/relaunch). Move FUNDAPEC's 10→515 / 4,000 numbers and AFP Siembra's "300+ Summit participants / Nov 2024 launch" up to the snapshot. Drop or personalize the "Recommended path" card per case.

### SALES-010 — Founder/team thinness invisible: the buyer cannot see who delivers the work
- Severity: medium
- Impact: 3
- Effort: S
- Location: `src/pages/about/team.md` exists (per directory listing) but is not linked from the About hero; `src/pages/services/innovation-readiness-workshop.tsx:486-490` reveals Luis is the sole named facilitator; `src/pages/about/index.tsx` never names Luis except in author meta
- Observation: A CIO evaluating a boutique wants to know: who is the principal, what is their background, what is the bench depth, who actually shows up to the engagement. Doulab plays a partner-led delivery model (a strength vs. juniors-from-Deloitte) but the About page does not name Luis Santiago Arias or show his credentials prominently. This is a missed credibility lever. Conversely it leaves the buyer unsure if there is a team or just one person — both have risk implications that should be addressed proactively.
- Recommendation: Add a named-principal block on /about with Luis's role, prior experience, MCF/IMM-P authorship, publications. If the delivery is one principal + associates, say so honestly ("Partner-led delivery, supported by a network of specialists"). If there is a team, list 3-5 with roles. Hidden teams lose enterprise deals to bigger firms by default.

### SALES-011 — Vigía Futura sits in IA as a peer practice but reads like a parallel product line with no commercial path
- Severity: medium
- Impact: 3
- Effort: M
- Location: `src/pages/vigia-futura/index.tsx:96-111`; nav-level peer to /what-we-do; case studies do not mention foresight engagements
- Observation: Vigía Futura is presented as "Strategic Foresight Observatory" with subsections Radar/Briefings/Labs/Training/Roadmap and a "Book a briefing" CTA. None of the four case studies appears to have been a foresight engagement. The page reads like a research-program landing, not a billable service. A buyer cannot tell if Vigía is (a) a paid practice, (b) Doulab's thought-leadership, or (c) a public-sector R&D vehicle. Procurement teams cannot buy something they cannot classify.
- Recommendation: Clarify whether Vigía Futura is a paid offer, a free thought-leadership stream, or a co-funded program. If paid: add a service tier card, a fee band, and a foresight case study (even a vignette). If thought-leadership: move under /insights and decouple the booking CTA. Today it occupies primary nav real estate without a clear commercial role.

### SALES-012 — Branded-term density (MCF®, IMM-P®, ClarityScan®, Vigía Futura, MicroCanvas®, MCF 2.1, MCF v2.2, IMM 2.2) overwhelms the buyer and contains internal inconsistency
- Severity: medium
- Impact: 3
- Effort: S
- Location: `src/pages/services/innovation-maturity.tsx:36` ("MCF v2.2 ... IMM 2.2"); `src/pages/index.tsx:489` ("MicroCanvas Framework v2.1"); `src/pages/what-we-do/index.tsx:107` ("MicroCanvas® 2.1"); `src/pages/services/clarityscan.tsx:78` ("MicroCanvas® v2.1"); "MCF 2.1" appears in case studies
- Observation: At least 7 acronyms before the buyer sees a benefit. Version numbers disagree across pages (2.1 vs 2.2). For a CIO, this signals product-fetish over outcome-focus. Registered marks are good for IP defense, weak for sales. Naming inconsistency suggests the underlying framework is in flux — which is what buyers fear most when picking a small firm.
- Recommendation: Settle on one version per artifact (MCF 2.1 OR 2.2 — pick) and run a global replace. Cap the home page at two branded terms (ClarityScan and IMM-P). Move MCF, Vigía, MicroCanvas explanations behind a "How we work" / "Our methods" link. Lead pages with what the buyer gets ("a 30/60/90 plan", "a maturity baseline", "a launched product"), not the method name.

### SALES-013 — No procurement-friendly artifacts: no capability statement, no DUNS/UEI, no security/data-handling brief, no engagement contract sample
- Severity: medium
- Impact: 3
- Effort: M
- Location: `src/pages/contact/index.tsx:144-157` (privacy card only); no `/capability-statement`, `/security`, `/legal-engagement` route
- Observation: Government and IDB-funded buyers require capability statements, NAICS/UNSPSC codes (or LAC equivalents), tax IDs, data handling commitments (LGPD, GDPR), and standard engagement terms. Doulab's privacy posture is strong ("no ad pixels, Cloudflare Web Analytics only") but that is not procurement language. There is no downloadable one-pager for an RFP attachment. This forces every government deal to start with a clarification email instead of a qualifier click.
- Recommendation: Publish a "For procurement" page or PDF with: legal entity name, jurisdictions, registered marks, capability statement (1 page), data-handling summary referencing GDPR/LGPD, sample MSA/SoW language, registered vendor IDs where applicable, references contacts. Link it from /contact and /work-with-us. This unblocks ministry and multilateral deals.

### SALES-014 — Thought-leadership volume is thin: 4 blog posts and a single guide
- Severity: low
- Impact: 3
- Effort: L
- Location: `blog/` directory (4 posts: 2025-08-30, 2025-09-12, 2025-09-22, 2026-01-19); `docs/research-resources/innovation-lab-guide/` (11 chapters — strong); whitepaper inventory served via tag (no fixed count visible)
- Observation: One excellent long-form artifact (the Innovation Lab Guide, 11 chapters with diagrams and case material) is a serious authority signal. But four blog posts over 17 months is low cadence for a thought-leadership-driven boutique. Academic centers publish more; consultancies publish quarterly insights. A buyer comparing Doulab to a regional academic foresight unit will find the academic unit's publication record richer.
- Recommendation: Either commit to a monthly cadence (one strong post + one signal note) or relabel /blog as /field-notes and lower frequency expectations. Chapterize and excerpt the Innovation Lab Guide into 6-8 standalone posts to amortize the asset. Co-publish with a named client (FUNDAPEC alumni platform retrospective; OGTIC RedLab cohort lessons) — these double as proof and content.

### SALES-015 — Conversion endpoint sprawl: same page often offers 3 different next steps with similar weight
- Severity: low
- Impact: 2
- Effort: S
- Location: `src/pages/index.tsx:710-738` (hero CTAs + problem-section CTAs + final CTA, each with 2 buttons); case studies typically have 4 CTA opportunities (hero, related-services card, briefing card, final CTA) — see `afp-siembra.tsx:117-128, 289-311, 316-329`
- Observation: A focused buyer journey would have one primary action per page and one alternative. Today many pages have ≥4. Combined with SALES-004 (offer sprawl), this fragments the funnel and dilutes data on what actually drives conversion. The backlog (C11–C16) has done the booking canonicalization but did not consolidate visual hierarchy of CTAs.
- Recommendation: Per page, designate one primary CTA and one fallback in the hero and final-CTA components. Demote intermediate briefing cards to inline links unless they add a distinct path. Tracking already has `data-cta=` attributes (good); use the funnel data to kill the bottom-third of CTA variants after 60 days.

## Quick wins — top 5
1. Publish even a rough price band for ClarityScan, workshop tiers, and IMM-P. Half-day to fix copy. Unlocks procurement triage. (SALES-001)
2. Reorder "Who is it for?" tiles across home, what-we-do, services/clarityscan to lead with regulated finance, public institutions, foundations/multilaterals. Demote startups and accelerators. (SALES-005)
3. Move FUNDAPEC's 10 → 515 / 4,000 numbers and an AFP Siembra dated outcome ("Alcanza launched Nov 2024") into the home "Proof, by the numbers" strip in place of activity counts. (SALES-003)
4. Add a single regional positioning line ("Based in Zürich; deeply embedded across Latin America and the Caribbean. English and Spanish.") to the home hero and About hero; update JSON-LD `areaServed`. (SALES-006)
5. Capture and place 2-3 attributable client quotes (role + organization) — one on each case study and one on home. (SALES-002)

## Strategic bets — top 3
1. Build the enterprise/government entry path. New "/for-public-sector" and "/for-regulated-finance" landing pages with sector-specific cases, procurement artifacts (capability statement PDF), and "Request a private briefing" as the dominant CTA. ClarityScan stays the curious-buyer path; briefings become the enterprise path. Unblocks ministry/IDB deals that ClarityScan cannot serve. (SALES-008, SALES-013)
2. Consolidate the offer taxonomy and rewrite home + what-we-do + services + about to one canonical taxonomy: two methods (MCF, IMM-P) × three formats (Diagnostic, Workshop, Program) + one foresight practice (Vigía Futura). Then standardize naming/versioning of branded terms. This is a 1-2 week content sprint with outsized clarity ROI. (SALES-004, SALES-011, SALES-012)
3. Open the proof loop: commission before/after numbers from existing clients for each case (decision latency, cycle time, adoption, launches reaching production), publish them with quotes, and pair each case with a 1-page PDF that a sponsor can hand to their board. This is the single highest leverage move against Deloitte/BCG-DV positioning. (SALES-003, SALES-002, SALES-009)

## Out of scope / hand-offs
- Visual design and hierarchy of CTAs across hero and final-CTA components: Brand & visual; Conversion.
- Information architecture rationalization (taxonomy collision between /what-we-do, /services, /about pillars): IA & UX.
- Copy normalization, AI-pattern language, and editorial voice across pages: Content & copy; Blog & editorial.
- Spanish-language site or section: i18n.
- SEO meta and JSON-LD `areaServed` actual change: SEO.
- Privacy/security-for-procurement page contents and legal language: Security & privacy; Code quality (route + page scaffold).
- Maturity scoring against MCF/IMM-P public claims: MCF/IMM-P.
- Behavioral economics framing of pricing-anchor presentation: Behavioral economics; Behavioral psychology.
- Mobile presentation of pricing tables and case-study snapshots: Mobile-first.
- Analytics: build conversion funnel for new "briefing-led" path and old "ClarityScan-led" path; instrument named-client quote impressions: Analytics.

## Open questions for Luis
1. What is the actual list price of ClarityScan® (Stripe Checkout), and is it the same for public sector vs. enterprise? Can it be published as a "from" price?
2. Workshop tiers (Standard/Professional/Enterprise) — what are the indicative price bands or day-rates? Can at least one anchor be public?
3. IMM-P® 12+12 typical engagement value (USD range), and is it the same for an enterprise team vs. a multi-institution public-sector cohort?
4. Are client references for attributable quotes obtainable from AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC? If not, why not — and what is the next-best validator (executive LinkedIn endorsements, recorded talk excerpt)?
5. Is the practice partner-led-by-Luis or partner-plus-team? If team, who, and can they be named on /about?
6. Is Vigía Futura a paid offer, a research program, or a thought-leadership stream — and is it expected to win commercial mandates in 2026?
7. Is there an existing capability statement / RFI response template you reuse for IDB and ministries, and can it be linked publicly (lightly redacted)?
8. Decide canonical MCF/IMM version numbers — 2.1 or 2.2 — and which page is the source of truth.
9. Is Doulab actively pursuing IDB / World Bank / EU-LAC procurement codes? If yes, expose them; if no, is this a 2026 strategic move?

---

### Verdict: what a buyer would conclude in 60 seconds
A serious, regionally credible boutique with proprietary IP (MCF, IMM-P) and four real LAC enterprise/government deliveries. The buyer leaves with three concerns: (1) cannot tell what it costs, so cannot bracket the deal; (2) cannot tell who delivers it — one founder or a team — and there are no client quotes to anchor trust; (3) cannot tell why pick Doulab over a Deloitte fixed-bid or a regional academic foresight unit, because the differentiation is implicit, not argued. A CIO or ministry director who is "qualifying out" rather than "qualifying in" — i.e., the common procurement default — will move on for any of these three reasons before reaching the discovery-call CTA.
