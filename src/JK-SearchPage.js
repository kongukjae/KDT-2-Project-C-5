import React from "react";


import MypageTopBar from "../components/JK-MypageTopBar";
import SearchBar from "../components/JK-SearchBar"
import TagContentBox from "../components/JK-TagContentBox";
import NavBar from "./JK-NavBar"
//태그 및 도서 검색 페이지 담당 컴폰넌트
//김동주


const container={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column"

}
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