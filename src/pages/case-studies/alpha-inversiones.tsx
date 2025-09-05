import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseAlphaInversiones(): ReactNode {
  return (
    <Layout
      title="Case Study | Alpha Inversiones"
      description="Selected outcomes with clear checkpoints, evidence packs, and measurable KPIs."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/alpha-inversiones" />
        <meta property="og:image" content="https://doulab.net/img/alpha.webp" />
        <meta property="og:image:alt" content="Alpha Inversiones — program and delivery snapshots." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.case.alpha.breadcrumb">All case studies</Link>
        </nav>

        <Hero
          title="Alpha Inversiones"
          subtitle="Evidence-led delivery with clear checkpoints and measurable outcomes."
          imageBase="/img/alpha"
          imageAlt="Alpha Inversiones — program and delivery snapshots."
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
            <li>Baseline assessment (ClarityScan) to surface risks, align stakeholders, and sequence work.</li>
            <li>Evidence-first approach using MicroCanvas to frame problems, segments, and value propositions.</li>
            <li>Delivery cadence with gate reviews, decision owners, and measurable KPIs.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>Improved decision latency and throughput on priority initiatives.</li>
            <li>Shared artifacts and dashboards to track learning and delivery velocity.</li>
            <li>Repeatable governance supporting faster, more reliable delivery.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15-20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.case.alpha.clarityscan">
                Start with ClarityScan®
              </Link>
              <Link to="/contact" className="buttonSecondary" data-cta="cta.case.alpha.book_call">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

