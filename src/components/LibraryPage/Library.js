import {
  StyledGridWrapper,
  StyledLibraryTitle,
  StyledAlbumSection,
  StyledPlaylistItem,
  StyledAlbumThumbnail,
  StyledAlbumTextContainer,
} from '../../styled/Library.styled';

import { UserContext } from '../../contexts/UserContext';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const { userData } = useContext(UserContext);
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  console.log(albums);

  useEffect(() => {
    if (!userData.token) return;

    let controller = new AbortController();
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/me/albums`, {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + userData.token },
          signal: controller.signal,
        });
        const { items } = await response.json();
        setAlbums(items);
        controller = null;
      } catch (e) {
        console.error(e);
      }
    };

    fetchAlbums();

    return () => controller?.abort();
  }, [userData.token]);

  return (
    <StyledGridWrapper>
      <StyledLibraryTitle>
        <h5>Your Library</h5>
      </StyledLibraryTitle>
      <StyledAlbumSection>
        {albums.map((item) => {
          return (
            <StyledPlaylistItem
              key={item.album.id}
              onClick={() =>
                navigate(`/library/${item.album.id}`, {
                  state: { type: `${item.album.type}s` },
                })
              }
            >
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
