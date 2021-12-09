import { StyledRecommendedList } from '../../../styled/Homepage.styled';
import RecommendedArtist from './RecommendedArtist';

const RecommendedList = ({ recommendedSongs }) => {
  if (!recommendedSongs) return null;

  return (
    <StyledRecommendedList>
      {recommendedSongs.map((track) => {
        return (
          <RecommendedArtist
            key={track.id}
            artist={track.artists[0].name}
            song={track.name}
            image={track.album.images[1].url}
            trackId={track.id}
            type={track.type}
          />
        );
      })}
    </StyledRecommendedList>
  );
};

export default RecommendedList;
