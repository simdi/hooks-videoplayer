import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import NightMode from '../NightMode';
import PlaylistItems from './PlaylistItems';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = props => (
  <StyledPlaylist>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;