import React, { useState } from 'react';
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
import { useEffect } from 'react';

const VolumeBar = (props) => {
  const [volumeLevel, setVolumeLevel] = useState(50);

  // handles click event on speaker button
  const toggleMute = () => {
    props.setMuted(!props.muted);
    // sets volume level to 0.3 if muted via the volume bar
    if (volumeLevel === 0) {
      setVolumeLevel(30);
    }
  };

  // handles volume levels
  useEffect(() => {
    props.volume.setVolume(volumeLevel);
    if (volumeLevel === 0) props.setMuted(true);
  }, [volumeLevel, props]);

  return (
    <VolumeControlContainer>
      <StyledPlayerButton onClick={toggleMute}>
        <Icon type='volume'>
          {volumeLevel === 0 || props.muted ? (
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
