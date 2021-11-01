module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      items: [
        'home/introduction',
        {
          type: 'link',
          label: 'How Dyte works',
          href: '#how-dyte-works',
        },
        {
          type: 'link',
          label: 'Supported Platforms',
          href: '#pick-a-platform-or-framework',
        },
        {
          type: 'link',
          label: 'API',
          href: '#read-about-our-server-apis',
        },
        {
          type: 'link',
          label: 'How to use the docs',
          href: '#how-to-use-these-docs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Client SDK',
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
        {
          type: 'link',
          label: 'Server events',
          href: '/guides/subscribing-to-server-events',
        },
      ],
    },
  ],
};
