# Phase C0 Case Studies IA Audit (Order + Diagram Placement)

Scope: Case study detail pages in `src/pages/case-studies/*.tsx`. The listing page `src/pages/case-studies/index.tsx` is not a case study and is excluded.

## Canonical recommended section order (default)
Hero -> Snapshot -> Context -> Problem Analysis -> Approach -> Delivery -> Results -> Diagrams/Artifacts -> CTA

## Per-page recommendations

### Alpha Inversiones (`src/pages/case-studies/alpha-inversiones.tsx`)
- Score: Exec Scan 1/2; Narrative 2/2; Evidence 1/2; Diagram Placement 1/2; CTA 2/2.
- Current order (short): Hero -> At a glance -> Context -> Key risks -> What we did -> Outcomes -> Why it mattered -> Guidance microcopy -> Case diagrams -> Final CTA.
- Proposed order changes: Move "Case diagrams" to sit immediately after "Outcomes" (before "Why it mattered") or after "Why it mattered" but before guidance microcopy; keep guidance microcopy closer to CTA.
- Diagram rule: Keep diagrams last (appendix-style) but add a one-line reference in "What we did" or "Outcomes" pointing to the diagrams section.
- Missing elements: No explicit timeframe or role in the first screen; add a single line in "At a glance" (e.g., timeframe) and add an "Evidence links" microcopy or list (if any).

### AFP Siembra (`src/pages/case-studies/afp-siembra.tsx`)
- Score: Exec Scan 1/2; Narrative 2/2; Evidence 1/2; Diagram Placement 1/2; CTA 2/2.
- Current order (short): Hero -> At a glance -> Context -> What we did -> Outcomes -> Why it mattered -> Videos -> Guidance microcopy -> Case diagrams -> Final CTA.
- Proposed order changes: Move "Case diagrams" to after "Outcomes" (or after "Why it mattered") and before Videos; keep Videos as optional appendix after diagrams.
- Diagram rule: Keep diagrams last, but add a narrative reference in "What we did" or "Outcomes" ("See diagrams below for the system flow").
- Missing elements: No explicit timeframe in exec scan; timeline exists but is buried inside "What we did." Consider elevating a short "Timeline" section before Outcomes.

### FUNDAPEC (`src/pages/case-studies/fundapec.tsx`)
- Score: Exec Scan 1/2; Narrative 2/2; Evidence 1/2; Diagram Placement 1/2; CTA 2/2.
- Current order (short): Hero -> At a glance -> Context -> Key risks -> What we did (Phase 1/2) -> Timeline -> Outcomes -> Why it mattered -> Guidance microcopy -> Case diagrams -> Final CTA.
- Proposed order changes: Keep Timeline closer to Context (after Context or after What we did) but move "Case diagrams" to directly after "Outcomes" and before "Why it mattered" or before guidance microcopy.
- Diagram rule: Keep diagrams last; add a short reference in "Outcomes" or "What we did" so diagrams are not floating.
- Missing elements: Exec scan lacks timeframe/role in the first screen; add a one-line timeframe in "At a glance."

### OGTIC RedLab (`src/pages/case-studies/ogtic-redlab.tsx`)
- Score: Exec Scan 1/2; Narrative 2/2; Evidence 1/2; Diagram Placement 1/2; CTA 2/2.
- Current order (short): Hero -> At a glance -> Context -> Key risks -> What we did -> Timeline -> Outcomes -> Why it mattered -> Guidance microcopy -> Case diagrams -> Final CTA.
- Proposed order changes: Move "Case diagrams" to immediately after "Outcomes" or "Why it mattered" (before guidance microcopy).
- Diagram rule: Keep diagrams last; add a narrative reference in "What we did" or "Outcomes."
- Missing elements: No explicit timeframe or role in first screen; add a short line in "At a glance" for timeframe and role.

## Consistency matrix

| Case study | Matches canonical order? | Top fixes |
| --- | --- | --- |
| Alpha Inversiones | No | Move diagrams to right after Results; add exec-scan timeframe/role. |
| AFP Siembra | No | Move diagrams above Videos; add explicit Timeline section near Outcomes. |
| FUNDAPEC | No | Move diagrams to Results-adjacent; add exec-scan timeframe/role. |
| OGTIC RedLab | No | Move diagrams to Results-adjacent; add exec-scan timeframe/role. |
