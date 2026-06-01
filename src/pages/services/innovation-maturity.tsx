// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Icons (tree-shaken)
import Layers from 'lucide-react/dist/esm/icons/layers';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '../../components/Hero';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';
import FinalCta from '../../components/FinalCta';
import ImmFunnelDiagram from '../../components/diagrams/ImmFunnelDiagram';
import Pillars from '../../components/imm/Pillars';
import Roadmap from '../../components/imm/Roadmap';
import Radar from '../../components/imm/Radar';
import MaturityLadder from '../../components/imm/MaturityLadder';
import EvidenceMeter from '../../components/imm/EvidenceMeter';
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
      'IMM-P® is the program that operationalizes the Innovation Maturity Model (IMM 2.2): five domains, a five-rung capability progression, and phase-readiness gates backed by evidence.',
    areaServed: ['Global'],
  };

  // JSON-LD schema (FAQ)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between IMM and IMM-P®?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'IMM is the model: five domains, five maturity rungs, and phase-readiness gates. IMM-P® is the program that runs an organization through the model, installing the cadence, governance, and evidence discipline needed to climb the ladder.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the program take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most teams start with a 12-week core track focused on Foundations and Structured Discovery and Validation. Larger rollouts extend to 24+ weeks across all five phases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IMM 2.2 domain-based or phase-based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Both. Scoring is domain-based across five domains (Evidence, Decision logic, Culture, Iteration, Systemic and AI governance). The same instrument produces phase-readiness overlays for the five IMM-P® phases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does ClarityScan® fit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'ClarityScan® is the entry-level diagnostic that feeds an IMM-P® engagement. Tier 1 is the snapshot, Tier 2 is the diagnostic, and Tier 3 is the evidence-backed audit. Any tier establishes the baseline IMM-P® builds on.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you require evidence for scoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Tier 1 and Tier 2 can run as scored assessments. Tier 3 requires evidence documentation for auditability, compliance, and institutional learning. IMM-P® phase gates open at 75 percent evidence quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can IMM-P® run remote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. IMM-P® is remote-first. On-site kickoffs or checkpoints can be added where they add value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do we actually get at the end?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Domain scores and phase-readiness overlays, evidence packs and decision memos at each gate, a pilot plan or shipped pilot, a working governance cadence, and reusable playbooks aligned to MCF 2.2.',
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

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://doulab.net/services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Innovation Maturity Model Program (IMM-P)®',
        item: 'https://doulab.net/services/innovation-maturity',
      },
    ],
  };

  // IMM model: the five domains
  const immDomains = [
    {
      icon: <ClipboardCheck aria-hidden="true" />,
      title: 'Evidence and epistemic discipline',
      body: 'How you separate assumptions from evidence, set thresholds, and refuse to commit resources without proof.',
      accent: 'indigo' as const,
    },
    {
      icon: <Workflow aria-hidden="true" />,
      title: 'Decision logic and governance',
      body: 'How you allocate capital, structure gates, document decisions, and hold owners accountable.',
      accent: 'purple' as const,
    },
    {
      icon: <Users aria-hidden="true" />,
      title: 'Culture and behavior',
      body: 'Whether teams invalidate safely, learn without blame, and collaborate across functional boundaries.',
      accent: 'green' as const,
    },
    {
      icon: <LineChart aria-hidden="true" />,
      title: 'Iteration and adaptive improvement',
      body: 'How quickly you learn, iterate, and institutionalize what works across initiatives.',
      accent: 'amber' as const,
    },
    {
      icon: <Shield aria-hidden="true" />,
      title: 'Systemic and AI governance',
      body: 'Data governance, auditability, lifecycle controls, and impact oversight as complexity increases.',
      accent: 'slate' as const,
    },
  ];

  // IMM-P® phases as a roadmap
  const immpPhases = [
    {
      range: 'Phase 1',
      label: 'Foundations',
      body: 'Baseline maturity, install governance, establish evidence discipline, build the Innovation OS blueprint.',
      initiatives: [
        'Domain baseline and readiness review',
        'Governance roles, intake, decision owners',
        'Pilot shortlist and operating cadence',
      ],
      state: 'now' as const,
    },
    {
      range: 'Phase 2',
      label: 'Structured Discovery and Validation',
      body: 'Problem framing, customer insight synthesis, hypothesis testing, validated value proposition.',
      initiatives: [
        'Research synthesis and problem set',
        'Experiments with kill criteria',
        'Problem and solution fit decision memo',
      ],
      state: 'now' as const,
    },
    {
      range: 'Phase 3',
      label: 'Efficiency',
      body: 'Process, automation, and quality. Operational readiness for pilot expansion.',
      initiatives: [
        'Process audit and automation plan',
        'Quality controls and risk integration',
        'Operating cadence with dashboards',
      ],
      state: 'next' as const,
    },
    {
      range: 'Phase 4',
      label: 'Scaling',
      body: 'Infrastructure, partnerships, and growth. Scale economics and repeatable go-to-market.',
      initiatives: [
        'Scaling plan and capacity model',
        'Partner ecosystem governance',
        'Growth operating system',
      ],
      state: 'next' as const,
    },
    {
      range: 'Phase 5',
      label: 'Continuous Improvement',
      body: 'Learning system, foresight, resilience, and long-term roadmap.',
      initiatives: [
        'Knowledge management and playbooks',
        'Trend sensing and scenarios',
        'Quarterly operating review',
      ],
      state: 'later' as const,
    },
  ];

  // IMM capability progression rungs
  const immRungs = [
    { label: 'Foundations', description: 'Initial governance and intake. Decisions exist but evidence is ad hoc.' },
    { label: 'Structured Discovery', description: 'Repeatable problem framing and experimentation with documented gates.' },
    { label: 'Efficiency', description: 'Process discipline, automation, and quality controls in place across initiatives.' },
    { label: 'Scaling', description: 'Portfolio governance, partner ecosystems, and growth systems operating at scale.' },
    { label: 'Continuous Improvement', description: 'Institutional learning, foresight, and resilience as standing capabilities.' },
  ];

  // Example radar snapshot (fictional, clearly labeled)
  const radarDomains = [
    { name: 'Evidence', score: 50 },
    { name: 'Decision logic', score: 65 },
    { name: 'Culture', score: 40 },
    { name: 'Iteration', score: 55 },
    { name: 'Systemic and AI', score: 45 },
  ];
  const radarTarget = [75, 75, 70, 75, 75];

  return (
    <Layout
      title="Innovation Maturity Model Program (IMM-P)®"
      description="IMM is the model. IMM-P® is the program that runs your team through it: five domains, five maturity rungs, and phase-readiness gates backed by evidence."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-imm-program.jpg" />
        <meta property="og:image:alt" content="IMM-P®: the program that operationalizes the Innovation Maturity Model" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <Hero
          title="IMM is the model. IMM-P® is the program."
          subtitle="Measure innovation maturity. Then climb the ladder, gate by gate."
          body={
            'The Innovation Maturity Model (IMM) measures how an organization decides under uncertainty across five domains and five maturity rungs. IMM-P® is the program that runs your team through it, installing the cadence, governance, and evidence discipline that move you up the ladder. Built on MicroCanvas Framework (MCF 2.2).'
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
            to: '#imm-model',
            label: 'See the model',
            dataCta: 'cta.services.imm.hero.see_model',
            ariaLabel: 'Jump to the IMM model section',
          }}
          ctaNote="Built on MicroCanvas® v2.2 plus IMM 2.2."
        />

        {/* IMM-P® as the program form of IMM */}
        <section className="section section--tight" id="imm-program-relationship" aria-labelledby="imm-program-relationship-title">
          <Heading as="h2" id="imm-program-relationship-title">IMM-P® is the program form of IMM</Heading>
          <p className="sectionLead">
            <strong>IMM-P® is the program form of <Link to="#imm-model" data-cta="cta.services.imm.intro.see_model" aria-label="Jump to the IMM model section">IMM</Link>, the Innovation Maturity Model.</strong>{' '}
            IMM defines the capability and measurement framework: five domains, five maturity rungs, and phase-readiness criteria. IMM-P® is the structured engagement that takes a team through it, installing the cadence, governance, and evidence discipline that move you up the ladder.
          </p>
        </section>

        {/* The IMM model: five domains */}
        <section className="section" id="imm-model" aria-labelledby="imm-model-title">
          <Heading as="h2" id="imm-model-title">The model: five IMM domains</Heading>
          <p className="sectionLead">
            IMM scores maturity across five domains. Each domain is measured with evidence; together they describe how an
            organization actually makes innovation decisions under uncertainty.
          </p>
          <Pillars
            pillars={immDomains}
            foundationLabel="Innovation maturity, measured."
            ariaLabel="The five IMM domains on a shared foundation of measured maturity"
          />
        </section>

        {/* Capability progression */}
        <section className="section" id="imm-ladder" aria-labelledby="imm-ladder-title">
          <Heading as="h2" id="imm-ladder-title">The capability progression</Heading>
          <p className="sectionLead">
            IMM defines five rungs of capability. Most teams start somewhere in the middle. IMM-P® meets you wherever you are
            and sequences the climb, one phase-readiness gate at a time.
          </p>
          <MaturityLadder
            rungs={immRungs}
            current={2}
            target={4}
            ariaLabel="IMM capability progression with five rungs, example current rung two and target rung four"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem' }}>
            Example positioning. Your actual current and target rungs are set during the ClarityScan® baseline.
          </p>
        </section>

        {/* Sample maturity snapshot (radar) */}
        <section className="section" id="imm-snapshot" aria-labelledby="imm-snapshot-title">
          <Heading as="h2" id="imm-snapshot-title">What a maturity snapshot looks like</Heading>
          <p className="sectionLead">
            A real IMM-P® engagement opens with a domain-level snapshot. Current scores anchor the baseline; target scores
            define the climb. The example below is fictional and shown only to make the deliverable visible.
          </p>
          <Radar
            domains={radarDomains}
            target={radarTarget}
            caption="Example output, illustrative only. Scores are fictional."
            ariaLabel="Example IMM radar snapshot across five domains with current and target overlays"
          />
        </section>

        {/* The program: IMM-P® phases as a roadmap */}
        <section className="section" id="imm-program" aria-labelledby="imm-program-title">
          <Heading as="h2" id="imm-program-title">The program: IMM-P® phases</Heading>
          <p className="sectionLead">
            IMM-P® runs in five sequential phases. Each phase ends at a readiness gate: evidence is reviewed, a decision memo
            is written, and the next phase opens only when the gate passes.
          </p>
          <Roadmap
            horizons={immpPhases}
            ariaLabel="The five IMM-P® phases from Foundations through Continuous Improvement"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem' }}>
            Method backbone:{' '}
            <Link
              to="/docs/research-resources/microcanvas"
              data-cta="cta.services.imm.method_backbone.microcanvas"
              aria-label="Open MicroCanvas Framework documentation"
            >
              MicroCanvas Framework (MCF 2.2)
            </Link>{' '}
            plus IMM 2.2 (domain scoring, phase readiness, evidence gates).
          </p>
        </section>

        {/* Example gate readout */}
        <section className="section" id="imm-gate" aria-labelledby="imm-gate-title">
          <Heading as="h2" id="imm-gate-title">What a phase-readiness gate looks like</Heading>
          <p className="sectionLead">
            Every IMM-P® phase ends at a gate. The gate is a structured review of evidence quality, decision logic, and
            artifacts. The example below shows a Phase 2 to Phase 3 readout right at the boundary.
          </p>
          <EvidenceMeter
            score={72}
            label="Phase 2 to Phase 3 readiness, example"
            ariaLabel="Example evidence meter showing a phase-readiness score of 72 out of 100"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem', textAlign: 'center' }}>
            Gate opens at 75 percent evidence quality. Below the threshold, the team iterates and re-presents.
          </p>
        </section>

        {/* Tiers reference */}
        <section className="section" id="imm-tiers" aria-labelledby="imm-tiers-title">
          <Heading as="h2" id="imm-tiers-title">Where to start: the ClarityScan® tiers</Heading>
          <p className="sectionLead">
            ClarityScan® is the entry-level diagnostic that feeds an IMM-P® engagement. Pick the tier that matches the depth
            of evidence you need.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-tier-1">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-1">Tier 1: Snapshot</h3>
              <p>A scored baseline across the five IMM domains with a phase-readiness overlay. Best for fast alignment.</p>
              <p>
                <Link
                  to="/services/clarityscan"
                  data-cta="cta.services.imm.tiers.t1"
                  aria-label="See ClarityScan Tier 1 Snapshot"
                >
                  See Tier 1 Snapshot
                </Link>
              </p>
            </article>
            <article className="card" aria-labelledby="imm-tier-2">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-2">Tier 2: Diagnostic</h3>
              <p>A deeper scored diagnostic with interviews, artifact review, and a prioritized action plan.</p>
              <p>
                <Link
                  to="/services/clarityscan/diagnostic"
                  data-cta="cta.services.imm.tiers.t2"
                  aria-label="See ClarityScan Tier 2 Diagnostic"
                >
                  See Tier 2 Diagnostic
                </Link>
              </p>
            </article>
            <article className="card" aria-labelledby="imm-tier-3">
              <Shield className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-3">Tier 3: Audit</h3>
              <p>An evidence-backed audit with documented artifacts for auditability, compliance, and institutional learning.</p>
              <p>
                <Link
                  to="/services/clarityscan/audit"
                  data-cta="cta.services.imm.tiers.t3"
                  aria-label="See ClarityScan Tier 3 Audit"
                >
                  See Tier 3 Audit
                </Link>
              </p>
            </article>
          </div>
        </section>

        {/* Who delivers */}
        <section className="section" id="imm-delivers" aria-labelledby="imm-delivers-title">
          <Heading as="h2" id="imm-delivers-title">Who delivers IMM-P®</Heading>
          <p className="sectionLead">
            An IMM-P® engagement is led by Doulab principals with deep experience in innovation governance, evidence
            discipline, and operating cadence. Delivery is remote-first, with on-site kickoffs or checkpoints when they
            add value. Your core team provides the cross-functional capacity (product or operations, customer or
            citizen experience, technology or data) and visible decision owners.
          </p>
        </section>

        {/* Proof strip */}
        <section className="section section--tight" id="imm-proof" aria-labelledby="imm-proof-title">
          <Heading as="h2" id="imm-proof-title">Trusted by teams building public and private innovation</Heading>
          <div className="proofStrip" role="list" aria-label="Selected organizations">
            {[
              { key: 'afpsiembra', alt: 'AFP Siembra logo' },
              { key: 'alpha', alt: 'Alpha logo' },
              { key: 'cven-logo-h-color', alt: 'C-Ven Technologies' },
              { key: 'fundapec', alt: 'Fundapec logo' },
              { key: 'mentorpill', alt: 'MentorPill logo' },
              { key: 'ogtic_horizontal_fullcolor', alt: 'OGTIC logo' },
              { key: 'pharmakun', alt: 'Pharmakun logo' },
              { key: 'su', alt: 'SU logo' },
            ].map(({ key, alt }) => (
              <picture key={key} className="proofLogo" role="listitem">
                <source srcSet={`/img/logos/optimized/${key}.avif`} type="image/avif" />
                <source srcSet={`/img/logos/optimized/${key}.webp`} type="image/webp" />
                <img src={`/img/logos/optimized/${key}.png`} alt={alt} loading="lazy" width="160" height="60" />
              </picture>
            ))}
          </div>
        </section>

        {/* Related case studies */}
        <section className="section" id="imm-related" aria-labelledby="imm-related-title">
          <Heading as="h2" id="imm-related-title">
            Related case studies
          </Heading>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* FAQ */}
        <section className="section" id="imm-faq" aria-labelledby="imm-faq-title">
          <Heading as="h2" id="imm-faq-title">IMM-P®: Frequently asked questions</Heading>

          <div className={`faqList ${'pages-b4-p2__faqListGrid'} immFaqGrid`}>
            <details className="card">
              <summary>
                <strong>What is the difference between IMM and IMM-P®?</strong>
              </summary>
              <p>
                IMM is the model: five domains, five maturity rungs, and phase-readiness gates. IMM-P® is the program that
                runs an organization through the model, installing the cadence, governance, and evidence discipline needed
                to climb the ladder.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>How long does the program take?</strong>
              </summary>
              <p>
                Most teams start with a 12-week core track focused on Foundations plus Structured Discovery and Validation.
                Larger rollouts extend to 24+ weeks across all five phases.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>Is IMM 2.2 domain-based or phase-based?</strong>
              </summary>
              <p>
                Both. Scoring is domain-based across the five IMM domains. The same instrument produces phase-readiness
                overlays for the five IMM-P® phases.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>Where does ClarityScan® fit?</strong>
              </summary>
              <p>
                ClarityScan® is the entry-level diagnostic that feeds an IMM-P® engagement. Tier 1 Snapshot, Tier 2
                Diagnostic, or Tier 3 Audit all establish the baseline IMM-P® builds on. See{' '}
                <Link to="/services/clarityscan" data-cta="cta.services.imm.faq.clarityscan" aria-label="Open ClarityScan service page">
                  ClarityScan®
                </Link>
                .
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>Do you require evidence for scoring?</strong>
              </summary>
              <p>
                Tier 1 and Tier 2 can run as scored assessments. Tier 3 requires evidence documentation. IMM-P® phase gates
                open at 75 percent evidence quality.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>Can the program run remotely?</strong>
              </summary>
              <p>Yes. IMM-P® is remote-first by design, with optional on-site kickoffs or checkpoints.</p>
            </details>

            <details className="card">
              <summary>
                <strong>What do we receive at the end?</strong>
              </summary>
              <p>
                Domain scores and phase-readiness overlays, evidence packs and decision memos at each gate, a pilot plan or
                shipped pilot, a working governance cadence, and reusable playbooks aligned to MCF 2.2.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>How is pricing structured?</strong>
              </summary>
              <p>
                Scope-based. We shape a right-sized plan during intake.{' '}
                <Link
                  to="https://booking.doulab.net/discovery"
                  data-cta="cta.services.imm.faq.pricing.discovery"
                  aria-label="Talk to us, book a discovery call to discuss IMM-P pricing"
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
              <p>
                Privacy-first analytics only. You own your data. We operate under NDAs and follow your security and
                compliance requirements.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="imm-cta"
          ariaLabelledbyId="imm-cta-title"
          title="Ready to scope an IMM-P® engagement?"
          body="Book a discovery call to scope your IMM-P® engagement, or start with a ClarityScan® Tier 1 Snapshot to establish your baseline."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Book a discovery call',
            dataCta: 'cta.services.imm.final.discovery',
            ariaLabel: 'Book a discovery call to scope an IMM-P engagement',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Start with ClarityScan® Tier 1',
            dataCta: 'cta.services.imm.final.book_clarityscan_t1',
            newTab: true,
            ariaLabel: 'Book a ClarityScan Tier 1 Snapshot',
          }}
          ctaNote="Built on MicroCanvas® v2.2 plus IMM 2.2 (domain scoring, phase readiness, evidence gates)."
        />
      </main>
    </Layout>
  );
}
