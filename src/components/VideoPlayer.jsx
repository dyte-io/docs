import React from 'react';
import clsx from 'clsx';
import { string, bool } from 'prop-types';

const VideoPlayer = ({ src, mobile, ...rest }) => {
  return (
    <video
      className={clsx('dyte-video-showcase', mobile && 'mobile')}
      src={src}
      autoPlay
      loop
      controls={false}
      muted
      {...rest}
    />
  );
};

VideoPlayer.propTypes = {
  src: string,
  mobile: bool,
};

export default VideoPlayer;
