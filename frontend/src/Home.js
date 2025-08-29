// frontend/src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
function Home() {
  const navigate = useNavigate();
  

  return (
    <>
     <Layout>
      <h2>Welcome to the Cab Booking System 🚖</h2>
    </Layout>
      <Navbar />
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h2>Welcome to Swar Cab Booking</h2>
        <button
          onClick={() => navigate('/available-cars')}
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          🚕 Go to Book Cab
        </button>
      </div>
    </>
  );
}

export default Home;
