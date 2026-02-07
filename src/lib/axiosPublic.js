import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: "https://job-platform-server-alpha.vercel.app/api/v1",
   withCredentials: true, 
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1",
});
