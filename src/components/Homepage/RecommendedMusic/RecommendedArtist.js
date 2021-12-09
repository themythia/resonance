import {
  StyledAlbumContainer,
  StyledAlbumCover,
  StyledAlbumImage,
  StyledAlbumTextContainer,
} from '../../../styled/Homepage.styled';

const RecommendedArtist = ({ artist, song, image ,trackId,type}) => {
  return (
    <StyledAlbumContainer onClick={() => console.log(trackId,type)}>
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
