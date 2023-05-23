import React, { useState } from 'react'
import { globalState } from '../src/Global';





const tagBox={
  display:'flex',
  flexDirection:'row',
  height:'20px',
  width:'80%'
}

const tagSt={
  display:'flex',
  backgroundColor:'#D9D9D9',
  border:'1px solid black',
  width:'80%'
}

const btnSt={
  width:"20%"
}



const fetchFormData=(e)=>{
  e.preventDefault(); // 기본 동작인 페이지 새로고침을 방지합니다.

  const formData = new FormData();

  for(const key in globalState.reviewData){
    formData.append(key,globalState.reviewData[key]);
  }


  fetch('/fetch_review', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // 서버 응답 처리
    console.log(data);
  })
  .catch(error => {
    // 에러 처리
    console.error(error);
  });
}



//리뷰 작성 페이지 내 태그 컴포넌트
const Tag=(props)=>{
  const[tagText,setTagText]=useState();


  const handleTextChange=(e)=>{
    setTagText(e.target.value);
    globalState.reviewData.tag=e.target.value;
    console.log(globalState.reviewData.tag);
  };
  
  

  return(
    <div style={tagBox}>
      <input style={tagSt} type='text' name='tag' value={tagText} onChange={handleTextChange}></input>
      <button style={btnSt} type="submit" onClick={fetchFormData}>등록</button>
    </div>

  );
}


export default Tag;
