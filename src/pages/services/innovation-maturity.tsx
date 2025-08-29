// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Layers, Target, Rocket, ClipboardCheck, Users, Gauge } from 'lucide-react';

export default function InnovationMaturityProgram(): ReactNode {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Innovation Maturity Program (IMM®)',
        serviceType: 'Innovation capability acceleration',
        provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
        url: 'https://doulab.net/services/innovation-maturity',
        description:
            'A structured, gated program that installs repeatable innovation capability using the MicroCanvas® Framework (MCF v2.1) and IMM® governance.',
        areaServed: 'Global',
    };

    return (
        <Layout
            title="Innovation Maturity Program (IMM®) — Make innovation repeatable | Doulab"
            description="A structured, gated program to assess, strengthen, and accelerate innovation capability using the MicroCanvas® Framework (MCF v2.1)."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
                {/* Preload LCP image; browser still prefers AVIF/WEBP if available */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/imm-program.png"
                    imageSrcSet="/img/imm-program.avif 1x, /img/imm-program.webp 1x, /img/imm-program.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="imm-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="imm-hero-title" className="heroTitle">Innovation Maturity Program (IMM®)</h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>Assess. Strengthen. Accelerate.</p>
                            <p className="heroText">
                                IMM® is Doulab’s <strong>structured program</strong> to install <strong>repeatable innovation</strong>:
                                we baseline capability, run <strong>gated delivery</strong> with the <strong>MicroCanvas® Framework (MCF v2.1)</strong>,
                                and build the <strong>governance &amp; metrics</strong> that turn strategy into outcomes.
                            </p>

                            <div className="heroCtas">
                                <Link
                                    to="/services/clarityscan"
                                    className="buttonPrimary"
                                    data-cta="cta.services.imm.hero.clarityscan"
                                >
                                    Start with ClarityScan®
                                </Link>
                                <Link
                                    to="/contact"
                                    className="buttonSecondary"
                                    data-cta="cta.services.imm.hero.contact"
                                >
                                    Talk to us
                                </Link>
                            </div>

                            <p className="heroText" style={{ marginTop: '0.75rem', opacity: 0.9 }}>
                                <em>Trusted by teams at OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.</em>
                            </p>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/imm-program.avif" type="image/avif" />
                                <source srcSet="/img/imm-program.webp" type="image/webp" />
                                <img
                                    src="/img/imm-program.png"
                                    alt="IMM® program illustration"
                                    className="heroImage"
                                    loading="eager"
                                    fetchPriority="high"
                                    width="600"
                                    height="400"
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* What is IMM */}
                <section className="section" id="imm-what" aria-labelledby="imm-what-title">
                    <h2 id="imm-what-title">What is the IMM® Program?</h2>
                    <p className="sectionLead">
                        A <strong>gated journey</strong> that combines diagnostics, coaching, and execution support so innovation becomes
                        <em> repeatable</em>, measurable, and aligned to strategy.
                    </p>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="imm-mcf">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-mcf">MCF-Powered</h3>
                            <p>Built on MicroCanvas® v2.1 to guide discovery, design, and delivery end-to-end.</p>
                            <ul>
                                <li>Reusable canvases &amp; templates</li>
                                <li>Evidence-first decision-making</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-evidence">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-evidence">Evidence-Based</h3>
                            <p>Decisions grounded in diagnostics, capability baselines, and stage-appropriate KPIs.</p>
                            <ul>
                                <li>ClarityScan® baseline</li>
                                <li>Gate-ready evidence packs</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-cocreate">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-cocreate">Co-Created</h3>
                            <p>We work alongside your team—coaching, mentoring, and transferring capability.</p>
                            <ul>
                                <li>Operating cadence &amp; rituals</li>
                                <li>Ownership &amp; skills uplift</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Phases & Gates (IMM cadence) */}
                <section className="section" id="imm-how" aria-labelledby="imm-how-title">
                    <h2 id="imm-how-title">Phases &amp; Gates</h2>
                    <p className="sectionLead">
                        A practical cadence across <strong>12+12 weeks</strong>. Each phase delivers <strong>artifacts, decisions, and momentum</strong>.
                    </p>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="imm-phase0">
                            <span className="badge">Phase 0</span>
                            <h3 id="imm-phase0">Strategic Alignment</h3>
                            <p>Clarify goals, OKRs/KPIs, roles, and constraints. Establish definitions and outcomes.</p>
                            <ul>
                                <li>Outputs: OKR draft, owner map</li>
                                <li>Gate 0: Kickoff readiness</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-phase1">
                            <span className="badge">Phase 1</span>
                            <h3 id="imm-phase1">Discovery</h3>
                            <p>Customer &amp; problem framing; hypotheses; early evidence.</p>
                            <ul>
                                <li>Outputs: Discovery pack</li>
                                <li><strong>Gate 1:</strong> Go/No-Go</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-phase2">
                            <span className="badge">Phase 2</span>
                            <h3 id="imm-phase2">Validation</h3>
                            <p>Concept shaping, test design, MVP scope &amp; KPIs.</p>
                            <ul>
                                <li>Outputs: MVP plan + KPIs</li>
                                <li><strong>Gate 2:</strong> MVP Go</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-phase3">
                            <span className="badge">Phase 3</span>
                            <h3 id="imm-phase3">Efficiency</h3>
                            <p>Operationalize, reduce cycle time, harden processes &amp; telemetry.</p>
                            <ul>
                                <li>Outputs: runbooks, dashboards</li>
                                <li><strong>Gate 3:</strong> Rollout</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-phase4">
                            <span className="badge">Phase 4</span>
                            <h3 id="imm-phase4">Scale</h3>
                            <p>Scale with governance, resources, and continuous measurement.</p>
                            <ul>
                                <li>Outputs: scale plan + KPIs</li>
                                <li><strong>Gate 4:</strong> Scale</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Who it's for */}
                <section className="section" id="imm-who" aria-labelledby="imm-who-title">
                    <h2 id="imm-who-title">Who It’s For</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="imm-startups">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-startups">Startups</h3>
                            <p>Early growth or fundraising; need clarity, focus, and repeatable delivery.</p>
                            <ul>
                                <li>Faster gate decisions</li>
                                <li>Lower execution risk</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-public">
                            <ClipboardCheck className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-public">Public Institutions</h3>
                            <p>Digital transformation with transparent governance and capability building.</p>
                            <ul>
                                <li>Audit-ready evidence</li>
                                <li>Training &amp; playbooks</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-leaders">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-leaders">Innovation Leaders</h3>
                            <p>Operating models, metrics, and coaching to sustain momentum.</p>
                            <ul>
                                <li>Clear cadence &amp; rituals</li>
                                <li>Outcome tracking</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Outcomes */}
                <section className="section" id="imm-outcomes" aria-labelledby="imm-outcomes-title">
                    <h2 id="imm-outcomes-title">What You Can Expect</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="imm-momentum">
                            <Rocket className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-momentum">Momentum</h3>
                            <p>Decisions made faster; prototypes shipped sooner; learning captured continuously.</p>
                            <ul>
                                <li>Gate-ready summaries</li>
                                <li>Shorter cycle times</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-clarity">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-clarity">Clarity</h3>
                            <p>Baselines &amp; KPIs that translate strategy into everyday action.</p>
                            <ul>
                                <li>Capability baseline</li>
                                <li>KPI dashboards</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="imm-capability">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3 id="imm-capability">Capability</h3>
                            <p>Teams equipped with methods, templates, and governance to scale.</p>
                            <ul>
                                <li>Reusable playbooks</li>
                                <li>Operating model</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" id="imm-cta" aria-labelledby="imm-cta-title">
                    <div className="finalCta">
                        <h2 id="imm-cta-title">Ready to accelerate your innovation maturity?</h2>
                        <p>Kick off with a quick diagnostic or talk with our team about running IMM® in your organization.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <a
                                className="buttonPrimary"
                                href="https://calendly.com/lasantiago/clarityscan"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cta="cta.services.imm.final.clarityscan"
                            >
                                Start with ClarityScan® →
                            </a>
                            <Link
                                className="buttonSecondary"
                                to="/contact"
                                data-cta="cta.services.imm.final.contact"
                            >
                                Book a discovery call →
                            </Link>
                        </div>
                        <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
                            <em>We use privacy-first analytics only. No Google tags or third-party trackers.</em>
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
