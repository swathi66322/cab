import React from 'react';
import { Link } from 'react-router-dom';

function Cabs() {
  const cabs = [
    { id: 1, name: "🚖 Swift Dzire", price: "₹12/km" },
    { id: 2, name: "🚗 Toyota Innova", price: "₹15/km" },
    { id: 3, name: "🚙 Honda City", price: "₹14/km" },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2>Available Cabs</h2>
      {cabs.map((cab) => (
        <div key={cab.id} style={{ marginBottom: '20px' }}>
          <strong>{cab.name}</strong><br />
          <span>Rate: {cab.price}</span><br />
          <Link to="/available-cars">
  <button style={{ marginTop: '10px' }}>Book Now</button>
</Link>

        </div>
      ))}
    </div>
  );
}

export default Cabs;
