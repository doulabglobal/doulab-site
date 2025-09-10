---
id: releases
title: Website Releases
sidebar_label: Releases
description: Release notes and major updates to the Doulab website.
---

# Doulab Website Releases

This page tracks notable milestones and updates to the Doulab website.  
For daily development tasks, see the internal `CHECKLOG.md`.

---

## 2025-09-08 — v0.7

### Highlights
- New shared **FinalCta** component used across key pages.
- Case study pages fully refreshed and aligned to **MCF 2.1** + **IMM-P®**.
- Mermaid diagrams **enabled & themed** across Docs.
- **Research & Resources** hub updated, including a full whitepaper with diagrams.

### Componentization & DX
- **New:** `FinalCta` (typed)  
  - Accepts **either** `to` (internal) **or** `href` (external) with optional `aria-label`.  
  - Adopted on: `/what-we-do`, `/contact` (ready for wider reuse).
- **New:** `CaseStudyCards`  
  - Canonical order, consistent alt text, and CTA labels.  
  - Used on: `/case-studies` index and `/services/innovation-maturity` (“Related case studies”).
- **Prop cleanup:** Removed lingering `isExternal`; `FinalCta` now handles link types.

### Naming & copy standards (site-wide)
- Standardized to **Innovation Maturity Model Program (IMM-P®)** with the ® mark.
- Section title normalized to **“Who it’s for?”** (question form) where relevant.
- Removed scattered “Privacy & guardrails” snippets; dedicated **Privacy** page scheduled.

### Case studies — pages
- **Index:** `/case-studies/index.tsx`  
  - Replaced manual cards with `<CaseStudyCards />`.  
  - Fixed heading (**“How we measure progress”**) and added line referencing **IMM-P® gates: Discovery → Validation → Efficiency → Scale**.
- **AFP Siembra:** `/case-studies/afp-siembra.tsx`  
  - Standardized hero/metadata; added timeline; clarified “evidence packs” and governance language.
- **Alpha Inversiones:** `/case-studies/alpha-inversiones.tsx`  
  - Full content pass; clarified **Alpha Escalable** program and **Alpha en Línea** outcomes; governance + cadence tightened.
- **FUNDAPEC:** `/case-studies/fundapec.tsx`  
  - Deep rewrite to reflect **Track A (new business models) → decision → Track B (platform redesign)**.  
  - Clear governance (Communications owns no-code), evidence loops, simplified journeys.  
  - Outcomes with numbers: legacy ~20k “registrations” → **4k validated members**; **515 active** (from ~10 a year ago).  
  - Timeline: Kick-off (Dec 2023) → Decision (Jun 2024) → Build (Jul–Nov 2024) → Relaunch (Nov 2024) → Growth checkpoint (Sep 2025).
- **OGTIC / RedLab:** `/case-studies/ogtic-redlab.tsx`  
  - Explicit reference to **MCF 2.1** as shared method and **IMM-P®** as cohort backbone; outcomes reframed around capability uplift.

### Services — pages
- **IMM-P®:** `/services/innovation-maturity.tsx`  
  - Program name standardized.  
  - Added full program structure (Phases 01–05: Pre-Discovery → Discovery & Validation → Efficiency → Scaling → Continuous Improvement) with themes, gates, and deliverables.  
  - Added **“Who it’s for?”**; “Related case studies” uses `<CaseStudyCards />`.  
  - FAQ restored and polished.
- **What we do:** `/what-we-do/index.tsx`  
  - Hero/copy aligned to **MCF 2.1** + **IMM-P®**.  
  - Added **“Who it’s for?”**; refined Products & Programs, Numbers, Process rail; standardized `FinalCta`.
- **ClarityScan:** `/services/clarityscan/index.tsx`  
  - Normalized punctuation (UTF-8 quotes/en dashes); clarified 30-minute flow; JSON-LD validated.  
  - Microcopy aligned: “Built on MicroCanvas® v2.1 and IMM-P® gates.”
- **Coaching & Mentoring:** `/services/coaching-mentoring.tsx`  
  - Copy/A11y pass; clarified methods (MCF v2.1 + IMM-P®); packaged retainers.  
  - In-page FAQ + JSON-LD FAQ.
- **Custom Workshops:** `/services/custom-workshops.tsx`  
  - Outcomes/formats clarified; consistently references **MicroCanvas® + IMM-P®**.

### Core pages
- **Home:** `/index.tsx`  
  - Consistency pass (head/meta, labels, CTAs).  
  - **Research + Resources** strip: fixed “Latest from the blog” card styling; added “Latest from our research” card.
- **Insights:** `/insights/index.tsx`  
  - **Highlights order:** MicroCanvas (pinned) → latest **Blog** (top 3 via RSS) → latest **Whitepapers** (docs tag `whitepaper`, top 3).  
  - Dedicated “From the Blog” grid + “View all blog posts” CTA.  
  - OG meta and A11y consistent with shared patterns.
