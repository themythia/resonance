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

const VolumeBar = (props) => {
  const [volumeLevel, setVolumeLevel] = useState(50);

  const toggleMute = () => {
    if (volumeLevel > 0) {
      setVolumeLevel(0);
    } else setVolumeLevel(50);
  };

  return (
    <VolumeControlContainer>
      <StyledPlayerButton onClick={toggleMute}>
        <Icon type='volume'>
          {volumeLevel === 0 ? (
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
        value={volumeLevel}
        onChange={(e) => setVolumeLevel(parseInt(e.target.value))}
      />
    </VolumeControlContainer>
  );
};
export default VolumeBar;
