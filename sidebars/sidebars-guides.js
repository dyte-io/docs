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
      label: 'Web SDK',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Installation',
          href: '/react-ui-kit/installation',
        },
        {
          type: 'link',
          label: 'Quickstart',
          href: '/react-ui-kit/quickstart',
        },
        {
          type: 'link',
          label: 'Reference',
          href: '/web-core/Reference/DyteClient',
        },
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsed: true,
      collapsible: true,
      items: [{
        type: 'link',
        label: 'Plugins',
        href: '/docs/plugins',
      }],
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
      label: 'Dyte CLI',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Installation',
          href: '/cli/installation'
        },
        {
          type: 'link',
          label: 'Getting started',
          href: '/cli/getting-started'
        },
        {
          type: 'link',
          label: 'Creating meetings',
          href: '/cli/meetings'
        },
        {
          type: 'link',
          label: 'Recording a meeting',
          href: '/cli/recording'
        },
        {
          type: 'link',
          label: 'Publishing plugins',
          href: '/cli/plugins'
        },
        {
          type: 'link',
          label: 'Creating webhooks',
          href: '/cli/webhooks'
        },
      ]
    },
    {
      type: 'category',
      label: 'Product Integration Guides',
      items: [
        'integrating-with-webhooks',
        'recording-your-meetings',
        'livestreaming-other-platforms',
        'livestreaming-rtmp-hls',
        'livestreaming-any-rtmp-streams',
        'embed',
        'controlling-an-active-session'
      ],
    },
  ],
};
