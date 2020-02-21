import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideo from './styles/StyledVideo';
import StyledVideoWrapper from './styles/StyledVideoWrapper';

const Video = ({active, autoplay, endCallback, progressCallback}) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        styled={{ position: "absolute", top:"0" }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endCallback}
        onProgress={progressCallback}
      >
      </ReactPlayer>
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;