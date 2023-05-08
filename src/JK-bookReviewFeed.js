import React from "react";
import Bookinfo from "../components/Bookinfo";
import BookDescription from "../components/BookDescription";
import FeedTopBar from "../components/FeedTopBar";
import UploadTime from "../components/UploadTime";



const BookReviewFeed = () => {
  return (
    <div>
      <FeedTopBar />
      <Bookinfo />
      <UploadTime />
      <BookDescription />
    </div>
  );
};

export default BookReviewFeed;
