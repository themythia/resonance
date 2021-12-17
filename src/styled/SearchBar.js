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
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
  }

  @media screen and (min-width: 1024px) {
    box-shadow: none;
    height: 104px;
    width: calc(100vw - calc(100vw / 6));
    right: 0;
    background: var(--lt-background);
    justify-content: flex-end;
    @media (prefers-color-scheme: dark) {
      background: var(--dt-background);
    }
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
  @media screen and (min-width: 1024px) {
    width: 292px;
    margin-left: 4px;
    height: 56px;
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
  @media screen and (min-width: 1024px) {
    height: 56px;
  }
`;

export const ProfilePic = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 100%;
`;

export const ProfileContainer = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 24px;
    display: flex;
    cursor: pointer;
    user-select: none;
  }
`;
export const UserName = styled.div`
  height: 56px;
  max-width: 200px;
  overflow: hidden;
  padding-left: 16px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  padding-right: 34px;
  background: ${(props) =>
    props.active ? 'var(--cl-primary3-500)' : 'var(--lt-active-color)'};
  font: var(--font-body);
  color: var(--cl-primary1-50);
  display: flex;
  align-items: center;
  position: relative;
  left: 28px;
  z-index: -100;
  transition: 0.2s all;

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.active ? 'var(--cl-primary3-700)' : 'var(--dt-active-color)'};
  }

  ${ProfileContainer}:hover & {
    background: var(--cl-primary3-500);

    @media (prefers-color-scheme: dark) {
      background: var(--cl-primary3-700);
    }
  }
`;

export const Menu = styled.div`
  height: 56px;
  width: 150px;
  background: var(--lt-navbar-background);
  position: absolute;
  @media screen and (min-width: 1024px) {
    top: 90px;
    right: 24px;
  }
  right: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
    box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.7);
  }
`;

export const SignoutButton = styled.button`
  height: 40px;
  width: 150px;
  background: inherit;
  margin-top: 8px;
  border: none;
  font: var(--font-body);
  color: var(--lt-body-font-regular);
  cursor: pointer;

  &:hover {
    background: var(--cl-primary1-200);
  }
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);

    &:hover {
      background: var(--cl-primary1-700);
    }
  }
`;
