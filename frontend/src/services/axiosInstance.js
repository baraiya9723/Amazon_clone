import axios from 'axios';
import { getAccessToken, clearTokens } from '../utils/tokenManager';

// Create an Axios instance
const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  baseURL:'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization token if available
    const token = getAccessToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Unauthorized. Logging out...');
        clearTokens(); // Clear tokens on 401
        window.location.href = '/login'; // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
