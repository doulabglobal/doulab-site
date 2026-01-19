// src/pages/case-studies/alpha-inversiones.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

export default function CaseAlphaInversiones(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: 'https://doulab.net/case-studies' },
      { '@type': 'ListItem', position: 3, name: 'Alpha Inversiones: Alpha Escalable and Alpha en Línea', item: 'https://doulab.net/case-studies/alpha-inversiones' },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'Alpha Inversiones: Alpha Escalable and Alpha en Línea',
    url: 'https://doulab.net/case-studies/alpha-inversiones',
    inLanguage: 'en',
    description:
      'Evidence led delivery with clear checkpoints and measurable outcomes across Alpha Escalable and Alpha en Línea.',
    image: 'https://doulab.net/img/social/og-alpha-inversiones.jpg',
    primaryImageOfPage: 'https://doulab.net/img/social/og-alpha-inversiones.jpg',
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: 'https://doulab.net' },
    about: {
      '@type': 'Organization',
      name: 'Alpha Inversiones',
      url: 'https://alphainversiones.com.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: 'https://doulab.net',
    },
  };

  return (
    <Layout
      title="Alpha Inversiones: Alpha Escalable and Alpha en Línea | Case Study | Doulab"
      description="Evidence led delivery with clear checkpoints and measurable outcomes across Alpha Escalable and Alpha en Línea."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/alpha-inversiones" />
        <meta
          property="og:title"
          content="Alpha Inversiones: Alpha Escalable and Alpha en Línea | Case Study | Doulab"
        />
        <meta
          property="og:description"
          content="Evidence led delivery with clear checkpoints and measurable outcomes across Alpha Escalable and Alpha en Línea."
        />
        {/* Prefer a 1200×630 brand social card for this page */}
        <meta property="og:image" content="https://doulab.net/img/social/og-alpha-inversiones.jpg" />
        <meta property="og:image:alt" content="Alpha Inversiones, program and delivery snapshots." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/alpha-hero.jpg"
          imageSrcSet="/img/alpha-hero.avif 1x, /img/alpha-hero.webp 1x, /img/alpha-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className={`microcopy ${'pages-case-studies-alpha-inversiones__breadcrumb'}`}
        >
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">
            ← All case studies
          </Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="Alpha Inversiones: Alpha Escalable and Alpha en Línea"
          subtitle="Evidence led delivery with clear checkpoints and measurable outcomes."
          body="A multi year program to scale, with foresight, disciplined delivery, and better customer experience."
          imageBase="/img/alpha-hero"
          imageAlt="Alpha Inversiones, program and delivery snapshots."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Explore ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Explore ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Book a ClarityScan online via Stripe Checkout', external: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">At a glance</h2>
          <ul>
            <li><strong>Sector:</strong> Capital markets, regulated</li>
            <li><strong>Focus:</strong> Transformation program and omnichannel experience</li>
            <li><strong>Approach:</strong> Evidence first, gates and cadence, CX and BI as transversal capabilities</li>
            <li><strong>Result:</strong> A scalable program, stronger governance, and better customer journeys</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            Alpha Inversiones, a leading firm in the Dominican Republic capital markets, needed to scale sustainably
            while modernizing culture, structure, and customer experience. What began as a goal to reduce acquisition
            costs grew into a company wide effort to build a future ready, innovation driven enterprise that connects
            strategy, data, and delivery.
          </p>
          <p>
            Together we launched <strong>Alpha Escalable</strong>, a transformation program focused on foresight,
            disciplined project execution, and evidence based decisions. In parallel, we supported the evolution of
            <strong> Alpha en Línea</strong>, the website and app, as part of an integrated, omnichannel customer journey.
          </p>
          <p className="microcopy">
            Alpha Escalable in one line: clearer gates, faster decisions, better delivery.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Key risks and mitigations</h2>
          <ul>
            <li><strong>Adoption risk:</strong> Mitigated with interview tests and staged pilots.</li>
            <li><strong>Delivery risk:</strong> Mitigated with gate reviews, owners, and weekly cadence.</li>
            <li><strong>Alignment risk:</strong> Mitigated with evidence packs and an innovation committee.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>
              <strong>Baseline and direction:</strong> Ran a ClarityScan diagnostic to surface risks, align stakeholders, and sequence the work.
            </li>
            <li>
              <strong>Evidence first:</strong> Used{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> to frame problems, define segments and value propositions,
              and align OKRs.
              <p className="microcopy">
                Evidence pack: problem and assumptions, segment and JTBD, experiment plan and results,
                artifact links, decision memo, next step.
              </p>
              <p className="microcopy">
                Insights are coded into a signal library to inform next experiments and the roadmap.
              </p>
            </li>
            <li>
              <strong>Delivery system:</strong> Installed cadence, gate reviews, decision owners, and stage appropriate KPIs.
              <ul>
                <li><strong>Gate 1:</strong> Go or No Go after discovery, based on evidence packs.</li>
                <li><strong>Gate 2:</strong> Go or No Go before scale, based on adoption and risk.</li>
              </ul>
              <p className="microcopy">
                Governance model: <strong>RACI</strong> per initiative; <strong>weekly</strong> cadence; <strong>gate checklist</strong> per stage;
                <strong> decision log</strong> and <strong>risk register</strong> for traceability.
              </p>
              <p className="microcopy">
                KPI tree by stage: Discovery, signal quality and interview coverage; Validation, conversion to key action and time to decision;
                Development, cycle time and escaped defects; Scale, adoption, NPS, and unit economics.
              </p>
              <p className="microcopy">
                Artifacts: program charter, gate checklist, RACI, evidence pack template, weekly cadence.
              </p>
            </li>
            <li>
              <strong>Governance:</strong> Helped create the innovation committee to prioritize initiatives and monitor progress.
            </li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" id="outcomes" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>

          <h3>Training and capacity building</h3>
          <ul>
            <li>Trained 30 employees in the <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework, MCF 2.1</Link> through structured workshops.</li>
            <li>Ran 12 week Innovation Maturity Model Program, IMM P, cycles across discovery, validation, and development over 24 months.</li>
          </ul>

          <h3>Innovation pipeline</h3>
          <ul>
            <li>Six project pitches at the end of IMM P, focused on scalability, digital experience, and the customer journey.</li>
            <li>Initiatives spanned CX, omnichannel, data driven decision making, and project management culture, PMO.</li>
          </ul>

          <h3>Organizational transformation</h3>
          <ul>
            <li>Shifted from task based work to role based execution, and from static planning to foresight and project execution.</li>
            <li>Supported the launch of a PMO and the creation of CX and Business Intelligence as transversal areas.</li>
            <li>Improved the balance of BAU operations with building scalable, future oriented capabilities.</li>
          </ul>

          <h3>Strategic impact</h3>
          <ul>
            <li><strong>Integrated</strong> culture, structure, processes, and technology into Alpha Escalable.</li>
            <li><strong>Positioned</strong> the firm to scale, improve CX, and build innovation as a core skill.</li>
            <li><strong>Guided</strong> decisions on the CRM and the new <strong>Alpha en Línea</strong> website and app.</li>
          </ul>

          <p className="microcopy">
            Tracked families: decision latency, cycle time, adoption and conversion, and capability growth.
          </p>
          <p className="microcopy">
            See the case diagrams below for the system flow and capability progression.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Aligned leadership and teams around a common growth program and evidence led decisions.</li>
            <li>Installed durable capability, governance, roles, and rituals that sustain delivery beyond individual projects.</li>
            <li>Improved customer experience by connecting strategy, data, and delivery into an integrated journey.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Case diagrams</h2>
          <Admonition type="tip" title="Diagram — System Flow">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Run IMM-P Program]
    C --> D[Enablers: Committee + Gate Reviews]
    D --> E[Capability: Innovation Pipeline]
    E --> F[Outcomes: Aligned Decisions + Scalable Delivery]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagram — Capability Progression">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Task-based Execution]
    B[MCF Training + Workshops]
    C[IMM-P Cadence + Governance]
    D[After: Role-based Delivery]
`} />
          </Admonition>
        </section>

        {/* CTA briefing cards */}
        <section className="section ctaBriefingCards" aria-label="CTA briefing cards">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">Prefer a briefing?</h3>
              <p>Prefer a briefing for your team or partners?</p>
              <p>Helpful to share: goals, timelines, constraints, and how you measure success today.</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary">Request a briefing</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Recommended path</h3>
              <p>Start small: Discovery call  → ClarityScan  → Gate 1 pilot.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Related services</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programs, IMM-P®</Link></li>
                <li><Link to="/services/clarityscan">Diagnostics, ClarityScan®</Link></li>
              </ul>
              <p>See more examples in case studies.</p>
              <div className="ctaCardButtons">
                <Link to="/case-studies" className="buttonSecondary">Case studies</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="alpha-final-cta"
          ariaLabelledbyId="alpha-final-cta-title"
          title="Take the first step"
          body="Get your baseline in 15 to 20 minutes."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.cases.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="No prep required."
        />
      </main>
    </Layout>
  );
}




