---
title: "Audit 2026-07 — 03 Content & Copy strategist (bilingual)"
role: "Content & copy strategist"
locales: ["en", "es"]
status: draft
---

# Content & Copy audit — doulab.net — 2026-07 (bilingual)

## Scope

EN copy at `src/pages/**`, `docs/**`, `blog/**`. ES copy at `i18n/es/docusaurus-plugin-content-pages/**`, `i18n/es/docusaurus-plugin-content-blog/**`, `i18n/es/docusaurus-plugin-content-docs/**`, `i18n/es/docusaurus-theme-classic/*.json`. Site config: `docusaurus.config.ts`. Live serve: `http://127.0.0.1:4173`.

Lens: tone, voice, clarity, jargon density, scannability, value-prop crispness, headline strength, CTA verbs, microcopy, ES naturalness/register, bilingual parity, glossary drift between ES translation batches.

Out of scope (handoff to other roles): IA structure (01), brand voice as visual identity (02), conversion plumbing (04), SEO meta (05), legal copy body, ILG/whitepaper bodies (handoff to 11 Blog & editorial).

## Method

1. Re-read `audit-2026-06/03-content-copy.md` to fingerprint which prior COPY-* findings have shipped fixes; skip those.
2. Grep brand-hygiene rules across both locales:
   - em-dash (U+2014) in user-facing strings.
   - banned cliche words EN (`transformative|leverage|synergy|world-class|best-in-class`).
   - banned cliche words ES (`transformador|apalancar|sinergia|de clase mundial|el mejor (en|de) su clase`).
   - broken brand marks (`ClarityScanr|MicroCanvasr|IMM-Pr`).
3. Cross-locale glossary drift: `Gate` → `Compuerta` vs `Punto de control`; `Case studies` → `Casos de estudio` vs `Casos de éxito`; `co-create` → `cocrear` vs `co-crear`; tagline variants.
4. ES register check: search for `usted/Usted/le invitamos` (formal) vs `tú/tu/te` (target); spot-check copula correctness (`y` vs `e` before /i/-initial words including IMM/Innovation).
5. MCF version (v2.1 vs v2.2) sitewide regression check vs COPY-003.
6. AI-pattern templated phrases ("co-create the path forward", "we meet you where you are", ES "te encontramos donde estás", "cocreamos contigo el camino").
7. Read `index.tsx` (EN + ES), `services/innovation-readiness-workshop.tsx` (EN + ES), `book-clarityscan.tsx` (EN + ES), key case studies, FAQ JSON-LD blocks.

## Status of prior (2026-06) findings — for context, not re-filed

- COPY-001 (`ClarityScanr` typo): RESOLVED — zero matches in `src/pages` and `i18n/es`.
- COPY-002 (footer registered marks): RESOLVED in ES footer (`MicroCanvas® e IMM-P® son marcas registradas`, correct copula `e`); EN equivalent not re-verified in this pass but ES is clean.
- COPY-003 (MCF version v2.1 → v2.2): PARTIALLY RESOLVED — most pages now v2.2; regressions remain in `services/innovation-readiness-workshop.tsx` (both locales). Re-filed as COPY-103.
- COPY-007 (Final CTA repetition): MOSTLY RESOLVED — every `FinalCta` `title=` is now context-differentiated across both locales. Body text still templated — see COPY-108.
- COPY-010 (comma-for-colon): NOT VERIFIED this pass (sampling shows mixed; defer to 11 Blog & editorial).
- COPY-012 (`/book-clarityscan` Outlook leak): RESOLVED — ES says "página de reserva", EN says "booking page", vendor-agnostic. Trailing period in title still present in both locales — minor, re-filed inside COPY-110.

## Findings (ranked)

### COPY-101 — Site tagline is English-only in ES `<head>`, and is translated three different ways inside body copy (P1)

