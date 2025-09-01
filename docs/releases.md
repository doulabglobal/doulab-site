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
