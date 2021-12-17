import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { PlaylistContainer, PlaylistItem } from '../../../styled/Menubar';
import { Link, useLocation } from 'react-router-dom';

const PlaylistList = (props) => {
  const { userData } = useContext(UserContext);
  const [playlists, setPlaylists] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (userData.token) {
      fetch('https://api.spotify.com/v1/me/playlists', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + userData.token },
      })
        .then((res) => res.json())
        .then((data) => setPlaylists(data.items))
        .catch((e) =>
          console.error('An error occurred while fetching playlist data', e)
        );
    }
  }, [userData.token]);

  return (
    <PlaylistContainer>
      {playlists.map((playlist, index) => (
        <Link
          key={index}
          to={`/library/${playlist.id}`}
          state={{ type: playlist.type + 's' }}
        >
          <PlaylistItem
            selected={
              location.pathname === `/library/${playlist.id}` ? true : false
            }
          >
            {playlist.name}
          </PlaylistItem>
        </Link>
      ))}
    </PlaylistContainer>
  );
};
export default PlaylistList;
