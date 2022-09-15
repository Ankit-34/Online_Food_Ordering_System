import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './component/LogIn/Login.jsx';
import BackImg from './component/BackImg/backImg.jsx';
import Signup from './component/SignUp/Signup.jsx';
import Navbar from './component/NavBar/Navbar.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <BackImg /> */}

    {/* <Login /> */}
    {/* <Signup /> */}

    <Navbar />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
