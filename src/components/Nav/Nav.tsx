import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/logo.png'
import formLogo from '../../assets/form-logo.png'

const Nav = () => {
  return (
    <div className='nav-bar'>
        <p className='nav-title'>Where's Walter</p>
        <img src={logo} className='logo' />
        <Link to='/form' >
          <img src={formLogo} className='form-logo' />
        </Link>
    </div>
  )
}

export default Nav
