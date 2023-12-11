import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const RegistrationForm = () => {
    const [registrationEmail, setRegistrationEmail] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const handleRegistration = async () => {
        try {
            await axios.post('/api/register', { email: registrationEmail, password: registrationPassword });
            setRegistrationSuccess('Registration successful!');
            // Clear the success message after a certain duration if needed
            setTimeout(() => setRegistrationSuccess(''), 5000);
        } catch (error) {
            console.error('Error in registration:', error);
        }
    };

    return (
        <div className="container">
            <h3>Registration</h3>
            <input
                type="email"
                placeholder="Enter your email"
                value={registrationEmail}
                onChange={(e) => setRegistrationEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Enter your password"
                value={registrationPassword}
                onChange={(e) => setRegistrationPassword(e.target.value)}
            /><br />
            <button onClick={handleRegistration}>Submit Registration</button>
            {registrationSuccess && <p className="success-message">{registrationSuccess}</p>}
        </div>
    );
};

export default RegistrationForm;
