const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - Save booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ message: 'Booking failed' });
  }
});

// ✅ GET /api/bookings?email=... - Fetch bookings by email
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const bookings = await Booking.find({ email });
    res.json(bookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

module.exports = router;



