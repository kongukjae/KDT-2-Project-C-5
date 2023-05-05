import React from "react";


import MypageTopBar from "../components/MypageTopBar";
import SearchBar from "../components/SearchBar"
import TagContentBox from "../components/TagContentBox";
import NavBar from "./NavBar"
//태그 및 도서 검색 페이지 담당 컴폰넌트
//김동주
const searchPage=()=>{


  return(
    <div>
      <MypageTopBar></MypageTopBar>
      <SearchBar></SearchBar>
      <TagContentBox></TagContentBox>
      <NavBar></NavBar>
    </div>

  );
}

export default searchPage;