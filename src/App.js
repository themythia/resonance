import './App.css';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<p>Placeholder home page</p>} />
          <Route
            exact
            path='/library'
            element={<p>Placeholder library page</p>}
          />
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
        </Routes>
      </Router>
      {/* TO DO:
      - create a private route
      - create a route for now playing
      */}
    </div>
  );
}

export default App;
