import React from "react";

const InfoStyle = {
  display: "flex",
  flexDirection: "row",
};
const FeedTopBar = () => {
  return (
    <div style={InfoStyle}>
      <div>사진</div>
      <div>이름</div>
      <div>구독중</div>
      <div>알람</div>
    </div>
  );
};

export default FeedTopBar;
