# Anchor Triage

| broken link | source file:line | target file | observed headings/ids | recommended fix |
| --- | --- | --- | --- | --- |
| `/about` → `/what-we-do#who` | `src/pages/about/index.tsx:173` | `src/pages/what-we-do/index.tsx` | `section id="who"`; `h2 id="who-title"` | Update link to `#who-title` to match heading id (or add `id="who"` to the H2 and keep link as-is). |
| `/contact` → `/contact#options` | `src/pages/contact/index.tsx:79` | `src/pages/contact/index.tsx` | `section id="options"`; `h2 id="options-title"` | Update link to `#options-title` to match heading id (or add `id="options"` to the H2). |
| `/contact` → `/contact#options` | `src/pages/contact/index.tsx:201` | `src/pages/contact/index.tsx` | `section id="options"`; `h2 id="options-title"` | Same as above: update to `#options-title` (or add `id="options"` to the H2). |
| `/services/innovation-maturity` → `/services/innovation-maturity#imm-structure` | `src/pages/services/innovation-maturity.tsx:174` | `src/pages/services/innovation-maturity.tsx` | `section id="imm-structure"`; `h2 id="imm-structure-title"` | Update link to `#imm-structure-title` (or add `id="imm-structure"` to the H2) to match heading id used by Docusaurus anchor checks. |
| `/services/innovation-readiness-workshop` → `#structure` | `src/pages/services/innovation-readiness-workshop.tsx:39` | `src/pages/services/innovation-readiness-workshop.tsx` | `section id="structure"`; H2 has no id (`<h2 className=...>Workshop structure...</h2>`) | Add `id="structure"` to the H2 (preferred), or change link to match a new heading id. |
| `/vigia-futura` → `#radar` | `src/pages/vigia-futura/index.tsx:106` | `src/pages/vigia-futura/index.tsx` | `section id="radar"`; `h2 id="vf-radar-title"` | Update link to `#vf-radar-title` (or add `id="radar"` to the H2) to match heading id. |
