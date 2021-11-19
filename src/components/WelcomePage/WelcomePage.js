import {
  StyledWrapper, 
  TopContainer, 
  Logo, 
  CenterContainer,
  ButtonContainer} from '../../styled/Utils.js';


const WelcomePage = () => {

    return (
    <StyledWrapper>
     <TopContainer>
         <Logo />
          <p>Powered By *logo*</p>
      </TopContainer>
      <CenterContainer>
        <ButtonContainer>
        </ButtonContainer>
      </CenterContainer>
    </StyledWrapper>
  )
}

export default WelcomePage;
