import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const NewsList = () => {
  const { categoryName } = useParams();  // URL에서 categoryName 파라미터를 받아옴
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortKey, setSortKey] = useState('cnt');
  const navigate = useNavigate();

  useEffect(() => {
    // 더미 카테고리 데이터
    const dummyCategories = ['경제', 'IT', '스포츠', '문화', '정치'];
    setCategories(dummyCategories);

    // 더미 뉴스 데이터
    const dummyData = [
      { id: 1, title: '뉴스 제목 1', summary: '뉴스 요약 1', image: '/images/news1.jpg', cnt: 160, all_cnt: 300, category: '경제' },
      { id: 2, title: '뉴스 제목 2', summary: '뉴스 요약 2', image: '/images/news2.jpg', cnt: 200, all_cnt: 450, category: 'IT' },
      { id: 3, title: '뉴스 제목 3', summary: '뉴스 요약 3', image: '/images/news3.jpg', cnt: 150, all_cnt: 320, category: '경제' },
      { id: 4, title: '뉴스 제목 4', summary: '뉴스 요약 4', image: '/images/news4.jpg', cnt: 120, all_cnt: 220, category: '스포츠' },
      { id: 5, title: '뉴스 제목 5', summary: '뉴스 요약 5', image: '/images/news5.jpg', cnt: 180, all_cnt: 400, category: '문화' },
    ];
    setNews(dummyData);
  }, []);

  // 카테고리별 뉴스 필터링
  const filteredNews = categoryName ? news.filter(item => item.category === categoryName) : news;

  const getSortedNews = () => {
    return [...filteredNews].sort((a, b) => b[sortKey] - a[sortKey]);
  };

  const sortedNews = getSortedNews();

  const handleItemClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="main-container">
      <h1>{categoryName ? `${categoryName} 뉴스` : '뉴스 갤러리'}</h1>
      <div className="news-gallery">
        {sortedNews.map((item) => (
          <div key={item.id} className="news-item" onClick={() => handleItemClick(item.id)}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
