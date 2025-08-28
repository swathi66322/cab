const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  pickup: String,
  drop: String,
  cabType: String,
  date: String,
  time: String,
  fare: Number,
  email: String, // ✅ must exist to filter bookings by user
});

module.exports = mongoose.model('Booking', bookingSchema);
