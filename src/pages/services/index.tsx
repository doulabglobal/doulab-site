// src/pages/services/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Search, Lightbulb, Layers, Users, Radar } from 'lucide-react';

export default function ServicesPage(): ReactNode {
    return (
        <Layout
            title="Services — Structured innovation, diagnostics, workshops & foresight | Doulab"
            description="Programs, workshops, diagnostics, and foresight to make innovation repeatable. Baselines, gated decisions, and measurable outcomes — privacy-first."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services" />
                {/* Preload LCP hero image (PNG fallback). Browser will choose best available source. */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/services-hero.png"
                    imageSrcSet="/img/services-hero.avif 1x, /img/services-hero.webp 1x, /img/services-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="services-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="services-hero-title" className="heroTitle">Our Services</h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                Programs, workshops, diagnostics, and foresight — turning strategy into sustained results.
                            </p>
                            <p className="heroText">
                                Whether you’re mapping maturity, aligning teams, or preparing to scale, we meet you where you are and
                                co-create the path to outcomes.
                            </p>

                            <div className="heroCtas">
                                <Link to="/contact" className="buttonPrimary" data-cta="cta.services.hero.contact" aria-label="Book a discovery call">
                                    Book a discovery call
                                </Link>
                                <Link to="/about#service-pillars" className="buttonSecondary" data-cta="cta.services.hero.pillars" aria-label="See our service pillars">
                                    See our service pillars
                                </Link>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/services-hero.avif" type="image/avif" />
                                <source srcSet="/img/services-hero.webp" type="image/webp" />
                                <img
                                    src="/img/services-hero.png"
                                    alt="Our Services"
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

                {/* Trusted line */}
                <section className="section" aria-label="Trusted by">
                    <p className="sectionLead" style={{ textAlign: 'center' }}>
                        Trusted by organizations like OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="section" aria-labelledby="services-grid-title">
                    <h2 id="services-grid-title">What we offer</h2>
                    <div className="cardGrid">
                        {/* Diagnostics */}
                        <article className="card" aria-labelledby="svc-diagnostics">
                            <Search className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-diagnostics">ClarityScan®: Know where you stand</h3>
                            <p>A rapid, evidence-based scan to baseline innovation/foresight maturity and surface gaps.</p>
                            <ul>
                                <li>Baseline maturity map (MCF 2.1 + IMM®)</li>
                                <li>Gap analysis with prioritized next steps</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/clarityscan" className="cardCta" data-cta="cta.services.card.diagnostics" aria-label="Explore ClarityScan">
                                    Run a diagnostic →
                                </Link>
                            </div>
                        </article>

                        {/* Workshops */}
                        <article className="card" aria-labelledby="svc-workshops">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-workshops">Workshops: Align &amp; activate</h3>
                            <p>Focused sessions that compress weeks of meetings into decisions and a clear plan.</p>
                            <ul>
                                <li>Strategy &amp; OKR alignment sprint</li>
                                <li>Decision &amp; roadmap facilitation</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.services.card.workshops" aria-label="Explore custom workshops">
                                    Start a workshop sprint →
                                </Link>
                            </div>
                        </article>

                        {/* Programs */}
                        <article className="card" aria-labelledby="svc-programs">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-programs">Programs: Build innovation capacity</h3>
                            <p>Multi-phase IMM® journeys to embed governance, process, and skills.</p>
                            <ul>
                                <li>12+12 weeks: Discovery/Validation → Efficiency/Scale</li>
                                <li>Gated decisions, KPIs, and cadence</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.services.card.programs" aria-label="Explore innovation maturity program">
                                    Join the IMM Program →
                                </Link>
                            </div>
                        </article>

                        {/* Coaching */}
                        <article className="card" aria-labelledby="svc-coaching">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-coaching">Coaching &amp; mentoring: Grow with guidance</h3>
                            <p>Targeted 1:1 and group support that removes blockers and sustains momentum.</p>
                            <ul>
                                <li>Decision support &amp; feedback loops</li>
                                <li>Rituals for delivery cadence</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.services.card.coaching" aria-label="Explore coaching and mentoring">
                                    View coaching options →
                                </Link>
                            </div>
                        </article>

                        {/* Future Studies */}
                        <article className="card" aria-labelledby="svc-futures">
                            <Radar className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-futures">Future studies: Anticipate &amp; lead</h3>
                            <p>Signals, scenarios, and literacy to de-risk bets and shape resilient strategy.</p>
                            <ul>
                                <li>Early-signal scans &amp; briefings</li>
                                <li>Scenario design &amp; foresight training</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/vigia-futura" className="cardCta" data-cta="cta.services.card.vigia" aria-label="Learn more about Vigía Futura">
                                    Learn more →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" aria-labelledby="services-cta-title">
                    <div className="finalCta">
                        <h2 id="services-cta-title">Ready to make innovation repeatable?</h2>
                        <p>Start with a quick diagnostic or book a discovery call. We’ll co-create the path from insight to results.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.services.final.diagnostic">
                                Start with a diagnostic
                            </Link>
                            <Link to="/contact" className="buttonSecondary" data-cta="cta.services.final.contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
