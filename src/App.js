import './App.css';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';

function App() {
  return (
    <div className='wrapper'>
      {/* <NowPlayingPage /> */}
      <WelcomePage />
      {/* <Homepage /> */}
      {/* <Library /> */}
      {/* <PlaylistPage name='Chvrches Playlist' type='Playlist' creator='Emir' /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
