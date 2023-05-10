import React from "react";
import Bookinfo from "../components/Bookinfo";
import BookDescription from "../components/BookDescription";
import FeedTopBar from "../components/FeedTopBar";
import UploadTime from "../components/UploadTime";

//메인피드에서 책사진 클릭시 나타나는 긴글리뷰 페이지
//정지은
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
