import axiosInstance from './axiosInstance';

const apiService = {
  // Example: Fetch user profile
  getUserProfile: async () => {
    try {
      const response = await axiosInstance.get('/users/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Example: Update user profile
  updateUserProfile: async (profileData) => {
    try {
      const response = await axiosInstance.put('/users/profile', profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Example: Login
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post('/users/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  register: async (credentials) => {
    try {
      const response = await axiosInstance.post('/users', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  // Example: Fetch items list
//   fetchItems: async () => {
//     try {
//       const response = await axiosInstance.get('/items');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
};

export default apiService;
