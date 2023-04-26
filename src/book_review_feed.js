import React from "react";
import Bookinfo from "../components/Bookinfo";

const Book_review_feed = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>사진</div>
      <div>이름</div>
      <div>구독중</div>
      <div>알람</div>
      <Bookinfo />
    </div>
  );
};

export default Book_review_feed;
