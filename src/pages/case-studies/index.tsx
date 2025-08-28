import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  PiggyBank, GraduationCap, Building2,
  CheckCircle, LineChart
} from 'lucide-react';

export default function CaseStudies(): ReactNode {
  return (
    <Layout
      title="Case Studies — Outcomes & Repeatable Delivery | Doulab"
      description="Selected projects and measurable outcomes from Doulab, tied to IMM gates and MCF 2.1 processes."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies" />
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" id="hero" aria-labelledby="cases-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 800px' }}>
              <Heading as="h1" id="cases-hero-title" className="heroTitle">
                Case Studies
              </Heading>
              <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                Outcome-oriented snapshots tied to IMM gates and KPIs.
              </p>
              <p className="heroText">
                Each engagement references MicroCanvas® 2.1 processes for traceability and repeatable delivery.
              </p>
              <div className="heroCtas">
                <Link className="buttonPrimary" to="/contact" data-cta="cta.cases.hero.contact">
                  Start a project
                </Link>
                <Link className="buttonSecondary" to="/insights" data-cta="cta.cases.hero.insights">
                  Read insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured projects — homogeneous cards */}
        <section className="section" id="featured" aria-labelledby="featured-title">
          <h2 id="featured-title">Featured projects</h2>
          <p className="sectionLead">A few examples showing how gates, evidence, and cadence drive results.</p>

          <div className="cardGrid">
            {/* AFP Siembra */}
            <article className="card" aria-labelledby="cs-siembra-title">
              <PiggyBank className="cardIcon" aria-hidden="true" />
              <h3 id="cs-siembra-title">AFP Siembra — Alcanza &amp; SILAB</h3>
              <p>From strategy to repeatable delivery: digital savings product plus an operating innovation lab.</p>
              <ul>
                <li><strong>Outcomes:</strong> product launched; lab governance &amp; cadence installed</li>
                <li><strong>Gates:</strong> Discovery → Validation with KPIs and decision owners</li>
              </ul>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://afpsiembra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.cases.card.siembra"
                >
                  Visit afpsiembra.com →
                </Link>
              </div>
            </article>

            {/* FUNDAPEC */}
            <article className="card" aria-labelledby="cs-fundapec-title">
              <GraduationCap className="cardIcon" aria-hidden="true" />
              <h3 id="cs-fundapec-title">FUNDAPEC — Comunidad FUNDAPEC</h3>
              <p>Alumni platform co-developed to deepen engagement and unlock new value streams.</p>
              <ul>
                <li><strong>Outcomes:</strong> platform launched; community programs activated</li>
                <li><strong>Gates:</strong> Validation → MVP rollout with usage KPIs</li>
              </ul>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://comunidad.fundapec.edu.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.cases.card.fundapec"
                >
                  Visit comunidad.fundapec.edu.do →
                </Link>
              </div>
            </article>

            {/* OGTIC / RedLab */}
            <article className="card" aria-labelledby="cs-ogtic-title">
              <Building2 className="cardIcon" aria-hidden="true" />
              <h3 id="cs-ogtic-title">OGTIC — RedLab &amp; Capacity Building</h3>
              <p>Scaled public-sector innovation: aligned labs, shared methods, and accelerated delivery.</p>
              <ul>
                <li><strong>Outcomes:</strong> 7 labs co-created; capability uplift across institutions</li>
                <li><strong>Gates:</strong> Program checkpoints; evidence-based go/no-go per pilot</li>
              </ul>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://ogtic.gob.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.cases.card.ogtic"
                >
                  Visit ogtic.gob.do →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* How we measure — keep the same card pattern */}
        <section className="section" id="method" aria-labelledby="method-title">
          <h2 id="method-title">How we measure</h2>
          <div className="cardGrid">
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>Evidence packs</h3>
              <p>Auditable trace from hypothesis to decision, captured as artifacts.</p>
              <ul>
                <li>Research notes &amp; interview summaries</li>
                <li>Decision memos with sources</li>
              </ul>
            </div>
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>Gate reviews</h3>
              <p>Predefined criteria &amp; owners ensure clarity at every checkpoint.</p>
              <ul>
                <li>Go/No-Go based on evidence</li>
                <li>Accountable owners &amp; cadence</li>
              </ul>
            </div>
            <div className="card">
              <LineChart className="cardIcon" aria-hidden="true" />
              <h3>KPI dashboards</h3>
              <p>Stage-appropriate metrics track learning and delivery velocity.</p>
              <ul>
                <li>Adoption, NPS, cycle time</li>
                <li>CAC/LTV &amp; viability signals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA — shared pattern */}
        <section className="section" id="cta" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Have a challenge in mind?</h2>
            <p>We’ll scope a 12+12 week plan with clear gates and success metrics.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link className="buttonPrimary" to="/contact" data-cta="cta.cases.final.contact">
                Talk to us
              </Link>
              <Link className="buttonSecondary" to="/what-we-do" data-cta="cta.cases.final.whatwedo">
                What we do
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
