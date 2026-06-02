// src/pages/index.tsx
import React, { type ReactNode, useEffect, useMemo, useState } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import CaseStudyCards from '@site/src/components/case-studies/CaseStudyCards';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

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
        title: 'La cultura no está preparada para la innovación',
        detail:
          'El compromiso global de las personas trabajadoras cayó al 21 por ciento en 2024, la segunda caída en doce años, con un costo estimado para la economía mundial de 438 mil millones de dólares. América Latina y el Caribe se ubica más alto, en 31 por ciento, pero dos tercios de la fuerza laboral regional aún no está comprometida.',
        sourceHref:
          'https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx',
        sourceLabel: 'Gallup, State of the Global Workplace 2025',
        response:
          'IMM-P® instala cultura, cadencia y puntos de control de capacidad para que el compromiso tenga dónde aterrizar.',
        responseHref: '/services/innovation-maturity',
        responseLabel: 'Programa IMM-P®',
      },
      {
        Icon: GitBranch,
        title: 'La estrategia se estanca entre la intención y la ejecución',
        detail:
          'La investigación de McKinsey encuentra que menos de una de cada tres transformaciones organizacionales logra mejorar el desempeño y sostener los resultados. Dos décadas de datos de encuestas muestran que la tasa no ha cambiado.',
        sourceHref:
          'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/successful-transformations',
        sourceLabel: 'McKinsey, The science behind successful organizational transformations',
        response:
          'Los canvas de MCF convierten la estrategia en apuestas pequeñas y comprobables, con responsables explícitos y puntos de decisión.',
        responseHref: '/docs/research-resources/microcanvas',
        responseLabel: 'MicroCanvas Framework',
      },
      {
        Icon: Eye,
        title: 'Las decisiones se adelantan a la evidencia',
        detail:
          'El Índice Mundial de Innovación 2025 de la OMPI encuentra que América Latina y el Caribe perdió terreno este año, con la mayoría de las economías estancadas y la región superada por Asia Central y del Sur. Chile ocupa el puesto 51, Brasil 52, México 58, y la brecha regional entre insumos y resultados refleja vínculos débiles entre evidencia y decisión.',
        sourceHref:
          'https://www.wipo.int/web-publications/global-innovation-index-2025/en/gii-2025-results.html',
        sourceLabel: 'OMPI, Índice Mundial de Innovación 2025',
        response:
          'ClarityScan® produce una línea base de madurez en una página, para que la siguiente decisión se apoye en señal y no en opinión.',
        responseHref: '/services/clarityscan',
        responseLabel: 'Diagnóstico ClarityScan®',
      },
      {
        Icon: Compass,
        title: 'La prospectiva está ausente del ciclo de planificación',
        detail:
          'El Latin American Economic Outlook 2025 de la OCDE advierte que la región corre el riesgo de una tercera década de bajo crecimiento sin estrategias activas de transformación productiva que combinen prospectiva, adopción digital y política industrial verde. El PIB regional creció apenas alrededor de 2 por ciento en 2024.',
        sourceHref:
          'https://www.oecd.org/en/publications/latin-american-economic-outlook-2025_80e48de5-en.html',
        sourceLabel: 'OCDE, Latin American Economic Outlook 2025',
        response:
          'Vigía Futura aporta escaneos de señales y briefings de escenarios para que los planes absorban la curva antes de que llegue.',
        responseHref: '/vigia-futura',
        responseLabel: 'Observatorio Vigía Futura',
      },
    ],
    []
  );

  return (
    <section className="section imm-problem-cluster" id="problems" aria-labelledby="problem-title">
      <h2 id="problem-title">Donde la estrategia se encuentra con la realidad</h2>
      <p className="sectionLead">
        La brecha entre la estrategia y los resultados entregados es un problema de medición: latencia
        de decisión, tiempo de ciclo y calidad de la señal. Cuatro causas raíz explican la mayor parte.
        Cada una es resoluble con el andamiaje correcto.
      </p>

      <div className="cardGrid imm-cause-chain" role="list" aria-label="Causas raíz y respuestas de Doulab">
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
                Fuente:{' '}
                <a href={c.sourceHref} target="_blank" rel="noopener noreferrer">
                  {c.sourceLabel}
                </a>
              </p>

              <div
                className="imm-decision-card"
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--ifm-color-emphasis-300)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.35rem 0',
                    color: 'var(--ifm-heading-color)',
                    fontWeight: 600,
                  }}
                >
                  Cómo responde Doulab
                </p>
                <p style={{ margin: '0 0 0.5rem 0' }}>{c.response}</p>
                <Link
                  to={c.responseHref}
                  className="cardCta"
                  data-cta={`cta.home.problem.response.${idx}`}
                  aria-label={`Conoce más sobre ${c.responseLabel}`}
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
            style={{ color: 'var(--dl-green-text, #3f8a1f)', flexShrink: 0, marginTop: '0.15rem' }}
          />
          <span>
            <strong style={{ color: 'var(--dl-green-text, #3f8a1f)' }}>Qué medimos.</strong>{' '}
            Latencia de decisión, tiempo de ciclo, calidad de la señal y crecimiento de capacidades a
            lo largo de las dimensiones del IMM. Nada de conteos de actividad disfrazados de resultados.
            Los deltas nombrados por cliente se publican en cada caso de estudio cuando el consentimiento
            lo permite.
          </span>
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <h2 id="services-title">Nuestros pilares de servicio</h2>
      <p className="sectionLead">Formas prácticas de reducir el riesgo y acelerar los resultados.</p>
      <div className="cardGrid">
        <div className="card">
          <Search className="cardIcon" aria-hidden={true} />
          <h3>Diagnósticos, sabe dónde estás parado</h3>
          <p>Mapea la madurez en innovación y revela brechas con una línea base basada en evidencia, desde un snapshot rápido hasta una intervención más profunda.</p>
          <p className="microcopy">Facturado en CHF; verás el equivalente local al pagar.</p>
          <div className="cardFooter">
            <Link
              to="/services/clarityscan"
              className="cardCta"
              data-cta="cta.home.services.clarityscan"
            >
              Explora los niveles de ClarityScan® →
            </Link>
          </div>
        </div>

        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden={true} />
          <h3>Talleres, activa la acción alineada</h3>
          <p>Sesiones enfocadas que alinean equipos, desbloquean decisiones y convierten la estrategia en pasos.</p>
          <div className="cardFooter">
            <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.home.services.workshops">
              Explora los talleres →
            </Link>
          </div>
        </div>

        <div className="card">
          <Layers className="cardIcon" aria-hidden={true} />
          <h3>Programas, construye capacidad de innovación</h3>
          <p>
            Instala cultura, proceso y métricas para escalar la innovación de forma confiable, con puntos de control claros y ROI medible mediante{' '}
            <Link to="/services/innovation-maturity">IMM-P®</Link>.
          </p>
          <div className="cardFooter">
            <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.home.services.programs">
              Explora los programas →
            </Link>
          </div>
        </div>

        <div className="card">
          <Users className="cardIcon" aria-hidden={true} />
          <h3>Coaching y Mentoría</h3>
          <p>Acompañamiento 1:1 o grupal para remover bloqueos, transferir práctica y sostener el impulso a lo largo de las fases.</p>
          <div className="cardFooter">
            <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.home.services.coaching">
              Explora coaching y mentoría →
            </Link>
          </div>
        </div>

        <div className="card">
          <Radar className="cardIcon" aria-hidden={true} />
          <h3>Estudios de Futuro</h3>
          <p>Investigación y formación en prospectiva para detectar tendencias, identificar señales débiles e informar decisiones resilientes.</p>
          <div className="cardFooter">
            <Link to="/vigia-futura" className="cardCta" data-cta="cta.home.services.futures">
              Conoce más →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumbersStrip() {
  const items = [
    { kpi: '7', label: 'laboratorios de innovación cocreados', note: 'con socios del sector público en 2024' },
    { kpi: '25+', label: 'instituciones apoyadas por año', note: 'capacidad del programa desde 2025 en adelante' },
    { kpi: '2 a 4 por semana', label: 'sesiones entregadas durante 12 meses', note: 'construcción de capacidad a escala' },
  ];
  return (
    <section className="section" id="proof-numbers" aria-labelledby="numbers-title">
      <h2 id="numbers-title">Pruebas, en números</h2>
      <div className="cardGrid">
        {items.map((x, i) => (
          <div className="card" key={i}>
            <h3 className={'pages-b4-p1__kpiValue'}>{x.kpi}</h3>
            <p className={'pages-b4-p1__kpiLabel'}><strong>{x.label}</strong></p>
            <p className="microcopy">{x.note}</p>
          </div>
        ))}
      </div>
      <p className="microcopy">Notas, los conteos reflejan programas del sector público y registros internos de entrega de 2024 a 2025.</p>
    </section>
  );
}

