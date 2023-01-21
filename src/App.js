import React from 'react';
import './App.css';
// import Appbar from './Header/Header';
import { Login } from './Login/Login';
import  {Register}  from './Register/Register';
import Navigation from './Navigation';
import { Home } from './Home/Home';
// import ResponsiveAppBar from './materialUI/ResponsiveAppBar';
import Main from './materialUI/Main'
function App() {
  return (
    <div>
      {/* <Main /> */}
      {/* <ResponsiveAppBar/> */}
      <Navigation/>
      {/* <Home /> */}
      {/* <Register/> */}
      {/* <h1>Hi, Riya</h1>
      <h1>Hello, Manyu</h1> */}
    </div>
  );
}

export default App;
