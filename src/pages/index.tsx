// Home page aligned to About-page styles (hero + sections + cards + CTAs)
// Cards copy normalized for similar length; footers align; final CTA centered.
import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import {
    Search, Layers, Lightbulb, Users, Radar,
    AlertTriangle, FileWarning, EyeOff, CircleSlash, UserX, AlertOctagon, Frown, LineChart, Eye
} from 'lucide-react';

import styles from './index.module.css';

function LatestWhitepapersSection() {
    const allDocsData = useAllDocsData();
    const docsPluginData = allDocsData?.['default'];
    if (!docsPluginData || !docsPluginData.docs) return null;

    const whitepapers = docsPluginData.docs.filter((doc) => doc.tags?.includes('whitepaper'));
    const sorted = whitepapers.sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);

    return (
        <section className={styles.section} aria-labelledby="latest-whitepapers-title">
            <h2 id="latest-whitepapers-title">Latest Whitepapers</h2>
            <div className={styles.cardGrid}>
                {sorted.map((paper) => (
                    <div key={paper.permalink} className={styles.card}>
                        <h3>{paper.title}</h3>
                        {paper.description && <p>{paper.description}</p>}
                        <div className={styles.cardFooter}>
                            <Link className={styles.cardCta} to={paper.permalink} aria-label={`Read ${paper.title}`}>
                                Read paper →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function HomepageHero() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className={styles.heroBanner} aria-labelledby="home-hero-title">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                    <Heading as="h1" id="home-hero-title" className={styles.heroTitle}>
                        {siteConfig.title}
                    </Heading>
                    <p className={styles.heroSubtitle} style={{ textAlign: 'justify' }}>
                        Future studies, innovation ecosystems, and personalized mentoring and coaching to help shape tomorrow.
                    </p>
                    <p className={styles.heroText}>
                        We help people and organizations make innovation repeatable and foresight practical, so strategy turns into sustainable outcomes.
                    </p>

                    <div className={styles.heroCtas}>
                        <Link to="/services" className={styles.buttonPrimary} data-cta="home_hero_services">
                            Explore our services
                        </Link>
                        <Link to="/contact" className={styles.buttonSecondary} data-cta="home_hero_contact">
                            Book a discovery call
                        </Link>
                    </div>
                </div>
                <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                    <img
                        src="/img/people-collage.png"
                        alt="Futures, innovation, and intelligence"
                        className={styles.heroImage}
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    );
}

function ProblemSection() {
    // Copy lightly normalized for near‑equal length while preserving meaning
    const problems = [
        {
            icon: <AlertTriangle className={styles.cardIcon} />,
            cause: 'Innovation isn’t embedded as a cultural value',
            effect: 'Change meets resistance; efforts feel sporadic and engagement stays low.',
            metric: 'Global engagement ~20–23%, indicating persistent culture headwinds.',
            sourceHref: 'https://www.gallup.com/workplace/645758/state-of-the-global-workplace-2024-press-release.aspx',
            sourceLabel: 'Gallup — State of the Global Workplace 2024',
            pillar: 'Culture + Innovation Mindset',
        },
        {
            icon: <FileWarning className={styles.cardIcon} />,
            cause: 'Strategy is treated as a static document',
            effect: 'Short‑term pivots multiply; OKRs drift and teams lose direction.',
            metric: 'Roughly 70% of employees report misalignment with strategy.',
            sourceHref: 'https://www.forbes.com/sites/johnkotter/2013/07/09/heres-why-ceo-strategies-fall-on-deaf-ears/',
            sourceLabel: 'Forbes — When strategy fails to land',
            pillar: 'Planning Mindset + Leadership Development',
        },
        {
            icon: <EyeOff className={styles.cardIcon} />,
            cause: 'Decisions lack reliable evidence and testing',
            effect: 'ROI suffers as opinions outrun data and validated learning.',
            metric: 'Data‑driven orgs are far more likely to improve decisions.',
            sourceHref: 'https://online.hbs.edu/blog/post/data-driven-decision-making',
            sourceLabel: 'Harvard Business School Online — Data‑driven decisions',
            pillar: 'Evidence‑Based Decision‑Making',
        },
        {
            icon: <CircleSlash className={styles.cardIcon} />,
            cause: 'Innovation leadership lacks ownership and cadence',
            effect: 'Projects stall, alignment slips, and dependency risks increase.',
            metric: 'Transformations fail without visible leadership and governance.',
            sourceHref: 'https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson',
            sourceLabel: 'McKinsey — Why transformations fail',
            pillar: 'Leadership & Innovation Governance',
        },
        {
            icon: <UserX className={styles.cardIcon} />,
            cause: 'Rigid hierarchies and outdated skill structures',
            effect: 'Cycles slow down and teams detach from real user needs.',
            metric: 'Greater autonomy correlates with higher productivity and ownership.',
            sourceHref: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00963/full',
            sourceLabel: 'Frontiers — Autonomy & productivity',
            pillar: 'Talent + HR Structure + Employee Experience',
        },
        {
            icon: <AlertOctagon className={styles.cardIcon} />,
            cause: 'Core processes can’t scale or adapt reliably',
            effect: 'Costs creep, burnout rises, and delivery becomes inconsistent.',
            metric: 'Scaling well requires deliberate operating‑model redesign.',
            sourceHref: 'https://www.bain.com/insights/scaling-software-companies-path-to-%241B-in-revenue/',
            sourceLabel: 'Bain — Scaling patterns & pitfalls',
            pillar: 'Scalable + Sustainable Processes',
        },
        {
            icon: <Frown className={styles.cardIcon} />,
            cause: 'Customer insights aren’t integrated into delivery',
            effect: 'Offers drift from real needs; value is left on the table.',
            metric: 'US CX quality has declined for three consecutive years.',
            sourceHref: 'https://www.forrester.com/blogs/us-cx-index-2024-results/',
            sourceLabel: 'Forrester — 2024 CX Index',
            pillar: 'Customer Journey + CX Maturity',
        },
        {
            icon: <LineChart className={styles.cardIcon} />,
            cause: 'Limited visibility into capabilities and resources',
            effect: 'Assumptions drive bets; truth is scattered across systems.',
            metric: 'Interoperability enables a single, trusted data backbone.',
            sourceHref: 'https://www.accenture.com/content/dam/accenture/final/capabilities/technology/software-engineering/document/Accenture-Report-ITL-IPS.pdf',
            sourceLabel: 'Accenture — Value Untangled (PDF)',
            pillar: 'Business Intelligence Maturity',
        },
        {
            icon: <Eye className={styles.cardIcon} />,
            cause: 'Foresight is missing from the planning cycle',
            effect: 'Teams react to shocks instead of shaping possible futures.',
            metric: 'Foresight improves resilience and long‑term performance.',
            sourceHref: 'https://www.weforum.org/stories/2024/01/strategic-foresight-help-companies-survive-thrive/',
            sourceLabel: 'WEF — Why foresight matters',
            pillar: 'Foresight + Strategic Anticipation',
        },
    ];

    return (
        <section className={styles.section} aria-labelledby="problem-title">
            <h2 id="problem-title">The Problem</h2>
            <p className={styles.sectionLead}>
                <strong>Entrepreneurship</strong> and <strong>innovation</strong> are <strong>hard</strong>, until you make them a <strong>repeatable process</strong>.
                Below are some of the most common problems we’ve seen across startups and organizations, based on our work with them:
            </p>
            <div className={styles.cardGrid}>
                {problems.map((item, idx) => (
                    <div className={styles.card} key={idx} style={{ borderLeft: '4px solid var(--dl-indigo)' }}>
                        <div className={styles.cardIconWrap}>{item.icon}</div>
                        <h3>{item.cause}</h3>
                        <p><strong>{item.effect}</strong></p>
                        <p><em>{item.metric}</em></p>
                        <p><a href={item.sourceHref} target="_blank" rel="noopener noreferrer">{item.sourceLabel}</a></p>
                        <p><strong>{item.pillar}</strong></p>
                    </div>
                ))}
            </div>
            <p className={styles.sectionLead}>
                If you identify with several of these, we can help. Explore how we reduce risk and accelerate outcomes:
            </p>
        </section>
    );
}

function ServicesSection() {
    // Descriptions normalized to similar length
    return (
        <section className={styles.section} id="services" aria-labelledby="services-title">
            <h2 id="services-title">Our Service Pillars</h2>
            <p className={styles.sectionLead}>This is how we help you mitigate these problems:</p>
            <p className={styles.microcopy}>We design systems and processes that are flexible, adaptable, and scalable by default.</p>
            <p className={styles.microcopy}>We work across sectors to co‑create solutions with you—for today’s needs and tomorrow’s shifts.</p>

            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <Search className={styles.cardIcon} aria-hidden="true" />
                    <h3>Diagnostics: Know Where You Stand</h3>
                    <p>Quickly map innovation maturity and pinpoint capability gaps with evidence‑based tools like ClarityScan®.</p>
                    <div className={styles.cardFooter}>
                        <Link to="/services/diagnostics" className={styles.cardCta} data-cta="services_diagnostics">Explore diagnostics →</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <Lightbulb className={styles.cardIcon} aria-hidden="true" />
                    <h3>Workshops: Spark Aligned Action</h3>
                    <p>Highly focused sessions that align teams, unlock decisions, and turn strategy into practical next steps.</p>
                    <div className={styles.cardFooter}>
                        <Link to="/services/custom-workshops" className={styles.cardCta} data-cta="services_workshops">Explore workshops →</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <Layers className={styles.cardIcon} aria-hidden="true" />
                    <h3>Programs: Build Innovation Capacity</h3>
                    <p>Structured journeys—like IMM—that install culture, process, and metrics to scale innovation reliably.</p>
                    <div className={styles.cardFooter}>
                        <Link to="/services/innovation-maturity" className={styles.cardCta} data-cta="services_programs">Explore programs →</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <Users className={styles.cardIcon} aria-hidden="true" />
                    <h3>Coaching & Mentoring: Personalized Guidance</h3>
                    <p>Targeted 1:1 or group support to remove blockers, sustain momentum, and build internal capability.</p>
                    <div className={styles.cardFooter}>
                        <Link to="/services/coaching-mentoring" className={styles.cardCta} data-cta="services_coaching">Explore coaching & mentoring →</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <Radar className={styles.cardIcon} aria-hidden="true" />
                    <h3>Future Studies: Anticipate & Shape Tomorrow</h3>
                    <p>Foresight research and training that spot trends, assess risks, and inform resilient strategic choices.</p>
                    <div className={styles.cardFooter}>
                        <Link to="/vigia-futura" className={styles.cardCta} data-cta="services_future_studies">Learn more →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ResearchResourcesSection() {
    // Normalize both descriptions
    return (
        <section className={styles.section} aria-labelledby="research-title">
            <h2 id="research-title">Research + Resources</h2>
            <p className={styles.sectionLead}>
                Stay current with our latest frameworks and insights shaping innovation capability and public intelligence.
            </p>
            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <Lightbulb className={styles.cardIcon} />
                    <h3>MicroCanvas Framework v2.1</h3>
                    <p>Our open‑source toolkit to diagnose, design, and scale innovation with clear, reusable canvases.</p>
                    <div className={styles.cardFooter}>
                        <Link className={styles.cardCta} to="https://themicrocanvas.com" target="_blank" rel="noopener noreferrer">
                            Visit site →
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <Layers className={styles.cardIcon} />
                    <h3>Distributed Federated Agentic AI</h3>
                    <p>A practical blueprint for decentralized AI governance, infrastructure, and public‑value creation.</p>
                    <div className={styles.cardFooter}>
                        <Link className={styles.cardCta} to="/docs/research-resources/distributed-federated-agentic-ai">
                            Read whitepaper →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PrinciplesSection() {
    // Each principle one concise sentence of similar length
    return (
        <section className={styles.section} aria-labelledby="principles-title">
            <h2 id="principles-title">Our Principles</h2>
            <div className={clsx(styles.cardGrid)} style={{ marginTop: '0.5rem' }}>
                <div className={styles.card}>
                    <h3>01. Modularity</h3>
                    <p>We design systems and processes that remain flexible, adaptable, and scalable by default.</p>
                </div>
                <div className={styles.card}>
                    <h3>02. Foresight</h3>
                    <p>We help teams see beyond the present to anticipate shifts and prepare credible options.</p>
                </div>
                <div className={styles.card}>
                    <h3>03. Evidence</h3>
                    <p>We favor decisions grounded in real‑world data, user feedback, and validated learning loops.</p>
                </div>
                <div className={styles.card}>
                    <h3>04. Co‑Creation</h3>
                    <p>We partner deeply with clients to co‑create solutions for today’s challenges and future needs.</p>
                </div>
            </div>
        </section>
    );
}

function FinalCta() {
    return (
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
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`Welcome to ${siteConfig.title}`} description="Foresight, Innovation Architecture, and Agentic AI Systems for a Better Future">
            <HomepageHero />
            <main>
                <ProblemSection />
                <ServicesSection />
                <ResearchResourcesSection />
                <PrinciplesSection />
                <LatestWhitepapersSection />
                <FinalCta />
            </main>
        </Layout>
    );
}
