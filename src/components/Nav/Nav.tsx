import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <p className='nav-title'>Where's Walter</p>
        <img src={logo} className='logo' />
      </Link>
    </div>
  )
}

export default Nav
