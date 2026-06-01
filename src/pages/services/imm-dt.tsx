// src/pages/services/imm-dt.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import CardGrid from '../../components/CardGrid/CardGrid';

import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import Target from 'lucide-react/dist/esm/icons/target';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Layers from 'lucide-react/dist/esm/icons/layers';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';

export default function IMMDTPage(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IMM-DT — Digital Transformation Maturity',
    serviceType: 'Digital Transformation Diagnostic & Roadmap',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://www.doulab.net' },
    url: 'https://www.doulab.net/services/imm-dt',
    areaServed: ['Latin America', 'Caribbean', 'Global'],
    description:
      'The digital transformation vertical of IMM-P®. Baseline DT maturity across strategy, process, culture, technology and governance; sequence a 0–36 month roadmap with evidence-backed gates.',
  };

  return (
    <Layout
      title="IMM-DT — Digital Transformation Maturity | Doulab"
      description="IMM-DT is the digital transformation vertical of IMM-P®. Baseline DT maturity across strategy, process, culture, technology and governance; sequence a 0–36 month roadmap with evidence-backed gates."
    >
      <Head>
        <link rel="canonical" href="https://www.doulab.net/services/imm-dt" />
        <meta property="og:title" content="IMM-DT — Digital Transformation Maturity | Doulab" />
        <meta
          property="og:description"
          content="The digital transformation vertical of IMM-P®. Baseline maturity, prioritize gaps, sequence a 0–36 month roadmap."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="IMM-DT"
          subtitle="The digital transformation vertical of IMM-P®."
          body="IMM-DT extends the Innovation Maturity Model — Program (IMM-P®) to the digital transformation domain. We baseline DT maturity across strategy, process, culture, technology and governance; benchmark against regional peers; and sequence a phased 0–36 month roadmap with evidence-backed readiness gates."
          imageBase="/img/services-hero"
          imageAlt="IMM-DT — Digital Transformation Maturity"
          width={600}
          height={400}
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Talk to us about IMM-DT', dataCta: 'cta.services.imm-dt.hero.contact' }}
          secondaryCta={{ to: '/services/innovation-maturity', label: 'See IMM-P® (umbrella program)', dataCta: 'cta.services.imm-dt.hero.imm-p' }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM-P® 2.2 (domain scoring, phase readiness, evidence gates)."
        />

        {/* What IMM-DT measures */}
        <section className="section" id="dimensions" aria-labelledby="dimensions-title">
          <h2 id="dimensions-title">What IMM-DT measures</h2>
          <p className="sectionLead">
            Five domains, scored as per the IMM-P® 2.2 model, applied to the digital transformation problem space.
          </p>
          <CardGrid>
            <article className="card" aria-labelledby="dim-strategy">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="dim-strategy">Strategy</h3>
              <p>DT thesis, customer and business model clarity, portfolio choices, and the link from strategy to funded initiatives.</p>
            </article>
            <article className="card" aria-labelledby="dim-process">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="dim-process">Process</h3>
              <p>Delivery cadence, decision gates, evidence loops, and how the organization moves work from intent to outcome.</p>
            </article>
            <article className="card" aria-labelledby="dim-culture">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="dim-culture">Culture</h3>
              <p>Behaviors and incentives that support evidence-based decision-making, learning, and accountable risk-taking.</p>
            </article>
            <article className="card" aria-labelledby="dim-tech">
              <Cpu className="cardIcon" aria-hidden="true" />
              <h3 id="dim-tech">Technology</h3>
              <p>Architecture, data, platforms, and the technical readiness to execute and scale the transformation safely.</p>
            </article>
            <article className="card" aria-labelledby="dim-governance">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="dim-governance">Governance</h3>
              <p>Roles, decision rights, risk and compliance posture, and the institutional learning that compounds across cohorts.</p>
            </article>
          </CardGrid>
        </section>

        {/* How IMM-DT delivers */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How IMM-DT delivers</h2>
          <CardGrid>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>1. Kickoff diagnostic</h3>
              <p>Set scope, respondents, and the evidence bar. Calibrate the maturity model to the organization’s DT thesis.</p>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>2. Domain assessment</h3>
              <p>Score each domain across role-segmented respondent cohorts (directive, middle management, operations). Where the engagement requires it, every score is evidence-backed.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>3. Benchmark</h3>
              <p>Compare against regional peers (e.g., fintech reference set for financial services) to make “good” concrete.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>4. Roadmap</h3>
              <p>Sequence prioritized initiatives across <strong>0–3, 3–6, 6–9, 9–12, 12–24 and 24–36 month</strong> horizons, with named owners and IMM-P® phase readiness gates.</p>
            </article>
          </CardGrid>
        </section>

        {/* Who it's for */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who IMM-DT is for</h2>
          <CardGrid>
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>Financial services</h3>
              <p>Regulated organizations running multi-year DT programs that need an audit-ready maturity baseline and a sequenced roadmap.</p>
            </article>
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>Public-sector DT</h3>
              <p>Ministries and agencies translating policy intent into digital service delivery with evidence loops and governance.</p>
            </article>
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>Mid-to-large organizations</h3>
              <p>Enterprises moving from one-off digital initiatives to a repeatable, governed transformation operating model.</p>
            </article>
          </CardGrid>
        </section>

        {/* Pilot reference */}
        <section className="section" id="pilot" aria-labelledby="pilot-title">
          <h2 id="pilot-title">Pilot reference</h2>
          <p>
            IMM-DT is in early production with <Link to="/case-studies/fundapec">FUNDAPEC</Link>, a digital transformation
            engagement in the Dominican Republic. The work applies MCF v2.2 and IMM-P® 2.2 to a multi-month maturity
            diagnostic, regional fintech benchmarking, and a phased 0–36 month roadmap. We are currently extending the
            template to additional verticals.
          </p>
          <p className="microcopy">
            For organizations not yet ready for a full IMM-DT engagement, start with <Link to="/services/clarityscan">ClarityScan®</Link>
            {' '}Tier 1 (CHF 150) for a fast read on innovation maturity.
          </p>
        </section>

        <FinalCta
          id="imm-dt-final"
          ariaLabelledbyId="imm-dt-final-title"
          title="Run IMM-DT on your transformation."
          body="Start with a discovery call. We’ll scope the diagnostic, the benchmark set, and the evidence bar that fits your DT program."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Talk to us about IMM-DT',
            dataCta: 'cta.services.imm-dt.final.contact',
          }}
          secondaryCta={{ to: '/services/clarityscan', label: 'Or start with ClarityScan® Tier 1', dataCta: 'cta.services.imm-dt.final.clarityscan' }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM-P® 2.2 (domain scoring, phase readiness, evidence gates)."
        />
      </main>
    </Layout>
  );
}
