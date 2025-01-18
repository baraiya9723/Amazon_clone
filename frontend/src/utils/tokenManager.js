
// Store token securely (use HttpOnly cookies for sensitive data on the backend)
export const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };
  
  export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  export const clearTokens = () => {
    localStorage.removeItem('accessToken');
  };
  