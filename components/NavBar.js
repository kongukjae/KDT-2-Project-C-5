import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartScreen from '../src/startScreen';
import LoginPage from '../src/login';
import MainFeed from '../src/mainFeed';
import MainFeedContents from './MainFeedContents';

const navBarStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
  padding: '0'
};

const Page1 = () => <h1>page 1</h1>;
const Page2 = () => <h1>page 2</h1>;
const Page3 = () => <h1>page 3</h1>;
const Page4 = () => <h1>page 4</h1>;
const Page5 = () => <h1>page 5</h1>;

const NavBar = () => {
  return (
    <nav>
      <ul style={navBarStyle}>
        <li>
          <Link to="/">MainFeedContents</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
        <li>
          <Link to="/page3">page3</Link>
        </li>
        <li>
          <Link to="/page4">page4</Link>
        </li>
        <li>
          <Link to="/page5">page5</Link>
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