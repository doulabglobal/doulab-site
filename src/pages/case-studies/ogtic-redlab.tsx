// src/pages/case-studies/ogtic-redlab.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import styles from './ogtic-redlab.module.css';

export default function CaseOgticRedlab(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: 'https://doulab.net/case-studies' },
      { '@type': 'ListItem', position: 3, name: 'OGTIC: RedLab Innovation Network', item: 'https://doulab.net/case-studies/ogtic-redlab' },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'OGTIC: RedLab Innovation Network',
    url: 'https://doulab.net/case-studies/ogtic-redlab',
    inLanguage: 'en',
    description:
      'A public sector innovation network built through structured capability, cohorts, and evidence based delivery.',
    image: 'https://doulab.net/img/social/og-ogtic-redlab.jpg',
    primaryImageOfPage: 'https://doulab.net/img/social/og-ogtic-redlab.jpg',
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: 'https://doulab.net' },
    about: {
      '@type': 'Organization',
      name: 'OGTIC, RedLab',
      url: 'https://ogtic.gob.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: 'https://doulab.net',
    },
  };

  return (
    <Layout
      title="OGTIC: RedLab Innovation Network | Case Study | Doulab"
      description="We helped design and facilitate RedLab with shared methods, governance, and cadence so public teams move from ideas to evidence and delivery."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/ogtic-redlab" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="OGTIC: RedLab Innovation Network | Case Study | Doulab"
        />
        <meta
          property="og:description"
          content="We helped design and facilitate RedLab with shared methods, governance, and cadence so public teams move from ideas to evidence and delivery."
        />
        <meta name="keywords" content="public sector innovation, innovation labs, governance, MicroCanvas, IMM Program, RedLab, OGTIC" />
        {/* Prefer a 1200×630 branded social card */}
        <meta property="og:image" content="https://doulab.net/img/social/og-ogtic-redlab.jpg" />
        <meta property="og:image:alt" content="OGTIC, Red de Laboratorios de Innovación, RedLab cohort sessions." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/ogtic-redlab-card.jpg"
          imageSrcSet="/img/ogtic-redlab-card.avif 1x, /img/ogtic-redlab-card.webp 1x, /img/ogtic-redlab-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`microcopy ${styles.breadcrumb}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">All case studies</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="OGTIC: RedLab Innovation Network"
          subtitle="Structured capability, shared methods, and cohort learning across public institutions."
          body="We helped design and facilitate RedLab, aligning labs under a common method, installing governance and cadence, and moving priority challenges from ideas to evidence backed delivery."
          imageBase="/img/ogtic-redlab-card"
          imageAlt="OGTIC, Red de Laboratorios de Innovación, RedLab cohort sessions."
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
            <li><strong>Sector:</strong> Public sector, multi-institution</li>
            <li><strong>Scope:</strong> Innovation network design, cohorts, and operating model</li>
            <li><strong>Approach:</strong> Evidence-led, gates and cadence, shared playbooks</li>
            <li><strong>Result:</strong> Labs aligned to a common method and faster, clearer decisions</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            The Red de Laboratorios de Innovación, RedLab, was created under OGTIC to strengthen innovation capacity in
            the Dominican Republic public sector. The goal was to move from isolated efforts to a structured, scalable
            ecosystem where teams can design, test, and implement solutions to complex challenges.
          </p>
          <p>
            Early hurdles included uneven methods, fragmented governance, and uncertainty about how to sustain
            participation across diverse institutions. RedLab needed a common framework, a clear program structure, and
            practical tools that build capability while delivering visible results.
          </p>
          <p>
            Doulab partnered with OGTIC to design and facilitate Cohorts 01 and 02, anchored in the{' '}
            <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework, MCF 2.1</Link> and the{' '}
            <Link to="/services/innovation-maturity">Innovation Maturity Model Program, IMM-P®</Link>. The aim was to give
            public servants effective tools and a repeatable process that position RedLab as a pillar for public
            innovation.
          </p>
          <p className="microcopy">
            RedLab in one line: clearer gates, shared language, better delivery.
          </p>
          <p className="microcopy">
            Who benefits first: policy, service delivery, and digital teams that need clearer gates and faster decisions.
          </p>
          <p className="microcopy">
            Social proof: cohort format and shared playbooks help teams see quick wins and reuse what works.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Key risks and mitigations</h2>
          <ul>
            <li><strong>Adoption risk:</strong> Mitigated with peer reviews, light templates, and visible quick wins.</li>
            <li><strong>Continuity risk:</strong> Mitigated with named owners, a simple operating rhythm, and playbooks.</li>
            <li><strong>Evidence quality risk:</strong> Mitigated with standard evidence packs and gate criteria.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title" aria-describedby="work-desc">
          <p id="work-desc" className="sr-only">What RedLab implemented: operating model, cohorts, shared method, governance, and playbooks.</p>
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>
              <strong>Network and operating model:</strong> Co-designed the network structure, lab charter template, intake,
              and decision gates with accountable owners.
            </li>
            <li>
              <strong>Cohort program:</strong> Ran cohort cycles, discovery to validation to delivery, with peer reviews,
              demo days, and evidence packs at each gate.
            </li>
            <li>
              <strong>Shared method:</strong> Adopted{' '}
              <Link to="/docs/research-resources/microcanvas">MCF 2.1</Link> for problem framing, value definition, and experiment
              design across institutions.
            </li>
            <li>
              <strong>Governance and cadence:</strong> Installed rhythms, stand-ups, reviews, decision forums, and stage
              appropriate KPIs tied to policy and service outcomes.
              <p className="microcopy">
                Governance model: <strong>RACI</strong> per initiative; <strong>weekly</strong> cadence; <strong>gate checklist</strong> per stage;
                <strong> decision log</strong> and <strong>risk register</strong> for traceability.
              </p>
              <p className="microcopy">
                KPI tree by stage: Discovery, signal quality and interview coverage; Validation, conversion to key action and time to decision;
                Delivery, cycle time and escaped defects; Scale, adoption, satisfaction, and unit economics where relevant.
              </p>
              <p className="microcopy">
                Examples: Discovery, interview coverage; Validation, conversion to key action; Delivery, cycle time; Scale, adoption and satisfaction.
              </p>
              <p className="microcopy">
                Capability baseline at kickoff, tracked quarterly against the KPI tree to show maturity gains over time.
              </p>
              <p className="microcopy">
                Operational rhythm: weekly reviews, monthly gate checks, and quarterly capability snapshots.
              </p>
              <p className="microcopy">
                SLA: gate review response within five working days, with decision memo or next-evidence request.
              </p>
            </li>
            <li>
              <strong>Playbooks and handover:</strong> Produced guides for lab charters, evidence packs, gate criteria, and role
              definitions to preserve institutional memory and scale.
              <p className="microcopy">
                Evidence pack: problem and assumptions, stakeholders and JTBD, experiment plan and results, artifact links, decision memo, next step.
              </p>
              <p className="microcopy">
                Insights are coded into a signal library to inform next experiments and program roadmaps.
              </p>
              <p className="microcopy">
                After-action reviews at the end of each cohort feed into the signal library and the next-cohort roadmap.
              </p>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Timeline</h2>
          <ul>
            <li><strong>Cohort 01:</strong> 2024, network design, charters, and first evidence packs.</li>
            <li><strong>Cohort 02:</strong> 2025, scale out of shared methods and deeper governance and cadence.</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title" aria-describedby="outcomes-desc">
          <p id="outcomes-desc" className="sr-only">What changed, how decisions improved, and capability growth.</p>
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li><strong>Labs stood up:</strong> Seven innovation labs co-created and aligned to a common method and cadence, as of September 2025.</li>
            <li><strong>Faster decisions:</strong> Gate reviews and accountable owners reduced decision latency across participating entities.</li>
            <li><strong>Quicker cycles:</strong> Priority projects moved from ideas to pilots with auditable evidence.</li>
            <li><strong>Reusable playbooks:</strong> Charters, gate criteria, and evidence templates standardize how work moves.</li>
            <li><strong>Capability uplift:</strong> Teams practiced evidence-led delivery, increasing confidence and alignment.</li>
          </ul>
          <p className="microcopy">
            Tracked families, as of September 2025: decision latency, cycle time, adoption and satisfaction, and capability growth.
          </p>
          <p className="microcopy">
            See the case diagrams below for the system flow and capability progression.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Shifted innovation from one-off projects to a system with clear roles, rules, and rhythms.</li>
            <li>Enabled cross-institution learning and reuse, which lowers risk and duplication.</li>
            <li>Created traceability from policy goals to experiments and delivery decisions.</li>
            <li>Built a base to scale future cohorts and to embed innovation in public management.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Case diagrams</h2>
          <Admonition type="tip" title="Diagram — System Flow">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Establish Cohort Program]
    C --> D[Enablers: Governance + Playbooks]
    D --> E[Capability: Repeatable Lab Delivery]
    E --> F[Outcomes: Clearer Decisions + Reuse]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagram — Capability Progression">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Isolated Labs]
    B[Shared MCF Method]
    C[IMM-P Gate Cadence]
    D[After: Network Delivery]
`} />
          </Admonition>
        </section>

        {/* CTA briefing cards */}
        <section className="section" aria-label="CTA briefing cards">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">Prefer a briefing?</h3>
              <p>
                Prefer a briefing for your team or partners? <Link to="/contact">Request a briefing</Link>.
              </p>
              <p>To speed things up: share your goals, timelines, constraints, and how you measure success today.</p>
              <p>
                Planning a cohort or event? <Link to="/contact">Co host a session</Link>.
              </p>
              <p>
                Exploring co-branded cohorts or MOUs? <Link to="/contact">Let's outline options</Link>.
              </p>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Recommended path</h3>
              <p>Start small: Discovery call  → ClarityScan  → Gate 1 pilot.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Related services</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programs, IMM-Pr</Link></li>
                <li><Link to="/services/clarityscan">Diagnostics, ClarityScanr</Link></li>
              </ul>
              <p>
                See more examples in <Link to="/case-studies">Case studies</Link>.
              </p>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="ogtic-redlab-final-cta"
          ariaLabelledbyId="ogtic-redlab-final-cta-title"
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





