import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import './static/Login.css'; 

function Login() {
    const [active, setActive] = useState('login');


    return (
      <div className="split-screen">
        <div className="left-side">
          <div className="background-image"></div> 
        </div>
        <div className="right-side">
          <div className="login-container">
            <div className="login-header">
              <button 
                className={`header-button ${active === 'login' ? 'active' : ''}`}
                onClick={() => setActive('login')}
              >
                Login
              </button>
              <button 
                className={`header-button ${active === 'signup' ? 'active' : ''}`}
                onClick={() => setActive('signup')}
              >
                Sign Up
              </button>
            </div>
            {active === 'login' ? (
              <form className="login-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            ) : (
              <form className="signup-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
}

export default Login;
