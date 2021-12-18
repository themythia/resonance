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

        setAlbums((prevState) => [...prevState, ...items]);
        controller = null;
      } catch (e) {
        console.error(e);
      }
    };

    fetchAlbums();

    return () => controller?.abort();
  }, [userData.token]);

  useEffect(() => {
    if (!userData.data.id) return;
    let controller = new AbortController();
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/users/${userData.data.id}/playlists`,
          {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + userData.token },
            signal: controller.signal,
          }
        );
        const playlistPayload = await response.json();

        console.log(playlistPayload.items)

        const playlistShape = playlistPayload.items.map((playlist) => {
          return {
            album: {
              artists: [{ name: playlist.owner.display_name }],
              images: [{ url: playlist.images[0].url }],
              id: playlist.id,
              type: playlist.type,
              name: playlist.name,
            },
          };
        });

        setAlbums((prevState) => [...prevState, ...playlistShape]);

        controller = null;
      } catch (e) {
        console.error(e);
      }
    };

    fetchPlaylists();

    return () => controller?.abort();
  }, [userData.data.id]);

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
              <StyledAlbumThumbnail src={item.album.images[0].url} />
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
