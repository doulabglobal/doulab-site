# i18n Glossary — Spanish (ES) canonical terms

Source: G-14 (audit-2026-07). Canonicalized 2026-06-02.

This file codifies the canonical Spanish (ES) renderings for high-frequency terms that previously drifted across the corpus. Translation passes — human or automated — must follow these choices to keep the ES corpus consistent.

## Domain terms

| EN | ES (canonical) | ES variants to avoid | Notes |
| --- | --- | --- | --- |
| Gate (decision gate, evidence gate) | `punto de control`, plural `puntos de control` | `compuerta`, `compuertas` | "Punto de control" was already dominant on the site (~112 sites vs ~28 for `compuerta`). Single canonical form across body prose, headings, breadcrumbs, governance docs, and case studies. Proper-noun-style references like `Compuerta 1` → `Punto de control 1`. |
| Case studies (nav + body) | `Casos de estudio` (lowercase: `casos de estudio`) | `Casos de éxito` (lowercase: `casos de éxito`) | Literal translation matches nav/chrome (already `Casos de estudio` in `footer.json` + `navbar.json`). Replaces the sales-y `Casos de éxito` that drifted into case-studies page titles, breadcrumbs, and "back to" links. |

## CTA verbs

CTA verbs are normalized by **destination**, not by surface or page. The verb signals what kind of action follows.

| Destination | ES verb (canonical) | Use it for | Avoid (variants to sweep) |
| --- | --- | --- | --- |
| **Paid Stripe checkout** (e.g. `buy.stripe.com/...`, `CLARITYSCAN_CHECKOUT_URL`) | `Reserva` | "Reserva Nivel 1: CHF 150", "Reserva un ClarityScan®" | `Programa un ClarityScan®`, `Agenda un ClarityScan®` (when target is Stripe) |
| **Free booking** (Google Calendar via `booking.doulab.net/*`) | `Agenda` | "Agenda una llamada de descubrimiento", "Agenda un brief de taller" | `Inicia un brief`, `Programa una llamada` |
| **Navigational** (internal page link, "start here", "begin with") | `Empieza` | "Empieza con ClarityScan®", "Empieza aquí", "Empieza de nuevo" | `Comienza`, `Comenzar`, `Inicia` (when navigational) |

### Edge cases

- **`Programa` as a noun is preserved.** "Programas de innovación", "el programa IMM-P®" — these stay. The sweep only targets `Programa` used as a verb in CTA position.
- **Aria-labels follow the same rule.** An `aria-label="Inicia un brief..."` on a Google Calendar booking link becomes `aria-label="Agenda un brief..."`.
- **Buttons + body text both apply.** A `primaryCta.label` and a `<Link>` text block obey the destination rule equally.

## Cross-reference

- Backlog entry: `docs/ops/doulab-net-backlog.md` G-14
- Project memory: `[[project-doulab-site-state-2026-06-02]]` (Decisions needed → G-14 row)
- Style: `[[feedback_no_em_dashes]]` (no em-dashes anywhere) and `[[feedback_dark_light_mode_parity]]` (token-based colors)

## Maintenance

When adding ES copy:

1. Map the destination of any CTA to the verb table above.
2. Use the domain terms table for every occurrence of Gate / Case studies — do not transliterate.
3. If a new high-frequency term drifts, add a row here before sweeping.
