import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component checks if the user is authenticated before rendering the protected route
const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = !!JSON.parse(localStorage.getItem('reduxState')).user; // Or use Redux state here
  
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

