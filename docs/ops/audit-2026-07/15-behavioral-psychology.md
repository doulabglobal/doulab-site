---
title: "Audit 2026-07 — 15. Behavioral psychology / persuasion ethics"
status: in-progress
date: 2026-06-01
prefix: BEHP
---

# Behavioral psychology / persuasion ethics — bilingual

## Scope

Read-only persuasion-ethics audit of the live `doulab-site` source, EN at `/` and ES at `/es/*` (commit `eb1c8c8` baseline). Buyer profile: senior decision makers at banks, pension funds, regulated finance, central / federal public sector, and ministry-grade institutions (DR, LATAM, EU). The standard is ethics-first: any device that reads as manipulative to a System 2 buyer is filed at P0 because brand premium and referability are the actual conversion drivers, not click rate.

Pages traversed (EN + ES):

- `/` (home)
- `/about`
- `/services` (index, ClarityScan, ClarityScan tiers, Innovation Maturity, IMM-DT, Coaching & Mentoring, Custom Workshops, Diagnostics, Innovation Readiness Workshop)
- `/case-studies` (index + AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC Redlab)
- `/work-with-us`
- `/contact`
- `/book-clarityscan` (redirect lander)
- `/insights`
- Shared components: `Hero`, `FinalCta`, `CaseStudyCards`
- Blog `2025-09-12-clarityscan-decision-latency.md` (claim cross-check only)

Cross-check vs `audit-2026-06/15-behavioral-psychology.md`. Resolved BP- items (Problem block restructured to 4 OECD/WIPO/Gallup/McKinsey-anchored cards with a "What we measure" balance line, `book-clarityscan.tsx` auto-`window.open` removed, ClarityScan rebuilt as 3-tier with explicit exclusions) are **not** refiled. The 2026-06 items that **remain unresolved** are renumbered into the BEHP- prefix below with a note. Severity scale: P0 ethics breach → P3 cosmetic. Impact 1–5. Effort S/M/L.

## Method

Each page was read top to bottom in EN, then the ES translation was diff-read for parity and for LATAM-business-culture appropriateness. Checklist applied per page:

1. **Cialdini + unity**: reciprocity, commitment / consistency, social proof, authority, liking, scarcity, unity. Calibration: is each signal earned, or asserted?
2. **Dual-process**: does the page invite System 2 (deliberation, comparison, return visits) or push System 1 (click now)?
3. **Cognitive load and Hick's law**: how many CTAs per page, how many tiers per choice, how many simultaneous reading commitments?
4. **Decision fatigue**: tier comparison surface, hidden-cost surfacing, refund / cancellation visibility before the Stripe handoff.
5. **Dark-pattern checklist**: false scarcity, manufactured urgency, hidden costs, confirmshaming, roach motels, drip pricing, forced continuity, social-proof inflation, fake testimonials, auto-popups without user gesture.
6. **Cognitive biases leveraged**: anchoring, framing, availability, primacy / recency, fluency, halo. Each flagged where it crosses from ethical-use into nudging.
7. **Trust formation** (Mayer-Davis-Schoorman): ability, benevolence, integrity. Source citations, named champions, transparent process.
8. **Emotional vs rational appeal balance**: where loss aversion is invoked, is there a paired competence frame?
9. **Transparency at booking**: does the user know what they are committing to before clicking the primary CTA (price, time, deliverable, refund policy, what happens after click)?
10. **LATAM cultural fit (ES)**: hierarchy framing, relationship vs transaction framing, formal address (`usted` vs `tú`), institutional gravitas, time-promise honesty.

## Findings (ranked)

### BEHP-001 — P0 ETHICS: ClarityScan time-promise drift (15–20 min on every site surface vs 30–45 min in canonical blog) is unresolved from 2026-06

