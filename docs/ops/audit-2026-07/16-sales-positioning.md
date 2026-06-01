---
title: "Sales & positioning audit — doulab.net — 2026-07 (bilingual)"
role: 16-sales-positioning
auditor: sales-positioning
date: 2026-06-01
locale_scope: ["en", "es"]
status: complete
---

# Sales & positioning audit (bilingual) — 2026-07

## Scope

Read-only buyer-journey audit of doulab.net across **EN (`/`)** and **ES (`/es/*`)** surfaces, served from local prod at `http://127.0.0.1:4173`. Imagined buyer personas:

- LATAM regulated-finance CIO / Chief Innovation Officer (AFP-Siembra-shaped, Alpha-Inversiones-shaped) comparing Doulab to a Deloitte / EY fixed-bid and a local boutique.
- LATAM public-sector innovation director / ministry secretary (OGTIC-shaped) buying via RFP/committee, evaluating against academic foresight units and big-firm DT practices.
- LATAM education / social-impact foundation lead (FUNDAPEC-shaped) likely co-funded by IDB / multilateral, with procurement requirements.
- Swiss / DACH enterprise buyer landing on the EN site from a "Zürich-based" Google search.

Pages read top-to-bottom in both locales: home, what-we-do, services index + 7 service detail pages, case-studies index + 4 cases, about, work-with-us, contact, vigia-futura. Cross-checked against audit-2026-06 SALES-001..015 to record what resolved, what regressed, what remains, and what is **new in the bilingual surface**.

## Method

- Read EN and ES versions of each page in parallel; compared headlines, audience tiles, CTAs, pricing visibility, named-client claims, geographic positioning, and procurement signals.
- Verified resolution status of SALES-001..015 (audit-2026-06) against current source + live HTML.
- Looked for ES-specific gaps: LATAM buying-process tuning, regional anchoring, branded-term translation consistency (Tier vs Nivel), case-study localization beyond literal translation.
- Did **not** re-file pure copy-tone, IA, brand-visual, or i18n parity findings owned by roles 01 / 02 / 03 / 12 — only where they directly affect buying decision.

## Status of audit-2026-06 SALES findings

| ID | 2026-06 finding | Status now | Notes |
|---|---|---|---|
| SALES-001 | No pricing visible | **PARTIALLY RESOLVED** | ClarityScan T1 = CHF 150 visible everywhere (hero, JSON-LD `Offer`, About final CTA). T2/T3 still scope-only ("discovery call"); IMM-P® and Workshop tiers still have zero price anchor. See SALES-101. |
| SALES-002 | No testimonials / client quotes | **DEFERRED (E-J1)** | Per hard rule, not re-filed as primary. Trust-pyramid follow-ups in SALES-108. |
| SALES-003 | Proof KPIs in Doulab vocabulary | **NOT RESOLVED** | Home "Proof, by the numbers" still reads `7 / 25+ / 2 to 4 per week` (activity counts). FUNDAPEC 10→515 and 4,000 validated still buried in the case page. See SALES-102. |
| SALES-004 | Offer-surface sprawl (5 pillars / 3 products / etc.) | **PARTIALLY RESOLVED** | Versions normalized to MCF 2.2 / IMM 2.2 on home + IMM + about. Taxonomy collision between `/about` pillars (5) and `/services` (7 cards) still present. See SALES-103. |
| SALES-005 | ICP tiles lead with "Startups" | **NOT RESOLVED — ES regression** | EN ClarityScan still: Startups → Public → Private → Incubators. ES /es/services/clarityscan identical: Startups → Instituciones públicas → … See SALES-104. |
| SALES-006 | No LATAM regional positioning | **NOT RESOLVED** | Home and About hero/sub-hero contain **zero** mentions of Zürich, Latin America, Caribbean, or LATAM in either locale. JSON-LD `areaServed: ['Global']` unchanged on ClarityScan T1/T2/T3. See SALES-105. |
| SALES-007 | No competitive differentiation | **NOT RESOLVED** | No "Why Doulab" / "vs. big consultancies" copy anywhere in EN or ES. See SALES-106. |
| SALES-008 | ClarityScan dominates CTAs; no enterprise path | **PARTIALLY RESOLVED** | T2/T3 subpages now exist with "Book a discovery call" as primary; good. But case studies still primary-CTA "Explore ClarityScan" / "Book a ClarityScan online" — wrong primary for a CIO reading the AFP Siembra case. See SALES-107. |
| SALES-009 | "At a glance" generic, snapshot missing | **NOT RESOLVED** | FUNDAPEC "At a glance" still 4 abstract bullets (Sector / Focus / Approach / Result). No Duration, Sponsor role, Headline number. See SALES-109. |
| SALES-010 | Founder thinness invisible | **NOT RESOLVED** | About page never names Luis Santiago Arias in body copy (appears only in `<meta name="author">`). No `/about/team` link from hero. See SALES-110. |
| SALES-011 | Vigía Futura unclear commercial path | **NOT RESOLVED** | Same "Book a briefing" CTA, no service tier, no fee band, no foresight case. |
| SALES-012 | Branded-term version inconsistency (2.1 vs 2.2) | **RESOLVED** | MCF 2.2 / IMM 2.2 consistent on home, IMM, about, ClarityScan. Drop. |
| SALES-013 | No procurement artifacts | **NOT RESOLVED** | No `/capability-statement`, no procurement page, no LATAM tax/legal IDs exposed. See SALES-111. |
| SALES-014 | Thin thought-leadership cadence | OWNED BY 11-blog-editorial | Not re-filed here. |
| SALES-015 | CTA endpoint sprawl per page | OWNED BY 04-conversion | Not re-filed here. |

