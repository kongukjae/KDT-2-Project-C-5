import React from "react";

const InfoStyle = {
  display: "flex",
  flexDirection: "row",
};
const Bookinfo = () => {
  return (
    <div>
      <br />
      <div>책사진</div>
      <div style={InfoStyle}>책 이름:우주와 달</div>
      <div style={InfoStyle}>지은이:정지은</div>
      <div style={InfoStyle}>발행처:교보</div>
      <div style={InfoStyle}>페이지수:526P</div>
    </div>
  );
};

export default Bookinfo;
