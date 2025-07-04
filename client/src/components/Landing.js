import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // import css

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="card">
        <h1>Welcome To Authenticate Yourself!</h1>
        <p>Choose an option to continue:</p>
        <div className="btn-group">
          <button onClick={() => navigate("/login")} className="btn login-btn">
            Login
          </button>
          <button onClick={() => navigate("/register")} className="btn register-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
