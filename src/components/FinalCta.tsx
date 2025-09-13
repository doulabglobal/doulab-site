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
        data-cta={dataCta ?? label}
        aria-label={ariaLabel ?? label}
      >
        {label}
      </a>
    );
  }
  const { to, label, dataCta, ariaLabel } = cta as CtaInternal;
  return (
    <Link className={className} to={to} data-cta={dataCta ?? label} aria-label={ariaLabel ?? label}>
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
  const reactId = React.useId();
  const headingId = ariaLabelledbyId ?? `${id ?? 'finalCta'}-title-${reactId}`;
  const noteId = ctaNote ? `${id ?? 'finalCta'}-note-${reactId}` : undefined;

  return (
    <section
      className="section"
      id={id}
      role="region"
      aria-labelledby={headingId}
      aria-describedby={noteId}
    >
      <div className="finalCta">
        <h2 id={headingId}>{title}</h2>
        <p>{body}</p>
        <div className="heroCtas" style={{ justifyContent: 'center' }}>
          <RenderButton cta={primaryCta} className="buttonPrimary" />
          {secondaryCta ? <RenderButton cta={secondaryCta} className="buttonSecondary" /> : null}
        </div>
        {ctaNote ? (
          <p className="ctaNote" id={noteId} style={{ textAlign: 'center' }}>
            {ctaNote}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Site-wide “Book a discovery call” convenience wrapper.
 * Uses external links per Codex v0.8 (no iframe embeds).
 * You can override any text/links via props if needed.
 */
export function SitewideDiscoveryCta(props?: {
  id?: string;
  emailHref?: string;
  scheduleHref?: string;
  title?: string;
  body?: string;
  ctaNote?: string;
  emailLabel?: string;
  scheduleLabel?: string;
  scheduleNewTab?: boolean;
}) {
  const {
    id = 'bookings-general',
    emailHref = 'mailto:hello@doulab.net?subject=Discovery%20call',
    scheduleHref = 'https://outlook.office.com/book/Doulab@NETORGFT5107446.onmicrosoft.com/?ismsaljsauthenabled&utm_source=doulab.net&utm_medium=cta&utm_campaign=scheduling',
    title = 'Ready to talk?',
    body = 'Send a brief or book a quick discovery call with Doulab.',
    ctaNote,
    emailLabel = 'Email us',
    scheduleLabel = 'Schedule online',
    scheduleNewTab = false,
  } = props || {};

  return (
    <FinalCta
      id={id}
      title={title}
      body={body}
      ctaNote={ctaNote}
      primaryCta={{ href: emailHref, label: emailLabel }}
      secondaryCta={{ href: scheduleHref, label: scheduleLabel, newTab: scheduleNewTab }}
    />
  );
}
