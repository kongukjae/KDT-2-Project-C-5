import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import NavBar from "./NavBar";
import Topmenu from './TopMenu'
import MypageTopBar from "../components/DJ-MypageTopBar";
import ReviewWrite from "../components/DG-ReviewWrite";


const mainbox ={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  height:"100%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent : 'space-between',
  alignItems: 'center'
}

const container = {
  width:"100%",
  height: "100%",
  display: 'flex',
  flexDirection: 'column',
}

//리뷰 작성 페이지
function ReviewPage() {
  return (
    <div style={mainbox}>
      <Topmenu></Topmenu>
      <div style={container}>
      <ReviewWrite></ReviewWrite>
      </div>
      <NavBar></NavBar>
      
    </div>
  );
}

export default ReviewPage;
