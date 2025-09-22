import React, { useState } from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";
import userIcon from "../images/user.png";
import eyeIcon from "../images/show.png"; 
import eyeSlashIcon from "../images/hidden.png"; 

const Login = ({ togglePage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  };

  return (
    <div className="login-component">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-icon">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <img src={userIcon} alt="User" className="icon-left" />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-icon">
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <img src={showPassword ? eyeSlashIcon : eyeIcon} alt="Toggle" className="icon-right" onClick={() => setShowPassword(!showPassword)} />
            </div>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
            <label htmlFor="rememberMe" style={{color:"#444"}}>Remember Me</label>
          </div>
          <button type="submit" className="login">Login</button>
        </form>
        <p>Don't have an account?{" "}<Link className="toggle-link" to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;