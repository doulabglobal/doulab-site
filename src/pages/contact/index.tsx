// src/pages/contact/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';
import Mail from 'lucide-react/dist/esm/icons/mail';
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://doulab.net/contact' },
    ],
  };

  return (
    <Layout
      title="Contact | Doulab"
      description="Start a discovery call or send us a brief. Privacy first, no third-party forms."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/contact" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Contact | Doulab" />
        <meta property="og:description" content="Start a discovery call or send us a brief. Privacy first, no third-party forms." />
        <meta property="og:image" content="https://doulab.net/img/social/og-contact.jpg" />
        <meta property="og:image:alt" content="Doulab, Contact" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

        {/* Hero LCP preload (React camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/contact-hero.jpg"
          imageSrcSet="/img/contact-hero.avif 1x, /img/contact-hero.webp 1x, /img/contact-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Contact"
          subtitle="Book a 20‑minute discovery call."
          body="Privacy‑first. No external forms or ad pixels. Email us or send a brief; we reply within 2 business days."
          imageBase="/img/contact-hero"
          imageAlt="Contact Doulab"
          width={1600}
          height={900}
          primaryCta={{
          to: '/contact#options',
          label: 'Email us',
          dataCta: 'cta.contact.hero.email',
          }}
          secondaryCta={{
            to: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.contact.hero.book_clarityscan_online',
              external: true,
          }}
          ctaNote="No prep required. We confirm a time and send a brief follow up."
          id="contact-hero"
          ariaLabelledbyId="contact-hero-title"
          eager
        />

        {/* Contact options */}
      <section className="section" id="options" aria-labelledby="options">
        <Heading as="h2" id="options">
          How to reach us
        </Heading>
          <p className="sectionLead">
            Choose what works best for you. Each option keeps your data private and gets you to a clear next step.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="opt-discovery">
              <CalendarCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-discovery">Book a discovery call</h3>
              <p>20 minute intro to align on goals, scope, and constraints.</p>
              <ul>
                <li>Outcome: initial direction and next steps</li>
                <li>Follow up: written summary within 2 business days</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href={`mailto:${EMAIL}?subject=Discovery%20call%20request&body=Hi%20Doulab%2C%20Context%3A%20...`}
                  data-cta="cta.contact.card.discovery_email"
                  aria-label="Email to request a discovery call time"
                >
                  Email for a time
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-brief">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="opt-brief">Send a short brief</h3>
              <p>Share your context, goals, timelines, stakeholders, and constraints.</p>
              <ul>
                <li>Outcome: tailored options within 3 to 5 business days</li>
                <li>Format: email or slide deck, your choice</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href={`mailto:${EMAIL}?subject=Project%20brief&body=Goal%3A%0ATimeline%3A%0AStakeholders%3A%0AConstraints%3A%0ASuccess%20metrics%3A%0A`}
                  data-cta="cta.contact.card.brief_email"
                  aria-label="Email your project brief"
                >
                  Email your brief
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-privacy">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-privacy">Privacy and security</h3>
              <p>We keep things simple and private by default.</p>
              <ul>
                <li>No Google tags or ad pixels</li>
                <li>Cloudflare Web Analytics only</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/releases" data-cta="cta.contact.card.privacy_more" aria-label="See what changed">
                  See what changed
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* What to expect */}
        <section className="section" id="process" aria-labelledby="process-title">
          <h2 id="process-title">What to expect</h2>
          <p className="sectionLead">A light, gated path to clarity. You will always know what is next.</p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="step1">
              <Clock className="cardIcon" aria-hidden="true" />
              <h3 id="step1">1) Discovery, 20 minutes</h3>
              <p>Share goals, constraints, and timing, and align on success criteria.</p>
              <ul>
                <li>Output: summary and proposed next steps</li>
                <li>Owner: your sponsor and Doulab lead</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step2">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="step2">2) Light diagnostic</h3>
              <p>Quick baseline, MCF 2.1 and IMM-P®, to pinpoint capability gaps.</p>
              <ul>
                <li>Output: findings and options</li>
                <li>Owner: joint working session</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step3">
              <PhoneCall className="cardIcon" aria-hidden="true" />
              <h3 id="step3">3) Proposal, 12+12 weeks</h3>
              <p>Phased plan with clear gates and measurable outcomes.</p>
              <ul>
                <li>Output: plan, cadence, owners</li>
                <li>Owner: exec sponsor and Doulab PM</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Final CTA — shared component */}
        <FinalCta
          id="contact-final"
          ariaLabelledbyId="contact-final-title"
          title="Ready to talk?"
          body="Send a brief or book a quick discovery call. We will propose a practical path forward."
          primaryCta={{
          to: '/contact#options',
          label: 'Email us',
          dataCta: 'cta.contact.hero.email',
          ariaLabel: 'Jump to contact options',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.contact.final.book_clarityscan_booking',
            newTab: true,
          }}
        />
      </main>
    </Layout>
  );
}






