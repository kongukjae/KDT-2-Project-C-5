<<<<<<< HEAD
import React from "react";
import TopMenu from "./TopMenu";
=======
import React, { useState } from "react";


import MypageTopBar from "../components/MypageTopBar";
>>>>>>> 0f7ded72 (review page tag moves)
import SearchBar from "../components/SearchBar"
import TagContentBox from "../components/TagContentBox";
import SearchResult from "../components/SearchResult";
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

  function getTag(tag){
    console.log(tag);
    return tag;
  }


  return(
    <div style={container}>
      <TopMenu></TopMenu>
      <SearchBar></SearchBar>
      <TagContentBox
      onDataUpdate={getTag}></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;