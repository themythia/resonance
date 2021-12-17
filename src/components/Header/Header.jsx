import React from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';
import Signout from './Signout';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBarContainer>
        <Input />
        <Search size={24} />
      </SearchBarContainer>
      <Signout />
    </HeaderContainer>
  );
};

export default Header;
