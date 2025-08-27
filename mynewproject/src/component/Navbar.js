import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
//import logo from '../logo.svg'; // or your .png

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="a11f6c7e-0cdd-46d3-800a-4909b9606506.png" alt="logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lost">Lost Items</Link></li>
        <li><Link to="/found">Found Items</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/claimed">Claimed</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          {isAuthenticated ? (
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
