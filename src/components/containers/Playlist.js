import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import NightMode from '../NightMode';
import PlaylistItems from './PlaylistItems';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({videos, active, nightModeCallback, nightMode}) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;