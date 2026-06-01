# Behavioral Psychology Audit — doulab.net — 2026-06-01

## Scope
Read-only audit of the live `doulab-site` source through a cognitive psychology and persuasion-ethics lens. In scope: the top-of-funnel pages a senior B2B decision-maker is most likely to encounter (home, About, What we do, Services > ClarityScan, Work with us, Contact, Case studies index + AFP Siembra exemplar, book-clarityscan redirect), shared persuasion components (`Hero`, `FinalCta`), case-study data model (`caseStudiesData.tsx`), and a representative long-form blog post (`2025-09-12-clarityscan-decision-latency.md`). The Innovation Lab Guide was sampled at the index level only; chapter copy not reviewed in this pass.

The buyer is a senior decision-maker (CxO, DG, board sponsor) in finance, public sector, education, or scale-ups. Brand promise is rigor, trust, expertise. Dark-pattern or manipulative copy would be catastrophic, so the standard applied here is ethics-first: even mildly coercive devices (fake scarcity, manufactured urgency, anchored fear, identifiable-victim manipulation, social-proof inflation) are flagged at P0 regardless of conversion upside.

## Method
Each page was read top-to-bottom and scored against a checklist of persuasion-psychology constructs:

- Cialdini's six (reciprocity, commitment/consistency, social proof, authority, liking, scarcity), plus unity.
- Dual-process theory (System 1 vs System 2): does the page invite deliberation appropriate to a high-consideration B2B purchase, or does it short-circuit it?
- Cognitive load (intrinsic, extraneous, germane) and Hick's law on the CTA surface.
- Schema theory and fluency effect: does jargon (IMM-P, MCF, ClarityScan) build or block a working mental model?
- Trust formation: ability + benevolence + integrity cues, signal calibration, source citation.
- Primacy/recency, anchoring, framing.
- Narrative transportation (cases, blog), identifiable-victim effect.
- Mere exposure / repetition (how often each CTA recurs, and whether repetition crosses into pressure).
- Halo effect from logos, trademarks, "®" sigils.
- Loss aversion and fear appeals (the home "Problem" reel).

Findings are ranked by combined ethics-risk and business-impact. Each is tagged with the relevant concept(s) and the file:line evidence. The bar for a P0 risk tag is: "if a senior buyer noticed this and named it, would the brand promise of rigor be damaged?"

## Findings (ranked)

### BP-001 — "Get your baseline in 15 to 20 minutes" repeated as a near-universal CTA microcopy creates fluency-as-truth illusion
- Severity: high. Impact 4/5. Effort S.
- Concepts: fluency effect, mere exposure, anchoring, processing-fluency-as-truth.
- Location: `src/pages/index.tsx:235`, `src/pages/index.tsx:717`, `src/pages/index.tsx:737`; same string echoed via `Hero` and `FinalCta` on home, About (`about/index.tsx:137`), What we do (`what-we-do/index.tsx:119,339`), ClarityScan (`services/clarityscan.tsx:78`), Case studies (`case-studies/index.tsx:87,162`), Work with us (`work-with-us/index.tsx:99`), AFP Siembra (`case-studies/afp-siembra.tsx:124,320`).
- Observation: The "15 to 20 minutes" figure appears at least eight times across the funnel, including the home hero, the home problem section, and the home final CTA on a single scroll. The blog post for ClarityScan instead states "30 to 45 minutes" (`blog/2025-09-12-clarityscan-decision-latency.md:22,30,32,106,108`). Two effects: (a) repetition without variation builds processing fluency that the buyer reads as truth and underweights deliberation appropriate to a 12+12 week program purchase; (b) the home claim contradicts the canonical blog spec, which is an integrity risk if a sharp buyer notices.
- Recommendation: Reconcile the time claim (likely 30-45 is the honest one and 15-20 is a sales-optimized compression). Then reduce the repetition density: state the time once per page, in the section where the buyer is actually evaluating ClarityScan. Replace the other instances with substance-bearing microcopy (what they will receive, who owns the follow-up).
- Evidence: see file:line list above.

