import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import Hamburger from '../components/Hamburger';
import NavBar from '../components/NavBar';
import MainFeedContents from '../components/MainFeedContents';

const headerStyle = {
  display: 'flex',
}

const mainFeed = () => {
  return (
    <div>
      <header style={headerStyle}>
        <BookStagramTopLogo/>
        <Hamburger/>
      </header>

      {/* main 컨텐츠 부분은 NavBar 컴포넌트에서 담당한다. */}

      <footer>
        <NavBar/>
      </footer>
    </div>
  );
};

export default mainFeed;