import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies();
  console.log("All cookies:", cookies);

  if (!cookies.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
