// src/pages/insights/index.tsx
import React, { type ReactNode, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../b4-p2.module.css';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Newspaper from 'lucide-react/dist/esm/icons/newspaper';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

type BlogItem = { title: string; link: string; pubDate: string; description: string };

// ---------- adjustable limits ----------
const BLOG_LIMIT = 3;          // set to 10 if desired
const WHITEPAPER_LIMIT = 3;    // set to 10 if desired
// --------------------------------------

function useLatestBlogItems(limit = 3) {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const rssHref = useBaseUrl('/blog/rss.xml');
  const atomHref = useBaseUrl('/blog/atom.xml');

  useEffect(() => {
    let cancelled = false;

    const clean = (html: string) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      const text = tmp.textContent || tmp.innerText || '';
      return text.replace(/\s+/g, ' ').trim();
    };

  const sameOriginToRelative = (raw: string, origin: string) => {
    try {
      const u = new URL(raw, origin);
      if (u.origin === origin) {
        let p = u.pathname + (u.search || '') + (u.hash || '');
        // Normalize: ensure blog item links point under /blog
        if (p.startsWith('/') && !p.startsWith('/blog')) p = '/blog' + (p === '/' ? '' : p);
        return p;
      }
      return u.toString();
    } catch {
      return raw;
    }
  };

    const parseRSS = (xmlText: string, origin: string): BlogItem[] => {
      const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
      const nodes = Array.from(doc.querySelectorAll('item'));
      return nodes.slice(0, limit).map((n) => {
        const rawLink = n.querySelector('link')?.textContent ?? '#';
        return {
          title: n.querySelector('title')?.textContent ?? 'Untitled',
          link: sameOriginToRelative(rawLink, origin),
          pubDate: n.querySelector('pubDate')?.textContent ?? '',
          description: clean(n.querySelector('description')?.textContent ?? ''),
        };
      });
    };

    const parseAtom = (xmlText: string, origin: string): BlogItem[] => {
      const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
      const nodes = Array.from(doc.querySelectorAll('entry'));
      return nodes.slice(0, limit).map((n) => {
        const linkEl = n.querySelector('link[rel="alternate"]') || n.querySelector('link');
        const rawLink = linkEl?.getAttribute('href') ?? '#';
        const summary = n.querySelector('summary')?.textContent ?? n.querySelector('content')?.textContent ?? '';
        return {
          title: n.querySelector('title')?.textContent ?? 'Untitled',
          link: sameOriginToRelative(rawLink, origin),
          pubDate: n.querySelector('updated')?.textContent ?? n.querySelector('published')?.textContent ?? '',
          description: clean(summary),
        };
      });
    };

    (async () => {
      try {
        const origin = window.location.origin;

        let res = await fetch(rssHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseRSS(text, origin);
          if (!cancelled && parsed.length) {
            setItems(parsed);
            setLoading(false);
            return;
          }
        }

        res = await fetch(atomHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseAtom(text, origin);
          if (!cancelled && parsed.length) {
            setItems(parsed);
            setLoading(false);
            return;
          }
        }
      } catch {
        // silent; privacy-first client fetch
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [rssHref, atomHref, limit]);

  return { items, loading };
}

function useLatestWhitepapers(limit = 3) {
  const allDocsData = useAllDocsData();
  const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);
  const latestVersion = docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];
  const docs = latestVersion?.docs ?? [];
  return docs
    .filter((d) => (d.tags ?? []).includes('whitepaper'))
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, limit);
}

export default function Insights(): ReactNode {
  const { items: blogItems, loading: blogLoading } = useLatestBlogItems(BLOG_LIMIT);
  const whitepapers = useLatestWhitepapers(WHITEPAPER_LIMIT);
  const latestWhitepaper = whitepapers[0];

  const fmtDate = (d: string) => {
    const date = d ? new Date(d) : null;
    return date
      ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'Europe/Zurich' })
      : '';
  };

  const getDocDate = (doc: DocMeta | undefined): string => {
    if (!doc) return '';
    const anyDoc = doc as unknown as { date?: string };
    return anyDoc?.date ? fmtDate(anyDoc.date) : '';
  };

  const isExternal = (href: string) => {
    try {
      if (typeof window === 'undefined') return /^https?:\/\//i.test(href);
      const u = new URL(href, window.location.origin);
      return u.origin !== window.location.origin;
    } catch {
      return true;
    }
  };

  return (
    <Layout
      title="Insights, Research and Resources | Doulab"
      description="Research, resources, and whitepapers from Doulab, practical, testable, and open."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/insights" />
        <meta property="og:title" content="Insights, Research and Resources | Doulab" />
        <meta property="og:description" content="Research, resources, and whitepapers from Doulab, practical, testable, and open." />
        <meta property="og:image" content="https://doulab.net/img/social/og-insights.jpg" />
        <meta property="og:image:alt" content="Doulab, Insights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* Breadcrumb JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://doulab.net/insights' },
            ],
          })}
        </script>

        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-insights.jpg"
          imageSrcSet="/img/hero-insights.avif 1x, /img/hero-insights.webp 1x, /img/hero-insights.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Insights"
          subtitle="Research and Resources, practical, testable, and open."
          body="Explore frameworks, whitepapers, and field notes to reduce risk and accelerate outcomes."
          imageBase="/img/hero-insights"
          imageAlt="Insights, research and resources"
          width={1600}
          height={900}
          primaryCta={{
            to: '/docs/research-resources/',
            label: 'Browse Research and Resources',
            dataCta: 'cta.insights.hero.research',
            ariaLabel: 'Browse Research and Resources',
          }}
          secondaryCta={{ to: '/blog', label: 'Read the blog', dataCta: 'cta.insights.hero.blog', ariaLabel: 'Read the blog' }}
          ctaNote="Get deeper context before you decide. ClarityScan is available below when you are ready."
          id="insights-hero"
          ariaLabelledbyId="insights-hero-title"
          eager
        />

        {/* In-page subnav (match Vigía Futura style) */}
        <div className="container">
          <nav
            className={`subnav ${styles.subnavLayout}`}
            aria-label="In this page"
          >
            <a href="#start" data-cta="cta.insights.anchor.start">Start here</a>
            <a href="#whitepapers" data-cta="cta.insights.anchor.whitepapers">Whitepapers</a>
            <a href="#blog" data-cta="cta.insights.anchor.blog">Blog</a>
            <a href="#releases" data-cta="cta.insights.anchor.releases">Releases</a>
          </nav>
        </div>

        {/* Start here (ordered: MicroCanvas, Blog, Whitepaper) */}
        <section className="section" id="start" aria-labelledby="start-title">
          <h2 id="start-title">Start here</h2>
          <div className="cardGrid">
            {/* MicroCanvas Framework v2.1 */}
            <article className="card" aria-labelledby="start-mcf-title">
              <picture>
                <source srcSet="/img/mcf-card.avif" type="image/avif" />
                <source srcSet="/img/mcf-card.webp" type="image/webp" />
                <img
                  src="/img/mcf-card.jpg"
                  alt="MicroCanvas Framework v2.1, open-source canvases"
                  width={1200}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className={`${styles.roundedMedia} ${styles.roundedMediaTight}`}
                />
              </picture>
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="start-mcf-title">MicroCanvas Framework v2.1</h3>
              <p>Open-source canvases to diagnose, design, and scale innovation.</p>
              <p className="microcopy"><strong>Framework</strong></p>
              <div className="cardFooter">
                <a className="cardCta" href="https://themicrocanvas.com" target="_blank" rel="noopener noreferrer" data-cta="cta.insights.start.mcf">
                  Visit site
                </a>
              </div>
            </article>

            {/* Newest blog post */}
            <article className="card" aria-labelledby="start-blog-title">
              <Newspaper className="cardIcon" aria-hidden="true" />
              <h3 id="start-blog-title">{blogItems[0]?.title ?? 'Latest from the blog'}</h3>
              <p>
                {blogItems[0]?.description ? `${blogItems[0].description.slice(0, 160)}${blogItems[0].description.length > 160 ? '…' : ''}` : 'See our latest post and field notes.'}
              </p>
              <p className="microcopy"><strong>Blog</strong>{blogItems[0]?.pubDate ? ` • ${fmtDate(blogItems[0].pubDate)}` : ''}</p>
              <div className="cardFooter">
                {blogItems[0] ? (
                  isExternal(blogItems[0].link) ? (
                    <a className="cardCta" href={blogItems[0].link} target="_blank" rel="noopener noreferrer" data-cta="cta.insights.start.blog">Read post</a>
                  ) : (
                    <Link className="cardCta" to={blogItems[0].link} data-cta="cta.insights.start.blog">Read post</Link>
                  )
                ) : (
                  <Link className="cardCta" to="/blog" data-cta="cta.insights.start.blog.fallback">Visit the blog</Link>
                )}
              </div>
            </article>

            {/* Latest whitepaper */}
            <article className="card" aria-labelledby="start-wp-title">
              <FileText className="cardIcon" aria-hidden="true" />
              <h3 id="start-wp-title">{latestWhitepaper?.title ?? 'Latest whitepaper'}</h3>
              <p>{latestWhitepaper?.description ?? 'Read the newest thinking and guidance from our research.'}</p>
              <p className="microcopy"><strong>Whitepaper</strong>{getDocDate(latestWhitepaper) ? ` • ${getDocDate(latestWhitepaper)}` : ''}</p>
              <div className="cardFooter">
                {latestWhitepaper ? (
                  <Link className="cardCta" to={latestWhitepaper.permalink} data-cta="cta.insights.start.whitepaper">Read paper</Link>
                ) : (
                  <Link className="cardCta" to="/docs/research-resources/" data-cta="cta.insights.start.whitepaper.fallback">Browse Research and Resources</Link>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* Whitepapers (top N) */}
        <section className="section" id="whitepapers" aria-labelledby="whitepapers-title">
          <h2 id="whitepapers-title">Whitepapers</h2>
          <div className="cardGrid">
            {whitepapers.length === 0 ? (
              <article className="card" aria-labelledby="wp-fallback-title">
                <FileText className="cardIcon" aria-hidden="true" />
                <h3 id="wp-fallback-title">Latest whitepapers</h3>
                <p>Read our most recent research and technical notes.</p>
                <div className="cardFooter">
                  <Link className="cardCta" to="/docs/research-resources/" data-cta="cta.insights.whitepapers.fallback">
                    Browse Research and Resources
                  </Link>
                </div>
              </article>
            ) : (
              whitepapers.map((p, i) => (
                <article className="card" key={`wp-${i}`} aria-labelledby={`wp-${i}-title`}>
                  <FileText className="cardIcon" aria-hidden="true" />
                  <h3 id={`wp-${i}-title`}>{p.title}</h3>
                  <p>{p.description ?? 'Whitepaper'}</p>
                  <p className="microcopy"><strong>Whitepaper</strong>{getDocDate(p) ? ` • ${getDocDate(p)}` : ''}</p>
                  <div className="cardFooter">
                    <Link className="cardCta" to={p.permalink} data-cta="cta.insights.whitepapers.read">
                      Read paper
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
          <div className={`heroCtas ${styles.ctaRowSmall}`}>
            <Link className="buttonSecondary" to="/docs/research-resources/" data-cta="cta.insights.whitepapers.view_all">
              See all whitepapers
            </Link>
          </div>
        </section>

        {/* Blog (top N) */}
        <section className="section" id="blog" aria-labelledby="blog-title">
          <h2 id="blog-title">From the blog</h2>
          <p className="sectionLead">Three recent posts from our blog.</p>
          <div className="cardGrid" aria-live="polite" aria-busy={blogLoading ? 'true' : 'false'}>
            {blogLoading ? (
              <article className="card" aria-label="Loading blog posts">
                <Newspaper className="cardIcon" aria-hidden="true" />
                <h3>Loading latest from the blog</h3>
                <p className="microcopy">Fetching recent posts.</p>
              </article>
            ) : (blogItems.length === 0 ? (
              <article className="card">
                <Newspaper className="cardIcon" aria-hidden="true" />
                <h3>No recent posts found</h3>
                <p>Visit the blog to see all articles.</p>
                <div className="cardFooter">
                  <Link className="cardCta" to="/blog" data-cta="cta.insights.blog.view_all_fallback">
                    Visit the blog
                  </Link>
                </div>
              </article>
            ) : (
              blogItems.map((post, i) => (
                <article className="card" key={`blog-${i}`} aria-labelledby={`blog-${i}-title`}>
                  <Newspaper className="cardIcon" aria-hidden="true" />
                  <h3 id={`blog-${i}-title`}>{post.title}</h3>
                  <p>
                    {post.description.slice(0, 160)}
                    {post.description.length > 160 ? '…' : ''}
                  </p>
                  <p className="microcopy"><strong>Blog</strong>{post.pubDate ? ` • ${fmtDate(post.pubDate)}` : ''}</p>
                  <div className="cardFooter">
                    {isExternal(post.link) ? (
                      <a className="cardCta" href={post.link} target="_blank" rel="noopener noreferrer" data-cta="cta.insights.blog.read">
                        Read post
                      </a>
                    ) : (
                      <Link className="cardCta" to={post.link} data-cta="cta.insights.blog.read">
                        Read post
                      </Link>
                    )}
                  </div>
                </article>
              ))
            ))}
          </div>
          <div className={`heroCtas ${styles.ctaRowMedium}`}>
            <Link className="buttonSecondary" to="/blog" data-cta="cta.insights.blog.view_all">
              View all blog posts
            </Link>
          </div>
        </section>

        {/* Releases */}
        <section className="section" id="releases" aria-labelledby="releases-title">
          <h2 id="releases-title">Releases</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="releases-card-title">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="releases-card-title">Latest updates and changelog</h3>
              <p>See what changed, what is new, and what is planned next.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/releases" data-cta="cta.insights.releases.view">
                  See Releases
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="insights-final"
          ariaLabelledbyId="insights-final-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We will meet you where you are and co‑create the path forward."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.insights.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.insights.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}
