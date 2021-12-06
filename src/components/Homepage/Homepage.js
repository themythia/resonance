import {
  StyledGridWrapper,
  StyledListContainer,
  StyledRecentlyPlayedContainer,
  StyledTitleRecent,
  StyledTitleRecommended,
} from '../../styled/Homepage.styled';
import RecommendedList from './RecommendedMusic/RecommendedList';
import RecentlyPlayedList from './RecentlyPlayedMusic/RecentlyPlayedList';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Homepage = () => {
  const { userData } = useContext(UserContext);

  console.log(userData);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/recommendations`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + userData.token },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

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
