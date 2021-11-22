import styled from "styled-components";

export const StyledGridWrapper = styled.div`
	grid-column: 1 / -1;
	grid-row: 1 / 1;

	display: grid;
	row-gap: 16px;
	width: 100vw;
	height: 100vh;

	grid-template-columns: 16px 1fr 16px;
	grid-template-rows: 96px minmax(30px, auto) 1fr 96px;
	background-color: var(--dt-background);

	@media screen and (min-width: 1024px) {
		gap: 24px;
		grid-template-columns: 320px 3fr;
		grid-template-rows:
			minmax(100px, max-content) minmax(96px, auto) minmax(auto, 1fr)
			90px;
	}
`;

export const StyledLibraryTitle = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	h5 {
		font: var(--h5-bold);
		color: var(--dt-body-font-bold);
	}
	@media screen and (min-width: 1024px) {
		grid-column: 2 / -1;
		grid-row: 2 / 3;
		h5 {
			font: var(--h4-bold);
		}
	}
`;

export const StyledAlbumSection = styled.section`
	grid-column: 2 / 3;
	grid-row: 3 / 4;

	display: grid;
	grid-auto-rows: max-content;
	row-gap: 16px;
	margin-bottom: -16px;
	overflow: auto;
	border: 2px solid yellowgreen;
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		column-gap: 24px;

		grid-column: 2 / -1;
		grid-row: 3 / 4;
		margin-bottom: -24px;
	}
`;

export const StyledPlaylistItem = styled.div`
	max-width: 100%;
	display: flex;
	align-items: center;
	border: 1px solid red;
	@media screen and (min-width: 1024px) {
		max-width: 220px;
		flex-direction: column;
		text-align: center;
	}
`;

export const StyledAlbumThumbnail = styled.img`
	src: url(${(props) => props.src});
	max-width: 56px;
	object-fit: cover;
	aspect-ratio: 1;
	border: 1px solid white;
	border-radius: 14px;
	@media screen and (min-width: 1024px) {
		max-width: 216px;
	}
`;

export const StyledAlbumTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8px;

	max-width: 50%;

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
		max-width: 90%;
		margin-left: 0;
		margin-top: 16px;
		p {
			font: var(--font-body-bold);
		}
		h5 {
			font: var(--font-body);
		}
	}
`;
