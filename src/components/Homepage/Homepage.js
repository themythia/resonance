import {
  StyledGridWrapper,
  StyledListContainer,
  StyledRecentlyPlayedContainer,
  StyledTitleRecent,
  StyledTitleRecommended,
} from '../../styled/Homepage.styled';
import RecommendedList from './RecommendedMusic/RecommendedList';
import RecentlyPlayedList from './RecentlyPlayedMusic/RecentlyPlayedList';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Homepage = () => {
  const { userData } = useContext(UserContext);
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  console.log(recentlyPlayedSongs)

  useEffect(() => {
    if (!userData.token) return;
    fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => setRecentlyPlayedSongs(data.items))
      .catch((e) => console.error(e));
  }, [userData.token]);

  useEffect(() => {
    if (!userData.token) return;
    const seedString = recentlyPlayedSongs
      .map((item) => item.track.album.artists[0].id)
      .slice(-5)
      .join('%2C');

    fetch(
      `https://api.spotify.com/v1/recommendations?seed_artists=${seedString}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + userData.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setRecommendedSongs(data.tracks))
      .catch((e) => console.error(e));
  }, [userData.token, recentlyPlayedSongs]);

  return (
    <StyledGridWrapper>
      <StyledTitleRecommended>
        <h5>Recommended for you</h5>
        <p>Get better recommendations the more you listen</p>
      </StyledTitleRecommended>

      <StyledListContainer>
        <RecommendedList recommendedSongs={recommendedSongs} />
      </StyledListContainer>

      <StyledTitleRecent>
        <h5>Recently played</h5>
      </StyledTitleRecent>
      <StyledRecentlyPlayedContainer>
        <RecentlyPlayedList songlist={recentlyPlayedSongs} />
      </StyledRecentlyPlayedContainer>
    </StyledGridWrapper>
  );
};

export default Homepage;
