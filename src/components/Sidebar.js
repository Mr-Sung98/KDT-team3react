import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar, categories }) => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);  // 사이드바 참조

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);  // 카테고리 클릭 시 해당 경로로 이동
    toggleSidebar();  // 사이드바 닫기
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 사이드바 외부 클릭 시 사이드바 닫기
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();  // 사이드바 닫기
      }
    };

    // 페이지에서 클릭할 때마다 handleClickOutside 호출
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <h2>카테고리</h2>

      {/* 로그인/회원가입 섹션 */}
      <div className="sidebar-section">
        <button className="login-button" onClick={() => { navigate('/login'); toggleSidebar(); }}>로그인</button>
        <button className="signup-button" onClick={() => { navigate('/signup'); toggleSidebar(); }}>회원가입</button>
      </div>

      {/* 카테고리 섹션 */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="category-button"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
