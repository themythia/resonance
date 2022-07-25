import { StyledRecentlyPlayedList } from '../../../styled/Homepage';
import RecentlyPlayedSong from './RecentlyPlayedSong';

const RecentlyPlayedList = ({ songlist }) => {
  return (
    <StyledRecentlyPlayedList>
      {songlist.map((song, index) => {
        return (
          <RecentlyPlayedSong
            key={index}
            artist={song.track.artists[0].name}
            song={song.track.name}
            albumImage={song.track.album.images[1].url}
            albumId={song.track.album.id}
            type={song.track.album.type}
            songTrack={song.track.id}
          />
        );
      })}
    </StyledRecentlyPlayedList>
  );
};

export default RecentlyPlayedList;
