import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/home');
    } catch {
      setMsg("❌ Invalid credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👤 User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
      <p style={styles.msg}>{msg}</p>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
      <p>Are you an admin? <Link to="/admin-login">Login here</Link></p>
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
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  msg: {
    marginTop: '10px',
    color: 'red',
  }
};

export default Login;
