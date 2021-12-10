import {
  StyledGridWrapper,
  StyledLibraryTitle,
  StyledAlbumSection,
  StyledPlaylistItem,
  StyledAlbumThumbnail,
  StyledAlbumTextContainer,
} from '../../styled/Library.styled';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const playlistAlbums = [
  {
    name: 'Track',
    description: 'headbanging metal',
    picture: logo,
    type: 'albums',
    id: '1oDHd8X6KrmLW3jFNsSfMu',
    track: '39LUihkJzZGVAOCEAZayJb',
  },
  {
    name: 'Playlist',
    description: 'punk rock for retards',
    picture: logo,
    type: 'playlists',
    id: '2KqLYZ1ky6MR9VZb06bbb7',
  },
  {
    name: 'Single',
    description: 'nice bedroom playlist',
    picture: logo,
    type: 'albums',
    id: '4OaKtwwLxQKHJTByixvKdF',
  },
  {
    name: 'Instrumentals',
    description: 'Guitar music',
    picture: logo,
    type: 'albums',
    id: '1oDHd8X6KrmLW3jFNsSfMu',
  },
  {
    name: 'OST1',
    description: 'favorite soundtracks',
    picture: logo,
    type: 'playlists',
    id: '2KqLYZ1ky6MR9VZb06bbb7',
  },
  {
    name: 'OST2',
    description: 'favorite soundtracks',
    picture: logo,
    type: 'albums',
    id: '1oDHd8X6KrmLW3jFNsSfMu',
  },
  {
    name: 'OST3',
    description: 'favorite soundtracks',
    picture: logo,
    type: 'playlists',
    id: '2KqLYZ1ky6MR9VZb06bbb7',
  },
  {
    name: 'OST4',
    description: 'favorite soundtracks',
    picture: logo,
    type: 'albums',
    id: '1oDHd8X6KrmLW3jFNsSfMu',
  },
  {
    name: 'ProgMetal',
    description: 'Evergrey and Symphony X for life!',
    picture: logo,
    type: 'playlists',
    id: '2KqLYZ1ky6MR9VZb06bbb7',
  },
  {
    name: 'Adriano Celentano',
    description: 'CAZZO!',
    picture: logo,
    type: 'albums',
    id: '1oDHd8X6KrmLW3jFNsSfMu',
  },
];

const Library = () => {
  return (
    <StyledGridWrapper>
      <StyledLibraryTitle>
        <h5>Your Library</h5>
      </StyledLibraryTitle>
      <StyledAlbumSection>
        {playlistAlbums.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/library/${item.id}`}
              state={{ type: item.type, track: item?.track }}
            >
              <StyledPlaylistItem>
                <StyledAlbumThumbnail src='https://e.snmc.io/i/1200/s/0348449c729ad8e7082de82f30f90caf/3992350' />
                <StyledAlbumTextContainer>
                  <p>{item.name}</p>
                  <h5>{item.description}</h5>
                </StyledAlbumTextContainer>
              </StyledPlaylistItem>
            </Link>
          );
        })}
      </StyledAlbumSection>
    </StyledGridWrapper>
  );
};

export default Library;
