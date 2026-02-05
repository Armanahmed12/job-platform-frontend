import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://job-portal-server-for-recruiter-part3.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      response => response,
      error => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          signOutUser().then(() => navigate("/signIn"));
        }

        return Promise.reject(error);
      }
    );

    // cleanup
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [navigate, signOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;