- Severity: P1
- Impact: 4
- Effort: S
- Location:
  - `docusaurus.config.ts:9` — `tagline: 'We unlock global prosperity by helping others create better futures'` (single global; no `i18n/es` override anywhere).
  - `i18n/es/docusaurus-plugin-content-blog/2025-08-30-introducing-doulab.md:22` — "ayudar a **desbloquear** la prosperidad global ayudando a otros a crear mejores futuros".
  - `i18n/es/docusaurus-plugin-content-pages/about/index.tsx:151` — "**Liberamos** la prosperidad global ayudando a otros a crear mejores futuros."
  - Implied third variant: the EN string itself shipping in ES `<meta name="description">` defaults from the tagline when a page doesn't override `description`.
- Observation: The ES site has **no localized tagline**. Docusaurus uses `siteConfig.tagline` in `<head>` and in some default metas; the English mission-grade sentence ships into Spanish pages, polluting SERP snippets and OG previews for ES URLs. Where the same idea **is** translated, three verbs are in play: "desbloquear" (blog), "liberar" (About), and the absent canonical (config). A reader who lands on `/es/about` then opens a search result preview for any other ES page sees the brand promise switch language and verb mid-journey.
- Recommendation: Define one canonical ES tagline. Recommendation (operational, not mission-grade, mirroring COPY-005 from prior pass): "Innovación, prospectiva y entrega repetible para América Latina y el Caribe." Override via `i18n/es/code.json` (`"theme.tagline": "…"`) or use Docusaurus i18n config to provide a localized `tagline`. Then pick one verb ("desbloqueamos" or "liberamos" — recommend "desbloqueamos" as closer to the EN intent) and apply across blog + About + any deck reuse.
- Evidence: see locations above.

### COPY-102 — ES glossary drift on IMM-P® gate terminology: `Compuerta` vs `Punto de control` vs untranslated `Gate` (P1)

- Severity: P1
- Impact: 4
- Effort: M
- Location:
  - `Compuerta`: `i18n/es/docusaurus-plugin-content-pages/case-studies/{afp-siembra,alpha-inversiones,fundapec,ogtic-redlab}.tsx` (lines 174–301, "Compuerta 1", "Compuerta 2", "Piloto Compuerta 1"); `i18n/es/docusaurus-plugin-content-docs/current/research-resources/distributed-federated-agentic-ai.md:443-448` ("Compuerta 0-1"…"Compuerta 5-6"); `i18n/es/docusaurus-plugin-content-docs/current/releases.mdx:34`.
  - `Punto de control`: `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx:167` ("Punto de control de preparación por fase"); `i18n/es/docusaurus-plugin-content-pages/index.tsx:51` ("puntos de control de capacidad"); `i18n/es/docusaurus-plugin-content-docs/current/research-resources/distributed-federated-agentic-ai.md:293-297` ("Punto de control 0..4"); `i18n/es/docusaurus-plugin-content-docs/current/research-resources/innovation-lab-guide/02-how-to-use-this-guide.mdx:13`; `i18n/es/docusaurus-plugin-content-docs/current/releases.mdx:172` ("Punto de control de crecimiento").
  - Untranslated: `i18n/es/docusaurus-plugin-content-docs/current/research-resources/innovation-lab-guide/07-imm-maturity.mdx:35` — `D --> E["Decision Gates"]` (mermaid label).
  - The same `distributed-federated-agentic-ai.md` file uses **both** "Punto de control" (narrative, lines 293-297) and "Compuerta" (artifact list, 443-448) — internal contradiction within one document.
