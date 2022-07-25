import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background: var(--lt-background);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
  }
`;
