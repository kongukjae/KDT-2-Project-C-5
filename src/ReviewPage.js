import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";

function ReviewPage() {
  return (
    <div>
      <TopMenu/>
      <div className="container">
        <Search />
        <div>
          <p>책제목:</p>
        </div>
        <div>
          <p>저자:</p>
        </div>
        <PostInput />
      </div>
      <NavBar/>
    </div>
  );
}

export default ReviewPage;
