import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './Hero.module.css';

type Cta = {
    to: string;
    label: string;
    external?: boolean;
    dataCta?: string;
    ariaLabel?: string;
};

type HeroProps = {
    /** Main heading */
    title: string;
    /** Short subline under title */
    subtitle?: string;
    /** Optional paragraph under subtitle */
    body?: string;

    /** Base path without extension, e.g. "/img/hero-cases" */
    imageBase: string;
    imageAlt: string;
    /** CLS hints (default 1600x900) */
    width?: number;
    height?: number;
    /** sizes for preload/srcset */
    imageSizes?: string;

    /** Primary & secondary CTAs */
    primaryCta?: Cta;
    secondaryCta?: Cta;
    /** Small note under CTAs (e.g., “Get your baseline in 15–20 minutes.”) */
    ctaNote?: string;

    /** Section id & aria */
    id?: string;
    ariaLabelledbyId?: string;

    /** Control eager loading (default false; opt-in for true LCP heroes) */
    eager?: boolean;
};

export default function Hero({
    title,
    subtitle,
    body,
    imageBase,
    imageAlt,
    width = 1600,
    height = 900,
    imageSizes = '(max-width: 600px) 100vw, 600px',
    primaryCta,
    secondaryCta,
    ctaNote,
    id = 'hero',
    ariaLabelledbyId = 'page-hero-title',
    eager = false,
}: HeroProps) {
    const jpg = `${imageBase}.jpg`;
    const webp = `${imageBase}.webp`;
    const avif = `${imageBase}.avif`;

    const ImgTag = (
        <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webp} type="image/webp" />
                <img loading={eager ? 'eager' : 'lazy'}
                    src={jpg}
                    alt={imageAlt}
                    fetchPriority={eager ? 'high' as const : undefined}
                    decoding="async"
                    width={width}
                    height={height}
                className={`heroImage ${styles.image}`}
            />
        </picture>
    );

    return (
        <section className="heroBanner" id={id} aria-labelledby={ariaLabelledbyId}>
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href={jpg}
                    imageSrcSet={`${avif} 1x, ${webp} 1x, ${jpg} 1x`}
                    imageSizes={imageSizes}
                />
            </Head>

            {/* Two-column layout, matching home: text left, image right */}
            <div className={styles.layout}>
                <div className={styles.content}>
                    <h1 id={ariaLabelledbyId} className="heroTitle">{title}</h1>
                    {subtitle && (
                        <p className={`heroSubtitle ${styles.subtitle}`}>
                            {subtitle}
                        </p>
                    )}
                    {body && (
                        <p className="heroText">
                            {body}
                        </p>
                    )}

                    {(primaryCta || secondaryCta) && (
                        <div className="heroCtas">
                            {primaryCta && (
                                primaryCta.external ? (
                                    <a
                                        href={primaryCta.to}
                                        className="buttonPrimary"
                                        data-cta={primaryCta.dataCta}
                                        aria-label={primaryCta.ariaLabel ?? primaryCta.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {primaryCta.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={primaryCta.to}
                                        className="buttonPrimary"
                                        data-cta={primaryCta.dataCta}
                                        aria-label={primaryCta.ariaLabel ?? primaryCta.label}
                                    >
                                        {primaryCta.label}
                                    </Link>
                                )
                            )}

                            {secondaryCta && (
                                secondaryCta.external ? (
                                    <a
                                        href={secondaryCta.to}
                                        className="buttonSecondary"
                                        data-cta={secondaryCta.dataCta}
                                        aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {secondaryCta.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={secondaryCta.to}
                                        className="buttonSecondary"
                                        data-cta={secondaryCta.dataCta}
                                        aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
                                    >
                                        {secondaryCta.label}
                                    </Link>
                                )
                            )}
                        </div>
                    )}

                    {ctaNote && <p className="ctaNote">{ctaNote}</p>}
                </div>

                <div className={styles.media}>
                    {ImgTag}
                </div>
            </div>
        </section>
    );
}
