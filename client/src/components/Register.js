import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const validate = () => {
    const { email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!formData.name.trim()) return 'Name is required';
    if (!emailRegex.test(email)) return 'Invalid email format';
    if (!passRegex.test(password)) return 'Password must be at least 6 characters and include a number or symbol';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return toast.error(error);
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      toast.success('Registration successful. Please login!');
      navigate('/login'); // 👈 redirect here
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit" className="btn submit-btn">Register</button>
    </form>
  );
}

export default Register;
