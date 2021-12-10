import React, { useContext, useState, useEffect } from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { userData } = useContext(UserContext);
  

  useEffect(() => {
    if (!search)
     return setSearchResults([])
    
  }, [search])
  
  return (
    <HeaderContainer>
      <SearchBarContainer>
        <Input 
          type='search'
          placeholder='search Songs/Artists' 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}/>
        <Search size={24} />
      </SearchBarContainer>
      {/*<ProfilePic
        src={
          userData.data.images?.[0].url || 'https://puu.sh/IsNdG/069cf308d1.png'
        }
        alt='user avatar'
      />*/}
    </HeaderContainer>
  );
};

export default Header;
