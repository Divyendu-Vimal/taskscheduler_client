import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
        username,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/tasks");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="auth-container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="auth-form p-4 rounded">
        <h2 className="text-center mb-4 text-white">Sign Up</h2>
        <div className="mb-3">
          <label className="form-label text-white">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 rounded-pill">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
