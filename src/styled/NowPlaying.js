import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const NowPlayingContainer = styled.div`
  grid-row: 1/7;
  grid-column: 1/7;
  background: var(--lt-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--lt-body-font-regular);
  font: var(--font-body);

  p {
    margin-bottom: 64px;
  }

  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
    margin-top: 40px;
  }

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
    color: var(--dt-body-font-regular);
    h5 {
      color: var(--dt-body-font-bold);
    }
  }
`;

export const PlayerControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 292px;
`;

export const StyledPlayerButton = styled.button`
  height: ${(props) => props.size || '36px'};
  width: ${(props) => props.size || '36px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.size ? 'var(--dt-radial-gradient)' : 'transparent'};
  border-radius: 100%;
  border: none;
  transition: transform 0.1s;
  &:hover {
    transform: ${(props) => props.size && 'scale(1.05)'};
  }
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: var(--lt-body-font-bold);
    height: 36px;
    width: 36px;
    ${StyledPlayerButton}:hover & {
      color: var(--cl-primary1-800);
    }

    @media (prefers-color-scheme: dark) {
      color: var(--dt-body-font-bold);
      ${StyledPlayerButton}:hover & {
        color: var(--cl-primary1-300);
      }
    }
  }
`;

export const AlbumCover = styled.img`
  max-width: 500px;
  width: 75%;
  height: auto;
  border-radius: 25%;
`;

export const ProgressTextContainer = styled.div`
  width: 75%;
  height: 27px;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 32px;
`;

// https://codesandbox.io/s/input-range-custom-styled-components-x149y?file=/src/index.js
const upperColor = 'rgb(124, 26, 4)';
const lowerColor = 'var(--cl-primary3-500)';
const thumbColor = 'var(--cl-primary3-700)';
const thumbHoverColor = 'var(--cl-primary3-900)';
const trackHeight = '4px';
const height = '32px';
const thumbHeight = 20;
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color, size) => {
  let i = 1;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 506; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export const ProgressBar = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 500px;
  width: 75%;
  margin: 0;
  height: ${height};
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: transparent;
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, '-8px')};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: transparent;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: transparent;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;
