import React from 'react';

import AddBook from './DJ-AddBook';
import ReviewInput from './DJ-ReviewInput';
import Tag from './Tag';


const container={
  display:"flex",
  flexDirection:"column",
  width:"90%",
  height:"95%",
  borderRadius:"5px",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor:"#D9D9D9"
}

const box={
  display:"flex",
  width:"80%",
  height:"100%",
  flexDirection:"column",
  justifyContent:"space-around"

}

//리뷰 작성 페이지 내 도서 검색,리뷰 작성,태그,등록 등을 담당하는 컴포넌트
const WriteBox=()=>{
  

  return(
    <form style={container} action="/submit" method="post">
      <div style={box}>
        <AddBook></AddBook>
        <ReviewInput></ReviewInput>
      </div>
      <Tag></Tag>
    </form>

  );
}

export default WriteBox;