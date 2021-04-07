import React from 'react';

import './header.css';

import PivonyLogo from '../../assets/pivony.png';


const Header = () => {
  return (
    <div className='header-con'>
      <div className="header-left">
        <img src={PivonyLogo} alt='pivony-logo' />
        <p>AI Driven Insights</p>
      </div>

      <div className='header-right'>
        <h1>User Profile</h1>
      </div>
    </div>
  )
}

export default Header;
