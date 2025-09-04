// Applies: hero component (two-column) + meta/title tweak, Problem reel + a11y/controls,
// numbers strip, case study teaser with images, safer icon rendering, hardened blog RSS,
// correct external Link usage, consistent data-cta attributes, and small a11y/perf niceties.

import React, { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Hero from '../components/Hero';
import type { LucideIcon } from 'lucide-react';
import Search from 'lucide-react/dist/esm/icons/search';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Users from 'lucide-react/dist/esm/icons/users';
import Radar from 'lucide-react/dist/esm/icons/radar';
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle';
import FileWarning from 'lucide-react/dist/esm/icons/file-warning';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off';
import CircleSlash from 'lucide-react/dist/esm/icons/circle-slash';
import UserX from 'lucide-react/dist/esm/icons/user-x';
import AlertOctagon from 'lucide-react/dist/esm/icons/alert-octagon';
import Frown from 'lucide-react/dist/esm/icons/frown';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Eye from 'lucide-react/dist/esm/icons/eye';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

/** Minimal types for docs data to avoid TS errors */
type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

/** Blog item shape (from RSS) */
type BlogItem = { title: string; href: string; description?: string; external: boolean; image?: string };

function usePrefersReducedMotion() {
    const [prefers, setPrefers] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined' || !('matchMedia' in window)) return;
        const m = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setPrefers(!!m.matches);
        update();
        m.addEventListener?.('change', update);
        return () => m.removeEventListener?.('change', update);
    }, []);
    return prefers;
}

