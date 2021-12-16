import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Logo } from './Utils';

export const MenuContainer = styled.div`
  background: var(--lt-footer-background);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 48px;
  left: 0px;
  grid-column: 1/7;
  grid-row: 1/7;
  position: fixed;
  bottom: 0;
  color: var(--lt-body-font-bold);
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.3);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-footer-background);
    color: var(--dt-body-font-bold);
  }

  @media screen and (min-width: 1024px) {
    padding-left: 18px;
    grid-column: 1/2;
    width: calc(100vw / 6);
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--lt-body-font-bold);
  text-decoration: none;
  font: var(--font-body-small);
  transition: 0.2s all;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    font: var(--font-body);
    align-self: flex-start;
    margin-bottom: 8px;
    padding: 6px;
    align-items: center;
    width: calc(100% - 18px);
    margin-right: 18px;

    p {
      margin-left: 8px;
      position: relative;
      top: 1px;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-regular);
  }

  &:hover {
    color: var(--lt-active-color);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }
  }

  &.active {
    color: var(--lt-active-color);
    font: var(--font-body-small-bold);

    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }

    @media screen and (min-width: 1024px) {
      border-radius: 5px;
      font: var(--font-body-bold);
      color: var(--dt-body-font-bold);
      background: var(--lt-active-color);
      @media (prefers-color-scheme: dark) {
        background: var(--dt-active-color);
        color: var(--dt-body-font-bold);
      }
    }
  }
`;

export const NavLogo = styled(Logo)`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    width: calc(100% - 18px);
    margin: 24px 18px 48px 0;
  }
`;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 24px;
  margin-bottom: calc(100vw / 6);
  border-top: 1px solid var(--lt-body-font-bold);
  padding: 24px 0 0 0;

  a {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    border-top: 1px solid var(--dt-background);
  }
`;

export const PlaylistItem = styled.div`
  font: var(--font-body);
  margin-bottom: 16px;
  margin-right: 18px;
  width: calc(100% - 18px);
  transition: 0.2s all;
  cursor: pointer;
  color: var(--lt-body-font-regular);

  &:hover {
    color: var(--lt-active-color);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-regular);
    &:hover {
      color: var(--dt-active-color);
    }
  }
`;
