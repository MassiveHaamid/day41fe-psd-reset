import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgetPassword = async () => {
        try {
            await axios.post('/api/forget-password', { email });
            setMessage('Reset email sent. Check your inbox.');
        } catch (error) {
            console.error(error.response?.data?.error || 'Something went wrong.');
            setMessage('Error: ' + (error.response?.data?.error || 'Something went wrong.'));
        }
    };

    return (
        <div>
            <h2>Forget Password</h2>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleForgetPassword}>Send Reset Email</button>
            <p>{message}</p>
        </div>
    );
};

export default ForgetPassword;
