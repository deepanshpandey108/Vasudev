import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="navbar-left">
                <a href="#" class="navbar-logo"><img className='logo' height={80} src="./logo.jpeg" alt="" /></a>
            </div>
            <div class="navbar-right">
              <NavLink to= "/"> <div class="nav-link">Home</div> </NavLink>
              <NavLink to= "/data"> <div class="nav-link">Data</div> </NavLink>
              <NavLink to= "/login"> <div class="nav-link">About Us</div> </NavLink>
              <NavLink to= "/login"> <div class="nav-link">Transparency</div> </NavLink>
              <NavLink to= "/login"> <div class="nav-link">Services</div> </NavLink>
              <NavLink to= "/login"> <button>Login</button> </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
