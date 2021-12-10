import React, { useState, useEffect, useRef, useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import {
  PlayerContainer,
  PlayerControlContainer,
  ProgressBar,
  ProgressTextContainer,
} from '../../styled/NowPlaying';
import PlayerButton from './PlayerButton';
import { handleTime } from '../../utils/handleTime';

const Player = (props) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const time = useRef(null);
  const songRef = useRef(null);
  const clear = () => window.clearInterval(time.current);
  const { playerData, dispatch } = useContext(PlayerContext);
  const [source, setSource] = useState();
  const API_KEY = process.env.REACT_APP_SCRAPE_API_KEY;

  useEffect(() => {
    if (props.src) {
      // if API returns a valid preview_url uses it as source
      setSource(props.src);
    } else if (props.src === null) {
      // if API returns preview_url as null
      // scrapes song page from open.spoyify.com
      // gets the preview_url through scraping
      // sets it as source
      const spotifyUrl = `https://open.spotify.com/embed/track/${playerData?.current?.track?.id}`;

      const scrapingApiUrl = `https://api.webscrapingapi.com/v1?api_key=${API_KEY}&url=${spotifyUrl}&method=GET&device=desktop&proxy_type=datacenter`;
      fetch(scrapingApiUrl)
        .then((res) => res.text())
        .then((data) => {
          const scrapedURL = data
            .split('preview_url%22%3A%22')[1]
            .split('%22%2C%22track_number')[0];
          setSource(decodeURIComponent(scrapedURL)); // decodes html entities to string
        })
        .catch((error) =>
          console.error('An error occurred while scraping', error)
        );
    }
  }, [props.src, playerData?.current?.track]);

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

    if (source) {
      clear();
      setProgress(0);
      setPlaying(false);
      setTimeout(() => setPlaying(true), 500);
    }
    //plays the next track
    // if (!playing && playerData.current) {
    //   setPlaying(true);
    // }
  }, [source]);

  return (
    <PlayerContainer>
      <audio ref={songRef} preload='auto' src={source} />
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
        <p>{handleTime(progress * 1000)}</p>
        <p>{handleTime(props.max * 1000)}</p>
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
