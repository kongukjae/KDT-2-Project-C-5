// 메인 피드 화면 중 한줄로 사진, 이름, 구독중, 알람 표시를 하는 컴포넌트이다.
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
