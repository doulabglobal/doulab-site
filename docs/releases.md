---
id: releases
title: Website Releases
sidebar_label: Releases
description: Release notes and major updates to the Doulab website
---

# Doulab Website Releases

This page tracks notable milestones and updates to the Doulab website.  
For daily development tasks, see the internal `CHECKLOG.md`.

---

## 2025-09-08 — v0.7

### Componentization & DX
- **New:** `FinalCta` shared component with typed CTAs:
  - Supports internal links (`to`) and external actions (`href`) with proper `aria-label`.
  - Used on: `/what-we-do`, `/contact`, and ready for site-wide reuse.
- **New:** `CaseStudyCards` shared component
  - Canonical order + consistent alt text/CTA labels.
  - Used on: `/case-studies` index and `/services/innovation-maturity` (“Related case studies”).
- **Fix:** Removed `isExternal` prop usage in pages; `FinalCta` now accepts either `to` **or** `href`.

### Naming & copy standards (site-wide)
- Standardized to **Innovation Maturity Model Program (IMM-P®)** (with ®) across pages.
- Standardized section title: **“Who it’s for?”** (question mark). Added where applicable (e.g., **What we do**).
- Removed the legacy **“Privacy & guardrails”** blocks from services; queued a dedicated **Privacy** page.

### Case studies — pages
- **Index:** `/case-studies/index.tsx`
  - Replaced manual cards with `<CaseStudyCards />`.
  - Section title typo fixed: **“How we measure progress”** (and added line referencing **IMM-P® gates: Discovery → Validation → Efficiency → Scale**).
- **Alpha Inversiones:** `/case-studies/alpha-inversiones.tsx`
  - Full content pass: context, work, outcomes; artifacts & cadence language aligned to IMM-P®.
