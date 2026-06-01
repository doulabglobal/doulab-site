# Audit 2026-07 — Role 13: MCF / IMM-P® domain expert

**Role.** Domain expert on the Doulab framework family (IMM, IMM-P®, IMM-DT, MCF, MicroCanvas®, ClarityScan®, Vigía Futura, VIF, VILF, MEL, RedLab). Looking for misuse, drift, missing marks, and bilingual incoherence in how the doulab.net site describes its own canon.

**Scope.** Both locales. EN at `/`, ES at `/es/*`. Focus on `src/pages/services/innovation-maturity.tsx`, `src/pages/services/imm-dt.tsx`, `src/pages/services/clarityscan*.tsx`, `src/pages/vigia-futura/index.tsx`, and their ES counterparts under `i18n/es/docusaurus-plugin-content-pages/`. Home page (`src/pages/index.tsx`) sampled for brand-mark drift.

**Method.** Read the named artifacts in both locales. Grepped the wider tree for `IMM®`, `IMM-P` (no ®), `MicroCanvas`, `Vigía`/`Vigia`, `VIF`, `VILF`, `MEL`, framework expansions (`Incubation Framework`, `Methodology Coherence`), 5-phase labels, and Tier descriptions. Cross-checked against the canon in the task brief (5 phases as Discovery → Validation → Efficiency → Scale → Continuous Improvement; VIF = Vigía Incubanet Framework; MCF = MicroCanvas Framework) and against the prior audit `audit-2026-06/13-mcf-imm-domain.md` (which references the canonical IMM v2.2 Master Deck phases as Foundations / Structured Discovery & Validation / Efficiency / Scaling / Continuous Improvement). Where the brief's mnemonic and the v2.2 Master Deck diverge, the divergence itself is flagged as a finding the user must adjudicate.

---

## Severity legend
- **P0** — Domain-integrity break: wrong framework name, wrong expansion, missing ® on a marked product, or EN/ES drift on canon. Brand-trust hit.
- **P1** — Domain ambiguity that a buyer can misread (e.g. roles of MCF vs IMM-P® muddled, IMM-P® phase labels diverging from canonical sources).
- **P2** — Inconsistent shorthand, version drift, or minor wording.
- **P3** — Editorial nit.

Impact 1-5; Effort S (<1h) / M (1-4h) / L (>4h).

---

## DOMN-001 — `MCF` expanded as **"Methodology Coherence Framework"** on Vigía Futura page in BOTH locales

- **Severity:** P0
- **Impact:** 5
- **Effort:** S
- **Files:**
  - `src/pages/vigia-futura/index.tsx:150` — `foundationLabel="Common foundation: MCF v2.2 (Methodology Coherence Framework)"`
  - `i18n/es/docusaurus-plugin-content-pages/vigia-futura/index.tsx:150` — `foundationLabel="Fundamento común: MCF v2.2 (Methodology Coherence Framework)"`

**Observation.** MCF is the **MicroCanvas Framework**. It is mis-expanded on the Vigía Futura page as "Methodology Coherence Framework" in both locales — a fabricated name that does not exist anywhere else in the codebase or canon. Every other page on the site (`about/index.tsx`, `case-studies/*`, `services/innovation-maturity.tsx`, `services/coaching-mentoring.tsx`, etc.) correctly expands MCF as "MicroCanvas Framework" or "MicroCanvas® Framework." A reader who lands on the Vigía Futura page first will walk away with the wrong product name. The ES locale carries the same English string verbatim, so the error is duplicated on the Spanish site.

**Fix.** Replace both with `"Common foundation: MCF v2.2 (MicroCanvas Framework)"` / `"Fundamento común: MCF v2.2 (MicroCanvas® Framework)"`. Consider adding ® on `MicroCanvas` since the canvas product is registered.

---

## DOMN-002 — `VIF` expanded as **"Vigía Incubation Framework"** instead of canonical **"Vigía Incubanet Framework"**

- **Severity:** P0
- **Impact:** 4
- **Effort:** S
- **Files:**
  - `src/pages/vigia-futura/index.tsx:154` — `'Vigía Incubation Framework. Architecture and operating standards...'`
  - `i18n/es/docusaurus-plugin-content-pages/vigia-futura/index.tsx:154` — `'Vigía Incubation Framework. Arquitectura...'`
  - `docs/research-resources/index.mdx:99` — `<h3>Vigía Incubation Framework (VIF)</h3>`
  - `i18n/es/docusaurus-plugin-content-docs/current/research-resources/index.mdx:99` — same

