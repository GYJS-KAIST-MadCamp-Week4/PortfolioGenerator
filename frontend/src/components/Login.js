import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import './static/Login.css'; 
import axios from 'axios';

const Login = () => {
    const [active, setActive] = useState('login');
    const {userData, setUserData } = useData();
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = () => {
      if (!nickname || !email || !password || !confirmPassword) {
        alert('모든 필드를 채워야 합니다.');
        return;
      }
    
      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const newUser = { nickname, email, password };
      axios.post('./signup', newUser)
        .then((response) => {
          console.log(response.data);
          setUserData(newUser);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleLogin = (e) => {
      e.preventDefault();

      if (!email || !password) {
        alert('모든 필드를 채워야 합니다.');
        return;
      }

      axios.post('./confirm', { email, password })
      .then((response) => {
        console.log('로그인 성공:', response.data);
        setUserData(response.data);
        navigate('/home');
      })
      .catch((error) => {
        console.error('로그인 실패:', error.response.data);
        alert('로그인에 실패했습니다.');
      });

    };

    return (
      <div className="split-screen">
        <div className="left-side">
          <div className="background-image"></div> 
        </div>
        <div className="right-side">
          <div className="header-text">HAEJWO</div> 
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
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"  onSubmit={handleLogin}>Login</button>
              </form>
            ) : (
              <form className="signup-form">
                <input
                  type="text"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="button" onClick={handleSignUp}>
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
}

export default Login;
