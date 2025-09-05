// src/pages/services/clarityscan/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import PlayCircle from 'lucide-react/dist/esm/icons/play-circle';
import Layers from 'lucide-react/dist/esm/icons/layers';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';

export default function ClarityScanPage(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan',
    serviceType: 'Innovation/Foresight Diagnostic',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan',
    areaServed: 'Global',
    potentialAction: { '@type': 'ScheduleAction', target: 'https://calendly.com/lasantiago/clarityscan' },
    description: 'A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.',
  };

  return (
    <Layout title="ClarityScan - Rapid innovation maturity diagnostic | Doulab" description="A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.">
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan" />
        <link rel="preload" as="image" href="/img/clarityscan-hero.png" imageSrcSet="/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.png 1x" imageSizes="(max-width: 700px) 100vw, 600px" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" aria-labelledby="clarityscan-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
              <h1 id="clarityscan-hero-title" className="heroTitle">ClarityScan</h1>
              <p className="heroSubtitle" style={{ textAlign: "justify" }}>A rapid diagnostic to see where you are — and what to do next.</p>
              <p className="heroText">In under 30 minutes, ClarityScan maps your innovation/foresight maturity across strategy, culture, process, and results â€” then pinpoints the top actions to unlock momentum.</p>
              <div className="heroCtas">
                <a className="buttonPrimary" href="https://calendly.com/lasantiago/clarityscan" target="_blank" rel="noopener noreferrer" data-cta="cta.services.clarityscan.hero.run" aria-label="Schedule ClarityScan on Calendly (opens in a new tab)">Run ClarityScan®</a>
                <Link to="/contact" className="buttonSecondary" data-cta="cta.services.clarityscan.hero.contact">Talk to us</Link>
              </div>
            </div>
            <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
              <picture>
                <source srcSet="/img/clarityscan-hero.avif" type="image/avif" />
                <source srcSet="/img/clarityscan-hero.webp" type="image/webp" />
                <img src="/img/clarityscan-hero.png" alt="ClarityScan diagnostic visual" loading="eager" fetchPriority="high" width="600" height="400" className="heroImage" />
              </picture>
            </div>
          </div>
        <p className="microcopy" style={{ marginTop: ".25rem" }}>Built on <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link> and <Link to="/services/innovation-maturity">IMM‑P</Link> gates.</p>
        </section>

        {/* What you get */}
        <section className="section" id="benefits" aria-labelledby="clarityscan-benefits-title">
          <h2 id="clarityscan-benefits-title">What you get</h2>
          <div className="cardGrid">
            <article className="card">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3>Maturity snapshot</h3>
              <p>Singleâ€‘page PDF with clear scores and notes.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>Top moves</h3>
              <p>3â€“5 priority actions with owners and cadence.</p>
            </article>
            <article className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>30/60/90</h3>
              <p>Editable plan template to build momentum fast.</p>
            </article>
          </div>
        <p className="microcopy" style={{ marginTop: ".25rem" }}>Built on <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link> and <Link to="/services/innovation-maturity">IMM‑P</Link> gates.</p>
        </section>

        {/* How it works */}
        <section className="section" id="how" aria-labelledby="clarityscan-how-title">
          <h2 id="clarityscan-how-title">How it works</h2>
          <div className="cardGrid">
            <article className="card">
              <PlayCircle className="cardIcon" aria-hidden="true" />
              <h3>Schedule</h3>
              <p>Pick a time (30 minutes).</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Discuss</h3>
              <p>Walk through strategy, culture, process, and results.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>Act</h3>
              <p>Receive your snapshot and next steps within 2 days.</p>
            </article>
          </div>
          <p className="microcopy" style={{ marginTop: '.5rem' }}>Note: ClarityScan is a rapid read, not a full program diagnosis. For deeper assessments, see ClarityScan Plus or our IMMâ€‘P Programs.</p>
        <p className="microcopy" style={{ marginTop: ".25rem" }}>Built on <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link> and <Link to="/services/innovation-maturity">IMM‑P</Link> gates.</p>
        </section>

        {/* Final CTA */}
        <section className="section" id="cta" aria-labelledby="clarityscan-cta-title">
          <div className="finalCta">
            <h2 id="clarityscan-cta-title">Ready to get a clear read?</h2>
            <p>Run ClarityScan® and get your maturity snapshot plus the exact next steps to take.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <a className="buttonPrimary" href="https://calendly.com/lasantiago/clarityscan" target="_blank" rel="noopener noreferrer" data-cta="cta.services.clarityscan.final.run" aria-label="Schedule ClarityScan on Calendly (opens in a new tab)">Start ClarityScan &rarr;</a>
              <Link className="buttonSecondary" to="/contact" data-cta="cta.services.clarityscan.final.contact">Contact us</Link>
            </div>
          </div>
        <p className="microcopy" style={{ marginTop: ".25rem" }}>Built on <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link> and <Link to="/services/innovation-maturity">IMM‑P</Link> gates.</p>
        </section>
      </main>
    </Layout>
  );
}


