import React, { useContext, useState, useEffect } from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
} from '../../styled/SearchBar';
import { Search } from '@styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';
import SpotifyWebApi from 'spotify-web-api-node';

const SpotifyApi= new SpotifyWebApi({
  clientId: 'f573531847c5435e80f1ba528eceed98'
  
  
})


const Header = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { userData } = useContext(UserContext);
  console.log(searchResults)
  
  const access_token=userData.options.headers.Authorization.split(" ")[1];
  
  useEffect (()=> {
    if (!access_token) return
    SpotifyApi.setAccessToken(access_token)
  }, [access_token]);

  useEffect(() => {
    if (!search)
     return setSearchResults([])
    if (!access_token) return


    let cancel = false;

    SpotifyApi.searchTracks(search).then(res=>{
      if (cancel) return 
      setSearchResults(res.body.tracks.items.map((track)=>{
        
        const smallestAlbumImage= track.album.images.reduce(
          (smallest, image)=>{
            if (image.height < smallest.height) return image
            return smallest
        }, track.album.images[0])
        
        
        return {
          artists: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url

        }
      })
    )
  })
  return ()=>cancel=true;
  }, [search, access_token ])

 
  
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
