// ! 팔로잉(구독자) 리스트 컴포넌트
import React from 'react';
import ImgUserPicture from './ImgUserPicture'
import UserName from './UserName'
import ButtonCancle from './ButtonCancle';
const conStyle = {
  height: '631px'
}
const ListStyle = {
  width: '357px',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px'
}
const FollowingList = () => {
  return (
    <div style={conStyle}>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
    </div>
  );
};
export default FollowingList;