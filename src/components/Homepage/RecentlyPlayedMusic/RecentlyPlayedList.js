import { StyledRecentlyPlayedList } from "../../../styled/Homepage.styled";
import RecentlyPlayedSong from "./RecentlyPlayedSong";

const RecentlyPlayedList = () => {
	const artistList = [
		{ artist: "Evergrey", album: "Glorious Collision" },
		{ artist: "Evergrey", album: "Torn" },
		{ artist: "John Petrucci", album: "Suspended Animation" },
		{ artist: "Erra", album: "Drift" },
		{ artist: "Novelists FR", album: "C`est La Vie" },
	];

	return (
		<StyledRecentlyPlayedList>
			{artistList.map(({ artist, album }, index) => {
				return <RecentlyPlayedSong key={index} artist={artist} album={album} />;
			})}
		</StyledRecentlyPlayedList>
	);
};

export default RecentlyPlayedList;
