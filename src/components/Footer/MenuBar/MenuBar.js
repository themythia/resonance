import React from 'react';
import { Home } from '@styled-icons/fluentui-system-filled';
import { Library } from '@styled-icons/fluentui-system-filled';
import { MenuContainer, NavLinkMobile, NavLogo } from '../../../styled/Menubar';
import { Logo } from '../../../styled/Utils';

const MenuBar = () => {
  return (
    <MenuContainer>
      <NavLogo />
      <NavLinkMobile to='home'>
        <Home size='24' cursor='pointer' />
        <p>Home</p>
      </NavLinkMobile>
      <NavLinkMobile to='library'>
        <Library size='24' cursor='pointer' />
        <p>Library</p>
      </NavLinkMobile>
    </MenuContainer>
  );
};
export default MenuBar;
