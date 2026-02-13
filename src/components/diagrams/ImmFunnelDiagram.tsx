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
      {/* Curved spine arrow (Phase 01 as transversal capability spine) */}
      <svg className="immFunnel__arrow" viewBox="0 0 200 220" aria-hidden="true">
        <defs>
          <marker id="immArrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" />
          </marker>
        </defs>
        {/* Curve from lower-left up to the top bar */}
        <path
          d="M40,200 C20,160 20,110 40,70 C60,30 100,20 150,25"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          markerEnd="url(#immArrowHead)"
        />
      </svg>

      <div className="immFunnel__stack">
        <div className="immFunnel__bar immFunnel__bar--p1">
          <div className="immFunnel__title">PHASE 01</div>
          <div className="immFunnel__label">FOUNDATIONS</div>
          <div className="immFunnel__sub">(capability spine)</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p2">
          <div className="immFunnel__label">DISCOVERY</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p2b">
          <div className="immFunnel__label">VALIDATION</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p3">
          <div className="immFunnel__label">EFFICIENCY</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p4">
          <div className="immFunnel__label">SCALING</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p5">
          <div className="immFunnel__label immFunnel__label--small">
            CONTINUOUS
            <br />
            IMPROVEMENT
          </div>
        </div>
      </div>
    </div>
  );
}
