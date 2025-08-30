// src/pages/about/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Target, Lightbulb, Layers, Users, Globe } from 'lucide-react';
import type { JSX } from 'react';


export default function AboutPage(): JSX.Element {
    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Doulab',
        url: 'https://doulab.net',
        logo: '/img/doulab.png',
        foundingDate: '2018',
        sameAs: [
            'https://www.linkedin.com/company/doulab',
            'https://github.com/doulabglobal',
            'https://themicrocanvas.com',
        ],
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
                    text: 'A modular set of canvases that makes innovation repeatable—from discovery to delivery.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the Innovation Maturity Model (IMM)®?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'A structured way to assess and improve innovation capability across strategy, culture, process, and results.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do engagements start?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'With a quick discovery call or diagnostic. We map goals and constraints, then recommend a workshop, program, or coaching path.',
                },
            },
        ],
    };

    return (
        <Layout
            title="About — Doulab"
            description="Discover Doulab's vision, story, and service model — innovation made repeatable."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/about" />
                <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                {/* LCP preload for hero image (React camelCase props) */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/about.png"
                    imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="about-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="about-hero-title" className="heroTitle">About Doulab</h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                We help unlock global prosperity by helping others create better futures.
                            </p>
                            <p className="heroText">
                                We make innovation <strong>repeatable</strong> and foresight <strong>practical</strong>—so strategy turns into measurable outcomes.
                            </p>

                            <nav className="subnav" aria-label="About page sections">
                                <a href="#our-story">Our Story</a>
                                <a href="#service-pillars">Our service pillars</a>
                                <a href="#ecosystem-building">Ecosystem Building</a>
                                <a href="#faq">FAQ</a>
                            </nav>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/about.avif" type="image/avif" />
                                <source srcSet="/img/about.webp" type="image/webp" />
                                <img
                                    src="/img/about.png"
                                    alt="About Doulab"
                                    className="heroImage"
                                    loading="eager"
                                    fetchPriority="high"
                                    width={600}
                                    height={400}
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* Our Story — grouped strictly by year */}
                <section className="section" id="our-story" aria-labelledby="our-story-title">
                    <h2 id="our-story-title">Our Story</h2>
                    <p className="sectionLead">
                        We started Doulab to answer a tough question: <em>why are entrepreneurship and innovation so hard to do consistently—and how can we make a practical recipe for repeatable, sustainable, and scalable innovation in any context?</em>
                    </p>
                    <p className="sectionLead">
                        That quest gave birth to the <strong>MicroCanvas® Framework (MCF)</strong> and the <strong>Innovation Maturity Model (IMM®)</strong>. Together they guide teams end-to-end and help leaders measure and steadily improve innovation capability. Today, we extend that work through <strong>Vigía Futura</strong>.
                    </p>

                    {/* 2018 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2018</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2018-origins">
                            <h4 id="y2018-origins">Origins at INFORMATIK</h4>
                            <p>Early experiments in structured innovation mentoring/coaching. First MCF prototypes during SU’s 2018 Incubator.</p>
                            <p><em>In plain English: first canvases tested with 47 startups in Silicon Valley.</em></p>
                        </article>
                    </div>

                    {/* 2019 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2019</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2019-mcf">
                            <h4 id="y2019-mcf">MicroCanvas® authoring starts</h4>
                            <p>We formalized the open-source microcanvas approach and iterated post-GSP with Dominican startups.</p>
                            <p><em>In plain English: a modular, canvas-first method that worked better for real teams.</em></p>
                        </article>
                    </div>

                    {/* 2020 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2020</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2020-spinout">
                            <h4 id="y2020-spinout">Spin-out & early tests</h4>
                            <p>Doulab becomes independent. Pre-pandemic tests with DR startups: Caudall, C-VEN, Data2Go, Aló Salú → DoCath Care.</p>
                            <p><em>In plain English: hardened the method in production with real teams.</em></p>
                        </article>
                    </div>

                    {/* 2021 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2021</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2021-siembra">
                            <h4 id="y2021-siembra">AFP Siembra — corporate engagement begins</h4>
                            <p>Strategy-to-delivery mentoring; set the stage for product incubation and an innovation lab.</p>
                            <p><em>In plain English: from ideas to a working lab and live products.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2021-alcanza">
                            <h4 id="y2021-alcanza">Alcanza (IMM-guided)</h4>
                            <p>Digital savings product with coaching & mentoring; guided through IMM (work continued into 2023).</p>
                            <p><em>In plain English: shipped a real product with measurable outcomes.</em></p>
                        </article>
                    </div>

                    {/* 2022 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2022</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2022-runway">
                            <h4 id="y2022-runway">Runway Innovation Hub — mentoring</h4>
                            <p>Validated MCF across founder stages; mentored <strong>Gleap.io</strong> during US scaling.</p>
                            <p><Link to="https://gleap.io" target="_blank" rel="noopener noreferrer">gleap.io</Link></p>
                            <p><em>In plain English: practical coaching tied to growth.</em></p>
                        </article>
                    </div>

                    {/* 2023 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2023</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2023-alpha">
                            <h4 id="y2023-alpha">Alpha Inversiones — capability build</h4>
                            <p>Set up the innovation process and mentored <em>Alpha Escalable</em>; foundations supporting the new Alpha en Línea.</p>
                            <p><Link to="https://alpha.com.do" target="_blank" rel="noopener noreferrer">alpha.com.do</Link></p>
                            <p><em>In plain English: built the capability to ship reliably—product and portfolio.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2023-fundapec">
                            <h4 id="y2023-fundapec">FUNDAPEC — strategy & platform (start)</h4>
                            <p>Strategy for new business models; groundwork for the <em>Comunidad FUNDAPEC</em> alumni platform.</p>
                            <p><em>In plain English: set the stage for a community that deepens engagement.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2023-silab">
                            <h4 id="y2023-silab">Siembra Innovation Lab (SILAB) — co-design</h4>
                            <p>Co-designed and coordinated SILAB; work continued into 2024.</p>
                            <p><em>In plain English: from initiative to scaled practice.</em></p>
                        </article>
                    </div>

                    {/* 2024 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2024</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2024-redlab">
                            <h4 id="y2024-redlab">OGTIC — RedLab & public capacity</h4>
                            <p>Discovery/validation for RedLab; co-created <strong>7 innovation labs</strong>; adapted MCF & IMM to public context; contributed to the Red de Incubadoras Público-Privadas vision.</p>
                            <p><em>In plain English: scaled innovation capability across government—at speed.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2024-fundapec">
                            <h4 id="y2024-fundapec">FUNDAPEC — community launch</h4>
                            <p>Co-developed and launched the <em>Comunidad FUNDAPEC</em> platform.</p>
                            <p><Link to="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">comunidad.fundapec.edu.do</Link></p>
                            <p><em>In plain English: alumni engagement → new value for learners and the institution.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2024-incubadoras">
                            <h4 id="y2024-incubadoras">Red de Incubadoras Público-Privadas — concept</h4>
                            <p>Concept developed to align universities, government, and the private sector around shared standards and services.</p>
                            <p><em>In plain English: wiring the ecosystem for throughput and quality.</em></p>
                        </article>
                    </div>

                    {/* 2025 */}
                    <h3 style={{ marginTop: '1.5rem' }}>2025</h3>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="y2025-incubadoras-launch">
                            <h4 id="y2025-incubadoras-launch">Red de Incubadoras Público-Privadas — initial launch</h4>
                            <p>Target to help create <strong>25+ startups/year</strong> via shared standards and services.</p>
                            <p><em>In plain English: more startups, consistently, with aligned quality gates.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2025-ciudadania">
                            <h4 id="y2025-ciudadania">Ciudadanía/Taína — public digital infrastructure</h4>
                            <p>AI agent for citizen questions about government services; future versions aim to orchestrate full delivery.</p>
                            <p><em>In plain English: services that feel modern, accessible, and responsive.</em></p>
                        </article>
                        <article className="card" aria-labelledby="y2025-vigia">
                            <h4 id="y2025-vigia">Vigía Futura — launch (Aug 2025)</h4>
                            <p>Foresight observatory for future-ready capacity, trend intelligence, experimental governance, and inclusive futures.</p>
                            <ul>
                                <li><strong>SO1:</strong> 1,000+ leaders trained; foresight in 10+ strategies; publish a Foresight Maturity Index.</li>
                                <li><strong>SO2:</strong> Live radar (quarterly); 250+ briefings; clusters: AI governance, climate futures, digital trust.</li>
                                <li><strong>SO3:</strong> 5+ policy labs; 5+ co-funders/sponsors; 3 public toolkits.</li>
                                <li><strong>SO4:</strong> 100+ civic actors/youth; open futures-literacy platform; 3+ universities.</li>
                            </ul>
                            <p><em>In plain English: a radar for what’s next—and a playbook to act on it.</em></p>
                        </article>
                    </div>

                    {/* Proof logos */}
                    <div className="proofStrip" aria-label="Organizations we’ve supported">
                        <img src="/img/afpsiembra.png" alt="AFP Siembra" width={160} height={48} loading="lazy" />
                        <img src="/img/OGTIC_horizontal_fullcolor.png" alt="OGTIC" width={160} height={48} loading="lazy" />
                        <img src="/img/alpha.png" alt="Alpha Inversiones" width={160} height={48} loading="lazy" />
                        <img src="/img/fundapec.png" alt="FUNDAPEC" width={160} height={48} loading="lazy" />
                        <img src="/img/runway.png" alt="Runway Innovation Hub" width={160} height={48} loading="lazy" />
                    </div>
                </section>

                {/* Our Service Pillars */}
                <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
                    <h2 id="service-pillars-title">Our Service Pillars</h2>
                    <div className="cardGrid">
                        <article className="card">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3>Diagnostics: Know where you stand</h3>
                            <p>Quick baselines of innovation maturity; pinpoint gaps with evidence-based tools like ClarityScan®.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.diagnostics">Explore diagnostics →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3>Workshops: Spark aligned action</h3>
                            <p>Focused sessions that unlock decisions and translate strategy into practical next steps.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.workshops">Explore workshops →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3>Programs: Build innovation capacity</h3>
                            <p>Structured journeys—like IMM-P—that install culture, process, and metrics to scale reliably.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.programs">Explore programs →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3>Coaching &amp; mentoring: Personalized guidance</h3>
                            <p>Targeted 1:1 or group support to remove blockers and build internal capability.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.coaching">Explore coaching &amp; mentoring →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Globe className="cardIcon" aria-hidden="true" />
                            <h3>Future studies: Anticipate &amp; shape tomorrow</h3>
                            <p>Foresight research and training to spot trends, assess risk, and guide resilient choices.</p>
                            <div className="cardFooter">
                                <Link to="/vigia-futura" className="cardCta" data-cta="cta.about.pillars.futures">Discover Vigía Futura →</Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Ecosystem Building */}
                <section className="section" id="ecosystem-building" aria-labelledby="ecosystem-building-title">
                    <h2 id="ecosystem-building-title">Ecosystem Building</h2>
                    <p className="sectionLead">We design and launch ecosystems that connect talent, capital, and ideas.</p>

                    <div className="cardGrid">
                        <article className="card">
                            <img
                                src="/img/redlab.png"
                                alt="Red de Laboratorios de Innovación (RedLab)"
                                width={300}
                                height={120}
                                loading="lazy"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
                            />
                            <h3>Red de Laboratorios de Innovación (RedLab)</h3>
                            <p>A national network to accelerate innovation capabilities across public institutions through shared methods, capacity building, and collaborative pilots.</p>
                            <div className="cardFooter">
                                <Link to="/ecosystems/redlab" className="cardCta" data-cta="cta.about.ecosystems.redlab">Visit RedLab →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src="/img/OGTIC_horizontal_fullcolor.png"
                                alt="Red de Incubadoras Público-Privadas"
                                width={300}
                                height={120}
                                loading="lazy"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
                            />
                            <h3>Red de Incubadoras Público-Privadas</h3>
                            <p>A coordinated incubator network aligning universities, government, and the private sector with shared standards and services.</p>
                            <div className="cardFooter">
                                <Link to="/ecosystems/red-incubadoras" className="cardCta" data-cta="cta.about.ecosystems.red_incubadoras">Explore the network →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src="/img/vigia-futura.png"
                                alt="Vigía Futura"
                                width={300}
                                height={120}
                                loading="lazy"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
                            />
                            <h3>Vigía Futura</h3>
                            <p>A strategic foresight observatory and emerging ecosystem focused on futures research, early-warning signals, and policy/venture readiness.</p>
                            <div className="cardFooter">
                                <Link to="/vigia-futura" className="cardCta" data-cta="cta.about.ecosystems.vigia_futura">Discover Vigía Futura →</Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* FAQ (cards for visual consistency) */}
                <section className="section" id="faq" aria-labelledby="faq-title">
                    <h2 id="faq-title">FAQ</h2>
                    <div className="cardGrid">
                        <article className="card">
                            <h3>What is the MicroCanvas® Framework (MCF)?</h3>
                            <p>A modular set of canvases that makes innovation repeatable—from discovery to delivery.</p>
                        </article>
                        <article className="card">
                            <h3>What is the Innovation Maturity Model (IMM)®?</h3>
                            <p>A structured way to assess and improve innovation capability across strategy, culture, process, and results.</p>
                        </article>
                        <article className="card">
                            <h3>How do engagements start?</h3>
                            <p>With a quick discovery call or diagnostic. We map goals and constraints, then recommend a workshop, program, or coaching path.</p>
                        </article>
                    </div>
                </section>

                {/* Final CTA (shared pattern) */}
                <section className="section" aria-labelledby="cta-title">
                    <div className="finalCta">
                        <h2 id="cta-title">Ready to make innovation repeatable?</h2>
                        <p>Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co-create the path forward.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            {/* FIX: use canonical diagnostics link to avoid broken anchor */}
                            <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.about.final.start_diagnostic">
                                Start with a diagnostic
                            </Link>
                            <Link to="/contact" className="buttonSecondary" data-cta="cta.about.final.contact">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
