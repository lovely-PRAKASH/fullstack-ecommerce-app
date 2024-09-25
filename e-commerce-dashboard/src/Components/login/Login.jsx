import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Reset any previous errors

    axios
      .post(import.meta.env.VITE_API_URL + "/login", credentials)
      .then((res) => {
        if (res.data.success) {
          console.log("Login successful");
          navigate("/");
          // Optionally store token or user details in localStorage
        } else {
          setError("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setError(err.response.data.message); // Handle specific error
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false); // Stop loading when request finishes
      });
  };

  return (
    <div className="container login">
      <div className="mt-5 loginPage">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="btn btn-success mt-3"
            disabled={loading} fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Login"}{" "}
            {/* Show loader when submitting */}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
