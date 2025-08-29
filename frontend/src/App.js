import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import AvailableCars from './components/AvailableCars';
import MyBookings from './MyBookings';
import AdminLogin from './AdminLogin';
import Cabs from './Cabs';
import BookCab from './BookCab'; // ✅ Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/available-cars" element={<AvailableCars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/book-cabs" element={<BookCab />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
