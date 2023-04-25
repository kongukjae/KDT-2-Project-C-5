import React, { useState } from "react";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import TextInput from "../components/TextInput";
import PostInput from "../components/PostInput";

const ReviewPage = () => {
  return (
    <div>
      <h1>ReviewPage</h1>
      <Search />
      <PostInput />
    </div>
  );
};

export default ReviewPage;
