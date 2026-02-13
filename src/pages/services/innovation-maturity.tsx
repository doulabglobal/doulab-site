// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Icons (tree-shaken)
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Shield from 'lucide-react/dist/esm/icons/shield';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '../../components/Hero';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';
import FinalCta from '../../components/FinalCta';
import ImmFunnelDiagram from '../../components/diagrams/ImmFunnelDiagram';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

export default function InnovationMaturityProgram(): ReactNode {
  // JSON-LD schema (service)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Innovation Maturity Model Program (IMM-P)®',
    serviceType: 'Innovation capability acceleration',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/innovation-maturity',
    description:
      'A structured, gated program that installs repeatable innovation capability using the MicroCanvas Framework (MCF v2.2) and IMM 2.2 governance (domain-based scoring, phase readiness, and evidence-backed decision gates).',
    areaServed: ['Global'],
  };

  // JSON-LD schema (FAQ)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does the program take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most teams start with a 12-week core track focused on Foundations plus Structured Discovery & Validation. Larger rollouts extend to 24+ weeks across all five phases with additional pilots and operating cadence improvements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the time commitment per week?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Expect a weekly masterclass (60–90 minutes), one clinic (60 minutes), plus focused team time for experiments and delivery. Cadence is tailored to your context and constraints.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should be involved?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'A cross-functional core team (product/ops, CX, tech/data) plus visible decision owners. We help you staff roles and install a lightweight Innovation Governance Framework aligned to your operating reality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need an innovation lab or PMO in place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. IMM-P® installs the minimal governance and cadence you need. If you already have a lab or PMO, we integrate with it and strengthen decision gates, artifacts, and accountability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ClarityScan® fit into the program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'ClarityScan® is the Phase 01 baseline. It establishes domain scores and phase readiness, aligns decision owners, and defines the first evidence gates. It becomes your before/after reference.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IMM 2.2 domain-based or phase-based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Both. Scoring is domain-based (how you decide, govern, learn, and scale) and it also produces phase readiness overlays for Structured Discovery & Validation, Efficiency, Scaling, and Continuous Improvement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you require evidence for scoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Tier 1 and Tier 2 can run as scored assessments. Tier 3 requires evidence documentation for auditability, compliance, and institutional learning.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can IMM-P® run remote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. IMM-P® is remote-first. We can add on-site kickoffs or checkpoints where it creates leverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do we actually get at the end?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Domain scores and phase readiness overlays, evidence packs and decision memos at each gate, a pilot plan (or shipped pilot), a working governance cadence, and reusable playbooks/templates aligned to MCF 2.2.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need engineering resources on day one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Not necessarily. Early phases can run with interviews, prototypes, and concierge tests. As you move into pilots and scale, dedicated engineering or vendor capacity becomes valuable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is pricing structured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pricing depends on scope, number of teams, and phase depth. We’ll shape a right-sized plan during intake.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle data and privacy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Privacy-first analytics only. You own your data and artifacts. We operate under mutual NDAs and follow your compliance and security requirements.',
        },
      },
    ],
  };

  return (
    <Layout
      title="Innovation Maturity Model Program (IMM-P)® | Doulab"
      description="A domain-based, evidence-first program to baseline and strengthen innovation capability — improving decision-making under uncertainty across Discovery & Validation, Efficiency, Scaling, and Continuous Improvement — built on MicroCanvas® v2.2 and IMM-P® gates."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        {/* Use a dedicated social card if you have it */}
        <meta property="og:image" content="https://doulab.net/img/social/og-imm-program.jpg" />
        <meta property="og:image:alt" content="IMM-P® — structured, gated innovation program by Doulab" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Innovation Maturity Model Program (IMM-P)®"
          subtitle="Assess. Strengthen. Accelerate."
          body={
            'IMM-P® helps your team make better innovation decisions under uncertainty. We establish a clear baseline, align decision owners, and install a simple operating cadence that makes progress measurable. Delivery runs through five structured phases using the MicroCanvas Framework (MCF 2.2).'
          }
          imageBase="/img/imm-program"
          imageAlt="IMM-P® program illustration"
          width={1600}
          height={900}
          rightVisual={<ImmFunnelDiagram />}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.imm.hero.discovery',
          }}
          secondaryCta={{
            to: '#program-structure',
            label: 'See program structure',
            dataCta: 'cta.services.imm.hero.see_structure',
            ariaLabel: 'See program structure',
          }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2."
        />

        <section className="section immWhatYouGet" id="imm-what-you-get" aria-labelledby="imm-what-you-get-title">
          <h2 id="imm-what-you-get-title">What you get</h2>
          <p className="sectionLead">
            A pragmatic, evidence-based operating model your team can run every week—so innovation decisions become repeatable, measurable, and less risky.
          </p>

          <div className="grid grid-3">
            <article className="card" aria-labelledby="imm-deliverable-baseline">
              <h3 id="imm-deliverable-baseline">Baseline + scorecard</h3>
              <p>A domain-level baseline (capability + readiness) with clear gaps, strengths, and priority actions.</p>
            </article>

            <article className="card" aria-labelledby="imm-deliverable-gates">
              <h3 id="imm-deliverable-gates">Evidence gates</h3>
              <p>A lightweight governance layer: what counts as evidence, when to stop, and when to scale.</p>
            </article>

            <article className="card" aria-labelledby="imm-deliverable-cadence">
              <h3 id="imm-deliverable-cadence">Delivery cadence</h3>
              <p>A weekly operating rhythm (checkpoints, reviews, artifacts) aligned to your maturity phase.</p>
            </article>

            <article className="card" aria-labelledby="imm-deliverable-artifacts">
              <h3 id="imm-deliverable-artifacts">Standard artifacts</h3>
              <p>Reusable templates: problem framing, experiments, decision logs, KPIs/OKRs, and risk notes.</p>
            </article>

            <article className="card" aria-labelledby="imm-deliverable-roadmap">
              <h3 id="imm-deliverable-roadmap">90-day roadmap</h3>
              <p>A phased plan with measurable outcomes and ownership—so progress is visible to leadership.</p>
            </article>
          </div>

        </section>

        {/* Who is it for? */}
        <section className="section" id="imm-who" aria-labelledby="imm-who-title">
          <h2 id="imm-who-title">Who is it for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="imm-startups">Startups</h3>
              <p>From idea to validated model with evidence gates, faster iteration, and measurable maturity improvements.</p>
            </article>

            <article className="card" aria-labelledby="imm-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-public">Public institutions</h3>
              <p>Innovation governance for complex environments: transparent decision trails, capability building, and scalable operating cadence.</p>
            </article>

            <article className="card" aria-labelledby="imm-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="imm-private">Private organizations</h3>
              <p>A repeatable system for innovation delivery: governance, metrics, and operating rhythm that turns strategy into outcomes.</p>
            </article>

            <article className="card" aria-labelledby="imm-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="imm-accelerators">Incubators &amp; accelerators</h3>
              <p>Improve cohort quality with evidence-first evaluation, clear stage gates, and reusable playbooks aligned to MCF 2.2.</p>
            </article>

            <article className="card" aria-labelledby="imm-academia">
              <BookOpen className="cardIcon" aria-hidden="true" />
              <h3 id="imm-academia">Academic institutions</h3>
              <p>Research-to-impact pipelines, experimentation discipline, and governance for applied innovation programs and labs.</p>
            </article>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section" id="imm-outcomes" aria-labelledby="imm-outcomes-title">
          <h2 id="imm-outcomes-title">What you can expect</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-momentum">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="imm-momentum">Momentum</h3>
              <p>Faster decision cycles, tighter experiments, and clear gates that reduce waste and increase learning velocity.</p>
            </article>

            <article className="card" aria-labelledby="imm-clarity">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="imm-clarity">Clarity</h3>
              <p>Domain scores, phase readiness overlays, and KPIs that translate strategy into operating reality.</p>
            </article>

            <article className="card" aria-labelledby="imm-capability">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-capability">Capability</h3>
              <p>Reusable playbooks, decision memos, and governance routines your teams can sustain long after the program.</p>
            </article>
          </div>
        </section>

        {/* IMM 2.2 model */}
        <section className="section" id="imm-model" aria-labelledby="imm-model-title">
          <h2 id="imm-model-title">How IMM 2.2 measures maturity</h2>
          <p className="sectionLead">
            IMM 2.2 measures maturity through domain scoring with phase readiness overlays. Each question is scored individually; advanced assessments require evidence documentation for auditability.
          </p>

          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-domain-1">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-domain-1">Evidence &amp; epistemic discipline</h3>
              <p>How you separate assumptions from evidence and enforce thresholds before committing resources.</p>
            </article>

            <article className="card" aria-labelledby="imm-domain-2">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="imm-domain-2">Decision logic &amp; governance</h3>
              <p>How you allocate capital, define gates, document decisions, and maintain accountability.</p>
            </article>

            <article className="card" aria-labelledby="imm-domain-3">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="imm-domain-3">Culture &amp; behavior</h3>
              <p>Whether teams can invalidate safely, learn without blame, and collaborate across boundaries.</p>
            </article>

            <article className="card" aria-labelledby="imm-domain-4">
              <LineChart className="cardIcon" aria-hidden="true" />
              <h3 id="imm-domain-4">Iteration &amp; adaptive improvement</h3>
              <p>How quickly you learn, iterate, and institutionalize what works across initiatives.</p>
            </article>

            <article className="card" aria-labelledby="imm-domain-5">
              <Shield className="cardIcon" aria-hidden="true" />
              <h3 id="imm-domain-5">Systemic &amp; AI governance</h3>
              <p>Data governance, auditability, lifecycle controls, and impact oversight as complexity increases.</p>
            </article>

            <article className="card" aria-labelledby="imm-tiers">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tiers">Tiered delivery</h3>
              <p>Tier 1 snapshot, Tier 2 diagnostic, Tier 3 evidence-backed audit — one internal master instrument.</p>
            </article>
          </div>
        </section>

        {/* How we work — quick steps */}
        <section className="section" id="imm-how-we-work" aria-labelledby="imm-how-we-work-title">
          <h2 id="imm-how-we-work-title">How we work</h2>
          <div className="grid grid-3">
            <article className="card" aria-labelledby="imm-step-baseline">
              <h3 id="imm-step-baseline">Baseline</h3>
              <p>Establish domain scores, capability readiness, and key decision owners.</p>
            </article>
            <article className="card" aria-labelledby="imm-step-align">
              <h3 id="imm-step-align">Align</h3>
              <p>Agree on goals, evidence criteria, and operating cadence with leadership and core teams.</p>
            </article>
            <article className="card" aria-labelledby="imm-step-experiments">
              <h3 id="imm-step-experiments">Run experiments</h3>
              <p>Design and execute focused discovery, validation, and optimization cycles.</p>
            </article>
            <article className="card" aria-labelledby="imm-step-institutionalize">
              <h3 id="imm-step-institutionalize">Institutionalize</h3>
              <p>Embed learnings into routines, metrics, and ongoing operating rhythm.</p>
            </article>
          </div>
        </section>

        {/* Program structure */}
        <section className="section" id="program-structure" aria-labelledby="program-structure">
          <Heading as="h2" id="program-structure">
            Program structure (IMM-P®)
          </Heading>
          <p className="sectionLead">
            Five phases. Weekly masterclasses + clinics. Clear gates, owners, and decision criteria. Evidence stays in the loop.
          </p>

          <div className="immPhaseStack">
            {/* Phase 01 */}
          <article className="card" aria-labelledby="phase-01-title">
            <BookOpen className="cardIcon" aria-hidden="true" />
            <h3 id="phase-01-title">Phase 01 — Foundations (Readiness &amp; Operating System)</h3>
            <ul>
              <li>Baseline maturity (domain scoring, culture, governance, decision logic)</li>
              <li>Install innovation governance (roles, cadence, intake, decision owners, gate criteria)</li>
              <li>Establish evidence discipline (thresholds, decision memos, learning capture)</li>
              <li>Reinforce culture & mindset (leadership rituals, meeting hygiene, accountability norms)</li>
              <li>Set agile operating setup (boards, sprint rhythm, review/retro cadence)</li>
              <li>Define program OKRs & KPIs (measurement plan, reporting cadence)</li>
              <li>Select pilot candidates (sequencing, constraints, risk scan)</li>
              <li>Build the Innovation OS blueprint (tooling, templates, evidence packs, decision memo format)</li>
              <li>Run phase gate (readiness review + next-phase plan)</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Domain baseline; governance framework; OKRs/KPIs; pilot shortlist &amp; criteria; Innovation OS blueprint; readiness decision memo.
            </p>
          </article>

          {/* Phase 02 */}
          <article className="card" aria-labelledby="phase-02-title">
            <Target className="cardIcon" aria-hidden="true" />
            <h3 id="phase-02-title">Phase 02 — Structured Discovery &amp; Validation</h3>
            <ul>
              <li>Synthesize customer insights (segments, interviews, jobs/pains/gains, alternatives)</li>
              <li>Define the problem (problem statements, constraints, strategic objectives, OKR alignment)</li>
              <li>Explore solutions (alternatives, value proposition, differentiation)</li>
              <li>Prototype workflows (user stories, flows, low-to-mid fidelity prototypes)</li>
              <li>Run experiments (hypotheses, test design, evidence loops, kill criteria)</li>
              <li>Stand up validation infrastructure (tracking, synthesis, decision trails)</li>
              <li>Outline GTM (channels, onboarding, retention levers, early sales motions)</li>
              <li>Check business model signals (viability checks, operating assumptions)</li>
              <li>Run phase gate (problem/solution fit decision memo)</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Research synthesis; problem &amp; objective set; validated value proposition; experiment results; pilot plan; updated model; decision memo.
            </p>
          </article>

          {/* Phase 03 */}
          <article className="card" aria-labelledby="phase-03-title">
            <LineChart className="cardIcon" aria-hidden="true" />
            <h3 id="phase-03-title">Phase 03 — Efficiency (Process, Automation, Quality)</h3>
            <ul>
              <li>Map processes (bottleneck removal, SOPs, handoffs, latency reduction)</li>
              <li>Implement automation & integrations (workflows, data pipelines, system boundaries)</li>
              <li>Establish data-driven cadence (dashboards, governance review rhythm)</li>
              <li>Strengthen quality controls (defect prevention, acceptance criteria, reliability practices)</li>
              <li>Integrate risk & compliance (controls, checklists)</li>
              <li>Align cross-team interfaces (ownership, escalation paths)</li>
              <li>Run continuous improvement loops (retrospectives, backlog hygiene, operating upgrades)</li>
              <li>Run phase gate (operational readiness + pilot expansion memo)</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Process audit &amp; actions; automation plan; QA/risk plan; dashboards; operating cadence; expansion decision memo.
            </p>
          </article>

          {/* Phase 04 */}
          <article className="card" aria-labelledby="phase-04-title">
            <Rocket className="cardIcon" aria-hidden="true" />
            <h3 id="phase-04-title">Phase 04 — Scaling (Infrastructure, Partnerships, Growth)</h3>
            <ul>
              <li>Set scaling strategy (roadmap, sequencing, capacity planning)</li>
              <li>Align infrastructure & org (roles, talent plan, operating model adjustments)</li>
              <li>Develop partner ecosystem (selection, governance, interface management)</li>
              <li>Build growth operating system (metrics, targets, experimentation at scale)</li>
              <li>Expand GTM (sales/marketing systems, repeatable onboarding)</li>
              <li>Model scale economics (unit economics, scenarios, risk and contingency)</li>
              <li>Address internationalization considerations (where relevant)</li>
              <li>Run phase gate (scale-up decision memo)</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Scaling plan; partner map; growth KPI system; GTM expansion plan; finance model; talent/org plan; scale decision memo.
            </p>
          </article>

          {/* Phase 05 */}
          <article className="card" aria-labelledby="phase-05-title">
            <Shield className="cardIcon" aria-hidden="true" />
            <h3 id="phase-05-title">Phase 05 — Continuous Improvement (Learning &amp; Resilience)</h3>
            <ul>
              <li>Install continuous learning system (feedback loops, retrospectives, portfolio reviews)</li>
              <li>Build knowledge management (playbooks, patterns, institutional memory)</li>
              <li>Run trend sensing & foresight (signals, scenarios, adaptive strategy refresh)</li>
              <li>Track impact (outcomes, stakeholder communication)</li>
              <li>Maintain resilience playbook (risks, continuity, sustainability practices)</li>
              <li>Refresh operating cadence (quarterly reviews, governance upgrades, OKR recalibration)</li>
              <li>Set long-term roadmap (capability upgrades, maturity targets)</li>
              <li>Run phase gate (long-term operating review memo)</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Continuous improvement strategy; foresight inputs; impact measures; resilience plan; long-term roadmap; operating review memo.
            </p>
          </article>
          </div>

          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Method backbone:{' '}
            <Link
              to="/docs/research-resources/microcanvas"
              data-cta="cta.services.imm.method_backbone.microcanvas"
              aria-label="Open MicroCanvas Framework documentation"
            >
              MicroCanvas Framework (MCF 2.2)
            </Link>{' '}
            + IMM 2.2 (domain scoring, phase readiness, evidence gates).
          </p>
        </section>

        <section className="section" id="imm-delivery" aria-labelledby="imm-delivery-title">
          <h2 id="imm-delivery-title">Delivery options</h2>
          <p className="sectionLead">
            Choose the operating cadence that matches your constraints. We keep the same gates and artifacts—only the depth and rollout
            change.
          </p>

          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-delivery-core">
              <h3 id="imm-delivery-core">12-week core track</h3>
              <p>
                Foundations + Structured Discovery &amp; Validation. Best for teams that need a fast baseline, clear gates, and a first pilot
                plan.
              </p>
              <ul>
                <li>Domain baseline + phase readiness</li>
                <li>Governance cadence installed (weekly)</li>
                <li>Evidence gates + decision memos</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="imm-delivery-extended">
              <h3 id="imm-delivery-extended">24+ week rollout</h3>
              <p>
                Two 12-week cycles covering Foundations plus Structured Discovery &amp; Validation, followed by Efficiency, Scaling, and
                Continuous Improvement.
              </p>
              <ul>
                <li>Phase-by-phase delivery + gates</li>
                <li>Pilot execution support</li>
                <li>Operating cadence reinforcement</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="imm-delivery-multiteam">
              <h3 id="imm-delivery-multiteam">Multi-team / portfolio</h3>
              <p>For institutions and larger organizations running multiple initiatives. Adds portfolio governance and standardization.</p>
              <ul>
                <li>Intake + prioritization model</li>
                <li>Portfolio reviews + auditability</li>
                <li>Shared playbooks &amp; templates</li>
              </ul>
            </article>
          </div>

          <div className="ctaRow" style={{ marginTop: '1rem' }}>
            <Link
              className="button button--primary button--lg"
              to="https://booking.doulab.net/discovery"
              data-cta="cta.services.imm.delivery.discovery"
              aria-label="Book a discovery call to choose a delivery option"
            >
              Book a discovery call
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="#program-structure"
              data-cta="cta.services.imm.delivery.see_structure"
              aria-label="Jump to program structure"
            >
              See program structure
            </Link>
          </div>

          <p className="microcopy" style={{ marginTop: '0.5rem' }}>
            Prefer starting with a baseline?{' '}
            <Link to="/services/clarityscan" data-cta="cta.services.imm.delivery.learn_clarityscan" aria-label="Learn about ClarityScan baseline">
              Learn about ClarityScan®
            </Link>
            .
          </p>
        </section>

        {/* FAQ — keep 2-column layout via existing grid class */}
        <section className="section" id="imm-faq" aria-labelledby="imm-faq-title">
          <h2 id="imm-faq-title">IMM-P® — Frequently asked questions</h2>

          <div className={`faqList ${'pages-b4-p2__faqListGrid'} immFaqGrid`}>
            <details className="card">
              <summary>
                <strong>How long does the program take?</strong>
              </summary>
              <p>Most teams start with a 12-week core track focused on Foundations plus Structured Discovery &amp; Validation. Larger rollouts extend to 24+ weeks across all five phases with additional pilots and operating cadence improvements.</p>
            </details>

            <details className="card">
              <summary>
                <strong>What’s the time commitment per week?</strong>
              </summary>
              <p>Expect a weekly masterclass (60–90 minutes), one clinic (60 minutes), plus team time for experiments and delivery. Cadence is tailored to your context.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Who should be involved?</strong>
              </summary>
              <p>A cross-functional core team and visible decision owners. We help you staff roles and install a lightweight Innovation Governance Framework aligned to your operating reality.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Do we need a lab or PMO first?</strong>
              </summary>
              <p>No. IMM-P® installs the minimal governance and cadence you need. If you already have a lab/PMO, we integrate and strengthen gates, artifacts, and accountability.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Where does ClarityScan® fit?</strong>
              </summary>
              <p>
                We run a{' '}
                <Link to="/services/clarityscan" data-cta="cta.services.imm.faq.clarityscan" aria-label="Open ClarityScan service page">
                  ClarityScan®
                </Link>{' '}
                in Phase 01 to establish domain scores and phase readiness, align decision owners, and define the first evidence gates.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>Is IMM 2.2 domain-based or phase-based?</strong>
              </summary>
              <p>Both. Scoring is domain-based (how you decide, govern, learn, and scale) and it also produces phase readiness overlays for Structured Discovery &amp; Validation, Efficiency, Scaling, and Continuous Improvement.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Do you require evidence for scoring?</strong>
              </summary>
              <p>Tier 1 and Tier 2 can run as scored assessments. Tier 3 requires evidence documentation for auditability, compliance, and institutional learning.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Can the program run remotely?</strong>
              </summary>
              <p>Yes. Remote-first by design, with optional on-site kickoffs or checkpoints.</p>
            </details>

            <details className="card">
              <summary>
                <strong>What do we receive at the end?</strong>
              </summary>
              <p>Domain scores and phase readiness overlays, evidence packs and decision memos at each gate, a pilot plan (or shipped pilot), a working governance cadence, and reusable playbooks/templates aligned to MCF 2.2.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Do we need engineering on day one?</strong>
              </summary>
              <p>Not necessarily. Early phases can run with interviews, prototypes, and concierge tests. Later phases benefit from dedicated engineering or vendor capacity.</p>
            </details>

            <details className="card">
              <summary>
                <strong>How is pricing structured?</strong>
              </summary>
              <p>
                Scope-based. We’ll shape a right-sized plan during intake.{' '}
                <Link
                  to="https://booking.doulab.net/discovery"
                  data-cta="cta.services.imm.faq.pricing.discovery"
                  aria-label="Book a discovery call to discuss IMM pricing"
                >
                  Talk to us
                </Link>
                .
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>How do you handle data and privacy?</strong>
              </summary>
              <p>Privacy-first analytics only. You own your data. We operate under NDAs and follow your security and compliance requirements.</p>
            </details>
          </div>
        </section>

        <section className="section section--tight" id="imm-proof" aria-labelledby="imm-proof-title">
          <h2 id="imm-proof-title">Trusted by teams building public and private innovation</h2>
          <p className="sectionLead">
            We’ll replace these placeholders with your confirmed logos (SVG/PNG) once you share the filenames.
          </p>

          <div className="proofStrip" role="list" aria-label="Selected organizations">
            {[
              { key: 'afpsiembra', type: 'raster', alt: 'AFP Siembra logo' },
              { key: 'alpha', type: 'raster', alt: 'Alpha logo' },
              { key: 'cven-logo-h-color', type: 'svg', alt: 'C-Ven Tecnologías logo' },
              { key: 'fundapec', type: 'raster', alt: 'Fundapec logo' },
              { key: 'mentorpill', type: 'raster', alt: 'MentorPill logo' },
              { key: 'ogtic_horizontal_fullcolor', type: 'raster', alt: 'OGTIC logo' },
              { key: 'pharmakun', type: 'raster', alt: 'Pharmakun logo' },
              { key: 'su', type: 'raster', alt: 'SU logo' },
            ].map(({ key, type, alt }) => (
              <div key={key} className="proofLogo" role="listitem">
                {type === 'svg' ? (
                  <img src={`/img/logos/optimized/${key}.svg`} alt={alt} loading="lazy" width="160" height="56" />
                ) : (
                  <picture>
                    <source srcSet={`/img/logos/optimized/${key}.avif`} type="image/avif" />
                    <source srcSet={`/img/logos/optimized/${key}.webp`} type="image/webp" />
                    <img src={`/img/logos/optimized/${key}.png`} alt={alt} loading="lazy" width="160" height="56" />
                  </picture>
                )}
              </div>
            ))}
          </div>

          <p className="microcopy" style={{ textAlign: 'center', marginTop: '0.75rem' }}>
            Want to see a relevant example?{' '}
            <Link to="#imm-related" data-cta="cta.services.imm.proof.see_case_studies" aria-label="Jump to related case studies">
              Explore case studies
            </Link>
            .
          </p>
        </section>

        {/* Related case studies — shared component in canonical order */}
        <section className="section" id="imm-related" aria-labelledby="imm-related">
          <Heading as="h2" id="imm-related">
            Related case studies
          </Heading>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="imm-cta"
          ariaLabelledbyId="imm-cta-title"
          title="Ready to accelerate your innovation maturity?"
          body="Kick off with a quick baseline or talk with our team about running IMM-P® in your organization."
          primaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.services.imm.final.book_clarityscan_booking',
            newTab: true,
            ariaLabel: 'Book a ClarityScan — baseline assessment',
          }}
          secondaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.imm.final.discovery',
          }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2 (domain scoring, phase readiness, evidence gates)."
        />
      </main>
    </Layout>
  );
}

