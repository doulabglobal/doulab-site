// src/pages/services/clarityscan/diagnostic.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Compass from 'lucide-react/dist/esm/icons/compass';
import Microscope from 'lucide-react/dist/esm/icons/microscope';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';

import Hero from '../../../components/Hero';
import FinalCta from '../../../components/FinalCta';
import Radar from '../../../components/imm/Radar';
import MaturityLadder from '../../../components/imm/MaturityLadder';
import Roadmap from '../../../components/imm/Roadmap';
import { CLARITYSCAN_CHECKOUT_URL } from '../../../constants/urls';

export default function ClarityScanTier2Page(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan® Tier 2: Diagnostic',
    serviceType: 'Innovation Maturity Diagnostic Engagement',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan/diagnostic',
    areaServed: ['Global'],
    description:
      'ClarityScan® Tier 2 Diagnostic is a scoped, role-segmented innovation maturity engagement. Delivers baseline vs target radar, prioritized gap matrix, and a 90-day roadmap.',
    isRelatedTo: [
      { '@type': 'Service', name: 'ClarityScan® Tier 1: Snapshot', url: 'https://doulab.net/services/clarityscan' },
      { '@type': 'Service', name: 'ClarityScan® Tier 3: Audit', url: 'https://doulab.net/services/clarityscan/audit' },
    ],
  };

  return (
    <Layout
      title="ClarityScan® Tier 2: Diagnostic | Doulab"
      description="ClarityScan® Tier 2 is a scoped, role-segmented innovation maturity diagnostic. Baseline vs target radar, prioritized gap matrix, and a 90-day roadmap."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan/diagnostic" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="ClarityScan® Tier 2: Diagnostic | Doulab" />
        <meta
          property="og:description"
          content="A scoped, role-segmented innovation maturity diagnostic. Baseline vs target, prioritized gaps, and a 90-day roadmap."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan® Tier 2 Diagnostic" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="ClarityScan® Tier 2 / Diagnostic"
          subtitle="A scoped engagement with role-segmented respondents and a prioritized roadmap."
          body="Where Tier 1 is a single-respondent rapid read, Tier 2 is a multi-day diagnostic across role-segmented respondent cohorts (directive, middle management, operations). You leave with a baseline-vs-target radar, a prioritized gap matrix, and a 90-day roadmap. Scored assessment, not evidence-backed audit."
          imageBase="/img/clarityscan-hero"
          imageAlt="ClarityScan® Tier 2 Diagnostic visual"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.clarityscan.t2.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan',
            label: 'See Tier 1 Snapshot',
            dataCta: 'cta.services.clarityscan.t2.hero.see_t1',
          }}
          ctaNote="Tier 2 is scope-based. We start with a 20-minute discovery call to size the cohort and the deliverable."
        />

        {/* What Tier 2 delivers */}
        <section className="section" id="tier-2-deliverables" aria-labelledby="tier-2-deliverables-title">
          <h2 id="tier-2-deliverables-title">What Tier 2 delivers</h2>
          <p className="sectionLead">
            Four deliverable artifacts. Values shown are illustrative; real engagement scores come from your respondents.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
              marginTop: '1.5rem',
              fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--ifm-heading-color)' }}>Baseline vs target radar</h3>
              <Radar
                ariaLabel="Example Tier 2 domain radar with baseline scores and target overlay"
                title="Baseline vs target"
                domains={[
                  { name: 'Evidence', score: 50 },
                  { name: 'Decision logic', score: 65 },
                  { name: 'Culture', score: 40 },
                  { name: 'Iteration', score: 55 },
                  { name: 'Systemic / AI', score: 45 },
                ]}
                target={[75, 75, 70, 75, 75]}
                caption="Baseline vs target. Example output."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Maturity ladder with target</h3>
              <MaturityLadder
                ariaLabel="Example Tier 2 maturity ladder with current rung 2 and target rung 4"
                title="From where you are to where you are going"
                current={2}
                target={4}
                rungs={[
                  { label: 'Foundations', description: 'Ad-hoc practice; little shared discipline.' },
                  { label: 'Structured Discovery', description: 'Repeatable framing, interviews, and assumption tests.' },
                  { label: 'Efficiency', description: 'Process, automation, and quality controls in place.' },
                  { label: 'Scaling', description: 'Infrastructure, partnerships, and growth operating system.' },
                  { label: 'Continuous Improvement', description: 'Learning, foresight, and resilience compound.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                We sequence the climb across phases.
              </p>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-amber, #F59E0B)' }}>Priority matrix: impact vs effort</h3>
              <PriorityMatrix />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Example initiatives. Quick wins go top-left; strategic bets go top-right.
              </p>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>90-day roadmap snippet</h3>
              <Roadmap
                ariaLabel="Example Tier 2 ninety-day roadmap with three horizons"
                horizons={[
                  {
                    range: '0 to 30 days',
                    label: 'Stand up evidence loop',
                    body: 'Install a weekly decision review; define what counts as evidence; appoint decision owners.',
                    state: 'now',
                  },
                  {
                    range: '30 to 60 days',
                    label: 'Tighten governance',
                    body: 'Document the gate criteria; pilot a decision memo template; baseline two top initiatives.',
                    state: 'now',
                  },
                  {
                    range: '60 to 90 days',
                    label: 'Show measurable lift',
                    body: 'Re-score the lowest two domains; publish a portfolio review; commit to the next phase.',
                    state: 'next',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Who Tier 2 is for */}
        <section className="section" id="who-t2" aria-labelledby="who-t2-title">
          <h2 id="who-t2-title">Who Tier 2 is for</h2>
          <div className="cardGrid">
            <article className="card">
              <Users className="cardIcon" aria-hidden="true" />
              <h3>Executive teams</h3>
              <p>Leadership teams aligning on capability gaps before committing to a multi-quarter program.</p>
            </article>
            <article className="card">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3>Multi-unit organizations</h3>
              <p>Companies benchmarking innovation maturity across business units or geographies.</p>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>Public-sector programs</h3>
              <p>Agencies that need a scored diagnostic to inform strategy without yet requiring an audit dossier.</p>
            </article>
          </div>
        </section>

        {/* How Tier 2 works */}
        <section className="section" id="how-t2" aria-labelledby="how-t2-title">
          <h2 id="how-t2-title">How Tier 2 works</h2>
          <div className="cardGrid">
            <article className="card">
              <Compass className="cardIcon" aria-hidden="true" />
              <h3>1. Scope</h3>
              <p>Define units of analysis, respondent cohorts, and the evidence bar for the engagement.</p>
            </article>
            <article className="card">
              <Microscope className="cardIcon" aria-hidden="true" />
              <h3>2. Survey</h3>
              <p>Run the role-segmented questionnaire across directive, middle management, and operations cohorts.</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>3. Synthesize</h3>
              <p>Score the five domains, produce the radar, ladder, and priority matrix.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>4. Decide</h3>
              <p>Working session with leadership to lock the 90-day roadmap and decision owners.</p>
            </article>
          </div>
        </section>

        {/* What Tier 2 does not include */}
        <section className="section" id="t2-exclusions" aria-labelledby="t2-exclusions-title">
          <h2 id="t2-exclusions-title">What Tier 2 does not include</h2>
          <p className="sectionLead">
            Tier 2 is a scored diagnostic, not an audit. It deliberately excludes:
          </p>
          <div className="cardGrid">
            <article className="card">
              <h3>No evidence-backed audit trail</h3>
              <p>Scores reflect respondent self-assessment. For documented artifacts per score, see Tier 3.</p>
            </article>
            <article className="card">
              <h3>No governance dossier</h3>
              <p>No decision log, risk register, or phase readiness scorecard. Those are Tier 3 deliverables.</p>
            </article>
            <article className="card">
              <h3>No regulator-facing posture</h3>
              <p>Tier 2 supports internal decisions, not external audit. Tier 3 is designed to stand up to review.</p>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Coming from Tier 1? <Link to="/services/clarityscan">Back to the ClarityScan® overview</Link>. Need an
            audit-grade deliverable? <Link to="/services/clarityscan/audit">See Tier 3 Audit</Link>.
          </p>
        </section>

        <FinalCta
          id="clarityscan-t2-final"
          ariaLabelledbyId="clarityscan-t2-final-title"
          title="Scope a Tier 2 Diagnostic engagement"
          body="A 20-minute discovery call covers respondent cohorts, evidence bar, and the deliverable shape. No prep required."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.clarityscan.t2.final.discovery',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Or start with Tier 1: CHF 150',
            dataCta: 'cta.services.clarityscan.t2.final.book_t1',
            newTab: true,
          }}
          ctaNote="Tier 2 pricing is scope-based. We size it on the call."
        />
      </main>
    </Layout>
  );
}

// Inline 2x2 priority matrix. Pure CSS-grid, no new dependencies.
function PriorityMatrix(): ReactNode {
  const cellBase: React.CSSProperties = {
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: '8px',
    padding: '0.75rem',
    background: 'var(--ifm-background-surface-color, #fff)',
    fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
    minHeight: '110px',
  };
  return (
    <figure
      aria-label="Example impact-versus-effort priority matrix with four quadrants"
      style={{ margin: 0 }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70px 1fr 1fr',
          gridTemplateRows: '24px 1fr 1fr 24px',
          gap: '0.4rem',
          alignItems: 'stretch',
        }}
      >
        {/* Row 1: top label */}
        <div />
        <div style={{ gridColumn: '2 / span 2', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Impact (high ↑)
        </div>

        {/* Row 2: top quadrants */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Effort (low ←)
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--dl-green, #72c53c)' }}>
          <strong style={{ color: 'var(--dl-green, #72c53c)' }}>Quick wins</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Decision memo template. Weekly portfolio review.
          </p>
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--ifm-color-primary)' }}>
          <strong style={{ color: 'var(--ifm-color-primary)' }}>Strategic bets</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Evidence-gate governance model. Cross-unit cadence.
          </p>
        </div>

        {/* Row 3: bottom quadrants */}
        <div />
        <div style={{ ...cellBase, borderColor: 'var(--ifm-color-emphasis-500)' }}>
          <strong style={{ color: 'var(--ifm-color-emphasis-800)' }}>Fill-ins</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Templates cleanup. Shared glossary.
          </p>
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--dl-amber, #f59e0b)' }}>
          <strong style={{ color: 'var(--dl-amber, #f59e0b)' }}>Reconsider</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Bespoke dashboards. One-off offsites.
          </p>
        </div>

        {/* Row 4: bottom label */}
        <div />
        <div style={{ gridColumn: '2 / span 2', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Effort (high →)
        </div>
      </div>
      <figcaption className="microcopy" style={{ marginTop: '0.5rem' }}>
        Example output. Initiatives are placed against impact and effort, not real client data.
      </figcaption>
    </figure>
  );
}
