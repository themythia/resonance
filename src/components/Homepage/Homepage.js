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
  const [song, setSong] = useState([]);

  console.log(userData.token);

  useEffect(() => {
    if (!userData.token) return;
    fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => setSong(data.items))
      .catch((e) => console.error(e));
  }, [userData.token]);

  console.log(
    song.map((song) => {
      return {
        artist: song.track.artists[0].name,
        song: song.track.name,
        image: song.track.album.images[1],
      };
    })
  );

  return (
    <StyledGridWrapper>
      <StyledTitleRecommended>
        <h5>Recommended for you</h5>
        <p>Get better recommendations the more you listen</p>
      </StyledTitleRecommended>

      <StyledListContainer>
        <RecommendedList />
      </StyledListContainer>

      <StyledTitleRecent>
        <h5>Recently played</h5>
      </StyledTitleRecent>
      <StyledRecentlyPlayedContainer>
        <RecentlyPlayedList />
      </StyledRecentlyPlayedContainer>
    </StyledGridWrapper>
  );
};

export default Homepage;
