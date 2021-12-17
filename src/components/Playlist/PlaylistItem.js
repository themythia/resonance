import React from 'react';
import {
  SongAlbum,
  SongContainer,
  SongContainerLeft,
  SongCover,
  SongDuration,
  SongInfo,
  SongInfoText,
} from '../../styled/Playlist';

const PlaylistItem = (props) => {
  return (
    <SongContainer selected={props.selected}>
      <SongContainerLeft>
        <SongCover src={props.cover} />
        <SongInfo>
          <SongInfoText weight='bold'>{props.name}</SongInfoText>
          <SongInfoText>{props.artist}</SongInfoText>
        </SongInfo>
      </SongContainerLeft>
      <SongAlbum>{props.album}</SongAlbum>
      <SongDuration>{props.duration}</SongDuration>
    </SongContainer>
  );
};
export default PlaylistItem;
