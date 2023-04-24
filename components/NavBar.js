import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainFeed from '../src/mainFeed';
import Login from '../src/login';

const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;
const Page3 = () => <div>Page 3</div>;
const Page4 = () => <div>Page 4</div>;

const NavBar = () => {
  const navbarStyle = {
    width: '390px',
    height: '106px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid black'
  };

  return (
    <div>
      <BrowserRouter basename="/myapp">
        <div style={navbarStyle}>
          <div><Link to="/">tap1</Link></div>
          <div><Link to="/page1">tap2</Link></div>
          <div><Link to="/page2">tap3</Link></div>
          <div><Link to="/page3">tap4</Link></div>
          <div><Link to="/page4">tap5</Link></div>
        </div>
        <Routes>
          <Route exact path="/" element={<MainFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;