import React from 'react';
import NavBar from './JK-NavBar';
import TopMenu from './JK-TopMenu';
import MainFeedContents from '../components/JK-MainFeedContents';

const headerStyle = {
  display: 'flex',
  justifyContent:"center",
  width:"100%"
}


//메인 피드 페이지를 담당하는 컴포넌트
//수정 : 김동주
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