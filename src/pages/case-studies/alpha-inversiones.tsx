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
          imageBase="/img/alpha-hero"
          imageAlt="Alpha Inversiones — program and delivery snapshots."
          width={1200}
          height={720}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScanÂ®', dataCta: 'cta.cases.hero.clarityscan' }}
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
    <li>Helped create the innovation committee to prioritize initiatives in the new process.</li>
  </ul>
</section>

        <section className="section" aria-labelledby="outcomes-title">
  <h2 id="outcomes-title">Outcomes</h2>
  <h3>Training & Capacity Building</h3>
  <ul>
    <li>30 Alpha employees trained in the MicroCanvas Framework (MCF 2.1) through structured workshops.</li>
    <li>12‑week Innovation Maturity Model Program (IMM‑P) executed across discovery, validation, and development—run in several cycles over 24 months.</li>
  </ul>
  <h3>Innovation Pipeline</h3>
  <ul>
    <li>6 project pitches at the end of IMM-P, tackling scalability, digital experience, and customer journey.</li>
    <li>Initiatives spanned CX, omnichannel, data-driven decision-making, and project management culture (PMO).</li>
  </ul>
  <h3>Organizational Transformation</h3>
  <ul>
    <li>Shift from task-based work to role-based execution; from static planning to foresight + project execution.</li>
    <li>Supported launch of a PMO and creation of CX and Business Intelligence functions as transversal areas.</li>
    <li>Improved balance of day-to-day operations (BaU) with building scalable, future-oriented capabilities.</li>
  </ul>
  <h3>Strategic Impact</h3>
  <ul>
    <li>Program evolved into “Alpha Escalable,” integrating culture, structure, processes, and technology.</li>
    <li>Positioned Alpha to scale sustainably, improve CX, and adopt innovation as a core capability.</li>
    <li>Guided decision-making on CRM transformation and on the new “Alpha en Línea” website and app projects.</li>
  </ul>
</section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15-20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.case.alpha.clarityscan">
                Start with ClarityScanÂ®
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







