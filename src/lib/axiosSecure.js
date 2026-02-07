import axios from "axios";
import { axiosPublic } from "./axiosPublic";

const axiosSecure = axios.create({
  baseURL: "https://job-platform-server-alpha.vercel.app/api/v1",
  withCredentials: true, // needed for refresh token cookie
});

let accessToken = null;

// 🔹 Inject token from React
export const setAxiosAccessToken = (token) => {
  accessToken = token;
};

// 🔹 REQUEST interceptor (attach token)
axiosSecure.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 401 → try refresh token → retry original request → ONLY logout if refresh fails

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const status = error.response?.status;
    const errorCode = error.response?.data?.errorCode;
     console.log(status, errorCode, "see the error status and errorCode 37");
    // ONLY refresh if token expired
    if (
      status === 401 &&
      errorCode === "TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await axiosPublic.post("auth/refresh-token");
        const newAccessToken = res.data.accessToken;
        setAxiosAccessToken(newAccessToken);

        // Ensure headers exist
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosSecure(originalRequest);
      } catch (err) {
        window.dispatchEvent(new Event("auth-logout"));
        return Promise.reject(err);
      }
    }

    // Invalid token → immediate logout
    if (status === 401 && errorCode === "TOKEN_INVALID") {
      window.dispatchEvent(new Event("auth-logout"));
    }

    return Promise.reject(error);
  }
);


export default axiosSecure;
