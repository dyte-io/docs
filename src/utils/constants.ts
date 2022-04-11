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

export const NON_UI_SDKS = ['web-core'];

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
      name: 'UI Kit React',
      icon: ReactIcon,
    },
  ],
  'non-ui-sdks': [{ id: 'web-core', name: 'Web Core', icon: WebCoreIcon }],
};
