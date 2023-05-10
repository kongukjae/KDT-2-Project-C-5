// 챌린지 페이지에서 타이머를 담당하는 컴포넌트이다.
import React, { useState, useRef } from "react";

const timerStyle = {
  width: '',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}

const buttonStyle = {
  width: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const Timer = () => {
  // 타이머 시간 상태 관리
  const [timer, setTimer] = useState(0);
  // 타이머 시작, 멈춤 상태 관리
  const [isRunning, setIsRunning] = useState(false);
  // 타임 주기 설정을 위한 useRef사용
  const intervalRef = useRef();
  // 타이머 시작 관련 로직(onClick으로 사용된다.)
  const startTimer = () => {
    setIsRunning(true);
    // 타이머를 10ms마다 1씩 증가시킨다.
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };
  // 타이머 정지 관련 로직(onClick으로 사용된다.)
  const stopTimer = () => {
    setIsRunning(false);
    // clearInterval을 통해 중지시킨다.
    clearInterval(intervalRef.current);
  };
  // 타이머 리셋 관련 로직
  const resetTimer = () => {
    stopTimer();
    // 타이머 시간을 0으로 설정
    setTimer(0);
  };
  // 타이머의 시간 표현 방법
  const formatTime = () => {
    const getMilliseconds = `0${(timer % 100)}`.slice(-2);
    const getSeconds = `0${Math.floor(timer / 100) % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(timer / 6000)}`.slice(-2);
    return `${getMinutes} : ${getSeconds} . ${getMilliseconds}`;
  };

  return (
    <div style={timerStyle}>
      <h1>독서 타이머</h1>
      <h2>{formatTime()}</h2>
      <div style={buttonStyle}>
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
      
    </div>
  );
};

export default Timer;
