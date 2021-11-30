import { StyledRecentlyPlayedList } from "../../../styled/Homepage.styled";
import RecentlyPlayedSong from "./RecentlyPlayedSong";
import logo from "../../../logo.svg";

const RecentlyPlayedList = () => {
	const artistList = [
		{ artist: "Evergrey", album: "Glorious Collision", image: logo },
		{ artist: "Evergrey", album: "Torn", image: logo },
		{ artist: "John Petrucci", album: "Suspended Animation", image: logo },
		{ artist: "Erra", album: "Drift", image: logo },
		{ artist: "Novelists FR", album: "C`est La Vie", image: logo },
	];

	return (
		<StyledRecentlyPlayedList>
			{artistList.map(({ artist, album, image }, index) => {
				return (
					<RecentlyPlayedSong
						key={index}
						artist={artist}
						album={album}
						albumImage={image}
					/>
				);
			})}
		</StyledRecentlyPlayedList>
	);
};

export default RecentlyPlayedList;
