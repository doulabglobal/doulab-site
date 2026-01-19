// src/pages/work-with-us/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Search from 'lucide-react/dist/esm/icons/search';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Users from 'lucide-react/dist/esm/icons/users';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Radar from 'lucide-react/dist/esm/icons/radar';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import Hero from '../../components/Hero';
import type { JSX } from 'react';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';


export default function WorkWithUsPage(): JSX.Element {
    return (
        <Layout
            title="Work with Doulab"
            description="Practical ways to start—diagnose, align, and build capability so strategy turns into sustained results."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/work-with-us" />
                <meta property="og:title" content="Work with Doulab" />
                <meta property="og:description" content="Practical ways to start—diagnose, align, and build capability so strategy turns into sustained results." />
                <meta property="og:image" content="https://doulab.net/img/docusaurus-social-card.jpg" />
                <meta property="og:image:alt" content="Doulab — Work with us" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="author" content="Luis Santiago Arias" />
                {/* LCP: hero image preload with next-gen sources */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/work-with-us-hero.png"
                    imageSrcSet="/img/work-with-us-hero.avif 1x, /img/work-with-us-hero.webp 1x, /img/work-with-us-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />

                {/* FAQPage schema (SEO) */}
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'How fast can we start?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Diagnostics can start within days. Workshops schedule within 1–2 weeks.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Remote or in-person?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Both. We use collaborative canvases remotely and structured templates on-site.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Typical engagement length?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Diagnostics: 1–2 weeks. Workshops: half or full day (+light prep). Programs/coaching: 6–12+ weeks.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Pricing?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope.',
                                    },
                                },
                            ],
                        }),
                    }}
                />
            </Head>

            <main>
                <Hero
                    title="Work with Doulab"
                    subtitle="Practical ways to start — diagnose, align, and build capability."
                    body={"Start small or go deeper. We make innovation repeatable and foresight practical — so strategy turns into sustained results."}
                    imageBase="/img/work-with-us-hero"
                    imageAlt="Work with Doulab"
                    width={600}
                    height={400}
                    primaryCta={{ to: '/services/clarityscan', label: 'Explore ClarityScan', dataCta: 'cta.wwu.hero.explore_clarityscan' }}
                    secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.wwu.hero.book_clarityscan_online', external: true, ariaLabel: 'Book a ClarityScan online via Stripe Checkout' }}
                    ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
                    id="wwu-hero"
                    ariaLabelledbyId="wwu-hero-title"
                />
                {/* Hero */}
                

                {/* 3 ways to start */}
                <section id="start" className="section" aria-labelledby="wwu-start-title">
                    <h2 id="wwu-start-title">Three ways to start, based on your goal</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="wwu-card-clarity">
                            <Search className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-clarity">ClarityScan® Diagnostic</h3>
                            <p>
                                Baseline capability in <strong>days</strong>, surface the gaps that move the needle, and leave with a
                                prioritized action snapshot.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="/services/clarityscan"
                                    className="cardCta"
                                    data-cta="wwu_start_clarityscan"
                                    data-section="wwu"
                                    data-step="cards"
                                    aria-label="Run a ClarityScan diagnostic"
                                >
                                    Run a diagnostic →
                                </Link>
                                <Link
                                    href={CLARITYSCAN_CHECKOUT_URL}
                                    className="cardCta"
                                    data-cta="wwu_start_clarityscan_book_online"
                                    aria-label="Book a ClarityScan online"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book online →
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="wwu-card-workshop">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-workshop">Custom Workshop</h3>
                            <p>
                                In <strong>half- or full-day</strong> sessions, align decisions and leave with a <strong>30–60–90</strong> you can execute.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="/services/custom-workshops"
                                    className="cardCta"
                                    data-cta="wwu_start_workshop"
                                    data-section="wwu"
                                    data-step="cards"
                                    aria-label="Start a custom workshop sprint"
                                >
                                    Start a workshop sprint →
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="wwu-card-call">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-call">Discovery Call</h3>
                            <p>
                                Share goals and constraints; we’ll point you to the fastest path—diagnostic, workshop, program, or coaching.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="https://booking.doulab.net/discovery"
                                    className="cardCta"
                                    data-cta="wwu_start_call"
                                    data-section="wwu"
                                    data-step="cards"
                                    aria-label="Book a discovery call"
                                >
                                    Book a call →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* How we work (process rail) */}
                <section id="process" className="section" aria-labelledby="wwu-process-title">
                    <h2 id="wwu-process-title">How we work (lightweight & outcome-driven)</h2>
                    <p className="sectionLead">
                        Lightweight, phased, and outcome-driven. We meet you where you are and build momentum quickly.
                    </p>

                    <ol className="processRail">
                        <li className="processStep">
                            <Target className="stepIcon" aria-hidden="true" />
                            <h4>1) Map &amp; Prioritize</h4>
                            <p>Use ClarityScan® to assess capability, find gaps, and focus where impact is highest.</p>
                            <p className="microcopy">Evidence: baseline score + top&nbsp;3 capability gaps.</p>
                        </li>
                        <li className="processStep">
                            <Lightbulb className="stepIcon" aria-hidden="true" />
                            <h4>2) Align &amp; Decide</h4>
                            <p>Run a workshop to resolve tensions, choose options, and agree on next moves.</p>
                            <p className="microcopy">Gate: option chosen, owners, 30–60–90.</p>
                        </li>
                        <li className="processStep">
                            <Layers className="stepIcon" aria-hidden="true" />
                            <h4>3) Build Capability</h4>
                            <p>Deploy programs and coaching to install culture, process, and measurement.</p>
                            <p className="microcopy">Gate: practice installed; cadence + metrics live.</p>
                        </li>
                        <li className="processStep">
                            <Radar className="stepIcon" aria-hidden="true" />
                            <h4>4) Anticipate Futures</h4>
                            <p>Use Vigía Futura to track signals, stress-test strategy, and stay future-ready.</p>
                            <p className="microcopy">Evidence: risks/options logged; next review date.</p>
                        </li>
                    </ol>
                </section>

                {/* Proof */}
                <section id="results" className="section" aria-labelledby="wwu-proof-title">
                    <h2 id="wwu-proof-title">Results we’ve helped deliver</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="wwu-proof-siembra">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-siembra">AFP Siembra</h3>
                            <p>
                                From experiments to outcomes: Alcanza product design + SILAB launch coordination; IMM-guided coaching over
                                <strong> 2.5 years</strong>.
                            </p>
                        </article>
                        <article className="card" aria-labelledby="wwu-proof-alpha">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-alpha">Alpha Inversiones</h3>
                            <p>
                                Established innovation process and mentored Alpha Escalable; foundations supported the new
                                <strong> Alpha en Línea</strong> launch.
                            </p>
                        </article>
                        <article className="card" aria-labelledby="wwu-proof-public">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-public">FUNDAPEC &amp; OGTIC</h3>
                            <p>
                                Built a community platform with FUNDAPEC; with OGTIC, adapted MCF/IMM to scale labs and public-sector ecosystems.
                            </p>
                        </article>
                    </div>

                    <div className="proofStrip" aria-label="Organizations we’ve supported">
                        <img src="/img/afpsiembra.png" alt="AFP Siembra" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/OGTIC_horizontal_fullcolor.png" alt="OGTIC" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/alpha.png" alt="Alpha Inversiones" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/fundapec.png" alt="FUNDAPEC" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/runway.png" alt="Runway Innovation Hub" width={160} height={48} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* Who we work with */}
                <section id="fit" className="section" aria-labelledby="wwu-fit-title">
                    <h2 id="wwu-fit-title">Who we’re best for</h2>
                    <p className="sectionLead">
                        Public institutions, regulated finance, education, scale-ups, and ecosystems where evidence and outcomes matter.
                    </p>
                    <ul className="chips">
                        <li>Public sector</li>
                        <li>Financial services</li>
                        <li>Education &amp; workforce</li>
                        <li>Scale-ups &amp; startups</li>
                        <li>Incubators &amp; accelerators</li>
                    </ul>
                    <p className={`microcopy ${'pages-work-with-us-work-with-us__microcopyTight'}`}>
                        New to us? See our Programs and Coaching &amp; mentoring on the{' '}
                        <Link to="/what-we-do">What we do</Link> page.
                    </p>
                </section>

                {/* FAQ */}
                <section id="faq" className="section" aria-labelledby="wwu-faq-title">
                    <h2 id="wwu-faq-title">FAQ</h2>
                    <div className="faqGrid">
                        <details>
                            <summary>How fast can we start?</summary>
                            <p>Diagnostics can start within days. Workshops typically schedule within 1–2 weeks.</p>
                        </details>
                        <details>
                            <summary>Remote or in-person?</summary>
                            <p>Both. We use collaborative canvases remotely and structured templates on-site.</p>
                        </details>
                        <details>
                            <summary>Typical engagement length?</summary>
                            <p>Diagnostics: 1–2 weeks. Workshops: half or full day (+light prep). Programs/coaching: 6–12+ weeks.</p>
                        </details>
                        <details>
                            <summary>Pricing?</summary>
                            <p>Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope.</p>
                        </details>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section id="get-started" className="section" aria-labelledby="wwu-cta-title">
                    <div className="finalCta">
                        <h2 id="wwu-cta-title">Ready to move from plans to repeatable delivery?</h2>
                        <p>Start with ClarityScan® or book a discovery call. We’ll co-create the path from insight to results.</p>
                        <div className={`heroCtas ${'pages-work-with-us-work-with-us__centeredCtas'}`}>
                            <Link
                                to="/services/clarityscan"
                                className="buttonPrimary"
                                data-cta="wwu_footer_clarityscan"
                                data-section="wwu"
                                data-step="final"
                                aria-label="Start with a ClarityScan diagnostic"
                            >
                                Start with ClarityScan®
                            </Link>
                            <Link
                                to="https://booking.doulab.net/discovery"
                                className="buttonSecondary"
                                data-cta="wwu_footer_contact"
                                data-section="wwu"
                                data-step="final"
                                aria-label="Talk to us"
                            >
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}



