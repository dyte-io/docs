/* eslint-disable */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */
const defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/dyte-in/docs/tree/main/',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const latestVersions = {
  'ui-kit': '1.x.x',
  'web-core': '0.27.x',
  'react-native': '0.23.x',
  android: '0.14.x',
  ios: '1.33.x',
  flutter: '0.7.x',
  'android-core': '1.0.0'
};

const SECTIONS = [
  defineSection('guides'),
  defineSection('cli'),

  defineSection('react', { label: '0.x.x' }),
  defineSection('javascript', { label: '0.x.x' }),

  // [web] ui-sdk
  defineSection('ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('react-ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('angular-ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('vue-ui-kit', {
    label: latestVersions['ui-kit'],
  }),

  // [web] core-sdk
  defineSection('web-core', {
    label: latestVersions['web-core'],
  }),

  // [web] mobile-core
  defineSection('android-core', {
    label: latestVersions['android-core'],
  }),


  // [mobile]
  defineSection('react-native', {
    label: latestVersions['react-native'],
  }),
  defineSection('android', {
    label: latestVersions['android'],
  }),
  defineSection('ios', {
    label: latestVersions['ios'],
  }),
  defineSection('flutter', {
    label: latestVersions['flutter'],
  }),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dyte Docs',
  tagline: 'Real-time audio & video SDKs, ready to launch 🚀',
  // TODO: Update base url
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dyte-in', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/dyte-in/docs/tree/main/',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    ...SECTIONS,
    ...UIKitReferencePlugins,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'Web SDKs',
            to: 'react-ui-kit',
            position: 'left',
            className: 'new-badge',
            activeBaseRegex: '(.*ui-kit|.*web-core)',
          },
          {
            label: 'Mobile SDKs',
            to: 'react-native',
            position: 'left',
            activeBaseRegex: '(react-native|android|ios|flutter)',
          },
          {
            label: 'API Reference',
            to: '/api/',
            position: 'left',
          },
          {
            label: 'Guides',
            to: 'guides',
            position: 'left',
          },
          {
            href: 'https://github.com/dyte-in',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://community.dyte.io',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Sign Up',
            href: 'https://accounts.dyte.io/auth/register',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
          {
            label: 'Login',
            href: 'https://accounts.dyte.io/auth/login',
            position: 'right',
            className: 'dev-portal-login dev-portal-link',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://app.dyte.io',
              },
              {
                label: 'Developer Portal',
                href: 'https://dev.dyte.io',
              },
              {
                label: 'Pricing',
                href: 'https://dyte.io/#pricing',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://dyte.io',
              },
              {
                label: 'Join Us',
                href: 'https://dyte.freshteam.com/jobs',
              },
              {
                label: 'Privacy Policy',
                href: 'https://dyte.io/privacy-policy.html',
              },
              {
                label: 'Contact Us',
                href: 'mailto:support@dyte.in',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://docs.dyte.io',
              },
              {
                label: 'Blog',
                href: 'https://dyte.io/blog',
              },
              {
                label: 'Community',
                href: 'https://community.dyte.io',
              },
            ],
          },
        ],
        copyright: 'Copyright © Dyte since 2020. All rights reserved.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
      posthog: {
        apiKey: 'c1X6knGkGuxT4WFysAWi6chjtoMmTzILKO7inv7hIgs',
      },
    }),
};

module.exports = config;
