import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ListContainer,
  PlaylistCover,
  PlaylistInfoText,
  PlaylistPageContainer,
  ScrollingDiv,
  PlayListInfoContainer,
} from '../../styled/Playlist';
import PlaylistItem from './PlaylistItem';
import Loading from '../Authorize/Loading/Loading';
import { UserContext } from '../../contexts/UserContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import { handleTime } from '../../utils/handleTime';
import { newAlbum, newPlaylist, setCurrent } from '../../utils/dispatch';

const PlaylistPage = (props) => {
  const { playlistId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { playerData, dispatch } = useContext(PlayerContext);
  const { playlists } = playerData;
  const [loading, setLoading] = useState(true);
  // sets the current playlist to variable
  let playlist;
  if (playlists?.[playlistId]) {
    playlist = playlists[playlistId];
  }

  console.log('loading:', loading);

  useEffect(() => {
    const apiEndpoint = `https://api.spotify.com/v1/${state?.type}/${playlistId}?market=${userData.data.country}`;
    fetch(apiEndpoint, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        if (state.type === 'playlists') {
          dispatch(newPlaylist(playlistId, data));
        } else if (state.type === 'albums') {
          dispatch(newAlbum(playlistId, data));
        }
      })
      .catch((error) => {
        console.warn(
          'An error occurred while fetching playlist/album data',
          error
        );
        navigate('/home');
      });
  }, [playlistId, dispatch, userData, state?.type, navigate]);

  useEffect(() => {
    // if fetch is successful and playlist dispatched to context
    if (playlist) {
      // handles the case if a trackId passed to state from pages
      // sets the track on state as current
      if (state.track) {
        let { tracks } = playlist;
        let track = tracks.find((track) => track.id === state.track);
        let index = tracks.indexOf(track);
        dispatch(setCurrent(track, index, playlistId, tracks.length));
        if (playerData.device === 'mobile') {
          navigate('/nowplaying');
        }
      }
      setLoading(false);
    }
  }, [
    playlist,
    playlistId,
    state?.track,
    dispatch,
    playerData.device,
    navigate,
  ]);

  // if (!playlist) {
  //   return <Loading />;
  // }
  if (loading || !playlist) {
    return <Loading />;
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
                  selected={playerData.current.index === index ? true : false}
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
