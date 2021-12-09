import {
  StyledSongAlbumImage,
  StyledSongContainer,
  StyledSongImageContainer,
  StyledSongTextInfo,
} from '../../../styled/Homepage.styled';

const RecentlyPlayedSong = ({ artist, song, albumImage, albumId, type }) => {
  return (
    <StyledSongContainer onClick={() => console.log(albumId, type)}>
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
