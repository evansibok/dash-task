import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

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
        <ol>
          <li>Home</li>
          <li>
            Help
            <IoMdArrowDropdown />
          </li>
          <li>
            Demo Pivony
            <IoMdArrowDropdown />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Header;
