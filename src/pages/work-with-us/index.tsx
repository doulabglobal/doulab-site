import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import { Search, Lightbulb, Users, Layers, Radar, Target, CheckCircle2 } from 'lucide-react';

export default function WorkWithUsPage() {
    return (
        <Layout title="Work with Doulab" description="Practical ways to start—diagnose, align, and build capacity.">
            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="wwu-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="wwu-hero-title" className={styles.heroTitle}>Work with Doulab</h1>
                            <p className={styles.heroSubtitle}>Practical ways to start—diagnose, align, and build capacity.</p>
                            <p className={styles.heroText}>
                                Start small or go deep. We help teams make innovation repeatable and foresight practical,
                                so strategy turns into sustained results.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link to="/services/clarityscan" className={styles.buttonPrimary} data-cta="wwu_hero_clarityscan">
                                    Start with ClarityScan®
                                </Link>
                                <Link to="/contact" className={styles.buttonSecondary} data-cta="wwu_hero_contact">
                                    Book a discovery call
                                </Link>
                            </div>

                            {/* In this page subnav */}
                            <nav className={styles.subnav} aria-label="In this page">
                                <a href="#start">Start</a>
                                <a href="#process">How we work</a>
                                <a href="#results">Results</a>
                                <a href="#fit">Who we work with</a>
                                <a href="#faq">FAQ</a>
                                <a href="#get-started">Get started</a>
                            </nav>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/work-with-us-hero.png"
                                alt="Work with Doulab"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* 3 ways to start */}
                <section id="start" className={styles.section} aria-labelledby="wwu-start-title">
                    <h2 id="wwu-start-title">Three ways to start</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} aria-hidden="true" />
                            <h3>ClarityScan® Diagnostic</h3>
                            <p>Rapidly map innovation or foresight maturity, surface gaps that matter, and get a prioritized action snapshot.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/clarityscan" className={styles.cardCta} data-cta="wwu_start_clarityscan">
                                    Run a diagnostic →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Lightbulb className={styles.cardIcon} aria-hidden="true" />
                            <h3>Custom Workshop</h3>
                            <p>Half‑day or full‑day sessions to align teams, unlock decisions, and leave with a 30‑60‑90 plan you can execute.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/custom-workshops" className={styles.cardCta} data-cta="wwu_start_workshop">
                                    Start a workshop sprint →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Discovery Call</h3>
                            <p>Share goals and constraints; we’ll suggest the best path—diagnostic, workshop, program, or coaching.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="wwu_start_call">
                                    Book a call →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How we work (process rail) */}
                <section id="process" className={styles.section} aria-labelledby="wwu-process-title">
                    <h2 id="wwu-process-title">How we work</h2>
                    <p className={styles.sectionLead}>Lightweight, phased, and outcome‑driven. We meet you where you are and build momentum quickly.</p>

                    <ol className={styles.processRail}>
                        <li className={styles.processStep}>
                            <Target className={styles.stepIcon} aria-hidden="true" />
                            <h4>1) Map & Prioritize</h4>
                            <p>Use ClarityScan® to assess capability, find gaps, and focus where impact is highest.</p>
                        </li>
                        <li className={styles.processStep}>
                            <Lightbulb className={styles.stepIcon} aria-hidden="true" />
                            <h4>2) Align & Decide</h4>
                            <p>Run a workshop to resolve tensions, choose options, and agree on next moves.</p>
                        </li>
                        <li className={styles.processStep}>
                            <Layers className={styles.stepIcon} aria-hidden="true" />
                            <h4>3) Build Capability</h4>
                            <p>Deploy programs and coaching to install culture, process, and measurement.</p>
                        </li>
                        <li className={styles.processStep}>
                            <Radar className={styles.stepIcon} aria-hidden="true" />
                            <h4>4) Anticipate Futures</h4>
                            <p>Use Vigía Futura to track signals, stress‑test strategy, and stay future‑ready.</p>
                        </li>
                    </ol>
                </section>

                {/* Proof */}
                <section id="results" className={styles.section} aria-labelledby="wwu-proof-title">
                    <h2 id="wwu-proof-title">Selected results</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <CheckCircle2 className={styles.cardIcon} aria-hidden="true" />
                            <h3>AFP Siembra</h3>
                            <p>From experiments to outcomes: Alcanza product design + SILAB launch coordination; IMM‑guided coaching over 2.5 years.</p>
                        </div>
                        <div className={styles.card}>
                            <CheckCircle2 className={styles.cardIcon} aria-hidden="true" />
                            <h3>Alpha Inversiones</h3>
                            <p>Established innovation process and mentored Alpha Escalable; foundations supported the new Alpha en Línea launch.</p>
                        </div>
                        <div className={styles.card}>
                            <CheckCircle2 className={styles.cardIcon} aria-hidden="true" />
                            <h3>FUNDAPEC & OGTIC</h3>
                            <p>Built a community platform with FUNDAPEC; with OGTIC, adapted MCF/IMM to scale labs and public‑sector ecosystems.</p>
                        </div>
                    </div>

                    <div className={styles.proofStrip} aria-label="Organizations we’ve supported">
                        <img src="/img/afpsiembra.png" alt="AFP Siembra" width={160} height={48} loading="lazy" />
                        <img src="/img/OGTIC_horizontal_fullcolor.png" alt="OGTIC" width={160} height={48} loading="lazy" />
                        <img src="/img/alpha.png" alt="Alpha Inversiones" width={160} height={48} loading="lazy" />
                        <img src="/img/fundapec.png" alt="FUNDAPEC" width={160} height={48} loading="lazy" />
                        <img src="/img/runway.png" alt="Runway Innovation Hub" width={160} height={48} loading="lazy" />
                    </div>
                </section>

                {/* Who we work with */}
                <section id="fit" className={styles.section} aria-labelledby="wwu-fit-title">
                    <h2 id="wwu-fit-title">Who we work with</h2>
                    <p className={styles.sectionLead}>Public institutions, regulated finance, education, scale‑ups, and ecosystems where evidence and outcomes matter.</p>
                    <ul className={styles.chips}>
                        <li>Public sector</li>
                        <li>Financial services</li>
                        <li>Education & workforce</li>
                        <li>Scale‑ups & startups</li>
                        <li>Incubators & accelerators</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className={styles.section} aria-labelledby="wwu-faq-title">
                    <h2 id="wwu-faq-title">FAQ</h2>
                    <div className={styles.faqGrid}>
                        <details>
                            <summary>How fast can we start?</summary>
                            <p>Diagnostics can start within days. Workshops typically schedule within 1–2 weeks.</p>
                        </details>
                        <details>
                            <summary>Remote or in‑person?</summary>
                            <p>Both. We use collaborative canvases remotely and structured templates on‑site.</p>
                        </details>
                        <details>
                            <summary>Typical engagement length?</summary>
                            <p>Diagnostics: 1–2 weeks. Workshops: half or full day (+light prep). Programs/coaching: 6–12+ weeks.</p>
                        </details>
                        <details>
                            <summary>Pricing?</summary>
                            <p>Fixed‑fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope.</p>
                        </details>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section id="get-started" className={styles.section} aria-labelledby="wwu-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="wwu-cta-title">Ready to move from plans to repeatable delivery?</h2>
                        <p>Start with ClarityScan® or book a discovery call. We’ll co‑create the path from insight to results.</p>
                        <div className={styles.heroCtas} style={{ justifyContent: 'center' }}>
                            <Link to="/services/clarityscan" className={styles.buttonPrimary} data-cta="wwu_footer_clarityscan">
                                Start with ClarityScan®
                            </Link>
                            <Link to="/contact" className={styles.buttonSecondary} data-cta="wwu_footer_contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
