import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";

function ReviewPage() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
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