- Severity: **P0**. Impact 5/5. Effort S.
- Concepts: integrity (Mayer-Davis-Schoorman), expectancy violation, fluency-as-truth illusion, mere exposure.
- Locations EN: `src/pages/index.tsx:651,654,674`, `src/pages/services/clarityscan.tsx:78,177,312`, `src/pages/about/index.tsx:137,275`, `src/pages/insights/index.tsx:419,427`, `src/pages/case-studies/afp-siembra.tsx:320`, `…/alpha-inversiones.tsx:303`, `…/fundapec.tsx:346`, `…/ogtic-redlab.tsx:322`, plus the `Hero.tsx` author comment at `src/components/Hero.tsx:33`.
- Locations ES: identical pattern. `i18n/es/.../index.tsx:652,655,675` ("línea base rápida de 15 a 20 minutos", "Obtén tu línea base en 15 a 20 minutos."), `…/case-studies/afp-siembra.tsx:320`, `…/about/index.tsx`, `…/services/clarityscan.tsx` (Tier 1 = "15 a 20 minutos").
- Conflicting source: blog `2025-09-12-clarityscan-decision-latency.md:2` ("how a 30–45 minute baseline reduces decision latency"), `:22`, `:32`, `:106`, `:108`, `:116`, `:124` all assert **30–45 minutes**. The blog is the only long-form explanation of what the conversation actually contains and is linked from the service page; any analyst-grade buyer reads both surfaces.
- Observation: This is the **exact** BP-003 finding from 2026-06 and has not been fixed in either locale. The 3-tier rebuild made the conflict structurally worse: Tier 1 is now positioned as a "15–20 minute self-assessment with a same-week PDF readout" (`services/clarityscan.tsx:78,177`) and is a Stripe-paid self-serve product, while the blog still describes a conversational 30–45 minute analyst-led session ("In 30–45 minutes, we talk with founders, teams, and final decision-makers …", blog `:32`). These are not the same product. A pension fund or central-bank buyer who reads the blog first and then arrives at the booking surface will feel either downgraded ("I expected a 30–45 min conversation, I'm getting a 15–20 min self-form") or sold-to ("the 15-min number is the sales-optimized claim"). Either reading destroys the integrity signal.
- Why P0: time-promise on a product whose pitch is **"decision latency"** is the brand's single most ethics-sensitive surface. An expectancy violation on time-to-baseline is exactly the failure mode the buyer is paying to **eliminate** in their own organization.
- Recommendation: Decide the truth in one sentence. Two acceptable shapes:
  - **A — split the offering on the page**: Tier 1 Snapshot = 15–20 min self-assessment (Stripe). A separate **ClarityScan Conversation** = 30–45 min analyst session (booked, not Stripe). Then rewrite the blog headline to name the Conversation variant explicitly, and let the Snapshot copy state "self-serve, no analyst time".
  - **B — unify on 30–45**: if the blog is the canonical promise, every site surface says 30–45 min including the booking page, and the Tier 1 ladder section drops the "15 to 20" line. Update all 14+ EN + ES locations in one pass.
- Evidence: above. Worst single offender for visibility: `src/pages/services/clarityscan.tsx:78` (hero body of the product page itself).

### BEHP-002 — P0 ETHICS: `ctaNote="Get your baseline in 15 to 20 minutes."` runs 12+ times under primary CTAs without context, conditioning the buyer through fluency before they understand the offer

- Severity: **P0** (compound with BEHP-001). Impact 4/5. Effort S.
- Concepts: processing-fluency-as-truth, mere-exposure effect, ambient framing, anchoring.
- Locations EN: `src/pages/index.tsx:654,674`, `src/pages/case-studies/afp-siembra.tsx:320`, `…/alpha-inversiones.tsx:303`, `…/fundapec.tsx:346`, `…/ogtic-redlab.tsx:322`, `src/pages/insights/index.tsx:419,427`.
- Locations ES: `i18n/es/.../index.tsx:655,675`, `…/case-studies/afp-siembra.tsx:320` ("Obtén tu línea base en 15 a 20 minutos.") and its three case-study siblings.
- Observation: This is BP-001 from 2026-06, **unresolved** at the same density. The repeated, contextless "15 to 20 minutes" string is a textbook fluency-as-truth lever (the more often a claim is encountered, the truer it feels), and combined with BEHP-001 it conditions the buyer to internalize the wrong promise before they reach the explanatory copy. The recent (and good) edits — Tier 1 pricing, "CHF 150, paid via secure Stripe checkout" on About `:137`, the "20-min discovery call" reframing on Case studies index `:87` — prove the pattern can carry substance. The case study final-CTAs are the laggards.
- Why P0: same reason as BEHP-001 (integrity on the time promise), and the cumulative repetition is what makes the buyer commit it to memory.
- Recommendation: Hard rule — `ctaNote` must carry **one piece of risk-reduction information** specific to the offer. Suggested replacements:
  - Case study finals: "Pension fund, regulated, or public-sector relevance? Book a 20-min discovery call." (was: "Get your baseline in 15 to 20 minutes." — orphaned from the offer entirely).
  - Insights final: keep the CHF 150 + 20-min line that's already there.
  - Home final: align with whatever BEHP-001 resolves to (e.g., "Tier 1 Snapshot, CHF 150, paid online. Receipt and booking link by email.").
