import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([
    '경제',
    '스포츠',
    '정치',
    '기술',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('경제');
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // 선택된 카테고리의 콘텐츠 가져오기
    const fetchContents = () => {
      const dummyData = {
        경제: ['경제 뉴스 1', '경제 뉴스 2'],
        스포츠: ['스포츠 뉴스 1', '스포츠 뉴스 2'],
        정치: ['정치 뉴스 1', '정치 뉴스 2'],
        기술: ['기술 뉴스 1', '기술 뉴스 2'],
      };
      setContents(dummyData[selectedCategory]);
    };
    fetchContents();
  }, [selectedCategory]);

  return (
    <div className="categories">
      <h1>카테고리별 뉴스</h1>
      <div className="category-labels">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="category-contents">
        <h2>{selectedCategory} 관련 뉴스</h2>
        <ul>
          {contents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
