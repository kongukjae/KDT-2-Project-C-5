import React from 'react';
import AlarmForm from '../components/AlarmForm';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import Hamburger from '../components/Hamburger';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const headerStyle = {
  display: 'flex',
}

const mainFeed = () => {
  return (
    <div>
      <header style={headerStyle}>
        <AlarmForm/>
        <BookStagramTopLogo/>
        <Hamburger/>
      </header>

      {/* main 컨텐츠 부분은 NavBar 컴포넌트에서 담당한다. */}

      <footer>
        <Router>
          <NavBar/>
        </Router>
      </footer>
    </div>
  );
};

export default mainFeed;