- **About:** `/about/index.tsx`  
  - Corrected links: **Coaching & mentoring** → `/services/coaching-mentoring`; **Workshops** → `/services/custom-workshops`.  
  - Story/pillars aligned to **IMM-P®** naming; JSON-LD intact.
- **Contact:** `/contact/index.tsx`  
  - Converted hero to shared `Hero` component with **contact-hero** sources and valid `fetchPriority`.  
  - Privacy-first options and a gated “What to expect” (mirrors IMM cadence).  
  - Final block uses **`FinalCta`** (mailto in `primaryCta`).

### Docs & whitepapers
- **Mermaid enabled and themed:**  
  - `markdown.mermaid: true` + `@docusaurus/theme-mermaid` added.  
  - Moved runtime options to `themeConfig.mermaid.options` (valid schema), removed unsupported `securityLevel`.  
  - Increased diagram font sizes, brand-aware colors, and improved contrast.  
- **Research & Resources hub:** `/docs/research-resources/index.md`  
  - Featured **Distributed Federated Agentic AI**; Frameworks list updated (MCF v2.1, IMM-P®).  
  - Clear authoring tips (use `tags: ['whitepaper']`, date-prefix sorting).  
- **Whitepaper:** `/docs/research-resources/distributed-federated-agentic-ai.md`  
  - Full editorial pass; **admonition-wrapped Mermaid** diagrams (architecture, design principles mindmap, interaction sequence, risk register).  
  - Added **reference-module interaction** section and explicit alignment to **MCF 2.1** + **IMM-P®** (project blueprint, not just technical).  
  - References section expanded (W3C DID/VC, NIST AI-RMF, ISO/IEC 42001, EU AI Act, RFC 9380, WebAuthn).

### Accessibility, SEO & performance
- Descriptive `alt` text and `aria-labelledby` per section; decorative icons `aria-hidden`.
- Canonicals + `og:`/`twitter:card` audited and added where missing.
- Hero preloads: correct React props (`imageSrcSet`, `imageSizes`) and explicit `width/height` for CLS.

### Infrastructure & config
- **Docusaurus config:**  
  - Enabled Mermaid; added theme; moved options under `themeConfig.mermaid.options`; removed unsupported `securityLevel` key.  
  - Footer “More” group now includes **RSS (XML)** and **Atom (XML)** links explicitly.
- **Headers/CSP:**  
  - Removed comment lines from `_headers` (Cloudflare parser error).  
  - CSP remains strict (`default-src 'self'`; only Cloudflare Insights allowed for scripts; long-cache for `/assets/*` & `/img/*`).

### Fixes
- Build: removed stray `<` from `/services/innovation-maturity.tsx` (Babel parse error).
- Module not found: added `src/components/case-studies/CaseStudyCards.tsx` and fixed imports.
- Encoding: removed mojibake sequences across services pages.
- Contact hero: fixed `fetchPriority` (React prop name), corrected file base names.

### Known follow-ups
- Add dedicated **Privacy** page (replaces on-page “Privacy & guardrails” notes).  
- Migrate remaining manual page CTAs to **`FinalCta`** where practical.  
- Consider **Status/Uptime** and **Changelog RSS** if we start publishing infra updates.

---

## 2025-09-04

### Insights
- Standardized page structure and hero copy.  
- Highlights include pinned MicroCanvas card and the top 3 whitepapers (from docs, tag `whitepaper`).  
- Separate “From the Blog” section (client-only RSS with `no-store`).  
- Updated OG image: `/img/social/og-insights.jpg`.  
- A11y: descriptive alts, explicit width/height, and proper `aria-labelledby`.

### Case Studies
- New/rewritten: `/case-studies/afp-siembra`  
  - Standardized two-column hero and canonical/OG meta.  
  - Sections: Context → What We Did → Timeline → Outcomes → Highlights → Final CTA.  
  - Added “System: MCF + IMM-P” callout with internal links.

### Docs
- Expanded: **MicroCanvas Framework (v2.1)** → `/docs/research-resources/microcanvas`  
  - Clear link to https://themicrocanvas.com  
  - Getting-started tips and related references (IMM-P).

### IMM-P standardization
- Adopted “Innovation Maturity Model — Program (IMM-P)” across primary pages:  
  - Case Studies index (description + hero subtitle).  
  - AFP Siembra case (system callout).  
  - Services: Coaching & Mentoring, Custom Workshops, Innovation Maturity.  
  - Contact: “Quick baseline (MCF 2.1 + IMM-P)”.  
  - About: story text and pillars (clean UTF-8).

### Services (copy + A11y)
- ClarityScan: cleaned hero and CTAs; JSON-LD updated; punctuation standardized.  
- Innovation Maturity: renamed to IMM-P; hero/body rewritten; CTAs standardized.  
- Coaching & Mentoring: copy cleaned; “MCF v2.1 + IMM-P”; retainers clarified.  
- Custom Workshops: copy cleaned; “MicroCanvas + IMM-P”; formats/outcomes clarified.

### Contact
- Rewrote page with privacy-first options and a gated “What to expect”.  
- Updated baseline to “MCF 2.1 + IMM-P”.

