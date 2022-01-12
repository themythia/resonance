import styled from 'styled-components';
import resonanceDark from '../resonance-dark.svg';
import resonanceLight from '../resonance-light-welcome.svg';
import { Spotify } from '@styled-icons/boxicons-logos';
import welcome from '../assets/welcome.svg';
import welcomeDark from '../assets/welcome_dark.svg';
import { ControllerFastBackward } from '@styled-icons/entypo/';

export const StyledWrapper = styled.div`
  background: var(--lt-background);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
  }
`;

export const TopContainer = styled.div`
  align-self: center;
  justify-self: center;

  p {
    color: var(--lt-body-font-regular);
    font: var(--font-body-small);
    margin-top: 20px;
    text-align: center;
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: var(--dt-body-font-regular);
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      font: var(--font-body);
    }
  }
`;
export const Logo = styled.img.attrs(() => ({
  src:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? resonanceDark
      : resonanceLight,
}))`
  object-fit: cover;
  max-width: 85vw;
`;

export const CenterContainer = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 6;
  position: relative;

  a {
    text-decoration: none;
  }
`;

// Welcome Page

export const ButtonContainer = styled.div`
  margin: 25% auto;
  width: 162px;
  height: 162px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: var(--cl-primary1-700);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-radial-gradient);
  }
  @media (min-width: 768px) {
    margin: 12% auto;
  }
  @media (min-width: 1280px) {
    margin: 9% auto;
  }
`;

// Welcome Page

export const SpotifyLogo = styled(Spotify)`
  color: var(--cl-primary1-900);
  width: 35px;
  height: 35px;

  @media (prefers-color-scheme: dark) {
    color: #1db954;
  }
`;

export const WelcomeSVG = styled.img.attrs((props) => ({
  src:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? welcomeDark
      : welcome,
}))`
  width: 85%;
  height: auto;
  max-height: 311px;
  max-width: 352px;
  cursor: pointer;
`;

// Login Page

export const ButtonLogin = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  color: var(--cl-primary1-800);
  background: var(--cl-primary1-100);
  border: none;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  margin: 25% auto 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-radial-gradient);
    color: white;
  }
  @media (min-width: 1280px) {
    margin: 15% auto 10px auto;
  }

  @media (min-width: 1440px) {
    margin: 10% auto 10px auto;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const SpotifyButton = styled(Spotify)`
  color: var(--cl-primary1-800);
  width: 40px;
  height: 40px;
  margin-left: 5px;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

export const Backward = styled(ControllerFastBackward)`
  color: var(--cl-primary1-700);
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
    color: var(--dt-sound-logo);
  }
`;