## New findings (bilingual)

ID prefix: `SALES-` (continuing 100-series for 2026-07).

---

### SALES-101 — Pricing transparency is a single point (CHF 150) and stops there; T2 / T3 / IMM-P® / Workshops still have no anchor

- Severity: P1
- Impact: 5
- Effort: M
- Location (EN): `src/pages/services/clarityscan/diagnostic.tsx:32-79` (T2 — no fee band), `src/pages/services/clarityscan/audit.tsx:36-85` (T3 — no fee band), `src/pages/services/innovation-maturity.tsx` (IMM-P® — no price), `src/pages/services/innovation-readiness-workshop.tsx` (3 tiers — still no fees), `src/pages/services/custom-workshops.tsx`
- Location (ES): same files under `i18n/es/docusaurus-plugin-content-pages/services/**`
- Observation: T1 pricing landing is excellent and unblocks self-qualification at the bottom of the funnel. But every step **above** T1 leaves the buyer with the same procurement-hostile silence flagged in 2026-06. A CIO who finishes the T1 page asking "what does T2 actually cost — a few CHF thousand or six figures?" gets no anchor. Worse, "Book a discovery call to scope" is the **only** path forward, which converts a 2-minute self-qualification into a 20-minute sales-call commitment. ES surface inherits the same gap; LATAM public-sector buyers are even more anchor-dependent because committee approval requires a budget bracket before scheduling a call.
- Recommendation: Publish a "from CHF X" anchor (or order-of-magnitude band, e.g. "Tier 2: typically CHF 8–25 k depending on cohort size") on each ClarityScan tier card on `/services/clarityscan` and on the tier subpages. For IMM-P®, publish a 12+12 week program band. For Workshops, publish a day-rate or per-tier band. If exact figures are policy-sensitive, publish a "starting from" with a small-print footnote — even an order-of-magnitude beats silence.

---

### SALES-102 — Home "Proof, by the numbers" strip still shows activity counts, not buyer-outcome numbers; FUNDAPEC 10→515 / 4,000 evidence remains buried

- Severity: P1
- Impact: 5
- Effort: S
- Location (EN): `src/pages/index.tsx` "Proof, by the numbers" section (3 KPI cards: `7 / 25+ / 2 to 4 per week`)
- Location (ES): `i18n/es/.../index.tsx` mirrors same KPIs translated
- Observation: The single most credible outcome number Doulab can publish without client consent — FUNDAPEC's `10 → 515 active members` and `4,000 validated members` (already public on the case page, with the Comunidad FUNDAPEC site live and linked) — is not on the home page. Instead the home asserts `7 innovation labs co-created`, `25+ institutions per year supported`, `2 to 4 sessions per week` — these are inputs Doulab spent, not outcomes the buyer received. A CIO scanning for 30 seconds infers "they are busy" not "they deliver." Identical issue on the ES home.
- Recommendation: Replace the three KPI cards with three outcome cards drawn from already-published case material:
  - `10 → 515` active alumni (FUNDAPEC, Sept 2025)
  - `4,000` validated members from a legacy 20,000-registration base (FUNDAPEC)
  - one AFP Siembra dated outcome ("Alcanza app launched Nov 2024" or training-cohort delta) — verifiable from `src/pages/case-studies/afp-siembra.tsx`
