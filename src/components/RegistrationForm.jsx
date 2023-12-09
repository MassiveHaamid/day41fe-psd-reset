import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
