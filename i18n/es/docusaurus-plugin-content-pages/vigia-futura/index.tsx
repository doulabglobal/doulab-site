// src/pages/vigia-futura/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Pillars from '@site/src/components/imm/Pillars';
import Roadmap from '@site/src/components/imm/Roadmap';
import PageMetadata from '@site/src/lib/pageMetadata';

type SectionDef = { id: string; label: string };

const SECTIONS: SectionDef[] = [
  { id: 'why', label: 'Por qué' },
  { id: 'family', label: 'Familia de marcos' },
  { id: 'network', label: 'La red' },
  { id: 'index', label: 'El Índice' },
  { id: 'roadmap', label: 'Hoja de ruta' },
  { id: 'engage', label: 'Vinculación' },
];

export default function VigiaFuturaPage() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const headings = SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId((visible.target as HTMLElement).id);
      },
      { rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.6, 1] }
    );

    observerRef.current = observer;
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Vigía Futura, Observatorio de Prospectiva e Innovación"
      description="Vigía Futura es el observatorio de prospectiva e innovación de Doulab. Publica el Índice Nacional de Madurez en Innovación y Transformación Digital, y cura señales, escenarios y benchmarks entre países."
    >
      <PageMetadata slug="/vigia-futura" ogImage="/img/vigia-futura-hero.png" />
      <Head>
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Vigía Futura, Observatorio de Prospectiva e Innovación" />
        <meta
          property="og:description"
          content="Vigía Futura es el observatorio de prospectiva e innovación de Doulab. Publica el Índice Nacional de Madurez en Innovación y Transformación Digital, y cura señales, escenarios y benchmarks entre países."
        />
        <meta property="og:image:alt" content="Vigía Futura, observatorio de prospectiva e innovación" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          as="image"
          href="/img/vigia-futura-hero.png"
          imageSrcSet="/img/vigia-futura-hero.avif 1x, /img/vigia-futura-hero.webp 1x, /img/vigia-futura-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Opening / framing */}
        <Hero
          title="Vigía Futura"
          subtitle="El observatorio de prospectiva e innovación de Doulab"
          body="Vigía Futura conecta evidencia, señales y aprendizaje entre instituciones para que los sistemas nacionales de innovación compongan progreso en lugar de reiniciarse entre cohortes. Es la casa del próximo Índice Nacional de Madurez en Innovación y Transformación Digital."
          imageBase="/img/vigia-futura-hero"
          imageAlt="Vigía Futura, observatorio de prospectiva e innovación"
          width={1600}
          height={900}
          primaryCta={{ to: 'https://booking.doulab.net/briefing', label: 'Agenda una llamada de descubrimiento', dataCta: 'cta.vigia.hero.contact', ariaLabel: 'Agenda una llamada de descubrimiento' }}
          secondaryCta={{ to: '#index', label: 'Ver el Índice', dataCta: 'cta.vigia.hero.index', ariaLabel: 'Ir al Índice' }}
          ctaNote="Privacidad primero. Sin píxeles de seguimiento."
          id="vf-hero"
          ariaLabelledbyId="vf-hero-title"
        />

        {/* In-page subnav */}
        <div className="container">
          <nav className={`subnav ${'pages-vigia-futura-vigia-futura__subnav'}`} aria-label="En esta página">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`${'pages-vigia-futura-vigia-futura__subnavLink'}${activeId === s.id ? ' subnavActive' : ''}`}
                aria-current={activeId === s.id ? 'true' : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 2. The problem this addresses */}
        <section className="section" id="why" aria-labelledby="vf-why-title">
          <Heading as="h2" id="why">
            Por qué un observatorio, y por qué ahora
          </Heading>
          <p className="sectionLead">
            Los ecosistemas de innovación se estancan sin infraestructura de continuidad: prospectiva creíble, medición honesta de la madurez y gobernanza para el aprendizaje institucional.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="why-foresight-title">
              <h3 id="why-foresight-title">La prospectiva ya es una capacidad del sector público</h3>
              <p>
                El trabajo de prospectiva estratégica de la OCDE posiciona la gobernanza anticipatoria como capacidad central de las administraciones modernas, no como un ejercicio periférico. La mayoría de los países aún carecen del músculo institucional para convertir señales en decisiones.
              </p>
              <p className="microcopy">Fuente: OECD Strategic Foresight Unit.</p>
            </article>
            <article className="card" aria-labelledby="why-maturity-title">
              <h3 id="why-maturity-title">La madurez, no la actividad, es el cuello de botella</h3>
              <p>
                El trabajo de preparación del Foro Económico Mundial muestra que los resultados del ecosistema siguen más a la madurez de capacidades que al volumen de programas. Contar eventos y cohortes sobreestima el progreso; medir capacidad expone dónde se compone la inversión.
              </p>
              <p className="microcopy">Fuente: marcos de preparación y competitividad del WEF.</p>
            </article>
            <article className="card" aria-labelledby="why-threshold-title">
              <h3 id="why-threshold-title">Los umbrales de coordinación determinan el despegue</h3>
              <p>
                Los ecosistemas que cruzan un umbral de coordinación, donde los actores comparten evidencia, vocabulario y bucles de retroalimentación, se componen. Los que no, se reinician con cada ciclo de gobierno. Un observatorio existe para sostener esa continuidad.
              </p>
              <p className="microcopy">Fuente: tesis del umbral de coordinación de Doulab (blog del sitio).</p>
            </article>
          </div>
        </section>

        {/* 3. The framework family */}
        <section className="section" id="family" aria-labelledby="vf-family-title">
          <h2 id="vf-family-title">La Familia de Marcos Vigía</h2>
          <p className="sectionLead">
            Un conjunto coherente de marcos para constructores de ecosistemas. Cada pieza hace una sola tarea; juntas conforman la pila operativa de los sistemas nacionales de innovación.
          </p>
          <Pillars
            ariaLabel="Pilares de la Familia de Marcos Vigía"
            foundationLabel="Fundamento común: MCF v2.2 (MicroCanvas® Framework)"
            pillars={[
              {
                title: 'VIF',
                body: 'Vigía Incubanet Framework. Arquitectura y estándares operativos para redes nacionales público-privadas de incubadoras.',
                accent: 'indigo',
                href: 'https://vif.doulab.net',
              },
              {
                title: 'VILF',
                body: 'Vigía Innovation Lab Framework. Arquitectura de cinco columnas para redes de laboratorios de innovación a nivel institucional y nacional.',
                accent: 'purple',
                href: 'https://vilf.doulab.net',
              },
              {
                title: 'IMM',
                body: 'Modelo de Madurez en Innovación. La columna de capacidades. Cinco dominios que describen cómo maduran realmente los ecosistemas e instituciones.',
                accent: 'green',
                to: '/services/innovation-maturity#imm-model',
              },
              {
                title: 'IMM-P®',
                body: 'La columna de ejecución. El programa de vinculación mediante el cual las instituciones avanzan en su madurez con evidencia, compuertas y bucles de aprendizaje.',
                accent: 'amber',
                to: '/services/innovation-maturity',
              },
              {
                title: 'MEL',
                body: 'Monitoreo, evaluación y aprendizaje. La capa de retroalimentación que convierte la actividad en memoria institucional entre cohortes y ciclos.',
                accent: 'slate',
              },
            ]}
          />
        </section>

        {/* 4. The Vigía Futura Network */}
        <section className="section" id="network" aria-labelledby="vf-network-title">
          <h2 id="vf-network-title">La Red Vigía Futura</h2>
          <p className="sectionLead">
            Vigía Futura es la capa de observatorio. La Red es la coalición de observatorios, laboratorios y socios de investigación que produce y cura sus resultados.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="net-publish-title">
              <h3 id="net-publish-title">Qué publica el observatorio</h3>
              <ul>
                <li>El Índice Nacional de Madurez en Innovación y Transformación Digital.</li>
                <li>Bibliotecas de señales y briefings de escenarios en dominios prioritarios.</li>
                <li>Datos de benchmarking y estudios comparativos entre países.</li>
                <li>Notas de método y paquetes de replicación para instituciones socias.</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="net-network-title">
              <h3 id="net-network-title">Una red, no una sola institución</h3>
              <p>
                Construimos Vigía Futura con socios públicos y privados: universidades, ministerios, constructores de ecosistemas y programas multilaterales. Cada nodo aporta evidencia local; la Red aporta método compartido, comparabilidad y continuidad.
              </p>
            </article>
            <article className="card" aria-labelledby="net-stance-title">
              <h3 id="net-stance-title">Postura</h3>
              <p>
                Independiente, anclada en evidencia, replicable. El trabajo del observatorio es reportar qué madura realmente y qué no, en un lenguaje sobre el que ministros, juntas y constructores de ecosistemas puedan actuar.
              </p>
            </article>
          </div>
        </section>

        {/* 5. The Index (centerpiece) */}
        <section className="section" id="index" aria-labelledby="vf-index-title">
          <h2 id="vf-index-title">El Índice Nacional de Madurez en Innovación y Transformación Digital</h2>
          <p className="sectionLead">
            Un instrumento de medición basado en IMM que califica ecosistemas nacionales en cinco dominios de capacidad y una vertical de transformación digital. Próximamente; pilotos en marcha.
          </p>
          <Pillars
            ariaLabel="Dimensiones del Índice"
            foundationLabel="Anclado en IMM y la vertical IMM-DT"
            pillars={[
              {
                title: 'Evidencia y disciplina epistémica',
                body: 'Qué tan rigurosamente el ecosistema produce, comparte y usa evidencia para actualizar decisiones.',
                accent: 'indigo',
              },
              {
                title: 'Lógica de decisión y gobernanza',
                body: 'Cómo se enmarcan, escalan y rinden cuentas las decisiones entre actores públicos y privados.',
                accent: 'purple',
              },
              {
                title: 'Cultura y comportamiento',
                body: 'Si la práctica cotidiana recompensa el aprendizaje, la franqueza sobre el fracaso y la iteración disciplinada.',
                accent: 'green',
              },
              {
                title: 'Iteración y mejora adaptativa',
                body: 'Si el ecosistema cierra bucles entre política, programa y resultado, y mejora ciclo tras ciclo.',
                accent: 'amber',
              },
              {
                title: 'Gobernanza sistémica y de IA',
                body: 'Si la tecnología emergente, especialmente la IA, se gobierna con prospectiva y salvaguardas institucionales.',
                accent: 'red',
              },
              {
                title: 'Vertical IMM-DT',
                body: 'Madurez de transformación digital a escala nacional: infraestructura, servicios, talento, datos y adopción.',
                accent: 'slate',
              },
            ]}
          />
          <div className="cardGrid">
            <article className="card" aria-labelledby="index-use-title">
              <h3 id="index-use-title">Qué desbloquea el Índice</h3>
              <ul>
                <li>Comparabilidad año tras año para gobiernos y ministerios.</li>
                <li>Inversión focalizada por multilaterales y socios de desarrollo donde la capacidad sea limitante.</li>
                <li>Un vocabulario compartido para constructores de ecosistemas más allá de las fronteras.</li>
                <li>Un diagnóstico que sobrevive a los cambios de administración.</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="index-method-title">
              <h3 id="index-method-title">Método, en breve</h3>
              <p>
                El Índice combina escaneos institucionales, auditorías de evidencia y revisión estructurada de expertos contra rúbricas IMM. Se calibra contra instrumentos de preparación establecidos (OCDE, WEF) y se publica con notas de método completas para que los países puedan replicar o impugnar los hallazgos.
              </p>
            </article>
          </div>
        </section>

        {/* 6. Roll-out roadmap */}
        <section className="section" id="roadmap" aria-labelledby="vf-roadmap-title">
          <h2 id="vf-roadmap-title">Hoja de ruta de despliegue</h2>
          <p className="sectionLead">
            La Red y el Índice se despliegan por horizontes. Cada horizonte entrega un artefacto utilizable, no una diapositiva de hito.
          </p>
          <Roadmap
            ariaLabel="Hoja de ruta de despliegue de Vigía Futura"
            horizons={[
              {
                range: '0 a 6 meses',
                label: 'Consolidar el observatorio',
                body: 'Marco operativo definido; primeros países piloto delineados con socios.',
                state: 'now',
                initiatives: [
                  'Marco de observatorio Vigía Futura consolidado',
                  'Alcance de países piloto y alineación de socios',
                ],
              },
              {
                range: '6 a 12 meses',
                label: 'Ejecutar los primeros escaneos',
                body: 'Escaneos nacionales de madurez ejecutados en el conjunto piloto; primera biblioteca pública de señales publicada.',
                state: 'now',
                initiatives: [
                  'Escaneos nacionales de madurez en países piloto',
                  'Biblioteca de señales v1 publicada',
                ],
              },
              {
                range: '12 a 18 meses',
                label: 'Publicar el Índice',
                body: 'Primera publicación pública del Índice, acompañada de un reporte de benchmark de ecosistema.',
                state: 'next',
                initiatives: [
                  'Publicación del Índice v1',
                  'Reporte de benchmark entre países',
                ],
              },
              {
                range: '18 a 30 meses',
                label: 'Escalar la Red',
                body: 'Expansión a países adicionales; ciclo anual de publicación del Índice establecido.',
                state: 'next',
                initiatives: [
                  'Expansión de la Red a países adicionales',
                  'Cadencia anual de publicación del Índice',
                ],
              },
              {
                range: '30 a 48 meses',
                label: 'Integrar IMM-DT y multilaterales',
                body: 'Vertical IMM-DT completa integrada al Índice; alianzas multilaterales formalizadas.',
                state: 'later',
                initiatives: [
                  'Vertical IMM-DT plenamente integrada',
                  'Alianzas multilaterales formalizadas',
                ],
              },
            ]}
          />
        </section>

        {/* 7. Working with Vigía Futura */}
        <section className="section" id="engage" aria-labelledby="vf-engage-title">
          <h2 id="vf-engage-title">Trabajando con Vigía Futura</h2>
          <p className="sectionLead">
            Vigía Futura trabaja con gobiernos, ministerios, programas multilaterales, universidades y constructores de ecosistemas.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="engage-gov-title">
              <h3 id="engage-gov-title">Gobiernos y ministerios</h3>
              <p>Escaneos nacionales, briefings de prospectiva y hojas de ruta de capacidad ligadas a proyectos IMM-P®.</p>
            </article>
            <article className="card" aria-labelledby="engage-multi-title">
              <h3 id="engage-multi-title">Programas multilaterales</h3>
              <p>Comparabilidad entre países, focalización de inversión y evaluación conjunta contra rúbricas compartidas.</p>
            </article>
            <article className="card" aria-labelledby="engage-eco-title">
              <h3 id="engage-eco-title">Universidades y constructores de ecosistemas</h3>
              <p>Nodos locales de observatorio, paquetes de replicación y acceso a la biblioteca de señales y notas de método.</p>
            </article>
          </div>
          <div className={`heroCtas ${'pages-vigia-futura-vigia-futura__centeredCtas'}`}>
            <Link className="buttonPrimary" to="https://booking.doulab.net/briefing" data-cta="cta.vigia.mid.briefing">
              Agenda una llamada de descubrimiento
            </Link>
          </div>
        </section>

        {/* 8. Final CTA */}
        <FinalCta
          id="vf-final"
          ariaLabelledbyId="vf-cta-title"
          title="Conversemos sobre Vigía Futura"
          body="Ya sea que lideres un ministerio, un programa multilateral, una universidad o una coalición de ecosistema, delinearemos una ruta que se ajuste a tu contexto. Privacidad primero, sin píxeles de seguimiento."
          primaryCta={{ to: 'https://booking.doulab.net/briefing', label: 'Agenda una llamada de descubrimiento', dataCta: 'cta.vigia.final.contact' }}
        />
      </main>
    </Layout>
  );
}
