import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import './static/Login.css'; 

const Login = () => {
  const [active, setActive] = useState('login');
  const { setUserData } = useData();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!nickname || !email || !password || !confirmPassword) {
      alert('모든 필드를 채워야 합니다.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setPasswordError('');
    }

    const newUser = { nickname, email, password };

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert('회원가입이 완료되었습니다.');
        setIsSignUpComplete(true); // 회원가입 완료 상태를 true로 설정
        setActive('login'); // 로그인 폼으로 전환
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || '회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert(error.message);
    } finally {
      setIsLoading(false);
      setNickname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const handleLogin = async (e) => {
  e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('로그인 성공:', data);
        setUserData(data);
        navigate('/home');
      } else {
        throw new Error(data.error || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      alert(error.message);
    } finally {
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }
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
          {active === 'login' || isSignUpComplete ? (
            <form className="login-form" onSubmit={handleLogin}>
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
              <button type="submit">Login</button>
            </form>
          ) : (
            <form className="signup-form" onSubmit={handleSignUp}>
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
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordError('');
                }}
              />
              {passwordError && <div className="password-error">{passwordError}</div>}
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
