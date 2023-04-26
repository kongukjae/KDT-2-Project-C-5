import React, { useState } from "react";
import Autocomplete from "../components/Autocomplete";
import PostInput from "../components/PostInput";

function ReviewPage() {
  return (
    <div className="container">
      <Autocomplete />
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
