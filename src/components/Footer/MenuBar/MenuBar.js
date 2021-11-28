import React from 'react';
import { Home } from '@styled-icons/fluentui-system-filled';
import { Library } from '@styled-icons/fluentui-system-filled';
import { MenuContainer, NavLinkMobile } from '../../../styled/Menubar';

const MenuBar = () => {
  return (
    <MenuContainer>
      <NavLinkMobile to='home'>
        <Home size='24' cursor='pointer' />
        <span>Home</span>
      </NavLinkMobile>
      <NavLinkMobile to='library'>
        <Library size='24' cursor='pointer' />
        <span>Library</span>
      </NavLinkMobile>
    </MenuContainer>
  );
};
export default MenuBar;
