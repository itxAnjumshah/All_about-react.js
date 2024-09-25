import React from "react";
import "../Pages/CSS/Login.css";

export default function LoginSignup() {
  return (
    <div className="Loginsignup">
      <div className="loginsinup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your  Name" required />
          <input
            type="email"
            placeholder="Enter Your  Email Address"
            required
          />
          <input type="password" placeholder="Enter Your  password" required />
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account ? <span>Login here</span>{" "}
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>by Continuing, i agree to the term of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
