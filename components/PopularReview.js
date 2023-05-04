import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';



const PopularReview = () => {
  return (
    <div>
        <MainFeedReviewForm
          bookPic="pic"
          profilePic="ppp"
          name="김동주"
          review="asdasdasdasd"
          time="10:10"
          like="10"
          likeState={true}
          />
    </div>
  );
};

export default PopularReview;




