import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  PlayingFrom,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';
import { PlayerContext } from '../../contexts/PlayerContext';

const NowPlayingPage = () => {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const { playerData, dispatch } = useContext(PlayerContext);
  const { playlists, current } = playerData;
  const index = current?.index;
  const currentTrack = playlists?.[current?.playlistId]?.tracks?.[index];
  console.log('index', index);

  if (current) {
    console.log('currentTrack', playerData.current.index);
    console.log('current', playerData.current);
    console.log('currentSrc:', current?.track.src);
    console.log('playlists[current.playlistId].tracks[index].album.image');
  }

  return (
    <NowPlayingContainer>
      {current && <AlbumCover src={current.track.album.image} />}
      <SongInfoTextContainer>
        {current && <h5>{current.track.name}</h5>}
        {current && <p>{current.track.artists[0]}</p>}
      </SongInfoTextContainer>
      <Player
        max={30}
        src={current?.track.src}
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
