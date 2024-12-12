import React, { useState } from 'react';

const MyPage = () => {
  // 사용자 정보 상태
  const [user, setUser] = useState({
    id: 'hong@example.com',
    passwd: 'password123',
    birth: '1990-01-01',
    tel: '010-1234-5678',
    nickname: '홍길동',
    zipcode: '12345',
    gender: '남성',
    interest: 'IT, 경제',
    rdate: '2024-01-01',
    address: '서울시 강남구 역삼동',
    replycnt: 5,
    grade: 'A',
    name: '홍길동',
  });

  // 수정된 값 상태
  const [editedUser, setEditedUser] = useState({ ...user });

  // 이메일 유효성 검사 메시지
  const [emailError, setEmailError] = useState('');

  // 정보 수정 입력 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });

    // 이메일 형식 확인 (id는 이메일로 처리)
    if (name === 'id') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(value)) {
        setEmailError('유효한 이메일 형식을 입력해주세요.');
      } else {
        setEmailError('');
      }
    }
  };

  return (
    <div className="mypage-container">
      <h2 className="mypage-heading">마이페이지</h2>
      <div className="mypage-user-info">
        {/* 편집 가능한 항목 */}
        <div className="editable-field">
          <strong>아이디(이메일):</strong>
          <input
            type="email"
            name="id"
            value={editedUser.id}
            onChange={handleChange}
            className="editable-input"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="editable-field">
          <strong>비밀번호:</strong>
          <input
            type="password"
            name="passwd"
            value={editedUser.passwd}
            onChange={handleChange}
            className="editable-input"
          />
        </div>

        <div className="editable-field">
          <strong>전화번호:</strong>
          <input
            type="tel"
            name="tel"
            value={editedUser.tel}
            onChange={handleChange}
            className="editable-input"
          />
        </div>

        <div className="editable-field">
          <strong>닉네임:</strong>
          <input
            type="text"
            name="nickname"
            value={editedUser.nickname}
            onChange={handleChange}
            className="editable-input"
          />
        </div>

        <div className="editable-field">
          <strong>우편번호:</strong>
          <input
            type="text"
            name="zipcode"
            value={editedUser.zipcode}
            onChange={handleChange}
            className="editable-input"
          />
        </div>

        <div className="editable-field">
          <strong>상세 주소:</strong>
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={handleChange}
            className="editable-input"
          />
        </div>

        {/* 읽기 전용 항목 */}
        <div className="readonly-field">
          <strong>생년월일:</strong>
          <span>{user.birth}</span>
        </div>

        <div className="readonly-field">
          <strong>성별:</strong>
          <span>{user.gender}</span>
        </div>

        <div className="readonly-field">
          <strong>관심사:</strong>
          <span>{user.interest}</span>
        </div>

        <div className="readonly-field">
          <strong>가입일:</strong>
          <span>{user.rdate}</span>
        </div>

        <div className="readonly-field">
          <strong>댓글 수:</strong>
          <span>{user.replycnt}</span>
        </div>

        <div className="readonly-field">
          <strong>회원 등급:</strong>
          <span>{user.grade}</span>
        </div>

        <div className="readonly-field">
          <strong>이름:</strong>
          <span>{user.name}</span>
        </div>
      </div>
      
      {/* 수정 완료 버튼 */}
      <button
        className="mypage-form-submit-button"
        onClick={() => setUser({ ...editedUser })}
      >
        수정 완료
      </button>
    </div>
  );
};

export default MyPage;
