import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 56px;
  background: var(--lt-navbar-background);
  position: fixed;
  padding: 0 16px;
  top: 0;
  box-shadow: var(--lt-shadow-lg-bottom);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
    box-shadow: var(--dt-shadow-lg-bottom);
  }

  @media screen and (min-width: 1024px) {
    height: 56px;
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
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding-right: 20px;
  /* border: 1px solid var(--dt-active-color); */
  color: var(--lt-body-font-bold);
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);
  }
  @media screen and (min-width: 1024px) {
    width: 292px;
    margin-left: 4px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.35);
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
    height: 40px;
  }
`;

export const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
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
  height: 40px;
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
  left: 20px;
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
  height: 60px;
  width: 150px;
  padding: 10px 0;
  background: var(--lt-navbar-background);
  position: absolute;
  @media screen and (min-width: 1024px) {
    top: 60px;
    right: 40px;
  }
  right: 8px;
  top: 60px;
  border-radius: 10px;
  box-shadow: var(--lt-shadow-xl);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
    box-shadow: var(--dt-shadow-xl);
  }
`;

export const SignoutButton = styled.button`
  height: 40px;
  width: 150px;
  background: inherit;
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

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0 16px;
  left: 0;
  width: calc(100vw - 32px);
  height: auto;
  max-height: 338px;
  overflow-y: auto;
  top: 60px;
  background: var(--lt-navbar-background);
  z-index: 9999;
  box-shadow: var(--lt-shadow-xl);
  padding: 16px 16px 8px 16px;
  border-radius: 10px;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
    box-shadow: var(--dt-shadow-xl);
  }
  @media screen and (min-width: 1024px) {
    width: calc(100vw * 5 / 6 - 48px);
    margin: 0 24px;
    top: 60px;
    padding: 24px 24px 0 24px;
    height: auto;
    max-height: 424px;
  }
`;

export const TrackSearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const TrackCover = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 14px;
  box-shadow: var(--lt-shadow-md);
  margin-right: 8px;
  @media screen and (min-width: 1024px) {
    border-radius: 5px;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: var(--dt-shadow-md);
  }
`;
export const TrackInfo = styled.div`
  margin-left: 3;
`;

export const Title = styled.h5`
  font: var(--font-body-small-bold);
  color: var(--lt-body-font-bold);
  transition: 0.2s all;

  ${TrackSearchResultContainer}:hover & {
    color: var(--lt-active-color);
  }
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);

    ${TrackSearchResultContainer}:hover & {
      color: var(--dt-active-color);
    }
  }

  @media screen and (min-width: 1024px) {
    font: var(--font-body-bold);
  }
`;

export const Artists = styled.p`
  font: var(--font-body-small);
  color: var(--lt-body-font-regular);
  transition: 0.2s all;
  ${TrackSearchResultContainer}:hover & {
    color: var(--lt-active-color);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-regular);
    ${TrackSearchResultContainer}:hover & {
      color: var(--dt-active-color);
    }
  }

  @media screen and (min-width: 1024px) {
    font: var(--font-body);
  }
`;

export const NotFound = styled(Title)`
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const Error = styled.div`
  background: red;
  color: #ebf7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;

  @media screen and (min-width: 1024px) {
    top: 56px;
    left: 0px;
    height: 40px;
  }

  /* z-index: 9999; */
`;
