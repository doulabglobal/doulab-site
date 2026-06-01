// src/components/imm/Pillars.tsx
// Semantic component: N pillars on a shared foundation.
// Mirrors `imm-pillars-grid` from the IMM design system.

import React, { type ReactNode, type CSSProperties } from 'react';
import styles from './Pillars.module.css';

export type PillarAccent =
  | 'indigo'
  | 'purple'
  | 'green'
  | 'slate'
  | 'amber'
  | 'red';

export type Pillar = {
  icon?: ReactNode;
  title: string;
  body: string;
  accent?: PillarAccent;
};

export type PillarsProps = {
  pillars: Pillar[];
  foundationLabel?: string;
  ariaLabel?: string;
};

const ACCENT_VAR: Record<PillarAccent, string> = {
  indigo: 'var(--dl-indigo)',
  purple: 'var(--dl-purple)',
  green: 'var(--dl-green)',
  slate: 'var(--dl-slate)',
  amber: 'var(--dl-amber)',
  red: 'var(--dl-red)',
};

export default function Pillars({
  pillars,
  foundationLabel,
  ariaLabel = 'Pillars',
}: PillarsProps): ReactNode {
  return (
    <section
      className={styles.wrap}
      aria-label={ariaLabel}
    >
      <div className={styles.grid}>
        {pillars.map((p, i) => {
          const accent = p.accent ?? 'indigo';
          const style = {
            ['--pillar-accent' as string]: ACCENT_VAR[accent],
          } as CSSProperties;
          const headingId = `pillar-${i}-${p.title.replace(/\s+/g, '-').toLowerCase()}`;
          return (
            <article
              key={headingId}
              className={styles.pillar}
              style={style}
              aria-labelledby={headingId}
            >
              <div className={styles.cap}>
                {p.icon ? (
                  <span className={styles.capIcon} aria-hidden="true">
                    {p.icon}
                  </span>
                ) : null}
                <h3 id={headingId} className={styles.title}>
                  {p.title}
                </h3>
              </div>
              <p className={styles.body}>{p.body}</p>
            </article>
          );
        })}
      </div>
      <div className={styles.foundation} aria-hidden="true" />
      {foundationLabel ? (
        <div className={styles.foundationCaption}>{foundationLabel}</div>
      ) : null}
    </section>
  );
}