- Observation: The IMM-P® "gate" is a defined methodology term. ES readers see three different words for the same concept depending on which page they land on. Case studies (where buyers go for proof) all say `Compuerta`. The IMM-DT product page (which case studies link to) says `Punto de control`. The homepage problem section says `puntos de control` for capacity gates and `puntos de decisión` for decision gates. A buyer building a mental model cannot tell whether these are the same construct or three.
- Recommendation: Pick one canonical ES term and enforce sitewide. Recommendation: `Compuerta` for IMM-P® evidence/decision gates (already used in all proof/case-study surfaces, and matches the EN visual metaphor of an opening that must pass criteria). Reserve `Punto de control` for ops/monitoring use ("checkpoint" of progress, dashboards). Update `imm-dt.tsx:167`, `index.tsx:51`, and the narrative passages in `distributed-federated-agentic-ai.md`. Translate the mermaid `"Decision Gates"` label in `07-imm-maturity.mdx:35`. Add a glossary file at `docs/ops/i18n-glossary.md` (handoff to 12 i18n).
- Evidence: see locations above.

### COPY-103 — MCF version regression: `MicroCanvas® Framework 2.1` still ships in EN and ES `innovation-readiness-workshop.tsx` (P1)

- Severity: P1
- Impact: 3
- Effort: S
- Location:
  - EN `src/pages/services/innovation-readiness-workshop.tsx:27, 225, 323, 483` — "MicroCanvas® Framework 2.1" (4 occurrences).
  - ES `i18n/es/docusaurus-plugin-content-pages/services/innovation-readiness-workshop.tsx:27, 225, 323, 483` — same 4 occurrences mirrored.
  - Same EN file mixes versions: line 13 description and lines 167, 277, 504 say `MicroCanvas® 2.2`; lines 27, 225, 323, 483 say `MicroCanvas® Framework 2.1`. Internal contradiction.
- Observation: COPY-003 was supposed to canonicalize v2.2 sitewide. This page slipped through and now publicly contradicts itself within a single scroll. The hero meta says 2.2, the workshop structure section says 2.1, the "About the authors" footer says 2.1, the kit list inside the agenda says 2.2. ES mirrors EN exactly, so the regression is bilingual.
- Recommendation: Replace all `MicroCanvas® Framework 2.1` and `MicroCanvas® 2.1` with `MicroCanvas® Framework 2.2` / `MicroCanvas® 2.2` in both locale copies of `innovation-readiness-workshop.tsx`. Extract the version literal into a single constant (e.g. `src/constants/brand.ts` → `MCF_VERSION = '2.2'`) so the next bump is one edit. Add a CI grep guard: `MicroCanvas\\\\s*(®\\\\s*)?(Framework\\\\s*)?2\\\\.1` must return zero matches.
- Evidence: see line numbers above.

### COPY-104 — `areaServed: 'Global'` JSON-LD ships on every ES service page (COPY-006 unresolved + extended) (P1)

- Severity: P1
- Impact: 4
- Effort: M
- Location:
  - EN: `src/pages/services/innovation-maturity.tsx:39`, `src/pages/services/clarityscan.tsx:37`.
  - ES (identical literal copied): `i18n/es/docusaurus-plugin-content-pages/services/innovation-maturity.tsx:39`, `i18n/es/docusaurus-plugin-content-pages/services/clarityscan.tsx:37`.
- Observation: COPY-006 (prior pass) flagged that LATAM/Caribbean positioning is invisible in EN copy and schema. The ES locale, which is the surface where regional positioning matters **most**, inherits the same `areaServed: ['Global']` literal. ES buyers in DR, CR, Colombia, Mexico, etc., search in Spanish and read JSON-LD-augmented SERP cards. Telling them "Global" while the proof strip is 100% Dominican Republic is a positioning miss; the body copy in ES already references "América Latina y el Caribe" (e.g. `index.tsx:46, 72`) but the structured-data layer contradicts it.
- Recommendation: For the ES locale, set `areaServed: ['Latin America','Caribbean','Dominican Republic']` (or schema.org `Place` objects with `addressRegion`). For EN keep `'Global'` only if positioning decision (still open from COPY-006) is "global firm with regional roots". If positioning is "LATAM/Caribbean specialist", apply the regional `areaServed` to EN too. This is paired with the open question in 16 Sales & positioning.
- Evidence: see locations above.

### COPY-105 — `cocrear` vs `co-crear` / `cocreados` vs `co-creados` glossary drift in ES (P2)