### BP-002 — P0 ETHICS: The home "Problem" reel pairs fear frames with citations of uneven credibility
- Severity: high. Impact 5/5. Effort M. P0 ethics risk.
- Concepts: loss aversion, availability heuristic, authority transfer, fear appeal, source calibration.
- Location: `src/pages/index.tsx:80-161` (Problem array).
- Observation: Eight "cause -> effect -> metric -> source" cards lead the page after the hero. They use icons like `AlertTriangle`, `AlertOctagon`, `Frown`, `EyeOff` and language like "engagement stays low", "OKRs drift", "timelines slip". This is a textbook negative-framing primacy block. It is acceptable for a consulting brand — but the source credibility is mixed: Gallup (`:88`), Forbes opinion column from 2013 (`:98`), HBS Online blog (`:107`), McKinsey insight page (`:117`), Intercom marketing blog (`:126`), Atlassian agile marketing page (`:135`), Accenture report (`:145`), WEF stories page (`:155`). Some metrics are quantified ("about 20 to 23 percent", "around 70%"), others are qualitative platitudes presented as if they were the cited statistic ("Data-driven organizations are more likely to improve decisions", "Hidden costs surface as throughput and quality degrade", "Foresight improves resilience"). The latter risks reads-as-statistic-but-isn't, which a CIO or DG who clicks the link will catch.
- Recommendation: (1) Audit each metric line to either be a real, quote-able statistic with year and figure, or to be clearly framed as a qualitative pattern ("In our experience…", "Pattern observed across cohorts…"). (2) Demote 2013 Forbes and the vendor-blog citations (Intercom, Atlassian) in favor of OECD/McKinsey Global Institute/Gallup primary sources also used in the blog. (3) Consider balancing the fear frame with a one-line "What good looks like" per card so the buyer is not left in pure-deficit framing — System 2 buyers actively resist single-sided framing.
- Evidence: `src/pages/index.tsx:80-161`.

### BP-003 — P0 ETHICS: ClarityScan time-claim drift between site (15-20 min) and blog (30-45 min) is an integrity risk
- Severity: high. Impact 5/5. Effort S. P0 ethics risk.
- Concepts: integrity, expectancy violation, trust formation.
- Location: site CTAs (see BP-001) vs `blog/2025-09-12-clarityscan-decision-latency.md:22,30,32,106,108,116`; service page describes "15 to 20 minutes" `src/pages/services/clarityscan.tsx:65,137` while the blog (linked from the same page) says "30 to 45 minutes".
- Observation: A buyer who reads both surfaces (the CMO-style buyer absolutely will) sees the time halve. This reads as either bait-and-switch or careless. For a brand whose pitch is "decision latency", expectancy violation on a time-promise is the single worst calibration mistake on the site.
- Recommendation: Decide the truth and unify. If actual delivery is 30-45 minutes including a 5-10 minute setup, then site copy should say "30 to 45 minutes" and the booking page should reserve that time. If a true short-form variant exists, name it differently (e.g., "ClarityScan® Express, 15 minutes") and price it separately.
- Evidence: above.

### BP-004 — CTA-stack pressure: home page presents 6+ identical or near-identical CTAs in a single scroll, undermining the deliberation the buyer needs
- Severity: medium. Impact 4/5. Effort M.
- Concepts: Hick's law, choice overload, attention residue, repetition-as-pressure, System 2 protection.
- Location: `src/pages/index.tsx:236-250` (Problem section CTAs), `:266-274` (Services first card CTA), `:715-718` (Hero CTAs), `:730-738` (FinalCta). Same pattern on every leaf page: Hero CTA + section CTAs + FinalCta. Example, About has hero CTA pair `about/index.tsx:130-137`, then five pillar cards each with internal CTA `:186-261`, then FinalCta `:276-287`.
- Observation: The CTAs are mostly variations of "Start with ClarityScan / Book a ClarityScan online / Book a discovery call". For a senior buyer running System 2 evaluation, the repetition reads as funnel pressure ("they really want me to click"), which signals low confidence in the asset. By contrast, McKinsey, BCG, and IDEO sites typically expose 1-2 hard CTAs per page and let the content do the work.
- Recommendation: Apply a one-primary, one-secondary rule per *page* (not per section). Convert in-section CTAs to neutral "Learn more" links that do not use the `buttonPrimary` style. Reserve the strong CTA for hero and final block. Measure: home should have 2 hard CTAs, not 6+.
- Evidence: above.

