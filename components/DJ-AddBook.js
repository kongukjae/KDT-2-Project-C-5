import React from 'react';

import SearchBar from './DJ-SearchBar'
import './AddBook.css'



const crossBox={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100px",
  height:"100px",
  border:"1px solid black"

}

const container={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  height:"40%",
  justifyContent:"space-around",
  alignItems:"center"
}


const searchBox={
  display:"flex",
  width:"100%"

}
//리뷰 작성 페이지 기능 내에서 십자가 버튼과 검색바를 담당하는 컴포넌트
const AddBook=()=>{

  return(
    <div style={container}>
      <div style={crossBox}>
        <div id='cross'></div>
      </div>


      <div style={searchBox}>
        {/* 자동완성 기능이 담겨있는 도서 검색 바를 여기에 넣어야함 */}
        <SearchBar></SearchBar>
      </div>
    </div>
    

    
  );
}

export default AddBook;