import React from "react";
import Signup from "../SignUp/Signup.jsx";
import Login from "../LogIn/Login.jsx";
import '../../CSS/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <h3> LOGO </h3>
        <ul className="nav">
            <li className="home">Home</li>
            <li className="menu">Menu</li>
            <li className="about">About</li>
            <li className="login"><Login/></li>
            <li className="signupp"><Signup/></li>    
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
