import React from 'react';
import {Home} from '@styled-icons/boxicons-solid/';
import {Library} from '@styled-icons/boxicons-regular/'
import {
    MenuContainer, 
    LeftContainer,
    RightContainer 
} from '../../../styled/Menubar';

const MenuBar = () => {
  return (
    <MenuContainer>
      <LeftContainer> 
          <Home size='25' cursor='pointer'/>
          Home
      </LeftContainer>
      <RightContainer>
          <Library size='25' cursor='pointer'/>
          Library
      </RightContainer>
    </MenuContainer>
  );
};
export default MenuBar;