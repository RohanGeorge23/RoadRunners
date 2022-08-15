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
        {/* <div className='companyName'>
              RoadRunners
        </div> */}
        <div className='components'>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='services'>Services</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Header