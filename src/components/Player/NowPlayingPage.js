import React, { useContext } from 'react';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';
import { PlayerContext } from '../../contexts/PlayerContext';
import { Error } from '../../styled/SearchBar';

const NowPlayingPage = () => {
  const { playerData } = useContext(PlayerContext);
  const { current } = playerData;

  return (
    <NowPlayingContainer>
      {playerData.error && playerData.device === 'mobile' && (
        <Error>
          Requested song not available due to Spotify region restrictions.
        </Error>
      )}

      {current.playlistId && <AlbumCover src={current.track.album.image} />}
      <SongInfoTextContainer>
        <h5>{current.track.name}</h5>
        <p>{current.track.artists[0]}</p>
      </SongInfoTextContainer>
      <Player max={30} src={current?.track.src} />
      <VolumeBar />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
