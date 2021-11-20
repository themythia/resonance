import {
	StyledRecentlyPlayedSong,
	StyledSongInfoContainer,
	StyledSongThumbnail,
} from "../../../styled/Homepage.styled";

const RecentlyPlayedSong = ({ artist, album, albumImage }) => {
	return (
		<StyledRecentlyPlayedSong>
			<StyledSongThumbnail src={albumImage} />
			<StyledSongInfoContainer>
				<p>{album}</p>
				<h5>{artist}</h5>
			</StyledSongInfoContainer>
		</StyledRecentlyPlayedSong>
	);
};

export default RecentlyPlayedSong;
