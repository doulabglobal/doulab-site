// src/components/FinalCta.tsx
import React from 'react';
import Link from '@docusaurus/Link';

type CtaInternal = {
  to: string;
  label: string;
  dataCta?: string;
  ariaLabel?: string;
};

type CtaExternal = {
  href: string;               // external or mailto:
  label: string;
  dataCta?: string;
  ariaLabel?: string;
  newTab?: boolean;           // optional: open in new tab for http(s) links
};

type Cta = CtaInternal | CtaExternal;

export type FinalCtaProps = {
  id?: string;
  ariaLabelledbyId?: string;
  title: string;
  body: string;
  ctaNote?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

function isExternal(cta: Cta): cta is CtaExternal {
  return (cta as CtaExternal).href !== undefined;
}

function RenderButton({
  cta,
  className,
}: {
  cta: Cta;
  className: string; // "buttonPrimary" | "buttonSecondary"
}) {
  if (isExternal(cta)) {
    const { href, label, dataCta, ariaLabel, newTab } = cta;
    const isHttp = /^https?:/i.test(href);
    const target = newTab && isHttp ? '_blank' : undefined;
    const rel = newTab && isHttp ? 'noopener noreferrer' : undefined;
    return (
      <a
        className={className}
        href={href}
        target={target}
        rel={rel}
        data-cta={dataCta}
        aria-label={ariaLabel}
      >
        {label}
      </a>
    );
  }
  const { to, label, dataCta, ariaLabel } = cta as CtaInternal;
  return (
    <Link className={className} to={to} data-cta={dataCta} aria-label={ariaLabel}>
      {label}
    </Link>
  );
}

export default function FinalCta({
  id,
  ariaLabelledbyId,
  title,
  body,
  ctaNote,
  primaryCta,
  secondaryCta,
}: FinalCtaProps) {
  return (
    <section className="section" id={id} aria-labelledby={ariaLabelledbyId}>
      <div className="finalCta">
        <h2 id={ariaLabelledbyId}>{title}</h2>
        <p>{body}</p>
        <div className="heroCtas" style={{ justifyContent: 'center' }}>
          <RenderButton cta={primaryCta} className="buttonPrimary" />
          {secondaryCta ? <RenderButton cta={secondaryCta} className="buttonSecondary" /> : null}
        </div>
        {ctaNote ? <p className="ctaNote" style={{ textAlign: 'center' }}>{ctaNote}</p> : null}
      </div>
    </section>
  );
}
