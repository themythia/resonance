import { StyledRecommendedList } from '../../../styled/Homepage.styled';
import RecommendedArtist from './RecommendedArtist';

const RecommendedList = ({ recommendedSongs }) => {
  if (!recommendedSongs) return null;

  return (
    <StyledRecommendedList>
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
