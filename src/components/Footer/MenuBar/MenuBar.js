import React, { useContext } from 'react';
import { Home } from '@styled-icons/fluentui-system-filled';
import { Library } from '@styled-icons/fluentui-system-filled';
import { MenuContainer, StyledNavLink, NavLogo } from '../../../styled/Menubar';
import { PlayerContext } from '../../../contexts/PlayerContext';
import PlaylistList from './PlaylistList';

const MenuBar = () => {
  const { playerData } = useContext(PlayerContext);

  return (
    <MenuContainer>
      <NavLogo />
      <StyledNavLink to='/home'>
        <Home size='24' cursor='pointer' />
        <p>Home</p>
      </StyledNavLink>
      <StyledNavLink to='/library'>
        <Library size='24' cursor='pointer' />
        <p>Library</p>
      </StyledNavLink>
      {playerData.device === 'desktop' && <PlaylistList />}
    </MenuContainer>
  );
};
export default MenuBar;
