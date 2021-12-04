import React, { useContext, useState } from 'react';
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
  const [shuffle, setShuffle] = useState(false);
  const handleClick = (icon) => {
    if (icon === 'pause') {
      props.setPlaying(false);
    } else if (icon === 'play') {
      props.setPlaying(true);
    } else if (icon === 'shuffle') {
      dispatch({
        type: 'TOGGLE_SHUFFLE',
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
