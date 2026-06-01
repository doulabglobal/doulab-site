// src/pages/services/diagnostics.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import Binoculars from 'lucide-react/dist/esm/icons/binoculars';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Users from 'lucide-react/dist/esm/icons/users';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

export default function DiagnosticsPage() {
    return (
        <Layout
            title="Diagnósticos: ClarityScan®, Prospectiva y Modelo Operativo"
            description="Evaluaciones basadas en evidencia que establecen la línea base de Estrategia, Cultura, Proceso, Resultados y convierten brechas en un plan 30/60/90. Construido sobre MicroCanvas® 2.2 e IMM; con privacidad primero."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/diagnostics" />
                {/* Preload hero LCP image (PNG) with next-gen alternatives */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/diagnostics-hero.png"
                    imageSrcSet="/img/diagnostics-hero.avif 1x, /img/diagnostics-hero.webp 1x, /img/diagnostics-hero.png 1x"
                    imageSizes="(max-width: 600px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="diagnostics-hero-title">
                    <div className={'pages-b4-p2__heroRow'}>
                        <div className={'pages-b4-p2__heroCopy'}>
                            <h1 id="diagnostics-hero-title" className="heroTitle">Diagnósticos</h1>
                            <p className={`heroSubtitle ${'pages-b4-p2__heroSubtitleJustify'}`}>
                                Establece la capacidad base. Revela brechas. Actúa con confianza.
                            </p>
                            <p className="heroText">
                                Evaluaciones basadas en evidencia que establecen la línea base de <strong>Estrategia</strong>, <strong>Cultura</strong>, <strong>Proceso</strong> y <strong>Resultados</strong>, y luego convierten brechas en un
                                <strong> plan claro de 30/60/90 días</strong>. Construido sobre MicroCanvas® 2.2 e IMM; con privacidad primero por diseño.
                            </p>
                            <div className="heroCtas">
                                <Link className="buttonPrimary" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.hero.clarityscan">
                                    Empieza con ClarityScan®
                                </Link>
                                <Link className="buttonSecondary" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.hero.contact">
                                    Conversemos
                                </Link>
                            </div>
                        </div>

                        <div className={'pages-b4-p2__heroMedia'}>
                            <picture>
                                <source srcSet="/img/diagnostics-hero.avif" type="image/avif" />
                                <source srcSet="/img/diagnostics-hero.webp" type="image/webp" />
                                <img loading="lazy"
                                    src="/img/diagnostics-hero.png"
                                    alt="Diagnósticos: evaluaciones de innovación y prospectiva basadas en evidencia"
                                    className="heroImage"
                                    decoding="async"
                                    width="600"
                                    height="400"
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* What we offer */}
                <section className="section" aria-labelledby="diagnostics-offer-title">
                    <h2 id="diagnostics-offer-title">Qué ofrecemos</h2>
                    <p className={`lead ${'pages-b4-p2__leadMax'}`}>
                        Tres evaluaciones ligeras y con privacidad primero adaptadas a donde estás, cada una con un brief enfocado y un
                        <strong> plan de acción de 30/60/90 días</strong>.
                    </p>

                    <div className="cardGrid">
                        {/* ClarityScan */}
                        <article className="card" aria-labelledby="scan-clarity-title">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-clarity-title">ClarityScan®: Madurez en Innovación</h3>
                            <p>Línea base rápida a través de Estrategia, Cultura, Proceso, Resultados con próximos pasos priorizados.</p>
                            <ul>
                                <li><strong>Qué evaluamos:</strong> claridad de estrategia y OKRs; cultura e incentivos; cadencia de entrega; resultados y medición.</li>
                                <li><strong>Sesión:</strong> ≤ 30 minutos</li>
                            </ul>
                            <div className={`cardFooter ${'pages-b4-p2__cardFooterRow'}`}>
                                <Link className="cardCta" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.offer.clarityscan">
                                    Ejecuta ClarityScan® →
                                </Link>
                                <Link className="cardCta" href={CLARITYSCAN_CHECKOUT_URL} data-cta="cta.diagnostics.offer.clarityscan.book_online" aria-label="Agenda ClarityScan en línea vía Stripe Checkout" target="_blank" rel="noopener noreferrer">
                                    Agenda en línea →
                                </Link>
                            </div>
                        </article>

                        {/* Foresight Readiness */}
                        <article className="card" aria-labelledby="scan-foresight-title">
                            <Binoculars className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-foresight-title">Evaluación de Preparación en Prospectiva</h3>
                            <p>Integra señales, generación de sentido e implicaciones → opciones en planificación y riesgo.</p>
                            <ul>
                                <li><strong>Qué evaluamos:</strong> señales y exploración de horizonte; generación de sentido; implicaciones; opciones; integración de OKR y riesgo.</li>
                                <li><strong>Sesión:</strong> ≤ 60 minutos</li>
                            </ul>
                            <div className="cardFooter">
                                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.offer.foresight">
                                    Consultar →
                                </Link>
                            </div>
                        </article>

                        {/* Operating Model */}
                        <article className="card" aria-labelledby="scan-operating-title">
                            <Settings2 className="cardIcon" aria-hidden="true" />
                            <h3 id="scan-operating-title">Chequeo del Modelo Operativo de Innovación</h3>
                            <p>Gobernanza, roles, cadencia de decisión y métricas para hacer la entrega confiable y escalable.</p>
                            <ul>
                                <li><strong>Qué evaluamos:</strong> gobernanza y puntos de control; propiedad; cadencia; métricas y reportes.</li>
                                <li><strong>Sesión:</strong> ≤ 60 minutos</li>
                            </ul>
                            <div className="cardFooter">
                                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.offer.operating_model">
                                    Consultar →
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* Selection helper */}
                    <div className={`lead ${'pages-b4-p2__leadTop'}`}>
                        <strong>¿Cuál evaluación encaja?</strong> <br />
                        • ¿Solo necesitas una lectura rápida de madurez? <em>ClarityScan®</em>. &nbsp;• ¿Quieres incorporar prospectiva? <em>Preparación en Prospectiva</em>. &nbsp;• ¿La entrega se siente lenta o poco clara? <em>Chequeo del Modelo Operativo</em>.
                    </div>
                </section>

                {/* How it works */}
                <section className="section" aria-labelledby="diagnostics-how-title">
                    <h2 id="diagnostics-how-title">Cómo funciona</h2>
                    <div className="cardGrid">
                        <article className="card" aria-label="Ingesta y contexto">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3>1) Ingesta y contexto</h3>
                            <p>Lectura previa breve sobre metas, restricciones, OKRs, hojas de ruta, métricas (mantenlo ligero).</p>
                        </article>
                        <article className="card" aria-label="Sesión en vivo">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3>2) Sesión en vivo (≤30 a 60 min)</h3>
                            <p><em>ClarityScan® Core</em> ~30 min; <em>Prospectiva</em> y <em>Modelo Operativo</em> hasta 60 min.</p>
                        </article>
                        <article className="card" aria-label="Brief de hallazgos">
                            <FileText className="cardIcon" aria-hidden="true" />
                            <h3>3) Brief de hallazgos</h3>
                            <p>Instantánea de madurez, brechas y un <strong>plan secuenciado de 30/60/90 días</strong>.</p>
                        </article>
                        <article className="card" aria-label="Opciones">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3>4) Opciones</h3>
                            <p>Hazlo tú, con apoyo de Doulab, o un híbrido: tú eliges la cadencia y la profundidad.</p>
                        </article>
                    </div>
                </section>

                {/* What you’ll get */}
                <section className="section" aria-labelledby="diagnostics-outcomes-title">
                    <h2 id="diagnostics-outcomes-title">Qué obtendrás</h2>
                    <div className="cardGrid">
                        <article className="card" aria-label="Evidencia y claridad">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3>Evidencia y claridad</h3>
                            <p>Línea base a través de Estrategia, Cultura, Proceso y Resultados o preparación en prospectiva, no opiniones.</p>
                        </article>
                        <article className="card" aria-label="Plan accionable">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3>Plan accionable</h3>
                            <p>Acciones priorizadas con dueños, métricas simples y una cadencia pragmática.</p>
                        </article>
                        <article className="card" aria-label="Artefactos reutilizables">
                            <FileText className="cardIcon" aria-hidden="true" />
                            <h3>Artefactos reutilizables</h3>
                            <p>Brief conciso que puedes compartir; alineado con la terminología de MicroCanvas® 2.2 e IMM.</p>
                        </article>
                    </div>
                    <p className={`lead ${'pages-b4-p2__leadTop'}`}>
                        ¿Quieres ver una vista previa del formato? <Link to="https://booking.doulab.net/briefing" data-cta="cta.diagnostics.sample_brief">Solicita un brief de hallazgos de muestra</Link>.
                    </p>
                </section>

                {/* FAQ */}
                <section className="section" aria-labelledby="diagnostics-faq-title">
                    <h2 id="diagnostics-faq-title">Preguntas frecuentes</h2>
                    <div className="faqGrid">
                        <details>
                            <summary>¿Qué tan rápido podemos ejecutarlo?</summary>
                            <p>Usualmente podemos agendar en pocos días. ClarityScan® Core toma ~30 minutos; otras evaluaciones hasta 60 minutos.</p>
                        </details>
                        <details>
                            <summary>¿Quién debe asistir?</summary>
                            <p>Un patrocinador más 2 a 4 líderes transversales (por ejemplo, producto, operaciones, entrega) funciona bien.</p>
                        </details>
                        <details>
                            <summary>¿Qué debemos preparar?</summary>
                            <p>Metas, restricciones y cualquier OKR, hoja de ruta o métrica relevante. Lo mantendremos ligero.</p>
                        </details>
                    </div>
                </section>

                {/* Final CTA + data handling */}
                <section className="section" aria-labelledby="diagnostics-cta-title">
                    <div className="finalCta">
                        <h2 id="diagnostics-cta-title">¿Listo para obtener una lectura clara?</h2>
                        <p>
                            Ejecuta un diagnóstico y obtén tu instantánea de madurez más los próximos pasos exactos a seguir. <br />
                            <strong>Manejo de datos:</strong> solo usamos la información que provees para el diagnóstico. Sin rastreadores de terceros.
                            Ver nuestra página de Privacidad para detalles.
                        </p>
                        <div className={`heroCtas ${'pages-b4-p2__ctaCenter'}`}>
                            <Link
                                className="buttonPrimary"
                                href={CLARITYSCAN_CHECKOUT_URL}
                                data-cta="cta.diagnostics.final.clarityscan"
                            >
                                Empieza ClarityScan®
                            </Link>
                            <Link className="buttonSecondary" to="https://booking.doulab.net/discovery" data-cta="cta.diagnostics.final.contact">
                                Conversemos
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Trademark footnote */}
                <section className="section" aria-hidden="true">
                    <p className={'pages-b4-p2__noteCenter'}>
                        MicroCanvas®, IMM-P® y ClarityScan® son marcas de Doulab.
                    </p>
                </section>
            </main>
        </Layout>
    );
}



