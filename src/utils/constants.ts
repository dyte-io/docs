import {
  ReactIcon,
  FlutterIcon,
  JSIcon,
  AndroidIcon,
  AppleIcon,
  WebCoreIcon,
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

export const NON_UI_SDKS = ['react-web-core', 'web-core'];

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
      name: 'React (UI Kit + Web Core)',
      icon: ReactIcon,
    },
    {
      id: 'ui-kit-angular',
      name: 'Angular (UI Kit + Web Core)',
      icon: ReactIcon,
    },
    {
      id: 'ui-kit',
      name: 'Other (Web Components + Web Core)',
      icon: WebCoreIcon,
    }
  ],
  'non-ui-sdks': [
    { 
      id: 'react-web-core',
      name: 'React ( React Web Core)',
      icon: ReactIcon 
    },
    { 
      id: 'web-core',
      name: 'Javascript ( Web Core )',
      icon: WebCoreIcon 
    }
  ], 
};
