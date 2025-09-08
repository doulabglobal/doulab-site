// src/pages/contact/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';
import Mail from 'lucide-react/dist/esm/icons/mail';
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Clock from 'lucide-react/dist/esm/icons/clock';
import FinalCta from '../../components/FinalCta';

const EMAIL = 'hello@doulab.net';

export default function Contact(): ReactNode {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Doulab',
    url: 'https://doulab.net/contact',
    mainEntityOfPage: 'https://doulab.net/contact',
    about: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'Business', email: EMAIL, availableLanguage: ['en', 'es'] },
    ],
  };

  return (
    <Layout
      title="Contact — Doulab"
      description="Start a discovery call or send us a brief. Privacy-first, no third-party forms."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/contact" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Contact — Doulab" />
        <meta
          property="og:description"
          content="Start a discovery call or send us a brief. Privacy-first, no third-party forms."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-contact.jpg" />
        <meta property="og:image:alt" content="Doulab — Contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" aria-labelledby="contact-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 820px' }}>
              <h1 id="contact-hero-title" className="heroTitle">Contact Doulab</h1>
              <p className="heroSubtitle" style={{ textAlign: 'justify' }}>Let’s scope a 20-minute discovery call.</p>
              <p className="heroText">
                We’re privacy-first: no external forms or ad pixels. Email us or share a brief — we’ll propose clear
                next steps. <br />
                We aim to reply within <strong>2 business days</strong>.
              </p>
              <div className="heroCtas">
                <a
                  className="buttonPrimary"
                  href={`mailto:${EMAIL}?subject=Discovery%20call%20request&body=Hi%20Doulab%2C%20I%27d%20like%20to%20book%20a%2020-min%20discovery%20call.%20My%20goal%20is%20...`}
                  data-cta="cta.contact.hero.email"
                  aria-label="Email Doulab to request a discovery call"
                >
                  <Mail aria-hidden="true" style={{ width: 18, height: 18, marginRight: 6 }} />
                  Email us
                </a>
                <Link className="buttonSecondary" to="/what-we-do" data-cta="cta.contact.hero.whatwedo">
                  <ClipboardList aria-hidden="true" style={{ width: 18, height: 18, marginRight: 6 }} />
                  What we do
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact options */}
        <section className="section" id="options" aria-labelledby="options-title">
          <h2 id="options-title">How to reach us</h2>
          <p className="sectionLead">
            Choose what works best for you — each option keeps your data private and gets you to a clear next step.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="opt-discovery">
              <CalendarCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-discovery">Book a discovery call</h3>
              <p>20-minute intro to align on goals, scope, and constraints.</p>
              <ul>
                <li>Outcome: initial direction + next steps</li>
                <li>Follow-up: written summary within 2 business days</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href={`mailto:${EMAIL}?subject=Discovery%20call%20request&body=Hi%20Doulab%2C%20Context%3A%20...`}
                  data-cta="cta.contact.card.discovery_email"
                  aria-label="Email to request a discovery call time"
                >
                  Email for a time &rarr;
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-brief">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="opt-brief">Send a short brief</h3>
              <p>Share your context: goals, timelines, stakeholders, constraints.</p>
              <ul>
                <li>Outcome: tailored options within 3–5 business days</li>
                <li>Format: email or slide deck — your choice</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href={`mailto:${EMAIL}?subject=Project%20brief&body=Goal%3A%0ATimeline%3A%0AStakeholders%3A%0AConstraints%3A%0ASuccess%20metrics%3A%0A`}
                  data-cta="cta.contact.card.brief_email"
                  aria-label="Email your project brief"
                >
                  Email your brief &rarr;
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-privacy">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-privacy">Privacy &amp; security</h3>
              <p>We keep things simple and private by default.</p>
              <ul>
                <li>No Google tags or ad pixels</li>
                <li>Cloudflare Web Analytics only</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/releases" data-cta="cta.contact.card.privacy_more">
                  See what changed &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* What to expect */}
        <section className="section" id="process" aria-labelledby="process-title">
          <h2 id="process-title">What to expect</h2>
          <p className="sectionLead">A light, gated path to clarity. You’ll always know what’s next.</p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="step1">
              <Clock className="cardIcon" aria-hidden="true" />
              <h3 id="step1">1) Discovery (20 minutes)</h3>
              <p>Share goals, constraints, and timing; align on success criteria.</p>
              <ul>
                <li>Output: summary + proposed next steps</li>
                <li>Owner: your sponsor + Doulab lead</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step2">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="step2">2) Light diagnostic</h3>
              <p>Quick baseline (MCF 2.1 + IMM-P®) to pinpoint capability gaps.</p>
              <ul>
                <li>Output: findings + options</li>
                <li>Owner: joint working session</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step3">
              <PhoneCall className="cardIcon" aria-hidden="true" />
              <h3 id="step3">3) Proposal (12+12 weeks)</h3>
              <p>Phased plan with clear gates and measurable outcomes.</p>
              <ul>
                <li>Output: plan, cadence, owners</li>
                <li>Owner: exec sponsor + Doulab PM</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Final CTA — shared component */}
        <FinalCta
          id="contact-final"
          ariaLabelledbyId="contact-final-title"
          title="Ready to talk?"
          body="Send a brief or book a quick discovery call. We’ll propose a practical path forward."
          primaryCta={{
            href: `mailto:${EMAIL}?subject=Discovery%20call%20request`,
            label: 'Email us',
            dataCta: 'cta.contact.final.email',
            ariaLabel: 'Email Doulab to request a discovery call',
          }}
          secondaryCta={{
            to: '/what-we-do',
            label: 'See what we do',
            dataCta: 'cta.contact.final.whatwedo',
          }}
        />
      </main>
    </Layout>
  );
}
