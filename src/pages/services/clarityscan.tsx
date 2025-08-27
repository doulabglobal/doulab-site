import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './services.module.css';
import { Gauge, Target, CheckCircle, PlayCircle, Layers, CalendarClock } from 'lucide-react';

export default function ClarityScanPage() {
    return (
        <Layout title="ClarityScan®" description="Rapid diagnostic to map innovation maturity and identify gaps.">
            <main className={styles.pageWrap}>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="clarityscan-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="clarityscan-hero-title" className={styles.heroTitle}>ClarityScan®</h1>
                            <p className={styles.heroSubtitle}>A rapid diagnostic to see where you are—and what to do next.</p>
                            <p className={styles.heroText}>
                                In under 30 minutes, ClarityScan® maps your innovation/foresight maturity across strategy, culture,
                                process, and results—then pinpoints the top actions to unlock momentum.
                            </p>
                            <div className={styles.heroCtas}>
                                <a
                                    href="https://calendly.com/lasantiago/clarityscan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.buttonPrimary}
                                >
                                    Run ClarityScan®
                                </a>
                                <Link to="/contact" className={styles.buttonSecondary}>
                                    Talk to us
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/clarityscan-hero.png"
                                alt="ClarityScan diagnostic"
                                className={styles.heroImage}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* What you get */}
                <section className={styles.section} aria-labelledby="clarityscan-benefits-title">
                    <h2 id="clarityscan-benefits-title">What you get</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Gauge className={styles.cardIcon} />
                            <h3>Maturity snapshot</h3>
                            <p>Clear, visual read of your current capability across the four pillars.</p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} />
                            <h3>Priority moves</h3>
                            <p>Top 3–5 actions for the next 30–90 days, aligned to your goals.</p>
                        </div>
                        <div className={styles.card}>
                            <CheckCircle className={styles.cardIcon} />
                            <h3>Next‑step paths</h3>
                            <p>Recommended options: workshops, programs, or coaching—no fluff.</p>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className={styles.section} aria-labelledby="clarityscan-how-title">
                    <h2 id="clarityscan-how-title">How it works</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} />
                            <h3>1) Quick intake</h3>
                            <p>Short survey + context so we tailor the diagnostic to your reality.</p>
                        </div>
                        <div className={styles.card}>
                            <PlayCircle className={styles.cardIcon} />
                            <h3>2) 30‑min session</h3>
                            <p>Live walkthrough of pillars, signals, and evidence with your team.</p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} />
                            <h3>3) Findings brief</h3>
                            <p>Concise readout: maturity snapshot, gaps, and priority actions.</p>
                        </div>
                        <div className={styles.card}>
                            <CheckCircle className={styles.cardIcon} />
                            <h3>4) Action options</h3>
                            <p>Clear next steps—DIY, Doulab support, or hybrid acceleration.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing & formats */}
                <section className={styles.section} aria-labelledby="clarityscan-pricing-title">
                    <h2 id="clarityscan-pricing-title">Pricing & formats</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <CalendarClock className={styles.cardIcon} />
                            <h3>ClarityScan® — Core</h3>
                            <p>30‑minute session + findings brief + 30/60/90‑day plan. Remote delivery.</p>
                            <div className={styles.cardFooter}>
                                <a
                                    className={styles.cardCta}
                                    href="https://calendly.com/lasantiago/clarityscan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Schedule now →
                                </a>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <CalendarClock className={styles.cardIcon} />
                            <h3>ClarityScan® — Plus</h3>
                            <p>Everything in Core + stakeholder interviews + tailored roadmap review.</p>
                            <div className={styles.cardFooter}>
                                <Link className={styles.cardCta} to="/contact">
                                    Request a proposal →
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className={styles.microcopy}>Need a custom scope? We’ll shape it around your team size and timeline.</p>
                </section>

                {/* Who it's for */}
                <section className={styles.section} aria-labelledby="clarityscan-ideal-title">
                    <h2 id="clarityscan-ideal-title">Who it’s for</h2>
                    <ul className={styles.bulletList}>
                        <li>Leaders who need a fast, evidence‑based read on capability and gaps.</li>
                        <li>Teams about to refresh strategy, OKRs, or transformation roadmaps.</li>
                        <li>Organizations deciding where to invest to accelerate outcomes.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className={styles.section} aria-labelledby="clarityscan-faq-title">
                    <h2 id="clarityscan-faq-title">FAQ</h2>
                    <div className={styles.faqGrid}>
                        <details>
                            <summary>How fast can we run ClarityScan®?</summary>
                            <p>We can usually schedule within a few days. The live session is ~30 minutes.</p>
                        </details>
                        <details>
                            <summary>Who should attend?</summary>
                            <p>Ideally a sponsor + 2–4 team members across product, ops, and delivery.</p>
                        </details>
                        <details>
                            <summary>What do we need to prepare?</summary>
                            <p>A brief on your goals/context and any existing OKRs, roadmap, or metrics.</p>
                        </details>
                    </div>
                </section>

                {/* Final CTA (centered + standardized buttons) */}
                <section className={styles.finalCta}>
                    <h2>Ready to get a clear read?</h2>
                    <p>Run ClarityScan® and get your maturity snapshot plus the exact next steps to take.</p>
                    <div className={styles.finalCtaButtons}>
                        <a
                            href="https://calendly.com/lasantiago/clarityscan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonPrimary}
                        >
                            Start ClarityScan® →
                        </a>
                        <Link to="/contact" className={styles.buttonSecondary}>
                            Book a discovery call →
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
