/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
  posthogPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/dyte-in/docs/tree/main',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

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
  projectName: 'docs', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/dyte-docs-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    announcementBar: {
      id: 'new_sdks_coming_soon',
      content: 'Coming Soon: Next generation SDKs for web and mobile',
      backgroundColor: '#2160FD',
      textColor: '#fff',
      isCloseable: true,
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
        {
          label: 'Guides',
          to: '/guides/integrating-with-webhooks',
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
        path: 'docs/guides',
        routeBasePath: 'guides',
        id: 'guides',
        sidebarPath: require.resolve('./sidebars/sidebars-guides.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react',
        routeBasePath: 'react',
        id: 'react',
        sidebarPath: require.resolve('./sidebars/sidebars-react.js'),
        onlyIncludeVersions: !isDev
          ? require('./react_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/flutter',
        routeBasePath: 'flutter',
        id: 'flutter',
        sidebarPath: require.resolve('./sidebars/sidebars-flutter.js'),
        onlyIncludeVersions: !isDev
          ? require('./flutter_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react-native',
        routeBasePath: 'react-native',
        id: 'react-native',
        sidebarPath: require.resolve('./sidebars/sidebars-react-native.js'),
        onlyIncludeVersions: !isDev
          ? require('./react-native_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/javascript',
        routeBasePath: 'javascript',
        id: 'javascript',
        sidebarPath: require.resolve('./sidebars/sidebars-javascript.js'),
        onlyIncludeVersions: !isDev
          ? require('./javascript_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/android',
        routeBasePath: 'android',
        id: 'android',
        sidebarPath: require.resolve('./sidebars/sidebars-android.js'),
        onlyIncludeVersions: !isDev
          ? require('./android_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/ios',
        routeBasePath: 'ios',
        id: 'ios',
        sidebarPath: require.resolve('./sidebars/sidebars-ios.js'),
        onlyIncludeVersions: !isDev
          ? require('./ios_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
  ],
};
