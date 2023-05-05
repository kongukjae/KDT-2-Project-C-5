import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';



const PopularReview = () => {
  const data={
    bookPic:"pic",
    profilePic:"ppp",
    name:"김동주",
    review:"asdasdasdasd",
    time:"10:10",
    like:"199",
    likeState:true,
  }
  return (
    <div >
        <MainFeedReviewForm
          bookPic={data.bookPic}
          profilePic={data.profilePic}
          name={data.name}
          review={data.review}
          time={data.time}
          like={data.like}
          likeState={data.likeState}
          />
    </div>
  );
};

export default PopularReview;




