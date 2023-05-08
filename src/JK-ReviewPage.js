import React, { useState } from "react";
import PostInput from "../components/JK-PostInput";
import Search from "../components/JK-Search";
import NavBar from "./JK-NavBar";

import MypageTopBar from "../components/JK-MypageTopBar";
import ReviewWrite from "../components/JK-ReviewWrite";


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
