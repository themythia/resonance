import { StyledRecommendedList } from '../../../styled/Homepage.styled';
import RecommendedArtist from './RecommendedArtist';

const RecommendedList = ({ recommendedSongs }) => {
  if (!recommendedSongs) return null;

  console.log('recommended', recommendedSongs);
  return (
    <StyledRecommendedList>
      {recommendedSongs.map((track) => {
        return (
          <RecommendedArtist
            key={track.id}
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