- Keep the activity counts as a microcopy footnote ("Delivery footprint: 7 labs, 25+ institutions/year, 2–4 sessions/week"). This is a half-hour copy change with disproportionate trust impact.

---

### SALES-103 — Offer taxonomy still asymmetric across `/about` (5 pillars), `/services` (7 service cards), `/what-we-do` (3 products + articles)

- Severity: P2
- Impact: 4
- Effort: M
- Location (EN): `src/pages/about/index.tsx:177-258` (5 pillars: Diagnostics / Workshops / Programs / Coaching / Future studies); `src/pages/services/index.tsx` (cards for: ClarityScan, IMM-DT, Innovation Maturity, Innovation Readiness Workshop, Custom Workshops, Coaching & Mentoring, Diagnostics — 7 distinct); `src/pages/what-we-do/index.tsx` (3 "Products and Programs" + service-pillar articles inserted mid-grid per 2026-06 note)
- Location (ES): same mismatch carried over verbatim
- Observation: A buyer reading three different pages sees three different mental models of what Doulab sells. Worse, `Innovation Readiness Workshop` vs `Custom Workshops` vs the "Workshops" pillar are three names for things that may or may not be distinct products — the site does not explain. ES translates each page literally, propagating (and arguably amplifying, given longer Spanish noun phrases) the cognitive load.
- Recommendation: Adopt one canonical 2-axis taxonomy and rewrite home / about / what-we-do / services index to repeat the same nouns in the same order. Recommended axes:
  - **Methods**: MCF 2.2 (delivery) × IMM 2.2 (measurement) × Vigía Futura (foresight)
  - **Engagement formats**: Diagnostic (ClarityScan T1/T2/T3) → Workshop (Readiness, Custom) → Program (IMM-P®, IMM-DT) → Coaching/Mentoring (retainer)
- Then collapse `/about` pillars into a single "How we deliver" paragraph referring to the canonical services list, and decide whether `/what-we-do` and `/services` are redundant — kill one or make one a 3-line index that links into the other.

---

### SALES-104 — Audience tiles on ClarityScan still lead with "Startups" in both EN and ES; ICP signal contradicts the case book

- Severity: P1
- Impact: 4
- Effort: S
- Location (EN): `src/pages/services/clarityscan.tsx` `#who` section: Startups → Public Institutions → Private organizations → Incubators & Accelerators
- Location (ES): `i18n/es/.../services/clarityscan.tsx:94-119` identical order: Startups → Instituciones públicas → Organizaciones privadas → Incubadoras y aceleradoras
- Observation: All four named clients (AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC) are regulated finance, education foundation, or government — zero startups, zero accelerators in the case book. Leading the audience tile with "Startups" trains the LATAM enterprise CIO to think "wrong vendor, not enterprise-grade" within the first card. The mismatch is identical in ES, where the LATAM regulated-finance reader is the highest-value reader.
- Recommendation: Reorder to: **Public institutions → Regulated financial services → Foundations & multilaterals → Scale-ups → Incubators & accelerators (ecosystem partners)** in both locales. Even simpler: cut "Startups" and "Incubators" from primary tiles and add them to a "We also work with" microcopy line. 30-minute copy fix.

---

### SALES-105 — Zürich + LATAM duality still unresolved; home and About heroes contain no geographic anchor; JSON-LD `areaServed: ['Global']` unchanged

