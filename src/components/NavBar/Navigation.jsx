// import React from 'react';
import { Link } from 'react-router-dom';
import { profileConfig } from '../../config/profile';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 style={{ color: '#a8a4f4' }} className='head'>{profileConfig.name.split(' ')[1]}.</h1>
      </Link>

      <ul className="nav-menu">
        {/* <li>
          <Link to="/home">Home</Link>
        </li> */}
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact me</Link>
        </li>

      </ul>
      {/* <ThemeSwitcher /> */}
    </div>
  );
}

export default Navigation;