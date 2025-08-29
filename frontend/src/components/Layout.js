import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any login-related storage
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/available-cars" style={styles.link}>Available Cars</Link>
        <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </nav>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    border: 'none',
    padding: '6px 12px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px'
  }
};

export default Layout;
