import React, { useState, useEffect } from "react";
import "../Css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../images/user.png";
import { setAuthToken, getAuthToken } from "../utils/auth";
import eyeIcon from "../images/show.png"; 
import eyeSlashIcon from "../images/hidden.png"; 

const Login = () => {
const navigate = useNavigate();
const [form, setForm] = useState({ username: "", password: "", remember: false });
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);

  useEffect(() => {
    const existing = getAuthToken();
    if (existing) {
      setAuthToken(existing, { persist: true });
    }
  }, []);

  // useEffect(() => {
  //   document.body.classList.add("bg-login-hero");
  //   return () => document.body.classList.remove("bg-login-hero");
  // }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { username, password, remember } = form;
    if (!username || !password) return setError("Please enter both username and password.");

    setIsLoading(true);
    try {
      const base = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const res = await axios.post(`${base}/api/login`, { username, password });

      console.log("Login response data:", res?.data);

      const token = res?.data?.token;
      if (!token) throw new Error("No token returned from server");

      setAuthToken(token, { persist: !!remember });

      console.log("Stored token:", getAuthToken());

      setSuccess("Logged in — redirecting...");
      setTimeout(() => navigate("/"), 700);
    } catch (err) {
      console.error("Login error:", err);
      setError(err?.response?.data?.message || err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-component">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-icon">
              <input type="text" placeholder="Username" name="username" value={form.username} onChange={handleChange}/>
              <img src={userIcon} alt="User" className="icon-left" />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-icon">
              <input placeholder="Password" name="password" value={form.password} onChange={handleChange} />
              <img src={eyeIcon} alt="Toggle" className="icon-right"/>
            </div>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe"/>
            <label htmlFor="rememberMe" style={{color:"#444"}}>Remember Me</label>
          </div>
          <button type="submit" className="login">Login</button>
        </form>
        <p>Don't have an account?{" "}<Link className="toggle-link" to="/signup">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;