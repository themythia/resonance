import React, { useState, useEffect, useRef } from 'react';
import {
  PlayerControlContainer,
  ProgressBar,
  ProgressTextContainer,
  ProgressBar2,
} from '../../styled/NowPlaying';
import PlayerButton from './PlayerButton';

const Player = (props) => {
  const [playing, setPlaying] = useState(false);
  console.log('playing:', playing);
  const [progress, setProgress] = useState(0);
  console.log('progress:', progress);
  const time = useRef(null);
  const clear = () => window.clearInterval(time.current);

  useEffect(() => {
    if (playing) {
      time.current = window.setInterval(() => {
        setProgress((progress) => progress + 1);
      }, 1000);
    }
    return clear;
  }, [playing]);

  useEffect(() => {
    if (progress >= 10) {
      clear();
    }
  }, [progress]);

  return (
    <React.Fragment>
      <ProgressBar
        type='range'
        min='0'
        max='10'
        value={progress}
        onChange={(e) => setProgress(parseInt(e.target.value))}
      />
      <ProgressTextContainer>
        <p>0:00</p>
        <p>5:04</p>
      </ProgressTextContainer>
      <PlayerControlContainer>
        <PlayerButton icon='shuffle' />
        <PlayerButton icon='prev' />
        {playing ? (
          <PlayerButton icon='pause' size='73px' setPlaying={setPlaying} />
        ) : (
          <PlayerButton icon='play' size='73px' setPlaying={setPlaying} />
        )}

        <PlayerButton icon='next' />
        <PlayerButton icon='repeat' />
      </PlayerControlContainer>
    </React.Fragment>
  );
};
export default Player;
