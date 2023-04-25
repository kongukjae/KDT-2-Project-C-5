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
      <main>
        <MainFeedContents/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default mainFeed;