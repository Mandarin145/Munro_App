import React from 'react';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); // Add the useNavigate hook

  const handleEnterClick = () => {
    navigate('/dashboard'); // Navigate to the '/dashboard' route
  };

  return (
    <div
      style={{
        backgroundColor: '#f9fde0',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: '1px', marginTop: '50px' }}>
        <img src={logo} alt="Logo" style={{ width: '300px' }} />
      </div>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>
        Your personal Munro Guide
      </p>
      <div style={{ marginTop: '100px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#668633',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={handleEnterClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
