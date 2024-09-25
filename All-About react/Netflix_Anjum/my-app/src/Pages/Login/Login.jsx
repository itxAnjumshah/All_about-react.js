import React, { useState } from "react";
import "./Loginstyle.css";
import Logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { login,  signup,  } from "../../Firebase";

const Login = () => {
  const [signstate, setsignstate] = useState("Sign In");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();

setloading(true)

    if (signstate === "sign in") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setloading(false);
  };

  return (
    loading  ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
    :
    <div className="login">
      <img src={Logo} alt="" className="loginlogo" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              placeholder="Enter your name"
              required
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your Password"
            required
            maxLength={7}
          />
          <button onClick={user_auth} type="submit">
            {signstate}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setsignstate("Sign Up");
                }}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setsignstate("Sign In");
                }}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
