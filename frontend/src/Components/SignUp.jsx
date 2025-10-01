import React, { useState } from "react";
import "../Css/SignUp.css";
import { Link } from "react-router-dom";
import eyeIcon from "../images/show.png";
import eyeSlashIcon from "../images/hidden.png"; 
import userIcon from "../images/user.png";
import axios from "axios";
const SignUp = ({ togglePage }) => {
  const [showPassword, setShowPassword] = useState(false);
   const [register, setRegister] = useState({
    first_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", register);
    try {
      const base = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.post(`${base}/api/register`, register);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration error:", error);

    }
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
              <div className="input-icon">
              <input type="text" placeholder="Username" name="first_name" value={register.first_name} onChange={handleChange}/>
              <img src={userIcon} alt="User" className="icon-left" />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
              <div className="input-icon">
              <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={register.password} onChange={handleChange} />
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
