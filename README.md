# Doulab Website

This repository contains the source code for the Doulab website, built with Docusaurus 3 and deployed on Cloudflare Pages. The site follows a privacy-first approach (Cloudflare Web Analytics only) and a clear content model (MCF + IMM-P).

## Environments
- Production: https://doulab.net

## Requirements
- Node 20.x (use nvm on Windows/macOS)

## Install
```bash
npm ci
```

## Local Development
```bash
npm run start
```
Opens the dev server with hot reload.

## Build & Preview
```bash
npm run build
npm run serve
```
Outputs to `build/` and serves locally for verification.

## Privacy
- No GA/GTM. Cloudflare Web Analytics only.
- RSS fetches use `cache: 'no-store'` on the client.

## Content Model
- MicroCanvas Framework (MCF v2.1): /docs/research-resources/microcanvas (see https://themicrocanvas.com)
- Innovation Maturity Model — Program (IMM-P): structured, gated program for repeatable delivery

## Structure
- `src/pages/` — Site pages (TSX/MDX)
- `docs/` — Research & Resources
- `static/` — Assets (images, downloads)
- `scripts/` — Utilities (normalization, checks)

## Scripts
- `npm run typecheck` — TypeScript
- `npm run build` — Production build
- `npm run verify` — Typecheck + build (used in pre-push)
- `npm run normalize` — Normalize text (LF, UTF-8)

## Releases
Public release notes: `/docs/releases` (docs/releases.md).

## Contribution
1) Make changes (code/MDX).  
2) Update docs/releases.md when applicable.  
3) Run `npm run verify`.  
4) Commit with a clear message and open a PR.

---
— Doulab. All rights reserved.