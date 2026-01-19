---
id: design-nny-hero-language
title: "NNY Hero Banner Design Language (Editorial)"
status: locked
scope: blog-editorial
---

## Objective
Define a distinct editorial hero-banner design language for Doulab blog posts that signals intellectual authority, rigor, and restraint, while remaining scalable and system-driven.

Internal name: **New New Yorker (NNY)**

This document is canonical. No conceptual decisions remain open.

---

## Core Design Thesis
NNY = intellectual minimalism + architectural composition + quiet confidence.

Hero banners frame thinking. They do not summarize, sell, or explain.

---

## Canonical Rules (Frozen)

### Composition
- Strong negative space (≈40–60%)
- Asymmetry with visual balance
- One focal element only (text OR image/symbol)
- If it feels empty, it is likely correct

### Typography
- Editorial serif or restrained grotesk only
- Approved families:
  - Serif: Canela, Lyon, Freight Text (or equivalents)
  - Grotesk: Inter (canonical), Suisse Int’l, IBM Plex Sans
- Hierarchy (desktop reference):
  - Title: 48–72px, line-height 1.05–1.15
  - Subtitle (optional): ≤2 lines, muted color

### Color System
- Near-monochrome base
- One accent color maximum
- Canonical accents:
  - #964590 — theory / foresight / governance
  - #72c53c — experimentation / systems in motion
- No gradients
- No multiple accents

### Imagery (if used)
- Abstract, symbolic, architectural, or diagrammatic
- Monochrome or duotone preferred
- No literal stock photography
- Images suggest thought; they do not illustrate content

### Text Pattern (Hero Copy)
Allowed forms only:
- Declarative insight
- Structured tension
- Systems-level question

Disallowed:
- Marketing verbs
- CTAs
- Redundant subtitles

---

## Standard Variants (System Constraint)

Exactly three variants are allowed:

### Variant A — Text Only
- White / near-white background
- Large headline
- Optional thin divider
- Use for: theory, governance, foresight essays

### Variant B — Symbol + Text
- Small abstract symbol (≤25% width)
- Text remains primary
- Use for: frameworks, methods, models

### Variant C — Quiet Image
- One restrained image
- Minimal text overlay
- Use for: case studies, ecosystem narratives

No ad-hoc variants are permitted.

---

## Governance Rules
- Hero banners are editorial assets, not marketing assets
- Reusability > per-post customization
- All hero banners must be instantiated via a single canonical component
- Visual changes occur at component or token level only

---

## Out of Scope
- Marketing landing pages
- Homepage hero
- Case-study cards
- Social media visuals

---

## Next Implementation Steps
- Define design tokens
- Implement HeroBanner.tsx
- Retrofit selected posts as visual canon

---

## Status
LOCKED — execution-ready
---
