import React, { useState } from 'react';
import TopMenu from './TopMenu';
import ImgUserPicture from './ImgUserPicture';
import UserName from './UserName';
import AlarmOnPicture from './AlarmOnPicture';
import AlarmOffPicture from './AlarmOffPicture';

const conStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const mainStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}

const AlarmSetting = () => {
  // 알람 버튼 하나로 누를 때마다 끄고 켜지는 로직을 생각해보자..
  // 상태 반전이니 true false 생각
  const [alarmOn, setAlarmOn] = useState(true)
  
  const handleAlarmToggle = () => {
    // 현재 알람 상태를 반전시켜준다.
    setAlarmOn(!alarmOn)
  }

  return (
    <div style={conStyle}>
      <header style={headerStyle}>
        <TopMenu/>
      </header>
      <nav>
        알림 설정
      </nav>
      <main style={mainStyle}>
        <ImgUserPicture/>
        <UserName/>
        {/* 삼항연산자를 사용하여 true, false 시 조건 사용 */}
        <div onClick={handleAlarmToggle}>{alarmOn ? <AlarmOnPicture/>:<AlarmOffPicture/>}</div>
      </main>
      
    </div>
  );
};

export default AlarmSetting;