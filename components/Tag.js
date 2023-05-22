import React, { useState } from 'react'


//리뷰 작성 페이지 내 태그 컴포넌트
const Tag=(props)=>{
  const[tagText,setTagText]=useState();
  
  const handleTextChange=(e)=>{
    setTagText(e.target.value);
  };
  
  
  const tagBox={
    display:'flex',
    height:'30px',
    minWidth:'50px',
    width:'${tagText.length * 10}px',
    
  }

  const tagSt={
    display:'flex',
    backgroundColor:'#D9D9D9',
    border:'1px solid black',
  }

  return(
    <div style={tagBox}>
      <input style={tagSt} type='text' value={tagText} onChange={handleTextChange}></input>
    </div>

  );
}


export default Tag;
