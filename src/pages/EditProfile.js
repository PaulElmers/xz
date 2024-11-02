import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function EditProfile() {
  const { userId } = useParams();
  return (
    <div className="edit-profile">
      <h2>Edit Profile for User ID: {userId}</h2>
    </div>
  );
}

export default EditProfile;
