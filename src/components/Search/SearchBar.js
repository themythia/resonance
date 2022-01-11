import React, { useContext, useEffect, useState } from 'react';
import { Search } from 'styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';
import {
  Input,
  SearchBarContainer,
  SearchResultContainer,
} from '../../styled/SearchBar';
import TrackSearchResult from '../Header/TrackSearchResult';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (search.length > 0) {
      fetch(
        `https://api.spotify.com/v1/search?q=${encodeURI(
          search
        )}&type=track%2Calbum&limit=5`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + userData.token },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log('data:', data);
          const albums = data.albums.items.map((album) => ({
            type: 'albums',
            artists: album.artists.map((artist) => artist.name),
            id: album.id,
            image: album.images[0].url,
            name: album.name,
          }));
          const songs = data.tracks.items.map((track) => ({
            type: 'tracks',
            artists: track.album.artists.map((artist) => artist.name),
            id: track.id,
            image: track.album.images[0].url,
            name: track.name,
            albumId: track.album.id,
          }));
          console.log('albums:', albums);
          console.log('songs:', songs);
          setSearchResults([...albums, ...songs]);
        })
        .catch((e) => console.warn('Fetching search results failed!', e));
    }
  }, [search, userData.token]);

  return (
    <React.Fragment>
      <SearchBarContainer>
        <Input
          type='search'
          placeholder='Artists, songs, or albums'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search size={24} />
      </SearchBarContainer>
      {search.length > 0 && (
        <SearchResultContainer>
          {searchResults.map((track, index) => (
            <TrackSearchResult
              track={track}
              key={index}
              setSearch={setSearch}
              setSearchResults={setSearchResults}
            />
          ))}
        </SearchResultContainer>
      )}
    </React.Fragment>
  );
};
export default SearchBar;
