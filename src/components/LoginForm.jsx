import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://psd-reset-bend.onrender.com/api/auth/login', { email:username, password });
      setLoginSuccess(response.data.message);
      localStorage.setItem("token", response.data.token);
      setTimeout(() =>{window.location.href="/dashboard"}, 3000);
    } catch (error) {
      console.error('Error in login:', error);
      setLoginSuccess('Login failed');
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
      {loginSuccess && <p style={{ color: 'green' }}>{loginSuccess}</p>}
    </div>
  );
};

export default LoginForm;
