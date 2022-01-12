import styled from 'styled-components';

export const StyledGridWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 1;

  display: grid;
  row-gap: 16px;
  width: 100vw;
  height: calc(100vh - 144px);
  margin: 96px 0 48px;
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
    margin: 104px 0 90px;

    gap: 24px;
    height: calc(100vh - 194px);
    grid-template-columns: calc(100vw / 6) 3fr;
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
    grid-column: 2 / -1;
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
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    column-gap: 24px;

    justify-items: center;

    grid-column: 2 / -1;
    grid-row: 2 / 3;
    margin-bottom: -24px;
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
    max-width: 208px;
    min-width: 208px;
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledAlbumThumbnail = styled.img`
  src: url(${(props) => props.src});
  max-width: 56px;
  object-fit: cover;
  aspect-ratio: 1;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);

  border-radius: 14px;
  @media screen and (min-width: 1024px) {
    max-width: 100%;
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
