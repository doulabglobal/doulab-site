// src/pages/services/clarityscan/audit.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Scale from 'lucide-react/dist/esm/icons/scale';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Landmark from 'lucide-react/dist/esm/icons/landmark';
import Globe2 from 'lucide-react/dist/esm/icons/globe-2';
import Compass from 'lucide-react/dist/esm/icons/compass';
import Microscope from 'lucide-react/dist/esm/icons/microscope';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Archive from 'lucide-react/dist/esm/icons/archive';

import Hero from '../../../components/Hero';
import FinalCta from '../../../components/FinalCta';
import Radar from '../../../components/imm/Radar';
import MaturityLadder from '../../../components/imm/MaturityLadder';
import EvidenceMeter from '../../../components/imm/EvidenceMeter';
import Roadmap from '../../../components/imm/Roadmap';

export default function ClarityScanTier3Page(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan® Tier 3: Audit',
    serviceType: 'Evidence-backed Innovation Maturity Audit',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan/audit',
    areaServed: ['Global'],
    description:
      'ClarityScan® Tier 3 Audit is an evidence-backed, audit-ready innovation maturity engagement. Every domain score is supported by documented artifacts and tied to IMM-P® phase readiness gates.',
    isRelatedTo: [
      { '@type': 'Service', name: 'ClarityScan® Tier 1: Snapshot', url: 'https://doulab.net/services/clarityscan' },
      { '@type': 'Service', name: 'ClarityScan® Tier 2: Diagnostic', url: 'https://doulab.net/services/clarityscan/diagnostic' },
    ],
  };

  return (
    <Layout
      title="ClarityScan® Tier 3: Audit | Doulab"
      description="ClarityScan® Tier 3 Audit is an evidence-backed, audit-ready innovation maturity engagement. Every score is documented; deliverable is a governance-grade dossier."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan/audit" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="ClarityScan® Tier 3: Audit | Doulab" />
        <meta
          property="og:description"
          content="Evidence-backed innovation maturity audit. Documented scores, phase readiness gates, governance-grade dossier."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan® Tier 3 Audit" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="ClarityScan® Tier 3 / Audit"
          subtitle="Evidence-backed. Audit-ready. Designed to stand up to review."
          body="Tier 3 turns the diagnostic into a governance-grade dossier. Every domain score is supported by documented artifacts, decisions, and observed practice. Phase readiness gates align with the IMM-P® 5-phase model. Built for regulated finance, public-sector digital programs, and multilateral engagements where the diagnostic must stand up to internal audit, regulator review, and institutional learning loops."
          imageBase="/img/clarityscan-hero"
          imageAlt="ClarityScan® Tier 3 Audit visual"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.clarityscan.t3.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan/diagnostic',
            label: 'See Tier 2 Diagnostic',
            dataCta: 'cta.services.clarityscan.t3.hero.see_t2',
          }}
          ctaNote="Tier 3 is a multi-week engagement. Scope and evidence bar are set on a discovery call."
        />

        {/* What Tier 3 delivers */}
        <section className="section" id="tier-3-deliverables" aria-labelledby="tier-3-deliverables-title">
          <h2 id="tier-3-deliverables-title">What Tier 3 delivers</h2>
          <p className="sectionLead">
            Four artifacts on top of the Tier 2 deliverable set. Values shown are illustrative; real engagement scores
            are evidence-backed.
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
              <h3 style={{ color: 'var(--dl-indigo, #4F46E5)' }}>Evidence-backed radar</h3>
              <Radar
                ariaLabel="Example Tier 3 domain radar with evidence-backed baseline and target overlay"
                title="Documented baseline vs target"
                domains={[
                  { name: 'Evidence', score: 50 },
                  { name: 'Decision logic', score: 65 },
                  { name: 'Culture', score: 40 },
                  { name: 'Iteration', score: 55 },
                  { name: 'Systemic / AI', score: 45 },
                ]}
                target={[75, 75, 70, 75, 75]}
                caption="Evidence-backed scores. Every domain has documented artifacts. Example output."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Maturity ladder with target</h3>
              <MaturityLadder
                ariaLabel="Example Tier 3 maturity ladder with current rung 2 and target rung 4"
                title="Phase progression"
                current={2}
                target={4}
                rungs={[
                  { label: 'Foundations', description: 'Governance baseline, operating cadence, evidence discipline installed.' },
                  { label: 'Structured Discovery', description: 'Repeatable framing and assumption tests; first phase gate cleared.' },
                  { label: 'Efficiency', description: 'Process, automation, quality controls, and risk/compliance integrated.' },
                  { label: 'Scaling', description: 'Infrastructure, partnerships, and growth operating system in place.' },
                  { label: 'Continuous Improvement', description: 'Foresight, resilience, and institutional learning compound.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Example positioning. Each rung has documented evidence criteria.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>Phase readiness gauge</h3>
              <EvidenceMeter
                ariaLabel="Example Tier 3 phase readiness meter at 72 out of 100"
                score={72}
                label="Phase 2 to Phase 3 readiness, example"
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Phase readiness gates open at 75 percent evidence quality.
              </p>
            </div>

            {/*
              VP-NEW-004 follow-up: Roadmap component's internal layout collapses to one-char-per-line
              when its parent cell is narrower than ~500px. Forcing this item to span the full grid row
              (gridColumn: 1 / -1) gives Roadmap the full container width. The root fix belongs in
              src/components/imm/Roadmap (make it intrinsically responsive); flagged for follow-up.
            */}
            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-amber, #F59E0B)' }}>Phase readiness cascade</h3>
              <Roadmap
                ariaLabel="Example Tier 3 cascade across the five IMM-P phases"
                horizons={[
                  {
                    range: 'Phase 01',
                    label: 'Foundations',
                    body: 'Gate criteria: governance roles named; cadence installed; OKRs/KPIs defined; pilot shortlist approved.',
                    state: 'now',
                  },
                  {
                    range: 'Phase 02',
                    label: 'Structured Discovery',
                    body: 'Gate criteria: research synthesis; validated value proposition; experiment results; problem/solution decision memo.',
                    state: 'now',
                  },
                  {
                    range: 'Phase 03',
                    label: 'Efficiency',
                    body: 'Gate criteria: process audit; automation plan; QA/risk plan; dashboards; expansion decision memo.',
                    state: 'next',
                  },
                  {
                    range: 'Phase 04',
                    label: 'Scaling',
                    body: 'Gate criteria: scaling plan; partner map; growth KPI system; finance model; scale decision memo.',
                    state: 'next',
                  },
                  {
                    range: 'Phase 05',
                    label: 'Continuous Improvement',
                    body: 'Gate criteria: foresight inputs; impact measures; resilience plan; long-term roadmap; operating review memo.',
                    state: 'later',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Who Tier 3 is for */}
        <section className="section" id="who-t3" aria-labelledby="who-t3-title">
          <h2 id="who-t3-title">Who Tier 3 is for</h2>
          <div className="cardGrid">
            <article className="card">
              <Building2 className="cardIcon" aria-hidden="true" />
              <h3>Regulated finance</h3>
              <p>Banks, insurers, and asset managers running multi-year transformations under regulator-facing scrutiny.</p>
            </article>
            <article className="card">
              <Landmark className="cardIcon" aria-hidden="true" />
              <h3>Public-sector digital transformation</h3>
              <p>Ministries and agencies translating policy into digital service delivery with auditable governance.</p>
            </article>
            <article className="card">
              <Globe2 className="cardIcon" aria-hidden="true" />
              <h3>Multilateral programs</h3>
              <p>Development banks and international programs that need evidence-grade maturity reporting across cohorts.</p>
            </article>
          </div>
        </section>

        {/* What an audit-grade dossier contains */}
        <section className="section" id="dossier" aria-labelledby="dossier-title">
          <h2 id="dossier-title">What an audit-grade dossier contains</h2>
          <ul>
            <li><strong>Evidence pack per domain:</strong> artifacts, interview transcripts, observed practice, score rationale.</li>
            <li><strong>Decision log:</strong> every gate decision, its criteria, the evidence used, and the dissent recorded.</li>
            <li><strong>Risk register:</strong> identified risks, owners, mitigations, and review cadence.</li>
            <li><strong>Governance model specification:</strong> roles, decision rights, intake, escalation, and gate criteria.</li>
            <li><strong>Phase readiness scorecard:</strong> per-phase readiness against the IMM-P® 5-phase model.</li>
            <li><strong>Multi-year roadmap:</strong> sequenced initiatives across phases, with measurable outcomes and ownership.</li>
          </ul>
        </section>

        {/* How Tier 3 works */}
        <section className="section" id="how-t3" aria-labelledby="how-t3-title">
          <h2 id="how-t3-title">How Tier 3 works</h2>
          <div className="cardGrid">
            <article className="card">
              <Compass className="cardIcon" aria-hidden="true" />
              <h3>1. Scope</h3>
              <p>Define audit scope, evidence bar, regulator-facing posture, and decision owners.</p>
            </article>
            <article className="card">
              <Microscope className="cardIcon" aria-hidden="true" />
              <h3>2. Evidence collection</h3>
              <p>Gather artifacts, conduct interviews, observe practice, and document the score rationale.</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>3. Score with evidence</h3>
              <p>Every domain score is tied to documented artifacts. Reviewer trail is preserved.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>4. Phase readiness</h3>
              <p>Run the readiness gauge against each phase. Open gates where evidence supports it.</p>
            </article>
            <article className="card">
              <Archive className="cardIcon" aria-hidden="true" />
              <h3>5. Dossier</h3>
              <p>Deliver the governance-grade dossier and walk through it with leadership and audit.</p>
            </article>
          </div>
        </section>

        {/* Compliance posture */}
        <section className="section" id="compliance" aria-labelledby="compliance-title">
          <h2 id="compliance-title">Compliance posture</h2>
          <p>
            Tier 3 is designed to stand up to internal audit, regulator review, and institutional learning loops. The
            engagement produces the artifacts an auditor or reviewer expects: a documented evidence base, a decision log
            with rationale and dissent, a risk register with owners, and a governance model specification that ties back
            to your operating model.
          </p>
          <p className="microcopy">
            We make no claims about specific certifications. We do design the dossier to be defensible inside an audit
            conversation.
          </p>
        </section>

        {/* Cross-links */}
        <section className="section" id="t3-links" aria-labelledby="t3-links-title">
          <h2 id="t3-links-title">Compare across tiers</h2>
          <div className="cardGrid">
            <article className="card">
              <FileText className="cardIcon" aria-hidden="true" />
              <h3>Tier 1: Snapshot</h3>
              <p>Single respondent, qualitative scoring, one-page PDF. CHF 150, paid online.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/clarityscan" data-cta="cta.services.clarityscan.t3.see_t1">
                  See Tier 1 →
                </Link>
              </div>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>Tier 2: Diagnostic</h3>
              <p>Role-segmented cohorts, scored assessment, 90-day roadmap. Scope-based.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/clarityscan/diagnostic" data-cta="cta.services.clarityscan.t3.see_t2">
                  See Tier 2 →
                </Link>
              </div>
            </article>
            <article className="card">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3>Tier 3: Audit (this page)</h3>
              <p>Evidence-backed scoring, phase readiness gates, governance-grade dossier.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/innovation-maturity" data-cta="cta.services.clarityscan.t3.see_imm">
                  See IMM-P® program →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <FinalCta
          id="clarityscan-t3-final"
          ariaLabelledbyId="clarityscan-t3-final-title"
          title="Scope a Tier 3 Audit engagement"
          body="A 20-minute discovery call covers scope, evidence bar, regulator-facing posture, and dossier shape. We size it from there."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.clarityscan.t3.final.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan/diagnostic',
            label: 'Or compare with Tier 2',
            dataCta: 'cta.services.clarityscan.t3.final.see_t2',
          }}
          ctaNote="Tier 3 pricing is scope-based. We size it on the call."
        />
      </main>
    </Layout>
  );
}
