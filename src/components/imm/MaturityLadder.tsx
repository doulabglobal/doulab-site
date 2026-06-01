// src/components/imm/MaturityLadder.tsx
// Semantic component: ordered maturity rungs with current and optional target.
// Mirrors IMM maturity ladder visual.

import React, { type ReactNode, type CSSProperties } from 'react';
import styles from './MaturityLadder.module.css';

export type Rung = {
  label: string;
  description?: string;
};

export type MaturityLadderLayout = 'auto' | 'wrap';

export type MaturityLadderProps = {
  rungs: Rung[];
  current: number; // 1-based
  target?: number; // 1-based
  title?: string;
  ariaLabel?: string;
  /**
   * Desktop layout strategy. `'auto'` (default) keeps the original single-row
   * horizontal track. `'wrap'` enables flex-wrap so longer ladders (e.g. 5
   * rungs) split into multiple rows on desktop. Mobile collapse rule unchanged.
   */
  layout?: MaturityLadderLayout;
};

export default function MaturityLadder({
  rungs,
  current,
  target,
  title,
  ariaLabel,
  layout = 'auto',
}: MaturityLadderProps): ReactNode {
  const total = rungs.length;
  const titleId = title ? 'maturity-ladder-title' : undefined;

  // Stride sets visual prominence for the active rung relative to others.
  return (
    <section
      className={styles.wrap}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : (ariaLabel ?? 'Maturity ladder')}
    >
      {title ? (
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      ) : null}
      <ol
        className={`${styles.track} ${layout === 'wrap' ? styles.trackWrap : ''}`}
        aria-label={
          ariaLabel ??
          `Maturity ladder, currently at rung ${current} of ${total}`
        }
      >
        {rungs.map((r, i) => {
          const idx = i + 1; // 1-based
          const isCurrent = idx === current;
          const isTarget = target !== undefined && idx === target;
          const classes = [
            styles.rung,
            isCurrent ? styles.current : '',
            isTarget ? styles.target : '',
            !isCurrent && !isTarget ? styles.muted : '',
          ]
            .filter(Boolean)
            .join(' ');

          // CSS var so the stacking order can be controlled if needed
          const style = {
            ['--rung-index' as string]: String(idx),
          } as CSSProperties;

          return (
            <li
              key={`rung-${i}`}
              className={classes}
              style={style}
              title={r.description ?? undefined}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <div className={styles.rungNumber} aria-hidden="true">
                {idx}
              </div>
              <div className={styles.rungBody}>
                <div className={styles.rungLabelRow}>
                  <span className={styles.rungLabel}>{r.label}</span>
                  {isCurrent ? (
                    <span
                      className={`${styles.badge} ${styles.badgeCurrent}`}
                    >
                      current
                    </span>
                  ) : null}
                  {isTarget ? (
                    <span
                      className={`${styles.badge} ${styles.badgeTarget}`}
                    >
                      target
                    </span>
                  ) : null}
                </div>
                {r.description ? (
                  <span className={styles.rungDesc}>{r.description}</span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
