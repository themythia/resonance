import {
  StyledWrapper,
  TopContainer,
  Logo,
  CenterContainer,
  ButtonLogin,
  SpotifyButton,
  Backward} from "../../styled/Utils";


const Login = () => {
  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
      </TopContainer>
      <CenterContainer>
        <ButtonLogin>Log in with <SpotifyButton /></ButtonLogin>
        <Backward />
      </CenterContainer>
    </StyledWrapper>
  );
};

export default Login;
