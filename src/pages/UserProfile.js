import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function UserProfile() {
  const { userId } = useParams();
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
