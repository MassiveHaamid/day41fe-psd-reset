import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import ForgetPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forget-password">Forget Password</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