### BP-005 — Authority signals lean on trademark sigils and acronyms (MCF, IMM-P, ClarityScan, all ®) without first establishing the buyer schema
- Severity: medium. Impact 3/5. Effort M.
- Concepts: schema theory, fluency, halo effect, jargon-as-authority anti-pattern.
- Location: Hero subtitles and `ctaNote="Built on MicroCanvas® v2.1 and IMM-P® gates."` is repeated on `about/index.tsx:137`, `what-we-do/index.tsx:119`, `services/clarityscan.tsx:78`, `case-studies/index.tsx:87`, `case-studies/afp-siembra.tsx:124`, `work-with-us/index.tsx:99`. Home hero says "Innovation architecture, foresight, and coaching to shape tomorrow" then drops MCF/IMM-P on the buyer at `index.tsx:293-294` and many cards.
- Observation: ® is used as authority shorthand. For a first-time visitor, "MCF 2.1" and "IMM-P®" carry zero schema, so the marks read as in-group signaling rather than substance. This is the opposite of how trust is built for senior buyers — they expect plain-language framing first, then methodology naming once value is anchored. The repeated `ctaNote` is also pure mere-exposure with no informational content.
- Recommendation: Push the first MCF / IMM-P mention down the page until after value is anchored. Replace the universal `ctaNote` string with a benefit-bearing line ("You leave with a one-page maturity snapshot and a 30/60/90 plan"). Keep the ® on first mention per page, drop on subsequent.
- Evidence: above.

### BP-006 — "Proof, by the numbers" presents soft, ambiguous metrics that a senior buyer will discount
- Severity: medium. Impact 3/5. Effort S.
- Concepts: source calibration, vanity-metric detection, trust formation.
- Location: `src/pages/index.tsx:329-349` and duplicated in `what-we-do/index.tsx:278-296`.
- Observation: The three KPIs are "7 innovation labs co-created", "25+ institutions per year supported", "2 to 4 sessions per week for 12 months". The first is concrete and verifiable; the second is a capacity claim, not a delivered-outcome claim, but is framed as proof; the third is an activity metric, not an outcome metric — exactly what the blog post warns clients against ("dashboards track vanity metrics over learning or ROI", home `:142-143`). This is a self-contradiction the page does not acknowledge.
- Recommendation: Replace #2 and #3 with outcome metrics from the case studies (decision latency delta, cycle-time delta, launch-date delta, number of evidence packs, number of gate decisions made). If those numbers cannot be cited, narrow the strip to one strong KPI plus a qualitative outcome line.
- Evidence: above.

### BP-007 — Case study narrative is strong on context and process, weak on identifiable-victim/outcome anchor — narrative transportation is incomplete
- Severity: medium. Impact 4/5. Effort M.
- Concepts: narrative transportation, identifiable-victim effect, before/after framing, outcome specificity.
- Location: `src/pages/case-studies/afp-siembra.tsx:130-220`, esp. Outcomes block `:207-220`, vs. the blog vignettes which model the gold standard `blog/2025-09-12-clarityscan-decision-latency.md:180-200`.
- Observation: The AFP Siembra outcomes section lists "Launched the Alcanza digital savings app", "Installed SILAB governance", "Captured decisions as evidence packs". No client voice, no named champion, no before/after numbers, no quote. The blog post for ClarityScan demonstrates the right pattern (named scenario, named owner, specific signal, specific delta "24 to 9 days"). The case studies index excerpt strings in `caseStudiesData.tsx:25,36,47,58` are also free of numbers. For B2B senior buyers, an identifiable named sponsor with one specific delta is worth more than five generic bullets.
- Recommendation: For each case study, add (a) a one-line client quote with name/title (with consent), (b) one quantified before/after pair, (c) one explicit risk that was avoided. The 12-month "2.5 years" wording in `work-with-us/index.tsx:228` is the closest existing example — but it lives outside the case page itself.
- Evidence: above.

### BP-008 — The "Privacy and security" card on Contact uses privacy as a social-proof / trust device, but mixes it with conversion CTAs in a way that feels engineered
- Severity: low-medium. Impact 2/5. Effort S.
- Concepts: trust formation, integrity signal, signal contamination.
- Location: `src/pages/contact/index.tsx:144-157`; hero body `:74` "Privacy-first. No external forms or ad pixels."
- Observation: The privacy stance is genuine (Cloudflare Web Analytics only, no Google tags). But surfacing it as a card *alongside* two booking CTAs reframes integrity as conversion-aid. A buyer's System 2 will notice the rhetorical move ("they are using their ethics to sell me"). Cleaner is to make privacy a passive footer/legal signal and let the CTAs stand on substance.
- Recommendation: Move the privacy card to a sidebar/aside, or to a small reassurance bar under the form. Don't grid it equal-weight with the booking CTAs.
- Evidence: above.