### Assets & Tech
- Added `/img/social/og-insights.jpg` for consistent social previews.  
- Typecheck passes. If Windows/Dropbox locking occurs, clear `.docusaurus` and restart dev server.

### Known follow-ups
- Validate “Research & Resources” **Top 3 blog posts** card list against RSS in production.

---

## 2025-09-01

### v0.5.0 — Blog launch, narrative intro, Research & Resources aggregator, dark mode, build hardening

**Content & IA**
- **Blog launched** with RSS at `/blog/rss.xml`, author metadata, and avatar (`/img/authors/luis.jpg`).  
- **Intro post rewritten** (“Introducing Doulab: innovation made repeatable”): narrative structure; scannable cards; CTAs and internal routes preserved; UTF-8 punctuation.  
- **Home → Research & Resources** now shows:  
  1) **MicroCanvas Framework v2.1** (pinned first)  
  2) **Top 3 latest whitepapers** (docs tag `whitepaper`)  
  3) **Top 3 latest blog posts** (client RSS).  
- **About:** canonical link, accessibility polish, hero preload fix, stable `#service-pillars` anchor.  
- **Vigía Futura:** full page with hero preload (`imageSrcSet`/`imageSizes`), in-page subnav via `IntersectionObserver`, consistent cards/CTAs.

**Design & UX**
- Dark-mode polish across components; shared styles + A11y pass.

**Components**
- `WhitepaperCards.tsx`: fixed JSX, typing, and 3-up layout.

**Blog taxonomy & previews**
- `tags.yml` defined; truncation marker added to intro post.

**Build & Tooling**
- React dedupe: pinned single runtime (`react@18.2.0`, `react-dom@18.2.0`, `scheduler@0.23.0`).  
- Encoding/BOM fixes; normalized sources to UTF-8.  
- Husky v10 hooks: `pre-commit` = `npm run typecheck`, `pre-push` = `npm run verify`.  
- Scripts: `typecheck`, `verify`, `check:blog`, `check:anchors`, plus clean/fix helpers.  
- Cloudflare build fix: CI-safe Husky; build passes end-to-end.  
- Node engines relaxed to `20.x` for Cloudflare.

**Repo hygiene**
- Ignored `.vs/`; added `package-lock.json`.

**Infra / Headers**
- `_headers` rules for RSS (no-store) and tightened CSP; long-cache for `/assets/*` and `/img/*`.

**Next**
- Minor homepage microcopy still queued for cleanup.

---

## 2025-08-29

### v0.4 — Legacy recovery & Services refresh
- Recovered project from Dropbox snapshot; pinned Node runtime to 20.16.0 for Cloudflare.  
- Clean dependency reinstall & build; preserved internal `CHECKLOG.md`.

### v0.4 — Service pages, About timeline, Insights RSS
- **Footer:** fixed “Connect” routes and labels.  
- **Insights:** auto-lists latest whitepapers (tag `whitepaper`) and 3 latest blog posts (local RSS); added CTAs.  
- **Headers/CSP:** added `/blog/rss.xml` rule (no-store) and tightened security headers; long-cache for `/assets/*` & `/img/*`.  
- **Homepage:** restored card hover raise; centered sections; “The Problem” horizontal reel.  
- **About:** timeline grouped by year; A11y & copy polish.  
- **Services:** index + ClarityScan + Custom Workshops + Innovation Maturity + Coaching & Mentoring + Diagnostics — migrated to shared styles.  
- **Vigía Futura:** sectioned with subnav; accessible, consistent cards.  
- **Research & Resources:** MDX-safe `.md` with featured whitepaper, frameworks, and final CTA.

---

## 2025-08-28

### v0.3 — Performance & A11y
- Optimized hero LCP (preload + AVIF/WebP fallbacks).  
- Added explicit width/height for CLS.  
- Improved link/button contrast for AA.  
- Fixed docs data typing for Latest Whitepapers.

### v0.2 — Privacy & infra cleanup
- Removed all GTM/GA code; Cloudflare Web Analytics only.  
- Pinned build environment to Node 20.16.0; cache purge + redeploy.

### IA scaffold
- Navbar aligned to target IA: Home, What we do, Case Studies, Insights, About, Contact.  
- New pages scaffolded and standardized: What we do, Case Studies, Insights, Contact.  
- About: canonical + A11y polish.

### Homepage CSS consolidation & “The Problem” reel
- Consolidated styles to `src/css/custom.css`; restored centered `.section` wrapper; consistent 3-up `.cardGrid`.  
- Lifted card hover effect; scroll-snap reel for “The Problem”.

### Homepage enhancements
- Carousel controls, reduced-motion friendly; Proof/Numbers strip; Case Studies teaser.  
- Standardized `data-cta`; improved meta title; LCP image preload validated.

---

## 2025-08-27

### v0.1 — Cloudflare migration
- Migrated hosting to **Cloudflare Pages**.  
- Replaced Google Analytics with **Cloudflare Web Analytics**.  
- Updated README with workflow & status checklist.  
- Established public release notes under **/docs/releases**.
