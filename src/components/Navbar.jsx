// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/task-tracker">Task Tracker</Link></li>  {/* Link to task tracker */}
      </ul>
    </nav>
  );
};

export default Navbar;
