import React from 'react';
import { StyledPlayerButton, Icon } from '../../styled/NowPlaying';

import {
  Previous,
  Next,
  ArrowRepeatAll,
  Play,
  Pause,
} from '@styled-icons/fluentui-system-filled';
import { ArrowShuffle } from '@styled-icons/typicons';

const PlayerButton = (props) => {
  const handleClick = (icon) => {
    if (icon === 'pause') {
      props.setPlaying(false);
    } else if (icon === 'play') {
      props.setPlaying(true);
    }
  };
  return (
    <StyledPlayerButton
      size={props.size}
      onClick={() => handleClick(props.icon)}
    >
      <Icon>
        {props.icon === 'prev' ? (
          <Previous />
        ) : props.icon === 'next' ? (
          <Next />
        ) : props.icon === 'play' ? (
          <Play />
        ) : props.icon === 'pause' ? (
          <Pause />
        ) : props.icon === 'repeat' ? (
          <ArrowRepeatAll />
        ) : props.icon === 'shuffle' ? (
          <ArrowShuffle />
        ) : null}
      </Icon>
    </StyledPlayerButton>
  );
};
export default PlayerButton;
