// src/pages/insights/index.tsx
import React, { type ReactNode, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Newspaper from 'lucide-react/dist/esm/icons/newspaper';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

type BlogItem = { title: string; link: string; pubDate: string; description: string };

function useLatestBlogItems() {
  const [items, setItems] = useState<BlogItem[]>([]);
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

    const parseRSS = (xmlText: string): BlogItem[] => {
      const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
      const nodes = Array.from(doc.querySelectorAll('item'));
      return nodes.slice(0, 3).map((n) => ({
        title: n.querySelector('title')?.textContent ?? 'Untitled',
        link: n.querySelector('link')?.textContent ?? '#',
        pubDate: n.querySelector('pubDate')?.textContent ?? '',
        description: clean(n.querySelector('description')?.textContent ?? ''),
      }));
    };

    const parseAtom = (xmlText: string): BlogItem[] => {
      const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
      const nodes = Array.from(doc.querySelectorAll('entry'));
      return nodes.slice(0, 3).map((n) => {
        const linkEl = n.querySelector('link[rel="alternate"]') || n.querySelector('link');
        const linkHref = linkEl?.getAttribute('href') ?? '#';
        const summary = n.querySelector('summary')?.textContent ?? n.querySelector('content')?.textContent ?? '';
        return {
          title: n.querySelector('title')?.textContent ?? 'Untitled',
          link: linkHref,
          pubDate: n.querySelector('updated')?.textContent ?? n.querySelector('published')?.textContent ?? '',
          description: clean(summary),
        };
      });
    };

    (async () => {
      try {
        let res = await fetch(rssHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseRSS(text);
          if (!cancelled && parsed.length) return setItems(parsed);
        }
        res = await fetch(atomHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseAtom(text);
          if (!cancelled && parsed.length) return setItems(parsed);
        }
      } catch {
        // silent; privacy-first client fetch
      }
    })();

    return () => { cancelled = true; };
  }, [rssHref, atomHref]);

  return items;
}

function useLatestWhitepapers() {
  const allDocsData = useAllDocsData();
  const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);
  const latestVersion = docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];
  const docs = latestVersion?.docs ?? [];
  return docs
    .filter((d) => (d.tags ?? []).includes('whitepaper'))
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, 3);
}

export default function Insights(): ReactNode {
  const blogItems = useLatestBlogItems();
  const whitepapers = useLatestWhitepapers();

  const fmtDate = (d: string) => {
    const date = d ? new Date(d) : null;
    return date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'Europe/Zurich' }) : '';
  };

  const isExternal = (href: string) => /^https?:\/\//i.test(href);

  return (
    <Layout
      title="Insights — Research & Resources | Doulab"
      description="Research, resources, and whitepapers from Doulab — practical, testable, and open."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/insights" />
        <meta property="og:title" content="Insights — Research & Resources | Doulab" />
        <meta property="og:description" content="Research, resources, and whitepapers from Doulab — practical, testable, and open." />
        <meta property="og:image" content="https://doulab.net/img/social/og-insights.jpg" />
        <meta property="og:image:alt" content="Doulab — Insights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-insights.jpg"
          imageSrcSet="/img/hero-insights.avif 1x, /img/hero-insights.webp 1x, /img/hero-insights.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Insights"
          subtitle="Research & Resources — practical, testable, and open."
          body="Explore frameworks, whitepapers, and field notes to reduce risk and accelerate outcomes."
          imageBase="/img/hero-insights"
          imageAlt="Insights — research and resources"
          width={1600}
          height={900}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.insights.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.insights.hero.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
          id="insights-hero"
          ariaLabelledbyId="insights-hero-title"
          eager
        />

        {/* Highlights */}
        <section className="section" id="highlights" aria-labelledby="highlights-title">
          <h2 id="highlights-title">Highlights</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="insight-mcf-title">
              <picture>
                <source srcSet="/img/mcf-card.avif" type="image/avif" />
                <source srcSet="/img/mcf-card.webp" type="image/webp" />
                <img
                  src="/img/mcf-card.jpg"
                  alt="MicroCanvas Framework v2.1 — open-source canvases"
                  width={1200}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  style={{ borderRadius: '0.75rem', width: '100%', height: 'auto', marginBottom: '.5rem' }}
                />
              </picture>
              <h3 id="insight-mcf-title">MicroCanvas Framework v2.1</h3>
              <p>Open-source canvases to diagnose, design, and scale innovation.</p>
              <ul>
                <li>Reusable canvases &amp; templates</li>
                <li>Step-by-step usage guides</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href="https://themicrocanvas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.insights.card.mcf"
                >
                  Visit site →
                </a>
              </div>
            </article>

            {whitepapers.map((p, i) => (
              <article className="card" key={`wp-${i}`} aria-labelledby={`high-wp-${i}`}>
                <FileText className="cardIcon" aria-hidden="true" />
                <h3 id={`high-wp-${i}`}>{p.title}</h3>
                <p>{p.description ?? 'Whitepaper'}</p>
                <ul>
                  <li>Evidence-led guidance</li>
                </ul>
                <div className="cardFooter">
                  <Link className="cardCta" to={p.permalink} data-cta="cta.insights.highlights.whitepaper">
                    Read paper →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="section" aria-labelledby="latest-blog-title">
          <h2 id="latest-blog-title">From the Blog</h2>
          <p className="sectionLead">Three recent posts from our blog.</p>
          <div className="cardGrid">
            {blogItems.map((post, i) => (
              <article className="card" key={`blog-${i}`} aria-labelledby={`blog-${i}`}>
                <Newspaper className="cardIcon" aria-hidden="true" />
                <h3 id={`blog-${i}`}>{post.title}</h3>
                <p>
                  {post.description.slice(0, 160)}
                  {post.description.length > 160 ? '…' : ''}
                </p>
                <ul>
                  <li>{fmtDate(post.pubDate)}</li>
                  <li>Blog post</li>
                </ul>
                <div className="cardFooter">
                  {isExternal(post.link) ? (
                    <a
                      className="cardCta"
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta="cta.insights.blog.read"
                    >
                      Read post →
                    </a>
                  ) : (
                    <Link className="cardCta" to={post.link} data-cta="cta.insights.blog.read">
                      Read post →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="heroCtas" style={{ marginTop: '0.75rem' }}>
            <Link className="buttonSecondary" to="/blog" data-cta="cta.insights.blog.view_all">
              View all blog posts
            </Link>
          </div>
        </section>

        {/* Docs hub */}
        <section className="section" id="docs-hub" aria-labelledby="docs-hub-title">
          <h2 id="docs-hub-title">Where to start</h2>
          <p className="sectionLead">
            The <Link to="/docs/research-resources/">Research &amp; Resources</Link> hub aggregates whitepapers, frameworks, and open references.
            For recent updates, see <Link to="/docs/releases">Releases</Link>.
          </p>
          <div className="heroCtas" style={{ marginTop: '.5rem' }}>
            <Link className="buttonSecondary" to="/docs/research-resources/" data-cta="cta.insights.docs_hub.research">
              Browse Research &amp; Resources
            </Link>
            <Link className="buttonSecondary" to="/docs/releases" data-cta="cta.insights.docs_hub.releases">
              See Releases
            </Link>
          </div>
        </section>

        {/* Standardized Final CTA */}
        <FinalCta
          id="insights-final"
          ariaLabelledbyId="insights-final-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co-create the path forward."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.insights.final.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.insights.final.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
        />
      </main>
    </Layout>
  );
}
