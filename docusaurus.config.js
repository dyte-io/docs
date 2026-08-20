const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'OSPI Docs',
  tagline:
    'Documentation for OSPI (Open Standard Product Identification) — the open standard and API platform for product identity, master data and cross-organization product data exchange.',
  url: 'https://docs.ospi-standard.org',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'api-reference',
    path: 'docs/api-reference',
    routeBasePath: '/api-reference',
  },
  {
    id: 'architecture',
    path: 'docs/architecture',
    routeBasePath: '/architecture',
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/BrickeVD/OSPI-APIdocs/tree/main/',
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  future: {
    experimental_faster: true,
  },

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/ospi-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'OSPI Documentation',
          height: '32px',
          width: '120px',
        },
        items: [
          {
            label: 'Guides',
            to: '/guides',
          },
          {
            label: 'API Reference',
            to: '/api-reference',
          },
          {
            label: 'Architecture',
            to: '/architecture',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/BrickeVD/ospi-platform',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          href: '/',
          src: '/logo/dark.svg',
          alt: 'OSPI Documentation',
          height: '32px',
        },
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'API Reference',
                to: '/api-reference',
              },
              {
                label: 'Architecture Decisions',
                to: '/architecture',
              },
            ],
          },
          {
            title: 'Standard',
            items: [
              {
                label: 'OSPI Standard',
                href: 'https://www.ospi-standard.org/',
              },
              {
                label: 'Platform source (GitHub)',
                href: 'https://github.com/BrickeVD/ospi-platform',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation home',
                href: '/',
              },
              {
                label: 'Changelog',
                href: 'https://github.com/BrickeVD/OSPI-APIdocs/blob/main/CHANGELOG.md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OSPI (Open Standard Product Identification). All rights reserved.`,
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: ['json', 'bash', 'typescript', 'yaml'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
    }),
};

module.exports = config;
