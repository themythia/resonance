export const initialPlayerState = {
  currentTrack: null,
  playlists: {},
};

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
          index: action.index,
          track: action.track,
          playlistId: action.playlistId,
        },
      };
    case 'SET_DEVICE':
      return {
        ...state,
        device: action.device,
      };

    // case 'NEXT_TRACK':
    //   return {
    //     ...state,
    //     current: {},
    //   };
    default:
      return state;
  }
};
