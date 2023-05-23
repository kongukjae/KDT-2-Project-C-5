// 챌린지 페이지 컴포넌트이다.
// ! navbar 컴포넌트를 사용하는 과정에서 <Router></Router>태그로 감싸주지 않으면 오류 발생
import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Timer from '../components/Timer';
import DailyCheck from '../components/DailyCheck';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar'

const challengePage = () => {
  // 독서 타이머, 출석 체크 클릭 시 색상 변경
  const [selectedtab, setSelectedtab] = useState('독서 타이머');
  const handleMouseClick = (tab) => {
    setSelectedtab(tab);
  }

  const textStyle = (tab) => {
    return {
      color: selectedtab === tab ? 'grey' : 'black',
      cursor: 'pointer'
    }
  }

  // 타이머, 출석체크를 구분지어 화면에서 보여지기 위해 useState활용
  // 챌린지 페이지 처음 렌더링 시 타이머가 먼저 보이게 설정
  const [timer, setTimer] = useState(<Timer/>);
  // 처음 렌더링 시 출석체크는 보이지 않는다.
  const [dailyCheck, setDailyCheck] = useState('');
  // 타이머를 클릭했을 때 실행되는 함수
  const onClickTimer = () => {
    // 타이머는 보이고 출석체크는 보이지 않게('')처리
    setTimer(<Timer/>);
    setDailyCheck(null);
    handleMouseClick('독서 타이머')
  };
  // 출석체크를 클릭했을 때 실행되는 함수
  const onClickDailyCheck = () => {
    // 출석체크는 보이고 타이머는 보이지 않게('')처리
    setDailyCheck(<DailyCheck/>);
    setTimer(null);
    handleMouseClick('출석 체크')
  };

  
  const mainCss = {
    backgoundColor: '#D6E8E4'
  }
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  }

  return (
    <div>
      <header>
        <TopMenu/>
      </header>
      <nav style={navStyle}>
        <div style={textStyle('독서 타이머')} onClick={onClickTimer}><b>독서 타이머</b></div>
        <div style={textStyle('출석 체크')} onClick={onClickDailyCheck}><b>출석 체크</b></div>
      </nav>
      <hr/>
      <main>
        {timer}
        {dailyCheck}
      </main>
      <footer>
        <NavBar/>
      </footer>
    </div>
  );
};

export default challengePage;