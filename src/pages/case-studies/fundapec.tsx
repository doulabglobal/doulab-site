import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseFundapec(): ReactNode {
  return (
    <Layout
      title="Case Study | FUNDAPEC: Alumni Platform"
      description="Comunidad FUNDAPEC: deeper engagement and new value through a modern alumni platform."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/fundapec" />
        <meta property="og:image" content="https://doulab.net/img/fundapec-card.jpg" />
        <meta property="og:image:alt" content="Comunidad FUNDAPEC — alumni platform and engagement." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.case.fundapec.breadcrumb">All case studies</Link>
        </nav>

        <Hero
          title="FUNDAPEC — Alumni Platform"
          subtitle="Co-developed and launched Comunidad FUNDAPEC to deepen engagement and unlock new value."
          imageBase="/img/fundapec-card"
          imageAlt="Comunidad FUNDAPEC — alumni platform and engagement."
          width={1200}
          height={720}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15-20 minutes."
          eager
        />

        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>Brief context of the challenge and goals. Replace this with your specific narrative.</p>
        </section>

        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>Stakeholder mapping and value proposition refinement.</li>
            <li>Platform design with evidence loops.</li>
            <li>Go-to-market and governance cadence.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>Engagement increased via targeted journeys.</li>
            <li>Operational clarity and faster decision cycles.</li>
            <li>New value streams identified.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15-20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.cases.final.clarityscan">
                Start with ClarityScan®
              </Link>
              <Link to="/contact" className="buttonSecondary" data-cta="cta.cases.final.book_call">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

