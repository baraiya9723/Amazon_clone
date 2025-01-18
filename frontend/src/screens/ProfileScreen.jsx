import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await apiService.getUserProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
