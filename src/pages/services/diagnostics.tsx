// src/pages/services/diagnostics.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import Binoculars from 'lucide-react/dist/esm/icons/binoculars';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Users from 'lucide-react/dist/esm/icons/users';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import styles from '../b4-p2.module.css';

export default function DiagnosticsPage() {
    return (
        <Layout
            title="Diagnostics — ClarityScan®, Foresight & Operating Model"
            description="Evidence-based scans that baseline Strategy, Culture, Process, Results and turn gaps into a 30/60/90 plan. Built on MicroCanvas® 2.1 and IMM® — privacy-first."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/diagnostics" />
                {/* Preload hero LCP image (PNG) with next-gen alternatives */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/diagnostics-hero.png"
                    imageSrcSet="/img/diagnostics-hero.avif 1x, /img/diagnostics-hero.webp 1x, /img/diagnostics-hero.png 1x"
                    imageSizes="(max-width: 600px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="diagnostics-hero-title">
                    <div className={styles.heroRow}>
                        <div className={styles.heroCopy}>
                            <h1 id="diagnostics-hero-title" className="heroTitle">Diagnostics</h1>
                            <p className={`heroSubtitle ${styles.heroSubtitleJustify}`}>
                                Baseline capability. Reveal gaps. Act with confidence.
                            </p>
                            <p className="heroText">
                                Evidence-based scans that baseline <strong>Strategy</strong>, <strong>Culture</strong>, <strong>Process</strong>, and <strong>Results</strong> — then convert gaps into a
                                clear <strong>30/60/90-day plan</strong>. Built on MicroCanvas® 2.1 and IMM®; privacy-first by design.
                            </p>
                            <div className="heroCtas">
                                <Link className="buttonPrimary" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.hero.clarityscan">
                                    Start with ClarityScan®
                                </Link>
                                <Link className="buttonSecondary" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.hero.contact">
                                    Talk to us
                                </Link>
                            </div>
                        </div>

                        <div className={styles.heroMedia}>
                            <picture>
                                <source srcSet="/img/diagnostics-hero.avif" type="image/avif" />
                                <source srcSet="/img/diagnostics-hero.webp" type="image/webp" />
                                <img loading="lazy"
                                    src="/img/diagnostics-hero.png"
                                    alt="Diagnostics - evidence-based innovation and foresight scans"
                                    className="heroImage"
                                    decoding="async"
                                    width="600"
                                    height="400"
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* What we offer */}
                <section className="section" aria-labelledby="diagnostics-offer-title">
                    <h2 id="diagnostics-offer-title">What we offer</h2>
                    <p className={`lead ${styles.leadMax}`}>
                        Three lightweight, privacy-first scans tailored to where you are — each producing a focused brief and a
                        <strong> 30/60/90-day action plan</strong>.
                    </p>

                    <div className="cardGrid">
                        {/* ClarityScan */}
                        <article className="card" aria-labelledby="scan-clarity-title">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-clarity-title">ClarityScan® — Innovation Maturity</h3>
                            <p>Rapid baseline across Strategy, Culture, Process, Results with prioritized next moves.</p>
                            <ul>
                                <li><strong>What we assess:</strong> strategy clarity &amp; OKRs; culture &amp; incentives; delivery cadence; results &amp; measurement.</li>
                                <li><strong>Session:</strong> ≤ 30 minutes</li>
                            </ul>
                            <div className={`cardFooter ${styles.cardFooterRow}`}>
                                <Link className="cardCta" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.offer.clarityscan">
                                    Run ClarityScan® →
                                </Link>
                                <Link className="cardCta" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.offer.clarityscan.book_online" aria-label="Book a ClarityScan online via Stripe Checkout" target="_blank" rel="noopener noreferrer">
                                    Book online →
                                </Link>
                            </div>
                        </article>

                        {/* Foresight Readiness */}
                        <article className="card" aria-labelledby="scan-foresight-title">
                            <Binoculars className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-foresight-title">Foresight Readiness Scan</h3>
                            <p>Integrate signals, sense-making, and implications → options into planning and risk.</p>
                            <ul>
                                <li><strong>What we assess:</strong> signals &amp; horizon scanning; sense-making; implications; options; OKR/risk integration.</li>
                                <li><strong>Session:</strong> ≤ 60 minutes</li>
                            </ul>
                            <div className="cardFooter">
                                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.offer.foresight">
                                    Enquire →
                                </Link>
                            </div>
                        </article>

                        {/* Operating Model */}
                        <article className="card" aria-labelledby="scan-operating-title">
                            <Settings2 className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-operating-title">Innovation Operating Model Checkup</h3>
                            <p>Governance, roles, decision cadence, and metrics to make delivery reliable and scalable.</p>
                            <ul>
                                <li><strong>What we assess:</strong> governance &amp; gates; ownership; cadence; metrics &amp; reporting.</li>
                                <li><strong>Session:</strong> ≤ 60 minutes</li>
                            </ul>
                            <div className="cardFooter">
                                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.offer.operating_model">
                                    Enquire →
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* Selection helper */}
                    <div className={`lead ${styles.leadTop}`}>
                        <strong>Which scan fits?</strong> <br />
                        • Just need a fast maturity read? <em>ClarityScan®</em>. &nbsp;• Want to embed foresight? <em>Foresight Readiness</em>. &nbsp;• Delivery feels slow or unclear? <em>Operating Model Checkup</em>.
                    </div>
                </section>

                {/* How it works */}
                <section className="section" aria-labelledby="diagnostics-how-title">
                    <h2 id="diagnostics-how-title">How it works</h2>
                    <div className="cardGrid">
                        <article className="card" aria-label="Intake & context">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3>1) Intake &amp; context</h3>
                            <p>Short pre-read on goals, constraints, OKRs/roadmaps/metrics (keep it lightweight).</p>
                        </article>
                        <article className="card" aria-label="Live session">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3>2) Live session (≤30–60m)</h3>
                            <p><em>ClarityScan® Core</em> ~30m; <em>Foresight</em> &amp; <em>Operating Model</em> up to 60m.</p>
                        </article>
                        <article className="card" aria-label="Findings brief">
                            <FileText className="cardIcon" aria-hidden="true" />
                            <h3>3) Findings brief</h3>
                            <p>Maturity snapshot, gaps, and a sequenced <strong>30/60/90-day plan</strong>.</p>
                        </article>
                        <article className="card" aria-label="Options">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3>4) Options</h3>
                            <p>DIY, Doulab support, or a hybrid — you choose the cadence and depth.</p>
                        </article>
                    </div>
                </section>

                {/* What you’ll get */}
                <section className="section" aria-labelledby="diagnostics-outcomes-title">
                    <h2 id="diagnostics-outcomes-title">What you’ll get</h2>
                    <div className="cardGrid">
                        <article className="card" aria-label="Evidence & clarity">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3>Evidence &amp; clarity</h3>
                            <p>Baseline across Strategy/Culture/Process/Results or foresight readiness — not opinions.</p>
                        </article>
                        <article className="card" aria-label="Actionable plan">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3>Actionable plan</h3>
                            <p>Prioritized actions with owners, simple metrics, and a pragmatic cadence.</p>
                        </article>
                        <article className="card" aria-label="Reusable artifacts">
                            <FileText className="cardIcon" aria-hidden="true" />
                            <h3>Reusable artifacts</h3>
                            <p>Concise brief you can share; aligned with MicroCanvas® 2.1 and IMM® terminology.</p>
                        </article>
                    </div>
                    <p className={`lead ${styles.leadTop}`}>
                        Want to preview the format? <Link to="https://booking.doulab.net/briefing" data-cta="cta.diagnostics.sample_brief">Ask for a sample findings brief</Link>.
                    </p>
                </section>

                {/* FAQ */}
                <section className="section" aria-labelledby="diagnostics-faq-title">
                    <h2 id="diagnostics-faq-title">FAQ</h2>
                    <div className="faqGrid">
                        <details>
                            <summary>How fast can we run it?</summary>
                            <p>We can usually schedule within a few days. ClarityScan® Core is ~30 minutes; other scans are up to 60 minutes.</p>
                        </details>
                        <details>
                            <summary>Who should attend?</summary>
                            <p>A sponsor plus 2–4 cross-functional leaders (e.g., product, ops, delivery) works well.</p>
                        </details>
                        <details>
                            <summary>What should we prepare?</summary>
                            <p>Goals, constraints, and any relevant OKRs/roadmaps/metrics. We’ll keep it lightweight.</p>
                        </details>
                    </div>
                </section>

                {/* Final CTA + data handling */}
                <section className="section" aria-labelledby="diagnostics-cta-title">
                    <div className="finalCta">
                        <h2 id="diagnostics-cta-title">Ready to get a clear read?</h2>
                        <p>
                            Run a diagnostic and get your maturity snapshot plus the exact next steps to take. <br />
                            <strong>Data handling:</strong> we only use information you provide for the diagnostic. No third-party trackers.
                            See our Privacy page for details.
                        </p>
                        <div className={`heroCtas ${styles.ctaCenter}`}>
                            <Link
                                className="buttonPrimary"
                                href={CLARITYSCAN_CHECKOUT_URL}
                                data-cta="cta.diagnostics.final.clarityscan"
                            >
                                Start ClarityScan®
                            </Link>
                            <Link className="buttonSecondary" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.final.contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Trademark footnote */}
                <section className="section" aria-hidden="true">
                    <p className={styles.noteCenter}>
                        MicroCanvas® and IMM® are registered marks. ClarityScan® is a Doulab service mark.
                    </p>
                </section>
            </main>
        </Layout>
    );
}



