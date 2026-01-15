import React from 'react';
import Link from '@docusaurus/Link';
import styles from './PageHeader.module.css';

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
    <section className={styles.section}>
      <header className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {meta ? <p className={`microcopy ${styles.meta}`}>{meta}</p> : null}
        {body ? <div>{body}</div> : null}
        {primaryCta || secondaryCta ? (
          <div className={styles.actions}>
            {primaryCta ? <RenderCta cta={primaryCta} className="buttonPrimary" /> : null}
            {secondaryCta ? <RenderCta cta={secondaryCta} className="buttonSecondary" /> : null}
          </div>
        ) : null}
      </header>
    </section>
  );
}
