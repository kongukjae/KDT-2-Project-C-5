import React from 'react';
import AddBook from './AddBook';


const container={
  display:"flex",
  flexDirection:"column",
  width:"70%",
  height:"70%",
  borderRadius:"5px",
  justifyContent:"space-around",
  alignItems:""
}

//리뷰 작성 페이지 내 도서 검색,리뷰 작성,태그,등록 등을 담당하는 컴포넌트
const WriteBox=()=>{
  

  return(
    <div style={container}>
      <AddBook></AddBook>

    </div>

  );
}

export default WriteBox;