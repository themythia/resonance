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

const Login = () => {
  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
      </TopContainer>
      <CenterContainer>
        <Link to='/home'>
          <ButtonLogin>
            Log in with <SpotifyButton />
          </ButtonLogin>
        </Link>
        <Link to='/'>
          <Backward />
        </Link>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default Login;
