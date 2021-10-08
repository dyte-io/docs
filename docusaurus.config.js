const { tailwindPlugin, webpackPlugin } = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';

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
    colorMode: {
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
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'prod_docs',
      contextualSearch: true,
      appId: process.env.ALGOLIA_APP_ID,
      searchParameters: {},
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
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react',
        routeBasePath: 'react',
        id: 'react',
        sidebarPath: require.resolve('./sidebars/sidebars-react.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev
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
        onlyIncludeVersions: !isDev
          ? require('./flutter_versions.json')
          : undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react-native',
        routeBasePath: 'react-native',
        id: 'react-native',
        sidebarPath: require.resolve('./sidebars/sidebars-react-native.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev
          ? require('./react-native_versions.json')
          : undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/javascript',
        routeBasePath: 'javascript',
        id: 'javascript',
        sidebarPath: require.resolve('./sidebars/sidebars-javascript.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev
          ? require('./javascript_versions.json')
          : undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/android',
        routeBasePath: 'android',
        id: 'android',
        sidebarPath: require.resolve('./sidebars/sidebars-android.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev
          ? require('./android_versions.json')
          : undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/ios',
        routeBasePath: 'ios',
        id: 'ios',
        sidebarPath: require.resolve('./sidebars/sidebars-ios.js'),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev
          ? require('./ios_versions.json')
          : undefined,
      },
    ],
  ],
};
