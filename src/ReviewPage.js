import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";

function ReviewPage() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#D8BFD8",
        width: "300px",
        height: "700px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Search />
      <PostInput />
    </div>
  );
}

export default ReviewPage;
