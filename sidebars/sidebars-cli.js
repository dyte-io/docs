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
      items: [
        'installation',
        'getting-started',
        'meetings',
        'recording',
        'plugins',
        'webhooks',
      ]
    },
    {
      type: 'category',
      label: 'Product Integration Guides',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Integrating with Webhooks',
          href: '/guides/integrating-with-webhooks',
        },
        {
          type: 'link',
          label: 'Recording your meetings via Dyte',
          href: '/guides/recording-your-meetings',
        },
        {
          type: 'link',
          label: 'Livestreaming Dyte Meetings to other platforms',
          href: '/guides/livestreaming-other-platforms',
        },
        {
          type: 'link',
          label: 'Livestreaming Dyte Meeting to HLS',
          href: '/guides/livestreaming-rtmp-hls',
        },
        {
          type: 'link',
          label: 'Livestreaming any RTMP input using Dyte',
          href: '/guides/livestreaming-any-rtmp-streams',
        },
        {
          type: 'link',
          label: 'Dyte Embed',
          href: '/guides/embed',
        },
        {
          type: 'link',
          label: 'Controlling an Active Session',
          href: '/guides/controlling-an-active-session'
        },
      ],
    },
  ],
};
