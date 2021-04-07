import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome, IoIosAlbums, IoIosHelpCircleOutline, IoMdSettings, IoIosLogOut } from "react-icons/io";


import './sidebar.css';


const SideBar = () => {
  return (
    <div className='side-con'>
      <div className='user'>
        <div className='avatar'>

        </div>
        <div className='details'>
          <p>Benjamin Bright</p>
          <p>benjamin@privony.com</p>
        </div>
      </div>
      <nav className='side-nav'>
        <ul>
          <Link to='/'>
            <IoMdHome />
            <li>
              Home
            </li>
          </Link>
          <Link to='/demo'>
            <IoIosAlbums />
            <li>
              Demo Privony
            </li>
          </Link>
          <Link to='/help'>
            <IoIosHelpCircleOutline />
            <li>
              Help
            </li>
          </Link>
          <Link to='/settings'>
            <IoMdSettings />
            <li>
              Settings
            </li>
          </Link>
          <Link to='/logout'>
            <IoIosLogOut />
            <li>
              Logout
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar;
