import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaKey } from 'react-icons/fa';
import './Form.css'; // Add your CSS here for styling
import Header from '../Header/Header';
import { loginUser } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const [formType, setFormType] = useState('login'); // login, forgotPassword, otp, signup
  const [otpVerified, setOtpVerified] = useState(false);
  const dispatch = useDispatch()
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: ''
  });

  const [otpData, setOtpData] = useState({
    otp: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const loginFunction = () => {
    console.log('Login data:', loginData);
    dispatch(loginUser(loginData))
    // Add your login logic here
  };

  const signupFunction = () => {
    console.log('Signup data:', signupData);
    // Add your signup logic here
  };

  const sendOtpFunction = () => {
    console.log('Forgot password email:', forgotPasswordData.email);
    // Add your send OTP logic here
  };

  const verifyOtpFunction = () => {
    console.log('OTP:', otpData.otp);
    // Add your OTP verification logic here
    setOtpVerified(true);
  };

  const handleToggleForm = (type) => {
    setFormType(type);
    setOtpVerified(false);
  };

  return (
    <>
      <Header />
      <div className="auth-container">
        {/* Sidebar */}
        <div className="auth-sidebar">
          <h2>Welcome</h2>
          <p>Download exclusive PDF notes to improve your productivity. Our PDFs are designed to help you stay organized and focused on what matters most.</p>
        </div>

        {/* Form Section */}
        <div className="auth-form-section">
          {formType === 'login' && (
            <div className="auth-form">
              <h2>Login</h2>
              <div className="form-group">
                <FaEnvelope className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="form-group">
                <FaLock className="form-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </div>
              <button className="auth-btn" onClick={loginFunction}>Login</button>
              <p onClick={() => handleToggleForm('forgotPassword')}>Forgot Password?</p>
              <p onClick={() => handleToggleForm('signup')}>Don't have an account? Signup</p>
            </div>
          )}

          {formType === 'forgotPassword' && (
            <div className="auth-form">
              <h2>Forgot Password</h2>
              <div className="form-group">
                <FaEnvelope className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleForgotPasswordChange}
                />
              </div>
              <button className="auth-btn" onClick={sendOtpFunction}>Send OTP</button>
            </div>
          )}

          {formType === 'otp' && (
            <div className="auth-form">
              <h2>Enter OTP</h2>
              <div className="form-group">
                <FaKey className="form-icon" />
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  onChange={handleOtpChange}
                />
              </div>
              <button className="auth-btn" onClick={verifyOtpFunction}>
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
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form-group">
                <FaEnvelope className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form-group">
                <FaPhone className="form-icon" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form-group">
                <FaLock className="form-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleSignupChange}
                />
              </div>
              <button className="auth-btn" onClick={signupFunction}>Signup</button>
              <p onClick={() => handleToggleForm('login')}>Already have an account? Login</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
