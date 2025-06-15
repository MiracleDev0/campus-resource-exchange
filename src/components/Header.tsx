import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Campus Resource Exchange</h1>
      <div className="header-buttons">
        <button onClick={() => navigate('/donate')}>Donate Resource</button>
        <button onClick={() => navigate('/available')}>Available Resource</button>
        <button onClick={() => navigate('/loans')}>My Loans</button>
      </div>
    </header>
  );
};

export default Header;