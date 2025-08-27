---
id: releases
title: Website Releases
sidebar_label: Releases
description: Release notes and major updates to the Doulab website
---

# 🚀 Doulab Website Releases

This page tracks notable milestones and updates to the Doulab website.  
For daily development tasks, see the internal `CHECKLOG.md`.

---

## 2025-08-28 — v0.2 Privacy & Infra Cleanup
- Removed all GTM/GA/Consent Mode code (Root.tsx, ConsentBanner.tsx, config)
- Enabled Cloudflare Web Analytics auto-injection (manual beacon removed)
- Pinned build environment to Node 20.16.0 in Cloudflare Pages
- Purged Cloudflare cache and redeployed production

## 2025-08-27 — v0.1 Cloudflare Migration
- Migrated hosting from GitHub Pages to Cloudflare Pages
- Added staging environment: https://staging.doulab.net
- Replaced Google Analytics with Cloudflare Web Analytics
- Updated README.md with new workflow & status checklist
- Established public release notes under `/docs/releases`

## 2025-08-27 — v0.0 Legacy Recovery
- Recovered project from Dropbox snapshot
- Downgraded Node runtime to 20.16.0 via NVM
- Clean reinstallation of dependencies and local build verified
- Preserved internal `CHECKLOG.md` for daily task logging
## 2025-08-28 — v0.3 Performance & A11y
- Optimized hero LCP: preload + next-gen sources with PNG fallback
- Added explicit width/height to reduce CLS
- Improved link/button contrast for AA
- Fixed docs data typing for Latest Whitepapers section
## 2025-08-28 — IA Scaffold

- Navbar aligned to target IA: Home, What we do, Case Studies, Insights, About, Contact.
- New top-level pages scaffolded:
  - **What we do**: products/programs, proof placeholder, next steps.
  - **Case Studies**: featured projects, IMM gate references.
  - **Insights**: research highlights, links to Research & Resources + Releases.
  - **Contact**: email CTA, IMM journey outline, future form placeholder.
- About page improved with canonical tag for SEO.

