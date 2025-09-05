import React, { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Hero from '../components/Hero';

// Icons (tree-shaken imports)
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

// Docs data types (minimal)
type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

// Blog item (from RSS)
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

  const problems: Problem[] = useMemo(
    () => [
      {
        Icon: AlertTriangle,
        cause: "Innovation isn't embedded as a cultural value",
        effect: 'Change meets resistance; efforts feel sporadic and engagement stays low.',
        metric: 'Global engagement ~20-23%, indicating persistent culture headwinds.',
        sourceHref:
          'https://www.gallup.com/workplace/645758/state-of-the-global-workplace-2024-press-release.aspx',
        sourceLabel: 'Gallup - State of the Global Workplace 2024',
        pillar: 'Culture + Innovation Mindset',
      },
      {
        Icon: FileWarning,
        cause: 'Strategy is treated as a static document',
        effect: 'Short-term pivots multiply; OKRs drift and teams lose direction.',
        metric: 'Roughly 70% of employees report misalignment with strategy.',
        sourceHref: 'https://www.forbes.com/sites/johnkotter/2013/07/09/heres-why-ceo-strategies-fall-on-deaf-ears/',
        sourceLabel: 'Forbes - When strategy fails to land',
        pillar: 'Planning Mindset + Leadership Development',
      },
      {
        Icon: EyeOff,
        cause: 'Decisions lack reliable evidence and testing',
        effect: 'ROI suffers as opinions outrun data and validated learning.',
        metric: 'Data-driven orgs are more likely to improve decisions.',
        sourceHref: 'https://online.hbs.edu/blog/post/data-driven-decision-making',
        sourceLabel: 'HBS Online - Data-driven decisions',
        pillar: 'Evidence-Based Decision-Making',
      },
      {
        Icon: CircleSlash,
        cause: 'Process debt compounds across teams',
        effect: 'Work stalls; value delivery slows as exceptions become the norm.',
        metric: 'Hidden costs surface as throughput and quality degrade.',
        sourceHref:
          'https://www.mckinsey.com/capabilities/operations/our-insights/reducing-complexity-with-operational-excellence',
        sourceLabel: 'McKinsey - Reducing complexity',
        pillar: 'Operating Model + Delivery',
      },
      {
        Icon: UserX,
        cause: 'Customers are not clearly defined or prioritized',
        effect: 'Solutions miss the mark; uptake and retention suffer.',
        metric: 'Teams move without shared understanding of users.',
        sourceHref: 'https://www.intercom.com/blog/customer-segmentation/',
        sourceLabel: 'Intercom - Segmentation primer',
        pillar: 'Segmentation + JTBD',
      },
      {
        Icon: AlertOctagon,
        cause: 'Risk is untracked across portfolio',
        effect: 'Effort piles into low-confidence bets; timelines slip.',
        metric: 'Governance lacks clear gates, owners, or evidence packs.',
        sourceHref: 'https://www.atlassian.com/agile/project-management/risk-management',
        sourceLabel: 'Atlassian - Risk management',
        pillar: 'Governance + Gate Reviews',
      },
      {
        Icon: Frown,
        cause: 'Value is not measured end-to-end',
        effect: 'Teams optimize for activity instead of outcomes.',
        metric: 'Dashboards track vanity metrics over learning or ROI.',
        sourceHref:
          'https://www.accenture.com/content/dam/accenture/final/capabilities/technology/software-engineering/document/Accenture-Report-ITL-IPS.pdf',
        sourceLabel: 'Accenture - Value untangled',
        pillar: 'Business Intelligence Maturity',
      },
      {
        Icon: Eye,
        cause: 'Foresight is missing from the planning cycle',
        effect: 'Teams react to shocks instead of shaping possible futures.',
        metric: 'Foresight improves resilience and long-term performance.',
        sourceHref:
          'https://www.weforum.org/stories/2024/01/strategic-foresight-help-companies-survive-thrive/',
        sourceLabel: 'WEF - Why foresight matters',
        pillar: 'Foresight + Strategic Anticipation',
      },
    ],
    []
  );

  return (
    <section className="section" id="problems" aria-labelledby="problem-title">
      <h2 id="problem-title">The Problem</h2>
      <p className="sectionLead">
        Entrepreneurship and innovation are hard, until you make them a repeatable process. Below are
        common failure patterns we help teams overcome.
      </p>

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
                <p>
                  <a href={item.sourceHref} target="_blank" rel="noopener noreferrer">
                    {item.sourceLabel}
                  </a>
                </p>
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

      <p className="microcopy" aria-hidden="true">Hint: scroll horizontally</p>

      <div style={{ textAlign: 'center' }}>
        <p className="sectionLead">If several resonate, we can help.</p>
        <p className="microcopy">Start small - get a quick baseline.</p>
        <div className="heroCtas" style={{ justifyContent: 'center' }}>
          <Link
            to="/services/clarityscan"
            className="buttonPrimary"
            data-cta="cta.home.problem.clarityscan"
            aria-label="Start with ClarityScan - diagnostics baseline"
          >
            {"Start with ClarityScan\u00AE"}
          </Link>
          <Link to="/contact" className="buttonSecondary" data-cta="cta.home.problem.book_call">
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
      <p className="sectionLead">Pragmatic ways we remove risk and accelerate outcomes.</p>
      <div className="cardGrid">
        <div className="card">
          <Search className="cardIcon" aria-hidden="true" />
          <h3>Diagnostics: Know Where You Stand</h3>
          <p>Map innovation maturity and pinpoint gaps with an evidence-based baseline.</p>
          <div className="cardFooter">
            <Link
              to="/services/clarityscan"
              className="cardCta"
              data-cta="cta.home.services.clarityscan"
              aria-label="Start with ClarityScan - diagnostics baseline"
            >
              {"Start with ClarityScan\u00AE \u2192"}
            </Link>
          </div>
        </div>

        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden="true" />
          <h3>Workshops: Spark Aligned Action</h3>
          <p>Focused sessions that align teams, unlock decisions, and turn strategy into steps.</p>
          <div className="cardFooter">
            <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.home.services.workshops">
              {"Explore workshops \u2192"}
            </Link>
          </div>
        </div>

        <div className="card">
          <Layers className="cardIcon" aria-hidden="true" />
          <h3>Programs: Build Innovation Capacity</h3>
          <p>Install culture, process, and metrics to scale innovation reliably.</p>
          <div className="cardFooter">
            <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.home.services.programs">
              {"Explore programs \u2192"}
            </Link>
          </div>
        </div>

        <div className="card">
          <Users className="cardIcon" aria-hidden="true" />
          <h3>Coaching & Mentoring</h3>
          <p>Targeted 1:1 or group support to remove blockers and sustain momentum.</p>
          <div className="cardFooter">
            <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.home.services.coaching">
              {"Explore coaching & mentoring \u2192"}
            </Link>
          </div>
        </div>

        <div className="card">
          <Radar className="cardIcon" aria-hidden="true" />
          <h3>Future Studies</h3>
          <p>Foresight research and training to spot trends and inform resilient choices.</p>
          <div className="cardFooter">
            <Link to="/vigia-futura" className="cardCta" data-cta="cta.home.services.futures">
              {"Learn more \u2192"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumbersStrip() {
  const items = [
    { kpi: '7', label: 'innovation labs co-created', note: 'with public sector partners' },
    { kpi: '25+', label: 'institutions/year supported', note: 'program capacity' },
    { kpi: '2-4/week', label: 'cadenced sessions over 12 months', note: 'capability build-out' },
    { kpi: '3', label: 'open frameworks in use', note: 'MCF, IMM-P, foresight modules' },
  ];
  return (
    <section className="section section--tight" id="numbers" aria-labelledby="numbers-title">
      <h2 id="numbers-title">Numbers</h2>
      <div className="cardGrid">
        {items.map((it) => (
          <div key={it.label} className="card" aria-label={it.label}>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{it.kpi}</h3>
            <p style={{ margin: '0.25rem 0 0.25rem' }}><strong>{it.label}</strong></p>
            <p className="microcopy" style={{ margin: 0 }}>{it.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudiesTeaser() {
  return (
    <section className="section" id="case-studies" aria-labelledby="cases-title">
      <h2 id="cases-title">Case Studies</h2>
      <p className="sectionLead">Selected projects and measurable outcomes.</p>
      <div className="cardGrid">
        {/* AFP Siembra */}
        <div className="card">
          <picture>
            <source srcSet="/img/afp-siembra-card.avif" type="image/avif" />
            <source srcSet="/img/afp-siembra-card.webp" type="image/webp" />
            <img
              src="/img/afp-siembra-card.jpg"
              alt="AFP Siembra - Alcanza product and SILAB innovation lab."
              width={1200}
              height={720}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
            />
          </picture>
          <h3>AFP Siembra - Alcanza &amp; SILAB</h3>
          <div className="cardFooter">
            <Link to="/case-studies/afp-siembra" className="cardCta" data-cta="cta.home.cases.afp_siembra">
              {"Read the case \u2192"}
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
              alt="FUNDAPEC - alumni community and capability uplift."
              width={1200}
              height={720}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
            />
          </picture>
          <h3>FUNDAPEC - Alumni Network</h3>
          <div className="cardFooter">
            <Link to="/case-studies/fundapec" className="cardCta" data-cta="cta.home.cases.fundapec">
              {"Read the case \u2192"}
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
              alt="OGTIC - Red de Laboratorios de Innovacion (RedLab) cohort sessions."
              width={1200}
              height={720}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
            />
          </picture>
          <h3>OGTIC - RedLab Innovation Network</h3>
          <div className="cardFooter">
            <Link to="/case-studies/ogtic-redlab" className="cardCta" data-cta="cta.home.cases.ogtic_redlab">
              {"Read the case \u2192"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Safe client-only RSS load
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

          // Prefer media:content, enclosure[url], image
          const media = n.querySelector('media\\:content');
          const enclosure = n.querySelector('enclosure');
          const imageEl = n.querySelector('image');
          const image =
            media?.getAttribute('url') ||
            enclosure?.getAttribute('url') ||
            imageEl?.textContent?.trim() ||
            '/img/default-og.jpg';

          const descNode = n.querySelector('description') ?? n.querySelector('content\\:encoded');
          const raw = descNode?.textContent ?? '';
          const text = raw.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
          const description = text.length > 200 ? text.slice(0, 197) + '...' : text;
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
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { items, loading };
}

function ResearchResourcesSection() {
  // 1) Fixed MCF card
  const mcfCard = (
    <div className="card" key="mcf-card">
      <picture>
        <source srcSet="/img/mcf-card.avif" type="image/avif" />
        <source srcSet="/img/mcf-card.webp" type="image/webp" />
        <img
          src="/img/mcf-card.jpg"
          alt="MicroCanvas Framework v2.1 - modular canvases for innovation."
          width={1200}
          height={720}
          loading="lazy"
          decoding="async"
          style={{ borderRadius: '0.75rem', width: '100%', height: 'auto' }}
        />
      </picture>
      <Lightbulb className="cardIcon" aria-hidden="true" />
      <h3>MicroCanvas Framework v2.1</h3>
      <p>Open toolkit to diagnose, design, and scale innovation with reusable canvases.</p>
      <p className="microcopy">
        Learn the framework in our docs: <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link>.
      </p>
      <div className="cardFooter">
        <a
          className="cardCta"
          href="https://themicrocanvas.com"
          target="_blank"
          rel="noopener noreferrer"
          data-cta="cta.home.research.mcf"
        >
          {"Visit site \u2192"}
        </a>
      </div>
    </div>
  );

  // 2) Latest blog entries (RSS)
  const { items: latestBlog, loading: blogLoading } = useLatestBlogPosts(3);

  // 3) Latest whitepapers from docs (tag=whitepaper)
  const allDocsData = useAllDocsData();
  const docsPluginData = allDocsData?.['default'] as unknown as DocsPluginData | undefined;
  const latestVersion = docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];
  const docs = latestVersion?.docs ?? [];
  const whitepapers = docs.filter((doc) => (doc.tags ?? []).includes('whitepaper'));
  const latestWhitepapers = [...whitepapers].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);

  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <h2 id="research-title">Research + Resources</h2>
      <p className="sectionLead">Latest frameworks and insights shaping innovation capability and public intelligence.</p>

      <div className="cardGrid">
        {/* 1) Fixed MCF card */}
        {mcfCard}

        {/* 2) Top 3 blog posts (client-only) */}
        {blogLoading ? (
          <div key="blog-loading" className="card" aria-busy="true">
            <Lightbulb className="cardIcon" aria-hidden="true" />
            <h3>Loading latest from the blog...</h3>
            <p className="microcopy">Fetching recent posts.</p>
          </div>
        ) : latestBlog.length === 0 ? (
          <div key="blog-fallback" className="card">
            <Lightbulb className="cardIcon" aria-hidden="true" />
            <h3>Latest from the blog</h3>
            <p>Stories, methods, and updates from the work.</p>
            <div className="cardFooter">
              <Link className="cardCta" to="/blog" data-cta="cta.home.research.blog.fallback">
                {"Visit the blog \u2192"}
              </Link>
            </div>
          </div>
        ) : (
          latestBlog.map((post) => (
            <div key={post.href} className="card">
              {post.image && (
                <img
                  src={post.image}
                  alt={`${post.title} - cover`}
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
                  <a className="cardCta" href={post.href} target="_blank" rel="noopener noreferrer" data-cta="cta.home.research.blog.read">
                    {"Read post \u2192"}
                  </a>
                ) : (
                  <Link className="cardCta" to={post.href} data-cta="cta.home.research.blog.read" aria-label={`Read ${post.title}`}>
                    {"Read post \u2192"}
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
                {"Read whitepaper \u2192"}
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
          <Layers className="cardIcon" aria-hidden="true" />
          <h3>01. Modularity</h3>
          <p>We design systems and processes that remain flexible, adaptable, and scalable by default.</p>
        </div>
        <div className="card">
          <Eye className="cardIcon" aria-hidden="true" />
          <h3>02. Foresight</h3>
          <p>We help teams anticipate shifts and prepare credible options.</p>
        </div>
        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden="true" />
          <h3>03. Evidence</h3>
          <p>We favor decisions grounded in data, user feedback, and validated learning.</p>
        </div>
        <div className="card">
          <Users className="cardIcon" aria-hidden="true" />
          <h3>04. Co-Creation</h3>
          <p>We partner with clients to co-create solutions for today's and tomorrow's needs.</p>
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
        <p>Start with a quick diagnostic or book a discovery call. We'll meet you where you are and co-create the path forward.</p>
        <div className="heroCtas" style={{ justifyContent: 'center' }}>
          <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.home.final.clarityscan">
            {"Start with ClarityScan\u00AE"}
          </Link>
          <Link to="/contact" className="buttonSecondary" data-cta="cta.home.final.book_call">
            Book a discovery call
          </Link>
        </div>
        <p className="ctaNote" style={{ textAlign: 'center' }}>{'Get your baseline in 15\u201320 minutes.'}</p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const pageTitle = 'Innovation, Foresight & Repeatable Delivery | Doulab';
  const description =
    'We help people and organizations make innovation repeatable and foresight practical, so strategy turns into sustainable outcomes.';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://doulab.net/img/default-og.jpg" />
        <meta property="og:image:alt" content="Doulab - Innovation, foresight, and repeatable delivery." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Standardized two-column hero */}
      <Hero
        title="Innovation, Foresight & Repeatable Delivery"
        subtitle="Innovation architecture, foresight, and coaching to shape tomorrow."
        body={description}
        imageBase="/img/people-collage"
        imageAlt="Futures, innovation, and intelligence"
        primaryCta={{
          to: '/services/clarityscan',
          label: 'Start with ClarityScan\u00AE',
          dataCta: 'cta.home.hero.clarityscan',
          ariaLabel: 'Start with ClarityScan - quick 15-20 minute baseline',
        }}
        secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.home.hero.book_call' }}
        ctaNote={'Get your baseline in 15\u201320 minutes.'}
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
