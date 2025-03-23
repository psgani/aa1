import React from "react";
import "./SignInPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="OneBox">
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Create your PopX account</h1>
        <label className="signin-label" >Full Name<span className="required">*</span></label>
        <input type="text" className="signin-input" placeholder="Enter email Name" />
        <label className="signin-label">Phone Number<span className="required">*</span></label>
        <input type="PhoneNumber" className="signin-input" placeholder="Enter Phone Number" />
        <label className="signin-label">Email Address<span className="required">*</span></label>
        <input type="email" className="signin-input" placeholder="Enter email address" />
        <label className="signin-label">Password<span className="required">*</span></label>
        <input type="password" className="signin-input" placeholder="Enter password" />
        <label className="signin-label">Company name<span className="required">*</span></label>
        <input type="text" className="signin-input" placeholder="Enter your Company name" />
        
        <div className="radio-group">
          <label className="radio-label">Are you an Agency?<span className="required">*</span></label>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" value="yes" className="radio-input" />
              Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" className="radio-input" />
              No
            </label>
          </div>
        </div> 
        <button className="signup-button" onClick={() => navigate('/accsettings')}>Create your Account</button>
      </div>
    </div>
    </div>
    </>
  );
  
};

export default SignUpPage;