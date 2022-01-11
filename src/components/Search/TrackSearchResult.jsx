import React from 'react';
import {
  Artists,
  Title,
  TrackCover,
  TrackInfo,
  TrackSearchResultContainer,
} from '../../styled/SearchBar';

import { useNavigate } from 'react-router-dom';
import coverPlaceholder from '../../assets/album_cover_placeholder.png';

const TrackSearchResult = ({ track, setSearch, setSearchResults }) => {
  const navigate = useNavigate();

  return (
    <TrackSearchResultContainer
      onClick={() => {
        if (track.type === 'albums') {
          navigate(`library/${track.albumId}`, { state: { type: 'albums' } });
        } else if (track.type === 'tracks') {
          navigate(`library/${track.albumId}`, {
            state: { type: 'albums', track: track.id },
          });
        }
        setSearch('');
        setSearchResults([]);
      }}
    >
      <TrackCover
        src={track.image || coverPlaceholder}
        alt='track album cover'
      />
      <TrackInfo>
        <Title>{track.name}</Title>
        <Artists>{track.artists[0]}</Artists>
      </TrackInfo>
    </TrackSearchResultContainer>
  );
};

export default TrackSearchResult;
