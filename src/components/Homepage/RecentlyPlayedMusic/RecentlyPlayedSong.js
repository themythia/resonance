import {
  StyledSongAlbumImage,
  StyledSongContainer,
  StyledSongImageContainer,
  StyledSongTextInfo,
} from '../../../styled/Homepage.styled';
import { useNavigate } from 'react-router-dom';

const RecentlyPlayedSong = ({ artist, song, albumImage, albumId, type }) => {
  const navigate = useNavigate();

  return (
    <StyledSongContainer
      onClick={() => { navigate(`/library/${albumId}`, { state: { type: `${type}s` } }) }}
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
