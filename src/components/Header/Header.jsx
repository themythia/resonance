import React, { useContext } from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const { userData } = useContext(UserContext);
  return (
    <HeaderContainer>
      <SearchBarContainer>
        <Input />
        <Search size={24} />
      </SearchBarContainer>
      <ProfilePic
        src={
          userData.data.images?.[0].url || 'https://puu.sh/IsNdG/069cf308d1.png'
        }
        alt='user avatar'
      />
    </HeaderContainer>
  );
};

export default Header;
