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

  @media (prefers-color-scheme: dark) {
    background: var(--dt-footer-background);
    color: var(--dt-body-font-bold);
  }

  @media screen and (min-width: 1024px) {
    padding: 0 18px;
    grid-column: 1/2;
    width: calc(100vw / 6);
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NavLinkMobile = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--lt-body-font-bold);
  text-decoration: none;
  font: var(--font-body-small);
  width: 100%;
  transition: 0.2s all;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    font: var(--font-body);
    align-self: flex-start;
    margin-bottom: 8px;
    padding: 6px;
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
  width: 100%;
  margin: 24px 0 48px;
`;
