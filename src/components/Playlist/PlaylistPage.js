import React from 'react';
import {
  ListContainer,
  PlaylistCover,
  PlaylistInfo,
  PlaylistPageContainer,
  ScrollingDiv,
} from '../../styled/Playlist';
import PlaylistItem from './PlaylistItem';
import dummySongs from './dummySongs';

const PlaylistPage = (props) => {
  return (
    <PlaylistPageContainer>
      <ScrollingDiv>
        <PlaylistCover src='https://i.redd.it/hwiqn9qtkt271.jpg' />
        <PlaylistInfo>
          <h5>{props.name}</h5>
          <p>{`${props.type} • ${props.creator}`}</p>
        </PlaylistInfo>
        <ListContainer>
          {dummySongs.map((song, index) => (
            <PlaylistItem
              key={index}
              name={song.name}
              artist={song.artist}
              duration={song.duration}
              cover={song.cover}
            />
          ))}
        </ListContainer>
      </ScrollingDiv>
    </PlaylistPageContainer>
  );
};
export default PlaylistPage;
