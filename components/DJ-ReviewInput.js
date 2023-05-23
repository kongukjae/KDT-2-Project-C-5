import React, { useState } from 'react';
import { globalState } from '../src/Global';

const container={
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  width:"100%",
  height:"60%"
}

const inputThree={
  width:"100%",
  height:"70px",
  border:"none",
  borderRadius:"5px",

}

const inputContext={
  width:"100%",
  height:"150px",
  border:"none",
  borderRadius:"5px"

}

//2가지 리뷰 작성 인풋을 담당하는 컴포넌트
const ReviewInput=()=>{
  const[r1,setR1]=useState('');
  const[r2,setR2]=useState('');
  
  const reviewInput1=(e)=>{
    setR1(e.target.value);
    globalState.reviewData.review1=e.target.value;
    console.log(globalState.reviewData.review1);
  }

  const reviewInput2=(e)=>{
    setR2(e.target.value);
    globalState.reviewData.review2=e.target.value;
    
  }

  return(
    <div style={container}>
      <div>
        <input style={inputThree} type='text' name='review1' placeholder='3줄 리뷰' onChange={reviewInput1}></input>
      </div>
      <div>
        <input style={inputContext} type='text' name='review2' placeholder='리뷰' onChange={reviewInput2}></input>
      </div>
    </div>
  );
}


export default ReviewInput;