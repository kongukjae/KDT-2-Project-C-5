// 챌린지 페이지 컴포넌트이다.
import React, { useState } from 'react';
import TopMenu from './JK-TopMenu';
import Timer from '../components/JK-Timer';
import DailyCheck from '../components/JK-DailyCheck';
import NavBar from './JK-NavBar'

const challengePage = () => {
  // 타이머, 출석체크를 구분지어 화면에서 보여지기 위해 useState활용
  // 챌린지 페이지 처음 렌더링 시 타이머가 먼저 보이게 설정
  const [timer, setTimer] = useState(<Timer/>);
  // 처음 렌더링 시 출석체크는 보이지 않는다.
  const [dailyCheck, setDailyCheck] = useState('');
  // 타이머를 클릭했을 때 실행되는 함수
  const onClickTimer = () => {
    // 타이머는 보이고 출석체크는 보이지 않게('')처리
    setTimer(<Timer/>);
    setDailyCheck('');
  };
  // 출석체크를 클릭했을 때 실행되는 함수
  const onClickDailyCheck = () => {
    // 출석체크는 보이고 타이머는 보이지 않게('')처리
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