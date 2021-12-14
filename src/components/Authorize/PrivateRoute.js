import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(UserContext);
  return userData.isLoggedIn ? children : <Navigate to='/login' />;
};
export default PrivateRoute;
