import {
  StyledGridWrapper,
  StyledListContainer,
  StyledRecentlyPlayedContainer,
  StyledTitleRecent,
  StyledTitleRecommended,
} from '../../styled/Homepage.styled';
import RecommendedList from './RecommendedMusic/RecommendedList';
import RecentlyPlayedList from './RecentlyPlayedMusic/RecentlyPlayedList';
import { useContext, useEffect, useState, useRef } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useWindowSize } from '../../hooks/useWindowSize';

const Homepage = () => {
  const { userData } = useContext(UserContext);
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);
  const ref = useRef();
  const size = useWindowSize();

  useEffect(() => {
    if (!userData.token) return;

    let controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/player/recently-played`,
          {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + userData.token },
            signal: controller.signal,
          }
        );
        const albumData = await response.json();
        const seedString = albumData.items
          .map((item) => item.track.album.artists[0].id)
          .slice(-5)
          .join('%2C');
        const seedResponse = await fetch(
          `https://api.spotify.com/v1/recommendations?seed_artists=${seedString}`,
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + userData.token,
            },
          }
        );
        const seedData = await seedResponse.json();
        setRecentlyPlayedSongs(albumData.items);
        setRecommendedSongs(seedData.tracks);
        controller = null;
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();

    return () => controller?.abort();
  }, [userData.token]);

  useEffect(() => {
    const el = ref.current;

    if (el && size.width >= 1024) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [size.width]);

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
      <StyledRecentlyPlayedContainer ref={ref}>
        <RecentlyPlayedList songlist={recentlyPlayedSongs} />
      </StyledRecentlyPlayedContainer>
    </StyledGridWrapper>
  );
};

export default Homepage;
