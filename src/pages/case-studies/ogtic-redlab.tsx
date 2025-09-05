import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseOgticRedlab(): ReactNode {
  return (
    <Layout
      title="Case Study | OGTIC: RedLab Innovation Network"
      description="Public-sector innovation network built through structured capability, cohorts, and evidence-based delivery."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/ogtic-redlab" />
        <meta property="og:image" content="https://doulab.net/img/ogtic-redlab-card.jpg" />
        <meta property="og:image:alt" content="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.case.ogtic.breadcrumb">All case studies</Link>
        </nav>

        <Hero
          title="OGTIC — RedLab Innovation Network"
          subtitle="Built and facilitated a public-sector innovation network with structured capability and cohort learning."
          imageBase="/img/ogtic-redlab-card"
          imageAlt="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions."
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
            <li>Network design and operating model.</li>
            <li>Cohort programming with evidence loops.</li>
            <li>Capability build-out and governance cadence.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>Reduced decision latency across participating entities.</li>
            <li>Faster delivery cycles on priority projects.</li>
            <li>Reusable playbooks and stronger internal capability.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15-20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.case.ogtic.clarityscan">
                Start with ClarityScan®
              </Link>
              <Link to="/contact" className="buttonSecondary" data-cta="cta.case.ogtic.book_call">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

