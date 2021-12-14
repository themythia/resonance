import React, { useContext } from 'react';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';
import { PlayerContext } from '../../contexts/PlayerContext';

const NowPlayingPage = () => {
  const { playerData } = useContext(PlayerContext);
  const { current } = playerData;

  return (
    <NowPlayingContainer>
      {current && <AlbumCover src={current.track.album.image} />}
      <SongInfoTextContainer>
        {current && <h5>{current.track.name}</h5>}
        {current && <p>{current.track.artists[0]}</p>}
      </SongInfoTextContainer>
      <Player max={30} src={current?.track.src} />
      <VolumeBar />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
