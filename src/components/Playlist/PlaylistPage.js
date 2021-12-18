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

  useEffect(() => {
    const apiEndpoint = `https://api.spotify.com/v1/${state?.type}/${playlistId}?market=${userData.data.country}`;
    fetch(apiEndpoint, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        let dataObj = { ...data };

        // checks if result is paginated
        if (data.tracks.next) {
          // sets the repeat amount needed for fetch
          let repeat = Math.floor(data.tracks.total / data.tracks.limit);

          // handles the loop for multiple fetches required for paginated results
          const paginatedFetch = (repeat, limit) => {
            // array to store fetch results
            const tracks = [];

            for (let i = 0; i < repeat; i++) {
              // limit is different between albums and playlists
              // spotify enforces limit of 50 to albums and 100 to playlists
              let url = `https://api.spotify.com/v1/${state.type}/${playlistId}/`;
              let offsetUrl = `tracks?offset=${(i + 1) * limit}&limit=${limit}`;
              let market = `&market=${userData.data.country}`;
              let urlToFetch = url + offsetUrl + market;

              let page = fetch(urlToFetch, {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + userData.token },
              })
                .then((res) => res.json())
                .then((data) => {
                  urlToFetch = data.next; // url for next fetch
                  return data.items; // fetch results
                })
                .catch((e) => {
                  console.error(
                    `An error occurred while fetching page ${i + 1}`,
                    e
                  );
                  navigate('/home');
                });

              tracks.push(page);
            }
            return tracks;
          };

          Promise.all(paginatedFetch(repeat, data.tracks.limit))
            .then((pages) =>
              // reduces looped fetch responses into a single array
              pages.reduce((page, next) => page.concat(next), [])
            )
            .then((data) => {
              dataObj = {
                ...dataObj,
                tracks: {
                  ...dataObj.tracks,
                  items: [...dataObj.tracks.items, ...data],
                },
              };
              if (state.type === 'playlists') {
                dispatch(newPlaylist(playlistId, dataObj));
              } else if (state.type === 'albums') {
                dispatch(newAlbum(playlistId, dataObj));
              }
            })
            .catch((e) => {
              console.error('Looped fetch failed!', e);
              navigate('/home');
            });
        } else {
          // this runs if the result is not paginated
          if (state.type === 'playlists') {
            dispatch(newPlaylist(playlistId, dataObj));
          } else if (state.type === 'albums') {
            dispatch(newAlbum(playlistId, dataObj));
          }
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