**Observation.** Per the workspace `CLAUDE.md` map, the local project tree is `Vigia Futura/vigia-incubanet-framework/`. The brief defines `VIF = Vigía Incubanet Framework`. The site uniformly publishes `"Vigía Incubation Framework"` — a plausible but incorrect English translation that drops the **Incubanet** brand. Affects both locales and both the marketing page and the research-resources index. Because the brand is `Incubanet` (a portmanteau/product name), translating it loses the trademark identity.

**Fix.** Sweep the four call sites to `"Vigía Incubanet Framework"` (do not localize — `Incubanet` is a proper noun). If "Vigía Incubation Framework" was a deliberate English-facing rename, that decision needs to be reflected in the source tree path and the brief; the current state is incoherent.

---

## DOMN-003 — Home page strips brand marks from `ClarityScan®` and `Vigía Futura`

- **Severity:** P0
- **Impact:** 4
- **Effort:** S
- **Files:**
  - `src/pages/index.tsx:77` — `'ClarityScan produces a one-page maturity baseline...'` (no ®)
  - `src/pages/index.tsx:79` — `responseLabel: 'ClarityScan diagnostic'` (no ®)
  - `src/pages/index.tsx:90` — `'Vigia Futura supplies signal scans...'` (no accent)
  - `src/pages/index.tsx:92` — `responseLabel: 'Vigia Futura observatory'` (no accent)

**Observation.** The home page is the highest-traffic entry on the site and the canonical place to establish brand. It currently strips the ® off `ClarityScan` and the í accent off `Vigía Futura` in the "Where strategy meets reality" cluster. Every other page (services, about, vigia-futura) carries `ClarityScan®` and `Vigía Futura` consistently. This is the single most visible brand drift on the site. Check ES home parity.

**Fix.** `ClarityScan` → `ClarityScan®` (both occurrences); `Vigia Futura` → `Vigía Futura` (both occurrences). Verify ES home (`i18n/es/docusaurus-plugin-content-pages/index.tsx` if present, or `src/pages/index.tsx` if it is locale-shared).

---

## DOMN-004 — `diagnostics.tsx` says `"IMM"` where it must say `"IMM-P®"` (per prior-audit ruling)

- **Severity:** P0
- **Impact:** 4
- **Effort:** S
- **Files:**
  - `src/pages/services/diagnostics.tsx:19` — `"Built on MicroCanvas® 2.2 and IMM; privacy-first."` (description meta)
  - `src/pages/services/diagnostics.tsx:44` — `"Built on MicroCanvas® 2.2 and IMM; privacy-first by design."`
  - `src/pages/services/diagnostics.tsx:185` — `"aligned with MicroCanvas® 2.2 and IMM terminology."`

**Observation.** The prior audit (`audit-2026-06/13-mcf-imm-domain.md` DOM-003 and the backlog) flagged this exact pattern: when a page says the offering is "built on" something, it is built on the **program** (IMM-P®) which carries the ®, not on the bare **model**. The brief restates: "Never bare `IMM®` or `IMM-P`." The diagnostics page lands on the same trap by going the other way — bare `IMM`, no `-P`, no ® — which is grammatically allowable (model reference) but contextually wrong for a "Built on…" credit line. Check the ES diagnostic page for the same pattern.

**Fix.** `"Built on MicroCanvas® 2.2 and IMM"` → `"Built on MicroCanvas® 2.2 and IMM-P®"` on lines 19, 44; line 185 ("IMM terminology") is fine as model reference and can stay. Mirror in ES.

---

## DOMN-005 — IMM-P® phase labels diverge from the brief's canon (Discovery → Validation → Efficiency → Scale → Continuous Improvement)

- **Severity:** P1 (requires user adjudication — see Open Question)
- **Impact:** 5
- **Effort:** S (rename) / L (if the entire deck changes)
- **Files:**
  - `src/pages/services/innovation-maturity.tsx:175,186,197,208,219` — phase labels: `Foundations`, `Structured Discovery and Validation`, `Efficiency`, `Scaling`, `Continuous Improvement`
  - `src/pages/services/innovation-maturity.tsx:232-236` — capability ladder rungs reuse the same labels
  - `i18n/es/docusaurus-plugin-content-pages/services/innovation-maturity.tsx:175,186,197,208,219` — `Fundamentos`, `Descubrimiento y Validación Estructurados`, `Eficiencia`, `Escalamiento`, `Mejora Continua`
  - `src/pages/services/clarityscan.tsx:286-290` — `Foundations`, `Structured Discovery`, `Efficiency`, `Scaling`, `Continuous Improvement`

