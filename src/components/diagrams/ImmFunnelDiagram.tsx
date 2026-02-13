import React from 'react';

type Props = {
  className?: string;
  ariaLabel?: string;
};

export default function ImmFunnelDiagram({
  className = '',
  ariaLabel = 'IMM-P program phases funnel diagram',
}: Props) {
  return (
    <div className={`immFunnel ${className}`} role="img" aria-label={ariaLabel}>
      <svg className="immFunnel__arrow" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="immArrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" />
          </marker>
        </defs>

        {/* Straight arrow from bottom (CI) up to top (Foundations) */}
        <line
          x1="50"
          y1="92"
          x2="50"
          y2="10"
          strokeWidth="6"
          strokeLinecap="round"
          markerEnd="url(#immArrowHead)"
        />
      </svg>

      <div className="immFunnel__stack">
        <div className="immFunnel__bar immFunnel__bar--p1">
          <div className="immFunnel__label">FOUNDATIONS</div>
          <div className="immFunnel__sub">(capability spine)</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p2">
          <div className="immFunnel__label immFunnel__label--p2">
            STRUCTURED DISCOVERY
            <span className="immFunnel__labelSub"> &amp; VALIDATION</span>
          </div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p3">
          <div className="immFunnel__label">EFFICIENCY</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p4">
          <div className="immFunnel__label">SCALING</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p5">
          <div className="immFunnel__pill" aria-hidden="true">
            CONTINUOUS
            <span className="immFunnel__pillSub">IMPROVEMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
