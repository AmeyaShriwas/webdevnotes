import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser, verifyOTP, forgotPassword, resetPassword } from './redux/actions'; // Assuming you have these actions
import { toast } from 'react-toastify';
import './Form.css';

const AuthForm = () => {
  const dispatch = useDispatch();
  
  const [formType, setFormType] = useState('login'); // Could be 'login', 'signup', 'otp', 'forgotPassword', 'resetPassword'
  
  const [formData, setFormData] = useState({
    login: { email: '', password: '' },
    signup: { name: '', email: '', number: '', password: '' },
    otp: { otp: '' },
    forgotPassword: { email: '' },
    resetPassword: { newPassword: '' }
  });

  const handleFormChange = useCallback((formKey, field, value) => {
    setFormData(prev => ({
      ...prev,
      [formKey]: {
        ...prev[formKey],
        [field]: value
      }
    }));
  }, []);

  const handleToggleForm = useCallback((formType) => {
    setFormType(formType);
  }, []);

  // Memoize submit handlers to avoid re-creating them on every render
  const handleLoginSubmit = useCallback(() => {
    const { email, password } = formData.login;
    if (!email || !password) {
      return toast.error('Please fill in all login fields.');
    }
    dispatch(loginUser({ email, password }));
  }, [formData.login, dispatch]);

  const handleSignupSubmit = useCallback(() => {
    const { name, email, number, password } = formData.signup;
    if (!name || !email || !number || !password) {
      return toast.error('Please fill in all signup fields.');
    }
    dispatch(signupUser({ name, email, number, password }));
  }, [formData.signup, dispatch]);

  const handleOtpSubmit = useCallback(() => {
    const { otp } = formData.otp;
    if (!otp) {
      return toast.error('Please enter the OTP.');
    }
    dispatch(verifyOTP({ otp }));
  }, [formData.otp, dispatch]);

  const handleForgotPasswordSubmit = useCallback(() => {
    const { email } = formData.forgotPassword;
    if (!email) {
      return toast.error('Please enter your email.');
    }
    dispatch(forgotPassword({ email }));
  }, [formData.forgotPassword, dispatch]);

  const handleResetPasswordSubmit = useCallback(() => {
    const { newPassword } = formData.resetPassword;
    if (!newPassword) {
      return toast.error('Please enter a new password.');
    }
    dispatch(resetPassword({ newPassword }));
  }, [formData.resetPassword, dispatch]);

  // Debouncing input handler for form changes to avoid excessive re-renders
  const handleInputChange = useMemo(() => (formKey, field) => (e) => {
    handleFormChange(formKey, field, e.target.value);
  }, [handleFormChange]);

  return (
    <div className="auth-container">
      {formType === 'login' && (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={formData.login.email}
            onChange={handleInputChange('login', 'email')}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.login.password}
            onChange={handleInputChange('login', 'password')}
          />
          <button onClick={handleLoginSubmit}>Login</button>
          <p onClick={() => handleToggleForm('forgotPassword')}>Forgot Password?</p>
          <p onClick={() => handleToggleForm('signup')}>Don't have an account? Signup</p>
        </div>
      )}

      {formType === 'signup' && (
        <div className="signup-form">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            value={formData.signup.name}
            onChange={handleInputChange('signup', 'name')}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.signup.email}
            onChange={handleInputChange('signup', 'email')}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.signup.number}
            onChange={handleInputChange('signup', 'number')}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.signup.password}
            onChange={handleInputChange('signup', 'password')}
          />
          <button onClick={handleSignupSubmit}>Signup</button>
          <p onClick={() => handleToggleForm('login')}>Already have an account? Login</p>
        </div>
      )}

      {formType === 'forgotPassword' && (
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Email"
            value={formData.forgotPassword.email}
            onChange={handleInputChange('forgotPassword', 'email')}
          />
          <button onClick={handleForgotPasswordSubmit}>Submit</button>
          <p onClick={() => handleToggleForm('login')}>Back to Login</p>
        </div>
      )}

      {formType === 'otp' && (
        <div className="otp-form">
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="OTP"
            value={formData.otp.otp}
            onChange={handleInputChange('otp', 'otp')}
          />
          <button onClick={handleOtpSubmit}>Submit OTP</button>
        </div>
      )}

      {formType === 'resetPassword' && (
        <div className="reset-password-form">
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={formData.resetPassword.newPassword}
            onChange={handleInputChange('resetPassword', 'newPassword')}
          />
          <button onClick={handleResetPasswordSubmit}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
