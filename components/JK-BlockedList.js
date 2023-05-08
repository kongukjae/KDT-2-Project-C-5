// 차단목록 컴포넌트에 사용되는 리스트 컴포넌트이다.
import React from 'react';
import ImgUserPicture from './JK-ImgUserPicture';
import UserName from './JK-UserName';
import ButtonBlockedCancle from './JK-ButtonBlockedCancle'

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