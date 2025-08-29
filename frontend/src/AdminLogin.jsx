import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (form.username === 'admin' && form.password === 'admin123') {
      navigate('/home');
    } else {
      alert('❌ Invalid admin credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔐 Admin Login</h2>
      <form onSubmit={handleAdminLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '350px',
    margin: 'auto',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginTop: '100px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '25px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #aaa',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};

export default AdminLogin;
