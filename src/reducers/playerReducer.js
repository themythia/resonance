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
          [action.id]: action.playlistData,
        },
      };
    default:
      return state;
  }
};
