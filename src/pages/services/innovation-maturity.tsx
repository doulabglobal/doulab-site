// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';

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
        name: 'How long does IMM-P® run?',
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
        name: 'Who should participate?',
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

  const immHeroDiagram = `
%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "linear",
    "nodeSpacing": 28,
    "rankSpacing": 26,
    "useMaxWidth": true
  },
  "themeVariables": {
    "fontFamily": "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    "fontSize": "22px",
    "lineColor": "#6b7280",
    "mainBkg": "#ffffff"
  }
}}%%

flowchart TB
  classDef blue fill:#0B5ED7,stroke:#0B5ED7,color:#ffffff,stroke-width:2px;
  classDef teal fill:#00A6C8,stroke:#00A6C8,color:#ffffff,stroke-width:2px;
  classDef green fill:#57C000,stroke:#57C000,color:#0b0f19,stroke-width:2px;
  classDef orange fill:#FF8A00,stroke:#FF8A00,color:#0b0f19,stroke-width:2px;
  classDef red fill:#F26B5E,stroke:#F26B5E,color:#ffffff,stroke-width:2px;

  P1["PHASE 01 — FOUNDATIONS<br/>(capability spine)<br/>Baseline • Roles • Metrics"]:::blue
  D["PHASE 02 — DISCOVERY"]:::teal
  V["PHASE 02 — VALIDATION"]:::green
  E["PHASE 03 — EFFICIENCY"]:::orange
  S["PHASE 04 — SCALING"]:::red
  CI["PHASE 05 — CONTINUOUS<br/>IMPROVEMENT"]:::red

  P1 --> D --> V --> E --> S --> CI

  linkStyle default stroke:#6b7280,stroke-width:2px;
`;

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
            'IMM-P® is Doulab’s domain-based maturity program (IMM 2.2) to strengthen how teams make decisions under uncertainty. We baseline capability, install governance and evidence gates, and run structured delivery using the MicroCanvas Framework (MCF 2.2) across five phases — from Foundations to Continuous Improvement.'
          }
          imageBase="/img/imm-program"
          imageAlt="IMM-P® program illustration"
          width={1600}
          height={900}
          rightVisual={<Mermaid value={immHeroDiagram} />}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.imm.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/innovation-maturity#imm-structure',
            label: 'See program structure',
            dataCta: 'cta.services.imm.hero.see_structure',
            ariaLabel: 'See program structure',
          }}
          ctaNote="Built on MicroCanvas® v2.2 + IMM 2.2 (domain scoring, phase readiness, evidence gates)."
        />

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

        {/* Program structure */}
        <section className="section" id="imm-structure" aria-labelledby="imm-structure">
          <Heading as="h2" id="imm-structure">
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
              <li>Maturity baseline: domain scoring, culture, governance, decision logic</li>
              <li>Innovation Governance Framework: roles, cadence, intake, decision owners, gate criteria</li>
              <li>Evidence-first discipline: thresholds, decision memos, and learning capture</li>
              <li>Culture &amp; mindset: leadership rituals, meeting hygiene, and accountability norms</li>
              <li>Agile operating setup: boards, sprint rhythm, review/retro cadence</li>
              <li>Innovation program OKRs &amp; KPIs: measurement plan and reporting cadence</li>
              <li>Pilot candidate selection: sequencing, constraints, and risk scan</li>
              <li>Innovation OS blueprint: tooling, templates, evidence packs, decision memo format</li>
              <li>Phase gate: readiness review + next-phase plan</li>
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
              <li>Customer insights: segments, interviews, jobs/pains/gains, alternatives</li>
              <li>Problem definition: problem statements, constraints, strategic objectives, OKR alignment</li>
              <li>Solution exploration: alternatives, value proposition, differentiation</li>
              <li>Prototyping: user stories, flows, low-to-mid fidelity prototypes</li>
              <li>Experimentation: hypotheses, test design, evidence loops, kill criteria</li>
              <li>Validation infrastructure: tracking, synthesis, and decision trails</li>
              <li>GTM outline: channels, onboarding, retention levers, early sales motions</li>
              <li>Business model validation signals: viability checks and operating assumptions</li>
              <li>Phase gate: problem/solution fit decision memo</li>
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
              <li>Process mapping: bottleneck removal, SOPs, handoffs, and operating latency reduction</li>
              <li>Automation &amp; integrations: workflows, data pipelines, and system boundaries</li>
              <li>Data-driven decision cadence: dashboards and governance review rhythm</li>
              <li>Quality controls: defect prevention, acceptance criteria, and reliability practices</li>
              <li>Risk &amp; compliance integration: controls and checklists as you operationalize</li>
              <li>Cross-team alignment: interfaces, ownership, and escalation paths</li>
              <li>Continuous improvement loop: retrospectives, backlog hygiene, and operating upgrades</li>
              <li>Phase gate: operational readiness + pilot expansion memo</li>
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
              <li>Scaling strategy: roadmap, sequencing, and capacity planning</li>
              <li>Infrastructure &amp; org alignment: roles, talent plan, and operating model adjustments</li>
              <li>Partner ecosystem: selection, governance, and interface management</li>
              <li>Growth operating system: metrics, targets, and experimentation at scale</li>
              <li>GTM expansion: sales/marketing systems and repeatable onboarding</li>
              <li>Financial model for scale: unit economics, scenarios, risk and contingency</li>
              <li>Internationalization considerations (where relevant)</li>
              <li>Phase gate: scale-up decision memo</li>
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
              <li>Continuous learning system: feedback loops, retrospectives, and portfolio reviews</li>
              <li>Knowledge management: reusable playbooks, patterns, and institutional memory</li>
              <li>Trend sensing &amp; foresight: signals, scenarios, and adaptive strategy refresh</li>
              <li>Impact measurement: outcomes tracking and stakeholder communication</li>
              <li>Resilience playbook: risks, continuity, and sustainability practices</li>
              <li>Operating refresh cadence: quarterly reviews, governance upgrades, OKR recalibration</li>
              <li>Long-term roadmap: capability upgrades and maturity targets</li>
              <li>Phase gate: long-term operating review memo</li>
            </ul>
            <p>
              <strong>Key deliverables:</strong> Continuous improvement strategy; foresight inputs; impact measures; resilience plan; long-term roadmap; operating review memo.
            </p>
          </article>
          </div>

          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Method backbone: <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework (MCF 2.2)</Link> + IMM 2.2 (domain scoring, phase readiness, evidence gates).
          </p>
        </section>

        {/* FAQ — keep 2-column layout via existing grid class */}
        <section className="section" id="imm-faq" aria-labelledby="imm-faq-title">
          <h2 id="imm-faq-title">IMM-P® — Frequently asked questions</h2>

          <div className={`faqList ${'pages-b4-p2__faqListGrid'} immFaqGrid`}>
            <details className="card">
              <summary>
                <strong>How long does IMM-P® run?</strong>
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
                <strong>Who should participate?</strong>
              </summary>
              <p>A cross-functional core team and visible decision owners. We help you staff roles and install a lightweight Innovation Governance Framework aligned to your operating reality.</p>
            </details>

            <details className="card">
              <summary>
                <strong>Do we need an innovation lab or PMO first?</strong>
              </summary>
              <p>No. IMM-P® installs the minimal governance and cadence you need. If you already have a lab/PMO, we integrate and strengthen gates, artifacts, and accountability.</p>
            </details>

            <details className="card">
              <summary>
                <strong>How does ClarityScan® fit?</strong>
              </summary>
              <p>We run a <Link to="/services/clarityscan">ClarityScan®</Link> in Phase 01 to establish domain scores and phase readiness, align decision owners, and define the first evidence gates.</p>
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
                <strong>Is the program remote?</strong>
              </summary>
              <p>Yes. Remote-first by design, with optional on-site kickoffs or checkpoints.</p>
            </details>

            <details className="card">
              <summary>
                <strong>What do we get at the end?</strong>
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
              <p>Scope-based. We’ll shape a right-sized plan during intake. <Link to="https://booking.doulab.net/discovery">Talk to us</Link>.</p>
            </details>

            <details className="card">
              <summary>
                <strong>How do you handle data and privacy?</strong>
              </summary>
              <p>Privacy-first analytics only. You own your data. We operate under NDAs and follow your security and compliance requirements.</p>
            </details>
          </div>
        </section>

        {/* Related case studies — shared component in canonical order */}
        <section className="section" id="imm-related" aria-labelledby="imm-related-title">
          <h2 id="imm-related-title">Related case studies</h2>
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
