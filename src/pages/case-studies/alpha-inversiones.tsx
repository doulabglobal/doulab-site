import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseAlphaInversiones(): ReactNode {
  return (
    <Layout
      title="Alpha Inversiones: Alpha Escalable & Alpha en Línea — Case Study | Doulab"
      description="Evidence-led delivery with clear checkpoints and measurable outcomes across Alpha Escalable and Alpha en Línea."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/alpha-inversiones" />
        {/* Prefer a 1200×630 brand social card for this page */}
        <meta property="og:image" content="https://doulab.net/img/social/og-alpha-inversiones.jpg" />
        <meta property="og:image:alt" content="Alpha Inversiones — program and delivery snapshots." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">All case studies</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="Alpha Inversiones: Alpha Escalable & Alpha en Línea"
          subtitle="Evidence-led delivery with clear checkpoints and measurable outcomes."
          body="A multi-year program to scale sustainably—embedding foresight, disciplined delivery, and customer experience across the organization."
          imageBase="/img/alpha-hero"
          imageAlt="Alpha Inversiones — program and delivery snapshots."
          width={1200}
          height={720}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
          eager
        />

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            Alpha Inversiones, a leading firm in the Dominican Republic’s capital markets, needed to scale sustainably while modernizing culture,
            structure, and customer experience. What began as a goal to reduce acquisition costs expanded into a company-wide effort to build a
            future-ready, innovation-driven enterprise—connecting strategy, data, and delivery.
          </p>
          <p>
            Together we launched <strong>Alpha Escalable</strong>, a transformation program focused on foresight, disciplined project execution,
            and evidence-based decisions. In parallel, we supported the evolution of <strong>Alpha en Línea</strong>—the firm’s website and app—
            as part of an integrated, omnichannel customer journey.
          </p>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>
              <strong>Baseline & direction:</strong> Ran a ClarityScan diagnostic to surface risks, align stakeholders, and sequence work.
            </li>
            <li>
              <strong>Evidence first:</strong> Used <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> to frame problems, define segments and value propositions, and align OKRs.
            </li>
            <li>
              <strong>Delivery system:</strong> Installed cadence, gate reviews, decision owners, and stage-appropriate KPIs.
            </li>
            <li>
              <strong>Governance:</strong> Helped create the innovation committee to prioritize initiatives and monitor progress.
            </li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>

          <h3>Training &amp; capacity building</h3>
          <ul>
            <li>30 employees trained in the <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework (MCF 2.1)</Link> via structured workshops.</li>
            <li>12-week Innovation Maturity Model Program (IMM-P) cycles across discovery, validation, and development over 24 months.</li>
          </ul>

          <h3>Innovation pipeline</h3>
          <ul>
            <li>6 project pitches at the end of IMM-P, tackling scalability, digital experience, and customer journey.</li>
            <li>Initiatives spanned CX, omnichannel, data-driven decision-making, and project management culture (PMO).</li>
          </ul>

          <h3>Organizational transformation</h3>
          <ul>
            <li>Shift from task-based work to role-based execution; from static planning to foresight + project execution.</li>
            <li>Supported launch of a PMO and creation of CX and Business Intelligence functions as transversal areas.</li>
            <li>Improved balance of BAU operations with building scalable, future-oriented capabilities.</li>
          </ul>

          <h3>Strategic impact</h3>
          <ul>
            <li>Program evolved into <strong>Alpha Escalable</strong>, integrating culture, structure, processes, and technology.</li>
            <li>Positioned the firm to scale sustainably, improve CX, and adopt innovation as a core capability.</li>
            <li>Guided decision-making on CRM transformation and on the new <strong>Alpha en Línea</strong> website and app projects.</li>
          </ul>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Aligned leadership and teams around a common growth program (Alpha Escalable) and evidence-led decisions.</li>
            <li>Installed durable capability—governance, roles, and rituals—that sustains delivery beyond individual projects.</li>
            <li>Improved customer experience by connecting strategy, data, and delivery into an integrated journey.</li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15–20 minutes.</p>
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