- Severity: P2
- Impact: 2
- Effort: S
- Location:
  - No hyphen (`cocrear`/`cocreamos`): `i18n/es/docusaurus-plugin-content-pages/index.tsx:586, 672`; `services/index.tsx:44`.
  - Hyphenated (`co-crear`/`co-creados`/`co-creen`): `i18n/es/docusaurus-plugin-content-pages/about/index.tsx:144`; `case-studies/afp-siembra.tsx:30, 69, 76`; `case-studies/ogtic-redlab.tsx:233`; `case-studies/index.tsx:99`; `i18n/es/docusaurus-plugin-content-docs/current/research-resources/innovation-lab-guide/05-the-innovation-lab.mdx:49`.
- Observation: RAE accepts both, but the site should not. Two batches of ES translation made opposite calls. On the homepage you read "cocreamos contigo el camino" (no hyphen) and one click later on About you read "7 laboratorios co-creados" (hyphen). Reads as two writers.
- Recommendation: Pick one. Recommend the unhyphenated form (`cocrear`, `cocreamos`, `cocreados`) — current RAE preference, shorter, and matches the modern Spanish-language LATAM business register. Add to the glossary file (COPY-102 handoff).
- Evidence: see locations above.

### COPY-106 — `Casos de estudio` vs `Casos de éxito` glossary drift in ES (P2)

- Severity: P2
- Impact: 2
- Effort: S
- Location:
  - `Casos de estudio` (literal "case studies"): `i18n/es/docusaurus-theme-classic/navbar.json:19`, `footer.json:23`; `i18n/es/docusaurus-plugin-content-docs/current/releases.mdx:114, 152, 160, 180, 258, 271, 378`; `i18n/es/docusaurus-plugin-content-pages/services/{custom-workshops,coaching-mentoring}.tsx:262/250`; `i18n/es/docusaurus-plugin-content-pages/index.tsx:293` (`<h2>Casos de Estudio</h2>`).
  - `Casos de éxito` (literal "success stories"): `i18n/es/docusaurus-plugin-content-pages/case-studies/fundapec.tsx:18` (BreadcrumbList schema), `:333` (button label).
- Observation: 23 instances of `Casos de estudio` across navbar, footer, h2s, links — vs 2 instances of `Casos de éxito` localized to a single case study (FUNDAPEC). The navbar/footer says one thing, the FUNDAPEC page's own breadcrumb and CTA say another. Beyond drift, `Casos de éxito` is a stronger LATAM marketing register (it asserts outcome; "estudio" sounds academic). Consider it a positioning choice, not just a copy fix.
- Recommendation: Either (a) standardize on `Casos de estudio` (matches navbar/footer, lower lift, less promissory), or (b) standardize on `Casos de éxito` (better LATAM marketing register, but requires updating navbar/footer/h2/URL-slug-equivalents). Recommend (a) for v1 — fewest edits, keeps the slug-equivalent stable — and migrate to (b) only as part of a coordinated positioning pass. Fix the two FUNDAPEC instances either way.
- Evidence: see locations above.

### COPY-107 — Spanish "Estudios de Futuro" generic label hides the Vigía Futura brand on ES homepage card (COPY-013 mirror) (P2)

- Severity: P2
- Impact: 3
- Effort: S
- Location: `i18n/es/docusaurus-plugin-content-pages/index.tsx:254` — `<h3>Estudios de Futuro</h3>` with body "Investigación y formación en prospectiva…" and CTA → `/vigia-futura`.
- Observation: Same defect flagged in COPY-013 (EN homepage hides "Vigía Futura" behind "Future Studies"). The ES card has the same gap with even less excuse: Vigía Futura is a Spanish-language brand, and the ES homepage is the surface where it should pop hardest. As-shipped, the ES reader sees a generic capability label and only learns the brand name after clicking.
- Recommendation: Replace `<h3>Estudios de Futuro</h3>` with `<h3>Vigía Futura, observatorio de prospectiva</h3>`. Mirror the change in EN per COPY-013.
- Evidence: `i18n/es/docusaurus-plugin-content-pages/index.tsx:252-260`.

