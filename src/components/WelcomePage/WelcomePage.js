import { useNavigate } from 'react-router-dom';
import {
  StyledWrapper,
  TopContainer,
  Logo,
  SpotifyLogo,
  WelcomeSVG,
} from '../../styled/Utils';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const WelcomePage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <TopContainer>
        <Logo />
        <p>
          Powered By <SpotifyLogo />
        </p>
      </TopContainer>
      <WelcomeSVG
        onClick={() => navigate(userData.loggedIn ? '/home' : '/login')}
      />
    </StyledWrapper>
  );
};

export default WelcomePage;
