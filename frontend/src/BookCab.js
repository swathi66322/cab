import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookCab() {
  const [selectedCar, setSelectedCar] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    pickup: '',
    drop: '',
    date: '',
    time: ''
  });
  const [fare, setFare] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const car = localStorage.getItem('selectedCar');
    if (car) setSelectedCar(car);
  }, []);

  const carImages = {
    'Toyota Innova': '/images/car1.jpg',
    'Swift Dzire': '/images/car2.jpg',
    'Hyundai Aura': '/images/car3.jpg'
  };

  const fareRates = {
    'Toyota Innova': 20,
    'Swift Dzire': 15,
    'Hyundai Aura': 12
  };

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const calculateFare = () => {
    const distance = 10; // fixed or you can calculate using Google Maps API
    return fareRates[selectedCar] * distance;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fareAmount = calculateFare();
    setFare(fareAmount);

    const payload = {
      ...bookingDetails,
      email: user?.email,
      cabType: selectedCar,
      fare: fareAmount,
      date: bookingDetails.date
    };

    try {
      await axios.post('http://localhost:5000/api/bookings', payload);
      setSubmitted(true);
    } catch (error) {
      alert('Booking failed!');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h2>🚖 Book Your Cab</h2>

      {selectedCar && (
        <>
          <p style={{ fontSize: '18px' }}>You selected: <strong>{selectedCar}</strong></p>
          <img
            src={carImages[selectedCar]}
            alt={selectedCar}
            style={{ width: '300px', borderRadius: '10px', marginBottom: '20px' }}
          />
        </>
      )}

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="name" placeholder="Your Name" value={bookingDetails.name} onChange={handleChange} required />
          <input type="text" name="pickup" placeholder="Pickup Location" value={bookingDetails.pickup} onChange={handleChange} required />
          <input type="text" name="drop" placeholder="Drop Location" value={bookingDetails.drop} onChange={handleChange} required />
          <input type="date" name="date" value={bookingDetails.date} onChange={handleChange} required />
          <input type="time" name="time" value={bookingDetails.time} onChange={handleChange} required />

          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Confirm Booking
          </button>
        </form>
      ) : (
        <div style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          ✅ Booking Confirmed for {selectedCar}! <br />
          Fare: ₹{fare} <br />
          From <strong>{bookingDetails.pickup}</strong> to <strong>{bookingDetails.drop}</strong> on {bookingDetails.date} at {bookingDetails.time}.
        </div>
      )}
    </div>
  );
}

export default BookCab;
