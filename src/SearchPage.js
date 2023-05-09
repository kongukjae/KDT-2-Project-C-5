import React, { useState } from "react";


import MypageTopBar from "../components/MypageTopBar";
import TopMenu from "./TopMenu";
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
  let tagAry=[]
  
  function checkAry(t,ary){
    console.log("함수 호출")

    for(let i=0;i<ary.length;i++){
      console.log("함수 호출")
      if(ary[i]===t){
        console.log("중복된 태그 선택");
      }else{
        ary=[...ary,tag];
        console.log(ary);
      }
    }
  }

  //리액트 전역관리
  function getTag(tag){
    console.log(tag);
    checkAry(tag,tagAry);
    
  }


  return(
    <div style={container}>
      <TopMenu></TopMenu>
      <SearchBar tagAry={tagAry}></SearchBar>
      <TagContentBox
      onDataUpdate={getTag}></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;