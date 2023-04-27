import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainFeedContents from './MainFeedContents';

const navBarStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
  padding: '0'
};

// 테스트를 위한 임시 코드
const Page1 = () => <h1>실시간, 인기 리뷰 피드</h1>;
const Page2 = () => <h1>챌린지 피드</h1>;
const Page3 = () => <h1>글작성 피드</h1>;
const Page4 = () => <h1>검색 피드</h1>;
const Page5 = () => <h1>내 정보 피드</h1>;

const NavBar = () => {
  return (
    <nav>
      <ul style={navBarStyle}>
        <li>
          <Link to="/">인기/실시간</Link>
        </li>
        <li>
          <Link to="/page2">챌린지</Link>
        </li>
        <li>
          <Link to="/page3">글작성</Link>
        </li>
        <li>
          <Link to="/page4">검색</Link>
        </li>
        <li>
          <Link to="/page5">내정보</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainFeedContents/>} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
        <div>
          <NavBar />
        </div>
      </Router>
    </div>
    
  );
};

export default App;