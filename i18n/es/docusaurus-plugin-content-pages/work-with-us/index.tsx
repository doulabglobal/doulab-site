// src/pages/work-with-us/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Search from 'lucide-react/dist/esm/icons/search';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Users from 'lucide-react/dist/esm/icons/users';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Radar from 'lucide-react/dist/esm/icons/radar';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import Hero from '@site/src/components/Hero';
import type { JSX } from 'react';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import PageMetadata from '@site/src/lib/pageMetadata';


export default function WorkWithUsPage(): JSX.Element {
    return (
        <Layout
            title="Trabaja con Doulab"
            description="Formas prácticas de empezar: diagnostica, alinea y construye capacidad para que la estrategia se convierta en resultados sostenidos."
        >
            <PageMetadata slug="/work-with-us" ogImage="/img/docusaurus-social-card.jpg" />
            <Head>
                <meta property="og:title" content="Trabaja con Doulab" />
                <meta property="og:description" content="Formas prácticas de empezar: diagnostica, alinea y construye capacidad para que la estrategia se convierta en resultados sostenidos." />
                <meta property="og:image:alt" content="Doulab: Trabaja con nosotros" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="author" content="Luis Santiago Arias" />
                {/* LCP: hero image preload with next-gen sources */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/work-with-us-hero.png"
                    imageSrcSet="/img/work-with-us-hero.avif 1x, /img/work-with-us-hero.webp 1x, /img/work-with-us-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />

                {/* FAQPage schema (SEO) */}
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: '¿Qué tan rápido podemos comenzar?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Los diagnósticos pueden comenzar en días. Los talleres se agendan en 1 a 2 semanas.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: '¿Remoto o presencial?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Ambos. Usamos lienzos colaborativos de forma remota y plantillas estructuradas en sitio.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: '¿Duración típica del compromiso?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Diagnósticos: 1 a 2 semanas. Talleres: medio día o día completo (+ preparación ligera). Programas y coaching: 6 a 12+ semanas.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: '¿Precios?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Tarifa fija para diagnósticos y talleres; retainers simples para coaching; precios de programas según alcance.',
                                    },
                                },
                            ],
                        }),
                    }}
                />
            </Head>

            <main>
                <Hero
                    title="Trabaja con Doulab"
                    subtitle="Formas prácticas de empezar: diagnostica, alinea y construye capacidad."
                    body={"Empieza en pequeño o profundiza. Hacemos que la innovación sea repetible y la prospectiva práctica, para que la estrategia se convierta en resultados sostenidos."}
                    imageBase="/img/work-with-us-hero"
                    imageAlt="Trabaja con Doulab"
                    width={600}
                    height={400}
                    primaryCta={{ to: '/services/clarityscan', label: 'Explora ClarityScan', dataCta: 'cta.wwu.hero.explore_clarityscan' }}
                    secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda un ClarityScan® en línea', dataCta: 'cta.wwu.hero.book_clarityscan_online', external: true, ariaLabel: 'Agenda un ClarityScan en línea vía Stripe Checkout' }}
                    ctaNote="¿Alianza o referido? Agenda una llamada de descubrimiento de 20 min."
                    id="wwu-hero"
                    ariaLabelledbyId="wwu-hero-title"
                />
                {/* Hero */}


                {/* 3 ways to start */}
                <section id="start" className="section" aria-labelledby="wwu-start-title">
                    <h2 id="wwu-start-title">Tres formas de empezar, según tu objetivo</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="wwu-card-clarity">
                            <Search className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-clarity">Diagnóstico ClarityScan®</h3>
                            <p>
                                Capacidad base en <strong>días</strong>, identifica las brechas que mueven la aguja y termina con una
                                instantánea de acciones priorizadas.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="/services/clarityscan"
                                    className="cardCta"
                                    data-cta="cta.wwu.start.clarityscan"
                                    data-section="wwu"
                                    data-step="cards"
                                    aria-label="Ejecuta un diagnóstico ClarityScan"
                                >
                                    Ejecuta un diagnóstico →
                                </Link>
                                <Link
                                    href={CLARITYSCAN_CHECKOUT_URL}
                                    className="cardCta"
                                    data-cta="cta.wwu.start.clarityscan_book_online"
                                    aria-label="Agenda ClarityScan en línea vía Stripe Checkout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Agenda en línea →
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="wwu-card-workshop">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-workshop">Taller a medida</h3>
                            <p>
                                En sesiones de <strong>medio día o día completo</strong>, alinea decisiones y termina con un <strong>30-60-90</strong> que puedes ejecutar.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="/services/custom-workshops"
                                    className="cardCta"
                                    data-cta="cta.wwu.start.workshop"
                                    data-section="wwu"
                                    data-step="cards"
                                >
                                    Inicia un sprint de taller →
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="wwu-card-call">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-card-call">Llamada de descubrimiento</h3>
                            <p>
                                Comparte objetivos y restricciones; te orientaremos hacia la ruta más rápida: diagnóstico, taller, programa o coaching.
                            </p>
                            <div className="cardFooter">
                                <Link
                                    to="https://booking.doulab.net/discovery"
                                    className="cardCta"
                                    data-cta="cta.wwu.start.call"
                                    data-section="wwu"
                                    data-step="cards"
                                    aria-label="Agenda una llamada de descubrimiento"
                                >
                                    Agenda una llamada →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* How we work (process rail) */}
                <section id="process" className="section" aria-labelledby="wwu-process-title">
                    <h2 id="wwu-process-title">Cómo trabajamos (ligero y orientado a resultados)</h2>
                    <p className="sectionLead">
                        Ligero, por etapas y orientado a resultados. Te encontramos donde estás y generamos impulso rápidamente.
                    </p>

                    <ol className="processRail">
                        <li className="processStep">
                            <Target className="stepIcon" aria-hidden="true" />
                            <h4>1) Mapea y prioriza</h4>
                            <p>Usa ClarityScan® para evaluar la capacidad, encontrar brechas y enfocarte donde el impacto es mayor.</p>
                            <p className="microcopy">Evidencia: puntaje base + top&nbsp;3 brechas de capacidad.</p>
                        </li>
                        <li className="processStep">
                            <Lightbulb className="stepIcon" aria-hidden="true" />
                            <h4>2) Alinea y decide</h4>
                            <p>Ejecuta un taller para resolver tensiones, elegir opciones y acordar los próximos movimientos.</p>
                            <p className="microcopy">Gate: opción elegida, responsables, 30-60-90.</p>
                        </li>
                        <li className="processStep">
                            <Layers className="stepIcon" aria-hidden="true" />
                            <h4>3) Construye capacidad</h4>
                            <p>Despliega programas y coaching para instalar cultura, proceso y medición.</p>
                            <p className="microcopy">Gate: práctica instalada; cadencia y métricas activas.</p>
                        </li>
                        <li className="processStep">
                            <Radar className="stepIcon" aria-hidden="true" />
                            <h4>4) Anticipa futuros</h4>
                            <p>Usa Vigía Futura para rastrear señales, poner a prueba la estrategia y mantenerte preparado para el futuro.</p>
                            <p className="microcopy">Evidencia: riesgos y opciones registrados; próxima fecha de revisión.</p>
                        </li>
                    </ol>
                </section>

                {/* Proof */}
                <section id="results" className="section" aria-labelledby="wwu-proof-title">
                    <h2 id="wwu-proof-title">Resultados que hemos ayudado a entregar</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="wwu-proof-siembra">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-siembra">AFP Siembra</h3>
                            <p>
                                De experimentos a resultados: diseño del producto Alcanza + coordinación del lanzamiento de SILAB; coaching guiado por IMM durante
                                <strong> 2.5 años</strong>.
                            </p>
                        </article>
                        <article className="card" aria-labelledby="wwu-proof-alpha">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-alpha">Alpha Inversiones</h3>
                            <p>
                                Establecimos el proceso de innovación y mentoreamos Alpha Escalable; las bases apoyaron el nuevo lanzamiento de
                                <strong> Alpha en Línea</strong>.
                            </p>
                        </article>
                        <article className="card" aria-labelledby="wwu-proof-public">
                            <CheckCircle2 className="cardIcon" aria-hidden="true" />
                            <h3 id="wwu-proof-public">FUNDAPEC y OGTIC</h3>
                            <p>
                                Construimos una plataforma comunitaria con FUNDAPEC; con OGTIC, adaptamos MCF e IMM para escalar laboratorios y ecosistemas del sector público.
                            </p>
                        </article>
                    </div>

                    <div className="proofStrip" aria-label="Organizaciones que hemos apoyado">
                        <img src="/img/afpsiembra.png" alt="AFP Siembra" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/OGTIC_horizontal_fullcolor.png" alt="OGTIC" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/alpha.png" alt="Alpha Inversiones" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/fundapec.png" alt="FUNDAPEC" width={160} height={48} loading="lazy" decoding="async" />
                        <img src="/img/runway.png" alt="Runway Innovation Hub" width={160} height={48} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* Who we work with */}
                <section id="fit" className="section" aria-labelledby="wwu-fit-title">
                    <h2 id="wwu-fit-title">Con quién trabajamos mejor</h2>
                    <p className="sectionLead">
                        Instituciones públicas, finanzas reguladas, educación, scale-ups y ecosistemas donde la evidencia y los resultados importan.
                    </p>
                    <ul className="chips">
                        <li>Sector público</li>
                        <li>Servicios financieros</li>
                        <li>Educación y fuerza laboral</li>
                        <li>Scale-ups y startups</li>
                        <li>Incubadoras y aceleradoras</li>
                    </ul>
                    <p className={`microcopy ${'pages-work-with-us-work-with-us__microcopyTight'}`}>
                        ¿Nuevo por aquí? Conoce nuestros Programas y Coaching y mentoría en la página de{' '}
                        <Link to="/services">Servicios</Link>.
                    </p>
                </section>

                {/* FAQ */}
                <section id="faq" className="section" aria-labelledby="wwu-faq-title">
                    <h2 id="wwu-faq-title">Preguntas frecuentes</h2>
                    <div className="faqGrid">
                        <details>
                            <summary>¿Qué tan rápido podemos comenzar?</summary>
                            <p>Los diagnósticos pueden comenzar en días. Los talleres normalmente se agendan en 1 a 2 semanas.</p>
                        </details>
                        <details>
                            <summary>¿Remoto o presencial?</summary>
                            <p>Ambos. Usamos lienzos colaborativos de forma remota y plantillas estructuradas en sitio.</p>
                        </details>
                        <details>
                            <summary>¿Duración típica del compromiso?</summary>
                            <p>Diagnósticos: 1 a 2 semanas. Talleres: medio día o día completo (+ preparación ligera). Programas y coaching: 6 a 12+ semanas.</p>
                        </details>
                        <details>
                            <summary>¿Precios?</summary>
                            <p>Tarifa fija para diagnósticos y talleres; retainers simples para coaching; precios de programas según alcance.</p>
                        </details>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section id="get-started" className="section" aria-labelledby="wwu-cta-title">
                    <div className="finalCta">
                        <h2 id="wwu-cta-title">¿Listo para pasar de planes a entregas repetibles?</h2>
                        <p>Empieza con ClarityScan® o agenda una llamada de descubrimiento. Co-crearemos el camino desde la idea hasta los resultados.</p>
                        <div className={`heroCtas ${'pages-work-with-us-work-with-us__centeredCtas'}`}>
                            <Link
                                to="/services/clarityscan"
                                className="buttonPrimary"
                                data-cta="cta.wwu.footer.clarityscan"
                                data-section="wwu"
                                data-step="final"
                            >
                                Comienza con ClarityScan®
                            </Link>
                            <Link
                                to="https://booking.doulab.net/discovery"
                                className="buttonSecondary"
                                data-cta="cta.wwu.footer.contact"
                                data-section="wwu"
                                data-step="final"
                            >
                                Habla con nosotros
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
