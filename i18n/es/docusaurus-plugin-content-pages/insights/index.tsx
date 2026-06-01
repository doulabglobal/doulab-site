// src/pages/insights/index.tsx
import React, { type ReactNode, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Newspaper from 'lucide-react/dist/esm/icons/newspaper';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

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
          title: n.querySelector('title')?.textContent ?? 'Sin título',
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
          title: n.querySelector('title')?.textContent ?? 'Sin título',
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
      ? date.toLocaleDateString('es', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'Europe/Zurich' })
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
      title="Insights, Investigación y Recursos"
      description="Investigación, recursos y whitepapers de Doulab, prácticos, comprobables y abiertos."
    >
      <PageMetadata slug="/insights" ogImage="/img/social/og-insights.jpg" />
      <Head>
        <meta property="og:title" content="Insights, Investigación y Recursos" />
        <meta property="og:description" content="Investigación, recursos y whitepapers de Doulab, prácticos, comprobables y abiertos." />
        <meta property="og:image:alt" content="Doulab, Insights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* Breadcrumb JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: localizedUrl('/insights') },
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
          subtitle="Investigación y Recursos, prácticos, comprobables y abiertos."
          body="Explora marcos, whitepapers y notas de campo para reducir riesgos y acelerar resultados."
          imageBase="/img/hero-insights"
          imageAlt="Insights, investigación y recursos"
          width={1600}
          height={900}
          primaryCta={{
            to: '/docs/research-resources/',
            label: 'Explorar Investigación y Recursos',
            dataCta: 'cta.insights.hero.research',
            ariaLabel: 'Explorar Investigación y Recursos',
          }}
          secondaryCta={{ to: '/blog', label: 'Leer el blog', dataCta: 'cta.insights.hero.blog', ariaLabel: 'Leer el blog' }}
          ctaNote="Obtén contexto más profundo antes de decidir. ClarityScan está disponible abajo cuando estés listo."
          id="insights-hero"
          ariaLabelledbyId="insights-hero-title"
        />

        {/* In-page subnav (match Vigía Futura style) */}
        <div className="container">
          <nav
            className={`subnav ${'pages-b4-p2__subnavLayout'}`}
            aria-label="En esta página"
          >
            <a href="#start" data-cta="cta.insights.anchor.start">Empieza aquí</a>
            <a href="#whitepapers" data-cta="cta.insights.anchor.whitepapers">Whitepapers</a>
            <a href="#blog" data-cta="cta.insights.anchor.blog">Blog</a>
            <a href="#releases" data-cta="cta.insights.anchor.releases">Lanzamientos</a>
          </nav>
        </div>

        {/* Start here (ordered: MicroCanvas, Blog, Whitepaper) */}
        <section className="section" id="start" aria-labelledby="start-title">
          <h2 id="start-title">Empieza aquí</h2>
          <div className="cardGrid">
            {/* MicroCanvas Framework v2.2 */}
            <article className="card" aria-labelledby="start-mcf-title">
              <picture>
                <source srcSet="/img/mcf-card.avif" type="image/avif" />
                <source srcSet="/img/mcf-card.webp" type="image/webp" />
                <img loading="lazy"
                  src="/img/mcf-card.jpg"
                  alt="MicroCanvas Framework v2.2, lienzos de código abierto"
                  width={1200}
                  height={720}
                  decoding="async"
                  className={`${'pages-b4-p2__roundedMedia'} ${'pages-b4-p2__roundedMediaTight'}`}
                />
              </picture>
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="start-mcf-title">MicroCanvas Framework v2.2</h3>
              <p>Lienzos de código abierto para diagnosticar, diseñar y escalar la innovación.</p>
              <p className="microcopy"><strong>Marco</strong></p>
              <div className="cardFooter">
                <a className="cardCta" href="https://themicrocanvas.com" target="_blank" rel="noopener noreferrer" data-cta="cta.insights.start.mcf">
                  Visitar el sitio
                </a>
              </div>
            </article>

            {/* Newest blog post */}
            <article className="card" aria-labelledby="start-blog-title">
              <Newspaper className="cardIcon" aria-hidden="true" />
              <h3 id="start-blog-title">{blogItems[0]?.title ?? 'Lo último del blog'}</h3>
              <p>
                {blogItems[0]?.description ? `${blogItems[0].description.slice(0, 160)}${blogItems[0].description.length > 160 ? '…' : ''}` : 'Mira nuestra publicación más reciente y notas de campo.'}
              </p>
              <p className="microcopy"><strong>Blog</strong>{blogItems[0]?.pubDate ? ` • ${fmtDate(blogItems[0].pubDate)}` : ''}</p>
              <div className="cardFooter">
                {blogItems[0] ? (
                  isExternal(blogItems[0].link) ? (
                    <a className="cardCta" href={blogItems[0].link} target="_blank" rel="noopener noreferrer" data-cta="cta.insights.start.blog">Leer publicación</a>
                  ) : (
                    <Link className="cardCta" to={blogItems[0].link} data-cta="cta.insights.start.blog">Leer publicación</Link>
                  )
                ) : (
                  <Link className="cardCta" to="/blog" data-cta="cta.insights.start.blog.fallback">Visitar el blog</Link>
                )}
              </div>
            </article>

            {/* Latest whitepaper */}
            <article className="card" aria-labelledby="start-wp-title">
              <FileText className="cardIcon" aria-hidden="true" />
              <h3 id="start-wp-title">{latestWhitepaper?.title ?? 'Último whitepaper'}</h3>
              <p>{latestWhitepaper?.description ?? 'Lee lo más reciente de nuestro pensamiento y guía de investigación.'}</p>
              <p className="microcopy"><strong>Whitepaper</strong>{getDocDate(latestWhitepaper) ? ` • ${getDocDate(latestWhitepaper)}` : ''}</p>
              <div className="cardFooter">
                {latestWhitepaper ? (
                  <Link className="cardCta" to={latestWhitepaper.permalink} data-cta="cta.insights.start.whitepaper">Leer el paper</Link>
                ) : (
                  <Link className="cardCta" to="/docs/research-resources/" data-cta="cta.insights.start.whitepaper.fallback">Explorar Investigación y Recursos</Link>
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
                <h3 id="wp-fallback-title">Últimos whitepapers</h3>
                <p>Lee nuestra investigación y notas técnicas más recientes.</p>
                <div className="cardFooter">
                  <Link className="cardCta" to="/docs/research-resources/" data-cta="cta.insights.whitepapers.fallback">
                    Explorar Investigación y Recursos
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
                      Leer el paper
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
          <div className={`heroCtas ${'pages-b4-p2__ctaRowSmall'}`}>
            <Link className="buttonSecondary" to="/docs/research-resources/" data-cta="cta.insights.whitepapers.view_all">
              Ver todos los whitepapers
            </Link>
          </div>
        </section>

        {/* Blog (top N) */}
        <section className="section" id="blog" aria-labelledby="blog-title">
          <h2 id="blog-title">Del blog</h2>
          <p className="sectionLead">Tres publicaciones recientes de nuestro blog.</p>
          <div className="cardGrid" aria-live="polite" aria-busy={blogLoading ? 'true' : 'false'}>
            {blogLoading ? (
              <article className="card" aria-label="Cargando publicaciones del blog">
                <Newspaper className="cardIcon" aria-hidden="true" />
                <h3>Cargando lo último del blog</h3>
                <p className="microcopy">Obteniendo publicaciones recientes.</p>
              </article>
            ) : (blogItems.length === 0 ? (
              <article className="card">
                <Newspaper className="cardIcon" aria-hidden="true" />
                <h3>No se encontraron publicaciones recientes</h3>
                <p>Visita el blog para ver todos los artículos.</p>
                <div className="cardFooter">
                  <Link className="cardCta" to="/blog" data-cta="cta.insights.blog.view_all_fallback">
                    Visitar el blog
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
                        Leer publicación
                      </a>
                    ) : (
                      <Link className="cardCta" to={post.link} data-cta="cta.insights.blog.read">
                        Leer publicación
                      </Link>
                    )}
                  </div>
                </article>
              ))
            ))}
          </div>
          <div className={`heroCtas ${'pages-b4-p2__ctaRowMedium'}`}>
            <Link className="buttonSecondary" to="/blog" data-cta="cta.insights.blog.view_all">
              Ver todas las publicaciones del blog
            </Link>
          </div>
        </section>

        {/* Releases */}
        <section className="section" id="releases" aria-labelledby="releases-title">
          <h2 id="releases-title">Lanzamientos</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="releases-card-title">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="releases-card-title">Últimas actualizaciones y changelog</h3>
              <p>Mira qué cambió, qué es nuevo y qué se planea a continuación.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/releases" data-cta="cta.insights.releases.view">
                  Ver Lanzamientos
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="insights-final"
          ariaLabelledbyId="insights-final-title"
          title="¿Listo para pasar de leer a ejecutar?"
          body="Obtén una línea base en 15 a 20 minutos con ClarityScan® Nivel 1 (CHF 150), o agenda una llamada de descubrimiento de 20 minutos."
          primaryCta={{ to: '/services/clarityscan', label: 'Empieza con ClarityScan®', dataCta: 'cta.insights.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda una ClarityScan® en línea',
            dataCta: 'cta.insights.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Obtén una línea base en 15 a 20 minutos por CHF 150. O agenda una llamada de descubrimiento de 20 minutos."
        />
      </main>
    </Layout>
  );
}
