import React,{useState} from 'react'

import MainFeedReviewForm from './mainFeedReviewForm';

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
      name:"제인",
      review:"원대하고, 보배를 목숨이 힘있다. 황금시대의 꽃이 인류의 것이다.   어디 청춘의 인간에 그들의 사막이다.",
      time:"1h ago",
      like:"25",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"제인",
      review:"불러 따뜻한 아름다우냐? 가슴에 수 인간의 눈이 못하다. 피어나는 소담스러운 온갖 인간이 아니다.",
      time:"3h ago",
      like:"1",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"제인",
      review:"이상이 발휘하기 소담스러운 듣기만 길지 이것이다. 살았으며, 더운지라 없는 따뜻한 철환하였는가?",
      time:"1d ago",
      like:"12",
      likeState:true,
    },
    {
      bookPic:"pic",
      profilePic:"ppp",
      name:"제인",
      review:"가는 길을 어디 그림자는 맺어, 우리는 대중을 아니다. 열락을 위하여 타오르고 듣기만 광야에서 칼이다.",
      time:"7d ago",
      like:"19",
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