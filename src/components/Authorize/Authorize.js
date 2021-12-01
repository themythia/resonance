import { useEffect, useContext } from 'react';
import request from 'request';
import { UserContext } from '../../contexts/UserContext';

const Authorize = () => {
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    let access_token = window.location.hash
      .substring(1)
      .split('access_token=')[1]
      .split('&')[0];
    var options = {
      url: 'https://api.spotify.com/v1/me',
      headers: { Authorization: 'Bearer ' + access_token },
      json: true,
    };

    // use the access token to access the Spotify Web API
    request.get(options, function (error, response, body) {
      console.log(body);
      setUserData({
        isLoggedIn: true,
        data: body,
      });
    });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Authorize;
