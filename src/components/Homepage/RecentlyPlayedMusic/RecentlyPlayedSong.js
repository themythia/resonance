import { StyledRecentlyPlayedSong } from "../../../styled/Homepage.styled";

const RecentlyPlayedSong = ({ artist, album }) => {
	return (
		<StyledRecentlyPlayedSong>
			<h5>{album}</h5>
			<p>{artist}</p>
		</StyledRecentlyPlayedSong>
	);
};

export default RecentlyPlayedSong;
