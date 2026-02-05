import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: "http://192.168.0.108:3000/api/v1",
   withCredentials: true, 
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1",
});
