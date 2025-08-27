// src/pages/services/innovation-maturity.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './services.module.css';
import { Layers, Target, Rocket, ClipboardCheck, Users, Gauge } from 'lucide-react';

export default function InnovationMaturityProgram(): JSX.Element {
    return (
        <Layout
            title="Innovation Maturity Program (IMM®)"
            description="A structured journey to assess, strengthen, and accelerate your innovation strategy using the MicroCanvas® Framework."
        >
            <Head>
                <meta name="robots" content="index, follow" />
            </Head>

            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="imm-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="imm-hero-title" className={styles.heroTitle}>Innovation Maturity Program (IMM®)</h1>
                            <p className={styles.heroSubtitle}>Assess. Strengthen. Accelerate.</p>
                            <p className={styles.heroText}>
                                The <strong>Innovation Maturity Model (IMM®)</strong> is a diagnostic and acceleration framework designed by Doulab
                                to assess the innovation capacity of startups, public institutions, and enterprises. It leverages the
                                <strong> MicroCanvas® Framework (MCF&nbsp;2.1)</strong> to translate strategy into measurable progress.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link to="/services/clarityscan" className={styles.buttonPrimary} data-cta="imm_hero_clarityscan">
                                    Start with ClarityScan®
                                </Link>
                                <Link to="/contact" className={styles.buttonSecondary} data-cta="imm_hero_contact">
                                    Talk to us
                                </Link>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/imm-program.png"
                                alt="IMM® program illustration"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* What is IMM */}
                <section className={styles.section} aria-labelledby="imm-what-title">
                    <h2 id="imm-what-title">What is the IMM® Program?</h2>
                    <p className={styles.sectionLead}>
                        A <strong>structured journey</strong> that combines diagnostics, coaching, and execution support to make innovation
                        <em> repeatable</em>, measurable, and aligned with your strategy.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} aria-hidden="true" />
                            <h3>MCF‑Powered</h3>
                            <p>Built on the MicroCanvas® Framework (2.1) to guide discovery, design, and delivery end‑to‑end.</p>
                        </div>
                        <div className={styles.card}>
                            <Gauge className={styles.cardIcon} aria-hidden="true" />
                            <h3>Evidence‑Based</h3>
                            <p>Decisions grounded in diagnostics, capability baselines, and clear OKRs/KPIs.</p>
                        </div>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Co‑Created</h3>
                            <p>We work alongside your team—coaching, mentoring, and transferring capability.</p>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className={styles.section} aria-labelledby="imm-how-title">
                    <h2 id="imm-how-title">How It Works</h2>
                    <p className={styles.sectionLead}>
                        IMM® unfolds across focused phases. Each phase delivers <strong>artifacts, decisions, and momentum</strong>.
                    </p>

                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <span className={styles.badge}>Phase 0</span>
                            <h3>Strategic Alignment</h3>
                            <p>Clarify goals, OKRs/KPIs, roles, and constraints. Establish shared definitions and outcomes.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.badge}>Phase 1</span>
                            <h3>Pre‑Discovery</h3>
                            <p>Map motivations and sources of resistance. Frame hypotheses and prioritize focus areas.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.badge}>Phase 2</span>
                            <h3>Discovery + Validation</h3>
                            <p>Analyze customers, define problems, test assumptions, and validate early solutions.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.badge}>Phase 3</span>
                            <h3>Prototyping + Results</h3>
                            <p>Design and test a strategic solution. Capture evidence, learning, and early outcome metrics.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.badge}>Phase 4</span>
                            <h3>Implementation</h3>
                            <p>Execute a roadmap with governance, resourcing, and continuous measurement.</p>
                        </div>
                    </div>
                </section>

                {/* Who it's for */}
                <section className={styles.section} aria-labelledby="imm-who-title">
                    <h2 id="imm-who-title">Who It’s For</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} aria-hidden="true" />
                            <h3>Startups</h3>
                            <p>Teams navigating early growth or fundraising who need clarity, focus, and repeatable delivery.</p>
                        </div>
                        <div className={styles.card}>
                            <ClipboardCheck className={styles.cardIcon} aria-hidden="true" />
                            <h3>Public Institutions</h3>
                            <p>Organizations pursuing digital transformation and capability building at scale.</p>
                        </div>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Innovation Leaders</h3>
                            <p>Executives seeking actionable insights, operating models, and measurable progress.</p>
                        </div>
                    </div>
                </section>

                {/* Outcomes */}
                <section className={styles.section} aria-labelledby="imm-outcomes-title">
                    <h2 id="imm-outcomes-title">What You Can Expect</h2>
                    <div className={styles.statGrid}>
                        <div className={styles.statCard}>
                            <Rocket className={styles.cardIcon} aria-hidden="true" />
                            <h3>Momentum</h3>
                            <p>Decisions made faster, prototypes shipped sooner, and learning captured continuously.</p>
                        </div>
                        <div className={styles.statCard}>
                            <Gauge className={styles.cardIcon} aria-hidden="true" />
                            <h3>Clarity</h3>
                            <p>Clear baselines and OKRs/KPIs that translate strategy into everyday action.</p>
                        </div>
                        <div className={styles.statCard}>
                            <Layers className={styles.cardIcon} aria-hidden="true" />
                            <h3>Capability</h3>
                            <p>Teams equipped with repeatable methods, templates, and governance to scale.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section} aria-labelledby="imm-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="imm-cta-title">Ready to accelerate your innovation maturity?</h2>
                        <p>Kick off with a quick diagnostic or talk with our team about running IMM® in your organization.</p>
                        <div className={styles.finalCtaButtons}>
                            <a className={styles.buttonPrimary} href="https://calendly.com/lasantiago/clarityscan" target="_blank" rel="noopener noreferrer">
                                Start with ClarityScan® →
                            </a>
                            <a className={styles.buttonSecondary} href="/contact">
                                Book a discovery call →
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

