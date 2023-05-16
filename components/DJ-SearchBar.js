import React,{useState} from 'react';

const container={
  display:"flex",
  width:"100%",
  height:"50px",
  justifyContent:"center",
  alignItems:"center",
}

const box={
  display:"flex",
  flexDirection:"row",
  width:"100%",
  height:"80%",
  borderRadius:"10px",
  backgroundColor:"#B0A7A7",
  justifyContent:"space-around",
  alignItems:"center",
}

const inputSt={
  backgroundColor:"#D9D9D9",
  border:"none",
  borderRadius:"5px",
  width:"85%",
  height:"70%"
}

const imgBox={
  display:"flex",
  width:"10%",
  height:"70%",
  backgroundColor:"#D9D9D9",
  borderRadius:"5px"
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