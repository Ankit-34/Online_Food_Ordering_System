import React from 'react';
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';
import '../../CSS/login_signup.css';
import "../LogIn/login.css";
// import "../../CSS/popup.css";

const Login = () => {

     const [showButton, setShowButton] = useState(false);

    return (
      <>
        <div>
              <p className="logIn" onClick={() => setShowButton(true)}>
                Login
              </p>
              <PopUp trigger={showButton} setTrigger={setShowButton} title="Login">
                <div className='popup_login'>
                  <label>Phone : </label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="b_outer">
                  <button className='b_otp'>Send One Time Password</button>
                </div>

                <p className='donot'>
                    Don't have an account? 
                    {/* <br /> */}
                    Click me
                  {/* <a href='/#'> Create One Now </a> */}
                </p>
              </PopUp>
        </div>
      </>
    );
}

export default Login;