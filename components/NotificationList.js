import React from "react";
import myImage from "../src/img/goose.jpg";

const NotificationListstyle ={
  backgroundColor: "#CAC2C2" 
}

const NotificationList = () => {
  return (
    <div style={NotificationListstyle}>
      <div>'jiny273588'님이 당신을 팔로우 하셨습니다.</div>
      <div>'verstand821'님이 당신을 팔로우 하셨습니다.</div>
      <div>'제인'님이 좋아요를 누르셨습니다.</div>
    </div>
  );
};

export default NotificationList;
