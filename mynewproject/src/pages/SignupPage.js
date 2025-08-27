import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add CSS styling if needed

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Get existing users to prevent duplicate emails
      const res = await axios.get('http://localhost:4000/users');
      const existingUsers = res.data;

      const alreadyExists = existingUsers.some(
        (user) => user.email.toLowerCase() === form.email.toLowerCase()
      );

      if (alreadyExists) {
        alert('An account with this email already exists.');
        return;
      }

      // Step 2: Post new user
      await axios.post('http://localhost:4000/users', form);

      alert('Sign-up successful! Please log in.');
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err);
      alert('Something went wrong during signup.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Create Your ReclaimIt Account</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>

        <p className="signup-text">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
