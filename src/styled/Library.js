import styled from 'styled-components';

export const StyledGridWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 1;
  display: grid;
  row-gap: 16px;
  width: 100vw;
  height: calc(100vh - 104px);
  margin: 56px 0 48px;
  padding: 16px 0;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-columns: 16px 1fr 16px;
  grid-template-rows: minmax(30px, auto) 1fr;
  background-color: var(--lt-background);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
  }

  @media screen and (min-width: 1024px) {
    margin: 56px 0 90px;
    height: calc(100vh - 146px);
    grid-template-columns: calc(100vw / 6) 24px 3fr 24px;
    grid-template-rows: auto minmax(auto, 1fr);
  }
`;

export const StyledLibraryTitle = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
  }

  @media (prefers-color-scheme: dark) {
    h5 {
      color: var(--dt-body-font-bold);
    }
  }

  @media screen and (min-width: 1024px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    h5 {
      font: var(--h4-bold);
    }
  }
`;

export const StyledAlbumSection = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  display: grid;
  grid-auto-rows: max-content;
  row-gap: 16px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(213px, 1fr));
    column-gap: 24px;
    row-gap: 36px;
    justify-items: center;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`;

export const StyledPlaylistItem = styled.div`
  max-width: 100%;
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
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledAlbumThumbnail = styled.img`
  src: url(${(props) => props.src});
  max-width: 56px;
  object-fit: cover;
  aspect-ratio: 1;
  box-shadow: var(--lt-shadow-md);
  border-radius: 14px;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: var(--dt-shadow-md);
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
