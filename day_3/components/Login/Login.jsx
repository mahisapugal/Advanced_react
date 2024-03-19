import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../../App.css';
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Check if username and password match admin credentials
    if (username === 'admin' && password === 'mahi@123') {
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      // Check if username and password match registered info
      // Replace these values with actual registered information
      

     
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear errors when user starts typing
    setErrors({});
  };

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>
          <div className='textDiv'>
            <h2 className='title'>Create bright future<br/>
              <i>Embrace the vibrant spirit of your college journey,<br/> where every moment becomes an opportunity <br/>for growth and discovery. </i>
            </h2>
          </div>
          <div className='footerDiv flex'>
            <span className='text'>Don't have any account</span>
            <Link to='/register'>
              <button className='btn'>Sign up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
           
          </div>

          <form onSubmit={handleSubmit} className='form grid'>
            {errors.invalidCredentials && <span className='error'>{errors.invalidCredentials}</span>}
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <input
                  type='text'
                  id='username'
                  placeholder='Enter Username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span><Link to='/userhome'>Log in</Link></span>
            </button>
            <span className='forgot password'>
              Forgot your password <Link to='/register'>Click here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;