- **FUNDAPEC:** `/case-studies/fundapec.tsx`
  - Deep rewrite reflecting **Track A → decision → Track B**.
  - Clear governance (Communications owns the no-code platform), evidence loops, simplified journeys.
  - Platform link added everywhere for **[Comunidad FUNDAPEC](https://comunidad.fundapec.edu.do)**.
  - Outcomes tightened with numbers: legacy 20k “registrations” → **4k validated members**; **515 active** (from ~10 a year ago); single-source-of-truth analytics.
  - Timeline included: Kick-off (Dec 2023) → Decision (Jun 2024) → Redesign & Build (Jul–Nov 2024) → Relaunch (Nov 2024) → Growth checkpoint (Sep 2025).
- **OGTIC / RedLab:** `/case-studies/ogtic-redlab.tsx`
  - Explicit link to **IMM-P®** as the cohort backbone; tightened program framing and outcomes.

### Services — pages
- **IMM-P®:** `/services/innovation-maturity.tsx`
  - Program name standardized: *Innovation Maturity Model Program (IMM-P®)*.
  - **Full program structure** added (Phases 01–05: Pre-Discovery; Discovery & Validation; Efficiency; Scaling; Continuous Improvement) with weekly themes, gates, and key deliverables.
  - Added **“Who it’s for?”** (Startups, Public Institutions, Private organizations, Incubators & Accelerators).
  - “Related case studies” now uses `<CaseStudyCards />`.
  - **FAQ block** re-added (common questions on timeline, gates, outcomes).
  - Final CTA standardized (can be migrated to `FinalCta` next pass if desired).
- **What we do:** `/what-we-do/index.tsx`
  - Hero/copy aligned to IMM-P® & MicroCanvas® 2.1.
  - Added **“Who it’s for?”** section (applies here).
  - Products & Programs, Numbers, Process rail refined; **FinalCta** component used.
- **ClarityScan:** `/services/clarityscan/index.tsx`
  - Mojibake cleaned (curly quotes, en dashes, ellipses).
  - Microcopy (“Built on MicroCanvas® v2.1 and IMM-P® gates.”) aligned and consistently placed.
  - Clear 30-minute flow; JSON-LD checked; consistent CTA labels.
- **Coaching & Mentoring:** `/services/coaching-mentoring.tsx`
  - Copy/A11y pass; “MCF v2.1 + IMM-P®” methods clarified; retainers detailed.
  - On-page FAQ + JSON-LD FAQ.
- **Custom Workshops:** `/services/custom-workshops.tsx`
  - Copy normalized (no mojibake), outcomes/formats clarified; “Built on MicroCanvas® + IMM-P®”.

### Core pages
- **Home:** `/index.tsx`
  - Consistency pass (head/meta, labels, CTAs). Sections aligned with latest prompt guidelines.
- **Case studies index:** see above (componentized).
- **Insights:** `/insights/index.tsx`
  - Structure validated; OG meta and A11y consistent with shared patterns.
- **About:** `/about/index.tsx`
  - **Link fixes:** “Coaching & mentoring” → `/services/coaching-mentoring`; “Workshops” → `/services/custom-workshops`.
  - Story/pillars aligned to IMM-P® naming; schema kept.
- **Contact:** `/contact/index.tsx`
  - Rewritten with privacy-first options; “What to expect” (gated path) mirrors IMM cadence.
  - Converted the final block to **`FinalCta`** (uses `href` mailto in `primaryCta`).

### Accessibility, SEO & performance
- Descriptive alts, `aria-labelledby` per section, decorative icons `aria-hidden`.
- Canonicals + `og:`/`twitter:card` updated or added where missing.
- Hero preloads use correct React props (`imageSrcSet`, `imageSizes`), explicit `width/height` on images for CLS.

### Fixes
- **Build error:** stray `<` removed from `/services/innovation-maturity.tsx` (Babel “Unexpected token”).
- **Module not found:** created `src/components/case-studies/CaseStudyCards.tsx` and fixed imports.
- **Encoding:** removed stray mojibake sequences across services pages.

### Known follow-ups
- Add a dedicated **Privacy** page (we removed “Privacy & guardrails” blocks).
- Migrate remaining manual page CTAs to **`FinalCta`** where appropriate.
- Mirror the **“Who it’s for?”** section on other service pages **only where it adds clarity**.

## 2025-09-04

### Insights
- Standardized page structure and hero copy.
- Highlights now includes the pinned MicroCanvas card and the top 3 whitepapers (from docs, tag `whitepaper`).
- Added a separate “From the Blog” section (client-only RSS with `no-store`).
- Updated OG image to a dedicated card: `/img/social/og-insights.jpg`.
- A11y: descriptive alts, explicit width/height, and proper `aria-labelledby` across sections.

### Case Studies
- New/rewritten: `/case-studies/afp-siembra`
  - Standardized two-column hero and canonical/OG meta.
  - Sections: Context → What We Did → Timeline → Outcomes → Highlights (qualitative) → Final CTA.
  - Added “System: MCF + IMM-P” callout with internal links.

### Docs
- Expanded: `MicroCanvas Framework (v2.1)` → `/docs/research-resources/microcanvas`
  - Clear link to https://themicrocanvas.com
  - Added description, getting-started tips, and related references (IMM-P).

### IMM-P standardization
- Adopted “Innovation Maturity Model — Program (IMM-P)” across primary pages:
  - Case Studies index (description + hero subtitle).
  - AFP Siembra case (system callout).
  - Services: Coaching & Mentoring, Custom Workshops, Innovation Maturity (hero, copy, CTAs).
  - Contact: “Quick baseline (MCF 2.1 + IMM-P)”.
  - About: story text and pillars (clean UTF-8, no mojibake).

### Services (copy + A11y)
- ClarityScan: cleaned hero and CTAs; JSON-LD updated; arrows/dashes standardized.
- Innovation Maturity: renamed to IMM-P; hero/body rewritten; CTAs standardized.
- Coaching & Mentoring: copy cleaned; “MicroCanvas v2.1 + IMM-P”; retainers clarified.
- Custom Workshops: copy cleaned; “MicroCanvas + IMM-P”; formats/outcomes clarified.

### Contact
- Rewrote page with privacy-first options and a gated “What to expect”.
- Updated baseline to “MCF 2.1 + IMM-P”.

### Assets & Tech
- Added `/img/social/og-insights.jpg` (derived from Insights hero) for consistent social previews.
- Typecheck passes. Dev build validated in a fresh out-dir. On Windows + synced folders, clear `.docusaurus` and restart dev server if you hit EBUSY.

### Known follow-ups
- Homepage still contains minor mojibake/legacy labels in a few microcopy lines (e.g., “ClarityScan®”). Scheduled for next sweep.

## 2025-09-01

#### v0.5.0 — Blog launch, narrative intro, Research+Resources aggregator, dark mode, build hardening

**Content & IA**
- **Blog launched** with RSS at `/blog/rss.xml`, author metadata, and avatar (`/img/authors/luis.jpg`).
- **Intro post fully rewritten** as a narrative (“Introducing Doulab: innovation made repeatable”):
  - Integrates the homepage **Problem** and **Solution** content as scannable card grids.
  - Brings in **Doulab’s purpose** from About (“help unlock global prosperity by helping others create better futures”).
  - Keeps all CTAs, A11y attributes, and internal routes; quotes & punctuation normalized to UTF-8.
  - Frontmatter title quoted to fix YAML colon parsing (`title: "Introducing Doulab: …"`).
- **Home → Research + Resources** now shows:
  1) **MicroCanvas Framework v2.1** (fixed first card)  
  2) **Top 3 latest whitepapers** from Docs (`tag: whitepaper`)  
  3) **Top 3 latest blog posts** via local RSS (client-only parsing).  
