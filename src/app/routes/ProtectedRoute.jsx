import React from "react";
import useAuth from "@/features/auth/hooks/useAuth";
import Loading from "@/components/common/Loading";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
   const { loading, isAuthenticated } = useAuth();
  const location = useLocation();
  
  console.log("loading=========================================>>>:", loading);

  // Optional but recommended: wait for auth state
  if (loading) {
        console.log("12 protectedRoute.jsx from !loading")

    return <Loading/>; // or a loader/spinner
  }

  // 🔐 Not logged in → redirect to login
   if (!isAuthenticated) {
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
