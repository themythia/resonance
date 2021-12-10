export const newPlaylist = (playlistId, data) => {
  const { name, images, owner, type, tracks } = data;
  return {
    type: 'NEW_PLAYLIST',
    id: playlistId,
    playlist: {
      name: name,
      image: images[0].url,
      owner: owner.display_name,
      type: type,
      tracks: tracks.items.map((track) => {
        let { track: t } = track;
        return {
          name: t.name,
          duration: t.duration_ms,
          id: t.id,
          src: t.preview_url,
          artists: t.artists.map((artist) => artist.name),
          album: {
            albumId: t.album.id,
            image: t.album.images[1].url,
            name: t.album.name,
          },
        };
      }),
    },
  };
};

export const newAlbum = (albumId, data) => {
  const { name, images, artists, type, tracks } = data;
  return {
    type: 'NEW_ALBUM',
    id: albumId,
    playlist: {
      name,
      image: images[0].url,
      owner: artists[0].name,
      type,
      tracks: tracks.items.map((track) => {
        return {
          name: track.name,
          duration: track.duration_ms,
          id: track.id,
          src: track.preview_url,
          artists: track.artists.map((artist) => artist.name),
          album: {
            albumId,
            image: images[0].url,
            name,
          },
        };
      }),
    },
  };
};

export const setCurrent = (track, index, playlistId, playlistLength) => {
  return {
    type: 'SET_CURRENT',
    track,
    index,
    playlistId,
    playlistLength,
    shuffle: null,
  };
};
