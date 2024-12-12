import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // 사이드바 컴포넌트 import
import '../App.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
  const [categories, setCategories] = useState(['경제', 'IT', '스포츠', '문화', '정치']);
  const [currentCategory, setCurrentCategory] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const dummyData = {
        id,
        title: `뉴스 제목 ${id}`,
        content: `뉴스 상세 내용 ${id}`,
        impactAnalysis: `산업 시세 분석 ${id}`,
        image: `/images/news${id}.jpg`
      };
      setNews(dummyData);
    };
    fetchData();
  }, [id]);

  if (!news) return <div>로딩 중...</div>;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열기/닫기

  };

  return (
    <div className="main-container">
      {/* 사이드바 컴포넌트 사용 */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        categories={categories}
        currentCategory={currentCategory}
        handleCategoryClick={setCurrentCategory}
      />
      
      {/* 사이드바 열기 버튼 (햄버거 메뉴) */}
      {!isSidebarOpen && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          &#9776; {/* 햄버거 메뉴 아이콘 */}
        </button>
      )}

      <div className={`news-detail ${isSidebarOpen ? 'news-detail-with-sidebar' : ''}`}>
        <h2>{news.title}</h2>
        <p>{news.content}</p>
        <img src={news.image} alt={news.title} className="news-detail-img" />
        <h3>산업 시세 분석</h3>
        <p>{news.impactAnalysis}</p>
        <button 
          className="w-btn-blue-outline"
          onClick={() => navigate(-1)}>이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default NewsDetail;
