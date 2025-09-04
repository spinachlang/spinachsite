import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Spinach Lang',
  tagline: 'An healthier way to go about quantum development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://spinachlang.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spinachsite/',

  // GitHub pages deployment config.
  organizationName: 'spinachlang', // Usually your GitHub org/user name.
  projectName: 'spinachlang', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function dotLoaderPlugin() {
      return {
        name: 'dot-loader',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.dot$/,
                  use: 'raw-loader',
                },
              ],
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    image: 'img/spinach-social-card.jpg',

    navbar: {
      title: 'Spinach Lang',
      logo: {
        alt: 'Spinach Lang Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/spinachlang/spinachlang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/spinachlang',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WypGPaDc7z',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/spinachlang/spinachlang',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spinach Lang, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

