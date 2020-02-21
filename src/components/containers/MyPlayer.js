import React from 'react';
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

const MyPlayer = props => {
  const { state } = props;
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      <StyledMyPlayer>
        <Video />
        <Playlist />
      </StyledMyPlayer>
    </ThemeProvider>
  )
}

export default MyPlayer;