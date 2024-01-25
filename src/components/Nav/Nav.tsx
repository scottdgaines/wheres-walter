import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='nav-bar'>
      <p className='nav-title'>Where's Walter</p>
      <img src={logo} className='logo' />
    </div>
  )
}

export default Nav
