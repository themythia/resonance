import styled from 'styled-components';

export const PlaylistPageContainer = styled.div`
  grid-row: 1/7;
  grid-column: 1/7;
  max-height: 79vh;
  height: 79vh;
  background: var(--lt-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--lt-body-font-regular);
  font: var(--font-body-small);

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
`;

export const PlaylistCover = styled.img`
  max-width: 213px;
  width: 45%;
  height: auto;
  border-radius: 25%;
  margin-top: 40px;
  align-self: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const PlaylistInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
  text-align: center;
  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-body-font-bold);
    }
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const SongContainer = styled.div`
  margin: 16px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: var(--lt-active-color);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }
  }
`;

export const SongContainerLeft = styled.div`
  display: flex;
  align-items: center;
  max-width: 85%;
`;

export const SongInfo = styled.div`
  text-align: left;
  margin-left: 8px;
`;

export const SongInfoText = styled.p`
  font: ${(props) =>
    props.weight === 'bold'
      ? 'var(--font-body-small-bold)'
      : 'var(--font-body-small)'};
`;

export const SongCover = styled(PlaylistCover)`
  height: 56px;
  width: 56px;
  margin: 0;
`;
