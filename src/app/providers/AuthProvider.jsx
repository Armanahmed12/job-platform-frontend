import React, { useEffect, useState, useMemo, useCallback } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../lib/firebase.init";
import { loginWithGoogleService } from "../../features/auth/api/socialAuth";
import { setAxiosAccessToken } from "@/lib/axiosSecure";
import { axiosPublic } from "@/lib/axiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const isAuthenticated = !!accessToken;

  // 🔹 Save access token (React + Axios)
  const saveAccessToken = (token) => {
    setAccessToken(token);
    setAxiosAccessToken(token);
  };

  // 🔹 Register
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Login
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(
        "Firebase login error code(40 authProvider.jsx):",
        error.code,
      );
      throw error; // 🔴 IMPORTANT: rethrow it
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google login
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      return await loginWithGoogleService();
    } finally {
      setLoading(false);
    }
  };

  // 🔹 SINGLE SOURCE OF TRUTH LOGOUT
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setAccessToken(null);
      setAxiosAccessToken(null);
      setLoading(false);
    }
  }, []);

  // 🔹 Restore access token on page reload
  useEffect(() => {
    setLoading(true);

    const restoreSession = async () => {
      try {
        const res = await axiosPublic.post("auth/refresh-token");
        saveAccessToken(res.data.accessToken);
        console.log(res.data?.accessToken, "------------------------------------------------------------------------------ token fom 83 authProvider.jsx")
      } catch { /* empty */ } finally {
        console.log("====================================================> false 85 authProvider.jsx")
        setLoading(false);
        console.log(loading)
      }
    };

    restoreSession();
  }, []);

  // 🔹 Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        currentUser,
        "currentUser",
        accessToken,
        "now loading:",
        loading,
      );
    });

    return unsubscribe;
  }, []);

  // 🔹 Listen for forced logout from Axios (refresh failed)
  useEffect(() => {
    const handleLogout = () => logout();

    window.addEventListener("auth-logout", handleLogout);

    return () => {
      window.removeEventListener("auth-logout", handleLogout);
    };
  }, [logout]);

  // 🔹 Context value
  const authInfo = useMemo(
    () => ({
      user,
      loading,
      createUser,
      loginUser,
      loginWithGoogle,
      logout,
      accessToken,
      saveAccessToken,
      isAuthenticated
    }),
    [user, loading, logout, accessToken, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
