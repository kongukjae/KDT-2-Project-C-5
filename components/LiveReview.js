import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';

const scroll={
  gap : '10px',
  //width:"100%",
  height:"500px",
  maxHeight:"500px",
  overflow: "scroll",
  
}

const LiveReview = () => {
  const data=[
    {
      bookPic:"../src/img/book-cover2.jpg",
      profilePic:"ppp",
      name:"jain",
      review:"총균쇠에 대한 나의 고견",
      time:"1h ago",
      like:"9",
      likeState:true,
    },
    {
      bookPic:"../src/img/book-cover3.jpg",
      profilePic:"ppp",
      name:"Roy",
      review:"AI 인류의 미래는?",
      time:"2h ago",
      like:"3",
      likeState:true,
    },
    {
      bookPic:"../src/img/book-cover4.jpg",
      profilePic:"ppp",
      name:"쥬씨",
      review:"내 집중력 어디갔나",
      time:"2h ago",
      like:"5",
      likeState:true,
    },
    {
      bookPic:"../src/img/book-cover5.jpg",
      profilePic:"ppp",
      name:"Jeremy",
      review:"부를 위한 기초",
      time:"3h ago",
      like:"22",
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