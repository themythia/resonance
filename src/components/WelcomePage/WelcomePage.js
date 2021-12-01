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

const WelcomePage = () => {
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
        <Link to='/login'>
          <ButtonContainer>
            <PlayDiv />
          </ButtonContainer>
        </Link>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default WelcomePage;
