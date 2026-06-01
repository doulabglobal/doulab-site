// src/pages/index.tsx
import React, { type ReactNode, useEffect, useMemo, useState } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Hero from '../components/Hero';
import FinalCta from '../components/FinalCta';
import CaseStudyCards from '../components/case-studies/CaseStudyCards';

// Icons (tree-shaken imports)
import Search from 'lucide-react/dist/esm/icons/search';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Users from 'lucide-react/dist/esm/icons/users';
import Radar from 'lucide-react/dist/esm/icons/radar';
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle';
import GitBranch from 'lucide-react/dist/esm/icons/git-branch';
import Compass from 'lucide-react/dist/esm/icons/compass';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Eye from 'lucide-react/dist/esm/icons/eye';

// Blog item (from RSS)
type BlogItem = { title: string; href: string; description?: string; external: boolean; image?: string };

// ========== Sections ==========
function ProblemSection() {
  type Cause = {
    Icon: typeof AlertTriangle;
    title: string;
    detail: string;
    sourceHref: string;
    sourceLabel: string;
    response: string;
    responseHref: string;
    responseLabel: string;
  };

  const causes: Cause[] = useMemo(
    () => [
      {
        Icon: AlertTriangle,
        title: 'Culture is not wired for innovation',
        detail:
          'Only 21 percent of employees worldwide are engaged at work, a persistent drag on any change effort.',
        sourceHref:
          'https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx',
        sourceLabel: 'Gallup, State of the Global Workplace 2024',
        response:
          'IMM-P® installs culture, cadence, and capability gates so engagement has somewhere to land.',
        responseHref: '/services/innovation-maturity',
        responseLabel: 'IMM-P® program',
      },
      {
        Icon: GitBranch,
        title: 'Strategy stalls between intent and execution',
        detail:
          'About 70 percent of large change programs fall short of their stated goals, a figure McKinsey has tracked across two decades.',
        sourceHref:
          'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/losing-from-day-one-why-even-successful-transformations-fall-short',
        sourceLabel: 'McKinsey, Losing from day one (2021)',
        response:
          'MCF canvases turn strategy into small, testable bets with explicit owners and decision points.',
        responseHref: '/docs/research-resources/microcanvas',
        responseLabel: 'MicroCanvas Framework',
      },
      {
        Icon: Eye,
        title: 'Decisions outrun the evidence',
        detail:
          'Harvard Business School Online reports that data-driven firms are roughly three times more likely to report measurable improvement in decisions than peers that rely on intuition.',
        sourceHref: 'https://online.hbs.edu/blog/post/data-driven-decision-making',
        sourceLabel: 'HBS Online, Data-driven decision-making',
        response:
          'ClarityScan produces a one-page maturity baseline so the next decision sits on signal, not opinion.',
        responseHref: '/services/clarityscan',
        responseLabel: 'ClarityScan diagnostic',
      },
      {
        Icon: Compass,
        title: 'Foresight is missing from the planning cycle',
        detail:
          'The OECD finds that organizations with formal strategic foresight practices adapt faster to disruption and identify opportunities earlier than peers without them.',
        sourceHref:
          'https://www.oecd.org/en/about/programmes/strategic-foresight.html',
        sourceLabel: 'OECD, Strategic Foresight',
        response:
          'Vigia Futura supplies signal scans and scenario briefings so plans absorb the curve before it arrives.',
        responseHref: '/vigia-futura',
        responseLabel: 'Vigia Futura observatory',
      },
    ],
    []
  );

  return (
    <section className="section imm-problem-cluster" id="problems" aria-labelledby="problem-title">
      <h2 id="problem-title">Where strategy meets reality</h2>
      <p className="sectionLead">
        The gap between strategy and shipped outcomes is a measurement problem: decision latency,
        cycle time, and signal quality. Four root causes drive most of it. Each one is solvable with
        the right scaffolding.
      </p>

      <div className="cardGrid imm-cause-chain" role="list" aria-label="Root causes and Doulab responses">
        {causes.map((c, idx) => {
          const Icon = c.Icon;
          return (
            <article
              className="card"
              role="listitem"
              key={idx}
              style={{ borderTop: '4px solid var(--dl-amber, #c47f17)' }}
            >
              <Icon
                className="cardIcon"
                aria-hidden={true}
                style={{ color: 'var(--dl-amber, #c47f17)' }}
              />
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
              <p className="microcopy">
                Source:{' '}
                <a href={c.sourceHref} target="_blank" rel="noopener noreferrer">
                  {c.sourceLabel}
                </a>
              </p>

              <div
                className="imm-decision-card"
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--dl-slate, #5a6473)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.35rem 0',
                    color: 'var(--dl-indigo, #3b3f8f)',
                    fontWeight: 600,
                  }}
                >
                  How Doulab responds
                </p>
                <p style={{ margin: '0 0 0.5rem 0' }}>{c.response}</p>
                <Link
                  to={c.responseHref}
                  className="cardCta"
                  data-cta={`cta.home.problem.response.${idx}`}
                  aria-label={`Learn about ${c.responseLabel}`}
                >
                  {c.responseLabel} <ArrowRight size={14} aria-hidden={true} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className={'pages-b4-p1__centerText'}
        style={{
          marginTop: '2rem',
          padding: '1.25rem 1.5rem',
          borderLeft: '4px solid var(--dl-green, #2f7a3f)',
          background: 'var(--ifm-color-emphasis-100, rgba(47,122,63,0.06))',
          borderRadius: '0 8px 8px 0',
        }}
      >
        <p style={{ margin: 0, display: 'inline-flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <Gauge
            size={20}
            aria-hidden={true}
            style={{ color: 'var(--dl-green, #2f7a3f)', flexShrink: 0, marginTop: '0.15rem' }}
          />
          <span>
            <strong style={{ color: 'var(--dl-green, #2f7a3f)' }}>What we measure.</strong>{' '}
            Decision latency, cycle time, signal quality, and capability growth across IMM
            dimensions. No activity counts dressed up as outcomes. Named client deltas are published
            in each case study when consent allows.
          </span>
        </p>
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
          <p>Map innovation maturity and pinpoint gaps with an evidence-based baseline. Start with ClarityScan® Tier 1 (CHF 150) or scope a deeper Tier 2 / Tier 3 engagement.</p>
          <div className="cardFooter">
            <Link
              to="/services/clarityscan"
              className="cardCta"
              data-cta="cta.home.services.clarityscan"
            >
              Explore ClarityScan® tiers →
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
          alt="MicroCanvas Framework v2.2, modular canvases for innovation."
          width={1200}
          height={720}
          decoding="async"
          className={'pages-b4-p1__roundedMedia'}
        />
      </picture>
      <Lightbulb className="cardIcon" aria-hidden={true} />
      <h3>MicroCanvas Framework v2.2</h3>
      <p>Open toolkit to diagnose, design, and scale innovation with reusable canvases.</p>
      <p className="microcopy">
        Learn the framework in our docs, <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.2</Link>.
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