- Severity: P1
- Impact: 4
- Effort: S
- Location (EN): `src/pages/index.tsx` hero, `src/pages/about/index.tsx:122-140` hero (no region), `src/pages/services/clarityscan.tsx:37` (`areaServed: ['Global']`), `src/pages/services/clarityscan/diagnostic.tsx:32`, `src/pages/services/clarityscan/audit.tsx:36`
- Location (ES): `i18n/es/.../index.tsx`, `i18n/es/.../about/index.tsx`, `i18n/es/.../services/clarityscan.tsx:37` (still `['Global']`)
- Observation: 2026-06 flagged this and asked for resolution. None has happened. The ES site is the more damaging case: a LATAM ministry director reading `/es/` sees Spanish copy with no claim of regional specialization — they cannot tell whether Doulab is "the LATAM boutique with deep Caribbean cases" or "a generic European consultancy that happens to publish in Spanish." Meanwhile a Swiss/DACH buyer reading `/` cannot find the Zürich anchor either, which loses the local-presence signal in DACH procurement.
- Recommendation:
  - Add a one-line geographic positioning to home + About hero (or sub-hero microcopy):
    - EN: "Based in Zürich. Deeply embedded across Latin America and the Caribbean. We work in English and Spanish."
    - ES: "Con sede en Zúrich. Profundamente arraigados en América Latina y el Caribe. Trabajamos en español e inglés."
  - Update JSON-LD `areaServed` on all three ClarityScan tier pages to `['LATAM', 'Caribbean', 'Switzerland', 'Europe']`.
  - Add a `Languages: English, Spanish` badge near the contact form.

---

### SALES-106 — Still no competitive differentiation copy ("vs. big consultancies / vs. local boutiques / vs. academic centers")

- Severity: P2
- Impact: 4
- Effort: M
- Location (EN/ES): absent across entire site
- Observation: The buyer's actual decision is "Doulab vs. Deloitte vs. local-boutique vs. in-house DT-office." The site never names this comparison or makes the case. Doulab has the substance (named IP in MCF/IMM-P, partner-led delivery, open-method auditability, fixed-fee posture, four real cases) but argues none of it. Identical absence in ES — and ES buyers are arguably more comparison-hungry because LATAM has both top-tier global firms and respected regional academic foresight units (FLACSO, ITAM, CIPPEC-adjacent) competing for the same RFPs.
- Recommendation: Add a "Why Doulab" section to home and About. Three to five **named anti-positioning** statements outperform abstract principles:
  - "We install capability instead of leaving slide decks."
  - "Our methods (MCF, IMM-P®) are auditable: you can review the model, not just trust the brand."
  - "Partner-led delivery — Luis Santiago Arias and a network of specialists, not junior consultants billed at senior rates."
  - "Fixed-fee, procurement-friendly: published anchors instead of opaque day-rates."
  - "Bilingual EN/ES with deep LATAM public-sector and regulated-finance cases."

---

### SALES-107 — Case-study primary CTAs still funnel enterprise/government buyers into ClarityScan instead of a private briefing

- Severity: P2
- Impact: 4
- Effort: S
- Location (EN): `src/pages/case-studies/afp-siembra.tsx`, `alpha-inversiones.tsx`, `fundapec.tsx`, `ogtic-redlab.tsx` — hero primary CTA = "Explore ClarityScan" / "Book a ClarityScan online"; case-studies/index.tsx same
- Location (ES): same files under `i18n/es/`
- Observation: A buyer who arrives at the AFP Siembra case page is, by definition, a regulated-finance enterprise buyer. Telling them "Book a CHF 150 self-serve diagnostic" is a category mistake — they are evaluating Doulab for a 6–7-figure engagement, and the CTA reads as if Doulab thinks they want a startup tool. The briefing CTA (`booking.doulab.net/briefing`) exists and is correct for this audience but is consistently demoted to a tertiary card. Same logic on ES case pages, where the LATAM committee-buyer expectation is "first call, then proposal" — the briefing route fits, ClarityScan does not.
- Recommendation: Per-page CTA differentiation by buyer-context heat-map:
  - On all 4 case study pages + `/case-studies/index`: primary = "Request a private briefing" (`booking.doulab.net/briefing`); secondary = "Or start with ClarityScan® Tier 1 (CHF 150)".
  - On `/work-with-us` and `/services` (cold/curious traffic): keep ClarityScan primary.
  - Apply identical swap on ES counterparts.

---

### SALES-108 — Trust pyramid below the testimonials line is also thin: Luis's authorship of MCF / IMM-P® and the Innovation Lab Guide are not surfaced as credibility instruments on home or About

