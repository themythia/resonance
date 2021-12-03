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

const PlaylistPage = (props) => {
  const { playlistId } = useParams();
  const { userData } = useContext(UserContext);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [owner, setOwner] = useState('');
  const [type, setType] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTime = (time) => {
    const date = new Date(null);
    date.setSeconds(time); // specify value for SECONDS here
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
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setImage(data.images[1].url);
        setOwner(data.owner.display_name);
        setType(data.type);
        setTracks(data.tracks.items.map((track) => track.track));
      })
      .then(() => setLoading(false))
      .catch((error) => console.warn(error));
  }, [playlistId, userData.token]);

  if (loading) {
    return null;
  }
  console.log('tracks3', tracks[0]);
  return (
    <PlaylistPageContainer>
      <ScrollingDiv>
        <PlayListInfoContainer>
          <PlaylistCover src={image} />
          <PlaylistInfoText>
            <h5>{name}</h5>
            <p>{`${type} • ${owner}`}</p>
          </PlaylistInfoText>
        </PlayListInfoContainer>
        <ListContainer>
          {tracks.map((track, index) => (
            <Link
              key={index}
              to='/nowplaying'
              state={{
                src: track.preview_url,
                image: track.album.images[1].url,
                name: track.name,
                artist: track.artists[0].name,
                playlistName: name,
              }}
            >
              <PlaylistItem
                name={track.name}
                artist={track.artists[0].name}
                duration={handleTime(track.duration_ms / 1000)}
                cover={track.album.images[1].url}
                album={track.album.name}
              />
            </Link>
          ))}
        </ListContainer>
      </ScrollingDiv>
    </PlaylistPageContainer>
  );
};
export default PlaylistPage;
