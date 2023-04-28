import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';

const formOneStyle = {
  backgroundColor: '#A7B999',
  backgroundClip: 'padding-box'
}
const formTwoStyle = {
  backgroundColor: '#B195B1'
}
const formThreeStyle = {
  backgroundColor: '#C86C6C'
}
const PopularReview = () => {
  return (
    <div>
      <div style={formOneStyle}><MainFeedReviewForm/></div>
      <div style={formTwoStyle}><MainFeedReviewForm/></div>
      <div style={formThreeStyle}><MainFeedReviewForm/></div>
    </div>
  );
};

export default PopularReview;