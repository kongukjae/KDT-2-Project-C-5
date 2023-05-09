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
  

  

  //리액트 전역관리
  function getTag(tag){
    console.log(tag);
    tagAry=[...tagAry,tag];

    if(tagAry.length>1){

      for(let i=0;i<tagAry.length-1;i++){
        console.log("for문 실행")
        if(tag==tagAry[i]){
          console.log(i)
          tagAry.pop();  
        }
      }
    }
    
    console.log(tagAry);
    
    
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