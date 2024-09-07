import React from 'react'
import Login from './Login';
import './LoginPage.css'
const Loginpage = () =>{
    return (
      <div className="LoginPage">
        <div className="background-pattern"></div>
        
        <div className='left'>
          <img src="logo1.jpg" alt="" />
        </div>
        <div className="right">
          <Login/>
        </div>
  
      </div>
    );
  }

export default Loginpage