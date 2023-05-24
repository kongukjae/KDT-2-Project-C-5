import React from "react";
import myImage from "../src/img/goose.jpg";

const mainbox = {
  width: '90%',
  height: '92%',
}

const LogoStyle = {
  fontSize: '1.5rem',
  height: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '50px'
}


const NotificationListstyle ={
  backgroundColor: "rgb(217, 217, 217)"
}

const NotificationList = () => {
  return (
    <div style= {mainbox}>
      <div style={LogoStyle}>
        알림창
      </div>
      <div style={NotificationListstyle}>
        <div>'jiny273588'님이 당신을 팔로우 하셨습니다.</div>
        <div>'verstand821'님이 당신을 팔로우 하셨습니다.</div>
        <div>'제인'님이 좋아요를 누르셨습니다.</div>
      </div>
    </div>
  );
};

export default NotificationList;