- Evidence: above.

### BEHP-003 — P1: Case study "Outcomes" sections still lack the one quantified before/after and named-with-consent quote the blog vignettes model — narrative transportation is incomplete, EN and ES

- Severity: P1. Impact 4/5. Effort M.
- Concepts: narrative transportation, identifiable-victim effect, ability signal (Mayer-Davis-Schoorman), before/after framing.
- Locations EN: `src/pages/case-studies/afp-siembra.tsx:207-220` (Outcomes block: "Launched", "Installed", "Captured" — no number, no quote), and the three siblings show the same shape.
- Locations ES: `i18n/es/.../case-studies/afp-siembra.tsx` mirrors the EN structure; same gap.
- Observation: This is BP-007 from 2026-06, **unresolved**. The What-we-measure block on the home page (`src/pages/index.tsx:182-189`) now openly promises "decision latency, cycle time, signal quality, and capability growth … No activity counts dressed up as outcomes. Named client deltas are published in each case study when consent allows." The case studies do not yet honor that promise — they list activity-shaped verbs (Launched, Installed, Captured) and an "evidence packs" mention without a specific delta. A senior buyer comparing the home promise against the case body will notice the gap. The "Proof, by the numbers" strip is gone from the current home, replaced by qualitative balance copy — good — but that **shifts** the proof burden onto the case pages, which haven't picked it up.
- Recommendation: For each of the four case studies, add (a) one quantified before/after pair (decision latency delta, cycle-time delta, launch-date delta, percent cohort completion) — even one number per case re-anchors the page; (b) one named-with-consent client voice (sponsor quote with name/title); (c) one explicit risk that was avoided. If consent for (a) and (b) is not available on every case, state the constraint plainly in a small italic line on that case ("Quantitative outcomes covered by NDA; pattern available on a briefing call.") — that itself becomes an integrity signal.
- Evidence: above.

### BEHP-004 — P1: Repeated final-CTA headline "Ready to make innovation repeatable?" reads as templated when a buyer visits two pages — boilerplate fatigue at the recency position, EN and ES

- Severity: P1. Impact 2/5. Effort S.
- Concepts: recency, uniqueness signaling, brand voice, mere exposure (negative).
- Locations EN: `src/pages/index.tsx:670` ("Ready to make innovation repeatable?"). Variants appear unchanged on `insights/index.tsx:418`. The case-study and About finals have been varied — good — to "Take the first step", "Want a quick read on where you stand?", "See yourself in any of these?", "Ready to talk?", "Ready to get a clear read?". Contact stays at "Ready to talk?".
- Locations ES: `i18n/es/.../index.tsx:671` ("¿Listo para hacer que la innovación sea repetible?") — direct translation, same surface-level fatigue.
- Observation: This is BP-010 from 2026-06, **partially resolved**. The case-study and About finals have been individualized — that work is done well. The two remaining instances are the home page and Insights. The risk is now smaller because there are only two pages with the identical line, but they are both high-traffic surfaces. The ES translation also reads slightly more cult-of-method in `tú` than the EN does, because Spanish has no idiomatic equivalent of the punchy "repeatable" — "repetible" is a Latin loan that reads as engineering jargon to a non-engineering exec.
- Recommendation: Vary the home and Insights finals. Home suggestion: "Want a clearer next move on innovation?". Insights suggestion: "Want this thinking embedded in your team?". For ES, consider replacing "repetible" with a phrase: "¿Listo para que la innovación deje de depender del héroe de turno?" or, more institutional, "¿Listo para hacer de la innovación un proceso, no un evento?".
- Evidence: above.

