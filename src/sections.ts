import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'React',
    docId: 'react',
    icon: ReactIcon,
    section: 'web-prebuilt',
  },
  {
    name: 'JavaScript',
    docId: 'javascript',
    icon: JSIcon,
    section: 'web-prebuilt',
  },

  // Plugin SDKs
  // - web
  {
    name: 'Javascript',
    docId: 'plugin-sdk',
    icon: JSIcon,
    section: 'plugin-sdk',
  },

  // Web SDKs
  // - web-ui-kit
  {
    name: 'Web Components',
    docId: 'ui-kit',
    icon: HTMLIcon,
    section: 'web-ui-kit',
  },
  {
    name: 'React UI Kit',
    docId: 'react-ui-kit',
    icon: ReactIcon,
    section: 'web-ui-kit',
  },
  {
    name: 'Angular UI Kit',
    docId: 'angular-ui-kit',
    icon: AngularIcon,
    section: 'web-ui-kit',
  },

  // - web-core-sdk
  {
    name: 'JavaScript',
    docId: 'web-core',
    icon: JSIcon,
    section: 'web-core-sdk',
  },
  {
    name: 'React',
    docId: 'react-web-core',
    icon: ReactIcon,
    section: 'web-core-sdk',
  },
  // Mobile SDKs
  {
    name: 'Android Core',
    docId: 'android-core',
    icon: AndroidIcon,
    section: 'mobile-core',
  },

  {
    name: 'iOS Core',
    docId: 'ios-core',
    icon: AppleIcon,
    section: 'mobile-core',
  },

  {
    name: 'React Native Core',
    docId: 'rn-core',
    icon: ReactIcon,
    section: 'mobile-core',
  },
  {
    name: 'Flutter Core',
    docId: 'flutter-core',
    icon: FlutterIcon,
    section: 'mobile-core',
  },
  {
    name: 'React Native',
    docId: 'react-native',
    icon: ReactIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Android',
    docId: 'android',
    icon: AndroidIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'iOS',
    docId: 'ios',
    icon: AppleIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Flutter',
    docId: 'flutter',
    icon: FlutterIcon,
    section: 'mobile-sdk',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'Prebuilt SDK',
      section: 'web-prebuilt',
      className: 'deprecated-badge',
    },
  ],
  [
    {
      name: 'UI Kit',
      section: 'web-ui-kit',
      description:
        'Use our pre-built UI components as a base to build on top of.',
    },
    {
      name: 'Core SDK',
      section: 'web-core-sdk',
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
      className: 'new-badge',
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
  [
    {
      name: 'Plugin SDK for Web',
      section: 'plugin-sdk',
      description: 'Build real-time collaborative apps using Dyte.',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
