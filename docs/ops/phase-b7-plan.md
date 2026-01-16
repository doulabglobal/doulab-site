# Phase B7 Plan - Post-freeze roadmap

## Objective
- Define the next operational phase after B6 freeze with clear scope and acceptance criteria.

## Non-goals
- No i18n/ES execution.
- No booking or Cloudflare changes.
- No UX/IA refactors in this planning pass.

## Scope boundaries (strict)
- Docs-only for planning artifacts and governance mapping.
- No changes to `src/**`, configs, or dependencies.

## Prioritized workstreams
1) Docs polish (B4-P4 follow-through)
   - Acceptance: docs landing pages use consistent headers and CTAs.
2) Performance follow-ups (B5-P4 if defined)
   - Acceptance: measurable reductions in JS/CSS payload or runtime overhead.
3) Governance hygiene
   - Acceptance: backlog and AGENTS mapping updated per pass.

## Stop rules
- Any build/verify failure.
- Any scope drift into `src/**` or configuration.
- Any unexpected files or broken links/anchors.

## Risks + mitigations
- Risk: scope creep in docs polishing.
  - Mitigation: limit to doc-only edits and record changes in notes.
- Risk: performance work introduces regressions.
  - Mitigation: keep changes low-risk and require build/verify gates.

## Commit strategy
- 2 commits per plan-only pass:
  1) `docs(ops): add b7 plan`
  2) `docs(agents): map b7 commit hash in AGENTS.md + docs/ops/doulab-net-backlog.md`
