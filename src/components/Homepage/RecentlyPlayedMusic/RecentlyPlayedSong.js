import {
  StyledSongAlbumImage,
  StyledSongContainer,
  StyledSongImageContainer,
  StyledSongTextInfo,
} from '../../../styled/Homepage.styled';

const RecentlyPlayedSong = ({ artist, album, albumImage }) => {
  return (
    <StyledSongContainer>
      <StyledSongImageContainer>
        <StyledSongAlbumImage src='https://e.snmc.io/i/1200/s/0348449c729ad8e7082de82f30f90caf/3992350' />
      </StyledSongImageContainer>
      <StyledSongTextInfo>
        <p>{album}</p>
        <h5>{artist}</h5>
      </StyledSongTextInfo>
    </StyledSongContainer>
  );
};

export default RecentlyPlayedSong;
