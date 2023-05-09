import React from "react";
import TopMenu from "./TopMenu";
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


  return(
    <div style={container}>
      <TopMenu></TopMenu>
      <SearchBar></SearchBar>
      <TagContentBox></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;