### COPY-108 — Templated "we meet you where you are / cocreamos contigo el camino" still ships across pages in both locales (COPY-007 residual) (P2)

- Severity: P2
- Impact: 3
- Effort: M
- Location:
  - EN: `src/pages/index.tsx:671` ("We will meet you where you are and co-create the path forward."); `src/pages/services/index.tsx:44` ("we meet you where you are and co-create the path to outcomes."); `src/pages/work-with-us/index.tsx:186` ("We meet you where you are and build momentum quickly.").
  - ES: `i18n/es/docusaurus-plugin-content-pages/index.tsx:672` ("Te encontramos donde estás y cocreamos contigo el camino a seguir."); `services/index.tsx:44` ("te encontramos donde estás y cocreamos el camino hacia los resultados."); `work-with-us/index.tsx:186` ("Te encontramos donde estás y generamos impulso rápidamente.").
- Observation: COPY-007 successfully differentiated **headlines** across the site, but the **body** sentence is still the same templated AI-pattern construction in three places, mirrored verbatim in ES. "Te encontramos donde estás y cocreamos…" is the textbook AI-translation tell. The brief explicitly calls out this register as cliché.
- Recommendation: Rewrite each of the three body sentences with concrete, page-specific content. Examples:
  - Homepage: "Diagnosticamos en 15-20 minutos y entregamos un plan de 30/60/90 días la misma semana." / "We diagnose in 15-20 minutes and deliver a 30/60/90 plan the same week."
  - Services index: "Si no estás seguro de por dónde empezar, una llamada de 20 minutos ordena el alcance." / "If you're unsure where to start, a 20-minute call scopes the work."
  - Work with us: "Cada compromiso arranca con una compuerta de evidencia, no con un retainer abierto." / "Every engagement opens with an evidence gate, not an open-ended retainer."
- Evidence: see locations above.

### COPY-109 — Spanish hero `body` repeats "Obtendrás una línea base breve y un plan de 30, 60 y 90 días" without a unit (P3)

- Severity: P3
- Impact: 2
- Effort: S
- Location: `i18n/es/docusaurus-plugin-content-pages/index.tsx:596` — `description = 'Ayudamos a personas y organizaciones a hacer que la innovación sea repetible y la prospectiva práctica, para que la estrategia se convierta en resultados sostenibles. Obtendrás una línea base breve y un plan de 30, 60 y 90 días.'`
- Observation: "Plan de 30, 60 y 90 días" reads fine in isolation, but in ES the convention is `30/60/90 días` (slash form, used by every blog post and CTA on the same site, including `ctaNote="Obtén tu línea base en 15 a 20 minutos."` two lines down). The same site uses the slash form for `30/60/90` in 8+ ES locations (`book-clarityscan`, blog posts, FAQs) and the spelled-out comma form only in the homepage hero. Minor consistency, but the hero is the highest-traffic surface.
- Recommendation: Change to "Obtendrás una línea base breve y un plan de 30/60/90 días." Also worth binding the "línea base" promise to ClarityScan® in one breath, mirroring COPY-004's intent: "…Empieza con ClarityScan®, nuestro diagnóstico de 15-20 minutos que entrega una línea base y un plan de 30/60/90 días." Same fix on EN at `src/pages/index.tsx` (the description string that flows into hero body).
- Evidence: see location above.

### COPY-110 — `book-clarityscan` page title has trailing period in both locales (COPY-012 residual) (P3)

- Severity: P3
- Impact: 1
- Effort: S
- Location:
  - EN `src/pages/book-clarityscan.tsx:21` — `title="Book your ClarityScan®."`
  - ES `i18n/es/docusaurus-plugin-content-pages/book-clarityscan.tsx:21` — `title="Agenda tu ClarityScan®."`
