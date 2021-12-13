import React, { useContext } from 'react';
import { StyledPlayerButton, Icon } from '../../styled/NowPlaying';

import {
  Previous,
  Next,
  ArrowRepeatAll,
  Play,
  Pause,
} from '@styled-icons/fluentui-system-filled';
import { ArrowShuffle } from '@styled-icons/typicons';
import { PlayerContext } from '../../contexts/PlayerContext';

const PlayerButton = (props) => {
  const { playerData, dispatch } = useContext(PlayerContext);

  const handleClick = (icon) => {
    if (icon === 'pause') {
      dispatch({
        type: 'TOGGLE_PLAY',
        play: false,
      });
    } else if (icon === 'play') {
      dispatch({
        type: 'TOGGLE_PLAY',
        play: true,
      });
    } else if (icon === 'shuffle') {
      dispatch({
        type: 'TOGGLE_SHUFFLE',
      });
    } else if (icon === 'next') {
      dispatch({
        type: 'NEXT_TRACK',
      });
    } else if (icon === 'prev') {
      dispatch({
        type: 'PREV_TRACK',
      });
    } else if (icon === 'repeat') {
      dispatch({
        type: 'TOGGLE_REPEAT',
      });
    }
  };
  return (
    <StyledPlayerButton
      size={props.size}
      onClick={() => handleClick(props.icon)}
      disabled={props.disabled}
      status={{
        shuffle: playerData.current?.shuffle,
        repeat: playerData.current?.repeat,
      }}
      icon={props.icon}
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
