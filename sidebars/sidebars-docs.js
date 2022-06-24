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
      label: 'Web SDK',
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
      items: ['plugins'],
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
        {
          type: 'link',
          label: 'Integrating with Webhooks',
          href: '/guides/integrating-with-webhooks',
        },
        {
          type: 'link',
          label: 'Recording meetings',
          href: '/guides/recording-your-meetings',
        },
        {
          type: 'link',
          label: 'Livestreaming Dyte Meetings to other platforms',
          href: '/guides/livestreaming-other-platforms',
        },
        {
          type: 'link',
          label: 'Livestreaming Dyte Meetings to HLS',
          href: '/guides/livestreaming-rtmp-hls',
        },
        {
          type: 'link',
          label: 'Livestreaming any RTMP input via Dyte',
          href: '/guides/livestreaming-any-rtmp-streams',
        },
        {
          type: 'link',
          label: 'Dyte Embed',
          href: '/guides/embed',
        }
      ],
    },
  ],
};
