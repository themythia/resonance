import React, { useState, useEffect, useRef } from 'react';
import {
  PlayerContainer,
  PlayerControlContainer,
  ProgressBar,
  ProgressTextContainer,
} from '../../styled/NowPlaying';
import PlayerButton from './PlayerButton';

const Player = (props) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const time = useRef(null);
  const songRef = useRef(null);
  const clear = () => window.clearInterval(time.current);

  // handles time strings for progress bar
  const handleTime = (time) => {
    // let mins = Math.floor(time / 60);
    // let seconds = time % 60;
    // if (seconds < 10) {
    //   return `${mins}:0${seconds}`;
    // } else return `${mins}:${seconds}`;
    const date = new Date(null);
    date.setSeconds(time); // specify value for SECONDS here
    const dateString = date.toISOString();
    if (time < 600) {
      // less than 10 mins returns m:ss
      return dateString.substr(15, 4);
    } else if (time < 3600) {
      // less than an hour returns mm:ss
      return dateString.substr(14, 5);
    } else if (time < 36000) {
      // less than 10 hours returns h:mm:ss
      return dateString.substr(12, 7);
    } else return dateString.substr(11, 8); // else returns hh:mm:ss
  };

  useEffect(() => {
    if (songRef && songRef.current) {
      // console.log('currentTime:', songRef.current.currentTime);
      // console.log('duration:', songRef.current.duration);
      // console.log('muted:', songRef.current.muted);
      console.log('canplay:', songRef.current.canPlay);
    }
  }, [progress]);

  useEffect(() => {
    if (playing) {
      time.current = window.setInterval(() => {
        setProgress((progress) => progress + 1);
      }, 1000);
    }
    return clear;
  }, [playing]);

  useEffect(() => {
    if (progress >= props.max) {
      clear();
      setProgress(0);
      setPlaying(false);
      songRef.current.currentTime = 0;
    }
  }, [progress, props.max]);

  useEffect(() => {
    if (playing) songRef.current.play();
    else songRef.current.pause();
  }, [playing]);

  useEffect(() => {
    songRef.current.volume = props.volume.volume / 100;
    console.log('curent volume:', songRef.current.volume);
  }, [props.volume.volume]);

  return (
    <PlayerContainer>
      <audio controls ref={songRef}>
        <source src='https://p.scdn.co/mp3-preview/e0c72d148c26dd4d17d85f573f97a1bb60c4f244?cid=774b29d4f13844c495f206cafdad9c86' />
      </audio>
      <ProgressBar
        type='range'
        min='0'
        max={props.max}
        value={progress}
        onClick={() => (songRef.current.currentTime = progress)}
        onChange={(e) => {
          setProgress(parseInt(e.target.value));
        }}
      />
      <ProgressTextContainer>
        <p>{handleTime(progress)}</p>
        <p>{handleTime(props.max)}</p>
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
    </PlayerContainer>
  );
};
export default Player;
