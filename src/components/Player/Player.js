import React, { useState, useEffect, useRef, useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
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
  const { playerData, dispatch } = useContext(PlayerContext);

  // handles time strings for progress bar
  // kinda unnecessary as we deal with songs that are 30 seconds
  // but leaving here for future developments
  const handleTime = (time) => {
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

  // handles the bar progress
  useEffect(() => {
    if (playing) {
      time.current = window.setInterval(() => {
        setProgress((progress) => songRef.current.currentTime);
      }, 1000);
    }
    return clear;
  }, [playing]);

  // resets the progress to zero when song ends and clears the interval
  useEffect(() => {
    if (songRef.current.ended) {
      clear();
      setProgress(0);
      setPlaying(false);
      if (!playerData.current.shuffle) {
        if (
          playerData.current.index !==
          playerData.current.playlistLength - 1
        ) {
          // if not on shuffle
          // and not on the last track of the playlist
          // play next track
          dispatch({
            type: 'NEXT_TRACK',
          });
        }
      } else {
        // if on shuffle
        // play next track
        dispatch({
          type: 'NEXT_TRACK',
        });
      }
    }
  }, [progress]);

  // controls the play/pause functions
  useEffect(() => {
    if (playing) {
      songRef.current.play();
      dispatch({
        type: 'ADD_PLAYED',
        index: playerData.current.index,
      });
    } else songRef.current.pause();
  }, [playing]);

  useEffect(() => {
    songRef.current.volume = props.volume.volume / 100;
  }, [props.volume.volume]);

  useEffect(() => {
    songRef.current.muted = props.muted;
  }, [props.muted]);

  // triggers on track change, resets the play/pause button
  useEffect(() => {
    // setPlaying(playing && false);

    if (props.src) {
      clear();
      setProgress(0);
      setPlaying(false);
      setTimeout(() => setPlaying(true), 500);
    }
    //plays the next track
    // if (!playing && playerData.current) {
    //   setPlaying(true);
    // }
  }, [props.src]);

  return (
    <PlayerContainer>
      <audio ref={songRef} preload='auto' src={props.src} />
      <ProgressBar
        type='range'
        min='0'
        max={props.max || songRef.current.duration}
        value={progress}
        step='0.1'
        onClick={() => (songRef.current.currentTime = progress)}
        onTouchEnd={() => {
          songRef.current.currentTime = progress;
        }}
        onChange={(e) => {
          setProgress(parseFloat(e.target.value));
        }}
      />
      <ProgressTextContainer>
        <p>{handleTime(progress)}</p>
        <p>{handleTime(props.max)}</p>
      </ProgressTextContainer>
      <PlayerControlContainer>
        <PlayerButton icon='shuffle' disabled={!playerData.current && true} />
        <PlayerButton icon='prev' disabled={!playerData.current && true} />
        {playing ? (
          <PlayerButton icon='pause' size='73px' setPlaying={setPlaying} />
        ) : (
          <PlayerButton
            icon='play'
            disabled={!playerData.current && true}
            size='73px'
            setPlaying={setPlaying}
          />
        )}
        <PlayerButton icon='next' disabled={!playerData.current && true} />
        <PlayerButton icon='repeat' disabled={!playerData.current && true} />
      </PlayerControlContainer>
    </PlayerContainer>
  );
};
export default Player;
