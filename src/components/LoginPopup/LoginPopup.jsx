import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [formType, setFormType] = useState("Sign Up");

  return (
    <div className="login-popup">
    <div>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{formType}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            aria-label="Close popup"
          />
        </div>
        <div className="login-popup-inputs">
          {formType === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {formType === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" id="terms-checkbox" required />
          <label htmlFor="terms-checkbox">
            By continuing, I agree to the terms of use and privacy policy
          </label>
        </div>
        {formType === "Login" ? (
          <p>
            Create a New Account?
            <span onClick={() => setFormType("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setFormType("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
    </div>  
  );
};

export default LoginPopup;
