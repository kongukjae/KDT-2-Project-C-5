import React from "react";
import Bookinfo from "../components/Bookinfo";
import BookDescription from "../components/BookDescription";
import FeedTopBar from "../components/FeedTopBar";

const Book_review_feed = () => {
  return (
    <div>
      <FeedTopBar />
      <Bookinfo />
      <BookDescription />
    </div>
  );
};

export default Book_review_feed;
