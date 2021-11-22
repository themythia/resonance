import {
	StyledGridWrapper,
	StyledLibraryTitle,
	StyledAlbumSection,
	StyledPlaylistItem,
	StyledAlbumThumbnail,
	StyledAlbumTextContainer,
} from "../../styled/Library.styled";
import logo from "../../logo.svg";

const playlistAlbums = [
	{
		name: "GymWorkout",
		description: "headbanging metal",
		picture: logo,
	},
	{
		name: "90SlowJam",
		description: "nice bedroom playlist",
		picture: logo,
	},
	{
		name: "Instrumentals",
		description: "Guitar music",
		picture: logo,
	},
	{
		name: "OST",
		description: "favorite soundtracks",
		picture: logo,
	},
	{
		name: "ProgMetal",
		description: "Evergrey and Symphony X for life!",
		picture: logo,
	},
];

const Library = () => {
	return (
		<StyledGridWrapper>
			<StyledLibraryTitle>
				<h5>Your Library</h5>
			</StyledLibraryTitle>
			<StyledAlbumSection>
				{playlistAlbums.map((item) => {
					return (
						<StyledPlaylistItem>
							<StyledAlbumThumbnail src={item.picture} />
							<StyledAlbumTextContainer>
								<p>{item.name}</p>
								<p>{item.description}</p>
							</StyledAlbumTextContainer>
						</StyledPlaylistItem>
					);
				})}
			</StyledAlbumSection>
		</StyledGridWrapper>
	);
};

export default Library;
