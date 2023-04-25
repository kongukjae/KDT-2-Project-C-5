import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import Hamburger from '../components/Hamburger';
import NavBar from '../components/NavBar';

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
        <h1>main feed</h1>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default mainFeed;