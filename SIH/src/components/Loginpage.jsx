import React from 'react'
import Login from './Login';
import './LoginPage.css'
const Loginpage = () =>{
    return (
      <div className="LoginPage">
        <div className="background-pattern"></div>
        
        <div className='left'>
          <img src="https://e1.pxfuel.com/desktop-wallpaper/470/190/desktop-wallpaper-women-protection-gradient-vector-icon-for-dark-theme-protect-girls-against-violence-female-empowerment-women-safety-thin-line-color-symbol-modern-style-pictogram-vector-isolated-outline-drawing-thumbnail.jpg" alt="" />
        </div>
        <div className="right">
          <Login/>
        </div>
  
      </div>
    );
  }

export default Loginpage