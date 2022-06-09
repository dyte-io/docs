import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import { Android, Apple, Angular } from '@styled-icons/boxicons-logos';

const AndroidIcon = ({ className, ...props }) => {
  return <Android className={clsx('text-[#3ddb85]', className)} {...props} />;
};
const AngularIcon = ({ className, ...props }) => {
  return <Angular className={clsx('text-[#dd0031]', className)} {...props} />;
};

AngularIcon.propTypes = AndroidIcon.propTypes = {
  className: PropTypes.string,
};

const AppleIcon = ({ className, ...props }) => {
  return <Apple className={clsx('text-text', className)} {...props} />;
};

AppleIcon.propTypes = AndroidIcon.propTypes = {
  className: PropTypes.string,
};

export { SDKIcon } from './SDKIcon';
export { APIIcon } from './APIIcon';

export { BlogIcon } from './BlogIcon';

export { ReactIcon } from './ReactIcon';
export { FlutterIcon } from './FlutterIcon';
export { JSIcon } from './JSIcon';
export { DiscordIcon } from './DiscordIcon';

export { AndroidIcon, AppleIcon, AngularIcon };

export { ReactRevolveIcon } from './ReactRevolveIcon';
export { KotlinIcon } from './KotlinIcon';
export { SwiftIcon } from './SwiftIcon';
export { ReactNativeIcon } from './ReactNativeIcon';

export { default as WebCoreIcon } from './WebCoreIcon';
