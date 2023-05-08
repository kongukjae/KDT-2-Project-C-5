import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import NavBar from "./DJ_NavBar";

import MypageTopBar from "../components/DJ_MypageTopBar";
import ReviewWrite from "../components/DJ_ReviewWrite";


const container={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  height:"80%",

}

//리뷰 작성 페이지
function ReviewPage() {
  return (
    <div style={container}>
      <MypageTopBar></MypageTopBar>
      <ReviewWrite></ReviewWrite>
      <NavBar></NavBar>
    </div>
  );
}

export default ReviewPage;
