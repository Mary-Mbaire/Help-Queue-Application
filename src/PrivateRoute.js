import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);

  // Only render the children if the user is authenticated, otherwise navigate to the login page
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
