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
      <div className="immFunnel__stack">
        <div className="immFunnel__bar immFunnel__bar--p1">
          <div className="immFunnel__label">FOUNDATIONS</div>
          <div className="immFunnel__sub">(capability spine)</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p2">
          <div className="immFunnel__label">
            STRUCTURED DISCOVERY
            <span className="immFunnel__labelSub">&amp; VALIDATION</span>
          </div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p3">
          <div className="immFunnel__label">EFFICIENCY</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p4">
          <div className="immFunnel__label">SCALING</div>
        </div>

        <div className="immFunnel__bar immFunnel__bar--p5">
          <div className="immFunnel__label">
            CONTINUOUS
            <span className="immFunnel__labelSub">IMPROVEMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
