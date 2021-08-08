/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dyte Docs',
  tagline: 'Audio - Video SDKs ready to go',
  url: 'https://dyte.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dyte-in', // Usually your GitHub org/user name.
  projectName: 'dev-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      style: 'dark',
      title: 'Docs',
      logo: {
        alt: 'Dyte Logo',
        src: 'https://www.dyte.io/images/Dyte-Logo.svg',
      },
      items: [
        {to: '/guide', label: 'Client SDK Reference', position: 'left'},
        {to: '/api', label: 'API Reference', position: 'left'},
        {
          href: 'https://github.com/dyte-in/',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/dyte',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/dyteio',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dyteio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog.dyte.in',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dyte-in',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dyte`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
