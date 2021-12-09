import {
  StyledAlbumContainer,
  StyledAlbumCover,
  StyledAlbumImage,
  StyledAlbumTextContainer,
} from '../../../styled/Homepage.styled';

const RecommendedArtist = ({ artist, song, image ,albumId,type}) => {
  return (
    <StyledAlbumContainer onClick={() => console.log(albumId,type)}>
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
