import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://doulab.net';

const config: Config = {
  title: 'Doulab',
  tagline: 'We unlock global prosperity by helping others create better futures',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: SITE_URL,
  baseUrl: '/',
  organizationName: 'doulabglobal',
  projectName: 'doulab-site',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  // Enable ```mermaid fences
  markdown: { mermaid: true },

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
          sidebarPath: require.resolve('./sidebars.ts'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/doulabglobal/doulab-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: 'all' }, // rss.xml + atom.xml
          editUrl: 'https://github.com/doulabglobal/doulab-site/edit/main/',
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

    // Mermaid styling (valid keys only)
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
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
        { to: '/what-we-do', label: 'What we do', position: 'left' },
        { to: '/case-studies', label: 'Case Studies', position: 'left' },
        { to: '/insights', label: 'Insights', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'right' },
        { href: 'https://github.com/doulabglobal', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'What we do',
          items: [
            { label: 'Overview', to: '/what-we-do' },
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
      copyright: `© ${new Date().getFullYear()} Doulab. MicroCanvas® and IMM® are registered marks.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

