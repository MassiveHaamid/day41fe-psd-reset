import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import ForgetPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import './styles/styles.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
  
    const logout = () => {
      setToken('');
      localStorage.removeItem('token');
    };

    return (
    <Router>
      <div>
        <nav>
          <ul>
            {token ? (
              <>
              <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forget-password">Forget Password</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={<LoginForm onLogin={(username, password) => login(username, password)} />}
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
