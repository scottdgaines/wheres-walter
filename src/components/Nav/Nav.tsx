import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/logo.png'
import formIcon from '../../assets/form-logo.png'
import homeIcon from '../../assets/home-icon.png'

const Nav = () => {
  const location = useLocation()

  const dynamicIcon = location.pathname == '/form' ? homeIcon : formIcon
  const dynamicPath = location.pathname == '/form' ? '/' : '/form'
  const toolTip = location.pathname == '/' && <p className='tool-tip-text'>Create New Notice</p>

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
          {toolTip}
          <Link to={dynamicPath} >
              <img src={dynamicIcon} className='icon'/>
          </Link>
        </div>
    </div>
  )
}

export default Nav