function CaseStudiesTeaser() {
  return (
    <section className="section" id="case-studies" aria-labelledby="case-studies-title">
      <h2 id="case-studies-title">Casos de Estudio</h2>
      <p className="sectionLead">Proyectos seleccionados y resultados medibles.</p>
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
          const title = n.querySelector('title')?.textContent?.trim() ?? 'Sin título';
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
      title: d.title ?? 'Sin título',
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
          alt="MicroCanvas Framework v2.2, canvases modulares para la innovación."
          width={1200}
          height={720}
          decoding="async"
          className={'pages-b4-p1__roundedMedia'}
        />
      </picture>
      <Lightbulb className="cardIcon" aria-hidden={true} />
      <h3>MicroCanvas Framework v2.2</h3>
      <p>Caja de herramientas abierta para diagnosticar, diseñar y escalar la innovación con canvases reutilizables.</p>
      <p className="microcopy">
        Aprende el framework en nuestra documentación, <Link to="/docs/research-resources/microcanvas">MicroCanvas v2.2</Link>.
      </p>
      <div className="cardFooter">
        <a
          className="cardCta"
          href="https://themicrocanvas.com/?utm_source=doulab&utm_medium=site_home&utm_campaign=research_card"
          target="_blank"
          rel="noopener noreferrer"
          data-cta="cta.home.research.mcf"
        >
          Visita el sitio →
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
      <h2 id="research-title">Investigación y Recursos</h2>
      <p className="sectionLead">Los frameworks e ideas más recientes que dan forma a la capacidad de innovación y a la inteligencia pública.</p>

      <div className="cardGrid">
        {/* 1) Fixed MCF card */}
        {mcfCard}

        {/* 2) Top 3 blog posts (client-only) */}
        <div aria-live="polite" className={'pages-b4-p1__displayContents'}>
          {blogLoading ? (
            <div key="blog-loading" className="card" role="status" aria-busy="true">
              <Lightbulb className="cardIcon" aria-hidden={true} />
              <h3>Cargando lo último del blog…</h3>
              <p className="microcopy">Obteniendo publicaciones recientes.</p>
            </div>
          ) : latestBlog.length === 0 ? (
            <div key="blog-fallback" className="card">
              <Lightbulb className="cardIcon" aria-hidden={true} />
              <h3>Lo último del blog</h3>
              <p>Historias, métodos y novedades del trabajo.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/blog" data-cta="cta.home.research.blog.fallback">
                  Visita el blog →
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
                      Leer publicación →
                    </a>
                  ) : (
                    <Link
                      className="cardCta"
                      to={post.href}
                      data-cta="cta.home.research.blog.read"
                      aria-label={`Leer ${post.title}`}
                    >
                      Leer publicación →
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
            <h3>Lo más reciente de nuestra investigación</h3>
            <p>Whitepapers y notas técnicas de los proyectos actuales.</p>
            <div className="cardFooter">
              <Link
                className="cardCta"
                to="/docs/research-resources/"
                data-cta="cta.home.research.whitepaper.fallback"
              >
                Explora la investigación →
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
                  aria-label={`Leer ${paper.title}`}
                >
                  Leer whitepaper →
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
      <h2 id="principles-title">Nuestros principios</h2>
      <div className={`cardGrid ${'pages-b4-p1__cardGridTight'}`}>
        <div className="card">
          <Layers className="cardIcon" aria-hidden={true} />
          <h3>01. Modularidad</h3>
          <p>Diseñamos sistemas y procesos que se mantienen flexibles, adaptables y escalables por defecto.</p>
        </div>
        <div className="card">
          <Eye className="cardIcon" aria-hidden={true} />
          <h3>02. Prospectiva</h3>
          <p>Ayudamos a los equipos a anticipar cambios y a preparar opciones creíbles.</p>
        </div>
        <div className="card">
          <Lightbulb className="cardIcon" aria-hidden={true} />
          <h3>03. Evidencia</h3>
          <p>Favorecemos decisiones fundamentadas en datos, retroalimentación de personas usuarias y aprendizaje validado.</p>
        </div>
        <div className="card">
          <Users className="cardIcon" aria-hidden={true} />
          <h3>04. Cocreación</h3>
          <p>Nos asociamos con clientes para cocrear soluciones para las necesidades de hoy y mañana.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const pageTitle = 'Innovación, Prospectiva y Entrega Repetible, Doulab';
  const description =
    'Ayudamos a personas y organizaciones a hacer que la innovación sea repetible y la prospectiva práctica, para que la estrategia se convierta en resultados sostenibles. Obtendrás una línea base breve y un plan de 30, 60 y 90 días.';

  return (
    <Layout title={pageTitle} description={description}>
      <PageMetadata slug="/" ogImage="/img/social/default-og.jpg" />
      <Head>
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content="Doulab, innovación, prospectiva y entrega repetible." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Doulab',
            url: localizedUrl('/'),
            logo: localizedUrl('/img/logo.png'),
            sameAs: ['https://www.linkedin.com/company/doulab'],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: localizedUrl('/'),
            potentialAction: {
              '@type': 'SearchAction',
              target: localizedUrl('/search?q={query}'),
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
        title="Innovación, Prospectiva y Entrega Repetible"
        subtitle="Arquitectura de innovación, prospectiva y coaching para dar forma al mañana."
        body={description}
        imageBase="/img/people-collage"
        imageAlt="Futuros, innovación e inteligencia"
        primaryCta={{
          to: '/services/clarityscan',
          label: 'Empieza con ClarityScan®',
          dataCta: 'cta.home.hero.clarityscan',
          ariaLabel: 'Empieza con ClarityScan, línea base rápida de 15 a 20 minutos',
        }}
        secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Agenda una llamada de descubrimiento', dataCta: 'cta.home.hero.book_call' }}
        ctaNote="Obtén tu línea base en 15 a 20 minutos."
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
          title="¿Listo para hacer que la innovación sea repetible?"
          body="Empieza con un diagnóstico rápido o agenda una llamada de descubrimiento. Medimos latencia de decisión, tiempo de ciclo y crecimiento de capacidades. Te encontramos donde estás y cocreamos contigo el camino a seguir."
          primaryCta={{ to: '/services/clarityscan', label: 'Empieza con ClarityScan®', dataCta: 'cta.home.final.clarityscan' }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Agenda una llamada de descubrimiento', dataCta: 'cta.home.final.book_call' }}
          ctaNote="Obtén tu línea base en 15 a 20 minutos."
        />
      </main>
    </Layout>
  );
}
