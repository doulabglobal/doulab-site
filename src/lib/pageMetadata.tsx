// G-1: Locale-aware page metadata helper.
//
// Replaces hand-rolled <link rel="canonical">, og:url, og:image, and JSON-LD
// URL strings that previously hard-coded `https://doulab.net/<en-path>` on
// every page. Under the bilingual i18n config, those EN-only URLs were being
// emitted into the ES locale's HTML too, telling Google the ES pages are
// duplicates of EN and dropping them from the index.
//
// Use from any page:
//
//   import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';
//
//   <PageMetadata slug="/about" ogImage="/img/social/og-about.jpg" />
//
//   // Inside JSON-LD blocks, replace hard-coded URLs with localizedUrl(slug):
//   const orgSchema = { '@context': 'https://schema.org', ..., url: localizedUrl('/') };
//
// The component:
//   - Emits <link rel="canonical"> pointing at the CURRENT locale's URL on
//     the canonical host (siteConfig.url, currently https://www.doulab.net).
//   - Emits <meta property="og:url"> matching canonical.
//   - Emits <meta property="og:image"> as an absolute URL on the canonical
//     host (locale-agnostic — social cards are usually shared across locales).
//   - Emits hreflang alternates for every configured locale plus x-default.
//
// `localizedUrl(slug, localeOverride?)` builds an absolute URL on the
// canonical host for a given EN-source slug, prepending /es for the ES locale
// when no explicit override is passed.

import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DEFAULT_OG_IMAGE = '/img/social/default-og.jpg';

type Locale = string;

function trimTrailingSlash(s: string): string {
  return s.length > 1 && s.endsWith('/') ? s.slice(0, -1) : s;
}

function normalizeSlug(slug: string): string {
  if (!slug) return '/';
  const withSlash = slug.startsWith('/') ? slug : `/${slug}`;
  return trimTrailingSlash(withSlash);
}

function localePrefix(locale: Locale, defaultLocale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/**
 * Returns an absolute URL for a given EN-source slug on the canonical host
 * for the chosen locale. If `localeOverride` is omitted, uses the current
 * Docusaurus locale via hook context — so callers in a render path can
 * `localizedUrl('/services')` and get the correct per-locale URL.
 *
 * Because this function must be called inside React rendering when reading
 * the current locale, prefer passing an explicit `localeOverride` when
 * generating cross-locale URLs (e.g., hreflang alternates) so you avoid
 * extra hook calls.
 */
export function localizedUrl(slug: string, localeOverride?: Locale): string {
  // useDocusaurusContext must be called from React render — but we want this
  // helper usable both inside <Head> JSX (render context) and inside JSON-LD
  // object construction (also render context). Both are safe.
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = localeOverride ?? i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  const host = trimTrailingSlash(siteConfig.url);
  const path = normalizeSlug(slug);
  if (path === '/') {
    return locale === defaultLocale ? `${host}/` : `${host}/${locale}`;
  }
  return `${host}${localePrefix(locale, defaultLocale)}${path}`;
}

type PageMetadataProps = {
  /** EN-source slug, e.g. "/about" or "/services/clarityscan". */
  slug: string;
  /** Path to the social-card image under /static. Defaults to /img/social/default-og.jpg. */
  ogImage?: string;
  /** Optional: locales to advertise via hreflang. Defaults to every configured locale. */
  hreflangLocales?: ReadonlyArray<Locale>;
};

export default function PageMetadata({ slug, ogImage, hreflangLocales }: PageMetadataProps): React.ReactElement {
  const { siteConfig, i18n } = useDocusaurusContext();
  const host = trimTrailingSlash(siteConfig.url);
  const defaultLocale = i18n.defaultLocale;
  const allLocales = hreflangLocales ?? i18n.locales;
  const currentLocale = i18n.currentLocale;
  const path = normalizeSlug(slug);

  const currentUrl =
    path === '/'
      ? `${host}${currentLocale === defaultLocale ? '/' : `/${currentLocale}`}`
      : `${host}${localePrefix(currentLocale, defaultLocale)}${path}`;

  const ogImageUrl = `${host}${(ogImage ?? DEFAULT_OG_IMAGE).startsWith('/') ? '' : '/'}${ogImage ?? DEFAULT_OG_IMAGE}`;

  const alternates = allLocales.map((loc) => {
    const url =
      path === '/'
        ? `${host}${loc === defaultLocale ? '/' : `/${loc}`}`
        : `${host}${localePrefix(loc, defaultLocale)}${path}`;
    return { hreflang: loc, href: url };
  });
  // x-default points at the default-locale URL.
  const xDefaultUrl =
    path === '/' ? `${host}/` : `${host}${path}`;

  return (
    <Head>
      <link rel="canonical" href={currentUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImageUrl} />
      {alternates.map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />
    </Head>
  );
}