- **About**: canonical link, accessibility polish, hero preload fix, and stable `#service-pillars` anchor.
- **Vigía Futura**: full page with hero preload (React camelCase `imageSrcSet/imageSizes`), in-page subnav via `IntersectionObserver`, and consistent cards/CTAs.

**Design & UX**
- **Dark-mode polish**: finalized edges and tokens across pages/components.
- Card and CTA consistency across services/observatory pages; shared styles + A11y passes.

**Components**
- **`WhitepaperCards.tsx`**: fixed JSX/closing tags and typing; stable 3-up layout.

**Blog taxonomy & previews**
- **Tags defined** in `tags.yml` for the intro post to remove warnings.
- **Truncation marker** added to intro post for cleaner previews on paginated lists.

**Build & Tooling**
- **React dedupe fix** for “A React Element from an older version…” by pinning a single runtime:
  - `react@18.2.0`, `react-dom@18.2.0`, `scheduler@0.23.0` (via `overrides`).
- **Encoding/BOM fixes**
  - Rewrote `package.json` as UTF-8 **no BOM** (resolved webpack/Docusaurus JSON parse error).
  - Normalized blog/source files to UTF-8 (fixed mojibake like `â€™`).
- **Husky v10-safe hooks (LF + no BOM)**
  - `pre-commit`: `npm run typecheck`
  - `pre-push`: `npm run verify` (typecheck + build + blog/anchors checks)
  - Removed deprecated `husky.sh` sourcing; Git executable bit set; `.gitattributes` forces LF for hooks.
- **Package scripts** added:
  - `typecheck`, `verify`, `check:blog` (RSS fetch), `check:anchors` (Docusaurus broken anchors), plus clean/fix helpers.
- **Cloudflare build fix**
  - CI-safe Husky setup so **Cloudflare Pages** doesn’t fail on `prepare`; build now passes end-to-end.
- **Node engines** relaxed to `20.x` to match Cloudflare (avoids EBADENGINE locally).

**Repo hygiene**
- **Visual Studio artifacts** untracked and ignored: added `.gitignore` rules; cleaned `.vs/` from history.
- Added `package-lock.json` to lock dependency graph.

**Infra / Headers**
- Kept `_headers` rules for RSS (no-store) and tightened CSP; long-cache for `/assets/*` & `/img/*`.

