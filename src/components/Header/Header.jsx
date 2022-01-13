import React from 'react';
import { HeaderContainer } from '../../styled/SearchBar';
import Signout from './Signout';
import SearchBar from '../Search/SearchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar />
      <Signout />
    </HeaderContainer>
  );
};

export default Header;