// ========== Sections ==========
function ProblemSection() {
    const prefersReduced = usePrefersReducedMotion();
    const reelRef = useRef<HTMLDivElement | null>(null);
    const reelId = 'problem-reel';

    const scrollByAmount = (dir: 'prev' | 'next') => {
        const el = reelRef.current;
        if (!el) return;
        const amount = Math.max(280, el.clientWidth * 0.9) * (dir === 'prev' ? -1 : 1);
        el.scrollBy({ left: amount, behavior: prefersReduced ? 'auto' : 'smooth' });
    };

    type Problem = {
        Icon: LucideIcon;
        cause: string;
        effect: string;
        metric: string;
        sourceHref: string;
        sourceLabel: string;
        pillar: string;
    };

    // Store component *types*, not React elements.
    const problems: Problem[] = useMemo(
        () => [
            {
                Icon: AlertTriangle,
                cause: 'Innovation isn’t embedded as a cultural value',
                effect: 'Change meets resistance; efforts feel sporadic and engagement stays low.',
                metric: 'Global engagement ~20–23%, indicating persistent culture headwinds.',
                sourceHref: 'https://www.gallup.com/workplace/645758/state-of-the-global-workplace-2024-press-release.aspx',
                sourceLabel: 'Gallup — State of the Global Workplace 2024',
                pillar: 'Culture + Innovation Mindset',
            },
            {
                Icon: FileWarning,
                cause: 'Strategy is treated as a static document',
                effect: 'Short-term pivots multiply; OKRs drift and teams lose direction.',
                metric: 'Roughly 70% of employees report misalignment with strategy.',
                sourceHref: 'https://www.forbes.com/sites/johnkotter/2013/07/09/heres-why-ceo-strategies-fall-on-deaf-ears/',
                sourceLabel: 'Forbes — When strategy fails to land',
                pillar: 'Planning Mindset + Leadership Development',
            },
            {
                Icon: EyeOff,
                cause: 'Decisions lack reliable evidence and testing',
                effect: 'ROI suffers as opinions outrun data and validated learning.',
                metric: 'Data-driven orgs are far more likely to improve decisions.',
                sourceHref: 'https://online.hbs.edu/blog/post/data-driven-decision-making',
                sourceLabel: 'Harvard Business School Online — Data-driven decisions',
                pillar: 'Evidence-Based Decision-Making',
            },
            {
                Icon: CircleSlash,
                cause: 'Innovation leadership lacks ownership and cadence',
                effect: 'Projects stall, alignment slips, and dependency risks increase.',
                metric: 'Transformations fail without visible leadership and governance.',
                sourceHref: 'https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson',
                sourceLabel: 'McKinsey — Why transformations fail',
                pillar: 'Leadership & Innovation Governance',
            },
            {
                Icon: UserX,
                cause: 'Rigid hierarchies and outdated skill structures',
                effect: 'Cycles slow down and teams detach from real user needs.',
                metric: 'Greater autonomy correlates with higher productivity and ownership.',
                sourceHref: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00963/full',
                sourceLabel: 'Frontiers — Autonomy & productivity',
                pillar: 'Talent + HR Structure + Employee Experience',
            },
            {
                Icon: AlertOctagon,
                cause: 'Core processes can’t scale or adapt reliably',
                effect: 'Costs creep, burnout rises, and delivery becomes inconsistent.',
                metric: 'Scaling well requires deliberate operating-model redesign.',
                sourceHref: 'https://www.bain.com/insights/scaling-software-companies-path-to-%241B-in-revenue/',
                sourceLabel: 'Bain — Scaling patterns & pitfalls',
                pillar: 'Scalable + Sustainable Processes',
            },
            {
                Icon: Frown,
                cause: 'Customer insights aren’t integrated into delivery',
                effect: 'Offers drift from real needs; value is left on the table.',
                metric: 'US CX quality has declined for three consecutive years.',
                sourceHref: 'https://www.forrester.com/blogs/us-cx-index-2024-results/',
                sourceLabel: 'Forrester — 2024 CX Index',
                pillar: 'Customer Journey + CX Maturity',
            },
            {
                Icon: LineChart,
                cause: 'Limited visibility into capabilities and resources',
                effect: 'Assumptions drive bets; truth is scattered across systems.',
                metric: 'Interoperability enables a single, trusted data backbone.',
                sourceHref: 'https://www.accenture.com/content/dam/accenture/final/capabilities/technology/software-engineering/document/Accenture-Report-ITL-IPS.pdf',
                sourceLabel: 'Accenture — Value Untangled (PDF)',
                pillar: 'Business Intelligence Maturity',
            },
            {
                Icon: Eye,
                cause: 'Foresight is missing from the planning cycle',
                effect: 'Teams react to shocks instead of shaping possible futures.',
                metric: 'Foresight improves resilience and long-term performance.',
                sourceHref: 'https://www.weforum.org/stories/2024/01/strategic-foresight-help-companies-survive-thrive/',
                sourceLabel: 'WEF — Why foresight matters',
                pillar: 'Foresight + Strategic Anticipation',
            },
        ],
        []
    );

    return (
        <section className="section" id="problems" aria-labelledby="problem-title">
            <h2 id="problem-title">The Problem</h2>
            <p className="sectionLead">
                <strong>Entrepreneurship</strong> and <strong>innovation</strong> are <strong>hard</strong>, until you make them a <strong>repeatable process</strong>.
                Below are some of the most common problems we’ve seen across startups and organizations, based on our work with them:
            </p>

            {/* Horizontal reel with a11y + controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <button
                    type="button"
                    className="buttonSecondary"
                    aria-controls={reelId}
                    aria-label="Scroll problems left"
                    data-cta="cta.home.problem.prev"
                    onClick={() => scrollByAmount('prev')}
                >
                    <ChevronLeft size={18} aria-hidden="true" /> Prev
                </button>

                <div
                    id={reelId}
                    ref={reelRef}
                    className="cardReel"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Common problems carousel"
                    tabIndex={0}
                >
                    {problems.map((item, idx) => {
                        const Icon = item.Icon;
                        return (
                            <div
                                className="card"
                                role="group"
                                aria-roledescription="slide"
                                key={idx}
                                style={{ borderLeft: '4px solid var(--dl-indigo)' }}
                            >
                                <Icon className="cardIcon" aria-hidden="true" />
                                <h3>{item.cause}</h3>
                                <p><strong>{item.effect}</strong></p>
                                <p><em>{item.metric}</em></p>
                                <p><a href={item.sourceHref} target="_blank" rel="noopener noreferrer">{item.sourceLabel}</a></p>
                                <p><strong>{item.pillar}</strong></p>
                            </div>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="buttonPrimary"
                    aria-controls={reelId}
                    aria-label="Scroll problems right"
                    data-cta="cta.home.problem.next"
                    onClick={() => scrollByAmount('next')}
                >
                    Next <ChevronRight size={18} aria-hidden="true" />
                </button>
            </div>

            <p className="microcopy" aria-hidden="true">Hint: scroll horizontally →</p>

            {/* Centered support text + CTAs */}
            <div style={{ textAlign: 'center' }}>
                <p className="sectionLead">If you identify with several of these, we can help.</p>
                <p className="microcopy">Start small—get a quick baseline.</p>
                <div className="heroCtas" style={{ marginTop: '.5rem', justifyContent: 'center' }}>
                    <Link
                        to="/services/clarityscan"
                        className="buttonPrimary"
                        data-cta="cta.home.problem.clarityscan"
                        aria-label="Start with ClarityScan — diagnostics baseline"
                    >
                        Start with ClarityScan®
                    </Link>
                    <Link
                        to="/contact"
                        className="buttonSecondary"
                        data-cta="cta.home.problem.book_call"
                    >
                        Book a discovery call
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    return (
        <section className="section" id="services" aria-labelledby="services-title">
            <h2 id="services-title">Our Service Pillars</h2>
            <p className="sectionLead">This is how we help you mitigate these problems:</p>
            <p className="microcopy">We design systems and processes that are flexible, adaptable, and scalable by default.</p>
            <p className="microcopy">We work across sectors to co-create solutions with you—for today’s needs and tomorrow’s shifts.</p>

            <div className="cardGrid">
                <div className="card">
                    <Search className="cardIcon" aria-hidden="true" />
                    <h3>Diagnostics: Know Where You Stand</h3>
                    <p>Quickly map innovation maturity and pinpoint capability gaps with evidence-based tools like ClarityScan®.</p>
                    <div className="cardFooter">
                        <Link
                            to="/services/clarityscan"
                            className="cardCta"
                            data-cta="cta.home.services.clarityscan"
                            aria-label="Start with ClarityScan — diagnostics baseline"
                        >
                            Start with ClarityScan® →
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <Lightbulb className="cardIcon" aria-hidden="true" />
                    <h3>Workshops: Spark Aligned Action</h3>
                    <p>Highly focused sessions that align teams, unlock decisions, and turn strategy into practical next steps.</p>
                    <div className="cardFooter">
                        <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.home.services.workshops">Explore workshops →</Link>
                    </div>
                </div>

                <div className="card">
                    <Layers className="cardIcon" aria-hidden="true" />
                    <h3>Programs: Build Innovation Capacity</h3>
                    <p>Structured journeys — like IMM-P — that install culture, process, and metrics to scale innovation reliably.</p>
                    <div className="cardFooter">
                        <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.home.services.programs">Explore programs →</Link>
                    </div>
                </div>

                <div className="card">
                    <Users className="cardIcon" aria-hidden="true" />
                    <h3>Coaching & Mentoring: Personalized Guidance</h3>
                    <p>Targeted 1:1 or group support to remove blockers, sustain momentum, and build internal capability.</p>
                    <div className="cardFooter">
                        <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.home.services.coaching">Explore coaching & mentoring →</Link>
                    </div>
                </div>

                <div className="card">
                    <Radar className="cardIcon" aria-hidden="true" />
                    <h3>Future Studies: Anticipate & Shape Tomorrow</h3>
                    <p>Foresight research and training that spot trends, assess risks, and inform resilient strategic choices.</p>
                    <div className="cardFooter">
                        <Link to="/vigia-futura" className="cardCta" data-cta="cta.home.services.futures">Learn more →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NumbersStrip() {
    const items = [
        { kpi: '7', label: 'innovation labs co-created', note: 'with public sector partners (2024)' },
        { kpi: '25+', label: 'institutions/year supported', note: 'program capacity from 2025 onward' },
        { kpi: '2–4×/week', label: 'sessions delivered for 12 months', note: 'scaled capability build-out' },
    ];
    return (
        <section className="section" id="proof-numbers" aria-labelledby="numbers-title">
            <h2 id="numbers-title">Proof — by the numbers</h2>
            <div className="cardGrid">
                {items.map((x, i) => (
                    <div className="card" key={i}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>{x.kpi}</h3>
                        <p style={{ marginBottom: '.25rem' }}><strong>{x.label}</strong></p>
                        <p className="microcopy">{x.note}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CaseStudiesTeaser() {
    return (
        <section className="section" id="case-studies" aria-labelledby="case-studies-title">
            <h2 id="case-studies-title">Case Studies</h2>
            <div className="cardGrid">

                {/* AFP Siembra */}
                <div className="card">
                    <picture>
                        <source srcSet="/img/afp-siembra-card.avif" type="image/avif" />
                        <source srcSet="/img/afp-siembra-card.webp" type="image/webp" />
                        <img
                            src="/img/afp-siembra-card.jpg"
                            alt="AFP Siembra — Alcanza product and SILAB innovation lab."
                            width={1200}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                        />
                    </picture>
                    <h3>AFP Siembra — Alcanza & SILAB</h3>
                    <p>From strategy to repeatable delivery: designed a digital savings product and co-created an innovation lab.</p>
                    <div className="cardFooter">
                        <Link to="/case-studies/afp-siembra" className="cardCta" data-cta="cta.home.cases.siembra">
                            Read the case →
                        </Link>
                    </div>
                </div>

                {/* FUNDAPEC */}
                <div className="card">
                    <picture>
                        <source srcSet="/img/fundapec-card.avif" type="image/avif" />
                        <source srcSet="/img/fundapec-card.webp" type="image/webp" />
                        <img
                            src="/img/fundapec-card.jpg"
                            alt="Comunidad FUNDAPEC — alumni platform and engagement."
                            width={1200}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                        />
                    </picture>
                    <h3>FUNDAPEC — Alumni Platform</h3>
                    <p>Co-developed and launched <em>Comunidad FUNDAPEC</em> to deepen engagement and unlock new value.</p>
                    <div className="cardFooter">
                        <Link to="/case-studies/fundapec" className="cardCta" data-cta="cta.home.cases.fundapec">
                            Read the case →
                        </Link>
                    </div>
                </div>

                {/* OGTIC / RedLab */}
                <div className="card">
                    <picture>
                        <source srcSet="/img/ogtic-redlab-card.avif" type="image/avif" />
                        <source srcSet="/img/ogtic-redlab-card.webp" type="image/webp" />
                        <img
                            src="/img/ogtic-redlab-card.jpg"
                            alt="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions."
                            width={1200}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                        />
                    </picture>
                    <h3>OGTIC — RedLab Innovation Network</h3>
                    <p>Built and facilitated RedLab to accelerate public-sector innovation through structured capability and cohort learning.</p>
                    <div className="cardFooter">
                        <Link to="/case-studies/ogtic-redlab" className="cardCta" data-cta="cta.home.cases.ogtic_redlab">
                            Read the case →
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

/** Safe client-only RSS load for latest blog posts */
function useLatestBlogPosts(limit = 3) {
    const [items, setItems] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        async function run() {
            try {
                if (typeof window === 'undefined') return;
                const res = await fetch('/blog/rss.xml', { cache: 'no-store' });
                const xml = await res.text();
                const doc = new window.DOMParser().parseFromString(xml, 'text/xml');
                const nodes = Array.from(doc.querySelectorAll('item')).slice(0, limit);

                const origin = window.location.origin;
                const parsed: BlogItem[] = nodes.map((n) => {
                    const title = n.querySelector('title')?.textContent?.trim() ?? 'Untitled';
                    const rawLink = n.querySelector('link')?.textContent?.trim() ?? '/blog';
                    let href = rawLink;
                    let external = true;
                    try {
                        const u = new URL(rawLink, origin);
                        if (u.origin === origin) {
                            href = u.pathname + (u.search || '') + (u.hash || '');
                            external = false;
                        }
                    } catch {
                        // keep defaults
                    }

                    // Prefer common RSS image slots: media:content, enclosure[url], image
                    const media = n.querySelector('media\\:content');
                    const enclosure = n.querySelector('enclosure');
                    const imageEl = n.querySelector('image');
                    const image =
                        media?.getAttribute('url') ||
                        enclosure?.getAttribute('url') ||
                        imageEl?.textContent?.trim() ||
                        '/img/social/default-og.jpg';

                    const descNode = n.querySelector('description') ?? n.querySelector('content\\:encoded');
                    const raw = descNode?.textContent ?? '';
                    const text = raw.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                    const description = text.length > 220 ? text.slice(0, 217) + '…' : text;

                    return { title, href, description, external, image };
                });

                if (!cancelled) setItems(parsed);
            } catch {
                if (!cancelled) setItems([]);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        run();
        return () => { cancelled = true; };
    }, [limit]);

    return { items, loading };
}

function ResearchResourcesSection() {
    // 1) Always-first MCF card (with image)
    const mcfCard = (
        <div className="card" key="mcf-card">
            <picture>
                <source srcSet="/img/mcf-card.avif" type="image/avif" />
                <source srcSet="/img/mcf-card.webp" type="image/webp" />
                <img
                    src="/img/mcf-card.jpg"
                    alt="MicroCanvas Framework v2.1 — modular canvases for innovation."
                    width={1200}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                />
            </picture>
            <Lightbulb className="cardIcon" aria-hidden="true" />
            <h3>MicroCanvas Framework v2.1</h3>
            <p>Our open-source toolkit to diagnose, design, and scale innovation with clear, reusable canvases.</p>
            <div className="cardFooter">
                <Link className="cardCta" to="https://themicrocanvas.com" target="_blank" rel="noopener noreferrer" data-cta="cta.home.research.mcf">
                    Visit site →
                </Link>
            </div>
        </div>
    );

    // 2) Top 3 latest whitepapers from docs (tag=whitepaper)
    const allDocsData = useAllDocsData();
    const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);
    const latestVersion =
        docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];
    const docs = latestVersion?.docs ?? [];
    const whitepapers = docs.filter((doc) => (doc.tags ?? []).includes('whitepaper'));
    const latestWhitepapers = [...whitepapers].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);

    // 3) Top 3 latest blog entries via RSS
    const { items: latestBlog, loading: blogLoading } = useLatestBlogPosts(3);

    return (
        <section className="section" id="research" aria-labelledby="research-title">
            <h2 id="research-title">Research + Resources</h2>
            <p className="sectionLead">
                Stay current with our latest frameworks and insights shaping innovation capability and public intelligence.
            </p>

            <div className="cardGrid">
                {/* 1) Fixed MCF card */}
                {mcfCard}

                {/* 2) Top 3 latest blog posts */}
                {blogLoading ? (
                    <div key="blog-loading" className="card" aria-busy="true">
                        <Lightbulb className="cardIcon" aria-hidden="true" />
                        <h3>Loading latest from the blog…</h3>
                        <p className="microcopy">Fetching recent posts.</p>
                    </div>
                ) : latestBlog.length === 0 ? (
                    <div key="blog-fallback" className="card">
                        <Lightbulb className="cardIcon" aria-hidden="true" />
                        <h3>Latest from the blog</h3>
                        <p>Stories, methods, and updates from the work.</p>
                        <div className="cardFooter">
                            <Link className="cardCta" to="/blog" data-cta="cta.home.research.blog.fallback">
                                Visit the blog →
                            </Link>
                        </div>
                    </div>
                ) : (
                    latestBlog.map((post) => (
                        <div key={post.href} className="card">
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={`${post.title} — cover`}
                                    width={1200}
                                    height={630}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
                                />
                            )}
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3>{post.title}</h3>
                            {post.description && <p>{post.description}</p>}
                            <div className="cardFooter">
                                {post.external ? (
                                    <a
                                        className="cardCta"
                                        href={post.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cta="cta.home.research.blog.read"
                                    >
                                        Read post →
                                    </a>
                                ) : (
                                    <Link
                                        className="cardCta"
                                        to={post.href}
                                        data-cta="cta.home.research.blog.read"
                                        aria-label={`Read ${post.title}`}
                                    >
                                        Read post →
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                )}

                {/* 3) Top 3 whitepapers (docs) */}
                {latestWhitepapers.map((paper) => (
                    <div key={paper.permalink} className="card">
                        <Layers className="cardIcon" aria-hidden="true" />
                        <h3>{paper.title}</h3>
                        {paper.description && <p>{paper.description}</p>}
                        <div className="cardFooter">
                            <Link
                                className="cardCta"
                                to={paper.permalink}
                                data-cta="cta.home.research.whitepaper.read"
                                aria-label={`Read ${paper.title}`}
                            >
                                Read whitepaper →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function PrinciplesSection() {
    return (
        <section className="section" id="principles" aria-labelledby="principles-title">
            <h2 id="principles-title">Our Principles</h2>
            <div className="cardGrid" style={{ marginTop: '0.5rem' }}>
                <div className="card">
                    <h3>01. Modularity</h3>
                    <p>We design systems and processes that remain flexible, adaptable, and scalable by default.</p>
                </div>
                <div className="card">
                    <h3>02. Foresight</h3>
                    <p>We help teams see beyond the present to anticipate shifts and prepare credible options.</p>
                </div>
                <div className="card">
                    <h3>03. Evidence</h3>
                    <p>We favor decisions grounded in real-world data, user feedback, and validated learning loops.</p>
                </div>
                <div className="card">
                    <h3>04. Co-Creation</h3>
                    <p>We partner deeply with clients to co-create solutions for today’s challenges and future needs.</p>
                </div>
            </div>
        </section>
    );
}

function FinalCta() {
    return (
        <section className="section" id="final-cta" aria-labelledby="cta-title">
            <div className="finalCta">
                <h2 id="cta-title">Ready to make innovation repeatable?</h2>
                <p>Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co-create the path forward.</p>
                <div className="heroCtas" style={{ justifyContent: 'center' }}>
                    <Link
                        to="/services/clarityscan"
                        className="buttonPrimary"
                        data-cta="cta.home.final.clarityscan"
                    >
                        Start with ClarityScan®
                    </Link>
                    <Link
                        to="/contact"
                        className="buttonSecondary"
                        data-cta="cta.home.final.book_call"
                    >
                        Book a discovery call
                    </Link>
                </div>
                <p className="ctaNote" style={{ textAlign: 'center' }}>
                    Get your baseline in 15–20 minutes.
                </p>
            </div>
        </section>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title="Innovation, Foresight & Repeatable Delivery — Doulab"
            description="Foresight, Innovation Architecture, and Agentic AI Systems for a Better Future"
        >
            {/* Standardized two-column hero */}
            <Hero
                title={siteConfig.title}
                subtitle="Innovation architecture, foresight, and coaching to shape tomorrow."
                body="We help people and organizations make innovation repeatable and foresight practical, so strategy turns into sustainable outcomes."
                imageBase="/img/people-collage"
                imageAlt="Futures, innovation, and intelligence"
                primaryCta={{
                    to: '/services/clarityscan',
                    label: 'Start with ClarityScan®',
                    dataCta: 'cta.home.hero.clarityscan',
                    ariaLabel: 'Start with ClarityScan — quick 15–20 minute baseline',
                }}
                secondaryCta={{
                    to: '/contact',
                    label: 'Book a discovery call',
                    dataCta: 'cta.home.hero.book_call',
                }}
                ctaNote="Get your baseline in 15–20 minutes."
            />

            <main>
                <ProblemSection />
                <ServicesSection />
                <NumbersStrip />
                <CaseStudiesTeaser />
                <ResearchResourcesSection />
                <PrinciplesSection />
                <FinalCta />
            </main>
        </Layout>
    );
}
