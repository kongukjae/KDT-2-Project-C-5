import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainFeed from '../src/mainFeed';

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
      <div style={navbarStyle}>
        <div><Link to="/">tap1</Link></div>
        <div><Link to="/page1">tap2</Link></div>
        <div><Link to="/page2">tap3</Link></div>
        <div><Link to="/page3">tap4</Link></div>
        <div><Link to="/page4">tap5</Link></div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<MainFeed/>} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;