### BEHP-005 — P1: About page omits a Luis-Santiago authority block (named principal, bio, credentials), so the brand's authority signal is delegated entirely to the trademark marks (MCF®, IMM-P®)

- Severity: P1. Impact 4/5. Effort M.
- Concepts: authority (Cialdini), source credibility, parasocial trust, halo via trademarks (insufficient on its own).
- Locations: `src/pages/about/index.tsx` (entire file) — only mention of Luis is the `<meta name="author">` tag on `:95`. No bio, no photo, no credentials, no LinkedIn link, no list of advisory boards or academic affiliations.
- Observation: For the buyer profile (banks, pension funds, governments), the single highest-signal authority device is **the named principal with verifiable credentials**. The current About page builds the brand as an institution ("We started Doulab to answer a tough question…") but the institution is one named human. Hiding the human under a meta tag forces the authority load onto the ® sigils on MCF and IMM-P, which read as in-group signaling without anchor (also BP-005 in 2026-06). Compounding: the home meta sets `author = Luis Santiago Arias`, the contact page sets the same, but no page surfaces him to a buyer browsing without view-source. ES has the same gap.
- Recommendation: Add a "Who runs Doulab" block to About (EN and ES), one paragraph, named principal, two-line credentials, LinkedIn link, optionally one photo or initials avatar. Keep it understated — single column, short — to match the brand's restraint. This is the substitute that lets you reduce ® density elsewhere without losing authority.
- Evidence: above.

### BEHP-006 — P2: Trademark / ® density still high in body copy on About and ClarityScan, reads as defensive in-group signaling to first-time senior buyers

- Severity: P2. Impact 2/5. Effort S.
- Concepts: fluency cost, in-group signaling, perceived defensiveness.
- Locations EN: `src/pages/about/index.tsx:166-169` (three ® inside two sentences: "MicroCanvas® Framework, MCF 2.2", "Innovation Maturity Model Program, IMM-P®"), `src/pages/services/clarityscan.tsx` (ClarityScan® mentioned with ® ~12 times across the page including section heads).
- Locations ES: same pattern, slightly worse because Spanish convention generally tolerates fewer trademark sigils in marketing copy.
- Observation: This is BP-012 from 2026-06, **unresolved**. Legally a once-per-page first-mention ® is sufficient; subsequent mentions can use the bare term. The current pattern (especially the ClarityScan tier names with repeated ®) signals to a senior buyer that the brand is anxious about the mark, which is exactly the wrong tone for a brand whose promise is rigor.
- Recommendation: Apply once-per-page rule for ® on first mention only. Keep ® at H1 and at the SEO `og:title`. Drop in subsequent body and in card labels. This is purely a find-and-replace edit per file.
- Evidence: above.

### BEHP-007 — P2: Logo strip on Work with us still uses five client logos with no caption / no dated scope; "Runway Innovation Hub" still has no matching narrative on the page

- Severity: P2 (P1 if any logo lacks written consent — escalate to P0 in that case). Impact 3/5. Effort S.
- Concepts: social-proof authenticity, implied endorsement, halo without ground.
- Locations EN: `src/pages/work-with-us/index.tsx:247-253` (logos: AFP Siembra, OGTIC, Alpha, FUNDAPEC, Runway). The cards above (`:222-244`) describe AFP, Alpha, FUNDAPEC, OGTIC — Runway is referenced only by logo.
- Locations ES: ES counterpart presumably mirrors (not separately diffed for this finding).
- Observation: BP-013 from 2026-06, **unresolved**. Logo strips without dated scope are standard B2B but border on implied endorsement, and a logo without a matching narrative on the same page is the riskier subcase (the buyer asks: "what was the actual engagement?" and the page offers nothing). Public-sector and regulated-finance buyers will read the unexplained logo as either decorative or as overstatement.
- Recommendation: (1) Confirm written marketing consent for each logo. If Runway lacks it, remove. (2) Add a one-line scope under each logo: "Innovation lab, 2024", "Cohort programs, 2024–2025", "MCF / IMM-P pilot, 2023". (3) Either add a Runway narrative card alongside the other four, or drop the Runway logo.
- Evidence: above.