- Observation: H1s on a Doulab page should not end in a period — that's a tone artifact from the Outlook redirect copy that COPY-012 partially cleaned up. Every other H1 on the site is period-less.
- Recommendation: Drop the trailing period from both titles.
- Evidence: see locations above.

### COPY-111 — Period-after-brand-mark pattern in ES `imageAlt` strings reads as fragment (P3)

- Severity: P3
- Impact: 1
- Effort: S
- Location:
  - `i18n/es/docusaurus-plugin-content-pages/index.tsx:419` — `alt="MicroCanvas Framework v2.2, canvases modulares para la innovación."`
  - `i18n/es/docusaurus-plugin-content-pages/about/index.tsx` (and others using `imageAlt`) — comma-as-colon pattern persists in ES alts (mirrors EN COPY-010).
- Observation: ES inherits the EN "Heading, supporting clause" comma pattern flagged in COPY-010 (prior pass). In ES, the convention is even clearer: use a colon (`:`) — em-dashes are banned by brand rule. Spanish readers parse `MicroCanvas Framework v2.2: canvases modulares…` as a single clean unit; the comma form reads as a list of two unrelated phrases.
- Recommendation: Sweep ES `imageAlt` and `<h3>` strings with the comma-after-noun pattern, replace `,` with `:`. Same recommendation for EN (handoff to 11 Blog & editorial for cross-doc consistency).
- Evidence: `i18n/es/docusaurus-plugin-content-pages/index.tsx:285` ("Notas, los conteos…"), `:275` ("Pruebas, en números"), `:203` ("Diagnósticos, sabe dónde estás parado"), `:218` ("Talleres, activa la acción alineada"), `:229` ("Programas, construye capacidad de innovación").

### COPY-112 — Zero em-dashes in user-facing copy — HARD RULE PASS (informational, not a finding) (P3)

- Severity: P3 (informational)
- Impact: n/a
- Effort: n/a
- Method: `Grep` for U+2014 across `src/pages/**`, `i18n/es/docusaurus-plugin-content-pages/**`, `blog/**`, `i18n/es/docusaurus-plugin-content-blog/**`.
- Result: All matches in `src/pages/` and `i18n/es/.../pages/` are in `{/* JSX comments */}` (e.g. `// Final CTA — shared component`). **Zero user-facing em-dashes** in either locale's pages.
- Blog posts contain em-dashes in user-facing copy:
  - EN `blog/2026-01-19-coordination-threshold.md:22` ("**TL;DR** — Many startup ecosystems…"), `:51, :55, :115, :140, :183, :185` and `tip[Diagram — …]` admonitions (7+ instances).
  - EN `blog/2025-09-12-clarityscan-decision-latency.md` (26 occurrences).
  - EN `blog/2025-09-22-vigia-futura-foresight-observatory.md` (4 occurrences).
  - ES `i18n/es/docusaurus-plugin-content-blog/2025-09-12-clarityscan-decision-latency.md` (5 occurrences, including `**TL;DR** —`).
  - ES `i18n/es/docusaurus-plugin-content-blog/2026-01-19-coordination-threshold.md:22` (1, the TL;DR).
- Recommendation: Hand off the blog em-dash sweep to **11 Blog & editorial** (out of scope for marketing copy role, but caller asked for every instance flagged). The `pages/` and `i18n/es/pages/` surfaces are clean.
- Evidence: see counts above.

### COPY-113 — Banned cliche audit — PASS for EN/ES marketing pages; partial fail in ILG docs (informational) (P3)

