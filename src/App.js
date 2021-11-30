import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';

function App() {
  const location = useLocation();

  return (
    <div className='wrapper'>
      <Routes>
        <Route exact path='/' element={<WelcomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route exact path='/library' element={<Library />} />
        <Route
          path='/library/:playlistId'
          element={
            <PlaylistPage
              name='Chvrches Playlist'
              type='Playlist'
              creator='Emir'
            />
          }
        />
        <Route path='*' element={<p>404</p>} />
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/login' && (
        <MenuBar />
      )}
      {/* TO DO:
      - create a private route
      - create a route for now playing
      */}
    </div>
  );
}

export default App;
