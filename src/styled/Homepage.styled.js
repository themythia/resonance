import styled from "styled-components";

export const StyledGridWrapper = styled.div`
	grid-column: 1 / -1;
	grid-row: 1 / 1;

	display: grid;
	row-gap: 16px;
	width: 100vw;
	height: 100vh;

	grid-template-columns: 16px 1fr 16px;
	grid-template-rows:
		96px auto minmax(max-content, auto) auto minmax(0, 1fr)
		96px;
	background-color: var(--dt-background);

	@media screen and (min-width: 1024px) {
		gap: 24px;
		grid-template-columns: 320px 3fr;
		grid-template-rows:
			minmax(100px, max-content) minmax(96px, auto) minmax(max-content, 1fr)
			minmax(max-content, auto) minmax(max-content, 1fr) 90px;
	}
`;

export const StyledTitleRecommended = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	h5 {
		font: var(--h5-bold);
		color: var(--dt-body-font-bold);
	}
	p {
		color: var(--dt-body-font-bold);
		font: var(--font-body-small);
	}
	@media screen and (min-width: 1024px) {
		grid-column: 2 / -1;
		grid-row: 2 / 3;

		h5 {
			font: var(--h4-bold);
		}
		p {
			font: var(--font-body);
		}
	}
`;

export const StyledListContainer = styled.section`
	grid-column: 2 / 3;
	grid-row: 3 / 4;

	overflow-x: hidden;

	align-self: start;
	@media screen and (min-width: 1024px) {
		grid-column: 2 / -1;
		grid-row: 3 / 4;
	}
`;

export const StyledRecommendedList = styled.div`
	display: flex;
	justify-content: space-between;

	height: max-content;

	overflow-x: auto;
	/* hide scrollbar but allow scrolling */
	/* & {
		-ms-overflow-style: none; 
		scrollbar-width: none; 
		overflow-x: scroll;
	}

	&::-webkit-scrollbar {
		display: none; 
	} */
`;

export const StyledArtistCover = styled.div`
	min-width: 120px;
	max-height: max-content;
	margin-inline: 8px;
	text-align: center;

	img {
		max-width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 30px;
		border: 1px solid white;
		margin-bottom: 10px;
	}

	/* string truncation ********* */
	& > p,
	h5 {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	p {
		color: var(--dt-body-font-bold);
		font: var(--font-body-small-bold);
	}

	h5 {
		font: var(--font-body-small);
		color: var(--dt-body-font-regular);
		text-transform: uppercase;
	}

	@media screen and (min-width: 1024px) {
		min-width: 216px;
		p {
			font: var(--font-body-bold);
		}
		h5 {
			font: var(--font-body);
		}
	}
`;

// Recently Played Section ***********************

export const StyledTitleRecent = styled.div`
	grid-column: 2 / 3;
	grid-row: 4 / 5;
	h5 {
		font: var(--h5-bold);
		color: var(--dt-body-font-bold);
	}
	p {
		color: var(--dt-body-font-bold);
		font: var(--font-body-small);
	}
	@media screen and (min-width: 1024px) {
		grid-column: 2 / -1;
		grid-row: 4 / 5;

		h5 {
			font: var(--h4-bold);
		}
	}
`;

export const StyledRecentlyPlayedContainer = styled.section`
	grid-column: 2 / 3;
	grid-row: 5 / 6;

	margin-bottom: -16px;
	overflow: auto;

	@media screen and (min-width: 1024px) {
		grid-column: 2 / -1;
		grid-row: 5 / 6;
		overflow-x: auto;
		overflow-y: hidden;
	}
`;

export const StyledRecentlyPlayedList = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const StyledRecentlyPlayedSong = styled.div`
	display: flex;
	align-items: center;
	margin-block: 16px;
	cursor: pointer;

	&:hover {
		p {
			color: var(--cl-primary3-500);
		}
		h5 {
			color: var(--cl-primary3-500);
		}
	}

	@media screen and (min-width: 1024px) {
		flex-direction: column;
		text-align: center;
		margin-inline: 24px;
	}
`;

export const StyledSongThumbnail = styled.img`
	width: 56px;
	object-fit: cover;
	src: url(${(props) => props.src});
	aspect-ratio: 1 / 1;
	border: 1px solid white;
	border-radius: 14px;
	@media screen and (min-width: 1024px) {
		max-width: 216px;
		width: 216px;
		margin-bottom: 16px;
	}
`;
export const StyledSongInfoContainer = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 8px;

	& > p,
	h5 {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		transition: ease-in-out 300ms color;
	}

	p {
		color: var(--dt-body-font-bold);
		font: var(--font-body-small-bold);
	}

	h5 {
		color: var(--dt-body-font-regular);
		font: var(--font-body-small);
	}
	@media screen and (min-width: 1024px) {
		margin: 0;
		p {
			font: var(--font-body-bold);
		}
		h5 {
			font: var(--font-body);
			text-transform: uppercase;
		}
	}
`;
