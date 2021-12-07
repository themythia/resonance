import {
  StyledSongAlbumImage,
  StyledSongContainer,
  StyledSongImageContainer,
  StyledSongTextInfo,
} from '../../../styled/Homepage.styled';

const RecentlyPlayedSong = ({ artist, song, albumImage }) => {
  return (
    <StyledSongContainer onClick={() => console.log('ALO BRE!')}>
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
