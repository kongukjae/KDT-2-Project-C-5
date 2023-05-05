import React,{useState} from 'react';

const container={
  display:"flex",
  widht:"100%",
  height:"40px",
  justifyContent:"center",
  alignItems:"center",
}

const box={
  display:"flex",
  flexDirection:"row",
  width:"300px",
  height:"80%",
  borderRadius:"5px",
  backgroundColor:"#B0A7A7",
  justifyContent:"space-around",
  alignItems:"center",
}

const inputSt={
  backgroundColor:"#D9D9D9",
  border:"none",
  borderRadius:"5px",
  width:"250px"
}

const imgBox={
  display:"flex",
  width:"20px",
  height:"20px",
  backgroundColor:"#D9D9D9"
}


//도서,태그 검색 페이지의 검색바를 담당하는 컴포넌트
//김동주
const searchBar=()=>{

  return(
    <div style={container}>
      <div style={box}>
          <input style={inputSt}></input>
          <div style={imgBox}>
            <img></img>
          </div>
      </div>
    </div>
  );
}


export default searchBar;