import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/bookings?email=${user.email}`)
        .then(res => setBookings(res.data))
        .catch(() => alert("Failed to load bookings"));
    }
  }, [user]);

  return (
    <div style={{ padding: '30px' }}>
      <h2>📖 My Booking History</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          {bookings.map((booking, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              backgroundColor: '#f9f9f9'
            }}>
              <p><strong>📍 From:</strong> {booking.pickup}</p>
              <p><strong>📍 To:</strong> {booking.drop}</p>
              <p><strong>🚖 Cab Type:</strong> {booking.cabType}</p>
              <p><strong>📅 Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
              <p><strong>⏰ Time:</strong> {booking.time}</p>
              <p><strong>💰 Fare:</strong> ₹{booking.fare}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
