import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
      <Link to="/register">Register</Link>
      <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
};

export default App;
