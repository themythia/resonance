import React from 'react';
import SearchBar from './Search/SearchBar';
import {songs} from './Search/data';
import {HeaderContainer} from '../../styled/Header';

const Header = () => {
    return (
        <HeaderContainer>
            <SearchBar placeholder="Artists, songs or podcasts..." songs={songs}/>
            
        </HeaderContainer>
    )
}

export default Header;
