import {
  StyledGridWrapper,
  StyledLibraryTitle,
  StyledAlbumSection,
  StyledPlaylistItem,
  StyledAlbumThumbnail,
  StyledAlbumTextContainer,
} from '../../styled/Library.styled';
import logo from '../../logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { useEffect, useContext, useState } from 'react';

const playlistAlbums = [
  {
    name: 'GymWorkout',
    description: 'headbanging metal',
    picture: logo,
  },
  {
    name: 'blink 182, smashing pumpkins',
    description: 'punk rock for retards',
    picture: logo,
  },
  {
    name: 'GymWorkout2',
    description: 'Djent and Brootalz',
    picture: logo,
  },
  {
    name: '90SlowJam',
    description: 'nice bedroom playlist',
    picture: logo,
  },
];

const Library = () => {
  const { userData } = useContext(UserContext);
  const [albums, setAlbums] = useState([]);

  console.log(albums)

  useEffect(() => {
    if (!userData.token) return;
    fetch(`https://api.spotify.com/v1/me/albums`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => setAlbums(data.items))
      .catch((e) => console.error(e));
  }, [userData.token]);

  // item.album.name
  // item.album.artists[0].name
    //item.album.images[1].url

  return (
    <StyledGridWrapper>
      <StyledLibraryTitle>
        <h5>Your Library</h5>
      </StyledLibraryTitle>
      <StyledAlbumSection>
        {albums.map((item, index) => {
          return (
            <StyledPlaylistItem key={index}>
              <StyledAlbumThumbnail src={item.album.images[1].url} />
              <StyledAlbumTextContainer>
                <p>{item.album.name}</p>
                <h5>{item.album.artists[0].name}</h5>
              </StyledAlbumTextContainer>
            </StyledPlaylistItem>
          );
        })}
      </StyledAlbumSection>
    </StyledGridWrapper>
  );
};

export default Library;
