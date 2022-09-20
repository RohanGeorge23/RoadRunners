import React from 'react'
import logesh from './assets/logo.png'

import { NavLink } from 'react-router-dom'

import '../App.css'

const Header = () => {
  return (
    <div className='headerBoss'>
        <div>
            <img src={logesh}  className='logo' alt='logo'/>
        </div>
        <div className='components'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='services'>Services</NavLink>
            <NavLink to='galler'>Gallery</NavLink>
            <NavLink to='blogs'>Blogs</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
            <a href='https://forms.gle/UJBkBrVVXY4w7tPw6' target="_blank" rel="noreferrer" className="bookStar">Book Now</a>

        </div>
    </div>
  )
}

export default Header
