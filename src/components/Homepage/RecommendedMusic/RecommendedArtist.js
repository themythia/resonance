import { StyledArtistCover } from "../../../styled/Homepage.styled";
import logo from "../../../logo.svg"

const RecommendedArtist = ({ artist, album ,image}) => {
	return (
		<StyledArtistCover>
			<img src={logo} alt="album" />
			<p>{album}</p>
			<h5>{artist}</h5>
		</StyledArtistCover>
	);
};

export default RecommendedArtist;
