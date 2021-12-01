import './App.css';
import { useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';
import Authorize from './components/Authorize/Authorize';

function App() {
  const location = useLocation();
  const showMenuBar =
    location.pathname !== '/' && location.pathname !== '/login';

  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, [width]);

  return (
    <div className='wrapper'>
      <Routes>
        <Route exact path='/' element={<WelcomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/authorize' element={<Authorize />} />
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
        {width < 1024 && (
          <Route path='/nowplaying' element={<NowPlayingPage />} />
        )}
        <Route path='*' element={<p>404</p>} />
      </Routes>
      {showMenuBar && width > 1023 && <NowPlayingPage />}
      {showMenuBar && <MenuBar />}
      {/* TO DO:
      - create a private route
      - create a route for now playing
      */}
    </div>
  );
}

export default App;
