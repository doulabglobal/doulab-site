// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Gauge from 'lucide-react/dist/esm/icons/gauge';

export default function InnovationMaturityProgram(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Innovation Maturity Model â€” Program (IMM-P)',
    serviceType: 'Innovation capability acceleration',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/innovation-maturity',
    description:
      'A structured, gated program that installs repeatable innovation capability using the MicroCanvas Framework (MCF v2.1) and IMM-P governance.',
    areaServed: 'Global',
  };

  return (
    <Layout
      title="Innovation Maturity Model â€” Program (IMM-P) | Doulab"
      description="A structured, gated program to assess, strengthen, and accelerate innovation capability using the MicroCanvas Framework (MCF v2.1)."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
        <link rel="preload" as="image" href="/img/imm-program.png" imageSrcSet="/img/imm-program.avif 1x, /img/imm-program.webp 1x, /img/imm-program.png 1x" imageSizes="(max-width: 700px) 100vw, 600px" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" aria-labelledby="imm-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
              <h1 id="imm-hero-title" className="heroTitle">Innovation Maturity Model â€” Program (IMM-P)</h1>
              <p className="heroSubtitle" style={{ textAlign: 'justify' }}>Assess. Strengthen. Accelerate.</p>
              <p className="heroText">
                IMM-P is Doulab's <strong>structured program</strong> to install <strong>repeatable innovation</strong>:
                we baseline capability, run <strong>gated delivery</strong> with the <strong>MicroCanvas Framework (MCF v2.1)</strong>,
                and build the <strong>governance &amp; metrics</strong> that turn strategy into outcomes.
              </p>

              <div className="heroCtas">
                <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.services.imm.hero.clarityscan">Start with ClarityScan®</Link>
                <Link to="/contact" className="buttonSecondary" data-cta="cta.services.imm.hero.contact">Talk to us</Link>
              </div>

              <p className="heroText" style={{ marginTop: '0.75rem', opacity: 0.9 }}>
                <em>Trusted by teams at OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.</em>
              </p>
            </div>

            <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
              <picture>
                <source srcSet="/img/imm-program.avif" type="image/avif" />
                <source srcSet="/img/imm-program.webp" type="image/webp" />
                <img src="/img/imm-program.png" alt="IMM-P program illustration" className="heroImage" loading="eager" fetchPriority="high" width="600" height="400" />
              </picture>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section" id="imm-who" aria-labelledby="imm-who-title">
          <h2 id="imm-who-title">Who it's for</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="imm-startups">Startups</h3>
              <p>From ideas to evidence to product/market fit â€” with gates, focus, and repeatable delivery.</p>
            </article>
            <article className="card" aria-labelledby="imm-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-public">Public Institutions</h3>
              <p>Digital transformation with transparent governance and capability building.</p>
            </article>
            <article className="card" aria-labelledby="imm-leaders">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="imm-leaders">Innovation Leaders</h3>
              <p>Operating models, metrics, and coaching to sustain momentum.</p>
            </article>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section" id="imm-outcomes" aria-labelledby="imm-outcomes-title">
          <h2 id="imm-outcomes-title">What You Can Expect</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-momentum">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="imm-momentum">Momentum</h3>
              <p>Decisions made faster; prototypes shipped sooner; learning captured continuously.</p>
            </article>
            <article className="card" aria-labelledby="imm-clarity">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="imm-clarity">Clarity</h3>
              <p>Baselines &amp; KPIs that translate strategy into everyday action.</p>
            </article>
            <article className="card" aria-labelledby="imm-capability">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-capability">Capability</h3>
              <p>Teams equipped with methods, templates, and governance to scale.</p>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" id="imm-cta" aria-labelledby="imm-cta-title">
          <div className="finalCta">
            <h2 id="imm-cta-title">Ready to accelerate your innovation maturity?</h2>
            <p>Kick off with a quick diagnostic or talk with our team about running IMM-P in your organization.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <a className="buttonPrimary" href="https://calendly.com/lasantiago/clarityscan" target="_blank" rel="noopener noreferrer" data-cta="cta.services.imm.final.clarityscan">Start with ClarityScan &rarr;</a>
              <Link className="buttonSecondary" to="/contact" data-cta="cta.services.imm.final.contact">Book a discovery call &rarr;</Link>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
              <em>We use privacy-first analytics only. No Google tags or third-party trackers.</em>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