### BEHP-008 — P2: ClarityScan 3-tier page risks decision-fatigue collapse: three tiers, two of them scope-based, plus a Tier-1 self-serve CTA, plus a Tier 2/3 discovery CTA, plus internal anchor links to sub-pages — too many micro-choices for a hero-fold buyer

- Severity: P2. Impact 3/5. Effort M.
- Concepts: Hick's law, choice overload, decision fatigue, default-option theory.
- Locations: `src/pages/services/clarityscan.tsx:74-242` (hero + Pillars + tiers section + Tier 1 detail + how-it-works + exclusions).
- Observation: The tier rebuild is a substantive upgrade (it solves BP-006 / BP-011 on outcome honesty by adding the explicit "what Tier 1 does not include" block — excellent ethics work). The new risk is decision-fatigue: a first-time buyer landing on the ClarityScan page is asked to evaluate three tiers, decide between a Stripe button and a discovery call, and then choose between four "what every tier measures" pillars and an exclusion list. The hero `ctaNote` ("Tier 1 paid via secure Stripe checkout. Tiers 2 and 3 scoped on a 20-minute discovery call.") is doing heavy lifting because it's the only place that maps choice → action. The Pillars + Radar + Maturity ladder visuals between the hero and the tier cards add cognitive load before the choice surface.
- Recommendation: Reorder the page to: (1) Hero with one default recommendation ("Most buyers start with Tier 1 Snapshot — CHF 150, 15–20 min, self-serve. If you're a regulated-finance or public-sector institution, start with a 20-min call for Tier 2 or Tier 3.") + the two CTAs as today. (2) Tier comparison card grid next (3 cards). (3) Pillars / Radar / Ladder *after* the tier choice, framed as "what every tier scores". (4) Tier 1 detail and exclusions kept where they are. Net effect: the buyer makes the tier choice before they're asked to absorb the IMM domain model.
- Evidence: above.

### BEHP-009 — P2: The home Problem block fixes 2026-06's source-credibility issue (P0) but introduces a mild new framing risk: all four cards label LATAM as deficient ("region risks a third decade of low growth", "LATAM lost ground this year") and the buyer is LATAM

- Severity: P2. Impact 3/5. Effort S.
- Concepts: framing, identity threat, in-group / out-group dynamics, LATAM cultural fit.
- Locations EN: `src/pages/index.tsx:43-95` (four Problem cards, three of which name LATAM as the deficient party — Gallup "LAC sits higher at 31 percent, yet two thirds of the regional workforce is still not engaged", WIPO "Latin America and the Caribbean lost ground this year", OECD "the region risks a third decade of low growth").
- Locations ES: ES home mirrors EN copy; the deficit framing reads slightly harsher in `tú` Spanish because the second-person address feels personal.
- Observation: The credentialing is now strong (Gallup, McKinsey, WIPO, OECD — exactly the upgrade BP-002 recommended). The new behavioral risk is that all three regionally-tagged cards frame LATAM as the underperformer, and the dominant buyer for `/es/` is **in** LATAM. The McKinsey card escapes the pattern because it's global. For LATAM CxOs / DGs, repeated deficit framing about their own region risks triggering identity-defense (System 1 closure), the opposite of the System 2 deliberation the page wants.
- Recommendation: Rebalance two of the three LATAM cards to use neutral-frame language: lead with the global / OECD-average baseline, then state LATAM's position factually, then state Doulab's response. Example for the WIPO card: "Globally, decisions outrun the evidence: WIPO's GII 2025 finds most economies stagnating on input-to-output efficiency, including Latin America and the Caribbean." Removes the deficit primacy while keeping the citation. Apply the same rebalance to the ES copy and consider switching the ES home from `tú` to `usted` on the Problem section copy specifically (matches institutional gravitas, reduces personal-deficit reading).
- Evidence: above.

