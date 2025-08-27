import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './services.module.css';
import {
    Users, Briefcase, Target, Calendar, MessageSquare, Clock, ShieldCheck, Sparkles, ArrowRight
} from 'lucide-react';

export default function CoachingMentoringPage() {
    return (
        <Layout
            title="Coaching & Mentoring"
            description="Personalized guidance for leaders and teams driving innovation."
        >
            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="cm-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="cm-hero-title" className={styles.heroTitle}>Coaching & Mentoring</h1>
                            <p className={styles.heroSubtitle}>Practical guidance. Real momentum.</p>
                            <p className={styles.heroText}>
                                1:1 and team coaching that helps leaders <strong>turn strategy into execution</strong>, build
                                <strong> repeatable innovation</strong>, and navigate complex change with clarity. Grounded in our
                                MicroCanvas® and IMM® methods—adapted to your context.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link to="/contact" className={styles.buttonPrimary} data-cta="cm_hero_contact">
                                    Book an intro call
                                </Link>
                                <Link to="/services/clarityscan" className={styles.buttonSecondary} data-cta="cm_hero_clarityscan">
                                    Start with a diagnostic
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/coaching-hero.png"
                                alt="Coaching & mentoring"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* Who it's for */}
                <section className={styles.section} aria-labelledby="cm-who-title">
                    <h2 id="cm-who-title">Who it’s for</h2>
                    <p className={styles.sectionLead}>
                        Executives, founders, and transformation leaders who need a <strong>thinking partner</strong> to move faster with
                        <strong> less risk</strong>—and bring teams along confidently.
                    </p>

                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Executive leaders</h3>
                            <p className={styles.cardBody}>Navigate ambiguity, set focus, and align your org around what matters.</p>
                        </div>
                        <div className={styles.card}>
                            <Briefcase className={styles.cardIcon} aria-hidden="true" />
                            <h3>Innovation owners</h3>
                            <p className={styles.cardBody}>Structure discovery, delivery, and learning loops that actually stick.</p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} aria-hidden="true" />
                            <h3>Product/GTM leaders</h3>
                            <p className={styles.cardBody}>Clarify value, reduce waste, and ship customer‑centered outcomes.</p>
                        </div>
                    </div>
                </section>

                {/* Retainers */}
                <section className={styles.section} aria-labelledby="cm-retainers-title">
                    <h2 id="cm-retainers-title">Coaching retainers</h2>
                    <p className={styles.sectionLead}>
                        Choose the engagement level that fits your cadence. All tiers include shared workspace, action tracking, and
                        light async support between sessions.
                    </p>

                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Clock className={styles.cardIcon} aria-hidden="true" />
                            <h3>Lite Retainer</h3>
                            <p className={styles.cardBody}>
                                Focused support with <strong>2 live hours</strong> + <strong>1 async hour</strong> for follow‑ups and quick reviews.
                                Great for sharp decisions and checkpoints.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cm_retainer_lite">
                                    Enquire about Lite <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Calendar className={styles.cardIcon} aria-hidden="true" />
                            <h3>Standard Retainer</h3>
                            <p className={styles.cardBody}>
                                Steady guidance with <strong>4 live hours</strong> + <strong>2 async hours</strong>. Ideal for monthly strategic support
                                and ongoing momentum.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cm_retainer_standard">
                                    Enquire about Standard <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} aria-hidden="true" />
                            <h3>Pro Retainer</h3>
                            <p className={styles.cardBody}>
                                High‑engagement mentoring with <strong>6 live hours</strong> + <strong>3 async hours</strong>. For deep strategic work
                                and priority support.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cm_retainer_pro">
                                    Enquire about Pro <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Sparkles className={styles.cardIcon} aria-hidden="true" />
                            <h3>Enterprise Retainer</h3>
                            <p className={styles.cardBody}>
                                Full‑access executive mentoring with <strong>8 live hours</strong> + <strong>4 async hours</strong>/month.
                                Best for transformation leaders and exec teams across multiple initiatives.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link to="/contact" className={styles.cardCta} data-cta="cm_retainer_enterprise">
                                    Enquire about Enterprise <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes */}
                <section className={styles.section} aria-labelledby="cm-outcomes-title">
                    <h2 id="cm-outcomes-title">What you’ll get</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <MessageSquare className={styles.cardIcon} aria-hidden="true" />
                            <h3>Clarity & focus</h3>
                            <p className={styles.cardBody}>Sharper priorities, cleaner OKRs, and faster decisions with confidence.</p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} aria-hidden="true" />
                            <h3>Repeatable methods</h3>
                            <p className={styles.cardBody}>MCF + IMM playbooks you can reuse across teams and initiatives.</p>
                        </div>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} aria-hidden="true" />
                            <h3>Measured progress</h3>
                            <p className={styles.cardBody}>Light instrumentation to track actions, risks, and delivered outcomes.</p>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className={styles.section} aria-labelledby="cm-how-title">
                    <h2 id="cm-how-title">How we coach</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>1:1 or small group</h3>
                            <p className={styles.cardBody}>Confidential space for executive problem‑solving and alignment.</p>
                        </div>
                        <div className={styles.card}>
                            <Briefcase className={styles.cardIcon} aria-hidden="true" />
                            <h3>Case‑based sessions</h3>
                            <p className={styles.cardBody}>We work on your live priorities—no generic lectures or filler.</p>
                        </div>
                        <div className={styles.card}>
                            <Calendar className={styles.cardIcon} aria-hidden="true" />
                            <h3>Cadence that fits</h3>
                            <p className={styles.cardBody}>Weekly, bi‑weekly, or monthly—plus async support between calls.</p>
                        </div>
                    </div>
                </section>

                {/* CTA strip (centered buttons) */}
                <section className={styles.section} aria-labelledby="cm-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="cm-cta-title">Ready to grow with guidance?</h2>
                        <p>Tell us your goals and constraints. We’ll recommend the retainer that fits and start making progress fast.</p>
                        <div className={styles.finalCtaButtons}>
                            <Link to="/contact" className={styles.buttonPrimary} data-cta="cm_footer_contact">
                                Book an intro call
                            </Link>
                            <Link to="/services/clarityscan" className={styles.buttonSecondary} data-cta="cm_footer_clarityscan">
                                Start with ClarityScan®
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section} aria-labelledby="cm-faq-title">
                    <h2 id="cm-faq-title">FAQ</h2>
                    <div className={styles.faqGrid}>
                        <details>
                            <summary>Do you coach individual leaders and teams?</summary>
                            <p>Yes. We offer 1:1 executive coaching and small‑group sessions for leadership teams.</p>
                        </details>
                        <details>
                            <summary>Is there a minimum commitment?</summary>
                            <p>Most retainers run quarterly. We can pilot a one‑month engagement if helpful.</p>
                        </details>
                        <details>
                            <summary>How do we measure progress?</summary>
                            <p>We co‑define outcomes and light metrics, then review momentum and blockers each session.</p>
                        </details>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
