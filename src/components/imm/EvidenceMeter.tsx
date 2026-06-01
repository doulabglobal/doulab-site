// src/components/imm/EvidenceMeter.tsx
// Semantic component: semicircular speedometer for an evidence/quality score.
// Mirrors IMM gauge visualization.

import React, { type ReactNode } from 'react';
import styles from './EvidenceMeter.module.css';

export type EvidenceMeterProps = {
  score: number; // 0-100
  label?: string;
  thresholds?: { red: number; amber: number };
  ariaLabel?: string;
};

// Convert score 0-100 to an angle on a 180-degree arc.
// 0 -> 180deg (left), 100 -> 0deg (right). We use math angles where 180 = (-r, 0), 0 = (r, 0).
function scoreToAngle(score: number): number {
  const s = Math.max(0, Math.min(100, score));
  return 180 - (s / 100) * 180;
}

function pointOnArc(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number,
): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad), // SVG y grows downward; flip for math angles
  };
}

// Build an SVG arc path between two scores at outer radius rOuter and inner radius rInner.
function arcSegmentPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startScore: number,
  endScore: number,
): string {
  const a1 = scoreToAngle(startScore);
  const a2 = scoreToAngle(endScore);
  // a1 > a2 (because higher score = smaller angle)
  const pOuterStart = pointOnArc(cx, cy, rOuter, a1);
  const pOuterEnd = pointOnArc(cx, cy, rOuter, a2);
  const pInnerEnd = pointOnArc(cx, cy, rInner, a2);
  const pInnerStart = pointOnArc(cx, cy, rInner, a1);
  // Sweep flag: outer arc goes counter-clockwise in math angles (a1 -> a2 with a1 > a2);
  // in SVG screen space (y flipped), that corresponds to sweep-flag=1.
  return [
    `M ${pOuterStart.x.toFixed(2)} ${pOuterStart.y.toFixed(2)}`,
    `A ${rOuter} ${rOuter} 0 0 1 ${pOuterEnd.x.toFixed(2)} ${pOuterEnd.y.toFixed(2)}`,
    `L ${pInnerEnd.x.toFixed(2)} ${pInnerEnd.y.toFixed(2)}`,
    `A ${rInner} ${rInner} 0 0 0 ${pInnerStart.x.toFixed(2)} ${pInnerStart.y.toFixed(2)}`,
    'Z',
  ].join(' ');
}

export default function EvidenceMeter({
  score,
  label,
  thresholds,
  ariaLabel,
}: EvidenceMeterProps): ReactNode {
  const red = thresholds?.red ?? 50;
  const amber = thresholds?.amber ?? 75;
  const clamped = Math.max(0, Math.min(100, score));

  // ViewBox: 200 wide, 120 tall, semicircle centered.
  const VBW = 200;
  const VBH = 130;
  const cx = VBW / 2;
  const cy = 110; // baseline of the semicircle
  const rOuter = 90;
  const rInner = 60;

  const redPath = arcSegmentPath(cx, cy, rOuter, rInner, 0, red);
  const amberPath = arcSegmentPath(cx, cy, rOuter, rInner, red, amber);
  const greenPath = arcSegmentPath(cx, cy, rOuter, rInner, amber, 100);

  // Needle
  const needleAngle = scoreToAngle(clamped);
  const needleLen = rOuter - 4;
  const needleTip = pointOnArc(cx, cy, needleLen, needleAngle);
  const needleBaseLeft = pointOnArc(cx, cy, 6, needleAngle + 90);
  const needleBaseRight = pointOnArc(cx, cy, 6, needleAngle - 90);

  const titleText =
    ariaLabel ??
    (label
      ? `${label}: ${Math.round(clamped)} of 100`
      : `Evidence meter: ${Math.round(clamped)} of 100`);

  return (
    <figure
      className={styles.wrap}
      aria-label={titleText}
    >
      <div className={styles.chartBox}>
        <svg
          className={styles.svg}
          viewBox={`0 0 ${VBW} ${VBH}`}
          role="img"
          aria-label={titleText}
        >
          <title>{titleText}</title>

          {/* Zones */}
          <path d={redPath} className={styles.zoneRed} />
          <path d={amberPath} className={styles.zoneAmber} />
          <path d={greenPath} className={styles.zoneGreen} />

          {/* Tick marks at 0, red, amber, 100 */}
          {[0, red, amber, 100].map((t, i) => {
            const a = scoreToAngle(t);
            const pIn = pointOnArc(cx, cy, rInner - 2, a);
            const pOut = pointOnArc(cx, cy, rOuter + 2, a);
            return (
              <line
                key={`tick-${i}`}
                className={styles.tick}
                x1={pIn.x}
                y1={pIn.y}
                x2={pOut.x}
                y2={pOut.y}
              />
            );
          })}

          {/* Needle */}
          <polygon
            className={styles.needle}
            points={`${needleBaseLeft.x.toFixed(2)},${needleBaseLeft.y.toFixed(
              2,
            )} ${needleTip.x.toFixed(2)},${needleTip.y.toFixed(
              2,
            )} ${needleBaseRight.x.toFixed(2)},${needleBaseRight.y.toFixed(2)}`}
          />
          <circle className={styles.hub} cx={cx} cy={cy} r={6} />
        </svg>
      </div>

      <div className={styles.readout}>
        <div className={styles.score}>
          <span className={styles.scoreValue}>{Math.round(clamped)}</span>
          <span className={styles.scoreUnit}>/ 100</span>
        </div>
        {label ? <div className={styles.label}>{label}</div> : null}
      </div>
    </figure>
  );
}
