import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
