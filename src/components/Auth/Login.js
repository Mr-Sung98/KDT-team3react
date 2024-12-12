import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', { email, password });
    // 로그인 검증 후
    navigate('/categories'); // 카테고리 화면으로 이동
  };

  return (
    <div className="login">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            이메일:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-style"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            비밀번호:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-style"
            />
          </label>
        </div>
        <button type="submit" className="btn">로그인</button>
      </form>
    </div>
  );
};

export default Login;