- Severity: P3 (informational)
- Impact: n/a
- Effort: n/a
- Method: `Grep` for EN cliches `transformative|leverage|synergy|world-class|best-in-class` across `src/pages/`; ES cliches `transformador|apalancar|sinergia|de clase mundial|el mejor (en|de) su clase` across `i18n/es/`.
- Result:
  - EN `src/pages/`: **zero matches**. Clean.
  - ES `i18n/es/docusaurus-plugin-content-pages/`: **zero matches**. Clean.
  - ES Innovation Lab Guide docs contain `transformador(a)` 7+ times in `04-foundations-innovation.mdx`, `06-mcf-operating-loop.mdx`, `11-references.mdx`. These are **legitimate uses** — they refer to the domain term **"Propósito Transformador"** (Massive Transformative Purpose / MTP), which is a defined methodology concept, not the banned business-speak adjective. No action.
- Recommendation: Add a glossary exception for `Propósito Transformador` / `Transformative Purpose` (proper noun in the MCF/IMM-P® methodology), so the cliche-word linter doesn't false-positive. Handoff to 11 Blog & editorial / 12 i18n.

### COPY-114 — ES `Cómo manejan los datos` FAQ mixes register (3rd-plural for the company vs `tú` elsewhere) (P3)

- Severity: P3
- Impact: 2
- Effort: S
- Location: `i18n/es/docusaurus-plugin-content-pages/services/innovation-maturity.tsx:110-116` — FAQ question: `'¿Cómo manejan los datos y la privacidad?'` with answer beginning "Solo analítica con privacidad primero. Tú eres dueño de tus datos…"
- Observation: The page is otherwise consistent in `tú` register for the reader. This FAQ flips to `ustedes` ("¿Cómo **manejan**…?" — implicit "ustedes" subject = the Doulab team). The answer immediately switches back to `tú` ("Tú eres dueño"). The mixed register is grammatically fine but breaks the conversational tone: the question reads as a third party asking Doulab, while every other FAQ on the page is posed by the reader to themselves.
- Recommendation: Recast as 1st-plural (Doulab-voiced) or 2nd-singular (reader-voiced). Recommend: `'¿Cómo manejamos los datos y la privacidad?'` — Doulab-as-author voice, matches "Operamos bajo NDAs mutuos" in the same answer body.
- Evidence: see location above.

### COPY-115 — ES `services/index.tsx:125` line `Construido sobre MCF v2.2 e IMM 2.2 (puntuación por dominio, preparación por fase)` uses inconsistent brand-mark style (P3)

- Severity: P3
- Impact: 1
- Effort: S
- Location: `i18n/es/docusaurus-plugin-content-pages/services/index.tsx:125`
- Observation: Same site, same locale, multiple variants of the same product-version string:
  - `MicroCanvas® v2.2` (e.g. `coaching-mentoring.tsx:98`)
  - `MicroCanvas® 2.2` (e.g. `custom-workshops.tsx:209`)
  - `MicroCanvas Framework v2.2` (homepage card, h3 + alt)
  - `MCF v2.2` (e.g. `vigia-futura/index.tsx:150`)
  - `MCF 2.2` (e.g. `services/index.tsx:125`, `about/index.tsx:53`)
  - `MicroCanvas® v2.2` vs `MicroCanvas Framework v2.2` (some with ®, some without)
- Recommendation: Pick one canonical short form (`MCF 2.2`) and one canonical long form (`MicroCanvas® Framework 2.2`). Drop `v` prefix in body copy (keep it for code/release-note contexts). Standardize ® placement (always after `MicroCanvas`, never after `MCF`). Mirror to EN. Add to glossary file.
- Evidence: greps above.

## Quick wins (≤ 1 day) — top 5

1. **COPY-103** — Fix the 4×2 = 8 `MicroCanvas® Framework 2.1` instances in EN+ES `innovation-readiness-workshop.tsx`. Add CI regex guard. ~20 minutes.
2. **COPY-110** — Drop trailing periods from `book-clarityscan` H1 in both locales. 5 minutes.
3. **COPY-107** — Replace `<h3>Estudios de Futuro</h3>` with `<h3>Vigía Futura, observatorio de prospectiva</h3>` (ES) + mirror in EN. 5 minutes.
4. **COPY-105** — Run `cocrear` vs `co-crear` unification pass in ES (pick one, ~10 instances). ~30 minutes.
5. **COPY-109** — Switch ES homepage hero `body` from "30, 60 y 90 días" to "30/60/90 días" for site-wide consistency. 5 minutes.

