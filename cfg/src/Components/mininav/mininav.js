import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import './mininav.css'; 

const MiniNav = () => {
  const iconStyle = {
    color: '#394C1B',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <div className="mini-nav-container">
      <Link to="/dashboard" className="icon-left">
        <FontAwesomeIcon icon={faHome} style={iconStyle} />
      </Link>
      <Link to="/aboutus" className="icon-right">
        <FontAwesomeIcon icon={faCog} style={iconStyle} />
      </Link>
    </div>
  );
};

export default MiniNav;