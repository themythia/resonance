import './App.css';
import { useLayoutEffect, useState, useReducer } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { PlayerContext } from './contexts/PlayerContext';
import Header from './components/Header/Header';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';
import Authorize from './components/Authorize/Authorize';
import PrivateRoute from './components/Authorize/PrivateRoute';
import { playerReducer } from './reducers/playerReducer';

function App() {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  // used useState instead of useReducer as everything inside userData changes on login/logout
  // can change to useReducer if needed
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    data: {},
    token: null,
  });

  const [playerData, dispatch] = useReducer(playerReducer, {
    device: 'mobile',
    current: null,
    playlists: null,
  });

  const showMenuBar =
    location.pathname !== '/' &&
    location.pathname !== '/login' &&
    location.pathname !== '/authorize';

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (width > 1023) {
      dispatch({ type: 'SET_DEVICE', device: 'desktop' });
    } else dispatch({ type: 'SET_DEVICE', device: 'mobile' });

    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, [width]);

  return (
    <div className='wrapper'>
      <UserContext.Provider value={{ userData, setUserData }}>
        <PlayerContext.Provider value={{ playerData, dispatch }}>
          {showMenuBar && <Header />}
          <Routes>
            <Route exact path='/' element={<WelcomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/authorize' element={<Authorize />} />
            <Route
              path='/home'
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/library'
              element={
                <PrivateRoute>
                  <Library />
                </PrivateRoute>
              }
            />
            <Route
              path='/library/:playlistId'
              element={
                <PrivateRoute>
                  <PlaylistPage />
                </PrivateRoute>
              }
            />
            {width < 1024 && (
              <Route
                path='/nowplaying'
                element={
                  <PrivateRoute>
                    <NowPlayingPage />
                  </PrivateRoute>
                }
              />
            )}
            <Route path='*' element={<PrivateRoute />} />
          </Routes>
          {showMenuBar && width > 1023 && <NowPlayingPage />}
          {showMenuBar && <MenuBar />}
        </PlayerContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
