import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";

function ReviewPage() {
  return (
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
  );
}

export default ReviewPage;
