import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';



const PopularReview = () => {
  const data=[
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"김동주",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"199",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"김동주",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"199",
      likeState:true,
    }
    
  ]


  return (
    <div >
      {data.map((item,index)=>(
        <MainFeedReviewForm
        key={index}
        bookPic={item.bookPic}
        profilePic={item.profilePic}
        name={item.name}
        review={item.review}
        time={item.time}
        like={item.like}
        likeState={item.likeState}
        />    
      ))}
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




