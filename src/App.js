import './App.css';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';

function App() {
  return (
    <div className='wrapper'>
      <Router>
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
