import React from 'react';
// import SearchBar from './Search/SearchBar';
import Account from './Account/Account';

// import { HeaderContainer } from '../../styled/Header';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBarContainer>
        <Input />
        <Search size={24} />
      </SearchBarContainer>
      <ProfilePic src='https://puu.sh/IsNdG/069cf308d1.png' alt='user avatar' />
    </HeaderContainer>
  );
};

export default Header;
