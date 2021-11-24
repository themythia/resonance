import {
  StyledArtistCover,
  StyledAlbumContainer,
  StyledAlbumCover,
  StyledAlbumImage,
  StyledAlbumTextContainer,
} from '../../../styled/Homepage.styled';
import logo from '../../../logo.svg';

const RecommendedArtist = ({ artist, album, image }) => {
  return (
    // <StyledArtistCover>
    // 	<img src={logo} alt="album" />
    // 	<p>{album}</p>
    // 	<h5>{artist}</h5>
    // </StyledArtistCover>

    <StyledAlbumContainer>
      <StyledAlbumCover>
        <StyledAlbumImage src={logo} />
      </StyledAlbumCover>
      <StyledAlbumTextContainer>
        <p>{album}</p>
        <h5>{artist}</h5>
      </StyledAlbumTextContainer>
    </StyledAlbumContainer>
  );
};

export default RecommendedArtist;
