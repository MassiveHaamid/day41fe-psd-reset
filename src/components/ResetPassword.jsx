import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchResetMessage = async () => {
            try {
                const response = await axios.get(`/api/reset-password/${token}`);
                setMessage(response.data.message);
            } catch (error) {
                console.error(error.response?.data?.error || 'Something went wrong.');
                setMessage('Error: ' + (error.response?.data?.error || 'Something went wrong.'));
            }
        };
    
        fetchResetMessage();
    }, [token, password]);

    const handleUpdatePassword = async () => {
        try {
            await axios.post('/api/update-password', { token, password });
            setMessage('Password updated successfully.');
        } catch (error) {
            console.error(error.response?.data?.error || 'Something went wrong.');
            setMessage('Error: ' + (error.response?.data?.error || 'Something went wrong.'));
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <p>{message}</p>
            <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
    );
};

export default ResetPassword;
