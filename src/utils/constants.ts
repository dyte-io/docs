import {
  ReactIcon,
  FlutterIcon,
  JSIcon,
  AndroidIcon,
  AppleIcon,
  WebCoreIcon,
  AngularIcon,
} from '../assets/icons';

export const PREBUILT_SDKS = [
  'react',
  'javascript',
  'react-native',
  'flutter',
  'android',
  'ios',
];

export const UI_SDKS = ['ui-kit-react', 'ui-kit-angular', 'ui-kit'];

export const NON_UI_SDKS = [
  // 'react-web-core',
  'web-core',
];

export const CONTEXTS = {
  home: [],
  prebuilt: [
    {
      id: 'react',
      name: 'React',
      icon: ReactIcon,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: JSIcon,
    },
    {
      id: 'react-native',
      name: 'React Native',
      icon: ReactIcon,
    },
    {
      id: 'android',
      name: 'Android',
      icon: AndroidIcon,
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: AppleIcon,
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: FlutterIcon,
    },
  ],
  'ui-sdks': [
    {
      id: 'ui-kit-react',
      name: 'React',
      icon: ReactIcon,
    },
    {
      id: 'ui-kit',
      name: 'Vanilla JS',
      icon: WebCoreIcon,
    },
    {
      id: 'ui-kit-angular',
      name: 'Angular',
      icon: AngularIcon,
      disabled: true,
    },
  ],
  'non-ui-sdks': [
    // {
    //   id: 'react-web-core',
    //   name: 'React',
    //   icon: ReactIcon,
    // },
    {
      id: 'web-core',
      name: 'Javascript',
      disabled: true,
      icon: WebCoreIcon,
    },
  ],
  'web-sdks': [
    {
      id: 'react',
      name: 'React',
      icon: ReactIcon,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: JSIcon,
    },
  ],
  'mobile-sdks': [
    {
      id: 'react-native',
      name: 'React Native',
      icon: ReactIcon,
    },
    {
      id: 'android',
      name: 'Android',
      icon: AndroidIcon,
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: AppleIcon,
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: FlutterIcon,
    },
  ],
};
