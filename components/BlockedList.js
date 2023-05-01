import React from 'react';
import ImgUserPicture from '../components/ImgUserPicture';
import UserName from '../components/UserName';
import ButtonBlockedCancle from '../components/ButtonBlockedCancle'

const ListStyle = {
  width: '357px',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px'
}

const BlockedList = () => {
  return (
    <div style={ListStyle}>
      <ImgUserPicture/>
      <UserName/>
      <ButtonBlockedCancle/>
    </div>
  );
};

export default BlockedList;