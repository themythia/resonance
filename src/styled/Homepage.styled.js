import styled from "styled-components";

export const StyledGridWrapper = styled.div`
	grid-column: 1 / -1;
	grid-row: 1 / 1;

	display: grid;
	width: 100vw;
	height: 100vh;

	grid-template-columns: 16px 1fr 16px;
	grid-template-rows: 96px 1fr 96px;
	background-color: var(--lt-background);
	@media (prefers-color-scheme: dark) {
		background-color: var(--dt-background);
	}
`;

export const StyledListContainer = styled.section`
	grid-column: 2 / 3;
	grid-row: 2 / 3;

	overflow-x: hidden;
	align-self: start;

	h5 {
		color: var(--dt-body-font-bold);
		font: var(--h5-bold);
	}
	p {
		color: var(--dt-body-font-bold);
		font: var(--font-body-small);
	}
`;

export const StyledRecommendedList = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 16px;
	height: max-content;

	overflow-x: scroll;
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
`;
