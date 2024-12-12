import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // BrowserRouter 제거
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Sidebar from './components/Sidebar'; // 사이드바 컴포넌트 import
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
  const navigate = useNavigate(); // navigate 훅 사용

  useEffect(() => {
    // 더미 카테고리 데이터
    const dummyCategories = ['경제', 'IT', '스포츠', '문화', '정치'];
    setCategories(dummyCategories);
  }, []);

  // 사이드바 열기/닫기
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 뉴스 번역 & 산업 시세 분석 클릭 시 홈으로 이동
  const handleTitleClick = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          뉴스 번역 & 산업 시세 분석
        </h1>
      </header>

      {/* 사이드바 컴포넌트 */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        categories={categories}
      />

      {/* 사이드바 열기 버튼 (햄버거 메뉴) */}
      {!isSidebarOpen && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          &#9776; {/* 햄버거 메뉴 아이콘 */}
        </button>
      )}

      {/* 라우팅 설정 */}
      <div className={`news-list ${isSidebarOpen ? 'news-list-with-sidebar' : ''}`}>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryName" element={<NewsList />} /> {/* 카테고리별 뉴스 페이지 */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
