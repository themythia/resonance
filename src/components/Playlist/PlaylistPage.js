import React, { useEffect, useState, useContext } from 'react';
import {
  ListContainer,
  PlaylistCover,
  PlaylistInfoText,
  PlaylistPageContainer,
  ScrollingDiv,
  PlayListInfoContainer,
} from '../../styled/Playlist';
import PlaylistItem from './PlaylistItem';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { PlayerContext } from '../../contexts/PlayerContext';

const PlaylistPage = (props) => {
  const { playlistId } = useParams();
  const { userData } = useContext(UserContext);
  const { playerData, dispatch } = useContext(PlayerContext);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);

  const handleTime = (time) => {
    const date = new Date(null);
    date.setMilliseconds(time); // specify value for milliseconds here
    const dateString = date.toISOString();
    if (time < 600) {
      // less than 10 mins returns m:ss
      return dateString.substr(15, 4);
    } else if (time < 3600) {
      // less than an hour returns mm:ss
      return dateString.substr(14, 5);
    } else if (time < 36000) {
      // less than 10 hours returns h:mm:ss
      return dateString.substr(12, 7);
    } else return dateString.substr(11, 8); // else returns hh:mm:ss
  };

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}?market=TR`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'NEW_PLAYLIST',
          id: playlistId,
          playlist: {
            name: data.name,
            image: data.images[1].url,
            owner: data.owner.display_name,
            type: data.type,
            tracks: data.tracks.items.map((track) => {
              let { track: t } = track;
              return {
                name: t.name,
                duration: t.duration_ms,
                id: t.id,
                src: t.preview_url,
                artists: t.artists.map((artist) => artist.name),
                album: {
                  albumId: t.album.id,
                  image: t.album.images[1].url,
                  name: t.album.name,
                },
              };
            }),
          },
        });
      })
      .then(() => setFetchStatus(true))
      .catch((error) => console.warn(error));
  }, [playlistId, dispatch, userData]);

  useEffect(() => {
    if (fetchStatus) {
      setPlaylist(playerData.playlists[playlistId]);
      setLoading(false);
    }
  }, [playerData, playlistId, fetchStatus]);

  if (loading) {
    return null;
  }

  return (
    <PlaylistPageContainer>
      <ScrollingDiv>
        <PlayListInfoContainer>
          <PlaylistCover src={playlist.image} />
          <PlaylistInfoText>
            <h5>{playlist.name}</h5>
            <p>{`${playlist.type} • ${playlist.owner}`}</p>
          </PlaylistInfoText>
        </PlayListInfoContainer>
        <ListContainer>
          {playlist.tracks.map((track, index) => {
            return playerData.device === 'mobile' ? (
              <Link
                key={index}
                to='/nowplaying'
                onClick={() =>
                  dispatch({
                    type: 'SET_CURRENT',
                    track,
                    index,
                    playlistId,
                  })
                }
              >
                <PlaylistItem
                  name={track.name}
                  artist={track.artists[0]}
                  duration={handleTime(track.duration)}
                  cover={track.album.image}
                  album={track.album.name}
                />
              </Link>
            ) : (
              <div
                key={index}
                onClick={() =>
                  dispatch({
                    type: 'SET_CURRENT',
                    track,
                    index,
                    playlistId,
                  })
                }
              >
                <PlaylistItem
                  name={track.name}
                  artist={track.artists[0]}
                  duration={handleTime(track.duration)}
                  cover={track.album.image}
                  album={track.album.name}
                />
              </div>
            );
          })}
        </ListContainer>
      </ScrollingDiv>
    </PlaylistPageContainer>
  );
};
export default PlaylistPage;