- Severity: P2
- Impact: 4
- Effort: S
- Location (EN/ES): `src/pages/about/index.tsx` (no author byline, no publication list, no LinkedIn link, no MCF/IMM-P authorship claim); `src/pages/index.tsx` (no founder name, no "by the author of MCF 2.2")
- Observation: E-J1 (named client testimonials) is correctly deferred. But the **non-testimonial trust levers Doulab already owns** are also under-deployed: Luis is the named author of MCF and IMM-P® (proprietary IP, registered marks); the Innovation Lab Guide is an 11-chapter authoritative artifact; Vigía Futura is a foresight practice with public material. None of these are presented as personal credibility on the About hero. For a boutique competing against brands, personal credibility is the substitute for institutional brand — and Doulab is not cashing it in.
- Recommendation: On `/about`, add a "Principal" block above the pillars: name, photo, role, one-line bio, "Author of MCF 2.2 and IMM-P®", LinkedIn, 2-3 publication links (Innovation Lab Guide, key blog posts). On `/`, add author byline microcopy under hero: "Built around MCF 2.2 and IMM-P®, authored by Luis Santiago Arias." Replicate in ES.

---

### SALES-109 — Case-study "At a glance" still abstract; buyer cannot extract sponsor / duration / headline number / engagement type in 10 seconds

- Severity: P2
- Impact: 3
- Effort: S
- Location (EN): `src/pages/case-studies/fundapec.tsx:108-117` ("Sector / Focus / Approach / Result" — all prose, no numbers); same pattern in `afp-siembra.tsx`, `alpha-inversiones.tsx`, `ogtic-redlab.tsx`
- Location (ES): same files under `i18n/es/`
- Observation: FUNDAPEC's case body contains a strong, dated outcome (`10 → 515 active members as of September 2025`, `4,000 validated`, `Comunidad FUNDAPEC launched November 2024`). But the "At a glance" at the top says "Result: Validated member growth and a reliable engagement engine" — a generic phrase with no number. A 3-minute skimmer never reaches the body. The Snapshot block buyers actually want is: **Sponsor role | Sector | Duration | Headline metric | Method | Engagement type**.
- Recommendation: Replace the 4-line "At a glance" with a 6-field "Snapshot" table on every case:
  - Client (with sponsor role if cited): FUNDAPEC, Communications + Programs
  - Sector: Education finance / alumni engagement
  - Duration: Dec 2023 – ongoing (~2.5 yrs)
  - Headline outcome: 10 → 515 active members; 4,000 validated (Sept 2025)
  - Method: MCF 2.2 + ClarityScan baseline
  - Engagement type: Two-track (business model exploration + platform relaunch)
- Apply identically in ES. Reuses copy already in the body — pure restructure, no new claims, no client consent needed.

---

### SALES-110 — About page never names Luis Santiago Arias in body copy; founder identity invisible to a 30-second scanner

- Severity: P2
- Impact: 3
- Effort: S
- Location (EN): `src/pages/about/index.tsx:120-285` (no body mention of Luis; appears only in `<meta name="author">`)
- Location (ES): `i18n/es/.../about/index.tsx` same
- Observation: For a boutique selling against branded competitors, the founder's name is a primary trust instrument. A CIO has to make a personal-credibility judgement about who actually shows up to the engagement — and the About page hides that information. The `team.md` file exists in the codebase per 2026-06 finding, but is not linked from the About hero or pillars. ES About has the same invisibility.
- Recommendation: Add a named-principal block immediately after the "Our story" section in both locales:
  - "Doulab is led by **Luis Santiago Arias**, author of MCF 2.2 and IMM-P®. Partner-led delivery, supported by a network of specialists. [Read more about the team](/about/team) · [LinkedIn]."
- If there is a working `/about/team` page, link it; if not, build a minimal one with 3-5 named collaborators or honestly declare "partner-led with associate network."

---

### SALES-111 — No procurement-grade artifacts exposed on the site; LATAM ministry and IDB-funded buyers cannot self-qualify Doulab as a vendor

- Severity: P2
- Impact: 3
- Effort: M
- Location (EN/ES): no `/capability-statement`, `/for-procurement`, `/security-and-compliance`, or downloadable one-pager linked from `/contact`, `/work-with-us`, or footer
- Observation: LATAM public-sector and IDB-funded engagements require, at minimum: legal entity + jurisdiction, tax IDs (RUC / RNC / RFC depending on country), data-handling commitment (LGPD / GDPR), capability statement (1-pager), sample MSA/SoW language. Doulab's privacy posture is strong (privacy + terms pages exist) but is not packaged for procurement. A ministry buyer has to email to get a vendor packet — friction that loses deals to firms with a one-click download. ES site is the more painful gap because the procurement audience is overwhelmingly Spanish-speaking.
- Recommendation: Build a `/work-with-us/procurement` page (and ES `/es/work-with-us/procurement`) with: legal entity name + jurisdiction(s), registered marks, capability statement (1-page downloadable PDF, both EN and ES), data handling summary (GDPR + LGPD), sample engagement-terms language, references contact, vendor IDs if applicable. Link from `/contact` and the `/work-with-us` FAQ "Pricing" answer. Half-day to scaffold the page; the PDF and legal copy are the gating work.

