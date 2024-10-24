import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaKey } from 'react-icons/fa';
import './Form.css'; // Add your CSS here for styling
import { loginUser, signupUser, verifyUser, forgotPassword, resetPasswordFun } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import banner from './../../Assets/banner.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const AuthForm = () => { 
  const [formType, setFormType] = useState('login'); // login, forgotPassword, otp, signup
  const [otpVerified, setOtpVerified] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState({
    login: false,
    signup: false,
    sendOtp: false,
    verifyOtp: false,
    resetPassword: false
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: ''
  });

  const [otpData, setOtpData] = useState({
    otp: ''
  });

  const [resetPassword, setResetPassword] = useState({
    newPassword: ''
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

  const resetPasswordChange = (e) => {
    const { name, value } = e.target;
    setResetPassword((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Login function with toast notification
  const loginFunction = () => {
    setLoading((prev) => ({ ...prev, login: true }));
    if (loginData.email && loginData.password) {
      dispatch(loginUser(loginData)).then((response) => {
        setLoading((prev) => ({ ...prev, login: false }));
        if (response.payload.token) {
          toast.success("Logged in successfully!");
          setTimeout(() => {
            navigate('/landing');
          }, 1000);
        } else {
          toast.error("Invalid credentials");
        }
      });
    } else {
      toast.error("Please fill in all login fields.");
      setLoading((prev) => ({ ...prev, login: false }));
    }
  };

  // Signup function with toast notification
  const signupFunction = () => {
    setLoading((prev) => ({ ...prev, signup: true }));
    if (signupData.name && signupData.email && signupData.number && signupData.password) {
      dispatch(signupUser(signupData)).then((response) => {
        setLoading((prev) => ({ ...prev, signup: false }));
        if (response) {
          toast.success("Signed up successfully!");
          setTimeout(() => {
            setFormType('otp');
          }, 1000);
        } else {
          toast.error("Invalid credentials.");
        }
      });
    } else {
      toast.error("Please fill in all signup fields.");
      setLoading((prev) => ({ ...prev, signup: false }));
    }
  };

  // Forgot password function with toast notifications
  const sendOtpFunction = () => {
    setLoading((prev) => ({ ...prev, sendOtp: true }));
    if (forgotPasswordData.email) {
      dispatch(forgotPassword(forgotPasswordData.email)).then((response) => {
        setLoading((prev) => ({ ...prev, sendOtp: false }));
        if (response.payload?.message) {
          toast.info("OTP sent to your email.");
          setTimeout(() => {
            setFormType('otp');
          }, 1000);
        } else {
          toast.error("Failed to send OTP.");
        }
      });
    } else {
      toast.error("Please enter your email.");
      setLoading((prev) => ({ ...prev, sendOtp: false }));
    }
  };

  // OTP verification function with toast notification
  const verifyOtpFunction = () => {
    setLoading((prev) => ({ ...prev, verifyOtp: true }));
    const verifyOtp = {
      email: signupData.email || forgotPasswordData.email,
      otp: otpData.otp
    };
    if (otpData.otp && (signupData.email || forgotPasswordData.email)) {
      dispatch(verifyUser(verifyOtp)).then((response) => {
        setLoading((prev) => ({ ...prev, verifyOtp: false }));
        if (response.payload.message) {
          toast.success("OTP verified successfully!");
          setTimeout(() => {
            setOtpVerified(true);
            if (forgotPasswordData.email) {
              setFormType('updatePassword');
            } else {
              setFormType('login');
            }
          }, 500);
        } else {
          toast.error("Invalid OTP. Please try again.");
        }
      });
    } else {
      toast.error("Invalid OTP. Please try again.");
      setLoading((prev) => ({ ...prev, verifyOtp: false }));
    }
  };

  const resetPasswordFuntion = () => {
    setLoading((prev) => ({ ...prev, resetPassword: true }));
    if (resetPassword.newPassword && forgotPasswordData.email && otpData.otp) {
      const resetPasswordData = {
        email: forgotPasswordData.email,
        otp: otpData.otp,
        newPassword: resetPassword.newPassword
      };
      dispatch(resetPasswordFun(resetPasswordData)).then((response) => {
        setLoading((prev) => ({ ...prev, resetPassword: false }));
        if (response.payload.message) {
          toast.success(response.payload.message);
          setTimeout(() => {
            setFormType('login');
          }, 1000);
        }
      });
    } else {
      setLoading((prev) => ({ ...prev, resetPassword: false }));
    }
  };

  const handleToggleForm = (type) => {
    setFormType(type);
    setOtpVerified(false);
  };

  return (
    <div className="auth-form-section">
      <Header />
      <div className='formContainerMain'>
        <div className="auth-banner">
          <img loading="lazy" src={banner} alt="Banner" />
        </div>

        {formType === 'login' && (
          <div className="auth-form">
            <h2>Login</h2>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" name="email" placeholder="Email" onChange={handleLoginChange} />
            </div>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
            </div>
            <button className="auth-btn" onClick={loginFunction}>
              {loading.login ? 'Logging in...' : 'Login'}
            </button>
            <p onClick={() => handleToggleForm('forgotPassword')}>Forgot Password?</p>
            <p onClick={() => handleToggleForm('signup')}>Don't have an account? Signup</p>
          </div>
        )}

        {formType === 'forgotPassword' && (
          <div className="auth-form">
            <h2>Forgot Password</h2>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" name="email" placeholder="Enter your email" onChange={handleForgotPasswordChange} />
            </div>
            <button className="auth-btn" onClick={sendOtpFunction}>
              {loading.sendOtp ? 'Sending OTP...' : 'Send OTP'}
            </button>
            <p onClick={() => handleToggleForm('login')}>Login now</p>
          </div>
        )}

        {formType === 'otp' && (
          <div className="auth-form">
            <h2>Enter OTP</h2>
            <div className="form-group">
              <FaKey className="form-icon" />
              <input type="text" name="otp" placeholder="Enter OTP" onChange={handleOtpChange} />
            </div>
            <button className="auth-btn" onClick={verifyOtpFunction}>
              {loading.verifyOtp ? 'Verifying OTP...' : 'Verify OTP'}
            </button>
            <p onClick={() => handleToggleForm('login')}>Go back to Login</p>
          </div>
        )}

        {formType === 'signup' && (
          <div className="auth-form">
            <h2>Signup</h2>
            <div className="form-group">
              <FaUser className="form-icon" />
              <input type="text" name="name" placeholder="Name" onChange={handleSignupChange} />
            </div>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" name="email" placeholder="Email" onChange={handleSignupChange} />
            </div>
            <div className="form-group">
              <FaPhone className="form-icon" />
              <input type="tel" name="number" placeholder="Phone Number" onChange={handleSignupChange} />
            </div>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" name="password" placeholder="Password" onChange={handleSignupChange} />
            </div>
            <button className="auth-btn" onClick={signupFunction}>
              {loading.signup ? 'Signing up...' : 'Signup'}
            </button>
            <p onClick={() => handleToggleForm('login')}>Already have an account? Login</p>
          </div>
        )}

        {formType === 'updatePassword' && (
          <div className="auth-form">
            <h2>Reset Password</h2>
            <div className="form-group">
              <FaLock className="form-icon" />
              <input type="password" name="newPassword" placeholder="Enter new password" onChange={resetPasswordChange} />
            </div>
            <button className="auth-btn" onClick={resetPasswordFuntion}>
              {loading.resetPassword ? 'Resetting Password...' : 'Reset Password'}
            </button>
            <p onClick={() => handleToggleForm('login')}>Go back to Login</p>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default AuthForm;