**Known items / Next**
- Validate “Research + Resources” **Top 3 blog posts** card list against RSS in production (if not already confirmed).
- If any page still links `/about#service-pillars` and that anchor changes, update the source page accordingly.

---

## 2025-08-29

#### v0.4 — Legacy Recovery & Services refresh
- Recovered project from Dropbox snapshot
- Pinned Node runtime to 20.16.0 for Cloudflare
- Clean dependency reinstall & build
- Preserved internal `CHECKLOG.md`

#### v0.4 — Service pages, About timeline, Insights RSS
- **Footer**: fixed “Connect” routes and standardized labels.
- **Insights**: auto-lists latest whitepapers (docs tag=whitepaper) and 3 latest blog posts via local RSS; added CTAs.
- **Headers/CSP**: added `/blog/rss.xml` rule (no-store) and tightened security headers; long-cache for `/assets/*` & `/img/*`.
- **Homepage**: restored card hover border/raise; centered sections; “The Problem” horizontal reel.
- **About**: timeline grouped by year; accessibility & copy polish.
- **Services**: index + ClarityScan + Custom Workshops (IMM/MCF-aligned agendas) + Innovation Maturity + Coaching & Mentoring + Diagnostics — all migrated to shared styles and standardized CTAs.
- **Vigía Futura**: sectioned with subnav; accessible, consistent cards.
- **Research & Resources**: MDX-safe `.md` with featured whitepaper, frameworks, authoring tips, and final CTA.

---

## 2025-08-28

#### v0.3 — Performance & A11y
- Optimized hero LCP: preload + next-gen sources with PNG fallback
- Added explicit width/height to reduce CLS
- Improved link/button contrast for AA
- Fixed docs data typing for Latest Whitepapers section

#### v0.2 — Privacy & Infra Cleanup
- Removed all GTM/GA/Consent Mode code (Root.tsx, ConsentBanner.tsx, config)
- Enabled Cloudflare Web Analytics auto-injection (manual beacon removed)
- Pinned build environment to Node 20.16.0 in Cloudflare Pages
- Purged Cloudflare cache and redeployed production

#### IA Scaffold
- Navbar aligned to target IA: Home, What we do, Case Studies, Insights, About, Contact.
- New top-level pages scaffolded:
  - **What we do**: products/programs, proof placeholder, next steps.
  - **Case Studies**: featured projects, IMM gate references.
  - **Insights**: research highlights, links to Research & Resources + Releases.
  - **Contact**: email CTA, IMM journey outline, future form placeholder.
- About page improved with canonical tag for SEO.

#### Homepage CSS consolidation & “The Problem” reel
- Consolidated homepage styles into `src/css/custom.css`; removed `src/pages/index.module.css`.
- Restored centered `.section` wrapper and consistent 3-up `.cardGrid` across sections.
- Reinstated card hover effect (lift + highlighted border).
- “The Problem” now uses a horizontal **card reel** (scroll-snap, touch-friendly) to showcase issues.
- Kept privacy posture intact: Cloudflare Web Analytics auto-injection only; no Google tags.
- LCP image preload + `<picture>` (AVIF/WebP/PNG) unchanged and validated.

#### Homepage enhancements (carousel, proof, cases)
- “The Problem” now a horizontal carousel with accessible controls and reduced-motion friendly behavior.
- Added Proof / Numbers strip (3 KPIs) and a Case Studies teaser (AFP Siembra, FUNDAPEC).
- Standardized `data-cta` attributes for future Zaraz custom events.
- Upgraded homepage meta title to emphasize value proposition.
- Maintains privacy posture (Cloudflare Analytics only) and LCP image preload.

## 2025-08-27

#### v0.1 — Cloudflare Migration
- Migrated hosting from GitHub Pages to Cloudflare Pages
- Replaced Google Analytics with Cloudflare Web Analytics
- Updated README.md with new workflow & status checklist
- Established public release notes under `/docs/releases`
