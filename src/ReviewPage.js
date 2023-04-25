import React, { useState } from "react";
import Search from "../components/Search";
import PostInput from "../components/PostInput";

function ReviewPage() {
  return (
    <div className="container">
      <image />
      <Search />
      <div>
        <p>책제목:</p>
      </div>
      <div>
        <p>저자:</p>
      </div>
      <PostInput />
    </div>
  );
}

export default ReviewPage;
