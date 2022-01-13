import styled from 'styled-components';

export const StyledGridWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 1;

  display: grid;
  row-gap: 16px;
  width: 100vw;
  max-width: 100vw;
  height: calc(100vh - 104px);
  margin: 56px 0 48px;
  padding: 16px 0;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-columns: 16px 1fr 16px;
  grid-template-rows: auto minmax(max-content, auto) auto minmax(160px, 1fr);
  background-color: var(--lt-background);

  @media (prefers-color-scheme: dark) {
    background-color: var(--dt-background);
  }

  @media only screen and (max-height: 414px) and (orientation: landscape) {
    row-gap: 4px;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 146px);
    margin: 56px 0 90px;
    padding-right: 16px;
    gap: 16px;
    grid-template-columns: calc(100vw / 6) 3fr;
    grid-template-rows:
      minmax(min-content, max-content) minmax(max-content, 1fr)
      auto minmax(max-content, 1fr);
  }
`;

export const StyledTitleRecommended = styled.div`
  max-width: calc(100vw - 32px);
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
  }
  p {
    color: var(--lt-body-font-bold);
    font: var(--font-body-small);
  }

  @media (prefers-color-scheme: dark) {
    h5 {
      font: var(--h5-bold);
      color: var(--dt-body-font-bold);
    }
    p {
      color: var(--dt-body-font-bold);
      font: var(--font-body-small);
    }
  }
  @media screen and (min-width: 1024px) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;

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
  grid-row: 2 / 3;
  overflow-x: hidden;
  max-width: calc(100vw - 32px);
  @media screen and (min-width: 1024px) {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
  }
`;

export const StyledRecommendedList = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 100%; */
  overflow-x: auto;
  padding-bottom: 8px;
  max-width: 100%;
`;

export const StyledAlbumContainer = styled.div`
  min-width: 120px;
  max-width: 144px;
  margin-inline: 8px;
  cursor: pointer;

  height: max-content;
  @media only screen and (max-height: 414px) and (orientation: landscape) {
    min-width: 60px;
    max-width: 60px;
  }
  @media screen and (min-height: 940px) {
    min-width: 208px;
  }

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
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  margin-bottom: 8px;
  box-shadow: var(--lt-shadow-md);
  @media only screen and (max-height: 414px) and (orientation: landscape) {
    border-radius: 18px;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: var(--dt-shadow-md);
  }
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
    color: var(--lt-body-font-bold);
    font: var(--font-body-small-bold);
  }

  h5 {
    color: var(--lt-body-font-regular);
    font: var(--font-body-small);
  }

  @media (prefers-color-scheme: dark) {
    p {
      color: var(--dt-body-font-bold);
    }
    h5 {
      color: var(--dt-body-font-regular);
    }
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
  grid-row: 3 / 4;
  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
  }
  p {
    color: var(--lt-body-font-bold);
    font: var(--font-body-small);
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: var(--dt-body-font-bold);
    }
    h5 {
      color: var(--dt-body-font-bold);
    }
  }
  @media screen and (min-width: 1024px) {
    grid-column: 2 / -1;
    grid-row: 3 / 4;

    h5 {
      font: var(--h4-bold);
    }
  }
`;

export const StyledRecentlyPlayedContainer = styled.section`
  grid-column: 2 / 3;
  grid-row: 4 / 5;

  @media screen and (min-width: 1024px) {
    grid-column: 2 / -1;
    grid-row: 4 / 5;
    overflow-x: auto;
    overflow-y: hidden;
    height: min-content;
  }
`;

export const StyledRecentlyPlayedList = styled.div`
  display: flex;
  row-gap: 16px;
  padding-bottom: 16px;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledSongContainer = styled.div`
  display: flex;
  align-items: center;
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
  @media screen and (min-height: 940px) {
    min-width: 208px;
  }
`;

export const StyledSongImageContainer = styled.div`
  min-width: 60px;
  max-width: 60px;
  overflow: hidden;
  box-shadow: var(--lt-shadow-md);
  border-radius: 15%;
  @media screen and (min-width: 1024px) {
    border-radius: 30px;
    max-width: 100%;
    margin-bottom: 8px;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: var(--dt-shadow-md);
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
    color: var(--lt-body-font-bold);
    font: var(--font-body-small-bold);
  }

  h5 {
    color: var(--lt-body-font-regular);
    font: var(--font-body-small);
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: var(--dt-body-font-bold);
    }
    h5 {
      color: var(--dt-body-font-regular);
    }
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
