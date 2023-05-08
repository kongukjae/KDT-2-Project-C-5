import React from "react";
import Bookinfo from "../components/Bookinfo-JE";
import BookDescription from "../components/BookDescription";
import FeedTopBar from "../components/FeedTopBar";
import UploadTime from "../components/UploadTime-JE";

const BookReviewFeed = () => {
  return (
    <div style={{ backgroundColor: "#DCDCDC" }}>
      <FeedTopBar />
      <Bookinfo />
      <UploadTime />
      <BookDescription />
    </div>
  );
};

export default BookReviewFeed;
