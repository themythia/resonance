import { useEffect, useContext } from 'react';
import request from 'request';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import Loading from './Loading/Loading';
const style = {
  background: 'white',
  gridColumn: '1 / -1',
  gridRow: '1 / -1',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
};

const Authorize = () => {
  const { userData, setUserData } = useContext(UserContext);
  
  

  useEffect(() => {
    if (!window.location.hash) {
      return setUserData({
        ...userData,
        isLoggedIn: 'error',
        data: {},
        token: null,
      });
    }
    let access_token = window.location.hash
      .substring(1)
      .split('access_token=')[1]
      .split('&')[0];
    let state = window.location.hash.substring(1).split('state=')[1];

    if (state === localStorage.getItem('stateValue')) {
      var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { Authorization: 'Bearer ' + access_token },
        json: true,
      };

      // use the access token to access the Spotify Web API
      request.get(options, function (error, response, body) {
        if (error || response.statusCode !== 200) {
          localStorage.removeItem('stateValue');
          return setUserData({
            ...userData,
            isLoggedIn: 'error',
            data: {},
            token: null,
          });
        }

        localStorage.setItem('token', access_token);
        localStorage.setItem('userdata', JSON.stringify(body));
        localStorage.setItem('timeOfLogin', Date.now());

        setUserData({
          ...userData,
          isLoggedIn: true,
          data: body,
          token: access_token,
        });
      });
    } else {
      setUserData({
        ...userData,
        isLoggedIn: 'error',
        data: {},
      });
      localStorage.removeItem('stateValue');
    }
  }, []);

  return (
    <div style={style}>
      {userData.isLoggedIn === true ? (
        <Navigate to='/home' />
      ) : userData.isLoggedIn === 'error' ? (
        <Navigate to='/login' />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Authorize;