### BP-009 — `book-clarityscan.tsx` auto-opens a new tab on mount; this is a mild dark-pattern (action without consent)
- Severity: medium. Impact 3/5. Effort S. Borderline P0 ethics.
- Concepts: consent, perceived agency, expectancy violation.
- Location: `src/pages/book-clarityscan.tsx:10-19`.
- Observation: The page calls `window.open(CLARITYSCAN_BOOKING_URL, '_blank', 'noopener,noreferrer')` inside `useEffect` on first render. Pop-up blockers may intercept (good), but in browsers that allow it, the user sees a new tab appear without an explicit click. For most users this is benign; for the privacy-sensitive buyer Doulab targets, it is the kind of small surprise that erodes trust. The page does have a manual link as fallback. Note: this is a soft signal — modern UX increasingly treats programmatic `window.open` outside a user gesture as auto-popup.
- Recommendation: Remove the auto-open and rely on the visible, accessible `buttonPrimary` link below the page header. The page header line "We are opening the booking page in a new tab" can become "Open booking in a new tab" with the button immediately below.
- Evidence: above.

### BP-010 — Repeated identical headline "Ready to make innovation repeatable?" across pages creates anti-fluency at the recency position
- Severity: low. Impact 2/5. Effort S.
- Concepts: recency, mere exposure (negative), uniqueness signaling.
- Location: `src/pages/index.tsx:733`, `about/index.tsx:279`, `what-we-do/index.tsx:326`, `case-studies/index.tsx:153`.
- Observation: The final-CTA headline is the literal-same sentence on at least four top pages. A user who navigates two of them sees the brand voice as templated. For a consulting brand selling rigor, this reads as boilerplate.
- Recommendation: Vary the final-CTA headline per page to match the page's promise (About: "Want to see if we are the right fit?", What we do: "Want this installed in your organization?", Case studies: "Want a case study of your own next quarter?", Home: keep as-is or strengthen with a verb).
- Evidence: above.

### BP-011 — Loaded service-pillar microcopy ("Innovation Lab Guide", "scale innovation reliably with clear gates and measurable ROI") makes promissory claims the page cannot prove inline
- Severity: medium. Impact 3/5. Effort M.
- Concepts: promissory framing, expectancy, evidence-claim mismatch.
- Location: `src/pages/index.tsx:292-296`, `about/index.tsx:216-218` (Programs card).
- Observation: "measurable ROI" is asserted, but no ROI metric appears in the proof strip on the same page (see BP-006). For a senior buyer running an ROI-discounting heuristic, claiming ROI without showing it lowers trust. The blog post (`:253-256`) does model an ROI example ("frees ~560 decision-days/quarter") — that's the standard the homepage should hit.
- Recommendation: Either soften the claim ("track ROI signals", "build the case for ROI") or back it with one concrete number visible on the same page.
- Evidence: above.

### BP-012 — Repeated trademark and brand-marking density (®, ™, italics) approaches in-group/cult-of-method tone
- Severity: low. Impact 2/5. Effort S.
- Concepts: in-group signaling, fluency cost, perceived defensiveness.
- Location: across all pages, especially `services/clarityscan.tsx:63,71,160,164,169` and `about/index.tsx:166-169`.
- Observation: Within one paragraph of the About page (`:166-169`), three ® marks appear: MicroCanvas® Framework, MCF 2.1, IMM-P®. This is normal for legal hygiene but heavy in body copy. Heavy ® in marketing copy is associated by senior B2B readers with smaller / defensive brands.
- Recommendation: Apply once-per-page rule for ® (first mention only). Keep ® on the actual product page (ClarityScan service page).
- Evidence: above.

### BP-013 — Logo "proofStrip" on Work with us uses client logos without dated context or scope, risking implied-endorsement halo
- Severity: medium. Impact 3/5. Effort S. Borderline P0 ethics if any logo is used without consent for marketing.
- Concepts: social proof authenticity, halo effect, implied endorsement.
- Location: `src/pages/work-with-us/index.tsx:247-253`.
- Observation: Five logos appear with no caption (only alt text), no date, no scope of engagement. This is standard B2B practice, but it borders on implied endorsement. The cards above (`:222-244`) describe what Doulab did for AFP Siembra, Alpha, FUNDAPEC, OGTIC, but "Runway Innovation Hub" appears in the logo strip without any matching narrative.
- Recommendation: (1) Confirm each logo has written consent for marketing use. (2) Add a single-line scope under or alongside each logo ("Innovation lab — 2024", "Cohort programs — 2024-2025"). (3) Either add a Runway narrative or remove the logo.
- Evidence: above.

### BP-014 — Microcopy uses comma-spliced sentences ("Diagnostics, know where you stand", "Workshops, spark aligned action") that read as System 1 catchphrases not System 2 propositions
- Severity: low. Impact 2/5. Effort S.
- Concepts: dual-process design, comprehension load.
- Location: `src/pages/index.tsx:264,280,291,305,315`, About `:182-260`.
- Observation: The pattern is consistent (and probably stylistic), but the comma-fragment construction is closer to ad copy than to consultancy positioning. Senior buyers prefer plain declarative sentences ("Diagnostics. Know where you stand before you spend.") to fragment-collage style.
- Recommendation: Reformat to a sentence-pair (label + declarative) or em-dash construction. Low priority, but improves perceived rigor.
- Evidence: above.

