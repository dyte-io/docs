import {
  ReactIcon,
  UIKitIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  VueIcon,
  JSIcon,
} from './icons';

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  {
    id: 'guides',
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
  {
    name: 'Vue UI Kit',
    id: 'vue-ui-kit',
    icon: VueIcon,
    section: 'ui-sdk',
    disabled: true,
  },

  // - core-sdk
  {
    name: 'JavaScript',
    id: 'web-core',
    icon: JSIcon,
    section: 'core-sdk',
  },
  {
    name: 'React Native Core',
    id: 'rn-core',
    icon: ReactIcon,
    section: 'mobile-core',
  },
  // Mobile SDKs
  {
    name: 'Android Core',
    id: 'android-core',
    icon: AndroidIcon,
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
    id: 'react-native',
    icon: ReactIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Android',
    id: 'android',
    icon: AndroidIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'iOS',
    id: 'ios',
    icon: AppleIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Flutter',
    id: 'flutter',
    icon: FlutterIcon,
    section: 'mobile-sdk',
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
      name: 'Prebuilt SDK',
      section: 'mobile-sdk',
      description: 'Use our pre-built mobile SDK, ready to go',
    },
    {
      name: 'Core SDK',
      section: 'mobile-core',
      isNew: true,
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
];

export { SECTIONS, MULTI_SECTIONS };
