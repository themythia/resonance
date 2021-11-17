import {
	StyledGridWrapper,
	StyledListContainer,
} from "../../styled/Homepage.styled";
import RecommendedList from "./RecommendedMusic/RecommendedList";

const Homepage = () => {
	return (
		<StyledGridWrapper>
			<StyledListContainer>
				<h5>Recommended for you</h5>
				<p>Get better recommendations the more you listen.</p>
				<RecommendedList />
			</StyledListContainer>
		</StyledGridWrapper>
	);
};

export default Homepage;
