import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ResetForm from './components/ResetForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

const App = () => {
  // Initialize state for register form
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    name: '',
    password: ''
  });

  // Initialize state for registration status
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginForm isRegistered={isRegistered} setIsRegistered={setIsRegistered} />}
        />
        <Route
          path="/register"
          element={
            <RegisterForm
              registerFormData={registerFormData}
              setRegisterFormData={setRegisterFormData}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
            />
          }
        />
        <Route path="/reset/:token" element={<ResetForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      </Routes>
    </Router>
  );
};

export default App;
