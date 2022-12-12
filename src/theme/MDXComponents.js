// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ColorCode from '../components/ColorCode';
import ColorPalette from '../components/ColorPalette';
import VideoPlayer from '../components/VideoPlayer';
import InfoTooltip from '../components/InfoTooltip';
import PropsTable from '../components/PropsTable';
import ComponentsGrid from '../components/ComponentsGrid';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  Tabs,
  TabItem,

  color: ColorCode,
  ColorPalette,
  VideoPlayer,
  InfoTooltip,
  PropsTable,
  ComponentsGrid,
};
