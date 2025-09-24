// src/pages/services/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import Search from 'lucide-react/dist/esm/icons/search';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Radar from 'lucide-react/dist/esm/icons/radar';

export default function ServicesPage(): ReactNode {
    return (
        <Layout
            title="Services — Structured innovation, diagnostics, workshops & foresight | Doulab"
            description="Programs, workshops, diagnostics, and foresight to make innovation repeatable. Baselines, gated decisions, and measurable outcomes — privacy-first."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services" />
                <meta property="og:title" content="Services - Structured innovation, diagnostics, workshops & foresight | Doulab" />
                <meta property="og:description" content="Programs, workshops, diagnostics, and foresight to make innovation repeatable. Baselines, gated decisions, and measurable outcomes." />
                <meta property="og:image" content="https://doulab.net/img/docusaurus-social-card.jpg" />
                <meta property="og:image:alt" content="Doulab — Services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="author" content="Luis Santiago Arias" />
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
                <Hero
                    title="Our Services"
                    subtitle="Programs, workshops, diagnostics, and foresight - turning strategy into sustained results."
                    body={"Whether you're mapping maturity, aligning teams, or preparing to scale, we meet you where you are and co-create the path to outcomes."}
                    imageBase="/img/services-hero"
                    imageAlt="Our Services"
                    width={600}
                    height={400}
                    primaryCta={{ to: '/services/clarityscan', label: 'Explore ClarityScan', dataCta: 'cta.services.hero.explore_clarityscan' }}
                    secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.services.hero.book_clarityscan_online', external: true }}
                    ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
                    id="services-hero"
                    ariaLabelledbyId="services-hero-title"
                    eager
                />

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
                            <div className="cardFooter" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                                <Link to="/services/clarityscan" className="cardCta" data-cta="cta.services.card.diagnostics" aria-label="Explore ClarityScan">
                                    Run a diagnostic →
                                </Link>
                                <Link href={CLARITYSCAN_CHECKOUT_URL} className="cardCta" data-cta="cta.services.card.diagnostics.book_online" aria-label="Book a ClarityScan online via Stripe Checkout" target="_blank" rel="noopener noreferrer">
                                    Book online →
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