---

### SALES-112 — ES site is a literal translation of EN sales copy; not tuned for LATAM buying processes (committee-driven, relationship-driven, longer cycles, reference-driven)

- Severity: P2
- Impact: 4
- Effort: M
- Location (ES): every page under `i18n/es/docusaurus-plugin-content-pages/`
- Observation: LATAM enterprise and public-sector buyers operate differently from DACH/US buyers:
  - **Committee buying**: decisions span 3-6 stakeholders (CIO + CFO + Innovation Director + sponsor + procurement) — site needs a "share with your team" / printable summary path
  - **Relationship-first**: cold self-serve checkout is culturally weak; "schedule an introductory call" CTAs convert better than "buy now"
  - **Reference-driven**: regional reference contacts (named DR institutions) carry more weight than abstract claims
  - **Longer cycles**: 3-6 month evaluations need nurture material, not just transactional CTAs
- The ES surface does none of this differently from EN. CTAs translate "Book a ClarityScan online" to "Reserva un ClarityScan en línea" with identical placement and identical weight — even though the LATAM enterprise buyer is far less likely to put CHF 150 on a corporate card without internal approval.
- Recommendation:
  - On ES enterprise-skewed pages (case studies, `/es/services/innovation-maturity`, `/es/work-with-us`): elevate "Solicita una sesión informativa privada" (briefing) and demote the Stripe checkout CTA to secondary.
  - Add a "Comparte con tu equipo" / "Descarga el resumen ejecutivo" path (1-page PDF per service or per case study).
  - Add a `Referencias regionales` line near the proof strip on ES home: "Trabajamos con OGTIC, AFP Siembra, FUNDAPEC y Alpha Inversiones en República Dominicana."
  - Treat the ES contact form's `availableLanguage: ['en','es']` JSON-LD claim as a real promise: ensure ES inquiries are responded to in ES with explicit SLA.

---

### SALES-113 — ES branded-term translation creates a buyer-facing inconsistency: "Tier" → "Nivel" on ClarityScan but `IMM-P®` and `MCF` are not localized; mixed-language outputs read as work-in-progress

- Severity: P3
- Impact: 2
- Effort: S
- Location (ES): `i18n/es/.../services/clarityscan.tsx` uses "Nivel 1 Snapshot" but page body still mixes "Snapshot" (English) inside Spanish; `i18n/es/.../services/innovation-maturity.tsx` keeps `IMM-P®`, `MCF 2.2`, `gates`, `cadence` untranslated
- Observation: This is a sales finding, not an i18n parity finding (owned by role 12). The buyer impression is "the product itself has not been adapted to Spanish-speaking markets — they translated the brochure." For premium boutique positioning that is a downgrade. The correct stance is either: (a) keep the brand mark in English (`IMM-P®`, `ClarityScan®`, `MCF`) consistently as proper nouns and translate everything else cleanly; or (b) localize the noun phrases (e.g., "Modelo de Madurez de Innovación, IMM-P®"). Today both stances appear inconsistently.
- Recommendation: Codify a glossary at `i18n/es/glossary.md`: registered marks stay in English (`ClarityScan®`, `IMM-P®`, `MCF`, `MicroCanvas®`, `Vigía Futura`); descriptive terms localize (`Tier → Nivel`, `Snapshot → Snapshot` [keep], `Diagnostic → Diagnóstico`, `Audit → Auditoría`, `gates → puntos de control`, `cadence → cadencia`). Run a single sweep against the glossary across all ES service + case-study pages.

---

### SALES-114 — Engagement-model clarity (project / retainer / advisory) is implicit; buyer cannot tell which Doulab actually offers

