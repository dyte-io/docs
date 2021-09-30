const { tailwindPlugin, webpackPlugin } = require('./src/plugins');

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
          to: '/api',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: ['dart'],
      theme: require('prism-react-renderer/themes/vsDark'),
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
        blog: {
          showReadingTime: true,
        },
        theme: {
          // customCss: require.resolve("./src/css/tailwind.css"),
        },
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
      },
    ],
  ],
};