### BP-015 — The eight-card "Problem" carousel exceeds working-memory and recency budget on home
- Severity: low-medium. Impact 3/5. Effort M.
- Concepts: working memory (Miller 7±2), cognitive load, primacy/recency.
- Location: `src/pages/index.tsx:80-161` (problems array, 8 items in a horizontal scroller).
- Observation: Eight horizontally-scrolled cards near the top of the home page is roughly 2x what a first-time visitor will retain. Combined with the negative framing (BP-002), the buyer is asked to absorb a lot of fear before any value is shown. The fix is not necessarily fewer problems but better chunking (e.g., 4 problems above the fold, 4 in an expandable second tier).
- Recommendation: Reduce to 4-5 high-credibility, high-severity items above the fold; move others into a "More patterns we see" expandable. Pair with the BP-002 source-fix.
- Evidence: above.

## Quick wins — top 5
1. BP-003: Reconcile the ClarityScan time claim (15-20 vs 30-45 minutes) across site and blog. Single edit pass, ethics-critical.
2. BP-009: Remove the auto `window.open` on `book-clarityscan.tsx` mount. One-line code change, removes a small dark-pattern.
3. BP-005 / BP-012: Strip the universally repeated `ctaNote="Built on MicroCanvas® v2.1 and IMM-P® gates."` and the ® density. Replace with one benefit-bearing line per page.
4. BP-010: Vary final-CTA headlines per page. Pure copy work.
5. BP-006: Replace the two activity KPIs in "Proof, by the numbers" with one outcome KPI lifted from the cases or blog (e.g., decision-latency delta).

## Strategic bets — top 3
1. BP-002 + BP-015 (re-architect the home "Problem" block): re-credential every metric, balance fear with "what good looks like", and chunk to 4 cards above the fold. This is the single largest trust lever on the site for senior buyers and is the highest P0 risk surface today.
2. BP-007 (case-study narrative depth): give each case study one quantified before/after, one named-with-consent client voice, and one explicit avoided risk. This is the substitute for repeated CTA pressure — let proof do the persuasion.
3. BP-004 (CTA discipline across the funnel): adopt one-primary-one-secondary per page, demote in-section buttons to neutral links. Pair with BP-010. This converts the site's voice from "marketing funnel" to "senior advisory", which is the brand promise.

## Out of scope / hand-offs
- Visual weight of CTAs, button color hierarchy, contrast on `buttonPrimary` vs `buttonSecondary`: hand off to Brand & visual.
- Card grid density, sub-nav patterns, header/footer information architecture: hand off to IA & UX.
- Copy line-edits for tone consistency beyond the persuasion findings: hand off to Content & copy.
- CTA labels, anchor-link slugs, attribution data-cta values: hand off to Conversion.
- Trademark/® placement legal review: hand off to Brand & visual + legal (outside this scope).
- Blog post statistical fact-checking (Gallup, Forrester, McKinsey numbers): hand off to Blog & editorial.
- Stripe checkout flow and post-purchase ClarityScan UX, including the 15 vs 30 reconciliation if delivery is actually 30+: hand off to Sales + MCF/IMM-P.
- Case-study consent / logo-use audit (BP-013): hand off to Sales + Security & privacy.
- Behavioral-economics framing of pricing / anchoring on services pages: hand off to Behavioral economics.
- Mobile-specific card-stack pressure (the CTA-stack issue is worse on mobile where the scroll is longer): hand off to Mobile-first.

## Open questions for Luis
1. What is the true delivered length of a ClarityScan® session — the booking-page reservation, or actual elapsed time including report-back? The honest number should win.
2. Do you have written client consent for each logo in the Work-with-us strip, and specifically for "Runway Innovation Hub"?
3. Is there a single quantified outcome per case (decision-latency delta, cycle-time delta, launch date pulled in, % cohort completion) you could publish? Even one would re-anchor the case pages.
4. Are MCF® and IMM-P® registered marks in every jurisdiction Doulab markets in, or is the ® aspirational on some? This affects how aggressively to deploy the mark in body copy.
5. Is the home "Problem" reel intended to drive Loss-aversion-driven booking, or to credentialize the diagnosis? The fix differs depending on intent.
6. Would you accept a one-page, page-by-page CTA budget (e.g., home: 2 hard CTAs, all others: 1+1)? This is the cleanest lever for the BP-004 fix.