- Severity: P3
- Impact: 3
- Effort: S
- Location (EN): `src/pages/work-with-us/index.tsx:67-82` (FAQ "Pricing" mentions "fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope"); not exposed in main body
- Location (ES): same
- Observation: The FAQ answer is correct but buried in an accordion and only surfaces if the buyer thinks to click "Pricing?". A CIO needs to know up front: is Doulab project-based (you scope, they deliver, they leave) or retainer-based (ongoing partner) or advisory (light-touch monthly)? The case studies suggest mostly project + program with some 2.5-year program work (AFP Siembra) — but no page names this explicitly.
- Recommendation: Promote engagement-model clarity into a 3-card row on `/work-with-us` (and ES equivalent): **Project (fixed-fee diagnostics + workshops) | Program (IMM-P® 12+12 weeks, scoped) | Retainer (coaching + advisory, monthly)**. Each card with typical duration, deliverable shape, and "best for" line. Half-day copy + layout work.

---

### SALES-115 — No "Procurement & RFP" entry point for LATAM government buyers; site cannot intercept ministry-led search

- Severity: P3
- Impact: 3
- Effort: M
- Location (EN/ES): absent
- Observation: OGTIC is in the case book — meaning Doulab has won at least one DR government engagement. There is no `/sector/public` or `/sector/government` landing page that signals "we serve ministries; here is how we engage; here is the procurement-friendly path." Anyone searching for `consultoría innovación gobierno`, `RedLab metodología`, `marco innovación pública` is not intercepted with sector-fit copy. Same gap in regulated-finance: AFP Siembra and Alpha Inversiones are in the case book but no `/sector/financial-services` page.
- Recommendation: Build two sector landing pages (each EN + ES, 4 pages total):
  - `/sector/public-sector` ↔ `/es/sector/sector-publico`
  - `/sector/regulated-finance` ↔ `/es/sector/finanzas-reguladas`
- Each with: sector-specific value prop, named cases, procurement path, engagement model, sector-tuned CTA (briefing primary). This is the strategic bet that unblocks RFP and ministry deals — links to SALES-111 (procurement) and SALES-107 (briefing-led CTAs).

---

## Quick wins — top 5

1. **Swap home Proof strip to outcome numbers**: replace `7 / 25+ / 2-to-4` with FUNDAPEC `10 → 515` + `4,000 validated` + one AFP Siembra dated outcome. EN + ES. ~30 min copy. (SALES-102)
2. **Reorder audience tiles on ClarityScan (EN + ES)**: lead with Public Institutions / Regulated Finance / Foundations; demote Startups + Incubators. ~30 min copy. (SALES-104)
3. **Add geographic anchor to home + About hero (EN + ES)**: one line "Based in Zürich. Deeply embedded across Latin America and the Caribbean." Plus update JSON-LD `areaServed`. ~1 hour. (SALES-105)
4. **Add 6-field "Snapshot" block to all 4 case studies (EN + ES)**: Client / Sector / Duration / Headline outcome / Method / Engagement type — pure restructure of existing copy. ~2 hours. (SALES-109)
5. **Swap case-study primary CTA (EN + ES) from "Explore ClarityScan" to "Request a private briefing"**, with ClarityScan as secondary. ~30 min config. (SALES-107)

## Strategic bets — top 3

1. **Build the enterprise/government entry path: sector landing pages + procurement page + briefing-led CTAs.** New `/sector/public-sector`, `/sector/regulated-finance` (EN + ES); new `/work-with-us/procurement` with capability-statement PDF (EN + ES); shift case-study + sector-page primary CTA from ClarityScan to "Request a private briefing." Unblocks LATAM ministry and IDB-funded deals that ClarityScan cannot serve. (SALES-107, SALES-111, SALES-115)
2. **Publish pricing anchors across the full ladder and adopt one canonical taxonomy.** ClarityScan T2 / T3 / IMM-P® / Workshop tiers each get a "from CHF X" or band; home / about / what-we-do / services rewritten around one taxonomy (Methods × Formats). Two-week content sprint; resolves the two oldest procurement-hostile gaps. (SALES-101, SALES-103)
3. **Tune the ES surface for LATAM buying culture, not just literal translation.** Briefing-led CTAs on enterprise-skewed ES pages, regional-reference line on ES home, "Comparte con tu equipo" / executive-summary PDFs per service and case, ES-language glossary lock-in. Unlocks the highest-value reader of the bilingual site and signals premium boutique posture. (SALES-112, SALES-113, SALES-115)

