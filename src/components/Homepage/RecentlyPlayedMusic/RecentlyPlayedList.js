import { StyledRecentlyPlayedList } from '../../../styled/Homepage.styled';
import RecentlyPlayedSong from './RecentlyPlayedSong';
import logo from '../../../logo.svg';

const RecentlyPlayedList = ({ songlist }) => {
  return (
    <StyledRecentlyPlayedList>
      {songlist.map((song) => {
        return (
          <RecentlyPlayedSong
            key={song.track.id}
            artist={song.track.artists[0].name}
            song={song.track.name}
            albumImage={song.track.album.images[1].url}
          />
        );
      })}
    </StyledRecentlyPlayedList>
  );
};

export default RecentlyPlayedList;
