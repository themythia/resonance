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

const Library = () => {
  const { userData } = useContext(UserContext);
  const [albums, setAlbums] = useState([]);

  console.log(albums);

  useEffect(() => {
    if (!userData.token) return;
    fetch(`https://api.spotify.com/v1/me/albums`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.items);
        console.log('albumdata', data);
      })
      .catch((e) => console.error(e));
  }, [userData.token]);

  return (
    <StyledGridWrapper>
      <StyledLibraryTitle>
        <h5>Your Library</h5>
      </StyledLibraryTitle>
      <StyledAlbumSection>
        {albums.map((item) => {
          return (
            <StyledPlaylistItem key={item.album.id}>
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
