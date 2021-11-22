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
		name: "blink 182, smashing pumpkins",
		description: "punk rock for retards",
		picture: logo,
	},
	{
		name: "GymWorkout2",
		description: "Djent and Brootalz",
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
		name: "OST1",
		description: "favorite soundtracks",
		picture: logo,
	},
	{
		name: "OST2",
		description: "favorite soundtracks",
		picture: logo,
	},
	{
		name: "OST3",
		description: "favorite soundtracks",
		picture: logo,
	},
	{
		name: "OST4",
		description: "favorite soundtracks",
		picture: logo,
	},
	{
		name: "ProgMetal",
		description: "Evergrey and Symphony X for life!",
		picture: logo,
	},
	{
		name: "Adriano Celentano",
		description: "CAZZO!",
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
				{playlistAlbums.map((item,index) => {
					return (
						<StyledPlaylistItem key={index}>
							<StyledAlbumThumbnail src={item.picture} />
							<StyledAlbumTextContainer>
								<p>{item.name}</p>
								<h5>{item.description}</h5>
							</StyledAlbumTextContainer>
						</StyledPlaylistItem>
					);
				})}
			</StyledAlbumSection>
		</StyledGridWrapper>
	);
};

export default Library;
