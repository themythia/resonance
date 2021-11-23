import React from 'react';
import SearchBar from './Search/SearchBar';
import Account from './Account/Account'

import {songs} from './Search/data';
import {HeaderContainer} from '../../styled/Header';

const Header = () => {
    return (
        <>
        <HeaderContainer>
            <SearchBar placeholder="Artists, songs or podcasts..." songs={songs}/> 
        </HeaderContainer>
        <Account/> 

        </>
    )
}

export default Header;
