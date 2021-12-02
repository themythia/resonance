import React, { useState, useReducer } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  PlayingFrom,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';
import playerReducer from '../../reducers/playerReducer';

const NowPlayingPage = () => {
  const defaultState = {
    currentTime: 0,
    duration: null,
    ended: true,
    loop: false,
    paused: true,
    muted: false,
    canplay: false,
    volume: 50,
  };
  const [playerData, dispatch] = useReducer(playerReducer, defaultState);
  // ---------------
  const [volume, setVolume] = useState(50);
  console.log('volume:', volume);
  const songName = 'Asking For A Friend';
  const artistName = 'CHVRCHES';
  const playlistName = 'CHVRCHES Playlist';
  return (
    <PlayerContext.Provider value={{ playerData, dispatch }}>
      <NowPlayingContainer>
        <PlayingFrom>
          {`Playing from the playlist: ${playlistName}`}{' '}
        </PlayingFrom>
        <AlbumCover src='https://i.redd.it/hwiqn9qtkt271.jpg' />
        <SongInfoTextContainer>
          <h5>{songName}</h5>
          <p>{artistName}</p>
        </SongInfoTextContainer>
        <Player max={30} volume={{ volume, setVolume }} />
        <VolumeBar volume={{ volume, setVolume }} />
      </NowPlayingContainer>
    </PlayerContext.Provider>
  );
};
export default NowPlayingPage;
