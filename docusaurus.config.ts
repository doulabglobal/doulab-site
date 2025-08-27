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
        { to: '/about', label: 'About', position: 'left' },
        { to: '/services', label: 'Services', position: 'left' },
        { to: '/vigia-futura', label: 'Vigía Futura', position: 'left' },
        { to: '/work-with-us', label: 'Work With Us', position: 'left' },
        { to: '/docs/research-resources/', label: 'Research & Resources', position: 'left' },
        { to: '/docs/releases', label: 'Releases', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
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
