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
import { useEffect, useContext } from 'react';

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

  useEffect(() => {
    if (!userData.token) return;
    fetch(`https://api.spotify.com/v1/me/albums`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  }, [userData.token]);

  return (
    <StyledGridWrapper>
      <StyledLibraryTitle>
        <h5>Your Library</h5>
      </StyledLibraryTitle>
      <StyledAlbumSection>
        {playlistAlbums.map((item, index) => {
          return (
            <StyledPlaylistItem key={index}>
              <StyledAlbumThumbnail src='https://e.snmc.io/i/1200/s/0348449c729ad8e7082de82f30f90caf/3992350' />
              <StyledAlbumTextContainer>
                <p>{item.name}</p>
                <h5>{item.description}</h5>
              </StyledAlbumTextContainer>
            </StyledPlaylistItem>
          );
        })}
      </StyledAlbumSection>
    </StyledGridWrapper>
  );
};

export default Library;
