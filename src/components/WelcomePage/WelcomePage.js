import { Link } from 'react-router-dom';
import {
  StyledWrapper,
  TopContainer,
  Logo,
  CenterContainer,
  ButtonContainer,
  PlayDiv,
  SpotifyLogo,
  Circle,
  WaveRight,
  WaveLeft,
} from '../../styled/Utils';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const WelcomePage = () => {
  const { userData } = useContext(UserContext);

  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
        <p>
          Powered By <SpotifyLogo />
        </p>
      </TopContainer>
      <CenterContainer>
        <Circle />
        <WaveLeft />
        <WaveRight />
        <Link to={userData.isLoggedIn ? '/home' : 'login'}>
          <ButtonContainer>
            <PlayDiv />
          </ButtonContainer>
        </Link>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default WelcomePage;
