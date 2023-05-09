import React, { useState } from "react";


import MypageTopBar from "../components/MypageTopBar";
import SearchBar from "../components/SearchBar"
import TagContentBox from "../components/TagContentBox";
import NavBar from "./NavBar"



const container={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column"

}

//태그 및 도서 검색 페이지 담당 컴폰넌트
//김동주
const searchPage=()=>{
  const[tag,setTag]=useState([])
  

  function getTag(t){
    console.log(t)
  }


  return(
    <div style={container}>
      <MypageTopBar></MypageTopBar>
      <SearchBar></SearchBar>
      <TagContentBox
      onDataUpdate={getTag}></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;