import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
// import './static/Login.css'; 

const Test = () => {
    const [active, setActive] = useState('login');
    const { setUserData } = useData();
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignUp = async(e) => {
      e.preventDefault();

      if (!nickname || !email || !password || !confirmPassword) {
        alert('모든 필드를 채워야 합니다.');
        return;
      }

      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const newUser = { nickname, email, password };
      // console.log(newUser)
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          alert('회원가입이 완료되었습니다.');
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
          setNickname('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        });
    };

    const handleLogin = async(e) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/confirm', { email, password })
        .then((response) => {
          console.log('로그인 성공:', response.data);
          setUserData(response.data);
          navigate('/home');
        })
        .catch((error) => {
          if (error.response) {
            console.error('로그인 실패:', error.response.data);
            alert(error.response.data.error || '로그인에 실패했습니다.');
          } else if (error.request) {
            console.error('No response received:', error.request);
            alert('서버로부터 응답을 받지 못했습니다.');
          } else {
            console.error('Error', error.message);
            alert('요청 중 오류가 발생했습니다.');
          }
        })
        .finally(() => {
          setIsLoading(false);
          setEmail('');
          setPassword('');
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
}

export default Test;
