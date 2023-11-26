import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the backend to reset the password
      const response = await axios.post('/api/reset-password', { token, password });
      console.log(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        {/* Password input fields and submit button */}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetForm;
