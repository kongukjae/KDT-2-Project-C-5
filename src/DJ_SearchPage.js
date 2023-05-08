import React from "react";


import MypageTopBar from "../components/DJ_MypageTopBar";
import SearchBar from "../components/DJ_SearchBar"
import TagContentBox from "../components/DJ_TagContentBox";
import NavBar from "./DJ_NavBar"



const container={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column"

}

//태그 및 도서 검색 페이지 담당 컴폰넌트
//김동주
const searchPage=()=>{


  return(
    <div style={container}>
      <MypageTopBar></MypageTopBar>
      <SearchBar></SearchBar>
      <TagContentBox></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;