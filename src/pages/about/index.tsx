import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import { Target, Lightbulb, Layers, Users, Globe } from 'lucide-react';
import aboutHero from '@site/static/img/about.png';

export default function AboutPage() {
    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Doulab',
        url: 'https://doulab.net',
        logo: '/img/doulab.png',
        sameAs: ['https://www.linkedin.com/company/doulab'],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is the MicroCanvas® Framework (MCF)?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'MCF is a modular, easy-to-use set of canvases that guide teams through discovery, design, and delivery so innovation becomes repeatable.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the Innovation Maturity Model (IMM)®?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'IMM is a structured way to assess and improve an organization’s innovation capability across strategy, culture, process, and results.',
                },
            },
            {
                '@type': 'Question',
                name: 'How does an engagement with Doulab start?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Typically with a quick diagnostic or discovery call. We map goals, constraints, and outcomes, then suggest a path—workshop, program, or coaching.',
                },
            },
        ],
    };

    return (
        <Layout title="About Doulab" description="Discover Doulab's vision, purpose, and service model.">
            {/* SEO: JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroBanner} aria-labelledby="about-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 400px', paddingRight: '2rem' }}>
                            <h1 id="about-hero-title" className={styles.heroTitle}>About Doulab</h1>
                            <p className={styles.heroSubtitle} style={{ textAlign: 'justify' }}>
                                Our purpose is to help unlock global prosperity by helping others create better futures.
                            </p>
                            <p className={styles.heroText}>
                                We believe in a future where abundance is the standard for everyone.
                            </p>

                            {/* Hero CTAs */}
                            <div className={styles.heroCtas}>
                                <Link to="/contact" className={styles.buttonPrimary} data-cta="hero_discovery_call" aria-label="Book a discovery call">
                                    Book a discovery call
                                </Link>
                                <Link to="/case-studies" className={styles.buttonSecondary} data-cta="hero_case_studies" aria-label="See case studies">
                                    See case studies
                                </Link>
                            </div>

                            {/* In-page nav */}
                            <nav className={styles.subnav} aria-label="About page sections">
                                <a href="#our-story">Our Story</a>
                                <a href="#service-pillars">Our service pillars</a>
                                <a href="#ecosystem-building">Ecosystem Building</a>
                            </nav>
                        </div>

                        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <img src={aboutHero} alt="About Doulab" className={styles.heroImage} loading="eager" fetchPriority="high" />
                        </div>
                    </div>
                </section>

                {/* Our Story / Timeline */}
                <section className={styles.section} id="our-story" aria-labelledby="our-story-title">
                    <h2 id="our-story-title">Our Story</h2>
                    <p className={styles.sectionLead}>
                        We started Doulab to answer a simple yet difficult to answer question: <em>why are entrepreneurship and innovation so hard to do consistently—and how can we make a
                            practical recipe for repeatable, sustainable, and scalable innovation in any context?</em>
                    </p>
                    <p className={styles.sectionLead}>
                        That quest gave birth to the MicroCanvas® Framework (MCF), a modular set of canvases that guide teams end‑to‑end, and the Innovation Maturity Model (IMM)®, a structured way to measure and improve innovation capability. Today, we’re expanding that vision with Vigía Futura.
                    </p>

                    <div className={styles.timeline} role="list">
                        {/* 2018 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2018</div>
                            <div className={styles.timelineContent}>
                                <h3>Origins at INFORMATIK</h3>
                                <p>
                                    Initial experiments in structured innovation mentoring and coaching; early prototypes of what became MicroCanvas® during Singularity University’s 2018
                                    Incubator and 2019 Global Startup Program (GSP).
                                </p>
                                <p className={styles.microcopy}><em>During this time we built the first canvas drafts and tested them with 47 early‑stage startups in Silicon Valley during 2018's Singularity University Fall Incubator.</em></p>
                                <ul className={styles.tags}><li>Customer Work</li><li>MCF – early</li></ul>
                            </div>
                        </div>

                        {/* 2019 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2019</div>
                            <div className={styles.timelineContent}>
                                <h3>MicroCanvas® Authoring Starts</h3>
                                <p>We formalized the open‑source microcanvas approach; after 2019’s GSP, we iterated with startups in the Dominican Republic.</p>
                                <p className={styles.microcopy}><em>This time was exciting. We started to see initial evidence our approach was effective and more effective than other innovation models.</em></p>
                                <ul className={styles.tags}><li>MCF</li><li>Research</li></ul>
                            </div>
                        </div>

                        {/* 2020–2021 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2020–2021</div>
                            <div className={styles.timelineContent}>
                                <h3>Spin‑Out & First Flagship</h3>
                                <p>
                                    Doulab becomes independent from INFORMATIK. Before the pandemic, we tested and iterated with DR startups (Caudall, C‑VEN, Data2Go, Aló Salú → DoCath Care). During the COVID-19 pandemic (2021) we launched our first corporate engagement with <strong>AFP Siembra</strong>, one of the biggest pension funds in Dominican Republic.
                                </p>
                                <p className={styles.microcopy}>
                                    2021–2023: guided the design and refinement of <strong>Alcanza</strong>, a digital savings product with coaching & mentoring via IMM (2.5 years).
                                    2023–2024: co‑designed & coordinated the launch of <strong>SIEMBRA INNOVATION LAB (SILAB)</strong> (1 year).
                                    <Link to="https://afpsiembra.com" target="_blank" rel="noopener noreferrer" aria-label="Visit afpsiembra.com (opens in a new tab)"> afpsiembra.com</Link> ·{' '}
                                    <Link to="https://alcanza.com.do" target="_blank" rel="noopener noreferrer" aria-label="Visit alcanza.com.do (opens in a new tab)">alcanza.com.do</Link>
                                </p>
                                <p className={styles.plainLine}>In Plain English: <em>we helped a major financial institution build and launch real products and a working innovation lab.</em></p>
                                <ul className={styles.tags}><li>Customer Work</li><li>MCF</li><li>Research</li></ul>
                            </div>
                        </div>

                        {/* 2022 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2022</div>
                            <div className={styles.timelineContent}>
                                <h3>Global Mentoring & Community</h3>
                                <p>Mentor at Runway Innovation Hub; validated MCF with founders across stages.</p>
                                <p className={styles.microcopy}>
                                    Mentored the <strong>Gleap.io</strong> team as they began their US scaling phase.{' '}
                                    <Link to="https://gleap.io" target="_blank" rel="noopener noreferrer" aria-label="Visit gleap.io (opens in a new tab)">gleap.io</Link>
                                </p>
                                <ul className={styles.tags}><li>MCF</li><li>Community</li></ul>
                            </div>
                        </div>

                        {/* 2023 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2023</div>
                            <div className={styles.timelineContent}>
                                <h3>From Coaching to Innovation Maturity</h3>
                                <p>
                                    <strong>Alpha Inversiones</strong>: established the innovation process and mentored the transformation project <em>Alpha Escalable</em> to lay culture, process, and technology foundations for scaling. This groundwork supported the launch of the new Alpha en Línea, their customer-facing digital product in both mobile and web versions.
                                    <Link to="https://alpha.com.do" target="_blank" rel="noopener noreferrer" aria-label="Visit alpha.com.do (opens in a new tab)"> alpha.com.do</Link>
                                </p>
                                <ul className={styles.tags}><li>Customer Work</li><li>MCF</li><li>IMM</li><li>Diagnostics</li></ul>
                            </div>
                        </div>

                        {/* 2023–2024 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2023–2024</div>
                            <div className={styles.timelineContent}>
                                <h3>FUNDAPEC</h3>
                                <p>
                                    Strategic guidance for new business models (2 months) and a 1‑year collaboration to co‑develop and launch the <em>Comunidad FUNDAPEC</em> alumni platform.
                                    <Link to="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer" aria-label="Visit comunidad.fundapec.edu.do (opens in a new tab)"> comunidad.fundapec.edu.do</Link>
                                </p>
                                <p className={styles.plainLine}>Plain English: we helped create a community platform that deepens engagement and unlocks new value.</p>
                                <ul className={styles.tags}><li>Customer Work</li><li>Programs</li></ul>
                            </div>
                        </div>

                        {/* 2024 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3>Public Sector Capacity Building (OGTIC)</h3>
                                <p>
                                    Guided discovery and validation for REDLAB, helping co‑create <strong>7 innovation labs</strong>; delivered <strong>~2–4 sessions/week for 12 months</strong>. Adapted MCF & IMM for RedLab; contributed to the vision for the <em>Red de Incubadoras Público‑Privadas</em>.
                                    This work refined MCF to version 2.1 and completed IMM build‑out. The program is expected to support <strong>25 government institutions/year</strong> from 2025.
                                </p>
                                <p className={styles.plainLine}>Plain English: we scaled innovation capability across government—at speed.</p>
                                <ul className={styles.tags}><li>Customer Work</li><li>Ecosystem Building</li><li>MCF</li><li>IMM</li></ul>
                            </div>
                        </div>

                        {/* 2024–2025 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2024–2025</div>
                            <div className={styles.timelineContent}>
                                <h3>Red de Incubadoras Público‑Privadas</h3>
                                <p>
                                    Concept developed in 2024; initial launch in 2025 with a target to help create <strong>25+ startups/year</strong> via aligned standards and shared services.
                                </p>
                                <p>
                                    In early 2025 we began collaborating on the <em>Ciudadanía/Taína</em> AI project—a digital public infrastructure initiative starting with an AI agent for
                                    answering citizen questions about government services. Future versions aim to orchestrate full service delivery.
                                </p>
                                <p className={styles.plainLine}>Plain English: we’re wiring the ecosystem so ideas become real companies—and public services feel modern.</p>
                                <ul className={styles.tags}><li>Public‑Private</li><li>Ecosystems</li></ul>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className={styles.timelineItem} role="listitem">
                            <div className={styles.timelineYear}>2025</div>
                            <div className={styles.timelineContent}>
                                <h3>Vigía Futura (Launch: Aug 2025)</h3>
                                <p>A foresight observatory to build future‑ready capacity, actionable trend intelligence, experimental governance, and inclusive futures.</p>
                                <ul className={styles.tags}><li>Foresight</li><li>Indices</li><li>Programs</li></ul>
                                <ul className={styles.bullets}>
                                    <li><strong>SO1:</strong> Train 1,000+ leaders; embed foresight in 10+ strategies; publish a <em>Foresight Maturity Index</em> (≥8 countries/sectors).</li>
                                    <li><strong>SO2:</strong> Live foresight radar (quarterly updates); 250+ org briefings; 3 thematic clusters (AI governance, climate futures, digital trust).</li>
                                    <li><strong>SO3:</strong> 5+ experimental policy labs; 5+ co‑funders/sponsors; 3 public use cases/toolkits on anticipatory governance.</li>
                                    <li><strong>SO4:</strong> Engage 100+ civic actors/youth; launch an open‑access futures literacy platform; partner with 3+ universities.</li>
                                </ul>
                                <p className={styles.plainLine}>Plain English: give leaders a radar for what’s next—and a playbook to act on it.</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <aside className={styles.testimonial} aria-label="Client testimonial">
                        <blockquote>
                            “Doulab helped us turn strategy into action. We moved from ideas to repeatable delivery—and built momentum across teams.”
                        </blockquote>
                        <div className={styles.testimonialMeta}>
                            <span className={styles.testimonialName}>[Name, Title]</span>
                            <span className={styles.testimonialOrg}>[Organization] — <em>[Replace with real quote]</em></span>
                        </div>
                    </aside>

                    {/* Proof/logo strip */}
                    <div className={styles.proofStrip} aria-label="Organizations we’ve supported">
                        <img src="/img/afpsiembra.png" alt="AFP Siembra" width={160} height={48} loading="lazy" />
                        <img src="/img/OGTIC_horizontal_fullcolor.png" alt="OGTIC" width={160} height={48} loading="lazy" />
                        <img src="/img/alpha.png" alt="Alpha Inversiones" width={160} height={48} loading="lazy" />
                        <img src="/img/fundapec.png" alt="FUNDAPEC" width={160} height={48} loading="lazy" />
                        <img src="/img/runway.png" alt="Runway Innovation Hub" width={160} height={48} loading="lazy" />
                    </div>
                </section>

                {/* Our Service Pillars (balanced copy + equal-height cards) */}
                <section className={styles.section} id="service-pillars" aria-labelledby="service-pillars-title">
                    <h2 id="service-pillars-title">Our Service Pillars</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} aria-hidden="true" />
                            <h3>Diagnostics: Know Where You Stand</h3>
                            <p>Quickly map innovation maturity and pinpoint capability gaps with evidence‑based tools like ClarityScan®.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/clarityscan" className={styles.cardCta} data-cta="services_diagnostics" aria-label="Explore ClarityScan®">
                                    Explore ClarityScan® →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Lightbulb className={styles.cardIcon} aria-hidden="true" />
                            <h3>Workshops: Spark Aligned Action</h3>
                            <p>Focused, outcome‑driven sessions that align teams, unlock decisions, and turn strategy into practical next steps.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/custom-workshops" className={styles.cardCta} data-cta="services_workshops" aria-label="Explore custom workshops">
                                    Explore custom workshops →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} aria-hidden="true" />
                            <h3>Programs: Build Innovation Capacity</h3>
                            <p>Structured journeys—like IMM‑P—that install culture, process, and metrics to scale innovation reliably.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/innovation-maturity" className={styles.cardCta} data-cta="services_programs" aria-label="Explore IMM-P®">
                                    Explore IMM‑P® →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Users className={styles.cardIcon} aria-hidden="true" />
                            <h3>Coaching & Mentoring: Personalized Guidance</h3>
                            <p>Targeted 1:1 or group support to remove blockers, sustain momentum, and build internal capability.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/services/coaching-mentoring" className={styles.cardCta} data-cta="services_coaching" aria-label="Explore coaching & mentoring">
                                    Explore 1:1 coaching & mentoring →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Globe className={styles.cardIcon} aria-hidden="true" />
                            <h3>Future Studies: Anticipate & Shape Tomorrow</h3>
                            <p>Foresight research and training that spot trends, assess risks, and inform resilient strategic choices.</p>
                            <div className={styles.cardFooter}>
                                <Link to="/vigia-futura/" className={styles.cardCta} data-cta="services_future_studies" aria-label="Explore future studies">
                                    Explore future studies with Vigia Futura® →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ecosystem Building */}
                <section className={styles.section} id="ecosystem-building" aria-labelledby="ecosystem-building-title">
                    <h2 id="ecosystem-building-title">Ecosystem Building</h2>
                    <p>We design and launch innovation ecosystems that connect talent, capital, and ideas. Below are featured ecosystems we support and develop.</p>

                    {/* Customer: OGTIC */}
                    <div className={styles.customerBlock} role="group" aria-labelledby="ogtic-title">
                        <div className={styles.customerHeader}>
                            <img
                                src={'/img/OGTIC_horizontal_fullcolor.png'}
                                alt="OGTIC"
                                className={styles.customerLogo}
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                loading="lazy" width={320} height={120}
                            />
                            <div>
                                <h3 id="ogtic-title" className={styles.customerTitle}>OGTIC – Public Innovation Ecosystems</h3>
                                <p className={styles.customerIntro}>
                                    With the Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC), we help design and coordinate national innovation ecosystems that strengthen institutional capabilities and accelerate public‑private collaboration.
                                </p>
                            </div>
                        </div>

                        <div className={styles.cardGrid}>
                            {/* RedLab */}
                            <div className={styles.card}>
                                <img src={'/img/redlab.png'} alt="Red de Laboratorios de Innovación (RedLab)" className={styles.cardLogo} loading="lazy" width={300} height={120} />
                                <h3>Red de Laboratorios de Innovación (RedLab)</h3>
                                <p>A national network to accelerate innovation capabilities across public institutions through shared methods, capacity building, and collaborative pilots.</p>
                                <div className={styles.cardFooter}>
                                    <Link to="/ecosystems/redlab" className={styles.cardCta} data-cta="ecosystem_redlab" aria-label="Visit RedLab">
                                        Visit RedLab →
                                    </Link>
                                </div>
                            </div>

                            {/* Red de Incubadoras Público‑Privadas */}
                            <div className={styles.card}>
                                <img src={'/img/OGTIC_horizontal_fullcolor.png'} alt="Red de Incubadoras Público‑Privadas" className={styles.cardLogo} loading="lazy" width={300} height={120} />
                                <h3>Red de Incubadoras Público‑Privadas</h3>
                                <p>A coordinated incubator network aligning universities, government, and the private sector to scale startups with shared standards and services.</p>
                                <div className={styles.cardFooter}>
                                    <Link to="/ecosystems/red-incubadoras" className={styles.cardCta} data-cta="ecosystem_red_incubadoras" aria-label="Explore the Red de Incubadoras Público‑Privadas ecosystem">
                                        Explore the network →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Doulab-owned ecosystems */}
                    <div className={styles.customerBlock} role="group" aria-labelledby="doulab-ecosystems-title">
                        <div className={styles.customerHeader}>
                            <img src={'/img/doulab.png'} alt="Doulab" className={styles.customerLogo} loading="lazy" width={320} height={120} />
                            <div>
                                <h3 id="doulab-ecosystems-title" className={styles.customerTitle}>Doulab – Proprietary Ecosystems</h3>
                                <p className={styles.customerIntro}>
                                    Independent initiatives we build and steward to advance foresight, capability maturation, and evidence‑based innovation.
                                </p>
                            </div>
                        </div>

                        <div className={styles.cardGrid}>
                            <div className={styles.card}>
                                <img src={'/img/vigia-futura.png'} alt="Vigía Futura" className={styles.cardLogo} loading="lazy" width={300} height={120} />
                                <h3>Vigía Futura</h3>
                                <p>A strategic foresight observatory and emerging ecosystem focused on futures research, early‑warning signals, and policy/venture readiness.</p>
                                <div className={styles.cardFooter}>
                                    <Link to="/vigia-futura" className={styles.cardCta} data-cta="ecosystem_vigia_futura" aria-label="Discover Vigía Futura">
                                        Discover Vigía Futura →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ + Micro‑glossary */}
                <section className={styles.section} aria-labelledby="faq-title">
                    <h2 id="faq-title">FAQ</h2>
                    <div className={styles.faqGrid}>
                        <details>
                            <summary>What is the MicroCanvas® Framework (MCF)?</summary>
                            <p>MCF is a modular, easy‑to‑use set of canvases that guide teams through discovery, design, and delivery so innovation becomes repeatable.</p>
                        </details>
                        <details>
                            <summary>What is the Innovation Maturity Model (IMM)®?</summary>
                            <p>IMM is a structured way to assess and improve an organization’s innovation capability across strategy, culture, process, and results.</p>
                        </details>
                        <details>
                            <summary>How does an engagement with Doulab start?</summary>
                            <p>Typically with a quick diagnostic or discovery call. We map goals and constraints, then suggest a path—workshop, program, or coaching.</p>
                        </details>
                    </div>

                    <div className={styles.glossary}>
                        <h3>Micro‑glossary</h3>
                        <dl>
                            <dt>MCF</dt><dd>MicroCanvas® Framework: the practical toolkit that makes innovation repeatable.</dd>
                            <dt>IMM</dt><dd>Innovation Maturity Model: a measurement + improvement model for innovation capability.</dd>
                            <dt>Ecosystem</dt><dd>Networks of institutions, talent, and capital aligned to build and scale innovation.</dd>
                        </dl>
                    </div>
                </section>
                <section className={styles.section} aria-labelledby="cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="cta-title">Ready to make innovation repeatable?</h2>
                        <p>Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co‑create the path forward.</p>
                        <div className={styles.heroCtas} style={{ justifyContent: 'center' }}>
                            <Link to="/services/diagnostics" className={styles.buttonPrimary} data-cta="footer_start_diagnostic">
                                Start with a diagnostic
                            </Link>
                            <Link to="/contact" className={styles.buttonSecondary} data-cta="footer_contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
