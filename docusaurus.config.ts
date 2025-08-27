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

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
          feedOptions: { type: ['rss', 'atom'], xslt: true },
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
          title: 'Docs',
          items: [
            { label: 'Research & Resources', to: '/docs/research-resources/' },
            { label: 'Releases', to: '/docs/releases' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact', to: 'work-with-us/contact' },
            { label: 'Apply', to: 'work-with-us/apply' },
            { label: 'Collaborate', to: 'work-with-us/collaborate' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/doulabglobal/doulab-site' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Doulab. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
