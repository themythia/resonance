import React, { useContext } from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';
import Signout from './Signout';

const Header = () => {
  const { userData } = useContext(UserContext);
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
