import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './services.module.css';
import {
    Lightbulb, CalendarClock, Users, Target, ClipboardCheck, Wand2, Rocket, ArrowRight
} from 'lucide-react';

export default function CustomWorkshopsPage() {
    return (
        <Layout
            title="Custom Workshops"
            description="Outcome‑driven sessions to align teams, decide faster, and create momentum."
        >
            <main className={styles.pageWrap}>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="cw-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="cw-hero-title" className={styles.heroTitle}>Custom Workshops</h1>
                            <p className={styles.heroSubtitle}>Align. Decide. Move.</p>
                            <p className={styles.heroText}>
                                We design and run <strong>tailored workshops</strong> that unblock decisions and turn strategy into action.
                                Sessions are built with MicroCanvas® and IMM® tools, and delivered in‑house or remotely.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link to="/contact" className={styles.buttonPrimary} data-cta="cw_hero_contact">
                                    Start a workshop brief
                                </Link>
                                <Link to="/services" className={styles.buttonSecondary} data-cta="cw_hero_services">
                                    See all services
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/workshops-hero.png"
                                alt="Custom workshops illustration"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* When to run a workshop */}
                <section className={styles.section} aria-labelledby="cw-who-title">
                    <h2 id="cw-who-title">When to run a workshop</h2>
                    <p className={styles.sectionLead}>
                        Use a custom workshop when you need a <strong>decision</strong>, a <strong>shared plan</strong>,
                        or a <strong>jump‑start</strong>—without weeks of meetings.
                    </p>

                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Lightbulb className={styles.cardIcon} aria-hidden="true" />
                            <h3>Strategy sprints</h3>
                            <p className={styles.cardBody}>Clarify priorities, OKRs, and focus areas with evidence‑based tools.</p>
                        </div>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Team alignment</h3>
                            <p className={styles.cardBody}>Get cross‑functional buy‑in and cut through blockers in one session.</p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} aria-hidden="true" />
                            <h3>Go‑to‑market</h3>
                            <p className={styles.cardBody}>Frame customer/jobs, offers, and experiments that de‑risk launch.</p>
                        </div>
                    </div>
                </section>

                {/* Workshop formats */}
                <section className={styles.section} aria-labelledby="cw-offers-title">
                    <h2 id="cw-offers-title">Workshop formats</h2>

                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <CalendarClock className={styles.cardIcon} aria-hidden="true" />
                            <h3>Custom Innovation Workshop (half‑day)</h3>
                            <p className={styles.cardBody}>
                                A focused 3.5‑hour session built on MicroCanvas® or complementary frameworks.
                                Ideal for rapid alignment, prioritization, and quick‑win planning. In‑house or remote.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cw_halfday_brief">
                                    Start a half‑day brief <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <CalendarClock className={styles.cardIcon} aria-hidden="true" />
                            <h3>Custom Innovation Workshop (full‑day)</h3>
                            <p className={styles.cardBody}>
                                A deep‑dive 7‑hour session that moves from discovery to decisions and next steps.
                                Includes pre‑work review and post‑workshop synthesis. In‑house or remote.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cw_fullday_brief">
                                    Start a full‑day brief <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes */}
                <section className={styles.section} aria-labelledby="cw-outcomes-title">
                    <h2 id="cw-outcomes-title">What you’ll leave with</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <ClipboardCheck className={styles.cardIcon} aria-hidden="true" />
                            <h3>Decisions made</h3>
                            <p className={styles.cardBody}>Clear choices documented with rationale and owners.</p>
                        </div>
                        <div className={styles.card}>
                            <Wand2 className={styles.cardIcon} aria-hidden="true" />
                            <h3>Artifacts you can reuse</h3>
                            <p className={styles.cardBody}>Working canvases, prioritization maps, and action boards.</p>
                        </div>
                        <div className={styles.card}>
                            <Rocket className={styles.cardIcon} aria-hidden="true" />
                            <h3>30‑60‑90 plan</h3>
                            <p className={styles.cardBody}>Sequenced actions, owners, and success metrics for momentum.</p>
                        </div>
                    </div>
                </section>

                {/* Sample agendas */}
                <section className={styles.section} aria-labelledby="cw-agenda-title">
                    <h2 id="cw-agenda-title">Sample agendas</h2>
                    <div className={styles.sampleGrid}>
                        <div>
                            <h3>Half‑day (3.5h)</h3>
                            <ul className={styles.bullets}>
                                <li>Context & goals (15m)</li>
                                <li>Problem framing + Jobs‑to‑Be‑Done (45m)</li>
                                <li>Option mapping + quick scoring (60m)</li>
                                <li>Break + alignment (15m)</li>
                                <li>Top bets + 30‑day plan (60m)</li>
                                <li>Owners & next steps (15m)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Full‑day (7h)</h3>
                            <ul className={styles.bullets}>
                                <li>Context & constraints (30m)</li>
                                <li>Discovery canvas + insights (90m)</li>
                                <li>Concept shaping + tests (90m)</li>
                                <li>Break (60m total)</li>
                                <li>Prioritization & roadmap (90m)</li>
                                <li>30‑60‑90 plan + owners (60m)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Popular themes</h3>
                            <ul className={styles.bullets}>
                                <li>Innovation strategy & operating model</li>
                                <li>Customer/market discovery & GTM</li>
                                <li>Foresight integration into planning</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA strip (centered buttons) */}
                <section className={styles.section} aria-labelledby="cw-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="cw-cta-title">Ready to align and move?</h2>
                        <p>Send us your goals and constraints. We’ll design the right workshop and get you moving fast.</p>
                        <div className={styles.finalCtaButtons}>
                            <Link to="/contact" className={styles.buttonPrimary} data-cta="cw_footer_contact">
                                Start a workshop brief
                            </Link>
                            <Link to="/services/clarityscan" className={styles.buttonSecondary} data-cta="cw_footer_clarityscan">
                                Start with a diagnostic
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section} aria-labelledby="cw-faq-title">
                    <h2 id="cw-faq-title">FAQ</h2>
                    <div className={styles.faqGrid}>
                        <details>
                            <summary>Can you customize the agenda?</summary>
                            <p>Yes. We tailor content, tools, and outcomes to your goals, timeline, and team size.</p>
                        </details>
                        <details>
                            <summary>What prep is required?</summary>
                            <p>Minimal. We’ll share a short intake and optional materials list (e.g., recent plans or KPIs).</p>
                        </details>
                        <details>
                            <summary>Remote or in‑person?</summary>
                            <p>Both work. We use collaborative canvases for remote and whiteboards/templates in‑person.</p>
                        </details>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
