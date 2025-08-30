---
id: releases
title: Website Releases
sidebar_label: Releases
description: Release notes and major updates to the Doulab website
---

# Doulab Website Releases

This page tracks notable milestones and updates to the Doulab website.  
For daily development tasks, see the internal `checklog.md`.

---

## 2025-08-30 — v0.4.1 “Foresight Polish + Blog Launch”

**Highlights**
- Blog launched (author: **Luis Santiago**) with inaugural post.
- Canonical in-page subnav, dark-mode pass, and footer brand colors completed.
- Build reliability fixes (RSS/Sitemap links, TS/JSX config).

### New
- **Blog**
  - `blog/authors.yml` → Luis Santiago (title: Head Coach & Mentor).
  - Post: **Introducing Doulab, innovation made repeatable** (`2025-08-30-introducing-doulab.md`), buttons use global styles.
- **Work with Us**
  - Migrated from page CSS module to global utilities (`custom.css`), hero image preload added, a11y pass.

### Improved
- **Build & Routing**
  - Footer `RSS` and `Sitemap` now use `href` (external-style) => broken-link checker passes.
  - Removed duplicate `/contact` (kept `src/pages/contact/index.tsx`).
  - Removed BOM from `package.json`; pinned `engines.node` to **^22**; CF Pages set to Node 22.x.

- **TypeScript / DX**
  - Resolved JSX namespace errors via `tsconfig.json` (`jsx: "react-jsx"`, libs/types).
  - Corrected `<link rel="preload">` attribute casing (`imageSrcSet`, `imageSizes`).

- **Global UI/UX**
  - Canonical **.subnav** (About + Vigía Futura); active/hover use Doulab purple in light/dark.
  - **Dark mode**: secondary buttons transparent with **white** text; card/process-step/doc-card surfaces fixed; `.sectionLead`/`.heroText` and card/step paragraphs lightened; final CTAs transparent and high-contrast.
  - **Footer**: background set to Doulab purple (light + dark). Navbar hover/active unified.

- **Pages**
  - **About**: fixed anchor to `/what-we-do#service-pillars`, content polish.
  - **Vigía Futura**: canonical `.subnav`, correct hero preload attrs, copy tightened.
  - **Insights**: latest whitepapers (tag=whitepaper) + 3 latest posts from `/blog/rss.xml` render.

### Pending
- Replace author avatar with **Luis Santiago** headshot; add LinkedIn on author page.
- Write post: **“Why MCF + IMM > frameworks-in-a-binder.”**
- Review About page “In plain English” callouts for any remaining repetition.

---

## 2025-08-29 — v0.4 — Service pages, About timeline, Insights RSS

- **Footer**: fixed “Connect” routes and standardized labels.
- **Insights**: auto-lists latest whitepapers (docs tag=whitepaper) and 3 latest blog posts via local RSS; added CTAs.
- **Headers/CSP**: added `/blog/rss.xml` rule (no-store) and tightened security headers; long-cache for `/assets/*` & `/img/*`.
- **Homepage**: restored card hover border/raise; centered sections; “The Problem” horizontal reel.
- **About**: timeline grouped by year; accessibility & copy polish.
- **Services**: index + ClarityScan + Custom Workshops (IMM/MCF-aligned agendas) + Innovation Maturity + Coaching & Mentoring + Diagnostics — all migrated to shared styles and standardized CTAs.
- **Vigía Futura**: sectioned with subnav; accessible, consistent cards.
- **Research & Resources**: MDX-safe `.md` with featured whitepaper, frameworks, authoring tips, and final CTA.

## 2025-08-28 — v0.3 — Performance & A11y
- Optimized hero LCP (preload + next-gen sources + explicit dimensions), improved contrast, fixed docs typing.

## 2025-08-27 — v0.2 — Privacy & Infra Cleanup
- Removed GTM/GA/Consent Mode; enabled Cloudflare Web Analytics auto-injection; set CF Pages; purged cache.

## 2025-08-27 — v0.1 — Cloudflare Migration
- Migrated hosting to Cloudflare Pages; updated README; established public release notes under `/docs/releases`.
