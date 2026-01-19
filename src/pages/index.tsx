// src/pages/index.tsx
import React, { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Hero from '../components/Hero';
import FinalCta from '../components/FinalCta';
import CaseStudyCards from '../components/case-studies/CaseStudyCards';

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
import Eye from 'lucide-react/dist/esm/icons/eye';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

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
  const hintId = 'problem-reel-hint';

  const scrollByAmount = (dir: 'prev' | 'next') => {
    const el = reelRef.current;
    if (!el) return;
    const amount = Math.max(280, el.clientWidth * 0.9) * (dir === 'prev' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByAmount('prev');
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByAmount('next');
    }
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
        effect: 'Change meets resistance, efforts feel sporadic and engagement stays low.',
        metric: 'Global engagement about 20 to 23 percent, indicating persistent culture headwinds.',
        sourceHref:
          'https://www.gallup.com/workplace/645758/state-of-the-global-workplace-2024-press-release.aspx',
        sourceLabel: 'Gallup, State of the Global Workplace 2024',
        pillar: 'Culture + Innovation Mindset',
      },
      {
        Icon: FileWarning,
        cause: 'Strategy is treated as a static document',
        effect: 'Short-term pivots multiply, OKRs drift and teams lose direction.',
        metric: 'Around 70% of employees report misalignment with strategy.',
        sourceHref:
          'https://www.forbes.com/sites/johnkotter/2013/07/09/heres-why-ceo-strategies-fall-on-deaf-ears/',
        sourceLabel: 'Forbes, When strategy fails to land',
        pillar: 'Planning Mindset + Leadership Development',
      },
      {
        Icon: EyeOff,
        cause: 'Decisions lack reliable evidence and testing',
        effect: 'ROI suffers as opinions outrun data and validated learning.',
        metric: 'Data-driven organizations are more likely to improve decisions.',
        sourceHref: 'https://online.hbs.edu/blog/post/data-driven-decision-making',
        sourceLabel: 'HBS Online, Data-driven decisions',
        pillar: 'Evidence-Based Decision-Making',
      },
      {
        Icon: CircleSlash,
        cause: 'Process debt compounds across teams',
        effect: 'Work stalls, value delivery slows as exceptions become the norm.',
        metric: 'Hidden costs surface as throughput and quality degrade.',
        sourceHref:
          'https://www.mckinsey.com/capabilities/operations/our-insights/reducing-complexity-with-operational-excellence',
        sourceLabel: 'McKinsey, Reducing complexity',
        pillar: 'Operating Model + Delivery',
      },
      {
        Icon: UserX,
        cause: 'Customers are not clearly defined or prioritized',
        effect: 'Solutions miss the mark, uptake and retention suffer.',
        metric: 'Teams move without shared understanding of users.',
        sourceHref: 'https://www.intercom.com/blog/customer-segmentation/',
        sourceLabel: 'Intercom, Segmentation primer',
        pillar: 'Segmentation + JTBD',
      },
      {
        Icon: AlertOctagon,
        cause: 'Risk is untracked across portfolio',
        effect: 'Effort piles into low-confidence bets, timelines slip.',
        metric: 'Governance lacks clear gates, owners, or evidence packs.',
        sourceHref: 'https://www.atlassian.com/agile/project-management/risk-management',
        sourceLabel: 'Atlassian, Risk management',
        pillar: 'Governance + Gate Reviews',
      },
      {
        Icon: Frown,
        cause: 'Value is not measured end-to-end',
        effect: 'Teams optimize for activity instead of outcomes.',
        metric: 'Dashboards track vanity metrics over learning or ROI.',
        sourceHref:
          'https://www.accenture.com/content/dam/accenture/final/capabilities/technology/software-engineering/document/Accenture-Report-ITL-IPS.pdf',
        sourceLabel: 'Accenture, Value untangled',
        pillar: 'Business Intelligence Maturity',
      },
      {
        Icon: Eye,
        cause: 'Foresight is missing from the planning cycle',
        effect: 'Teams react to shocks instead of shaping possible futures.',
        metric: 'Foresight improves resilience and long-term performance.',
        sourceHref:
          'https://www.weforum.org/stories/2024/01/strategic-foresight-help-companies-survive-thrive/',
        sourceLabel: 'WEF, Why foresight matters',
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
        common patterns we fix.
      </p>

      <div className={'pages-b4-p1__buttonRow'}>
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
          aria-describedby={hintId}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {problems.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                className={`card ${'pages-b4-p1__problemCard'}`}
                role="group"
                aria-roledescription="slide"
                key={idx}
              >
                <Icon className="cardIcon" aria-hidden={true} />
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
          Next <ChevronRight size={18} aria-hidden={true} />
        </button>
      </div>

      <p id={hintId} className="microcopy">Hint, use left and right arrows or scroll horizontally</p>

      {/* Centered follow-up block + CTAs */}
      <div className={'pages-b4-p1__centerText'}>
        <p className="sectionLead">If these resonate, start with a quick baseline.</p>
        <p className="microcopy">Get your baseline in 15 to 20 minutes, do not lose another cycle.</p>
        <div className={`heroCtas ${'pages-b4-p1__ctaRowCenter'}`}>
          <Link
            to="/services/clarityscan"
            className="buttonPrimary"
            data-cta="cta.home.problem.clarityscan"
            aria-label="Start with ClarityScan, diagnostics baseline"
          >
            Start with ClarityScan®
          </Link>
        </div>
        <div className={`heroCtas ${'pages-b4-p1__ctaRowCenter'} ${'pages-b4-p1__ctaRowTight'}`}>
          <Link to="https://booking.doulab.net/discovery" className="buttonSecondary" data-cta="cta.home.problem.book_call">
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
      <p className="sectionLead">Practical ways to reduce risk and speed outcomes.</p>
      <div className="cardGrid">
        <div className="card">
          <Search className="cardIcon" aria-hidden={true} />
          <h3>Diagnostics, Know Where You Stand</h3>
          <p>Map innovation maturity and pinpoint gaps with an evidence-based baseline.</p>
          <div className="cardFooter">
            <Link
              to="/services/clarityscan"
              className="cardCta"
              data-cta="cta.home.services.clarityscan"
              aria-label="Start with ClarityScan, diagnostics baseline"
            >
              Start with ClarityScan® →
            </Link>
          </div>
        </div>

        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden={true} />
          <h3>Workshops, Spark Aligned Action</h3>
          <p>Focused sessions that align teams, unlock decisions, and turn strategy into steps.</p>
          <div className="cardFooter">
            <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.home.services.workshops">
              Explore workshops →
            </Link>
          </div>
        </div>

        <div className="card">
          <Layers className="cardIcon" aria-hidden={true} />
          <h3>Programs, Build Innovation Capacity</h3>
          <p>
            Install culture, process, and metrics to scale innovation reliably with clear gates and measurable ROI using{' '}
            <Link to="/services/innovation-maturity">IMM-P®</Link>.
          </p>
          <div className="cardFooter">
            <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.home.services.programs">
              Explore programs →
            </Link>
          </div>
        </div>

        <div className="card">
          <Users className="cardIcon" aria-hidden={true} />
          <h3>Coaching and Mentoring</h3>
          <p>Targeted 1:1 or group support to remove blockers and sustain momentum.</p>
          <div className="cardFooter">
            <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.home.services.coaching">
              Explore coaching and mentoring →
            </Link>
          </div>
        </div>

        <div className="card">
          <Radar className="cardIcon" aria-hidden={true} />
          <h3>Future Studies</h3>
          <p>Foresight research and training to spot trends and inform resilient choices.</p>
          <div className="cardFooter">
            <Link to="/vigia-futura" className="cardCta" data-cta="cta.home.services.futures">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumbersStrip() {
  const items = [
    { kpi: '7', label: 'innovation labs co-created', note: 'with public sector partners in 2024' },
    { kpi: '25+', label: 'institutions per year supported', note: 'program capacity from 2025 onward' },
    { kpi: '2 to 4 per week', label: 'sessions delivered for 12 months', note: 'scaled capability build out' },
  ];
  return (
    <section className="section" id="proof-numbers" aria-labelledby="numbers-title">
      <h2 id="numbers-title">Proof, by the numbers</h2>
      <div className="cardGrid">
        {items.map((x, i) => (
          <div className="card" key={i}>
            <h3 className={'pages-b4-p1__kpiValue'}>{x.kpi}</h3>
            <p className={'pages-b4-p1__kpiLabel'}><strong>{x.label}</strong></p>
            <p className="microcopy">{x.note}</p>
          </div>
        ))}
      </div>
      <p className="microcopy">Notes, counts reflect 2024 to 2025 public sector programs and internal delivery logs.</p>
    </section>
  );
}

function CaseStudiesTeaser() {
  return (
    <section className="section" id="case-studies" aria-labelledby="case-studies-title">
      <h2 id="case-studies-title">Case Studies</h2>
      <p className="sectionLead">Selected projects and measurable outcomes.</p>
      <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
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
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { items, loading };
}

// --- NEW: tolerant whitepaper accessor to avoid TS type mismatches ---
type AnyDoc = {
  id?: string;
  title?: string;
  description?: string;
  permalink?: string;
  tags?: string[];
  frontMatter?: { tags?: string[] };
};

function useLatestWhitepapers(limit = 3) {
  const allDocsData = useAllDocsData() as any; // shape differs across Docusaurus versions
  const defaultPluginId = (allDocsData && Object.keys(allDocsData)[0]) || 'default';
  const plugin = allDocsData?.[defaultPluginId];

  const latestVersion =
    plugin?.versions?.find((v: any) => v?.isLast) ?? plugin?.versions?.[0];

  const docs: AnyDoc[] = Array.isArray(latestVersion?.docs) ? latestVersion.docs : [];

  const getTags = (d: AnyDoc) =>
    (Array.isArray(d.tags) ? d.tags : []) ||
    (Array.isArray(d.frontMatter?.tags) ? d.frontMatter?.tags : []) ||
    [];

  const whitepapers = docs.filter((d) => {
    const tags = getTags(d).map((t) => String(t).toLowerCase());
    const p = (d.permalink ?? '').toLowerCase();
    const i = (d.id ?? '').toLowerCase();
    return (
      tags.includes('whitepaper') ||
      p.includes('/whitepapers/') ||
      p.endsWith('/whitepaper') ||
      i.includes('whitepaper')
    );
  });

  return whitepapers
    .sort((a, b) => String(b.id ?? b.permalink ?? '').localeCompare(String(a.id ?? a.permalink ?? '')))
    .slice(0, limit)
    .map((d) => ({
      title: d.title ?? 'Untitled',
      description: d.description ?? '',
      permalink: d.permalink ?? '#',
    }));
}

function ResearchResourcesSection() {
  // 1) Fixed MCF card
  const mcfCard = (
    <div className="card" key="mcf-card">
      <picture>
        <source srcSet="/img/mcf-card.avif" type="image/avif" />
        <source srcSet="/img/mcf-card.webp" type="image/webp" />
        <img loading="lazy"
          src="/img/mcf-card.jpg"
          alt="MicroCanvas Framework v2.1, modular canvases for innovation."
          width={1200}
          height={720}
          decoding="async"
          className={'pages-b4-p1__roundedMedia'}
        />
      </picture>
      <Lightbulb className="cardIcon" aria-hidden={true} />
      <h3>MicroCanvas Framework v2.1</h3>
      <p>Open toolkit to diagnose, design, and scale innovation with reusable canvases.</p>
      <p className="microcopy">
        Learn the framework in our docs, <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.1</Link>.
      </p>
      <div className="cardFooter">
        <a
          className="cardCta"
          href="https://themicrocanvas.com/?utm_source=doulab&utm_medium=site_home&utm_campaign=research_card"
          target="_blank"
          rel="noopener noreferrer"
          data-cta="cta.home.research.mcf"
        >
          Visit site →
        </a>
      </div>
    </div>
  );

  // 2) Latest blog entries (RSS)
  const { items: latestBlog, loading: blogLoading } = useLatestBlogPosts(3);

  // 3) Latest whitepapers — tolerant to Docusaurus client type shape
  const latestWhitepapers = useLatestWhitepapers(3);

  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <h2 id="research-title">Research + Resources</h2>
      <p className="sectionLead">Latest frameworks and insights shaping innovation capability and public intelligence.</p>

      <div className="cardGrid">
        {/* 1) Fixed MCF card */}
        {mcfCard}

        {/* 2) Top 3 blog posts (client-only) */}
        <div aria-live="polite" className={'pages-b4-p1__displayContents'}>
          {blogLoading ? (
            <div key="blog-loading" className="card" role="status" aria-busy="true">
              <Lightbulb className="cardIcon" aria-hidden={true} />
              <h3>Loading latest from the blog…</h3>
              <p className="microcopy">Fetching recent posts.</p>
            </div>
          ) : latestBlog.length === 0 ? (
            <div key="blog-fallback" className="card">
              <Lightbulb className="cardIcon" aria-hidden={true} />
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
                  <img loading="lazy"
                    src={post.image}
                    alt={`Blog, ${post.title}`}
                    width={1200}
                    height={630}
                    decoding="async"
                    className={'pages-b4-p1__roundedMedia'}
                  />
                )}
                <Lightbulb className="cardIcon" aria-hidden={true} />
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
        </div>

        {/* 3) Top 3 whitepapers */}
        {latestWhitepapers.length === 0 ? (
          <div key="whitepaper-fallback" className="card">
            <Layers className="cardIcon" aria-hidden={true} />
            <h3>Latest from our research</h3>
            <p>Whitepapers and technical notes from current projects.</p>
            <div className="cardFooter">
              <Link
                className="cardCta"
                to="/docs/research-resources/"
                data-cta="cta.home.research.whitepaper.fallback"
              >
                Explore research →
              </Link>
            </div>
          </div>
        ) : (
          latestWhitepapers.map((paper) => (
            <div key={paper.permalink} className="card">
              <Layers className="cardIcon" aria-hidden={true} />
              <h3>{paper.title}</h3>
              {paper.description && <p>{paper.description}</p>}
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to={paper.permalink ?? '#'}
                  data-cta="cta.home.research.whitepaper.read"
                  aria-label={`Read ${paper.title}`}
                >
                  Read whitepaper →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="section homeHowWeWork" id="principles" aria-labelledby="principles-title">
      <h2 id="principles-title">Our Principles</h2>
      <div className={`cardGrid ${'pages-b4-p1__cardGridTight'}`}>
        <div className="card">
          <Layers className="cardIcon" aria-hidden={true} />
          <h3>01. Modularity</h3>
          <p>We design systems and processes that remain flexible, adaptable, and scalable by default.</p>
        </div>
        <div className="card">
          <Eye className="cardIcon" aria-hidden={true} />
          <h3>02. Foresight</h3>
          <p>We help teams anticipate shifts and prepare credible options.</p>
        </div>
        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden={true} />
          <h3>03. Evidence</h3>
          <p>We favor decisions grounded in data, user feedback, and validated learning.</p>
        </div>
        <div className="card">
          <Users className="cardIcon" aria-hidden={true} />
          <h3>04. Co-Creation</h3>
          <p>We partner with clients to co-create solutions for today’s and tomorrow’s needs.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const pageTitle = 'Innovation, Foresight and Repeatable Delivery, Doulab';
  const description =
    'We help people and organizations make innovation repeatable and foresight practical, so strategy turns into sustainable outcomes. You will get a short baseline and a 30, 60, 90 plan.';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://doulab.net/img/social/default-og.jpg" />
        <meta property="og:image:alt" content="Doulab, Innovation, foresight, and repeatable delivery." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Doulab',
            url: 'https://doulab.net/',
            logo: 'https://doulab.net/img/logo.png',
            sameAs: ['https://www.linkedin.com/company/doulab'],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://doulab.net/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://doulab.net/search?q={query}',
              'query-input': 'required name=query',
            },
          })}
        </script>
        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/people-collage.png"
          imageSrcSet="/img/people-collage.avif 1x, /img/people-collage.webp 1x, /img/people-collage.png 1x"
          imageSizes="(max-width: 600px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      {/* Standardized two-column hero */}
      <Hero
        title="Innovation, Foresight and Repeatable Delivery"
        subtitle="Innovation architecture, foresight, and coaching to shape tomorrow."
        body={description}
        imageBase="/img/people-collage"
        imageAlt="Futures, innovation, and intelligence"
        primaryCta={{
          to: '/services/clarityscan',
          label: 'Start with ClarityScan®',
          dataCta: 'cta.home.hero.clarityscan',
          ariaLabel: 'Start with ClarityScan, quick 15 to 20 minute baseline',
        }}
        secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Book a discovery call', dataCta: 'cta.home.hero.book_call' }}
        ctaNote="Get your baseline in 15 to 20 minutes."
        eager
      />

      <main>
        <ProblemSection />
        <ServicesSection />
        <NumbersStrip />
        <CaseStudiesTeaser />
        <ResearchResourcesSection />
        <PrinciplesSection />

        {/* Standardized Final CTA component */}
        <FinalCta
          id="final-cta"
          ariaLabelledbyId="cta-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We track decision latency, cycle time, and capability growth. We will meet you where you are and co-create the path forward."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.home.final.clarityscan' }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Book a discovery call', dataCta: 'cta.home.final.book_call' }}
          ctaNote="Get your baseline in 15 to 20 minutes."
        />
      </main>
    </Layout>
  );
}
