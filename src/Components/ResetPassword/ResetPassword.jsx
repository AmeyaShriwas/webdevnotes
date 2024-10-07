// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(new URLSearchParams(window.location.search).get('token'));
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5600/api/reset-password', {
        token,
        newPassword: password,
      });
      setMessage(response.data); // Display success message
    } catch (error) {
      setMessage('Error resetting password, token may have expired.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
