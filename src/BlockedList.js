import React from 'react';
import TopMenu from './TopMenu';
import ImgUserPicture from '../components/ImgUserPicture';
import UserName from '../components/UserName';
import ButtonBlockedCancle from '../components/ButtonBlockedCancle'

const conStyle = {
  height: '631px'
}

const ListStyle = {
  width: '357px',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px'
}
const BlockedList = () => {
  return (
    <div style={conStyle}>
      <header><TopMenu/></header>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonBlockedCancle/>
      </div>
    </div>
  );
};

export default BlockedList;