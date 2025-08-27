import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
// import './Style.css'; // Assuming styling is defined here

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get('http://localhost:4000/users');
      const users = res.data;

      const match = users.find(
        (user) =>
          user.email.toLowerCase() === form.email.toLowerCase() &&
          user.password === form.password
      );

      if (match) {
        login();
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to ReclaimIt</h2>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={form.email}
          required
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={form.password}
          required
        />
        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
