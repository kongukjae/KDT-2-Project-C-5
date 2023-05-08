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
// 임시로 컴포넌트들을 조합하여 화면에 표현하였다.
// ! 추후 DB에서 데이터를 불러와 수정 예정
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