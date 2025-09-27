import React, { useState } from "react";
import "../Css/SignUp.css";
import { Link } from "react-router-dom";
import eyeIcon from "../images/show.png";
import eyeSlashIcon from "../images/hidden.png"; 
import userIcon from "../images/user.png";
const SignUp = ({ togglePage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign Up with\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
              <div className="input-icon">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}required/>
              <img src={userIcon} alt="User" className="icon-left" />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
              <div className="input-icon">
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <img src={showPassword ? eyeSlashIcon : eyeIcon} alt="Toggle" className="icon-right" onClick={() => setShowPassword(!showPassword)} />
            </div>
          </div>
          <button className="signUp" type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="toggle-link" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
