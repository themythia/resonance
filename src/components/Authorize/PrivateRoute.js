import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(UserContext);
  if (userData.isLoggedIn) {
    if (children) return children;
    else return <Navigate to='/home' />;
  } else return <Navigate to='/login' />;
};
export default PrivateRoute;
