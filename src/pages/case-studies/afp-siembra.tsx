import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseAfpSiembra(): ReactNode {
  return (
    <Layout
      title="Case Study | AFP Siembra: Alcanza & SILAB"
      description="From strategy to repeatable delivery: a digital savings product and an innovation lab co-created."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/afp-siembra" />
        <meta property="og:image" content="https://doulab.net/img/afp-siembra-card.jpg" />
        <meta property="og:image:alt" content="AFP Siembra — Alcanza product and SILAB innovation lab." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">All case studies</Link>
        </nav>

        <Hero
          title="AFP Siembra: Alcanza and SILAB"
          subtitle="From strategy to repeatable delivery. We helped launch a digital savings product and set up an innovation lab."
          body={"AFP Siembra is a pension fund leader in the Dominican Republic. " +
            "Alcanza is a 100% digital savings solution designed for Dominicans at home and abroad."}
          imageBase="/img/afp-siembra-card"
          imageAlt="AFP Siembra — Alcanza product and SILAB innovation lab"
          width={1200}
          height={720}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15-20 minutes."
          id="afp-siembra-hero"
          ariaLabelledbyId="afp-siembra-hero-title"
          eager
        />

        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            AFP Siembra is a specialized pension fund administrator (AFP) and the first in the Dominican Republic
            authorized by the Superintendencia de Pensiones (SIPEN). The team set out to launch <strong><a href="https://alcanza.com.do" target="_blank" rel="noopener noreferrer">Alcanza</a></strong>,
            a <strong>digital savings solution</strong> for Dominicans—salaried and independent, living in the country and abroad—who need a safe,
            flexible way to save for retirement, housing, education, and other goals.
          </p>
          <p>
            The challenge: low national savings rates, high trust requirements, and a <strong>regulated, security-first</strong>
            environment. In parallel, leadership wanted a <strong>repeatable innovation engine</strong> inside the
            organization—what became <strong>SILAB</strong>.
          </p>
        </section>

        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What We Did</h2>
          <ul>
            <li>
              <strong>Baseline & Direction:</strong> Ran an initial assessment (ClarityScan) to determine the current state of the innovation process,
              surface risks, align stakeholders, and sequence the workload. Used MicroCanvas to frame problems, understand the customer, define value
              propositions, create objectives and key results for the innovation project, and set the metrics to measure progress. We also worked with
              the innovation team to identify issues that were slowing the development of innovation projects and to unblock them.
            </li>
            <li>
              <strong>Evidence First:</strong> Designed multiple A/Bs in interview settings (from internal employees to
              external focus groups) and concierge trials to test customer profiles, onboarding friction, benefits, cost
              sensitivity, and both problem/solution and market/product fit.
            </li>
            <li>
              <strong>Product Scope:</strong> Defined the MVP for Alcanza (100% digital app at launch). Key features:
              personalized goals, close guidance, goal rewards, strong security, retirement flexibility, and no fees or
              minimum balances.
            </li>
            <li>
              <strong>Delivery System:</strong> Established a cadence, decision gates, and a lab playbook. Co-authored
              SILAB’s charter (mandate, intake, funding gates) and governance model to make delivery repeatable.
            </li>
            <li>
              <strong>Innovation Lab & Launch:</strong> Starting in October 2023, we conceptualized the SIEMBRA Innovation Lab, leveraging learnings and outcomes from the Alcanza project to design an internal
              innovation capability. In parallel, we helped conceptualize and produce the lab’s public launch during the inaugural AFP Siembra FutureScapes Innovation Summit—
              a two-day event with more than 300 participants.
            </li>
            <li>
              <strong>Security & Compliance:</strong> Worked within the Dominican financial sector’s cybersecurity
              regulations; defined security requirements and testing as first-class work.
            </li>
          </ul>

          <h3>Timeline</h3>
          <ul>
            <li><strong>Kick-off:</strong> January 2021</li>
            <li><strong>Discovery & Experiments:</strong> 2021–2022</li>
            <li><strong>Build & Hardening:</strong> 2023–2024</li>
            <li><strong>Full production launch:</strong> November 2024 (digital app)</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>Launched the <strong>Alcanza</strong> digital savings app (100% digital onboarding).</li>
            <li>Established <strong>SILAB</strong> governance and a working cadence with gate reviews.</li>
            <li>Evidence packs captured decisions and improved stakeholder alignment.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15-20 minutes.</p>
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
