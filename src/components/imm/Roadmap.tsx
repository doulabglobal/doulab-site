// src/components/imm/Roadmap.tsx
// Semantic component: sequence of prioritized initiatives with named horizons.
// Mirrors `imm-roadmap` from the IMM design system.

import React, { type ReactNode, type CSSProperties } from 'react';
import styles from './Roadmap.module.css';

export type RoadmapState = 'now' | 'next' | 'later';

export type RoadmapHorizon = {
  range: string;
  label: string;
  body?: string;
  initiatives?: string[];
  state?: RoadmapState;
};

export type RoadmapProps = {
  title?: string;
  horizons: RoadmapHorizon[];
  ariaLabel?: string;
};

const STATE_VAR: Record<RoadmapState, string> = {
  now: 'var(--dl-indigo)',
  next: 'var(--dl-purple)',
  later: 'var(--dl-slate)',
};

const STATE_CLASS: Record<RoadmapState, string> = {
  now: styles.stateNow,
  next: styles.stateNext,
  later: styles.stateLater,
};

export default function Roadmap({
  title,
  horizons,
  ariaLabel,
}: RoadmapProps): ReactNode {
  const titleId = title ? 'roadmap-title' : undefined;
  return (
    <section
      className={styles.wrap}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : (ariaLabel ?? 'Roadmap')}
    >
      {title ? (
        <h2 id={titleId} className={styles.title}>{title}</h2>
      ) : null}
      <ol className={styles.track}>
        {horizons.map((h, i) => {
          const state = h.state ?? 'later';
          const style = {
            ['--horizon-accent' as string]: STATE_VAR[state],
          } as CSSProperties;
          const headingId = `horizon-${i}`;
          return (
            <article
              key={headingId}
              className={`${styles.horizon} ${STATE_CLASS[state]}`}
              style={style}
              aria-labelledby={headingId}
            >
              <div className={styles.pillRow}>
                <span className={styles.pill}>{h.range}</span>
              </div>
              <h3 id={headingId} className={styles.label}>{h.label}</h3>
              {h.body ? <p className={styles.body}>{h.body}</p> : null}
              {h.initiatives && h.initiatives.length > 0 ? (
                <ul className={styles.initiatives}>
                  {h.initiatives.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </ol>
    </section>
  );
}
