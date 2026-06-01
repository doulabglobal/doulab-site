# MCF / IMM-P Domain Audit — doulab.net — 2026-06-01

## Scope

Framework-fidelity audit of how the Doulab website depicts its two flagship frameworks:

- **MCF — MicroCanvas Framework** (canonical home: `..\MCF\2.1\` and the MCF 2.2 working tree referenced from `..\IMM\AGENTS.md` at `The MicroCanvas\MicroCanvas\Web\micro-canvas-framework.github.io\docs\book`; PDF `..\MCF\2.1\Doulab - Demo Pitch - Q1 2025 - ES.pdf` noted but not read).
- **IMM-P® — Innovation Maturity Model — Program** (canonical home: `..\IMM\v2.2\EN\` — master deck `IMM-P_2.2_Master_Deck-v1.3.md`, master template `IMM_2.2_Master_Template.xlsx`, plus `..\IMM\v2.1\` and `..\IMM\CLAUDE.md` / `..\IMM\AGENTS.md`).

In scope: terminology, structure (phases, domains, tiers), version references, trademark and registered-mark usage, structural alignment with `docs/research-resources/`, and cross-page consistency in `src/pages/`, `blog/`, and `docs/`.

Out of scope: visual design, conversion UX, accessibility, performance, code-quality, SEO, i18n. Each is flagged for hand-off where relevant.

## Method

1. Read canonical sources: `IMM\CLAUDE.md`, `IMM\AGENTS.md`, `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` (full canonical IMM-P 2.2 structure: 5 domains, 5 phases, 3 tiers).
2. Verified MCF version pointer: `IMM\AGENTS.md` §17 names MCF 2.2 as the current canonical working tree.
3. Read site framework-bearing pages: `src/pages/index.tsx`, `services/innovation-maturity.tsx`, `services/clarityscan.tsx`, `services/diagnostics.tsx`, `what-we-do/index.tsx`, `about/index.tsx`, `vigia-futura/index.tsx`, `case-studies/*.tsx`, `components/diagrams/ImmFunnelDiagram.tsx`, `components/case-studies/caseStudiesData.tsx`.
4. Read framework docs: `docs/research-resources/index.mdx`, `microcanvas.md`, `innovation-lab-guide/*` (chapters 01–11), `distributed-federated-agentic-ai.md`.
5. Read blog posts: `2025-08-30-introducing-doulab.md`, `2025-09-12-clarityscan-decision-latency.md`, `2025-09-22-vigia-futura-foresight-observatory.md`, `2026-01-19-coordination-threshold.md`.
6. Grepped the full repo for `MCF`, `MicroCanvas`, `IMM-P`, `IMM 2.`, `domain`, `phase` to surface inconsistencies and stray symbols.

## Findings (ranked)

### DOM-001 — MCF version is fractured across the site (v2.1 vs 2.2)

- Severity: **high**. Impact: **5**. Effort: **M**.
- Locations:
  - `src/pages/index.tsx` line 481–492 — "MicroCanvas Framework v2.1" card, alt "MicroCanvas Framework v2.1, modular canvases for innovation."
  - `src/pages/what-we-do/index.tsx` lines 28, 107, 119, 196, 305, 339 — "MicroCanvas® 2.1", "MCF 2.1", "Built on MicroCanvas® v2.1".
  - `src/pages/about/index.tsx` lines 53, 137, 166, 288 — "MicroCanvas® Framework, MCF 2.1", "Built on MicroCanvas® v2.1".
  - `src/pages/services/clarityscan.tsx` line 78 — "Built on MicroCanvas® v2.1 and IMM-P® gates."
  - `src/pages/services/diagnostics.tsx` line 19, 44 — "Built on MicroCanvas® 2.1 and IMM®".
  - `src/pages/case-studies/afp-siembra.tsx` line 124 (and peer case studies) — "Built on MicroCanvas® v2.1".
  - `docs/research-resources/microcanvas.md` lines 3, 5 — title "MicroCanvas Framework (v2.1)".
  - `docs/research-resources/index.mdx` line 67 — "MicroCanvas® Framework (MCF) v2.1".
  - `docs/research-resources/distributed-federated-agentic-ai.md` lines 4, 287, 289, 361, 453 — "MCF 2.1".
  - `blog/2025-09-12-clarityscan-decision-latency.md` lines 100, 106, 118, 120, 138, 261 — "MCF v2.1", "MCF 2.1".
  - `blog/2025-09-22-vigia-futura-foresight-observatory.md` line 171 — "MicroCanvas® Framework (MCF 2.1)".

  *Versus* the newer references:
  - `src/pages/services/innovation-maturity.tsx` lines 36, 122, 178, 196, 259, 478, 628, 724 — "MicroCanvas Framework (MCF v2.2)", "MCF 2.2", "Built on MicroCanvas® v2.2".
  - `blog/2026-01-19-coordination-threshold.md` line 165 — "MicroCanvas Framework (MCF 2.2)".
  - `docs/research-resources/innovation-lab-guide/*` (chapters 01, 02, 05, 06, index) — "MCF 2.2" throughout.

- Canonical evidence: `IMM\AGENTS.md` §17: "MCF 2.2 canonical working tree: …micro-canvas-framework.github.io\docs\book". `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` is on v2.2 and is the active canonical deck.
- Observation: The site sits on two MCF versions simultaneously. The flagship service page (`/services/innovation-maturity`) and the Innovation Lab Guide guide visitors to MCF 2.2; nearly every other surface (home, what-we-do, about, ClarityScan, Diagnostics, four case studies, the `microcanvas` doc card, the Research & Resources framework card, two blog posts, and the federated-AI whitepaper) still says v2.1. This is the single largest framework-fidelity defect.
- Recommendation: Pick MCF 2.2 as the public version aligned with canonical IMM AGENTS, then sweep every "v2.1 / MCF 2.1 / MicroCanvas® 2.1 / MicroCanvas® v2.1" reference to v2.2 in `src/pages/**`, `docs/research-resources/index.mdx`, `docs/research-resources/microcanvas.md`, `docs/research-resources/distributed-federated-agentic-ai.md`, and the two blog posts. Update the `mcf-card.{avif,webp,jpg}` alt text in `src/pages/index.tsx` accordingly. If v2.1 must remain referenced anywhere (e.g. case study attribution at the time of work), use "delivered on MCF 2.1, now updated to 2.2" wording to preserve provenance.

---

### DOM-002 — IMM 2.2 domains are absent from every page except `/services/innovation-maturity`

- Severity: **high**. Impact: **5**. Effort: **M**.
- Locations:
  - `src/pages/services/innovation-maturity.tsx` lines 302–337 — five cards correctly enumerate: "Evidence & epistemic discipline / Decision logic & governance / Culture & behavior / Iteration & adaptive improvement / Systemic & AI governance".
  - `src/pages/index.tsx` lines 80–161 — the `problems[]` array assigns each problem a `pillar` taxonomy of eight legacy labels: "Culture + Innovation Mindset", "Planning Mindset + Leadership Development", "Evidence-Based Decision-Making", "Operating Model + Delivery", "Segmentation + JTBD", "Governance + Gate Reviews", "Business Intelligence Maturity", "Foresight + Strategic Anticipation".
  - `docs/research-resources/innovation-lab-guide/07-imm-maturity.mdx` lines 17–24 — the "IMM Snapshot (Example)" table uses six pillars that do not match canonical 2.2: "Governance clarity / Evidence discipline / Portfolio logic / Capability reuse / Talent readiness / Delivery alignment".
- Canonical evidence: `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md`, slide "IMM 2.2 domains" (lines 86–93):
  > "1. Evidence & epistemic discipline / 2. Decision logic & governance / 3. Culture & behavior / 4. Iteration & adaptive improvement / 5. Systemic & AI governance".
- Observation: The home page introduces visitors to an 8-pillar legacy taxonomy; the Innovation Lab Guide chapter 07 introduces a 6-pillar taxonomy; the service page presents the canonical 5 domains. A buyer who reads two pages sees three different scoring models attributed to the same product.
- Recommendation: Treat the canonical IMM 2.2 five-domain set as the single public taxonomy. Re-tag the home `problems[]` items to those domains (e.g. items 1 and 3 → Culture & behavior; item 2 → Decision logic & governance; items 3 and 7 → Evidence & epistemic discipline; item 4 → Iteration & adaptive improvement; item 6 → Decision logic & governance; item 8 → Systemic & AI governance and/or treat foresight as Vigía Futura sphere). Rewrite the chapter 07 table in `07-imm-maturity.mdx` using the 5 domains, or relabel the table clearly as "illustrative pillar mapping, not the IMM 2.2 scoring instrument" with a link to the service page. Hand-off: Content & copy + Code quality.

---

### DOM-003 — IMM-P® brand mark drift: `IMM®`, `IMM-P ©`, and `IMM-P &copy;` variants

- Severity: **high**. Impact: **4**. Effort: **S**.
- Locations:
  - `src/pages/services/diagnostics.tsx` lines 19 and 44 — `"Built on MicroCanvas® 2.1 and IMM® — privacy-first"` and `"Built on MicroCanvas® 2.1 and IMM®; privacy-first by design"`.
  - `blog/2025-08-30-introducing-doulab.md` line 3 — frontmatter description: `"how the MicroCanvas® Framework and IMM® help teams ship outcomes reliably"`.
  - `docs/research-resources/distributed-federated-agentic-ai.md` lines 4, 361, 453 — `"IMM-P &copy;"` and `"IMM-P ©"`.
  - `docs/releases.mdx` lines 68, 76 — `"IMM-P © standardized"`, `"Standardized IMM-P © usage"`.
- Canonical evidence: `IMM\AGENTS.md` §1 and `IMM\CLAUDE.md` §1 both define the canonical name as **"IMM-P® (Innovation Maturity Model Program) — Doulab"**. The registered-mark glyph belongs to the program name `IMM-P®`, not to the bare `IMM` acronym, and is *not* a copyright (`©`) mark.
- Observation: `IMM®` (without `-P`) implies a registered mark on the standalone Innovation Maturity Model, which contradicts canonical naming. `IMM-P ©` / `IMM-P &copy;` swaps a copyright glyph for a registered-trademark glyph, which is a legally distinct claim. Phase C7 (`docs/ops/doulab-net-backlog.md`) was meant to normalize IMM-Pr → IMM-P®, but it missed `IMM®` and `IMM-P ©`.
- Recommendation: Sweep all `IMM®` → `IMM-P®`, all `IMM-P ©` / `IMM-P &copy;` / `IMM-P©` → `IMM-P®`. Add a one-line authoring rule to `AGENTS.md`: "When the program is named, use `IMM-P®` with the registered mark. Never write `IMM®` or `IMM-P ©`. The bare acronym `IMM` (no mark) is permitted only when referring to the underlying model in general/abstract terms." Hand-off: Content & copy + Brand & visual + Code quality (a one-shot grep + Edit suffices).

---

### DOM-004 — Inconsistent stylization "MicroCanvas®" vs "MicroCanvas" (registered mark applied to MCF inconsistently)

- Severity: **medium**. Impact: **3**. Effort: **S**.
- Locations:
  - With `®`: `src/pages/about/index.tsx` line 53, 166; `src/pages/what-we-do/index.tsx` lines 107, 119, 339; `src/pages/services/clarityscan.tsx` line 78; `src/pages/services/diagnostics.tsx` line 44; `src/pages/services/innovation-maturity.tsx` line 196, 724; `docs/research-resources/index.mdx` line 67; `blog/2025-08-30-introducing-doulab.md` line 3, 84; `blog/2025-09-12-clarityscan-decision-latency.md` line 100, 104, 261; `blog/2025-09-22-vigia-futura-foresight-observatory.md` line 108, 171.
  - Without `®`: `src/pages/index.tsx` line 481 (alt text and h3), 492 (link label "MicroCanvas v2.1"); `docs/research-resources/microcanvas.md` lines 3, 5, 9, 11; `docs/research-resources/distributed-federated-agentic-ai.md` line 289; `docs/research-resources/innovation-lab-guide/01-executive-summary.mdx`, `05-the-innovation-lab.mdx`, `06-mcf-operating-loop.mdx` throughout.
- Canonical evidence: `IMM\CLAUDE.md` and `IMM\AGENTS.md` mark only `IMM-P®` as registered. Neither file asserts a registered mark for MicroCanvas; the MCF 2.2 canonical tree URL is the public site `themicrocanvas.com`. Public domain status of the MicroCanvas mark is not affirmed in the IMM canonical AGENTS.
- Observation: The site uses `MicroCanvas®` in marketing prose and `MicroCanvas` (no mark) in documentation and within the Innovation Lab Guide. Either the mark is registered (then every public mention should bear it on first use per page) or it is not (then it should never bear `®`). Mixed use is a legal-claim risk.
- Recommendation: Confirm with Luis whether MCF / MicroCanvas is a Doulab registered mark. If yes, normalize first-use on every page to `MicroCanvas®` (and update the canonical IMM AGENTS.md to record it). If no, drop the `®` from all "MicroCanvas" mentions and keep only `IMM-P®` marked. Either way, write the policy into `AGENTS.md`. Hand-off: Brand & visual (legal review) + Content & copy.

---

### DOM-005 — `/what-we-do` shows two phase gates (Gate 1 / Gate 2) but canonical IMM-P® has five phase gates

- Severity: **high**. Impact: **4**. Effort: **M**.
- Location: `src/pages/what-we-do/index.tsx` lines 172–178:
  > `<h3 id="imm-title">IMM-P®, 12 + 12 weeks</h3>` … `<li><strong>Gate 1</strong>, go or no go after Discovery</li> <li><strong>Gate 2</strong>, go or no go before MVP or Scale</li>`
  And lines 282–284:
  > `12 + 12 weeks … Discovery and Validation → Efficiency and Scale`.
- Canonical evidence: `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` "Phases (overlay)" (lines 111–117) defines five phases — Foundations / Structured Discovery & Validation / Efficiency / Scaling / Continuous improvement — each ending in a phase gate. The service page (`services/innovation-maturity.tsx` lines 372–468) and `ImmFunnelDiagram.tsx` correctly render five.
- Observation: `/what-we-do` collapses the program into a two-gate, 12+12-week story that omits Foundations and Continuous Improvement. A prospect introduced to IMM-P® here will form a structurally wrong mental model that the service page then contradicts.
- Recommendation: Replace the "Gate 1 / Gate 2" bullets with the canonical five-phase overlay (use the same five labels and phase gates as `ImmFunnelDiagram`) and rewrite the "12 + 12 weeks" KPI card as "5 structured phases, 12-week core or 24+ week rollout" to match `services/innovation-maturity.tsx` lines 492–516. Hand-off: Content & copy + IA & UX.

---

### DOM-006 — Tier names are inconsistent across pages

- Severity: **medium**. Impact: **3**. Effort: **S**.
- Locations:
  - `services/innovation-maturity.tsx` line 335 — "Tier 1 snapshot, Tier 2 diagnostic, Tier 3 evidence-backed audit".
  - `services/innovation-maturity.tsx` line 614 — "Tier 1 and Tier 2 can run as scored assessments. Tier 3 requires evidence documentation".
- Canonical evidence: `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` "Tiered delivery" (lines 138–142):
  > "| 1 | Snapshot | Fast scoring + executive readout |
  >  | 2 | Diagnostic | Mapping + prioritized gaps |
  >  | 3 | Audit | Evidence documentation + governance |".
- Observation: The service page is internally consistent and matches canonical naming. The rest of the site (home, what-we-do, about, ClarityScan) never names the tier system at all, so visitors first hear "Snapshot / Diagnostic / Audit" only deep in the program page. ClarityScan is positioned as "Phase 01 baseline" (FAQ line 87) but its relationship to Tier 1 Snapshot is left implicit.
- Recommendation: Add a one-line tier explainer to ClarityScan ("ClarityScan® is the Tier 1 Snapshot baseline of IMM-P®") and to `what-we-do` Diagnostics card. Keep "Snapshot / Diagnostic / Audit" wording everywhere — never use "Tier 3 audit" without "Audit" capitalized as the canonical label. Hand-off: Content & copy.

---

### DOM-007 — Innovation Lab Guide chapter 07 introduces a competing "IMM Pillars" taxonomy and never names the canonical 5 domains

- Severity: **high**. Impact: **4**. Effort: **M**.
- Location: `docs/research-resources/innovation-lab-guide/07-imm-maturity.mdx` lines 9–24:
  > "The Innovation Maturity Model (IMM) is a capability progression model … | IMM Pillar | Early-stage signals | Mature signals | Metric | Typical intervention | … Governance clarity / Evidence discipline / Portfolio logic / Capability reuse / Talent readiness / Delivery alignment".
- Canonical evidence: as DOM-002. Canonical IMM 2.2 names five **domains**, not pillars, and the names are specifically Evidence & epistemic discipline, Decision logic & governance, Culture & behavior, Iteration & adaptive improvement, Systemic & AI governance.
- Observation: This chapter uses a different unit of measure ("pillar") and a different taxonomy. The guide also says "IMM" with no `®` and no `-P`, treating it as a generic capability model rather than Doulab's flagship IMM-P® program.
- Recommendation: Rewrite the table to the canonical five domains, or explicitly frame it as an introductory pillar mapping that "rolls up into the IMM-P® 2.2 five-domain scorecard" with a link to `/services/innovation-maturity`. Capitalize and mark `IMM-P®` correctly throughout the chapter on first use. Hand-off: Content & copy + Blog & editorial.

---

### DOM-008 — Home page `problem.pillar` taxonomy is the largest unbranded framework on the site

- Severity: **medium**. Impact: **4**. Effort: **M**.
- Location: `src/pages/index.tsx` lines 84–158 — eight unique pillar labels ("Culture + Innovation Mindset", "Planning Mindset + Leadership Development", "Evidence-Based Decision-Making", "Operating Model + Delivery", "Segmentation + JTBD", "Governance + Gate Reviews", "Business Intelligence Maturity", "Foresight + Strategic Anticipation").
- Canonical evidence: None of these eight labels appears in `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md`. They appear to be an older marketing taxonomy held over from an earlier site iteration.
- Observation: The visible label of each problem card is its "pillar", so a visitor reads eight non-canonical category names before they ever encounter IMM-P® or its five domains. This dilutes the canonical taxonomy and weakens the buyer's ability to recognize what IMM-P® actually measures.
- Recommendation: Replace each pillar string with one of the five canonical IMM 2.2 domain names (with allowed `Vigía Futura` for foresight). This requires a content decision per problem; the simplest first cut maps {1,3} → Culture & behavior, {2,6} → Decision logic & governance, {3,7} → Evidence & epistemic discipline, {4} → Iteration & adaptive improvement, {5} → Decision logic & governance, {8} → Vigía Futura. Hand-off: Content & copy + Conversion.

---

### DOM-009 — `MicroCanvas v2.1` doc card link points to a stub that may go stale faster than the rest of the site

- Severity: **medium**. Impact: **3**. Effort: **S**.
- Location: `docs/research-resources/microcanvas.md` lines 1–28, in particular line 3 (`title: MicroCanvas Framework (v2.1)`) and line 9 ("The MicroCanvas Framework (MCF) is a modular toolkit…"). Linked from `src/pages/index.tsx` line 492 and `src/pages/case-studies/afp-siembra.tsx` line 161.
- Canonical evidence: `IMM\AGENTS.md` §17 points to the MCF 2.2 canonical tree on `micro-canvas-framework.github.io`. The internal `microcanvas.md` is a 28-line stub.
- Observation: The internal page is a stub that asserts an outdated version, never enumerates canvases, and never lists MCF 2.2 phases or processes (compare with the IMM-P deck slide "Phase overlay" and the Innovation Lab Guide chapter 06's enumeration of MCF 2.2 processes: Problem Analysis, Solution Alternative Analysis, Transformative Purpose, Key Growth Metric, Key Impact Metrics). It is the most likely entry point for someone clicking "Learn the framework in our docs" and yet contains the least canonical content.
- Recommendation: Either (a) make this page a thin redirect/teaser to `themicrocanvas.com` (and remove the stale "(v2.1)" subtitle), or (b) expand to a one-screen canonical summary lifted from the MCF 2.2 working tree (operating loop, named canvases, phase overlay, link to themicrocanvas.com). Update internal links to match. Hand-off: Content & copy + IA & UX.

---

### DOM-010 — `Innovation Maturity Model — Program (IMM-P)` is sometimes typeset without a hyphen in `-P` and without the registered mark

- Severity: **low**. Impact: **2**. Effort: **S**.
- Locations:
  - `src/pages/services/innovation-maturity.tsx` line 31 — JSON-LD `name: 'Innovation Maturity Model Program (IMM-P)®'` (the `®` is outside the parenthesis instead of after `IMM-P`).
  - `src/pages/what-we-do/index.tsx` lines 36, 71, 75 — JSON-LD and meta description: `"IMM-P"` (no `®`) and "Innovation Maturity Model Program" without the registered mark in `og:description`.
  - `docs/research-resources/microcanvas.md` line 27 and `README.md` line 35 — "Innovation Maturity Model — Program (IMM-P)" (no `®`).
- Canonical evidence: `IMM\CLAUDE.md` §1: "Canonical slide system for **IMM-P® (Innovation Maturity Model Program) — Doulab**." The mark sits on `IMM-P®`.
- Observation: JSON-LD `name` strings are propagated to Google's Knowledge Graph and to AI surfaces. `"Innovation Maturity Model Program (IMM-P)®"` is ambiguous (the mark appears to qualify "(IMM-P)" rather than the program name) and the bare "IMM-P" forms in `og:description` lose the mark altogether.
- Recommendation: Normalize the canonical product name to `Innovation Maturity Model Program (IMM-P®)` everywhere (`®` adjacent to `IMM-P`, both inside and outside the parenthesis use). Sweep JSON-LD `name`, `og:description`, and breadcrumb entries. Hand-off: SEO + Code quality.

---

### DOM-011 — VIF (Vigía Incubation Framework) and VILF (Vigía Innovation Lab Framework) are presented as two distinct frameworks with no canonical source

- Severity: **medium**. Impact: **3**. Effort: **M**.
- Locations:
  - `docs/research-resources/index.mdx` lines 99–129 — two adjacent cards: "Vigía Incubation Framework (VIF)" with site "Visit the VIF site →" and "Vigía Innovation Lab Framework (VILF)" with site "Visit the VILF site →".
  - `blog/2026-01-19-coordination-threshold.md` line 181 — "Approaches such as VIF represent one way to think about supporting this next phase".
  - `docs/research-resources/innovation-lab-guide/02-how-to-use-this-guide.mdx` line 41 — `[*Vigía Innovation Lab Framework (VILF)*](https://vilf.doulab.net)`.
  - `docs/ops/doulab-net-backlog.md` line 705 onward — backlog item BL-ILG-P0-06 calls out "Why IMM is required before network scaling (VILF)".
- Canonical evidence: `IMM\AGENTS.md` §17 names only MCF 2.2 and IMM 2.2 as canonical content roots. No Doulab canonical source for VIF or VILF is referenced from there or in `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md`.
- Observation: Visitors see two near-identical acronyms (VIF and VILF) treated as distinct frameworks without a canonical primer; the Innovation Lab Guide treats VILF as the network-design framework that scales IMM-P®. Without a canonical document we cannot verify which is current.
- Recommendation: Confirm with Luis the canonical status of VIF and VILF and provide a one-page canonical source (analogous to IMM-P canonical deck). If only VILF is current, remove the VIF card in `index.mdx` (or relabel as a retired framework). If both are current, add a short comparison block explaining the relationship to MCF and IMM-P®. Open question for Luis (see below).

---

### DOM-012 — `IMM Dimensions` is referenced in the introducing-doulab post, but IMM 2.2 uses Domains

- Severity: **low**. Impact: **2**. Effort: **S**.
- Location: `blog/2025-08-30-introducing-doulab.md` line 87:
  > "raise **capability** (measurable progress across IMM dimensions)".
- Canonical evidence: `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` consistently uses **"domains"**: "IMM 2.2 domains" / "Domain scores" / "Domain calibration".
- Observation: Earlier IMM versions used "dimensions"; 2.2 standardized on "domains". A 2025-08 post pre-dating the 2.2 normalization is now drifting from canonical vocabulary.
- Recommendation: Edit the post to read "across IMM-P® domains" and add an editorial note dating the canonical-vocabulary update. Hand-off: Blog & editorial.

---

### DOM-013 — Innovation Maturity Service page hero claims "five structured phases using MCF 2.2" but the page itself separates IMM-P® phases from MCF 2.2 processes

- Severity: **low**. Impact: **2**. Effort: **S**.
- Location: `src/pages/services/innovation-maturity.tsx` lines 177–179 (hero `body`):
  > "Delivery runs through five structured phases using the MicroCanvas Framework (MCF 2.2)."
- Canonical evidence: `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` keeps IMM-P® phases (Foundations, Structured Discovery & Validation, Efficiency, Scaling, Continuous improvement) distinct from MCF 2.2 (the underlying canvas/processes toolkit). Innovation Lab Guide chapter 06 names MCF 2.2 *processes* (e.g. Problem Analysis, Solution Alternative Analysis, Key Growth Metric, Key Impact Metrics) inside lab phases.
- Observation: Phrasing makes the five phases sound *defined by* MCF 2.2; they are defined by IMM-P® and *executed using* MCF 2.2 canvases. Subtle but materially wrong for a buyer trying to map your two frameworks.
- Recommendation: Rephrase hero `body` to "Delivery runs through five IMM-P® phases, each executed with MicroCanvas Framework (MCF 2.2) canvases." Apply the same correction to the FAQ line 122 (`reusable playbooks/templates aligned to MCF 2.2`) — it is already correct, keep it as the template phrasing. Hand-off: Content & copy.

---

### DOM-014 — Custom Workshops and other agendas describe "MCF phases" — MCF doesn't have phases, IMM-P® does

- Severity: **medium**. Impact: **3**. Effort: **S**.
- Location: `docs/ops/doulab-net-backlog.md` line 1073 (LOG-DONE-10) — `"Services/Custom Workshops - agendas aligned to IMM & MCF phases"`. The phrasing has bled into product positioning: the canonical model in `IMM\v2.2\EN\Sources\IMM-P_2.2_Master_Deck-v1.3.md` shows the **phases** (Foundations → Continuous improvement) as IMM-P® program overlays, while MCF 2.2 contributes **processes / canvases** (Problem Analysis, Solution Alternative Analysis, Transformative Purpose, Key Growth Metric, Key Impact Metrics — Innovation Lab Guide ch.06).
- Canonical evidence: see DOM-013.
- Recommendation: Audit `src/pages/services/custom-workshops.tsx` and `src/pages/services/innovation-readiness-workshop.tsx` for the same construction and rewrite as "aligned to IMM-P® phases and MCF 2.2 canvases / processes". Hand-off: Content & copy.

---

### DOM-015 — Case study back-end alt text and labels reference MCF v2.1 attribution that may be historically accurate but is now publicly misleading

- Severity: **low**. Impact: **2**. Effort: **S**.
- Locations: `src/pages/case-studies/afp-siembra.tsx` line 124 (microcopy `"Built on MicroCanvas® v2.1 and IMM-P® gates."`), and equivalent strings on `alpha-inversiones.tsx`, `fundapec.tsx`, `ogtic-redlab.tsx` (per the grep). The Mermaid diagram in `afp-siembra.tsx` line 248–249 includes the node `B[MCF Workshops + Evidence Packs]` / `C[IMM-P Gate Reviews]`.
- Canonical evidence: same as DOM-001.
- Observation: Case studies plausibly *were* delivered on MCF 2.1 at the time; the issue is that they are now the only visible MCF-version evidence and they outnumber MCF 2.2 mentions.
- Recommendation: Either bump the case study microcopy to MCF 2.2 (acceptable if you treat MCF as a continuously updated framework, with no semantic break between 2.1 and 2.2), or add a footnote "delivered on MCF 2.1; method has since evolved to MCF 2.2." Resolution depends on Luis's view of MCF versioning policy. Hand-off: Content & copy + Blog & editorial.

## Quick wins — top 5

1. **DOM-003**: Global Edit pass — `IMM®` → `IMM-P®`, `IMM-P ©` / `IMM-P &copy;` / `IMM-P©` → `IMM-P®`. Adds a one-line rule to `AGENTS.md`. Touch points: `services/diagnostics.tsx`, `blog/2025-08-30-introducing-doulab.md` frontmatter, `docs/research-resources/distributed-federated-agentic-ai.md`, `docs/releases.mdx`. Low effort, high credibility return.
2. **DOM-010**: Normalize JSON-LD `name` to `Innovation Maturity Model Program (IMM-P®)` and fix `og:description` strings on `services/innovation-maturity.tsx`, `what-we-do/index.tsx`, and `microcanvas.md` / `README.md`. Direct effect on Google and AI-surface naming.
3. **DOM-013**: One-line rewrite of `services/innovation-maturity.tsx` hero `body` so IMM-P® phases and MCF 2.2 canvases are correctly differentiated. Removes the most-read structural misstatement.
4. **DOM-012**: Edit `blog/2025-08-30-introducing-doulab.md` line 87 "IMM dimensions" → "IMM-P® domains". One-line edit, restores canonical vocabulary.
5. **DOM-006**: Add one sentence to `services/clarityscan.tsx` and to the `what-we-do` Diagnostics card stating "ClarityScan® is the IMM-P® Tier 1 Snapshot baseline." Anchors ClarityScan inside the canonical tier system.

## Strategic bets — top 3

1. **DOM-001 site-wide MCF version sweep to 2.2**: This is the largest fidelity defect and underlies several others. Schedule as a dedicated content pass (analogous to Phase C7 IMM-P® normalization). Includes alt text on `mcf-card.{avif,webp,jpg}`, the `microcanvas.md` doc title, four case studies, two blog posts, the Distributed Federated Agentic AI whitepaper, and Research & Resources index. Pair with DOM-015 case-study attribution decision.
2. **DOM-002 + DOM-007 + DOM-008 — single canonical IMM-P® taxonomy across all surfaces**: Replace the home `problems[].pillar` legacy taxonomy and the Innovation Lab Guide ch.07 "pillars" table with the canonical five IMM 2.2 domains. This unifies how every page on the site labels capability and is the single most defensible move for buyers comparing frameworks.
3. **DOM-009 + DOM-011 — canonical microcanvas.md stub and canonical VIF/VILF source**: Either retire the MCF stub doc (redirect to themicrocanvas.com) or expand it into a canonical one-screen MCF 2.2 primer. Resolve the VIF/VILF status (one framework, both, or one retired) and create a canonical reference under `..\IMM\` or a peer folder so future audits have ground truth.

## Out of scope / hand-offs

- IA & UX: DOM-005 (phase model on `/what-we-do`), DOM-009 (`microcanvas.md` placement and link target).
- Brand & visual: DOM-003 (mark policy in AGENTS.md), DOM-004 (MicroCanvas® registered-mark legal status).
- Content & copy: DOM-002, DOM-003, DOM-004, DOM-005, DOM-006, DOM-007, DOM-008, DOM-012, DOM-013, DOM-014, DOM-015 (most findings are copy-level once the canonical taxonomy is fixed).
- Conversion: DOM-008 (home problem section is conversion-adjacent).
- SEO: DOM-010 (JSON-LD `name` and `og:description` normalization).
- Blog & editorial: DOM-007, DOM-012, DOM-015.
- Code quality: DOM-002 (the `problems[]` array shape), DOM-003 (a Grep/Edit sweep is cheaper than per-page edits), DOM-010 (JSON-LD strings).
- i18n: any sweep should be mirrored to ES content if/when it is built (currently ES locale not yet authored beyond plan, per Phase B-P2-03).
- Behavioral economics, Behavioral psychology, Sales, Mobile-first, Performance, Accessibility, Security & privacy, Analytics: not engaged by this audit's findings.

## Open questions for Luis

1. **MCF version policy in public copy**: Should the public site standardize on MCF 2.2 immediately, or keep MCF 2.1 attribution on historical case studies and only use 2.2 for new work? (Drives DOM-001 and DOM-015.)
2. **Is "MicroCanvas" a Doulab registered trademark?** Canonical IMM AGENTS only marks IMM-P® as registered. If MicroCanvas is registered, please confirm and we will normalize `MicroCanvas®` site-wide. If not, all `MicroCanvas®` references should drop the `®`. (Drives DOM-004.)
3. **VIF vs VILF**: Are both Vigía Incubation Framework and Vigía Innovation Lab Framework currently maintained Doulab frameworks, or has one superseded the other? Where is the canonical source (analogous to `..\IMM\v2.2\EN\Sources\`)? (Drives DOM-011.)
4. **Innovation Lab Guide chapter 07 "pillars" table**: Should this chapter introduce its own pillar taxonomy as a teaching aid, or should it use the canonical IMM 2.2 five-domain set directly? (Drives DOM-007.)
5. **Home page `problems[].pillar`**: Should the 8 legacy pillars be retired and remapped to the five IMM 2.2 domains, or kept as a pre-IMM-P® marketing layer that "rolls up into" the five domains? (Drives DOM-008.)
6. **ClarityScan® ↔ Tier 1 Snapshot relationship**: Should ClarityScan be explicitly named as "the IMM-P® Tier 1 Snapshot" everywhere it appears, or kept as a distinct product that "feeds" Tier 1? (Drives DOM-006.)
