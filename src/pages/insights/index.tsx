// src/pages/insights/index.tsx
import React, {type ReactNode, useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {BookOpen, FileText, TrendingUp, Newspaper} from 'lucide-react';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';

/**
 * Authoring NOTE for Docs/Whitepapers:
 * - Tag whitepapers with:  tags: ['whitepaper']
 * - Name doc IDs with a sortable prefix to keep "Latest" accurate, e.g.:
 *     YYYY-MM-DD__your-whitepaper-slug
 *   We sort by `id` descending to avoid heavy date parsing client-side.
 */

/** Minimal types to avoid TS complaints */
type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

/** Auto-list latest whitepapers from the docs plugin (tag = 'whitepaper') */
function LatestFromDocs() {
  const allDocsData = useAllDocsData();
  const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);
  const latestVersion = docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];
  const docs = latestVersion?.docs ?? [];
  const whitepapers = docs.filter((d) => (d.tags ?? []).includes('whitepaper'));
  const sorted = whitepapers.sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);

  if (!sorted.length) return null;

  return (
    <section className="section" aria-labelledby="latest-docs-title">
      <h2 id="latest-docs-title">Latest from Research &amp; Resources</h2>
      <div className="cardGrid">
        {sorted.map((p) => (
          <article className="card" key={p.permalink} aria-labelledby={`wp-${p.id}`}>
            <FileText className="cardIcon" aria-hidden="true" />
            <h3 id={`wp-${p.id}`}>{p.title}</h3>
            <p>{p.description ?? 'Whitepaper'}</p>
            <ul>
              <li>Evidence-led guidance</li>
              <li>Practical, testable steps</li>
            </ul>
            <div className="cardFooter">
              <Link className="cardCta" to={p.permalink} data-cta="cta.insights.card.whitepaper">
                Read paper →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Deep link to all whitepapers */}
      <div className="heroCtas" style={{ marginTop: '0.75rem' }}>
        <Link className="buttonSecondary" to="/docs/research-resources/" data-cta="cta.insights.latest.all_whitepapers">
          See all whitepapers
        </Link>
      </div>
    </section>
  );
}

/** Blog list (privacy-first): fetch our own RSS/Atom and render 3 latest posts */
type BlogItem = { title: string; link: string; pubDate: string; description: string };

function LatestBlogPosts() {
  const [items, setItems] = useState<BlogItem[] | null>(null);
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

    async function load() {
      try {
        // Try RSS first
        let res = await fetch(rssHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseRSS(text);
          if (!cancelled && parsed.length) return setItems(parsed);
        }
        // Fallback: Atom
        res = await fetch(atomHref, { cache: 'no-store' });
        if (res.ok) {
          const text = await res.text();
          const parsed = parseAtom(text);
          if (!cancelled && parsed.length) return setItems(parsed);
        }
        // Nothing available or blocked; leave section hidden
      } catch {
        // Silent fail; section won't render
      }
    }

    load();
    return () => { cancelled = true; };
  }, [rssHref, atomHref]);

  if (!items || !items.length) return null;

  const fmt = (d: string) => {
    const date = d ? new Date(d) : null;
    return date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'Europe/Zurich' }) : '';
  };

  return (
    <section className="section" aria-labelledby="latest-blog-title">
      <h2 id="latest-blog-title">From the Blog</h2>
      <div className="cardGrid">
        {items.map((post, i) => (
          <article className="card" key={i} aria-labelledby={`blog-${i}`}>
            <Newspaper className="cardIcon" aria-hidden="true" />
            <h3 id={`blog-${i}`}>{post.title}</h3>
            <p>{post.description.slice(0, 160)}{post.description.length > 160 ? '…' : ''}</p>
            <ul>
              <li>{fmt(post.pubDate)}</li>
              <li>Blog post</li>
            </ul>
            <div className="cardFooter">
              <Link className="cardCta" to={post.link} data-cta="cta.insights.card.blog">
                Read post →
              </Link>
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
  );
}

export default function Insights(): ReactNode {
  return (
    <Layout
      title="Insights — Research & Resources | Doulab"
      description="Research, resources, and whitepapers from Doulab — practical, testable, and open."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/insights" />
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" id="hero" aria-labelledby="insights-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 800px' }}>
              <Heading as="h1" id="insights-hero-title" className="heroTitle">
                Insights
              </Heading>
              <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                Research &amp; Resources on MCF 2.1, IMM, and AI governance.
              </p>
              <p className="heroText">
                Practical, testable materials you can use: frameworks, whitepapers, and field notes.
              </p>
              <div className="heroCtas">
                <Link className="buttonPrimary" to="/docs/research-resources/" data-cta="cta.insights.hero.docs">
                  Browse Research &amp; Resources
                </Link>
                <Link className="buttonSecondary" to="/docs/releases" data-cta="cta.insights.hero.releases">
                  See Releases
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights (homogeneous cards) */}
        <section className="section" id="highlights" aria-labelledby="highlights-title">
          <h2 id="highlights-title">Highlights</h2>
          <div className="cardGrid">
            {/* Agentic AI */}
            <article className="card" aria-labelledby="insight-agentic-title">
              <TrendingUp className="cardIcon" aria-hidden="true" />
              <h3 id="insight-agentic-title">Distributed Federated Agentic AI</h3>
              <p>Governance + architecture blueprint for enterprise/public platforms.</p>
              <ul>
                <li>Identity &amp; trust (PKI, wallets, permissions)</li>
                <li>Workflows, model ops, UI orchestration</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/research-resources/distributed-federated-agentic-ai" data-cta="cta.insights.card.agentic">
                  Read the whitepaper →
                </Link>
              </div>
            </article>

            {/* IMM notes */}
            <article className="card" aria-labelledby="insight-imm-title">
              <BookOpen className="cardIcon" aria-hidden="true" />
              <h3 id="insight-imm-title">IMM field notes (12+12 weeks)</h3>
              <p>Lessons from Discovery → Validation → Efficiency → Scale.</p>
              <ul>
                <li>Gate criteria &amp; decision cadence</li>
                <li>KPI patterns by stage</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/research-resources/" data-cta="cta.insights.card.imm">
                  Explore notes →
                </Link>
              </div>
            </article>

            {/* MCF */}
            <article className="card" aria-labelledby="insight-mcf-title">
              <FileText className="cardIcon" aria-hidden="true" />
              <h3 id="insight-mcf-title">MicroCanvas® Framework v2.1</h3>
              <p>Open-source canvases to diagnose, design, and scale innovation.</p>
              <ul>
                <li>Reusable canvases &amp; templates</li>
                <li>Step-by-step usage guides</li>
              </ul>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://themicrocanvas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.insights.card.mcf"
                >
                  Visit site →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Auto: Latest from Docs */}
        <LatestFromDocs />

        {/* Auto: Latest Blog posts */}
        <LatestBlogPosts />

        {/* Where to start */}
        <section className="section" id="docs-hub" aria-labelledby="docs-hub-title">
          <h2 id="docs-hub-title">Where to start</h2>
          <p className="sectionLead">
            The <Link to="/docs/research-resources/">Research &amp; Resources</Link> hub aggregates whitepapers,
            frameworks, and open references. For recent updates, see <Link to="/docs/releases">Releases</Link>.
          </p>
        </section>

        {/* Final CTA (shared pattern) */}
        <section className="section" id="cta" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Have a topic you want us to cover?</h2>
            <p>We publish practical, evidence-led guides. Tell us what would help your team.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link className="buttonPrimary" to="/contact" data-cta="cta.insights.final.contact">
                Suggest a topic
              </Link>
              <Link className="buttonSecondary" to="/what-we-do" data-cta="cta.insights.final.whatwedo">
                What we do
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
