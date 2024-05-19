import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import formIcon from '../../assets/form-logo.png';
import homeIcon from '../../assets/home-icon.png';

const Nav = () => {
  const location = useLocation();
  const dynamicIcon = location.pathname === '/' ? formIcon : homeIcon;
  const dynamicPath = location.pathname == '/' ? '/form' : '/';
  const toolTip = location.pathname == '/' ? 'Create New Notice' : 'Return Home';

  return (
    <div className='nav-bar'>
        <div className='logo-container'>
          <div>
            <p className='nav-title'>Where's Walter</p>
            <p className='tagline'>Bringing Furry Friends Home</p>
          </div>
          <img src={logo} className='logo' />
        </div>
        <div className='tool-tip'>
        <p className='tool-tip-text'>{toolTip}</p>
          <Link to={dynamicPath} >
              <img src={dynamicIcon} className='icon'/>
          </Link>
        </div>
    </div>
  )
};

export default Nav
