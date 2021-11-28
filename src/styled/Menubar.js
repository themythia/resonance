import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

export const NavLinkMobile = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--lt-body-font-bold);
  text-decoration: none;
  font: var(--font-body-small);

  @media screen and (min-width: 1024px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-regular);
  }

  &.active {
    color: var(--lt-active-color);
    font: var(--font-body-small-bold);
    @media (prefers-color-scheme: dark) {
      color: var(--dt-active-color);
    }
  }
`;
