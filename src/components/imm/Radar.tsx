// src/components/imm/Radar.tsx
// Semantic component: N-axis spider/radar chart snapshot.
// Mirrors IMM design system radar visualizations.

import React, { type ReactNode } from 'react';
import styles from './Radar.module.css';

export type RadarDomain = {
  name: string;
  score: number; // 0-100
};

export type RadarProps = {
  domains: RadarDomain[];
  target?: number[];
  title?: string;
  caption?: string;
  ariaLabel?: string;
};

// Polar to Cartesian. Angle 0 = top (12 o'clock); clockwise.
function polar(
  cx: number,
  cy: number,
  radius: number,
  index: number,
  total: number,
): { x: number; y: number } {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n)) / 100;
}

function buildPolygon(
  cx: number,
  cy: number,
  rMax: number,
  values: number[],
): string {
  const n = values.length;
  return values
    .map((v, i) => {
      const p = polar(cx, cy, rMax * clamp01(v), i, n);
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    })
    .join(' ');
}

export default function Radar({
  domains,
  target,
  title,
  caption,
  ariaLabel,
}: RadarProps): ReactNode {
  const n = domains.length;
  const VB = 400;
  const cx = VB / 2;
  const cy = VB / 2;
  const rMax = 130;
  const labelRadius = rMax + 28;

  const rings = [0.25, 0.5, 0.75, 1];
  const baselineValues = domains.map((d) => d.score);
  const baseline = buildPolygon(cx, cy, rMax, baselineValues);
  const targetPoly =
    target && target.length === n ? buildPolygon(cx, cy, rMax, target) : null;

  const titleText =
    ariaLabel ??
    title ??
    `Radar chart with ${n} axes`;

  return (
    <figure
      className={styles.wrap}
      aria-label={ariaLabel ?? title ?? 'Radar chart'}
    >
      {title ? <figcaption className={styles.title}>{title}</figcaption> : null}
      <div className={styles.chartBox}>
        <svg
          className={styles.svg}
          viewBox={`0 0 ${VB} ${VB}`}
          role="img"
          aria-label={titleText}
        >
          <title>{titleText}</title>

          {/* Concentric rings */}
          {rings.map((r, i) => {
            const pts = Array.from({ length: n }, (_, j) => {
              const p = polar(cx, cy, rMax * r, j, n);
              return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
            }).join(' ');
            return (
              <polygon
                key={`ring-${i}`}
                className={styles.ring}
                points={pts}
              />
            );
          })}

          {/* Axes */}
          {domains.map((_, i) => {
            const p = polar(cx, cy, rMax, i, n);
            return (
              <line
                key={`axis-${i}`}
                className={styles.axis}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
              />
            );
          })}

          {/* Baseline polygon */}
          <polygon className={styles.baseline} points={baseline} />

          {/* Target polygon (optional) */}
          {targetPoly ? (
            <polygon className={styles.target} points={targetPoly} />
          ) : null}

          {/* Score dots on baseline */}
          {baselineValues.map((v, i) => {
            const p = polar(cx, cy, rMax * clamp01(v), i, n);
            return (
              <circle
                key={`dot-${i}`}
                className={styles.dot}
                cx={p.x}
                cy={p.y}
                r={4}
              />
            );
          })}

          {/* Axis labels */}
          {domains.map((d, i) => {
            const p = polar(cx, cy, labelRadius, i, n);
            // Anchor based on horizontal position
            const dx = p.x - cx;
            let anchor: 'start' | 'middle' | 'end' = 'middle';
            if (dx > 8) anchor = 'start';
            else if (dx < -8) anchor = 'end';
            return (
              <text
                key={`lbl-${i}`}
                className={styles.label}
                x={p.x}
                y={p.y}
                textAnchor={anchor}
                dominantBaseline="middle"
              >
                <tspan>{d.name}</tspan>
                <tspan
                  x={p.x}
                  dy="1.1em"
                  className={styles.labelScore}
                >
                  {Math.round(d.score)}
                </tspan>
              </text>
            );
          })}
        </svg>
      </div>

      {/* Screen-reader-friendly data table */}
      <ul className={styles.srData}>
        {domains.map((d, i) => (
          <li key={`sr-${i}`}>
            {d.name}: {Math.round(d.score)}
            {target && target[i] !== undefined
              ? ` (target ${Math.round(target[i])})`
              : ''}
          </li>
        ))}
      </ul>

      {caption ? <p className={styles.caption}>{caption}</p> : null}

      {(target || baselineValues.length > 0) && (
        <div className={styles.legend} aria-hidden="true">
          <span className={styles.legendItem}>
            <span className={`${styles.swatch} ${styles.swatchBaseline}`} />
            Current
          </span>
          {target ? (
            <span className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles.swatchTarget}`} />
              Target
            </span>
          ) : null}
        </div>
      )}
    </figure>
  );
}
