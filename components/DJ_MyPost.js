import React,{useState} from 'react'

import MainFeedReviewForm from './DJ_mainFeedReviewForm';

const feedContainer={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  Height:"100%",
  maxHeight:"100%",
  overflow:"scroll"

}


//나의 글 내부 컨텐츠를 담당하는 컴포넌트, 스크롤 영역부터 시작
//김동주
const myPost=()=>{
  const data2=[
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
      name:"제인",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"199",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"제인",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"199",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"제인",
      review:"asdasdasdasd",
      time:"1h ago",
      like:"199",
      likeState:true,
    }   
  ]

  return(
    <div style={feedContainer}>
      {data2.map((item,index)=>(
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
}


export default myPost;