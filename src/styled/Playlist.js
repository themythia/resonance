import styled from 'styled-components';

export const PlaylistPageContainer = styled.div`
  grid-row: 1/7;
  grid-column: 1/7;
  max-height: calc(100vh - 104px);
  height: calc(100vh - 104px);
  margin-top: 56px;
  background: var(--lt-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--lt-body-font-regular);
  font: var(--font-body-small);

  a {
    color: inherit;
    text-decoration: none;
  }

  h5 {
    font: var(--h5-bold);
  }

  @media screen and (min-width: 1024px) {
    max-height: calc(100vh - 146px);
    height: calc(100vh - 146px);
    grid-column: 2/7;
    margin-top: 56px;
    font: var(--font-body);
    h5 {
      font: var(--h1-bold);
    }
  }

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
    color: var(--dt-body-font-regular);
  }
`;

export const ScrollingDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    padding: 0 24px;
  }
`;

export const PlaylistCover = styled.img`
  max-width: 213px;
  width: 45%;
  height: auto;
  border-radius: 25%;
  margin-top: 40px;
  align-self: center;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  @media screen and (min-width: 1024px) {
    border-radius: 14px;
    margin-top: 0;
    margin-right: 24px;
  }
`;

export const PlayListInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const PlaylistInfoText = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
  text-align: center;
  text-transform: capitalize;
  h5 {
    color: var(--lt-body-font-bold);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-body-font-bold);
    }
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    margin-top: 36px;
  }
`;

export const SongContainer = styled.div`
  margin: 16px;
  background: ${(props) =>
    props.selected ? 'var(--lt-navbar-background)' : 'transparent'};
  border-radius: 14px;
  box-shadow: ${(props) =>
    props.selected ? 'inset 0px 2px 4px 0px var(--lt-background) ' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.selected ? 'var(--dt-navbar-background)' : 'transparent'};

    box-shadow: ${(props) =>
      props.selected ? 'inset 0px 2px 4px 0px var(--dt-background) ' : 'none'};
  }

  &:hover {
    color: var(--lt-active-color);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 24px 0px;
  }
`;

export const SongContainerLeft = styled.div`
  display: flex;
  align-items: center;
  max-width: 60%;
  width: 60%;
`;

export const SongInfo = styled.div`
  text-align: left;
  margin-left: 8px;
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const SongInfoText = styled.p`
  font: ${(props) =>
    props.weight === 'bold'
      ? 'var(--font-body-small-bold)'
      : 'var(--font-body-small)'};

  color: ${(props) => props.weight === 'bold' && 'var(--lt-body-font-bold)'};

  ${SongContainer}:hover & {
    color: var(--lt-active-color);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }
  }

  @media (prefers-color-scheme: dark) {
    color: ${(props) => props.weight === 'bold' && 'var(--dt-body-font-bold)'};
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    font: var(--font-body);
  }
`;

export const SongDuration = styled.p`
  @media screen and (min-width: 1024px) {
    text-align: right;
    width: 10%;
    padding-right: 24px;
  }
`;
export const SongAlbum = styled.p`
  display: none;
  @media screen and (min-width: 1024px) {
    display: inline-block;
    width: 30%;
  }
`;

export const SongCover = styled(PlaylistCover)`
  height: 56px;
  width: 56px;
  margin: 0;
  @media screen and (min-width: 1024px) {
    border-radius: 5px;
  }
`;
