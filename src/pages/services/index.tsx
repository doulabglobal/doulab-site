import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './services.module.css';
import { Search, Lightbulb, Layers, Users, Radar } from 'lucide-react';

export default function ServicesPage() {
    return (
        <Layout title="Services" description="Explore our strategic innovation services">
            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="services-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="services-hero-title" className={styles.heroTitle}>Our Services</h1>
                            <p className={styles.heroSubtitle} style={{ textAlign: 'justify' }}>
                                Programs, workshops, diagnostics, and foresight—designed to turn strategy into sustained results.
                            </p>
                            <p className={styles.heroText}>
                                Whether you’re mapping maturity, aligning teams, or preparing to scale, we meet you where you are and co‑create the path forward.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link to="/contact" className={styles.buttonPrimary} data-cta="services_hero_contact" aria-label="Book a discovery call">
                                    Book a discovery call
                                </Link>
                                <Link to="/about#service-pillars" className={styles.buttonSecondary} data-cta="services_hero_pillars" aria-label="See our service pillars">
                                    See our service pillars
                                </Link>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/services-hero.png"
                                alt="Our Services"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* Trusted line */}
                <section className={styles.section} aria-label="Trusted by">
                    <p className={styles.trustedBy}>
                        Trusted by organizations like OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.
                    </p>
                </section>

                {/* Services Grid */}
                <section className={styles.section} aria-labelledby="services-grid-title">
                    <h2 id="services-grid-title">What we offer</h2>
                    <div className={styles.cardGrid}>
                        {/* Diagnostics */}
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} aria-hidden="true" />
                            <h3>ClarityScan®: Know Where You Stand</h3>
                            <p className={styles.cardBody}>
                                Run a rapid, evidence‑based scan to gauge innovation or foresight maturity, spotlight critical gaps, and prioritize next actions with clarity.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/clarityscan" className={styles.cardCta} data-cta="services_clarityscan" aria-label="Explore ClarityScan">
                                    Run a diagnostic →
                                </Link>
                            </div>
                        </div>

                        {/* Workshops */}
                        <div className={styles.card}>
                            <Lightbulb className={styles.cardIcon} aria-hidden="true" />
                            <h3>Workshops: Align & Activate</h3>
                            <p className={styles.cardBody}>
                                Hands‑on, outcome‑driven sessions that align teams, surface insights, and compress weeks of meetings into decisive plans you can execute immediately.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/custom-workshops" className={styles.cardCta} data-cta="services_workshops" aria-label="Explore custom workshops">
                                    Start a workshop sprint →
                                </Link>
                            </div>
                        </div>

                        {/* Programs */}
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} aria-hidden="true" />
                            <h3>Programs: Build Innovation Capacity</h3>
                            <p className={styles.cardBody}>
                                Multi‑phase IMM® journeys that embed process, governance, and skills so innovation becomes repeatable, measurable, and scalable across your organization.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/innovation-maturity" className={styles.cardCta} data-cta="services_programs" aria-label="Explore innovation maturity program">
                                    Join the IMM Program →
                                </Link>
                            </div>
                        </div>

                        {/* Coaching */}
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Coaching & Mentoring: Grow with Guidance</h3>
                            <p className={styles.cardBody}>
                                Personalized guidance for leaders and teams—targeted feedback, decision support, and momentum rituals that unblock challenges and keep initiatives moving.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/coaching-mentoring" className={styles.cardCta} data-cta="services_coaching" aria-label="Explore coaching and mentoring">
                                    View coaching options →
                                </Link>
                            </div>
                        </div>

                        {/* Future Studies */}
                        <div className={styles.card}>
                            <Radar className={styles.cardIcon} aria-hidden="true" />
                            <h3>Future Studies: Anticipate & Lead</h3>
                            <p className={styles.cardBody}>
                                Strategic foresight and scenarios from our Vigía Futura observatory to detect signals early, de‑risk bets, and shape resilient long‑term strategy.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/vigia-futura" className={styles.cardCta} data-cta="services_vigia" aria-label="Learn more about Vigía Futura">
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section className={styles.section} aria-labelledby="services-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="services-cta-title">Ready to make innovation repeatable?</h2>
                        <p>Start with a quick diagnostic or book a discovery call. We’ll co‑create the path from insight to results.</p>
                        <div className={styles.finalCtaButtons}>
                            <Link to="/services/clarityscan" className={styles.buttonPrimary} data-cta="services_footer_diagnostic">
                                Start with a diagnostic
                            </Link>
                            <Link to="/contact" className={styles.buttonSecondary} data-cta="services_footer_contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
