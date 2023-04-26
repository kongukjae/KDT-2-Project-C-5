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
        책 표지
      </div>
      <div>
        <div>사진, 닉네임</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu metus, posuere
        </div>
      </div>
    </div>
  );
};

export default mainFeedReviewForm;