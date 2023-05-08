import React, {useState} from 'react';

import WriteBox from "./DJ_WriteBox";

const container={
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  alignItems:"center",
  width:"100%",
  height:"100%",
  backgroundColor:"#B0A7A7",
  borderRadius:"5px"

}

const box={
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  width:"100%",
  height:"100%",
  justifyContent:"space-around"
}

//리뷰 작성 페이지 내부 리뷰 작성 기능 및 레이아웃 담당 컴포넌트
//김동주
const ReviewWrite=()=>{
  


  return(
    <div style={container}>
      <div style={box}>
        <WriteBox></WriteBox>
        
      </div>

    </div>

  );
}

export default ReviewWrite;