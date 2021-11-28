import './App.css';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path='/home' element={<NowPlayingPage />} />
          <Route path='/library' element={<WelcomePage />} />
        </Routes>
        <MenuBar />
      </Router>
      {/* <NowPlayingPage /> */}
      {/*<WelcomePage />*/}
      {/* <PlaylistPage name='Chvrches Playlist' type='Playlist' creator='Emir' /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
