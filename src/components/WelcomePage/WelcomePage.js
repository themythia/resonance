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
  WaveLeft} from "../../styled/Utils";

import {Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
        <p>Powered By <SpotifyLogo /></p>
      </TopContainer>
      <CenterContainer>
        <Circle />
        <WaveLeft />
        <WaveRight />
        <ButtonContainer>
          <Link to="/login">
            <PlayDiv />         
          </Link>
        </ButtonContainer>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default WelcomePage;
