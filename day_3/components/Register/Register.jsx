import React, { useState } from 'react';
import './Register.css' // You can define your CSS styles here
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../../Assets/i2.jpg'; // Import your image

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, submit form
      // Example: Call an API for registration
      console.log('Form submitted:', formData);
      // Redirect to login page after successful registration
      // Use Link for redirection
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear errors when user starts typing
    setErrors({
      ...errors,
      [e.target.id]: '',
    });
  };

  return (
    <div className='registerPages flex' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='containers flex'>
        <div className='formDivs'>
          <div className='headerDivs'>
            <h3>Register</h3>
            <br/>
          </div>

          <form onSubmit={handleSubmit} className='form'>
            {/* Display validation errors */}
            {errors.username && <span className='error'>{errors.username}</span>}
            <div className='inputDivs'>
              <label htmlFor='username'>Username</label>
              <div className='inputs flex'>
                <FaUserAlt className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Enter Username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.email && <span className='error'>{errors.email}</span>}
            <div className='inputDivs'>
              <label htmlFor='email'>Email</label>
              <div className='inputs flex'>
                <FaEnvelope className='icon' />
                <input
                  type='email'
                  id='email'
                  placeholder='Enter Email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.password && <span className='error'>{errors.password}</span>}
            <div className='inputDivs'>
              <label htmlFor='password'>Password</label>
              <div className='inputs flex'>
                <FaLock className='icon' />
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
            <div className='inputDivs'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <div className='inputs flex'>
                <FaLock className='icon' />
                <input
                  type='password'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type='submit' className='btn'>
              Register
            </button>
            <p className='login-link'>
              Already have an account? <Link to='/'>Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;