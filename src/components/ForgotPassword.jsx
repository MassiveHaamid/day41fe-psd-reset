import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [forgetPasswordSuccess, setForgetPasswordSuccess] = useState('');

  const handleForgetPassword = async () => {
    try {
      await axios.post('http://localhost:3001/api/auth/forget-password', { email });
      setForgetPasswordSuccess('Forget password request successful!');
      setTimeout(() => setForgetPasswordSuccess(''), 5000);
    } catch (error) {
      console.error('Error in forget password:', error);
    }
  };

  return (
    <div>
      <h3>Forget Password</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />&nbsp;
      
      <button onClick={handleForgetPassword}>Submit Forget Password</button>
      {forgetPasswordSuccess && <p style={{ color: 'green' }}>{forgetPasswordSuccess}</p>}
    </div>
  );
};

export default ForgetPassword;
