import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client에서 createRoot 가져오기
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot로 루트 생성
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
