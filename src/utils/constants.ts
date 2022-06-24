import {
  ReactIcon,
  FlutterIcon,
  JSIcon,
  AndroidIcon,
  AppleIcon,
  WebCoreIcon,
  AngularIcon,
} from '../assets/icons';

export const PREBUILT_SDKS = ['react-native', 'flutter', 'android', 'ios'];

export const UI_SDKS = ['react-ui-kit', 'angular-ui-kit', 'ui-kit'];

export const NON_UI_SDKS = [
  // 'react-web-core',
  'web-core',
];

export const NEW_MOBILE_SDKS = ['react-native-core'];

export const CONTEXTS = {
  home: [],
  prebuilt: [
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
      id: 'react-ui-kit',
      name: 'React',
      icon: ReactIcon,
    },
    {
      id: 'ui-kit',
      name: 'Vanilla JS',
      icon: WebCoreIcon,
    },
    {
      id: 'angular-ui-kit',
      name: 'Angular',
      icon: AngularIcon,
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
  'new-mobile-sdks': [
    // {
    //   id: 'react-web-core',
    //   name: 'React',
    //   icon: ReactIcon,
    // },
    {
      id: 'react-native-core',
      name: 'React Native',
      disabled: true,
      icon: ReactIcon,
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
