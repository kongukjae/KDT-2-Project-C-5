import React from "react";
import BookCoverImage from "../src/img/book-cover.jpg";
const conStyle = {
  display: "flex",
  flexDirection: "row",
};

const InfoStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "257px",
};
const Bookinfo = () => {
  return (
    <div className="container" style={conStyle}>
      <div
        style={{
          width: "100px",
          height: "150px",
          backgroundColor: "gray",
          margin: "10px",
        }}
      >
        <img src={BookCoverImage} alt="img" />
      </div>
      <div className="Info" style={InfoStyle}>
        <div style={InfoStyle}>책 이름:우주와 달</div>
        <div style={InfoStyle}>지은이:정지은</div>
        <div style={InfoStyle}>발행처:교보</div>
        <div style={InfoStyle}>페이지수:526P</div>
      </div>
    </div>
  );
};

export default Bookinfo;
