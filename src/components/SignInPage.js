import React from "react";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Signin to your PopX account</h1>
        <p className="signin-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <label className="signin-label">Email Address</label>
        <input type="email" className="signin-input" placeholder="Enter email address" />
        <label className="signin-label">Password</label>
        <input type="password" className="signin-input" placeholder="Enter password" />
        <button className="signin-button">Login</button>
      </div>
    </div>
  );
};

export default SignInPage;