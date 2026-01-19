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
      'A structured, gated program that installs repeatable innovation capability using the MicroCanvas Framework (MCF v2.1) and IMM-P® governance.',
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
            'Most teams start with a 12-week core track focused on discovery, validation, and operating cadence. Larger rollouts extend to 24+ weeks across the five phases with additional mentoring and pilots.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the time commitment per week?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Expect a weekly masterclass (60–90 minutes), one mentoring clinic (60 minutes), and focused team work time for experiments and delivery. The exact cadence is tailored to your context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should participate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'A cross-functional core team (product/ops, CX, tech/data) plus visible decision owners. We’ll help you staff roles and define governance via the Innovation Governance Framework (IGF).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need an innovation lab or PMO in place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. IMM-P® installs a minimal, effective governance layer (IGF) and operating cadence. If you already have a lab/PMO, we integrate with it and strengthen decision gates and artifacts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ClarityScan® fit into the program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We run a ClarityScan® diagnostic in Phase 01 to baseline capability, surface risks, align goals, and sequence work. It becomes your before/after reference for momentum and maturity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can IMM-P® run remote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. IMM-P® is remote-first. We can add on-site kickoffs or checkpoints where it creates leverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do we actually get at the end?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Evidence packs, decision memos at each gate, a pilot plan (or shipped pilot), a working governance cadence, and reusable playbooks and templates mapped to MCF 2.1.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need engineering resources on day one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Not necessarily. Early phases use interviews, prototypes, and concierge tests. As you move into pilots and scale, dedicated engineering or vendor capacity becomes valuable.',
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
            'We use privacy-first analytics only. You own your data and artifacts. We operate under mutual NDAs and follow your compliance and security requirements.',
        },
      },
    ],
  };

  return (
    <Layout
      title="Innovation Maturity Model Program (IMM-P)® | Doulab"
      description="A structured, gated program to baseline, strengthen, and scale innovation capability using MCF 2.1 and IMM-P® governance."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
        {/* Preload hero (two-column Hero component uses this base) */}
        <link
          rel="preload"
          as="image"
          href="/img/imm-program.jpg"
          imageSrcSet="/img/imm-program.avif 1x, /img/imm-program.webp 1x, /img/imm-program.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
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
            'IMM-P® is our structured program to install repeatable innovation. We baseline capability, run gated delivery with the MicroCanvas Framework (MCF 2.1), and build the governance and metrics that turn strategy into outcomes.'
          }
          imageBase="/img/imm-program"
          imageAlt="IMM-P® program illustration"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.imm.hero.discovery',
          }}
          secondaryCta={{ to: '/services/innovation-maturity#imm-structure', label: 'See program structure', dataCta: 'cta.services.imm.hero.see_structure', ariaLabel: 'See program structure' }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />

        {/* Who is it for? */}
        <section className="section" id="imm-who" aria-labelledby="imm-who-title">
          <h2 id="imm-who-title">Who is it for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="imm-startups">Startups</h3>
              <p>From ideas to evidence to product/market fit — with gates, focus, and repeatable delivery.</p>
            </article>
            <article className="card" aria-labelledby="imm-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-public">Public Institutions</h3>
              <p>Digital transformation with transparent governance and capability building.</p>
            </article>
            <article className="card" aria-labelledby="imm-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="imm-private">Private organizations</h3>
              <p>Established companies accelerating internal innovation capabilities and delivery maturity.</p>
            </article>
            <article className="card" aria-labelledby="imm-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="imm-accelerators">Incubators & Accelerators</h3>
              <p>Raise cohort quality with evidence-first methods, clear gates, and reusable playbooks.</p>
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
              <p>Decisions made faster; prototypes shipped sooner; learning captured continuously.</p>
            </article>
            <article className="card" aria-labelledby="imm-clarity">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="imm-clarity">Clarity</h3>
              <p>Baselines & KPIs that translate strategy into everyday action.</p>
            </article>
            <article className="card" aria-labelledby="imm-capability">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-capability">Capability</h3>
              <p>Teams equipped with methods, templates, and governance to scale.</p>
            </article>
          </div>
        </section>

        {/* Program structure — full weekly themes + deliverables */}
      <section className="section" id="imm-structure" aria-labelledby="imm-structure">
        <Heading as="h2" id="imm-structure">
          Program structure (IMM-P®)
        </Heading>
          <p className="sectionLead">
            Five phases. Weekly masterclasses + mentoring. Clear gates, owners, and decision criteria. Evidence in the loop.
          </p>

          {/* Phase 01 */}
          <article className="card" aria-labelledby="phase-01-title">
            <BookOpen className="cardIcon" aria-hidden="true" />
            <h3 id="phase-01-title">Phase 01 — Pre-Discovery (Readiness & Operating System)</h3>
            <ul>
              <li>Innovation maturity baseline (capability, culture, governance)</li>
              <li>IGF: roles, cadence, intake, decision owners, gate criteria</li>
              <li>Culture & innovation mindset; leadership rituals; meeting hygiene</li>
              <li>Agile setup: boards, standups, review/retro rhythm</li>
              <li>Team OKRs & KPIs; measurement plan</li>
              <li>Pilot candidates selection & risk scan</li>
              <li>InnovationOS blueprint (tooling, templates, evidence packs)</li>
              <li>Kickoff decision memo + next-phase readiness review</li>
            </ul>
            <p><strong>Key deliverables:</strong> Maturity self-assessment; IGF; OKRs; pilot list & criteria; innovationOS blueprint; decision memo.</p>
          </article>

          {/* Phase 02 */}
          <article className="card" aria-labelledby="phase-02-title">
            <Target className="cardIcon" aria-hidden="true" />
            <h3 id="phase-02-title">Phase 02 — Structured Discovery & Validation</h3>
            <ul>
              <li>Customer interviews & segments; personas; jobs/pains/gains</li>
              <li>Problem statements; opportunity sizing; regulatory constraints</li>
              <li>Solution alternatives; unique value proposition; <em>transformative purpose</em></li>
              <li>Early user stories & flows; low-fidelity prototypes</li>
              <li>Experiments design (interviews, concierge, prototypes, ABs); evidence loops</li>
              <li>GTM outline: channels, hooks, onboarding, retention levers</li>
              <li>Business model & viability signals (offer probes, not pricing tests)</li>
              <li>Pilots definition; ethics & security reviews where applicable</li>
              <li>Phase gate: problem/solution fit decision memo</li>
            </ul>
            <p><strong>Key deliverables:</strong> Research synthesis; UVP; experiment results; pilot plan; refined model; decision memo.</p>
          </article>

        {/* Phase 03 */}
          <article className="card" aria-labelledby="phase-03-title">
            <LineChart className="cardIcon" aria-hidden="true" />
            <h3 id="phase-03-title">Phase 03 — Efficiency (Process, Automation, Quality)</h3>
            <ul>
              <li>Process mapping & bottleneck removal; SOPs</li>
              <li>Automation & integrations; data as first-class signal</li>
              <li>Quality system; risk framework; compliance checklist</li>
              <li>Cross-department alignment; BI dashboards & decision cadence</li>
              <li>Continuous improvement loop; defect/latency reduction</li>
              <li>Phase gate: operational readiness & pilot expansion memo</li>
            </ul>
            <p><strong>Key deliverables:</strong> Process audit & actions; automation plan; QA/risk plan; BI dashboard; CI plan; decision memo.</p>
          </article>

          {/* Phase 04 */}
          <article className="card" aria-labelledby="phase-04-title">
            <Rocket className="cardIcon" aria-hidden="true" />
            <h3 id="phase-04-title">Phase 04 — Scaling (Infra, Partnerships, Growth)</h3>
            <ul>
              <li>Scaling strategy & roadmap; capacity planning</li>
              <li>Infrastructure & org alignment; talent & leadership plan</li>
              <li>Partner ecosystem & governance</li>
              <li>Growth metrics; scalable GTM (sales/marketing)</li>
              <li>Financial model for scale; risk & contingency</li>
              <li>Internationalization considerations (where relevant)</li>
              <li>Phase gate: scale-up decision memo</li>
            </ul>
            <p><strong>Key deliverables:</strong> Scaling plan; partner map; growth KPI dashboard; GTM; finance model; talent & org plan; decision memo.</p>
          </article>

          {/* Phase 05 */}
          <article className="card" aria-labelledby="phase-05-title">
            <Shield className="cardIcon" aria-hidden="true" />
            <h3 id="phase-05-title">Phase 05 — Continuous Improvement (Learning & Resilience)</h3>
            <ul>
              <li>Learning culture; feedback loops; retros at portfolio level</li>
              <li>Trend sensing & foresight; adaptive strategies</li>
              <li>Impact measurement & communications</li>
              <li>Resilience playbook; sustainability plan</li>
              <li>Long-term roadmap & refresh cadence</li>
              <li>Phase gate: long-term operating review memo</li>
            </ul>
            <p><strong>Key deliverables:</strong> CI strategy; foresight inputs; impact measures; resilience plan; long-term roadmap; decision memo.</p>
          </article>

          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Method backbone: <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework (MCF 2.1)</Link> and IMM-P® governance.
          </p>
        </section>

        {/* FAQ — re-added (semantic + JSON-LD) */}
        <section className="section" id="imm-faq" aria-labelledby="imm-faq-title">
          <h2 id="imm-faq-title">IMM-P® — Frequently asked questions</h2>

          <div className={`faqList ${'pages-b4-p2__faqListGrid'}`}>
            <details className="card">
              <summary><strong>How long does IMM-P® run?</strong></summary>
              <p>Most teams start with a 12-week core track. Larger rollouts extend to 24+ weeks across the five phases with additional mentoring and pilots.</p>
            </details>

            <details className="card">
              <summary><strong>What’s the time commitment per week?</strong></summary>
              <p>Plan for a weekly masterclass (60–90 minutes), one mentoring clinic (60 minutes), plus team time for experiments and delivery.</p>
            </details>

            <details className="card">
              <summary><strong>Who should participate?</strong></summary>
              <p>A cross-functional core team and visible decision owners. We help you define roles and a lightweight Innovation Governance Framework (IGF).</p>
            </details>

            <details className="card">
              <summary><strong>Do we need an innovation lab or PMO first?</strong></summary>
              <p>No. IMM-P® installs the minimal governance and cadence you need. If you already have a lab/PMO, we integrate and strengthen gates and artifacts.</p>
            </details>

            <details className="card">
              <summary><strong>How does ClarityScan® fit?</strong></summary>
              <p>We run a <Link to="/services/clarityscan">ClarityScan®</Link> in Phase 01 to baseline capability, align goals, surface risks, and sequence work.</p>
            </details>

            <details className="card">
              <summary><strong>Is the program remote?</strong></summary>
              <p>Yes. Remote-first by design, with optional on-site kickoffs or checkpoints.</p>
            </details>

            <details className="card">
              <summary><strong>What do we get at the end?</strong></summary>
              <p>Evidence packs and decision memos, a pilot plan (or shipped pilot), a working governance cadence, and reusable MCF 2.1 playbooks/templates.</p>
            </details>

            <details className="card">
              <summary><strong>Do we need engineering on day one?</strong></summary>
              <p>Not necessarily. Early phases can run with interviews, prototypes, and concierge tests. Later phases benefit from dedicated engineering or vendor capacity.</p>
            </details>

            <details className="card">
              <summary><strong>How is pricing structured?</strong></summary>
              <p>Scope-based. We’ll shape a right-sized plan during intake. <Link to="https://booking.doulab.net/discovery">Talk to us</Link>.</p>
            </details>

            <details className="card">
              <summary><strong>How do you handle data and privacy?</strong></summary>
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
          body="Kick off with a quick diagnostic or talk with our team about running IMM-P® in your organization."
          primaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.services.imm.final.book_clarityscan_booking',
            newTab: true,
            ariaLabel: 'Book a ClarityScan — 15–20 minute baseline',
          }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Book a discovery call', dataCta: 'cta.services.imm.final.discovery' }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}