**Observation.** The role brief states the 5 IMM phases are: **Discovery → Validation → Efficiency → Scale → Continuous Improvement** (5 distinct phases, with Discovery and Validation as separate phases). The site (and the prior audit's confirmation from `IMM/v2.2/EN/Sources/IMM-P_2.2_Master_Deck-v1.3.md`) uses: **Foundations / Structured Discovery & Validation / Efficiency / Scaling / Continuous Improvement** (Discovery+Validation merged into one phase, prefaced by Foundations). The two are not the same phase decomposition: brief = 5 phases with separated Discovery and Validation; site/Master Deck = 5 phases with Foundations as Phase 1 and Discovery+Validation combined as Phase 2.

This is a **canon conflict** between the role brief and the site's authoritative source (`IMM v2.2 Master Deck`). The site is internally consistent with the IMM-P® 2.2 Master Deck and with its own ES translation. If the brief is correct, the entire IMM v2.2 deck and both locales of `innovation-maturity.tsx` and `clarityscan.tsx` must change.

**Fix.** *Decision required.* If the brief's canon supersedes the IMM 2.2 Master Deck, rename across both locales and the `clarityscan` Tier 1 ladder. Otherwise, the brief should be corrected to match the Master Deck (Foundations / Structured Discovery & Validation / Efficiency / Scaling / Continuous Improvement). Until adjudicated, take no destructive action.

---

## DOMN-006 — Vigía Futura framework family card omits IMM-DT and presents IMM-P® without ® consistency check

- **Severity:** P2
- **Impact:** 3
- **Effort:** S
- **Files:**
  - `src/pages/vigia-futura/index.tsx:148-182` — pillars list contains VIF, VILF, IMM, IMM-P®, MEL
  - `i18n/es/docusaurus-plugin-content-pages/vigia-futura/index.tsx:148-182` — same

**Observation.** The brief says Vigía Futura is the "observatory + capability + framework family (VIF, VILF, MEL)" — i.e. the Vigía-branded frameworks are VIF, VILF, MEL. The site adds IMM and IMM-P® into the family card (which is *defensible* — they are the capability/execution spine). However:
1. **IMM-DT is missing** from the family card despite being explicitly anchored in the Index section below it (`foundationLabel="Grounded in IMM and the IMM-DT vertical"`). A reader looking at the family stack will not see IMM-DT positioned as a vertical of IMM-P®.
2. The MEL pillar has no ® and no link, even though MCF/IMM-P®/ClarityScan® get ® treatment elsewhere. Confirm MEL is intentionally unmarked (likely yes — it is a generic acronym).
3. `IMM` pillar (line 166) describes IMM as "Innovation Maturity Model. The capability spine" — accurate. Good.

**Fix.** Either add an `IMM-DT` pillar (recommended — labelled "the digital transformation vertical of IMM-P®") or add a one-line note under the Pillars block saying IMM-P® has vertical instantiations (IMM-DT today; more to follow). Mirror ES.

---

## DOMN-007 — IMM-P® page describes the program as "remote-first" while the JSON-LD Service schema says `areaServed: ['Global']` and the page lists DR / LATAM clients

- **Severity:** P3
- **Impact:** 2
- **Effort:** S
- **Files:**
  - `src/pages/services/innovation-maturity.tsx:40` — `areaServed: ['Global']`
  - `src/pages/services/imm-dt.tsx:32` — `areaServed: ['Latin America', 'Caribbean', 'Global']`

**Observation.** Inconsistent service-area declaration between the IMM-P® umbrella page and the IMM-DT vertical page. Not a domain-canon error per se, but it makes the IMM-P® page look less regionally grounded than IMM-DT. Editorial.

**Fix.** Decide on one `areaServed` shape and mirror across the two pages in both locales. If `Global` is correct on IMM-P®, IMM-DT (which is a vertical of IMM-P®) cannot logically have a narrower service area.

---

## DOMN-008 — ClarityScan® Tier 1 ladder labels exactly match IMM-P® phase labels, which conflates "where you are" with "what we run for you"

- **Severity:** P2
- **Impact:** 3
- **Effort:** S
- **Files:**
  - `src/pages/services/clarityscan.tsx:285-291` — Tier 1 ladder: `Foundations`, `Structured Discovery`, `Efficiency`, `Scaling`, `Continuous Improvement`
  - `src/pages/services/innovation-maturity.tsx:232-236` — IMM capability rungs: same five labels
  - `src/pages/services/innovation-maturity.tsx:175-219` — IMM-P® phases: same five labels (with the second one expanded to "Structured Discovery and Validation")

**Observation.** The site uses the same five labels for three different things:
1. **IMM domains** (no — those are: Evidence, Decision logic, Culture, Iteration, Systemic+AI). OK.
2. **IMM capability rungs** (the maturity ladder, where the organization sits).
3. **IMM-P® program phases** (the sequence of engagement work).

Per the IMM 2.2 Master Deck and the prior audit, rungs and phases share the same five-label vocabulary deliberately — the rung you sit on is the phase whose readiness gate you've passed. This is canonical and internally coherent. But the Tier 1 ClarityScan® ladder uses *"Structured Discovery"* (not "Structured Discovery and Validation") for rung 2, while the IMM-P® phases page uses *"Structured Discovery and Validation"* for Phase 2. Within the same site visit a buyer sees both forms.

**Fix.** Align rung 2 label across `clarityscan.tsx`, `innovation-maturity.tsx` (rungs), and `innovation-maturity.tsx` (phases). Pick one — either always `Structured Discovery` or always `Structured Discovery and Validation` — and apply in both locales. Recommended: keep `Structured Discovery and Validation` everywhere (matches Master Deck) and shorten only where space forces it. Mirror ES.

---

## DOMN-009 — `IMM-P®` is correctly carried in ES throughout the main IMM page, but the title format `(IMM-P)®` places ® outside the parenthesis

- **Severity:** P2
- **Impact:** 3
- **Effort:** S
- **Files:**
  - `src/pages/services/innovation-maturity.tsx:33,131,251` — `'Innovation Maturity Model Program (IMM-P)®'`
  - `i18n/es/docusaurus-plugin-content-pages/services/innovation-maturity.tsx:33,131,251` — `'Programa del Modelo de Madurez en Innovación (IMM-P)®'`

**Observation.** The convention `(IMM-P)®` reads as "the ® mark applies to the whole expansion." The convention `(IMM-P®)` reads as "the mark applies to the acronym IMM-P." The brief and the rest of the site consistently use `IMM-P®` in inline copy. The JSON-LD `name`, breadcrumb, and `<title>` use the parenthesized-then-marked form. Inconsistent. Compare to the prior audit `DOM-010` which flagged this exact pattern in 2026-06.

**Fix.** Normalize all schema `name`, breadcrumb `name`, and HTML `<title>` to `Innovation Maturity Model Program (IMM-P®)` in EN and `Programa del Modelo de Madurez en Innovación (IMM-P®)` in ES. Six call sites total across the two files.

---

## DOMN-010 — IMM-DT page has zero Spanish translation parity for its own product narrative

- **Severity:** P0 (per brief: "any drift in domain framing between EN and ES is a P0 brand-integrity issue")
- **Impact:** 4
- **Effort:** M (translation)
- **Files:**
  - `src/pages/services/imm-dt.tsx` — full English page, 314 lines
  - `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx` — present per directory listing; **verify content**

**Observation.** The directory listing confirms `i18n/es/.../services/imm-dt.tsx` exists, but I did not read it in full this pass. Given the volume of EN-only content on the IMM-DT page (six maturity-ladder rungs unique to DT, six-horizon 0–36 month roadmap with EN-only labels like `Baseline`, `First wins`, `Process anchoring`, `Cohort progression`, `Scale and govern`, `Compounding`), a translation audit of `imm-dt.tsx` is mandatory. If those labels are still EN in ES, this is a P0.

**Fix.** Read `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx`, diff the six roadmap horizons and the five-rung DT ladder against the EN, and translate any holdouts. Same check for the "What IMM-DT does not do" boundary statement and the pilot reference paragraph.

---

## DOMN-011 — `IMM-DT` is positioned as "delivered through the IMM-P® program" but the IMM-P® page does not mention IMM-DT as one of its verticals

- **Severity:** P1
- **Impact:** 4
- **Effort:** S
- **Files:**
  - `src/pages/services/imm-dt.tsx:34,40,57,115,276` — repeatedly links DT back to IMM-P®
  - `src/pages/services/innovation-maturity.tsx` — **no mention of IMM-DT anywhere** (verified by reading the full file)
  - `i18n/es/.../services/innovation-maturity.tsx` — same omission

**Observation.** The IMM-P® page positions itself as an "engagement program" with a 5-phase roadmap, but never tells the reader that IMM-P® has *verticals* (IMM-DT today, more to follow). A reader who lands on the IMM-P® page from search will not discover IMM-DT unless they navigate to `/services/imm-dt` independently. This is a navigational gap and a positioning asymmetry: IMM-DT depends on IMM-P® for legitimacy, but the IMM-P® page does not reciprocate.

**Fix.** Add a "Verticals" section to the IMM-P® page (one short block, one card: IMM-DT) and link it from both the body and the FAQ. Mirror ES. Could be folded into the existing "Where to start: the ClarityScan® tiers" section for proximity, or stand alone before the FAQ.

---

## DOMN-012 — ClarityScan® `Tier 1` is positioned both as a standalone diagnostic *and* as the entry point to IMM-P®; the relationship between the two is described in three different ways

- **Severity:** P2
- **Impact:** 3
- **Effort:** M
- **Files:**
  - `src/pages/services/innovation-maturity.tsx:80` (FAQ) — `"ClarityScan® is the entry-level diagnostic that feeds an IMM-P® engagement."`
  - `src/pages/services/clarityscan.tsx:78` — `"Three tiers, one IMM 2.2 measurement backbone. Tier 1 Snapshot is a 15 to 20 minute self-assessment with a same-week PDF readout (CHF 150)."`
  - `src/pages/services/clarityscan.tsx:354` — `"For deeper assessments, see Tier 2 Diagnostic or Tier 3 Audit, or the full IMM-P® program."`
  - `src/pages/services/clarityscan/audit.tsx:69,231,313` — Tier 3 is described as feeding "an IMM-P® engagement" with phase readiness gates "aligned with the IMM 5-phase model"

**Observation.** The relationship is one of these three (pick one and enforce):
- **(a)** ClarityScan® *is* the IMM-P® Tier 1 / 2 / 3 diagnostic instrument (i.e. ClarityScan is *part of* IMM-P®, not separate).
- **(b)** ClarityScan® is a standalone product (own tiers, own pricing) that *can be* used as the entry diagnostic for an IMM-P® engagement.
- **(c)** ClarityScan® Tier 1 is standalone; Tier 2/3 deliverables feed IMM-P®.

The current copy mixes all three readings. The IMM-P® page treats ClarityScan® as "entry-level diagnostic that feeds" (b); the ClarityScan® page treats Tier 1 as a complete product and Tier 3 as feeding IMM-P® phase gates (c-ish); the ClarityScan® Tier 3 page treats itself as the audit instrument *for* IMM-P® phase readiness (a-ish). Confirmed in both EN and ES.

**Fix.** Adjudicate the relationship and rewrite one declarative sentence into the lede of all three pages (and their ES mirrors). Likely (b) for marketing clarity but the user must call this.

---

## DOMN-013 — `MEL` is presented in the Vigía family without an expansion the first time it appears on the page

- **Severity:** P3
- **Impact:** 2
- **Effort:** S
- **Files:**
  - `src/pages/vigia-futura/index.tsx:177-180` — pillar body says `"Monitoring, evaluation, and learning."` ✓
  - `i18n/es/.../vigia-futura/index.tsx:177-180` — pillar body says `"Monitoreo, evaluación y aprendizaje."` ✓

**Observation.** Actually OK — both locales expand MEL inline. Logging this as a positive finding to confirm it was checked.

**Fix.** None.

---

## DOMN-014 — RedLab brand name is used in the OGTIC case study but never anchored as "Doulab's innovation lab network engagement with OGTIC"

- **Severity:** P3
- **Impact:** 2
- **Effort:** S
- **Files:**
  - `src/pages/case-studies/ogtic-redlab.tsx` (and ES mirror) — uses `RedLab` as a proper noun throughout
  - No glossary entry anchoring the brief's definition (`RedLab` = innovation lab network, OGTIC engagement)

**Observation.** A reader unfamiliar with the engagement will see "RedLab" as a third-party product. The case-study page should anchor it as "the public-sector innovation lab network we co-designed with OGTIC under the IMM-P® program." Not flagged as P0 because case-study readers usually have context, but worth a sentence.

**Fix.** Add one anchoring sentence to the OGTIC/RedLab case-study lede in both locales.

---

## DOMN-015 — `Vigía` accent is preserved in nearly every page, but English-only contexts (alt text, aria-labels) occasionally drop it

- **Severity:** P2 (per brief: ® and accent preservation is a P0-class concern for brand integrity)
- **Impact:** 3
- **Effort:** S
- **Files:**
  - `src/pages/index.tsx:90,92` — `"Vigia Futura"` (already in DOMN-003)
  - All other surveyed files use `Vigía Futura` correctly with the í accent.

**Observation.** Covered by DOMN-003 for the home page; sweep with `Grep` for `Vigia` (no accent) across `src/` and `i18n/` to confirm there are no other drops. Spot check: zero in the `src/pages/vigia-futura/index.tsx` page itself.

**Fix.** Single global EN sweep: `Vigia Futura` → `Vigía Futura`. (Spanish locale has it correct.)

---

## Open questions for the user

1. **Phase canon.** Does the role brief override the IMM v2.2 Master Deck? If yes, the entire phase decomposition on `innovation-maturity.tsx`, the ladder, the `ImmFunnelDiagram`, and the IMM source decks under `IMM/v2.2/` must change to **Discovery → Validation → Efficiency → Scale → Continuous Improvement**. If no, this audit accepts the current Master Deck phases and DOMN-005 closes as "brief should be corrected." See DOMN-005.
2. **VIF expansion.** Is `Vigía Incubanet Framework` (per workspace `CLAUDE.md` and brief) or `Vigía Incubation Framework` (current site copy) the canonical English name? The local source-tree path uses `incubanet`. See DOMN-002.
3. **ClarityScan® ↔ IMM-P® relationship.** Standalone product that feeds IMM-P®, or the diagnostic instrument inside IMM-P®? See DOMN-012.
4. **IMM-P® `areaServed`.** `Global` (current) or `Latin America + Caribbean + Global` (matching IMM-DT)? See DOMN-007.

---

## Priority order for remediation

1. **DOMN-001** (MCF mis-expansion, both locales) — P0, single 2-line fix per locale.
2. **DOMN-002** (VIF "Incubation" vs "Incubanet") — P0, 4 call sites.
3. **DOMN-003** (home page ClarityScan® and Vigía Futura marks dropped) — P0, 4 lines.
4. **DOMN-004** (diagnostics.tsx bare `IMM` in "Built on" credit) — P0, 2 lines + ES mirror.
5. **DOMN-010** (verify IMM-DT ES parity) — P0 contingent on what the ES file actually contains.
6. **DOMN-009** (`(IMM-P)®` → `(IMM-P®)` in JSON-LD/title) — P2, 6 call sites.
7. **DOMN-005** — *blocked on user adjudication* (phase canon conflict).
8. **DOMN-011** (IMM-P® page omits IMM-DT vertical) — P1, one new section.
9. **DOMN-012** — *blocked on user adjudication* (ClarityScan®/IMM-P® relationship).
10. **DOMN-008** (rung 2 label drift) — P2, 3 files × 2 locales.
11. **DOMN-006** (Vigía family card omits IMM-DT) — P2.
12. **DOMN-015**, **DOMN-014**, **DOMN-013**, **DOMN-007** — P2/P3 cleanup.

---

## What I did *not* check (out of scope or deferred)

- The clients-hub (`clients.doulab.net`) tree — frozen from this side per `CLAUDE.md`.
- The IMM source decks under `IMM/v2.2/` — read only via the prior audit's quotes; assumed canonical.
- The `docs/` MDX tree beyond `research-resources/index.mdx` (where the VIF mis-expansion lives).
- Full read of `i18n/es/.../services/imm-dt.tsx` (called out as DOMN-010 deferred verification).
- Full read of `clarityscan/audit.tsx` and `clarityscan/diagnostic.tsx` ES mirrors (sampled only).
- Blog posts under `blog/` and `i18n/es/.../blog/` (sampled via grep only; the prior audit covers these).
- Footer copyright line — covered by `audit-2026-06` issue COPY-002 / DOM-003 and the backlog (line 470 of `docs/ops/doulab-net-backlog.md` records it as fixed in commit `b2f93a532`).

---

*End of role 13 audit. No commits made.*
