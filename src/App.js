import './App.css';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';

function App() {
  return (
    <div className='wrapper'>
      <NowPlayingPage />
      {/* <WelcomePage /> */}
      {/* <PlaylistPage name='Chvrches Playlist' type='Playlist' creator='Emir' /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
