import React from 'react';

const conStyle = {
  width: '357px',
  height: '155px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}

const mainFeedReviewForm = () => {
  return (
    <div style={conStyle}>
      <div>
        책 표지 부분
      </div>
      <div>
        <div>사진, 닉네임</div>
        <div>3줄리뷰 부분</div>
      </div>
    </div>
  );
};

export default mainFeedReviewForm;