// src/pages/contact.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
    CalendarClock, Mail, FileText, MessageSquare, ShieldCheck, Clock
} from 'lucide-react';

// Reuse our standardized Services styles (hero, sections, cards, CTAs)
import styles from './services/services.module.css';

export default function Contact() {
    return (
        <Layout title="Contact" description="Talk to Doulab — quick discovery calls, email, or a short brief.">
            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="contact-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="contact-hero-title" className={styles.heroTitle}>Talk to Doulab</h1>
                            <p className={styles.heroSubtitle} style={{ textAlign: 'justify' }}>
                                Quick ways to connect and get momentum.
                            </p>
                            <p className={styles.heroText}>
                                Book a discovery call, send us an email, or share a short brief. We’ll meet you where you are and help you move forward.
                            </p>

                            <div className={styles.heroCtas}>
                                <a
                                    href="https://calendly.com/lasantiago"
                                    className={styles.buttonPrimary}
                                    data-cta="contact_hero_calendly"
                                    aria-label="Book a discovery call on Calendly"
                                >
                                    Book a discovery call
                                </a>
                                <a
                                    href="mailto:hello@doulab.net"
                                    className={styles.buttonSecondary}
                                    data-cta="contact_hero_email"
                                    aria-label="Email Doulab"
                                >
                                    Email us
                                </a>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/contact-hero.png"
                                alt="Contact Doulab"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* Contact options */}
                <section className={styles.section} aria-labelledby="contact-options-title">
                    <h2 id="contact-options-title">Ways to reach us</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <CalendarClock className={styles.cardIcon} aria-hidden="true" />
                            <h3>Discovery call (20–30 min)</h3>
                            <p className={styles.cardBody}>
                                Fast, focused conversation to map goals, constraints, and the best next step.
                            </p>
                            <div className={styles.cardFooter}>
                                <a
                                    href="https://calendly.com/lasantiago"
                                    className={styles.cardCta}
                                    data-cta="contact_card_calendly"
                                    aria-label="Open Calendly"
                                >
                                    Book on Calendly →
                                </a>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Mail className={styles.cardIcon} aria-hidden="true" />
                            <h3>Email</h3>
                            <p className={styles.cardBody}>
                                Prefer async? Send context and links; we’ll reply within one business day.
                            </p>
                            <div className={styles.cardFooter}>
                                <a
                                    href="mailto:hello@doulab.net"
                                    className={styles.cardCta}
                                    data-cta="contact_card_email"
                                    aria-label="Email hello@doulab.net"
                                >
                                    hello@doulab.net
                                </a>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <FileText className={styles.cardIcon} aria-hidden="true" />
                            <h3>Short project brief</h3>
                            <p className={styles.cardBody}>
                                Share your objectives, timeline, and team. We’ll suggest a path within 48h.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link
                                    to="/work-with-us"
                                    className={styles.cardCta}
                                    data-cta="contact_card_brief"
                                    aria-label="Open Work With Us"
                                >
                                    Open brief →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to include */}
                <section className={styles.section} aria-labelledby="contact-include-title">
                    <h2 id="contact-include-title">What helps us help you</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <MessageSquare className={styles.cardIcon} aria-hidden="true" />
                            <h3>Goals & context</h3>
                            <p className={styles.cardBody}>
                                What outcome are you aiming for? What’s blocking it today?
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Clock className={styles.cardIcon} aria-hidden="true" />
                            <h3>Timeline & constraints</h3>
                            <p className={styles.cardBody}>
                                Key dates, budget windows, and any non‑negotiables we should plan around.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} aria-hidden="true" />
                            <h3>Team & privacy</h3>
                            <p className={styles.cardBody}>
                                Who’s involved, and any sharing limits. We treat your info confidentially.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section className={styles.section} aria-labelledby="contact-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="contact-cta-title">Ready to get started?</h2>
                        <p>Pick a quick call or send a brief—either way, we’ll help you find the fastest credible next step.</p>
                        <div className={styles.heroCtas} style={{ justifyContent: 'center' }}>
                            <a
                                href="https://calendly.com/lasantiago"
                                className={styles.buttonPrimary}
                                data-cta="contact_footer_calendly"
                            >
                                Book a discovery call
                            </a>
                            <Link
                                to="/work-with-us"
                                className={styles.buttonSecondary}
                                data-cta="contact_footer_brief"
                            >
                                Share a short brief
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
