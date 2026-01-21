import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../app/providers/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Optional but recommended: wait for auth state
  if (loading) {
    return null; // or a loader/spinner
  }

  // 🔐 Not logged in → redirect to login
  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ✅ Logged in → allow access
  return children;
};

export default ProtectedRoute;
