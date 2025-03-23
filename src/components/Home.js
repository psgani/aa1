import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./Authpage.css";
const AuthPage = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="create-button" onClick={()=>navigate('/signup')}>Create Account</button>
        {/* <Link to ='signin' className="login-button">Already Registered? Login</Link> */}
        <button className="login-button" onClick={() => navigate('/signin')}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default AuthPage;
