module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Introduction',
          href: '/docs/home/introduction',
        },
        {
          type: 'link',
          label: 'How Dyte works',
          href: '/docs/home/introduction#how-dyte-works',
        },
        {
          type: 'link',
          label: 'Supported Platforms',
          href: '/docs/home/introduction#pick-a-platform-or-framework',
        },
        {
          type: 'link',
          label: 'API',
          href: '/docs/home/introduction#read-about-our-server-apis',
        },
        {
          type: 'link',
          label: 'How to use the docs',
          href: '/docs/home/introduction#how-to-use-these-docs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Client SDK',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Installation',
          href: '/react/installation',
        },
        {
          type: 'link',
          label: 'Usage',
          href: '/react/usage',
        },
        {
          type: 'link',
          label: 'Sample app',
          href: '/react/sample-app',
        },
        {
          type: 'link',
          label: 'Reference',
          href: '/react/reference/dyte-meeting',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/api/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Product Integration Guides',
      items: [
        'subscribing-to-server-events',
        'recording-your-meetings',
        'livestreaming-other-platforms',
        'livestreaming-rtmp-hls',
        'livestreaming-any-rtmp-streams',
        'embed',
        'webinar',
      ],
    },
  ],
};
