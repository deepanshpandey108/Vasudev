import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="navbar-left">
                <a href="#" class="navbar-logo">YourLogo</a>
            </div>
            <div class="navbar-right">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">About Us</a>
                <a href="#" class="nav-link">Data</a>
                <a href="#" class="nav-link">Transparency</a>
                <a href="#" class="nav-link">Services</a>
                <button class="log">Login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
