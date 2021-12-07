import React from 'react';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  PlayingFrom,
  SongInfoTextContainer,
  VolumeControl,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';

const NowPlayingPage = () => {
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
      <Player max={304} />
      <VolumeBar />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
