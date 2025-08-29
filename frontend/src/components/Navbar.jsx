// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // remove user session
    navigate('/'); // redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>🚖 Swar Cab Booking</h2>
      </div>
      <div className="navbar-right">
        <Link to="/home">🏠 Home</Link>
        <Link to="/my-bookings">📚 My Bookings</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;


