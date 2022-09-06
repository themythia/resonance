import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import { UserContext } from '../../contexts/UserContext';
import {
  Menu,
  ProfileContainer,
  ProfilePic,
  SignoutButton,
  UserName,
} from '../../styled/SearchBar';
import profilePic from '../../assets/album_cover_placeholder.png';

const Signout = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { playerData } = useContext(PlayerContext);
  const [show, setShow] = useState(false);

  const handleSignout = () => {
    localStorage.removeItem('timeOfLogin');
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    setUserData({
      isLoggedIn: false,
      data: {},
      token: null,
    });
  };

  return (
    <ProfileContainer onClick={() => setShow(!show)}>
      {playerData.device === 'desktop' && (
        <UserName active={show}>
          {show ? '▲ ' : '▼ '}
          {userData.data.display_name}
        </UserName>
      )}
      <ProfilePic
        src={userData.data.images?.[0]?.url || profilePic}
        alt='user avatar'
      />
      {show && (
        <Menu>
          <SignoutButton onClick={handleSignout}>Sign out</SignoutButton>
        </Menu>
      )}
    </ProfileContainer>
  );
};
export default Signout;
