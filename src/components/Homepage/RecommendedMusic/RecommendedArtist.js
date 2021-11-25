import {
  StyledAlbumContainer,
  StyledAlbumCover,
  StyledAlbumImage,
  StyledAlbumTextContainer,
} from '../../../styled/Homepage.styled';


const RecommendedArtist = ({ artist, album, image }) => {
  return (
    <StyledAlbumContainer>
      <StyledAlbumCover>
        <StyledAlbumImage src='https://i.redd.it/hwiqn9qtkt271.jpg' />
      </StyledAlbumCover>
      <StyledAlbumTextContainer>
        <p>{album}</p>
        <h5>{artist}</h5>
      </StyledAlbumTextContainer>
    </StyledAlbumContainer>
  );
};

export default RecommendedArtist;
