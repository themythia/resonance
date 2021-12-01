import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 96px;
  background: var(--lt-navbar-background);
  position: fixed;
  top: 0;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 75%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding-right: 20px;
  border: 1px solid var(--dt-active-color);
  color: var(--lt-body-font-bold);
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);
  }
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  height: 40px;
  border-radius: 50px;
  font: var(--font-body);
  background: transparent;
  border: none;
  outline: none;
  padding-left: 20px;
  color: var(--lt-body-font-bold);
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);
  }
`;

export const ProfilePic = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 100%;
`;

export const SearchInputs = styled.div``;
