import { StyledRecommendedList } from "../../../styled/Homepage.styled";
import RecommendedArtist from "./RecommendedArtist";

const RecommendedList = () => {
	const artistList = [
		{ artist: "Evergrey", album: "Glorious Collision" },
		{ artist: "Dream Theater", album: "Images and Words" },
		{ artist: "Eminem", album: "Infinite" },
		{ artist: "Monuments", album: "The Amanuensis" },
		{ artist: "Novelists FR", album: "C`est La Vie" },
	];

	return (
		<StyledRecommendedList>
			{artistList.map(({ artist, album }, index) => {
				return <RecommendedArtist key={index} artist={artist} album={album} />;
			})}
		</StyledRecommendedList>
	);
};

export default RecommendedList;
