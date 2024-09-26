import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaKey } from 'react-icons/fa';
import './Form.css'; // Add your CSS here for styling
import Header from '../Header/Header';

const AuthForm = () => {
  const [formType, setFormType] = useState('login'); // login, forgotPassword, otp, signup
  const [otpVerified, setOtpVerified] = useState(false);

  const handleToggleForm = (type) => {
    setFormType(type);
    setOtpVerified(false);
  };

  return (
    <>
    <Header/>
    <div className="auth-container">
      {/* Sidebar */}
      <div className="auth-sidebar">
        <h2>Welcome to Our App</h2>
        <p>Manage your tasks efficiently</p>
      </div>

      {/* Form Section */}
      <div className="auth-form-section">
        {formType === 'login' && (
          <div className="auth-form">
            <h2>Login</h2>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="auth-btn">Login</button>
            <p onClick={() => handleToggleForm('forgotPassword')}>Forgot Password?</p>
            <p onClick={() => handleToggleForm('signup')}>Don't have an account? Signup</p>
          </div>
        )}

        {formType === 'forgotPassword' && (
          <div className="auth-form">
            <h2>Forgot Password</h2>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="auth-btn" onClick={() => handleToggleForm('otp')}>Send OTP</button>
          </div>
        )}

        {formType === 'otp' && (
          <div className="auth-form">
            <h2>Enter OTP</h2>
            <div className="form-group">
              <FaKey className="form-icon" />
              <input type="text" placeholder="Enter OTP" />
            </div>
            <button className="auth-btn" onClick={() => setOtpVerified(true)}>
              Verify OTP
            </button>
            {otpVerified && (
              <div>
                <h3>OTP Verified!</h3>
                <p onClick={() => handleToggleForm('updatePassword')}>Proceed to update password</p>
              </div>
            )}
          </div>
        )}

        {formType === 'updatePassword' && (
          <div className="auth-form">
            <h2>Update Password</h2>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" placeholder="New Password" />
            </div>
            <button className="auth-btn">Update Password</button>
          </div>
        )}

        {formType === 'signup' && (
          <div className="auth-form">
            <h2>Signup</h2>
            <div className="form-group">
              <FaUser className="form-icon" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <FaPhone className="form-icon" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="auth-btn" onClick={() => handleToggleForm('otp')}>Signup</button>
            <p onClick={() => handleToggleForm('login')}>Already have an account? Login</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default AuthForm;
