import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Hero from '../../components/Hero';

export default function CaseStudies(): ReactNode {
  return (
    <Layout
      title="Case Studies — Outcomes & Repeatable Delivery | Doulab"
      description="Selected projects and measurable outcomes from Doulab, shown with clear checkpoints, evidence packs, and KPIs."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/hero-cases.jpg" />
        <meta property="og:image:alt" content="Case studies hero — abstract indigo gradient with Doulab brand accents." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        {/* Two-column standardized hero with CTAs */}
        <Hero
          title="Case Studies"
          subtitle="Real projects. Clear checkpoints. Measurable results."
          body="Each case shows context, what we did, and outcomes—with the artifacts and cadence that made it repeatable."
          imageBase="/img/hero-cases"
          imageAlt="Case studies hero — abstract indigo gradient with Doulab brand accents."
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Start with ClarityScan®',
            dataCta: 'cta.cases.hero.clarityscan',
            ariaLabel: 'Start with ClarityScan - quick 15-20 minute baseline',
          }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15-20 minutes."
        />

        {/* How we measure (teaser) */}
        <section className="section section--tight" id="measure-teaser" aria-labelledby="measure-teaser-title">
          <h2 id="measure-teaser-title" className="sr-only">How we measure (teaser)</h2>
          <ul className="processRail" aria-describedby="measure-teaser-note">
            <li className="processStep">
              <CheckCircle className="stepIcon" aria-hidden="true" />
              <h4>Clear checkpoints</h4>
              <p>Gate reviews with owners and criteria.</p>
            </li>
            <li className="processStep">
              <CheckCircle className="stepIcon" aria-hidden="true" />
              <h4>Evidence packs</h4>
              <p>Decisions traced to artifacts.</p>
            </li>
            <li className="processStep">
              <LineChart className="stepIcon" aria-hidden="true" />
              <h4>Measurable KPIs</h4>
              <p>Learning and outcomes tracked.</p>
            </li>
          </ul>
          <p id="measure-teaser-note" className="microcopy">See details below in How we measure.</p>
        </section>

        {/* Featured projects — image cards linking to internal pages */}
        <section className="section" id="featured" aria-labelledby="featured-title">
          <h2 id="featured-title">Featured projects</h2>
          <p className="sectionLead">A few examples showing how checkpoints, evidence, and cadence drive results.</p>

          <div className="cardGrid">
            {/* AFP Siembra */}
            <article className="card" aria-labelledby="cs-siembra-title">
              <picture>
                <source srcSet="/img/afp-siembra-card.avif" type="image/avif" />
                <source srcSet="/img/afp-siembra-card.webp" type="image/webp" />
                <img
                  src="/img/afp-siembra-card.jpg"
                  alt="AFP Siembra — Alcanza product and SILAB innovation lab."
                  width={1200}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                />
              </picture>
              <h3 id="cs-siembra-title">
                <Link to="/case-studies/afp-siembra" data-cta="cta.cases.card.afp_siembra.title" aria-label="Read AFP Siembra case study">
                  AFP Siembra — Alcanza &amp; SILAB
                </Link>
              </h3>
              <p className="microcopy"><strong>Sector:</strong> Financial services</p>
              <p className="microcopy"><strong>Capabilities:</strong> Innovation lab; Digital product; Gate reviews</p>
              <p>From strategy to repeatable delivery: digital savings product and a working innovation lab.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/case-studies/afp-siembra"
                  data-cta="cta.cases.card.afp_siembra"
                  aria-label="Read AFP Siembra case study"
                >
                  Read the case →
                </Link>
              </div>
            </article>

            {/* FUNDAPEC */}
            <article className="card" aria-labelledby="cs-fundapec-title">
              <picture>
                <source srcSet="/img/fundapec-card.avif" type="image/avif" />
                <source srcSet="/img/fundapec-card.webp" type="image/webp" />
                <img
                  src="/img/fundapec-card.jpg"
                  alt="Comunidad FUNDAPEC — alumni platform and engagement."
                  width={1200}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                />
              </picture>
              <h3 id="cs-fundapec-title">
                <Link to="/case-studies/fundapec" data-cta="cta.cases.card.fundapec.title" aria-label="Read FUNDAPEC case study">
                  FUNDAPEC — Alumni Platform
                </Link>
              </h3>
              <p className="microcopy"><strong>Sector:</strong> Education &amp; finance</p>
              <p className="microcopy"><strong>Capabilities:</strong> Alumni platform; Engagement journeys; Evidence packs</p>
              <p>Alumni network platform to deepen engagement, unlock value, and accelerate delivery.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/case-studies/fundapec"
                  data-cta="cta.cases.card.fundapec"
                  aria-label="Read FUNDAPEC case study"
                >
                  Read the case →
                </Link>
              </div>
            </article>

            {/* OGTIC / RedLab */}
            <article className="card" aria-labelledby="cs-ogtic-title">
              <picture>
                <source srcSet="/img/ogtic-redlab-card.avif" type="image/avif" />
                <source srcSet="/img/ogtic-redlab-card.webp" type="image/webp" />
                <img
                  src="/img/ogtic-redlab-card.jpg"
                  alt="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions."
                  width={1200}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                />
              </picture>
              <h3 id="cs-ogtic-title">
                <Link to="/case-studies/ogtic-redlab" data-cta="cta.cases.card.ogtic_redlab.title" aria-label="Read OGTIC RedLab case study">
                  OGTIC — RedLab &amp; Capacity Building
                </Link>
              </h3>
              <p className="microcopy"><strong>Sector:</strong> Public sector</p>
              <p className="microcopy"><strong>Capabilities:</strong> Innovation network; Programs; Gate reviews</p>
              <p>Scaled public-sector innovation: aligned labs, shared methods, and accelerated delivery.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/case-studies/ogtic-redlab"
                  data-cta="cta.cases.card.ogtic_redlab"
                  aria-label="Read OGTIC RedLab case study"
                >
                  Read the case →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* How we measure */}
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

        {/* Final CTA — standardized */}
        <section className="section" id="cta" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Ready to make innovation repeatable?</h2>
            <p>Start small — get your baseline in 15-20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link className="buttonPrimary" to="/services/clarityscan" data-cta="cta.cases.final.clarityscan">
                Start with ClarityScan®
              </Link>
              <Link className="buttonSecondary" to="/contact" data-cta="cta.cases.final.book_call">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
