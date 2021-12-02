import React, { useState } from 'react';
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
  const songName = 'Asking For A Friend';
  const artistName = 'CHVRCHES';
  const playlistName = 'CHVRCHES Playlist';
  return (
    <NowPlayingContainer>
      <PlayingFrom>{`Playing from the playlist: ${playlistName}`} </PlayingFrom>
      <AlbumCover src='https://i.redd.it/hwiqn9qtkt271.jpg' />
      <SongInfoTextContainer>
        <h5>{songName}</h5>
        <p>{artistName}</p>
      </SongInfoTextContainer>
      <Player max={30} volume={{ volume, setVolume }} muted={muted} />
      <VolumeBar
        volume={{ volume, setVolume }}
        setMuted={setMuted}
        muted={muted}
      />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
