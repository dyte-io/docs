import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from './icons';

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  {
    name: 'React SDK',
    id: 'react',
    icon: ReactIcon,
    section: 'old-web-sdks',
  },
  {
    name: 'JavaScript SDK',
    id: 'javascript',
    icon: JSIcon,
    section: 'old-web-sdks',
  },

  // Plugin SDKs
  // - web
  {
    name: 'Javascript',
    id: 'plugin-sdk',
    icon: JSIcon,
    section: 'plugin-sdk',
  },

  // Web SDKs
  // - ui-sdk
  {
    name: 'Web Components',
    id: 'ui-kit',
    icon: HTMLIcon,
    section: 'ui-sdk',
  },
  {
    name: 'React UI Kit',
    id: 'react-ui-kit',
    icon: ReactIcon,
    section: 'ui-sdk',
  },
  {
    name: 'Angular UI Kit',
    id: 'angular-ui-kit',
    icon: AngularIcon,
    section: 'ui-sdk',
  },

  // - core-sdk
  {
    name: 'JavaScript',
    id: 'web-core',
    icon: JSIcon,
    section: 'core-sdk',
  },

  // Mobile SDKs
  {
    name: 'Android Core',
    id: 'android-core',
    icon: AndroidIcon,
    section: 'mobile-core',
  },
  
  {
    name: 'iOS Core',
    id: 'ios-core',
    icon: AppleIcon,
    section: 'mobile-core',
  },

  {
    name: 'React Native Core',
    id: 'rn-core',
    icon: ReactIcon,
    section: 'mobile-core',
  },
  {
    name: 'Flutter Core',
    id: 'flutter-core',
    icon: FlutterIcon,
    section: 'mobile-core',
  },
  {
    name: 'React Native',
    id: 'rn-ui-kit',
    icon: ReactIcon,
    section: 'mobile-ui-kit',
  },
  {
    name: 'Android',
    id: 'android',
    icon: AndroidIcon,
    section: 'mobile-ui-kit',
  },
  {
    name: 'iOS',
    id: 'ios',
    icon: AppleIcon,
    section: 'mobile-ui-kit',
  },
  {
    name: 'Flutter',
    id: 'flutter',
    icon: FlutterIcon,
    section: 'mobile-ui-kit',
  },
];

const MULTI_SECTIONS = [
  [
    {
      name: 'UI Kit',
      section: 'ui-sdk',
      description:
        'Use our pre-built UI components as a base to build on top of.',
    },
    {
      name: 'Core SDK',
      section: 'core-sdk',
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
  [
    {
      name: 'UI Kit',
      section: 'mobile-ui-kit',
      description: 'Use our pre-built mobile UI Kit SDK, ready to go',
    },
    {
      name: 'Core SDK',
      section: 'mobile-core',
      isNew: true,
      description: 'Build your own UI from scratch, use our low level APIs.',
    }
  ],
  [
    {
      name: 'Plugin SDK for Web',
      section: 'plugin-sdk',
      description: 'Build real-time collaborative apps using Dyte.',
    },
  ],
];

export { SECTIONS, MULTI_SECTIONS };
