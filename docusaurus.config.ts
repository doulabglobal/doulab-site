import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://www.doulab.net';

const config: Config = {
  title: 'Doulab',
  tagline: 'We unlock global prosperity by helping others create better futures',
  favicon: 'img/favicon.ico',

  // V4 migration trial 2026-06-01: enabled `future: { v4: true, faster: true }`
  // briefly, then reverted. v4 caused every doc page and every blog page to
  // fail SSG with `TypeError: Cannot read properties of undefined (reading
  // 'id')` in DocItem, and produced doubled blog tag URLs like
  // `/blog/tags/blog/tags/announcement`. Not a flip-the-switch migration on
  // this site — needs root-cause work in DocItem theme path + blog tag
  // route generation. Tracked as E-V4 in docs/ops/doulab-net-backlog.md.
  future: {},

  url: SITE_URL,
  baseUrl: '/',
  organizationName: 'doulabglobal',
  projectName: 'doulab-site',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  // ES launch (E-I2, 2026-06-01): bilingual rollout. EN at /*, ES at /es/*.
  // Translation files live under i18n/es/. Until a given page or doc is
  // translated, Docusaurus falls back to the EN source automatically.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-US' },
      es: { label: 'Español', htmlLang: 'es-ES' },
    },
  },

  // Enable ```mermaid fences
  markdown: { mermaid: true, hooks: { onBrokenMarkdownLinks: 'warn' } },

  // BRAND-007 (revised) / LH-NEW-005 (E-R1.1): Roboto is self-hosted from /static/fonts.
  // The prior Google Fonts <link rel="stylesheet"> loader was render-blocking and cost
  // ~15 Lighthouse Performance points sitewide. @font-face declarations live in
  // src/css/custom.css; preload below warms the most-used face (weight 400) without
  // blocking render. CSP no longer needs fonts.googleapis.com / fonts.gstatic.com.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        as: 'font',
        href: '/fonts/roboto-regular.woff2',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  // Load Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: ['ops/**'],
          sidebarPath: require.resolve('./sidebars.ts'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/doulabglobal/doulab-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: 'all' }, // rss.xml + atom.xml
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    // E-R2.2a (2026-06-01): disable the dev-only BaseUrlIssueBanner. It injects
    // 5 inline style= attributes into rendered HTML and trips the CSP Report-Only
    // style-src-attr. The banner only fires on a baseUrl misconfig, which is not
    // a real risk for our pinned config.
    baseUrlIssueBanner: false,

    // Mermaid styling (valid keys only)
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        // Aligned to Roboto sitewide (Phase E close-out). Mermaid diagrams now
        // render in the same typeface as IMM presentations and the rest of the site.
        fontFamily:
          "Roboto, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial",
        themeVariables: {
          fontSize: '16px',
          lineColor: '#1F2A44',
          textColor: '#0D1117',
          primaryColor: '#F8F9FB',
          primaryBorderColor: '#1F2A44',
          primaryTextColor: '#0D1117',
          secondaryColor: '#E6FAFB',
          tertiaryColor: '#FFF3D1',
          noteBkgColor: '#FFF3D1',
          noteTextColor: '#0D1117',
        },
        flowchart: { curve: 'basis', htmlLabels: true, nodeSpacing: 55, rankSpacing: 48 },
        sequence: { actorFontSize: 16, messageFontSize: 16, noteFontSize: 15, showSequenceNumbers: false },
      },
    },

    navbar: {
      title: 'Doulab',
      logo: { alt: 'Doulab Logo', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/services', label: 'Services', position: 'left' },
        { to: '/case-studies', label: 'Case Studies', position: 'left' },
        { to: '/insights', label: 'Insights', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/work-with-us', label: 'Work with us', position: 'right' },
        { to: '/contact', label: 'Contact', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Services',
          items: [
            { label: 'Overview', to: '/services' },
            { label: 'Case Studies', to: '/case-studies' },
            { label: 'Vigía Futura', to: '/vigia-futura' },
            { label: 'Insights', to: '/insights' },
            { label: 'Start with ClarityScan®', to: '/services/clarityscan' },
          ],
        },
        {
          title: 'Docs',
          items: [
            { label: 'Research & Resources', to: '/docs/research-resources/' },
            { label: 'Releases', to: '/docs/releases' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact', to: '/contact' },
            { label: 'Email', href: 'mailto:hello@doulab.net' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/doulab' },
            { label: 'GitHub', href: 'https://github.com/doulabglobal' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'Privacy & Terms', to: '/privacy-terms' },
            { label: 'RSS (XML)', href: `${SITE_URL}/blog/rss.xml` },
            { label: 'Atom (XML)', href: `${SITE_URL}/blog/atom.xml` },
            { label: 'Sitemap', href: `${SITE_URL}/sitemap.xml` },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Doulab. MicroCanvas® and IMM-P® are registered marks.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

