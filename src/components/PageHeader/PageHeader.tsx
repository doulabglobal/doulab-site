import React from 'react';
import Link from '@docusaurus/Link';

type PageHeaderCta = {
  label: string;
  to: string;
  external?: boolean;
  dataCta?: string;
  ariaLabel?: string;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  meta?: string;
  body?: React.ReactNode;
  primaryCta?: PageHeaderCta;
  secondaryCta?: PageHeaderCta;
  align?: 'left' | 'center';
};

function RenderCta({ cta, className }: { cta: PageHeaderCta; className: string }) {
  if (cta.external) {
    return (
      <a
        className={className}
        href={cta.to}
        data-cta={cta.dataCta}
        aria-label={cta.ariaLabel ?? cta.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta.label}
      </a>
    );
  }
  return (
    <Link className={className} to={cta.to} data-cta={cta.dataCta} aria-label={cta.ariaLabel ?? cta.label}>
      {cta.label}
    </Link>
  );
}

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  meta,
  body,
  primaryCta,
  secondaryCta,
  align = 'left',
}: PageHeaderProps) {
  return (
    <section className={'components-pageheader-pageheader__section'}>
      <header className={`${'components-pageheader-pageheader__header'} ${align === 'center' ? 'components-pageheader-pageheader__center' : ''}`}>
        {eyebrow ? <p className={'components-pageheader-pageheader__eyebrow'}>{eyebrow}</p> : null}
        <h1 className={'components-pageheader-pageheader__title'}>{title}</h1>
        {subtitle ? <p className={'components-pageheader-pageheader__subtitle'}>{subtitle}</p> : null}
        {meta ? <p className={`microcopy ${'components-pageheader-pageheader__meta'}`}>{meta}</p> : null}
        {body ? <div>{body}</div> : null}
        {primaryCta || secondaryCta ? (
          <div className={'components-pageheader-pageheader__actions'}>
            {primaryCta ? <RenderCta cta={primaryCta} className="buttonPrimary" /> : null}
            {secondaryCta ? <RenderCta cta={secondaryCta} className="buttonSecondary" /> : null}
          </div>
        ) : null}
      </header>
    </section>
  );
}
