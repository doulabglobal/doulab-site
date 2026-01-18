// src/pages/services/clarityscan/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons (tree-shaken)
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import PlayCircle from 'lucide-react/dist/esm/icons/play-circle';
import Layers from 'lucide-react/dist/esm/icons/layers';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_BOOKING_URL } from '../../constants/urls';
import styles from '../b4-p2.module.css';

export default function ClarityScanPage(): ReactNode {
  // JSON-LD schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan®',
    serviceType: 'Innovation/Foresight Diagnostic',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan',
    areaServed: ['Global'],
    potentialAction: { '@type': 'ScheduleAction', target: 'https://booking.doulab.net/clarityscan' },
    description:
      'A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.',
  };

  return (
    <Layout
      title="ClarityScan® — Rapid innovation maturity diagnostic | Doulab"
      description="A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan® — rapid innovation maturity diagnostic" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/clarityscan-hero.jpg"
          imageSrcSet="/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="ClarityScan®"
          subtitle="A rapid diagnostic to see where you are — and what to do next."
          body="In 15–20 minutes, ClarityScan® maps your innovation/foresight maturity across strategy, culture, process, and results—then pinpoints the top moves to unlock momentum."
          imageBase="/img/clarityscan-hero"
          imageAlt="ClarityScan® diagnostic visual"
          width={1600}
          height={900}
                    primaryCta={{
            to: CLARITYSCAN_BOOKING_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.services.clarityscan.hero.book_clarityscan_online',
            ariaLabel: 'Book a ClarityScan via booking.doulab.net',
            external: true,
          }}
          secondaryCta={{ to: '/contact', label: 'Talk to us', dataCta: 'cta.services.clarityscan.hero.contact' }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />

        {/* Who is it for? */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who is it for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>From idea to evidence to fit—fast. Clear gates and focus.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Public Institutions</h3>
              <p>Transparent governance and capability building with a quick baseline.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Private organizations</h3>
              <p>Established companies that want to accelerate internal innovation delivery.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubators & Accelerators</h3>
              <p>Lift cohort quality with evidence-first methods and reusable playbooks.</p>
            </article>
          </div>
        </section>

        {/* What you get */}
        <section className="section" id="benefits" aria-labelledby="benefits-title">
          <h2 id="benefits-title">What you get</h2>
          <div className="cardGrid">
            <article className="card">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3>Maturity snapshot</h3>
              <p>Single-page PDF with clear scores, notes, and risks.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>Top moves</h3>
              <p>3–5 priority actions with owners and cadence.</p>
            </article>
            <article className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>30/60/90</h3>
              <p>Editable plan template to build momentum quickly.</p>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How it works</h2>
          <div className="cardGrid">
            <article className="card">
              <PlayCircle className="cardIcon" aria-hidden="true" />
              <h3>Schedule</h3>
              <p>Pick a time (15–20 minutes).</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Discuss</h3>
              <p>Walk through strategy, culture, process, and results.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>Act</h3>
              <p>Receive your snapshot and next steps within two business days.</p>
            </article>
          </div>
          <p className={`microcopy ${styles.microcopyTop}`}>
            Note: ClarityScan® is a rapid read, not a full program diagnosis. For deeper assessments, see ClarityScan Plus
            or our <Link to="/services/innovation-maturity">IMM-P®</Link> programs.
          </p>
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="clarityscan-final"
          ariaLabelledbyId="clarityscan-final-title"
          title="Ready to get a clear read?"
          body="Run ClarityScan® and get your maturity snapshot plus the exact next steps to take."
          primaryCta={{
            to: CLARITYSCAN_BOOKING_URL,
            label: 'Start with ClarityScan®',
            dataCta: 'cta.services.clarityscan.final.start',
            external: true,
          }}
          secondaryCta={{ to: '/contact', label: 'Talk to us', dataCta: 'cta.services.clarityscan.final.contact' }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}



