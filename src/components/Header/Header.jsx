import React, { useContext } from 'react';
import { HeaderContainer, Error } from '../../styled/SearchBar';
import Signout from './Signout';
import SearchBar from '../Search/SearchBar';
import { PlayerContext } from '../../contexts/PlayerContext';

const Header = () => {
  const { playerData } = useContext(PlayerContext);
  return (
    <HeaderContainer>
      <SearchBar />
      <Signout />
      {playerData.error && playerData.device === 'desktop' && (
        <Error>
          Requested song not available due to Spotify region restrictions.
        </Error>
      )}
    </HeaderContainer>
  );
};

export default Header;
