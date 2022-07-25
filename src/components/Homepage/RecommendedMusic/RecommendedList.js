import { StyledRecommendedList } from '../../../styled/Homepage';
import RecommendedArtist from './RecommendedArtist';
import { useEffect, useRef } from 'react';

const RecommendedList = ({ recommendedSongs }) => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (el) {
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
  }, []);

  if (!recommendedSongs) return null;

  return (
    <StyledRecommendedList ref={ref}>
      {recommendedSongs.map((track, index) => {
        return (
          <RecommendedArtist
            key={index}
            artist={track.artists[0].name}
            song={track.name}
            image={track.album.images[1].url}
            albumId={track.album.id}
            type={track.album.type}
            songTrack={track.id}
          />
        );
      })}
    </StyledRecommendedList>
  );
};

export default RecommendedList;
