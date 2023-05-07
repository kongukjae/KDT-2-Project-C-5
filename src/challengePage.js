import React, { useState } from 'react';
import TopMenu from './TopMenu';
import NavBar from './NavBar'

const challengePage = () => {

  const [timer, setTimer] = useState('');
  const [dailyCheck, setDailyCheck] = useState('');

  const onClickTimer = () => {
    setTimer('타이머 화면');
    setDailyCheck('');
  };

  const onClickDailyCheck = () => {
    setDailyCheck('출석체크 화면');
    setTimer('');
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  }
  
  const tabStyle = {
    cursor: 'pointer'
  }

  return (
    <div>
      <header>
        <TopMenu/>
      </header>
      <nav style={navStyle}>
        <div style={tabStyle}><b>독서 타이머</b></div>
        <div style={tabStyle}><b>출석 체크</b></div>
      </nav>
      <main>

      </main>
      <footer>
        {/* <NavBar/> */}
      </footer>
    </div>
  );
};

export default challengePage;