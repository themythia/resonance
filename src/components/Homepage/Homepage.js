import {
	StyledGridWrapper,
	StyledListContainer,
	StyledRecentlyPlayedContainer,
} from "../../styled/Homepage.styled";
import RecommendedList from "./RecommendedMusic/RecommendedList";
import RecentlyPlayedList from "./RecentlyPlayedMusic/RecentlyPlayedList";

const Homepage = () => {
	return (
		<StyledGridWrapper>
			<StyledListContainer>
				<h5>Recommended for you</h5>
				<p>Get better recommendations the more you listen.</p>
				<RecommendedList />
			</StyledListContainer>

			<StyledRecentlyPlayedContainer>
				<RecentlyPlayedList />
			</StyledRecentlyPlayedContainer>
		</StyledGridWrapper>
	);
};

export default Homepage;
