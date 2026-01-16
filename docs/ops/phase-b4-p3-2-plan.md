# Phase B4-P3.2 Plan — UX consistency + accessibility micro-polish

## Scope
- Pages: `src/pages/contact/index.tsx`, `src/pages/insights/index.tsx`, `src/pages/vigia-futura/index.tsx`
- Services subtree: only if required for accessibility parity; otherwise no changes this pass.
- Shared components: `src/components/PageHeader/*`, `src/components/CardGrid/*`, `src/components/Hero.tsx`, `src/components/FinalCta.tsx` only if a11y gaps are found.

## Baseline measurements
- Inline style count (rg `style={{}}` in src): 45

## Targeted changes (planned)
- Remove inline styles from Vigia Futura in-page subnav and CTA row; move to a CSS module.
- Add visible focus styles for subnav links to improve keyboard navigation clarity.
- Ensure heading order remains H1 then H2/H3 on touched pages (no skipped levels).
- Confirm icon-only links/buttons have aria-labels (if any are found).

## Checks to run
- Inline style count before/after (rg `style={{}}` in src).
- Manual scan for img alt text on touched pages.
- Verify focus-visible styles on in-page subnav links.

## Acceptance criteria
- Inline style count does not increase and ideally decreases.
- All touched pages keep a single H1 with logical heading order.
- Focus styles visible for subnav links on Vigia Futura.
- build:cf and verify:build pass with logs in ops/audits/doulab-net/logs/.

## Commit plan
1) docs(ops): add b4-p3.2 plan + baseline measurements + scope statement
2) refactor(a11y): b4-p3.2 ux consistency + accessibility micro-polish
3) docs(agents): map b4-p3.2 commit hashes in AGENTS.md + docs/ops/doulab-net-backlog.md
