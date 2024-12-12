import React, { useState } from 'react';

const MyPage = () => {
  // 임시 사용자 정보 (백엔드와 연동 시 실제 데이터로 변경)
  const [user, setUser] = useState({
    name: '홍길동',
    id: 'hong@example.com',
    phone: '010-1234-5678',
    gender: '남성',
    interests: ['경제', 'IT'],
  });

  return (
    <div className="mypage-container">
      <h2>내 정보</h2>

      {/* 사용자 정보 표시 */}
      <div className="mypage-user-info">
        <p><strong>이름:</strong> {user.name}</p>
        <p><strong>아이디:</strong> {user.id}</p>
        <p><strong>전화번호:</strong> {user.phone}</p>
        <p><strong>성별:</strong> {user.gender}</p>
        <p><strong>관심 카테고리:</strong> {user.interests.join(', ')}</p>
      </div>

      <p>추후 백엔드와 연동하여 사용자의 정보가 동적으로 표시됩니다.</p>
    </div>
  );
};

export default MyPage;
