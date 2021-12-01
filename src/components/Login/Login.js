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
  const goToLogin = () => {
    let state = 'some-state-of-my-choice';
    let clientID = 'f573531847c5435e80f1ba528eceed98';
    let responsetype = 'token';
    let scope = 'user-read-private user-read-email';
    let redirect_uri = 'http://localhost:3000/authorize';
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
