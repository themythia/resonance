import { useEffect, useContext } from 'react';
import request from 'request';
import { UserContext } from '../../contexts/UserContext';
import { Navigate} from 'react-router-dom';

const Authorize = () => {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    let access_token = window.location.hash
      .substring(1)
      .split('access_token=')[1]
      .split('&')[0];
    console.log(access_token);
    let state = window.location.hash
      .substring(1)
      .split('state=')[1];
    if(state === localStorage.getItem("stateValue")){
     var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { Authorization: 'Bearer ' + access_token },
        json: true,
      };

      // use the access token to access the Spotify Web API
      request.get(options, function (error, response, body) {
        if(error) {
          localStorage.removeItem("stateValue")
          return setUserData({
            ...userData,
            isLoggedIn: "error",
            data: {}
          });
          
        }
        localStorage.setItem("token", access_token);
        setUserData({
          ...userData,
          isLoggedIn: true,
          data: body,
        });
      });
    } else {
      setUserData({
        ...userData,
        isLoggedIn: "error",
        data: {}
      });
      localStorage.removeItem("stateValue");
    }
  }, []);

  return (
    <div>
      {userData.isLoggedIn === true ? 
        <Navigate to='/home' /> :
        userData.isLoggedIn === "error" ? 
        <Navigate to="/login" /> : 
        <h1>Hello</h1>
      }
  
    </div>
  );
};

export default Authorize;
