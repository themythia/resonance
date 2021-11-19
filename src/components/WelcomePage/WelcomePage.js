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
          <PlayDiv />         
        </ButtonContainer>
      </CenterContainer>
    </StyledWrapper>
  );
};

export default WelcomePage;
