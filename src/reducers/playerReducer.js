export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_PLAYLIST':
      return {
        ...state,
        playlists: {
          ...state.playlists,
          [action.id]: action.playlist,
        },
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: {
          ...state.current,
          index: action.index,
          track: action.track,
          playlistId: action.playlistId,
          playlistLength: action.playlistLength,
          shuffle:
            state.current?.shuffle === undefined
              ? false
              : state.current.shuffle === true
              ? true
              : state.current.shuffle === false && false,
        },
      };
    case 'SET_DEVICE':
      return {
        ...state,
        device: action.device,
      };

    case 'TOGGLE_SHUFFLE':
      return {
        ...state,
        current: {
          ...state.current,
          shuffle: !state.current.shuffle,
        },
      };

    case 'NEXT_TRACK':
      const nextTrack = () => {
        if (state.current.shuffle) {
          return Math.floor(Math.random() * state.current.playlistLength);
        } else {
          if (state.current.index === state.current.playlistLength - 1) {
            return state.current.index;
          } else return state.current.index + 1;
        }
      };

      console.log('nextTrack:', nextTrack());

      return {
        ...state,
        current: {
          ...state.current,
          index: nextTrack(),
          track: state.playlists[state.current.playlistId].tracks[nextTrack()],
        },
      };

    case 'ADD_PLAYED':
      let played = [];
      if (!state.current?.played) {
        played.push(action.index);
      } else played = [...state.current.played, action.index];

      return {
        ...state,
        current: {
          ...state.current,
          played,
        },
      };
    default:
      return state;
  }
};
