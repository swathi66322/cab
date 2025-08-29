import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      navigate('/'); // Redirects to login page after successful registration
    } catch {
      setMsg('❌ Error registering. Try again!');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '100px',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fdfdfd'
    }}>
      <h2 style={{ marginBottom: '20px' }}>📝 Register</h2>

      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>

      <p style={{ color: 'red', marginTop: '10px' }}>{msg}</p>

      <p style={{ marginTop: '20px' }}>
        Already have an account? <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
      </p>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none'
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Register;
