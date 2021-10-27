import React from 'react';

const VideoPlayer = ({ src, ...rest }) => {
  return (
    <video
      className="dyte-video-showcase"
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
