import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile/1">User Profile</Link></li> 
        <li><Link to="/profile/1/edit">Edit Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
