import React, { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    id: '',
    password: '',
    birthdate: '',
    phone: '',
    nickname: '',
    postalCode: '',
    gender: '',
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 데이터:', form);
    // 서버에 회원가입 요청 전송
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-heading">회원가입</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-form-input-container">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="id"
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="아이디"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="birthdate"
              value={form.birthdate}
              onChange={handleChange}
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="전화번호"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              placeholder="닉네임"
              required
              className="form-style"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="우편번호"
              required
              className="form-style"
            />
          </div>
        </div>
        <div className="signup-form-gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="남성"
              checked={form.gender === '남성'}
              onChange={handleChange}
            />
            남성
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="여성"
              checked={form.gender === '여성'}
              onChange={handleChange}
            />
            여성
          </label>
        </div>
        <fieldset className="signup-form-fieldset">
          <legend className="signup-form-legend">관심 카테고리 선택</legend>
          {['경제', 'IT', '스포츠', '문화', '정치'].map((category) => (
            <label key={category} className="signup-form-category-label">
              <input
                type="checkbox"
                value={category}
                onChange={handleInterestsChange}
                className="signup-form-checkbox"
              />
              {category}
            </label>
          ))}
        </fieldset>
        <button type="submit" className="signup-form-submit-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
