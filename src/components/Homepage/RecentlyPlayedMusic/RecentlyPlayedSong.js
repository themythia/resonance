import {
  StyledSongAlbumImage,
  StyledSongContainer,
  StyledSongImageContainer,
  StyledSongTextInfo,
} from '../../../styled/Homepage';
import { useNavigate } from 'react-router-dom';

const RecentlyPlayedSong = ({
  artist,
  song,
  albumImage,
  albumId,
  type,
  songTrack,
}) => {
  const navigate = useNavigate();

  return (
    <StyledSongContainer
      onClick={() => {
        navigate(`/library/${albumId}`, {
          state: { type: `${type}s`, track: songTrack },
        });
      }}
    >
      <StyledSongImageContainer>
        <StyledSongAlbumImage src={albumImage} />
      </StyledSongImageContainer>
      <StyledSongTextInfo>
        <p>{song}</p>
        <h5>{artist}</h5>
      </StyledSongTextInfo>
    </StyledSongContainer>
  );
};

export default RecentlyPlayedSong;
