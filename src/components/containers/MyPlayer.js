import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledMyPlayer from '../styles/StyledMyPlayer';

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayer: "none",
  color: "#ffffff"
}

const themeLight = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayer: "none",
  color: "#353535"
}

const MyPlayer = ({match, history, location}) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  const initialState = {
    videos: videos.playlist,
    active: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId) {
      const newVideoId = state.videos.findIndex(x => x.id === videoId);
      setState(prev => ({
        ...prev,
        active: prev.videos[newVideoId],
        autoplay: location.autoplay
      }));
    } else {
      history.push({
        pathname: `${state.active.id}`,
        autoplay: false
      })
    }
    return () => {};
  }, [history, location.autoplay, match.params.activeVideo, state.active.id, state.videos])

  const nightModeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledMyPlayer>
          <Video
            active={state.active}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.active}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledMyPlayer>
      ) : null }
    </ThemeProvider>
  )
}

export default MyPlayer;