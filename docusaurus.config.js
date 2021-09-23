const isProd = process.env.NODE_ENV === 'production';

// Pattern to only include files which do not have `*.hide.*`
// filenames like private.hide.md will not be published, but visible in dev mode
const includePattern = '**/!(*.hide.*)';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dyte Docs',
  tagline: 'Real-time audio & video SDKs, ready to launch 🚀',
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'dyte-in', // Usually your GitHub org/user name.
  projectName: 'dev-docs', // Usually your repo name.
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
          label: 'Guides',
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
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: ['dart'],
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
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.css'),
        },
      },
    ],
  ],
  plugins: [
    'tailwind-plugin',
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react',
        routeBasePath: 'react',
        id: 'react',
        sidebarPath: require.resolve('./sidebars.js'),
        ...(isProd && {
          include: [includePattern],
        }),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/flutter',
        routeBasePath: 'flutter',
        id: 'flutter',
        ...(isProd && {
          include: [includePattern],
        }),
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
