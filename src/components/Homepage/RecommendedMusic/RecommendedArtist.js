import {
  StyledAlbumContainer,
  StyledAlbumCover,
  StyledAlbumImage,
  StyledAlbumTextContainer,
} from '../../../styled/Homepage.styled';
import { useNavigate } from 'react-router-dom';

const RecommendedArtist = ({
  artist,
  song,
  image,
  albumId,
  type,
  songTrack,
}) => {
  console.log('track', songTrack);
  const navigate = useNavigate();
  return (
    <StyledAlbumContainer
      onClick={() =>
        navigate(`/library/${albumId}`, {
          state: { type: `${type}s`, track: songTrack },
        })
      }
    >
      <StyledAlbumCover>
        <StyledAlbumImage src={image} />
      </StyledAlbumCover>
      <StyledAlbumTextContainer>
        <p>{song}</p>
        <h5>{artist}</h5>
      </StyledAlbumTextContainer>
    </StyledAlbumContainer>
  );
};

export default RecommendedArtist;
