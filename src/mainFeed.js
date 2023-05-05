import React from 'react';
import NavBar from './NavBar';
import TopMenu from './TopMenu';
import MainFeedContents from '../components/MainFeedContents';

const headerStyle = {
  display: 'flex',
}

const mainFeed = () => {
  return (
    <div>
      <header style={headerStyle}>
        <TopMenu/>
      </header>

      <MainFeedContents />

      <footer>
        <NavBar/>
      </footer>
    </div>
  );
};

export default mainFeed;