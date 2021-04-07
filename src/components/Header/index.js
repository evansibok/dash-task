import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

import './header.css';

import PrivonyLogo from '../../assets/privony.png';

const Header = () => {
  return (
    <div className='header-con'>
      <div className="header-left">
        <img src={PrivonyLogo} alt='privony-logo' />
        <p>AI Driven Insights</p>
      </div>

      <div className='header-right'>
        <ol>
          <li>Home</li>
          <li>
            Help
            <IoMdArrowDropdown />
          </li>
          <li>
            Demo Privony
            <IoMdArrowDropdown />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Header;
