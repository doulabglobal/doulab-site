# Phase B8-P2 Notes - Case Study Mermaid Diagrams

## Scope
- Case study pages only (OGTIC/RedLab, AFP Siembra, Fundapec, Alpha Inversiones).
- Mermaid diagrams only, using the B8-P1 canonical system.
- No non-case-study pages or new diagram types.

## Baseline evidence
- Existing diagram sections are static images labeled "Process (diagram)" on each target page.
- Command: `rg -n "Process \\(diagram\\)" src/pages/case-studies -S`

## Planned changes
- Replace the static image diagram section with two Mermaid diagrams per page:
  - System Flow (LR)
  - Capability Progression (TB)

## Files expected to change
- `src/pages/case-studies/ogtic-redlab.tsx`
- `src/pages/case-studies/afp-siembra.tsx`
- `src/pages/case-studies/fundapec.tsx`
- `src/pages/case-studies/alpha-inversiones.tsx`

## Implementation summary
- Replaced the static diagram image section with two Mermaid diagrams on each target page.
- Used the canonical system flow and capability progression patterns from B8-P1.

## Pages updated
- OGTIC / RedLab (reference pattern)
- AFP Siembra
- Fundapec
- Alpha Inversiones
