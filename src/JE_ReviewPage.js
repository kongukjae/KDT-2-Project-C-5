import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import NavBar from "./NavBar";

import TopMenu from "./TopMenu";
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

      <div style={container}>
      <TopMenu></TopMenu>
      <ReviewWrite></ReviewWrite>
      </div>
      <NavBar></NavBar>
      
    </div>
  );
}

export default ReviewPage;
