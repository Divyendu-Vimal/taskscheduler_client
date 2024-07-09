import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/tasks");
      toast.success("Login Successful");
    } catch (error) {
      toast.error("Error logging in");
    }
  };

  return (
    <div className="auth-container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="auth-form p-4 rounded">
        <h2 className="text-center mb-4 text-white">Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
