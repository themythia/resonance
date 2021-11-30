import styled from 'styled-components';

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
    gap: 16px;
    grid-template-columns: 320px 3fr;
    grid-template-rows:
      minmax(100px, max-content) minmax(min-content, max-content) minmax(
        max-content,
        1fr
      )
      auto minmax(max-content, 1fr) minmax(90px, max-content);
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

  @media screen and (min-width: 1024px) {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
  }
`;

export const StyledInnerWrapper = styled.div``;

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

// gonna reuse this somehow ****************

export const StyledAlbumContainer = styled.div`
  min-width: 120px;
  max-width: 144px;
  margin-inline: 8px;
  cursor: pointer;
  &:hover {
    p {
      color: var(--cl-primary3-500);
    }
    h5 {
      color: var(--cl-primary3-500);
    }
  }
`;
export const StyledAlbumCover = styled.div`
  border: 1px solid white;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  margin-bottom: 8px;
`;
export const StyledAlbumImage = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;

  object-fit: contain;
  src: url(${(props) => props.src});
`;
export const StyledAlbumTextContainer = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90%;

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

export const StyledSongContainer = styled.div`
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

    margin-block: 0px;
    margin-inline: 8px;
    min-width: 120px;
    max-width: 144px;
  }
`;

export const StyledSongImageContainer = styled.div`
  border: 1px solid white;
  min-width: 60px;
  max-width: 60px;
  overflow: hidden;

  border-radius: 15%;
  @media screen and (min-width: 1024px) {
    border-radius: 30px;

    max-width: 100%;

    margin-bottom: 8px;
  }
`;

export const StyledSongAlbumImage = styled.img`
  src: url(${(props) => props.src});
  max-width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const StyledSongTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  width: 50%;
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
    margin-left: 0;
    max-width: fit-content;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    p {
      font: var(--font-body-bold);
    }
    h5 {
      font: var(--font-body);
    }
  }
`;
