import React, { useState } from "react";

import {setTagString,getTagString} from "./Global";
import MypageTopBar from "../components/MypageTopBar";
import TopMenu from "./TopMenu";
import DJ_SearchBar from "./DJ_SearchBar"
import TagContentBox from "../components/TagContentBox";
import SearchResult from "../components/SearchBookResult";
import NavBar from "./NavBar"



const container={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  width:"100%"
}

//태그 및 도서 검색 페이지 담당 컴폰넌트
//김동주
const searchPage=()=>{
  let tagAry=[];
  let str="";
  
  

  //리액트 전역관리
  //tagContentBox에서 넘겨 받은 태그를 배열에 담고
  //각 태그 앞에 #을 붙임. 예) #호러 #공포
  //
  //문자열의 구분은 스페이스바
  function getTag(tag){
    tag="#"+tag;
    console.log(tag);
    tagAry=[...tagAry,tag];
    //전역관리 -> 클로저,전역변수,지역변수,지역함수
    //리액트 핵심은 전역관리
    //중복된 태그가 입력된 경우 삭제
    if(tagAry.length>1){
      for(let i=0;i<tagAry.length-1;i++){
        console.log("for문 실행")
        if(tag==tagAry[i]){
          // console.log(i)
          tagAry.pop();
        }
      }
    }
    
    str=tagAry.join(" ");
    setTagString(str);
    console.log(getTagString());
  }


  return(
    <div style={container}>
      <TopMenu></TopMenu>
      <DJ_SearchBar></DJ_SearchBar>
      <TagContentBox onDataUpdate={getTag}></TagContentBox>
      {/* <SearchBookResult></SearchResult> */}
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;