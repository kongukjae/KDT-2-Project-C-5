import React from 'react';
// 전체 리뷰 container 박스 임시 css
const conStyle = {
  width: '357px',
  height: '155px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  border: '1px solid black',
  borderRadius: '10px'
}
// 책 표지 임시 css
const bookStyle = {
  width: '93px',
  height: '138px'
}
// 책 오른쪽 사진, 닉네임, 리뷰글 부분 임시 css
const reviewStyle = {
  width: '213px',
  height: '138px'
}

const mainFeedReviewForm = () => {
  return (
    <div style={conStyle}>
      <div style={bookStyle}>
        책 표지
      </div>
      <div style={reviewStyle}>
        <div>사진, 닉네임</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu metus, posuere
        </div>
      </div>
    </div>
  );
};

export default mainFeedReviewForm;