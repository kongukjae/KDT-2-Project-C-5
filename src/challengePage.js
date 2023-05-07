import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Timer from '../components/Timer';
import DailyCheck from '../components/DailyCheck';
import NavBar from './NavBar'

const challengePage = () => {

  const [timer, setTimer] = useState(<Timer/>);
  const [dailyCheck, setDailyCheck] = useState('');

  const onClickTimer = () => {
    setTimer(<Timer/>);
    setDailyCheck('');
  };

  const onClickDailyCheck = () => {
    setDailyCheck(<DailyCheck/>);
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
        <div style={tabStyle} onClick={onClickTimer}><b>독서 타이머</b></div>
        <div style={tabStyle} onClick={onClickDailyCheck}><b>출석 체크</b></div>
      </nav>
      <main>
        {timer}
        {dailyCheck}
      </main>
      <footer>
        {/* <NavBar/> */}
      </footer>
    </div>
  );
};

export default challengePage;