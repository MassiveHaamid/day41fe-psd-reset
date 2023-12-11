import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const Dashboard = () => {
  const [resetRequests, setResetRequests] = useState([]);

  useEffect(() => {
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

  return (
    <div className="dashboard-container">
      <h2>Password Reset Dashboard</h2>
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
    </div>
  );
};

export default Dashboard;
