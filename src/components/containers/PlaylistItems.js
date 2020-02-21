import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistItems';
import WithLinks from '../hoc/withLinks';

const PlaylistItemWithLinks = WithLinks(PlaylistItem);

const PlaylistItems = ({ videos, active}) => (
  <StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItemWithLinks
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default PlaylistItems;