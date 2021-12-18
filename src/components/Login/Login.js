import { Link } from 'react-router-dom';
import {
  StyledWrapper,
  TopContainer,
  Logo,
  CenterContainer,
  ButtonLogin,
  SpotifyButton,
  Backward,
} from '../../styled/Utils';
import querystring from 'querystring';

const Login = () => {
  const generateState = (lenState) => {
    let text = '';
    let element =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < lenState; i++) {
      text += element.charAt(Math.floor(Math.random() * element.length));
    }

    return text;
  };

  const goToLogin = () => {
    let state = generateState(16);
    localStorage.setItem('stateValue', state);
    let clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    let responsetype = 'token';
    let scope =
      'user-read-private user-read-email user-read-recently-played playlist-read-private playlist-modify-private user-library-read playlist-read-collaborative';
    let redirect_uri = 'https://resonance-murex.vercel.app/authorize';
    let url = `https://accounts.spotify.com/authorize?`;
    url += querystring.stringify({
      response_type: responsetype,
      client_id: clientID,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
    });
    window.location.href = url;
  };

  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
      </TopContainer>
      <CenterContainer>
        <ButtonLogin onClick={goToLogin}>
          Log in with <SpotifyButton />
        </ButtonLogin>
        <Link to='/'>
          <Backward />
        </Link>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default Login;
