// 첼린지 페이지 내에 사용되는 출석체크 컴포넌트이다.
import React from 'react';

const DailyCheck = () => {

  const dailyCheckStyle = {
    width: '',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={dailyCheckStyle}>
      <h1>
        출석체크
      </h1>
    </div>
  );
};

export default DailyCheck;