import React from 'react';
import Player from './Player';
import { AlbumCover, NowPlayingContainer } from '../../styled/NowPlaying';

const NowPlayingPage = () => {
  return (
    <NowPlayingContainer>
      <AlbumCover src='https://i.redd.it/hwiqn9qtkt271.jpg' />
      <h5>Asking For A Friend</h5>
      <p>CHVRCHES</p>
      <Player />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