### BEHP-010 — P2: Booking-page Stripe handoff still lacks pre-click transparency on refund / cancellation policy (it lives in `/privacy-terms`, not on the ClarityScan or book-clarityscan surface)

- Severity: P2. Impact 3/5. Effort S.
- Concepts: transparency, informed consent, dark-pattern adjacent (drip pricing / pre-purchase opacity).
- Locations EN: `src/pages/services/clarityscan.tsx:371` (`ctaNote="Tier 1: receipt and booking link by email. Discovery call: 20 minutes, no prep required."`) — does not mention refund / reschedule policy. `src/pages/book-clarityscan.tsx` is now a clean redirect lander (no auto-popup, good — closes BP-009) but offers no policy summary. Policy lives at `src/pages/privacy-terms.tsx:281-284`: "Bookings may be rescheduled once with at least twenty four (24) hours' notice; … If Doulab must cancel, we will offer the next available slot or refund fees for the affected session." This is generous but invisible at the click point.
- Locations ES: same gap.
- Observation: For a CHF 150 self-serve purchase to a senior buyer, the absence of a pre-click "rescheduleable within 24h, refundable if we cancel" line is a small but real consent issue. It's not a dark pattern (the policy exists and is generous), but it reads as transparency drift: the most buyer-favorable fact about the purchase is hidden from the purchase surface.
- Recommendation: On `services/clarityscan.tsx`, on `book-clarityscan.tsx`, and inside the Tier 1 card, add a single line under the CTA: "Reschedule up to 24h before. Refund if we cancel. See [terms](/privacy-terms#booking)." Ten-second copy edit, removes the only "what am I committing to?" friction at the Stripe handoff.
- Evidence: above.

### BEHP-011 — P3: `Hero.tsx` comment carries the stale "15–20 minute" canonical example as the documented `ctaNote` use case — propagates the BEHP-001 drift via developer convention

- Severity: P3. Impact 1/5. Effort S.
- Concepts: institutional repetition, developer affordance, conventions-as-defaults.
- Locations: `src/components/Hero.tsx:33` — JSDoc says `Small note under CTAs (e.g., "Get your baseline in 15–20 minutes.")`.
- Observation: This is a documentation artifact, not a user surface, but it is the **mold** every new page copies from. As long as the example in the Hero contract says "15–20 minutes", new pages will reproduce BEHP-001 / BEHP-002 by default.
- Recommendation: After BEHP-001 is resolved, update the JSDoc example to the new canonical line (e.g., `"Tier 1 Snapshot, CHF 150. Receipt and booking link by email."`).
- Evidence: above.

### BEHP-012 — P3: Insights page (`/insights`) still echoes the home's repeated "Ready to make innovation repeatable?" final headline + repeats the "Get a baseline in 15–20 minutes" microcopy twice in the final block

- Severity: P3 (rolled up into BEHP-002 / BEHP-004). Impact 1/5. Effort S.
- Locations: `src/pages/insights/index.tsx:418-427`.
- Observation: The Insights final-CTA is the densest single concentration of the "15–20 min" claim plus the templated headline plus a CHF 150 mention plus the discovery-call line. Reads as a stacked sales-pattern at the end of an editorial section, slightly out of voice for the page.
- Recommendation: Replace the final-CTA with an editorial-voice closer ("Stay close to the work" + RSS / newsletter / discovery-call links, no CHF in the headline). Treat this as a follow-up to BEHP-002.
- Evidence: above.

## Quick wins — top 5

1. **BEHP-001 + BEHP-002**: pick truth (15–20 self-serve **or** 30–45 conversation), and either rename the products or unify the number across all 14+ EN + ES locations in one editor pass. One sitting. Closes the only standing P0 ethics finding.
2. **BEHP-010**: add a one-line refund / reschedule note under the ClarityScan and book-clarityscan CTAs (EN + ES). Ten-minute copy edit. Removes pre-Stripe opacity.
3. **BEHP-006**: apply once-per-page ® rule on About and ClarityScan (EN + ES). Pure find-and-replace.
4. **BEHP-004**: vary the home + Insights final-CTA headlines in both locales. Pure copy.
5. **BEHP-007**: confirm Runway logo consent; either add a one-line scope per logo on the proof strip, or remove unmatched logos. EN + ES.

