import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseOgticRedlab(): ReactNode {
  return (
    <Layout
      title="OGTIC: RedLab Innovation Network — Case Study | Doulab"
      description="A public-sector innovation network built through structured capability, cohorts, and evidence-based delivery."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/ogtic-redlab" />
        {/* Prefer a 1200×630 branded social card for this page */}
        <meta property="og:image" content="https://doulab.net/img/social/og-ogtic-redlab.jpg" />
        <meta property="og:image:alt" content="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions." />
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
          title="OGTIC: RedLab Innovation Network"
          subtitle="Structured capability, shared methods, and cohort learning across public institutions."
          body="We helped design and facilitate RedLab—aligning labs under a common method, installing governance and cadence, and moving priority challenges from idea to evidence-backed delivery."
          imageBase="/img/ogtic-redlab-card"
          imageAlt="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions."
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
            The Red de Laboratorios de Innovación (RedLab) was created under OGTIC to strengthen innovation capacity in
            the Dominican Republic’s public sector. The ambition: move from isolated initiatives to a structured,
            scalable ecosystem where teams can design, test, and implement solutions to complex challenges.
          </p>
          <p>
            Early hurdles included uneven methods, fragmented governance, and uncertainty about sustaining participation
            across diverse institutions. RedLab needed a common framework, program structure, and practical tooling
            that would build capability while delivering visible results.
          </p>
          <p>
            Doulab partnered with OGTIC to design and facilitate Cohorts 01 and 02, anchoring the work in the{' '}
            <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework (MCF 2.1)</Link> and an innovation-maturity
            progression via the{' '}
            <Link to="/services/innovation-maturity">IMM-P program</Link>. The goal: equip public servants with effective tools
            and a repeatable process that positions RedLab as a pillar of public-sector innovation.
          </p>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>
              <strong>Network & operating model:</strong> Co-designed the network structure, lab charter template, intake,
              and decision gates with accountable owners.
            </li>
            <li>
              <strong>Cohort program:</strong> Designed and ran cohort cycles (discovery → validation → delivery),
              with peer reviews, demo days, and evidence packs at each gate.
            </li>
            <li>
              <strong>Shared method:</strong> Adopted <Link to="/docs/research-resources/microcanvas">MCF 2.1</Link> for problem framing,
              value definition, and experiment design—consistent across institutions.
            </li>
            <li>
              <strong>Governance & cadence:</strong> Installed operating rhythms (stand-ups, reviews, decision forums) and
              stage-appropriate KPIs tied to policy and service outcomes.
            </li>
            <li>
              <strong>Playbooks & handover:</strong> Produced reusable guides (lab charter, evidence packs, gate criteria,
              role definitions) to preserve institutional memory and scale.
            </li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>
              <strong>Labs stood up:</strong> 7 innovation labs co-created and aligned to a common method and cadence.
            </li>
            <li>
              <strong>Faster decisions:</strong> Gate reviews and accountable owners reduced decision latency across participating entities.
            </li>
            <li>
              <strong>Quicker cycles:</strong> Priority projects advanced from idea to prototypes/pilots with auditable evidence.
            </li>
            <li>
              <strong>Reusable playbooks:</strong> Charters, gate criteria, and evidence templates now standardize how work progresses.
            </li>
            <li>
              <strong>Capability uplift:</strong> Public-sector teams practiced evidence-led delivery, increasing confidence and alignment.
            </li>
          </ul>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Shifted innovation from ad-hoc projects to a system with clear roles, rules, and rhythms.</li>
            <li>Enabled cross-institution learning and reuse, lowering risk and duplication.</li>
            <li>Created traceability from policy goals to experiments and delivery decisions.</li>
            <li>Built a foundation to scale future cohorts and integrate innovation into public management.</li>
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
