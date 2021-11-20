import React from 'react';
import {
  SongContainer,
  SongContainerLeft,
  SongCover,
  SongInfo,
  SongInfoText,
} from '../../styled/Playlist';

const PlaylistItem = (props) => {
  return (
    <SongContainer>
      <SongContainerLeft>
        <SongCover src={props.cover} />
        <SongInfo>
          <SongInfoText weight='bold'>{props.name}</SongInfoText>
          <SongInfoText>{props.artist}</SongInfoText>
        </SongInfo>
      </SongContainerLeft>
      <p>{props.duration}</p>
    </SongContainer>
  );
};
export default PlaylistItem;
