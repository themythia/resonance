import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  PlayingFrom,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';

const NowPlayingPage = () => {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const { state } = useLocation();
  console.log('state:', state);

  return (
    <NowPlayingContainer>
      <PlayingFrom>
        {`Playing from the playlist: ${state?.playlistName}`}
      </PlayingFrom>
      <AlbumCover src={state?.image} />
      <SongInfoTextContainer>
        <h5>{state?.name}</h5>
        <p>{state?.artist}</p>
      </SongInfoTextContainer>
      <Player
        max={30}
        src={state?.src}
        volume={{ volume, setVolume }}
        muted={muted}
      />
      <VolumeBar
        volume={{ volume, setVolume }}
        setMuted={setMuted}
        muted={muted}
      />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
