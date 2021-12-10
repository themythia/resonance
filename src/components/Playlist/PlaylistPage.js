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
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import { handleTime } from '../../utils/handleTime';
import { newAlbum, newPlaylist, setCurrent } from '../../utils/dispatch';

const PlaylistPage = (props) => {
  const { playlistId } = useParams();
  const { userData } = useContext(UserContext);
  const { playerData, dispatch } = useContext(PlayerContext);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const { state } = useLocation();
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    const apiEndpoint = `https://api.spotify.com/v1/${state.type}/${playlistId}?market=${userData.data.country}`;
    fetch(apiEndpoint, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (state.type === 'playlists') {
          dispatch(newPlaylist(playlistId, data));
        } else if (state.type === 'albums') {
          dispatch(newAlbum(playlistId, data));
        }
      })
      .then(() => setFetchStatus(true))
      .catch((error) => console.warn(error));
  }, [playlistId, dispatch, userData, state.type]);

  useEffect(() => {
    if (fetchStatus) {
      setPlaylist(playerData.playlists[playlistId]);
      setLoading(false);
      // handles the case if a trackId passed to state from pages
      // sets the track on state as current
      if (state.track) {
        let tracks = playerData.playlists[playlistId].tracks;
        let track = tracks.find((track) => track.id === state.track);
        let index = tracks.indexOf(track);
        dispatch(setCurrent(track, index, playlistId, tracks.length));
        if (playerData.device === 'mobile') {
          setNavigate(true);
          setLoading(true);
        }
      }
    }
  }, [
    playerData.playlists,
    playlistId,
    fetchStatus,
    state.track,
    dispatch,
    playerData.device,
  ]);

  if (loading) {
    if (navigate && playerData.current) {
      return <Navigate to='/nowplaying' />;
    }
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
                onClick={() => {
                  dispatch(
                    setCurrent(track, index, playlistId, playlist.tracks.length)
                  );
                }}
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
                  dispatch(
                    setCurrent(track, index, playlistId, playlist.tracks.length)
                  )
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
