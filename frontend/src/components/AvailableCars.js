// components/AvailableCars.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Optional CSS file
import Layout from './Layout';

function AvailableCars() {
  const navigate = useNavigate();

  const cars = [
    {
      name: 'Toyota Innova',
      image: '/images/car1.jpg'
    },
    {
      name: 'Swift Dzire',
      image: '/images/car2.jpg'
    },
    {
      name: 'Hyundai Aura',
      image: '/images/car3.jpg'
    }
  ];

  const handleBook = (carName) => {
    localStorage.setItem('selectedCar', carName);
    navigate('/book-cabs');
  };

  return (
    <Layout>
      <div className="available-cars" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>🚗 Available Cars</h2>
        <div
          className="car-list"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}
        >
          {cars.map((car, index) => (
            <div
              key={index}
              className="car-card"
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                width: '220px'
              }}
            >
              <img
                src={car.image}
                alt={car.name}
                style={{
                  width: '200px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
              <h3>{car.name}</h3>
              <button
                onClick={() => handleBook(car.name)}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  cursor: 'pointer'
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AvailableCars;