## Strategic bets — top 3

1. **BEHP-001 architectural fix**: split ClarityScan Tier 1 (Snapshot, 15–20 min self-serve) from a named **ClarityScan Conversation** (30–45 min analyst-led, scoped). Update the blog headline, the service page hero, the booking flow, and the Stripe SKU naming. This is the only way to keep both the marketing-funnel velocity and the analyst-grade credibility for the regulated-finance and public-sector buyer. Pair with BEHP-008 (page reorder around a default tier recommendation).
2. **BEHP-003 case-study depth**: instrument each of the four case studies with one quantified before/after, one named-with-consent quote, and one explicit avoided risk. Where NDA blocks the number or quote, say so on the page in one sentence — that itself is the integrity move. Pair with the home's existing "What we measure" promise so the home and the cases stop diverging.
3. **BEHP-005 + BEHP-006 authority rebalance**: surface a "Who runs Doulab" block on the About page (Luis Santiago, named, credentialed, LinkedIn), and in exchange reduce ® density across body copy by 80 percent. Net effect: the authority signal moves from defensive marks to a credible human, which is closer to how senior B2B buyers actually calibrate trust.

## Out of scope / hand-offs

- Visual weight / contrast of `buttonPrimary` vs `buttonSecondary` on each page: **02-brand-visual**.
- IA-level CTA budget per page, navigation density: **01-ia-ux**.
- Copy line-edits beyond the persuasion findings (tone, em-dash hygiene, sentence-fragment style): **03-content-copy**.
- `data-cta` attribution scheme and CTA-label normalization across the funnel: **04-conversion**.
- Stripe checkout flow itself + post-purchase ClarityScan delivery (especially the BEHP-001 reconciliation if delivered length is actually 30+): **16-sales-positioning**, with delivery-side coordination to MCF / IMM-P owners.
- Trademark / ® legal review and consent inventory for logos (BEHP-006, BEHP-007): **08-security-privacy** + legal counsel (outside this audit).
- Statistical fact-check on blog (Gallup, OECD, WIPO, McKinsey figures cited): **11-blog-editorial**.
- Mobile CTA-stack pressure (denser scroll, longer column of repeated CTAs amplifies BEHP-002): **17-mobile-responsive**.
- ES-specific tonal register (`usted` vs `tú` per page, formal vs warm), beyond the BEHP-009 Problem-block recommendation: **12-i18n**.
- Pricing anchoring on the 3-tier ClarityScan grid (decoy / center-stage effects): **14-behavioral-economics**.

## Open questions for Luis

1. **BEHP-001 truth question**: what is the actual delivered length of the analyst-led ClarityScan engagement vs the new Tier 1 Snapshot? If they are two different products (likely), are you willing to give the longer one its own name (e.g., "ClarityScan Conversation") so the blog stops contradicting the booking page?
2. **BEHP-003 consent question**: for each of the four case studies, do you have a named-with-consent sponsor quote, or one quantified before/after metric, you can publish? Even one per case re-anchors the page. If NDA blocks it everywhere, are you comfortable saying so on the page in one sentence (e.g., "Quantitative outcomes covered by NDA; pattern available on a briefing call.")?
3. **BEHP-005 founder-surface question**: are you comfortable with a one-paragraph "Who runs Doulab" block on About with your name, two-line credentials, and a LinkedIn link? It's the single largest authority lever still untouched.
4. **BEHP-007 logo question**: do you have written marketing consent for **Runway Innovation Hub** specifically, and for each of the other four? If Runway lacks consent or a matching narrative, are you willing to drop the logo from the strip?
5. **BEHP-009 LATAM framing question**: is the home Problem block aimed at LATAM buyers (in which case the deficit framing on three of four cards risks identity-defense) or at global buyers reading LATAM as a market-opportunity proxy? The fix differs.
6. **BEHP-010 policy-surfacing question**: would you accept a one-line refund/reschedule blurb directly under the Stripe CTAs on ClarityScan and book-clarityscan? It surfaces your generous policy at the point of consent.
