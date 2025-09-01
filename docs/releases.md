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

#### v0.5.0 — Blog launch, Research+Resources aggregator, dark mode, build hardening
**Content & IA**
- **Blog launched** with RSS at `/blog/rss.xml`, author metadata, and avatars (`/img/authors/luis.jpg`).  
- **Home > Research + Resources** now shows:
  1) **MicroCanvas Framework v2.1** (fixed first card)  
  2) **Top 3 latest whitepapers** from Docs (`tag: whitepaper`)  
  3) **Top 3 latest blog posts** via the local RSS (safe client-only parsing; production test pending).
- **About**: canonical link, accessibility polish, hero preload fix, and stable `#service-pillars` anchor.
- **Vigía Futura**: full page with hero preload (camel-cased `imageSrcSet/imageSizes`), subnav with IntersectionObserver, cards, and CTAs.

**Design & UX**
- **Dark-mode polish**: remaining edges refined across pages/components.
- Card and CTA consistency in service/observatory pages; shared tokens + accessibility passes.

**Components**
- **`WhitepaperCards.tsx`**: fixed JSX/closing tags and typing; stable 3-up layout.

**Build & Tooling**
- **React dedupe fix** for “A React Element from an older version…” by pinning single React runtime:
  - `react@18.2.0`, `react-dom@18.2.0`, `scheduler@0.23.0` (via `overrides`).
- **Node engines** relaxed to `20.x` to match Cloudflare (avoids EBADENGINE locally).
- **Husky hooks** (LF + no BOM, v10-safe):
  - `pre-commit`: `npm run typecheck`
  - `pre-push`: `npm run verify` (typecheck + build + blog/anchors checks)
- **Package scripts** added:
  - `typecheck`, `verify`, `check:blog` (fetch `/blog/rss.xml`), `check:anchors` (Docusaurus broken anchors), plus clean/fix helpers.
- **Encoding/BOM fixes**:
  - Rewrote `package.json` as UTF-8 **no BOM** (resolved webpack/docusaurus JSON parse error).
  - Husky scripts stored LF/no-BOM to avoid shebang issues on Windows + Git Bash.
- **Docs frontmatter fix**: removed duplicate `tags:` key in `distributed-federated-agentic-ai.md` (YAML parse error).

**Infra / Headers**
- Keep `_headers` rules for RSS (no-store) and tightened CSP; long-cache for `/assets/*` & `/img/*`.

**Known items / Next**
- **Production validation**: confirm Home “Research + Resources” pulls **Top 3 blog posts** via RSS on Cloudflare.  
- Blog taxonomy: define new tags in `tags.yml` to remove warnings.  
- Fix upstream page linking to `/about#service-pillars` if it ever changes.

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
