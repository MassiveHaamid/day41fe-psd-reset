import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [resetRequests, setResetRequests] = useState([]);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [registrationEmail, setRegistrationEmail] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');
    const [forgetPasswordSuccess, setForgetPasswordSuccess] = useState('');
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    useEffect(() => {
        // Fetch recent password reset requests from the server
        const fetchResetRequests = async () => {
            try {
                const response = await axios.get('/api/reset-requests');
                setResetRequests(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching reset requests:', error);
            }
        };

        fetchResetRequests();
    }, []);

    const handleForgetPassword = async () => {
        try {
            await axios.post('/api/forget-password', { email });
            setForgetPasswordSuccess('Forget password request successful!');
            // Clear the success message after a certain duration if needed
            setTimeout(() => setForgetPasswordSuccess(''), 5000);
        } catch (error) {
            console.error('Error in forget password:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            // Assuming you have a way to associate the reset request with a user, for example, using their email
            await axios.post(`/api/reset-password/${email}`, { newPassword });
            setResetPasswordSuccess('Password reset successful!');
            // Clear the success message after a certain duration if needed
            setTimeout(() => setResetPasswordSuccess(''), 5000);
        } catch (error) {
            console.error('Error in reset password:', error);
        }
    };

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
        <div>
            <h2>Password Reset Dashboard</h2>

            {/* Recent Password Reset Requests */}
            <div>
                <h3>Recent Password Reset Requests</h3>
                <ul>
                    {resetRequests.map((request) => (
                        <li key={request.id}>
                            <strong>User:</strong> {request.user}
                            <br />
                            <strong>Status:</strong> {request.status}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Forget Password */}
            <div>
                <h3>Forget Password</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleForgetPassword}>Submit Forget Password</button>
                {forgetPasswordSuccess && <p style={{ color: 'green' }}>{forgetPasswordSuccess}</p>}
            </div>

            {/* Reset Password */}
            <div>
                <h3>Reset Password</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handleResetPassword}>Submit Reset Password</button>
                {resetPasswordSuccess && <p style={{ color: 'green' }}>{resetPasswordSuccess}</p>}
            </div>

            {/* Registration */}
            <div>
                <h3>Registration</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={registrationEmail}
                    onChange={(e) => setRegistrationEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={registrationPassword}
                    onChange={(e) => setRegistrationPassword(e.target.value)}
                />
                <button onClick={handleRegistration}>Submit Registration</button>
                {registrationSuccess && <p style={{ color: 'green' }}>{registrationSuccess}</p>}
            </div>
        </div>
    );
};

export default Dashboard;
