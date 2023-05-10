import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';

const scroll={
  width:"100%",
  height:"500px",
  maxHeight:"500px",
  overflow: "scroll",

}

const LiveReview = () => {
  const data=[
    {
      bookPic:"./src/img/book-cover2.jpg",
      profilePic:"ppp",
      name:"jain",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"9",
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
    },
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
    <div style={scroll}>
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
    </div>
  );
};

export default LiveReview;