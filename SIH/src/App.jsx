import React from 'react';
import './App.css'
import Landing from './Landing';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Moniter from './Moniter';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/moniter",
      element:<Moniter/>
    }
  ])



  return (
    <div className="App bg">

      <RouterProvider router={router}/>

      {/* // <Landing/> */}
      {/* <LoginPage/> */}
      {/* <Moniter/>  */}

    </div>
  );
}

export default App;
