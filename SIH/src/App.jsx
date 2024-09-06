import React from 'react';
import './App.css'
import Landing from './Landing';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App bg">
      {/* <Landing/> */}
      <LoginPage/>

    </div>
  );
}

export default App;
