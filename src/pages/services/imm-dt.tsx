// src/pages/services/imm-dt.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Pillars from '../../components/imm/Pillars';
import Roadmap from '../../components/imm/Roadmap';
import Radar from '../../components/imm/Radar';
import MaturityLadder from '../../components/imm/MaturityLadder';
import EvidenceMeter from '../../components/imm/EvidenceMeter';

import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import Target from 'lucide-react/dist/esm/icons/target';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Layers from 'lucide-react/dist/esm/icons/layers';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';

export default function IMMDTPage(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IMM-DT: Digital Transformation Maturity',
    serviceType: 'Digital Transformation Diagnostic & Roadmap',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://www.doulab.net' },
    url: 'https://www.doulab.net/services/imm-dt',
    areaServed: ['Latin America', 'Caribbean', 'Global'],
    description:
      'The digital transformation vertical of IMM. Baseline DT maturity across strategy, process, culture, technology and governance; sequence a 0–36 month roadmap with evidence-backed gates. Delivered through the IMM-P® program.',
  };

  return (
    <Layout
      title="IMM-DT: Digital Transformation Maturity | Doulab"
      description="IMM-DT is the digital transformation vertical of IMM, delivered through the IMM-P® program. Baseline DT maturity across strategy, process, culture, technology and governance; sequence a 0–36 month roadmap with evidence-backed gates."
    >
      <Head>
        <link rel="canonical" href="https://www.doulab.net/services/imm-dt" />
        <meta property="og:title" content="IMM-DT: Digital Transformation Maturity | Doulab" />
        <meta
          property="og:description"
          content="The digital transformation vertical of IMM, delivered through the IMM-P® program. Baseline maturity, prioritize gaps, sequence a 0–36 month roadmap."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="IMM-DT"
          subtitle="The digital transformation vertical of IMM."
          body="IMM-DT extends the Innovation Maturity Model (IMM 2.2) to the digital transformation domain. Engagements take the IMM-P® program form with the IMM-DT vertical layer. We baseline DT maturity across strategy, process, culture, technology and governance; benchmark against regional peers; and sequence a phased 0–36 month roadmap with evidence-backed readiness gates. Currently in pilot with a regulated-finance partner in the Dominican Republic."
          imageBase="/img/services-hero"
          imageAlt="IMM-DT: Digital Transformation Maturity"
          width={600}
          height={400}
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Talk to us about IMM-DT', dataCta: 'cta.services.imm-dt.hero.contact' }}
          secondaryCta={{ to: '/services/innovation-maturity', label: 'See IMM-P® (umbrella program)', dataCta: 'cta.services.imm-dt.hero.imm-p' }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2 (domain scoring, phase readiness, evidence gates)."
        />

        {/* What IMM-DT measures */}
        <section className="section" id="dimensions" aria-labelledby="dimensions-title">
          <h2 id="dimensions-title">What IMM-DT measures</h2>
          <p className="sectionLead">
            Five domains, scored against the IMM 2.2 maturity model, applied to the digital transformation problem space.
          </p>
          <Pillars
            ariaLabel="IMM-DT measurement domains"
            foundationLabel="IMM 2.2 maturity model"
            pillars={[
              {
                icon: <Target aria-hidden="true" />,
                title: 'Strategy',
                body: 'DT thesis, customer and business model clarity, portfolio choices, and the link from strategy to funded initiatives.',
                accent: 'indigo',
              },
              {
                icon: <Workflow aria-hidden="true" />,
                title: 'Process',
                body: 'Delivery cadence, decision gates, evidence loops, and how the organization moves work from intent to outcome.',
                accent: 'slate',
              },
              {
                icon: <Users aria-hidden="true" />,
                title: 'Culture',
                body: 'Behaviors and incentives that support evidence-based decision-making, learning, and accountable risk-taking.',
                accent: 'purple',
              },
              {
                icon: <Cpu aria-hidden="true" />,
                title: 'Technology',
                body: 'Architecture, data, platforms, and the technical readiness to execute and scale the transformation safely.',
                accent: 'green',
              },
              {
                icon: <ShieldCheck aria-hidden="true" />,
                title: 'Governance',
                body: 'Roles, decision rights, risk and compliance posture, and the institutional learning that compounds across cohorts.',
                accent: 'amber',
              },
            ]}
          />
        </section>

        {/* What an IMM-DT engagement produces */}
        <section className="section" id="deliverables" aria-labelledby="deliverables-title">
          <h2 id="deliverables-title">What an IMM-DT engagement produces</h2>
          <p className="sectionLead">
            A short tour of the artifacts the IMM-P® program produces when delivered as IMM-DT. The values below are
            illustrative, not real client scores.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
              marginTop: '1.5rem',
              fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--dl-indigo, #4F46E5)' }}>Domain radar</h3>
              <Radar
                ariaLabel="Example IMM-DT domain radar with five axes and a target overlay"
                title="Five-domain DT maturity snapshot"
                domains={[
                  { name: 'Strategy', score: 55 },
                  { name: 'Process', score: 40 },
                  { name: 'Culture', score: 60 },
                  { name: 'Technology', score: 50 },
                  { name: 'Governance', score: 45 },
                ]}
                target={[75, 70, 75, 75, 70]}
                caption="Example output. Real engagement scores are evidence-backed."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Maturity ladder</h3>
              <MaturityLadder
                ariaLabel="Example DT maturity ladder with current rung 2 and target rung 4"
                title="DT maturity progression"
                current={2}
                target={4}
                rungs={[
                  { label: 'Manual operations', description: 'Paper-bound or spreadsheet-bound work; little system support.' },
                  { label: 'Digitized workflows', description: 'Core workflows digitized in line-of-business systems.' },
                  { label: 'Connected platforms', description: 'Systems integrated; data flows across the value chain.' },
                  { label: 'Data-driven decisions', description: 'Decisions backed by trusted data and shared metrics.' },
                  { label: 'Continuous transformation', description: 'Institutional learning compounds; the operating model adapts.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Example progression. We meet you at your current rung and sequence the climb.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>Phase readiness gate</h3>
              <EvidenceMeter
                ariaLabel="Example phase readiness meter at 68 out of 100"
                score={68}
                label="Phase 2 to Phase 3 readiness, example"
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Gate opens at 75 percent evidence quality.
              </p>
            </div>
          </div>
        </section>

        {/* The IMM-DT roadmap */}
        <section className="section" id="roadmap" aria-labelledby="roadmap-title">
          <Roadmap
            title="The IMM-DT roadmap"
            horizons={[
              {
                range: '0–3 months',
                label: 'Baseline',
                body: 'Kickoff diagnostic, calibrated maturity model, named cohorts.',
                state: 'now',
              },
              {
                range: '3–6 months',
                label: 'First wins',
                body: 'Quick-win plays in the lowest-maturity domains; first phase-readiness gate.',
                state: 'now',
              },
              {
                range: '6–9 months',
                label: 'Process anchoring',
                body: 'Decision cadence and evidence loops embedded in delivery teams.',
                state: 'next',
              },
              {
                range: '9–12 months',
                label: 'Cohort progression',
                body: 'Second domain assessment, benchmark refresh, second gate.',
                state: 'next',
              },
              {
                range: '12–24 months',
                label: 'Scale and govern',
                body: 'Cross-domain roll-out, governance maturity, third gate.',
                state: 'later',
              },
              {
                range: '24–36 months',
                label: 'Compounding',
                body: 'Institutional learning, regulator-facing maturity, evidence dossiers.',
                state: 'later',
              },
            ]}
          />
        </section>

        {/* How IMM-DT delivers */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How IMM-DT delivers</h2>
          <div className="cardGrid">
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
          </div>
        </section>

        {/* Who it's for */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who IMM-DT is for</h2>
          <div className="cardGrid">
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
          </div>
        </section>

        {/* Pilot reference */}
        <section className="section" id="pilot" aria-labelledby="pilot-title">
          <h2 id="pilot-title">Pilot reference</h2>
          <p>
            IMM-DT is in early production with <Link to="/case-studies/fundapec">FUNDAPEC</Link>, a digital transformation
            engagement in the Dominican Republic. The engagement profile is representative of the work: regulated finance,
            multi-month duration, multi-stakeholder cohorts across directive, middle management, and operations. The work
            applies MicroCanvas® v2.2 and the IMM-P® program with the IMM 2.2 maturity model to a multi-month diagnostic,
            regional fintech benchmarking, and a phased 0–36 month roadmap. We are currently extending the template to
            additional verticals.
          </p>
          <p className="microcopy">
            For organizations not yet ready for a full IMM-DT engagement, start with <Link to="/services/clarityscan">ClarityScan®</Link>
            {' '}Tier 1 (CHF 150) for a fast read on innovation maturity.
          </p>
        </section>

        {/* What IMM-DT does NOT do */}
        <section className="section" id="boundaries" aria-labelledby="boundaries-title">
          <h2 id="boundaries-title">What IMM-DT does not do</h2>
          <p>
            IMM-DT is a measurement and roadmap instrument. It is not a replacement for execution capacity. The engagement
            produces an evidence-backed baseline, a benchmark, a sequenced roadmap, and phase-readiness gates. Acting on the
            findings requires a sponsor with decision rights and a delivery team with the capacity to ship. IMM-DT does not
            implement core systems, run change management, or replace internal program leadership. Where those needs surface,
            we name them clearly in the roadmap and help you scope the right partners.
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
          ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2 (domain scoring, phase readiness, evidence gates)."
        />
      </main>
    </Layout>
  );
}
