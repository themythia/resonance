import React, { useState, useContext, useEffect } from 'react';
import {
  VolumeControl,
  VolumeControlContainer,
  Icon,
  StyledPlayerButton,
} from '../../styled/NowPlaying';

import {
  SpeakerMute,
  Speaker0,
  Speaker1,
  Speaker2,
} from '@styled-icons/fluentui-system-filled';
import { PlayerContext } from '../../contexts/PlayerContext';

const VolumeBar = (props) => {
  const { playerData, dispatch } = useContext(PlayerContext);
  const { volume, mute } = playerData.controls;
  const [volumeLevel, setVolumeLevel] = useState(volume);

  // handles click event on speaker button
  const toggleMute = () => {
    // props.setMuted(!props.muted);
    dispatch({ type: 'TOGGLE_MUTE' });
    // sets volume level to 0.3 if muted via the volume bar
    if (volume === 0) {
      setVolumeLevel(30);
    }
  };

  // handles volume levels
  useEffect(() => {
    dispatch({ type: 'SET_VOLUME', volume: volumeLevel });
    if (volume === 0) dispatch({ type: 'TOGGLE_MUTE' });
    else dispatch({ type: 'SET_MUTE', mute: false });
  }, [dispatch, volume, volumeLevel]);

  return (
    <VolumeControlContainer>
      <StyledPlayerButton onClick={toggleMute}>
        <Icon type='volume'>
          {volumeLevel === 0 || mute ? (
            <SpeakerMute />
          ) : volumeLevel > 66 ? (
            <Speaker2 />
          ) : volumeLevel > 33 ? (
            <Speaker1 />
          ) : volumeLevel > 0 ? (
            <Speaker0 />
          ) : null}
        </Icon>
      </StyledPlayerButton>
      <VolumeControl
        type='range'
        min='0'
        max='100'
        value={props.muted ? 0 : volumeLevel}
        onChange={(e) => setVolumeLevel(parseInt(e.target.value))}
      />
    </VolumeControlContainer>
  );
};
export default VolumeBar;
