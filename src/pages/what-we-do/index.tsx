import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Hero from '../../components/Hero';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Search from 'lucide-react/dist/esm/icons/search';
import AlignJustify from 'lucide-react/dist/esm/icons/align-justify';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';

export default function WhatWeDo(): ReactNode {
  return (
    <Layout
      title="What we do — Programs, Diagnostics & Foresight | Doulab"
      description="Programs, diagnostics, and foresight to make innovation repeatable with MicroCanvas® 2.1 and IMM®. "
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/what-we-do" />
      </Head>

      <main>
        <Hero
          title="What we do — Programs, Diagnostics & Foresight | Doulab"
          subtitle="Innovation architecture, diagnostics, and foresight — built to make delivery repeatable."
          body={"We install the culture, process, and cadence for innovation to scale — using MicroCanvas® 2.1 and the Innovation Maturity Model (IMM)."}
          imageBase="/img/services-hero"
          imageAlt="What we do"
          width={600}
          height={400}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.whatwedo.hero.clarityscan' }}
          secondaryCta={{ to: '/case-studies', label: 'See case studies', dataCta: 'cta.whatwedo.hero.cases' }}
          ctaNote="Get your baseline in 15–20 minutes."
          id="whatwedo-hero"
          ariaLabelledbyId="whatwedo-hero-title"
          eager
        />
        {/* Hero (shared design language) */}
        

        {/* Products & Programs (balanced content: 1 intro line + 2 bullets + CTA) */}
        <section className="section" id="programs" aria-labelledby="programs-title">
          <h2 id="programs-title">Products & Programs</h2>
          <p className="sectionLead">Three ways we reduce risk and accelerate outcomes.</p>

          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-title">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-title">IMM Sprints (12+12 weeks)</h3>
              <p>Discovery &amp; Validation → Efficiency &amp; Scale, with explicit gates and KPIs.</p>
              <ul>
                <li><strong>Gate 1</strong> — Go/No-Go after Discovery</li>
                <li><strong>Gate 2</strong> — Go/No-Go before MVP/Scale</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/innovation-maturity" data-cta="cta.whatwedo.programs.imm">Explore IMM →</Link>
              </div>
            </article>

            <article className="card" aria-labelledby="diagnostics-title">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="diagnostics-title">Diagnostics &amp; Workshops</h3>
              <p>Fast assessments, strategy sessions, and decision-driving workshops.</p>
              <ul>
                <li>Innovation maturity baseline (MCF 2.1 + IMM)</li>
                <li>Strategy &amp; OKR alignment sprints</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/diagnostics" data-cta="cta.whatwedo.programs.diagnostics">Explore diagnostics →</Link>
              </div>
            </article>

            <article className="card" aria-labelledby="vigia-title">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="vigia-title">Vigía Futura</h3>
              <p>Foresight observatory and indices for trend radar, risk, and opportunity framing.</p>
              <ul>
                <li>Foresight maturity &amp; literacy</li>
                <li>Briefings and early-signal scans</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/vigia-futura" data-cta="cta.whatwedo.programs.vigia">Discover Vigía Futura →</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Proof / Numbers (same pattern as homepage) */}
        <section className="section" id="numbers" aria-labelledby="numbers-title">
          <h2 id="numbers-title">Proof / Numbers</h2>
          <div className="cardGrid">
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>12+12 weeks</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>Structured sprint cadence</strong></p>
              <p className="microcopy">Discovery &amp; Validation → Efficiency &amp; Scale</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>7</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>innovation labs co-created</strong></p>
              <p className="microcopy">Public sector capacity building (2024)</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>2–4×/week</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>sessions for 12 months</strong></p>
              <p className="microcopy">Scaled capability build-out</p>
            </div>
          </div>
        </section>

        {/* How we work (process rail with hover parity) */}
        <section className="section" id="process" aria-labelledby="process-title">
          <h2 id="process-title">How we work</h2>
          <ul className="processRail" role="list">
            <li className="processStep" role="listitem">
              <Search className="stepIcon" aria-hidden="true" /><h4>Diagnose</h4>
              <p>Baseline maturity, risks, and constraints with MCF 2.1 + IMM.</p>
            </li>
            <li className="processStep" role="listitem">
              <AlignJustify className="stepIcon" aria-hidden="true" /><h4>Align</h4>
              <p>Define outcomes, OKRs, and decision gates; align stakeholders.</p>
            </li>
            <li className="processStep" role="listitem">
              <Rocket className="stepIcon" aria-hidden="true" /><h4>Pilot</h4>
              <p>Run focused experiments to de-risk value, viability, and delivery.</p>
            </li>
            <li className="processStep" role="listitem">
              <TrendingUp className="stepIcon" aria-hidden="true" /><h4>Scale</h4>
              <p>Install cadence, metrics, and governance for repeatable delivery.</p>
            </li>
          </ul>
        </section>

        {/* Next steps — EXACT CTA pattern from homepage */}
        <section className="section" id="next-steps" aria-labelledby="next-title">
          <div className="finalCta">
            <h2 id="next-title">Next steps</h2>
            <p>Book a short call → run a light diagnostic → receive a 12+12 week plan with clear gates and outcomes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link className="buttonPrimary" to="/contact" data-cta="cta.whatwedo.next.contact">Start the conversation</Link>
              <Link className="buttonSecondary" to="/insights" data-cta="cta.whatwedo.next.insights">Explore insights</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
