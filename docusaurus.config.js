/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
  posthogPlugin,
} = require('./src/plugins');

const includeNextVersion = true

// if you want to disable `next` version from being published in production build
// const includeNextVersion = process.env.NODE_ENV === 'development';


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dyte Docs',
  tagline: 'Real-time audio & video SDKs, ready to launch 🚀',
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'dyte-in', // Usually your GitHub org/user name.
  projectName: 'dyte-docs', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/dyte-docs-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Dyte Docs',
        src: '/logo.svg',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '(^/docs)',
        },
        {
          label: 'Client SDK',
          to: '/react/quickstart',
        },
        {
          label: 'API Reference',
          to: '/api/',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: process.env.ALGOLIA_API_KEY && {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'prod_docs',
      contextualSearch: true,
      appId: process.env.ALGOLIA_APP_ID,
      searchParameters: {},
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react',
        routeBasePath: 'react',
        id: 'react',
        sidebarPath: require.resolve('./sidebars/sidebars-react.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !includeNextVersion
          ? require('./react_versions.json')
          : undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/flutter',
        routeBasePath: 'flutter',
        id: 'flutter',
        sidebarPath: require.resolve('./sidebars/sidebars-flutter.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !includeNextVersion
          ? require('./flutter_versions.json')
          : undefined,
      },
    ],
  ],
};
