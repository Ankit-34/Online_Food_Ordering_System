import React, { useState } from "react";
import PopUp from "../PopUp/PopUp";
import "../../CSS/login_signup.css";
import "../SignUp/signup.css";

const Signup = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <div>
            <p className="signup" onClick={() => setShowButton(true)}>
              Signup
            </p>
            <PopUp
              trigger={showButton}
              setTrigger={setShowButton}
              title="Signup">
              <div className="popup_signup">
                <label>Name : </label>
                <input type="text" required />
              </div>
              <div className="popup_signup">
                <label>E-mail : </label>
                <input type="emial" required />
              </div>
              <div className="popup_signup">
                <label>Phone : </label>
                <input type="tel" required />
              </div>
              <div className="b_outer_s">
                <button className="b_otp_s">Create account</button>
              </div>

              <p className="donot_s">
                <p>
                  Already have an account?  
                </p>
                <a href="/#"> Login Now </a>
              </p>
            </PopUp>
      </div>
    </>
  );
};

export default Signup;
