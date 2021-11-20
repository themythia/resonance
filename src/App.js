import './App.css';
import PlaylistPage from './components/Playlist/PlaylistPage';
// import WelcomePage from './components/WelcomePage/WelcomePage'

function App() {
  return (
    <div className='wrapper'>
      <PlaylistPage name='Chvrches Playlist' type='Playlist' creator='Emir' />
    </div>
  );
}

export default App;