## Strategic bets (multi-week) — top 3

1. **COPY-102 + COPY-106 + COPY-115 → ES glossary**. Create `docs/ops/i18n-glossary.md` as the single source of truth for ES translations of methodology terms (Gate, Case study, MCF version, co-create, MTP exception). Migrate all ES surfaces to the canonical forms. Pair with a CI grep guard. Owners: this role + 12 i18n + 13 MCF/IMM-P domain.
2. **COPY-101 + COPY-104 → ES positioning layer**. Define the canonical ES tagline, ship it via `i18n/es/code.json`, and align ES JSON-LD `areaServed` to "Latin America + Caribbean" across all `Service` schemas. This is the single biggest brand-coherence move for the ES launch. Pairs with the still-open COPY-005/COPY-006 positioning decision from prior pass and 16 Sales & positioning.
3. **COPY-108 → AI-pattern phrase sweep, both locales**. Replace the templated "we meet you where you are / cocreamos contigo el camino" body sentences across 3 EN + 3 ES surfaces with page-specific, concrete copy. Pair with a banned-phrase regex guard so the pattern can't return. Editorial review across 11 Blog & editorial recommended.

## Out of scope / handoffs

- **11 Blog & editorial**: blog em-dash sweep (COPY-112); banned-phrase regex guard authorship; Propósito Transformador glossary exception (COPY-113).
- **12 i18n readiness**: ES glossary file authorship and parity enforcement (COPY-102, COPY-105, COPY-106, COPY-115); ES tagline override mechanism in `code.json` (COPY-101).
- **13 MCF / IMM-P® domain expert**: canonical ES term for `Gate` (COPY-102 — recommend `Compuerta` but defer to domain owner); MCF version-string canonicalization decision (COPY-103, COPY-115).
- **01 IA & UX strategist**: same as prior pass — progressive disclosure on `/services/innovation-maturity` is still relevant given new ES audience.
- **02 Brand & visual design**: ES tagline + voice decision (COPY-101).
- **04 Conversion**: COPY-110 microcopy intersects with booking flow.
- **05 SEO**: COPY-104 `areaServed` schema is also an SEO/regional-discovery issue.
- **16 Sales & positioning**: COPY-101/104 positioning decisions are sales-led.
- **17 Mobile-responsive / 19 Viewport matrix**: ES copy lengths run ~15-25% longer than EN; verify Hero/FinalCta/h3 wrapping at narrow viewports (e.g. "Vigía Futura, observatorio de prospectiva" vs "Future Studies").

## Open questions for Luis

1. **ES tagline (COPY-101)**: Confirm canonical ES tagline. Recommend "Innovación, prospectiva y entrega repetible para América Latina y el Caribe." Or keep the mission tagline and translate it once: "Desbloqueamos la prosperidad global ayudando a otros a crear mejores futuros." Pick one and apply via `i18n/es/code.json`.
2. **ES gate term (COPY-102)**: Confirm `Compuerta` as canonical ES translation of IMM-P® `Gate`. (Reserves `Punto de control` for ops monitoring.)
3. **Case study term (COPY-106)**: `Casos de estudio` (current navbar/footer) or `Casos de éxito` (FUNDAPEC)? Lean (a) for v1.
4. **areaServed (COPY-104)**: For the ES locale specifically, override `areaServed` to `['Latin America','Caribbean','Dominican Republic']`? For EN, hold pending the still-open COPY-005/006 positioning decision.
5. **MCF version style (COPY-115)**: Pick canonical short and long forms (recommend `MCF 2.2` + `MicroCanvas® Framework 2.2`, no `v` prefix in body copy) and extract to `src/constants/brand.ts`.
6. **Co-create spelling (COPY-105)**: `cocrear` (no hyphen, RAE-current) or `co-crear`?
