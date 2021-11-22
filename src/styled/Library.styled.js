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
`;

export const StyledLibraryTitle = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	h5 {
		font: var(--h5-bold);
		color: var(--dt-body-font-bold);
	}
`;

export const StyledAlbumSection = styled.section`
	grid-column: 2 / 3;
	grid-row: 3 / 4;

	display: grid;
    grid-auto-rows: max-content;
    row-gap: 16px;
	margin-bottom: -16px;
`;

export const StyledPlaylistItem = styled.div`
	max-width: 100%;
	display: flex;
	align-items: center;
	border: 1px solid red;
	color: white;
`;

export const StyledAlbumThumbnail = styled.img`
	src: url(${(props) => props.src});
	max-width: 56px;
	object-fit: cover;
	aspect-ratio: 1;
    border: 1px solid white;
    border-radius: 14px;
    
`;

export const StyledAlbumTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`;
