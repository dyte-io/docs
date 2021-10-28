import React from 'react';
import clsx from 'clsx';

const VideoPlayer = ({ src, mobile, ...rest }) => {
  return (
    <video
      className={clsx("dyte-video-showcase", mobile && 'mobile')}
      src={src}
      autoPlay
      loop
      controls={false}
      muted
      {...rest}
    />
  );
};

export default VideoPlayer;
