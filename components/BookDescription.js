import React from "react";
// 임시 css 속성의 크기는 figma 목업 사이즈를 참조하였다.
// 전체 리뷰 container 박스 임시 css
const conStyle = {
  width: "357px",
  height: "350px",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  border: "1px solid black",
  borderRadius: "10px",
  backgroundColor: "#CDB7B5",
};

// 책 오른쪽 사진, 닉네임, 리뷰글 부분 임시 css
const reviewStyle = {
  width: "213px",
  height: "92px",
};

const BookDescription = () => {
  return (
    <div style={conStyle}>
      <div style={reviewStyle}>
        <div>
          description:Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin arcu metus, posuedescriptionre Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin arcu metus, posuere Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin arcu metus, posuere
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu
          metus, posuere
        </div>
        <br></br>
        <div>1.8k ♥</div>
      </div>
    </div>
  );
};

export default BookDescription;
