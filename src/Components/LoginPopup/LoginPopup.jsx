import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-pop-titile">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currentState === "signUp" ? "Create Accout" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By contiunein, i agreee to the terms of use & privacy policy</p>
        </div>
        {currentState === "login" ? (
          <p>
            Create new Account?{" "}
            <span onClick={() => setCurrentState("signUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
