import React from 'react';
import {
  Artists,
  Title,
  TrackCover,
  TrackInfo,
  TrackSearchResultContainer,
} from '../../styled/SearchBar';

import { useNavigate } from 'react-router-dom';

const TrackSearchResult = ({
  track,
  chooseTrack,
  setSearch,
  setSearchResults,
}) => {
  const navigate = useNavigate();
  return (
    <TrackSearchResultContainer
      onClick={() => {
        navigate(`/library/${track.albumId}`, {
          state: { type: 'albums', track: track.id },
        });
        setSearch('');
        setSearchResults([]);
      }}
    >
      <TrackCover src={track.albumUrl} alt='track album cover' />
      <TrackInfo>
        <Title>{track.title}</Title>
        <Artists>{track.artists}</Artists>
      </TrackInfo>
    </TrackSearchResultContainer>
  );
};

export default TrackSearchResult;
