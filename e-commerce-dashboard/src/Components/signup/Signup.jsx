import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);

    axios
      .post(import.meta.env.VITE_API_URL + "/register", formData)
      .then((res) => {
        if (res.data.success) {
          console.log("Registration successful");
          localStorage.setItem("isRegistered", "true"); // Set a flag in localStorage
          navigate("/login");
          // Handle successful registration, and redirect the user
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.message); // Show the duplicate email error
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="container signup">
      <div className="mt-5 signupPage">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="btn btn-primary mt-3" fullWidth>
            Signup
          </Button>
        </form>
        <p>Already have an Account?</p>
        <Link to="/login">
          <Button type="submit" className="d-flex btn btn-success mt-3 login-btn" fullWidth>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
