import React from 'react';
import {
  ListContainer,
  PlaylistCover,
  PlaylistInfoText,
  PlaylistPageContainer,
  ScrollingDiv,
  PlayListInfoContainer,
} from '../../styled/Playlist';
import PlaylistItem from './PlaylistItem';
import dummySongs from './dummySongs';

const PlaylistPage = (props) => {
  return (
    <PlaylistPageContainer>
      <ScrollingDiv>
        <PlayListInfoContainer>
          <PlaylistCover src='https://i.redd.it/hwiqn9qtkt271.jpg' />
          <PlaylistInfoText>
            <h5>{props.name}</h5>
            <p>{`${props.type} • ${props.creator}`}</p>
          </PlaylistInfoText>
        </PlayListInfoContainer>
        <ListContainer>
          {dummySongs.map((song, index) => (
            <PlaylistItem
              key={index}
              name={song.name}
              artist={song.artist}
              duration={song.duration}
              cover={song.cover}
              album={song.album}
            />
          ))}
        </ListContainer>
      </ScrollingDiv>
    </PlaylistPageContainer>
  );
};
export default PlaylistPage;
