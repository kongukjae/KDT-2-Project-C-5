import React from 'react';
import AlarmForm from '../src/AlarmForm';
import BookStagramTopLogo from './BookStagramTopLogo';
import HambergerMenu from './HambergerMenu';
import ImgUserPicture from './ImgUserPicture';
import UserName from './UserName';
import AlarmPicture from './AlarmPicture';

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
  return (
    <div style={conStyle}>
      <header style={headerStyle}>
        <AlarmForm/>
        <BookStagramTopLogo/>
        <HambergerMenu/>
      </header>
      <nav>
        알림 설정
      </nav>
      <main style={mainStyle}>
        <ImgUserPicture/>
        <UserName/>
        <AlarmPicture/>
      </main>
      
    </div>
  );
};

export default AlarmSetting;