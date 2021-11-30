import React from 'react';
import { Home } from '@styled-icons/fluentui-system-filled';
import { Library } from '@styled-icons/fluentui-system-filled';
import { MenuContainer, StyledNavLink, NavLogo } from '../../../styled/Menubar';

const MenuBar = () => {
  return (
    <MenuContainer>
      <NavLogo />
      <StyledNavLink to='home'>
        <Home size='24' cursor='pointer' />
        <p>Home</p>
      </StyledNavLink>
      <StyledNavLink to='library'>
        <Library size='24' cursor='pointer' />
        <p>Library</p>
      </StyledNavLink>
    </MenuContainer>
  );
};
export default MenuBar;
