import React from 'react';
import NavBar from './NavBar';
import TopMenu from './TopMenu';

const headerStyle = {
  display: 'flex',
}

const mainFeed = () => {
  return (
    <div>
      <header style={headerStyle}>
        <TopMenu/>
      </header>

      {/* main 컨텐츠 부분은 NavBar 컴포넌트에서 담당한다. */}

      <footer>
        <NavBar/>
      </footer>
    </div>
  );
};

export default mainFeed;