## Out of scope / hand-offs

- Visual hierarchy of CTAs, hero/final-CTA layout, card grid balance: **02-brand-visual, 04-conversion, 17-mobile-responsive**.
- Information-architecture rationalization of `/about` vs `/what-we-do` vs `/services` collision: **01-ia-ux**.
- Copy tone, em-dash removal, AI-pattern language, voice consistency: **03-content-copy, 11-blog-editorial**.
- Pure EN↔ES parity (string-by-string completeness, missing translations, locale-switcher behavior): **12-i18n**.
- SEO meta + JSON-LD `areaServed` actual rewrite: **05-seo** (this audit only flags the buyer-decision impact).
- Procurement / capability-statement legal copy + GDPR/LGPD language: **08-security-privacy**.
- New route scaffolding for `/sector/*` and `/work-with-us/procurement` pages: **10-code-quality**.
- Maturity-claim correctness against MCF 2.2 / IMM-P® public model: **13-mcf-imm-domain**.
- Pricing-anchor presentation framing (anchoring effect, decoy pricing): **14-behavioral-economics**.
- ClarityScan checkout funnel analytics, briefing-CTA conversion instrumentation: **09-analytics**.
- E-J1 named-client testimonials: **deferred, do not re-file under SALES until consent obtained**.

## Open questions for Luis

1. ClarityScan T2 and T3: what is the typical fee band you would be comfortable publishing as a "from CHF X" anchor? Same fee for enterprise vs public sector?
2. IMM-P® 12+12-week program: typical engagement value range (CHF / USD), and is it the same for an enterprise team vs a multi-institution public-sector cohort?
3. Innovation Readiness Workshop tiers (Standard / Professional / Enterprise): can at least one anchor be public per tier (e.g., per-day rate)?
4. Are reusable executive-summary PDFs (one per service, one per case) acceptable to publish? Who would author / review them?
5. For SALES-110: is `team.md` ready to be linked publicly, or should the About page state honestly "Partner-led, with an associate network"?
6. For SALES-115: is there appetite (and bandwidth) for a `/sector/public-sector` and `/sector/regulated-finance` landing-page pair, or should sector positioning live inside the existing case studies + a single "Sectors" section on `/work-with-us`?
7. Vigía Futura commercial status in 2026: paid offer, thought-leadership stream, or co-funded research vehicle? Drives whether it gets a service-tier card or moves under `/insights`.
8. ES-localization stance for registered marks: keep `ClarityScan®`, `IMM-P®`, `MCF`, `MicroCanvas®` in English as proper nouns, or build localized noun phrases?
9. LATAM legal entity / tax IDs: which jurisdictions does Doulab register or invoice from for LATAM clients, and which of those can be exposed on a procurement page?
10. Is the briefing CTA (`booking.doulab.net/briefing`) sized / staffed to handle the volume increase if it becomes the primary CTA on case studies and sector pages?

---

### Verdict — what a bilingual buyer concludes in 60 seconds (2026-07)

**EN reader (Swiss/DACH or US enterprise):** Sees a serious boutique with one self-serve product (ClarityScan T1, CHF 150), a credible LATAM case book, registered IP, and no geographic anchor. Leaves uncertain whether Doulab is "the Zürich boutique that does LATAM" or "a global generalist with DR clients." Cannot bracket T2/T3 spend, cannot find the founder's name in body copy, cannot see how Doulab differs from a Deloitte fixed-bid. Will qualify out on price-opacity or founder-thinness.

**ES reader (LATAM enterprise or public-sector):** Sees Spanish copy that reads as a faithful translation of an English site, with no regional anchoring, audience tiles led by "Startups," registered marks left in English, and CTAs that push toward a CHF 150 Stripe checkout — culturally wrong for a committee buyer. The case book is regionally credible (OGTIC, AFP Siembra, FUNDAPEC, Alpha Inversiones — all DR) but this strength is never claimed in the positioning. Will qualify out for "this doesn't feel built for us."

**The bilingual launch (commit `eb1c8c8`) is a structural prerequisite that has been met; the sales-and-positioning work to make the ES surface actually convert LATAM buyers has not started.** The 5 quick wins above are mostly copy-only and can land in a single half-day sprint; the 3 strategic bets are a 2-4 week content + scaffolding effort that resolves the deepest gaps from both audits.
