import React, { useState } from "react";
// 사용하는 컴포넌트들
// 책 정보
import BookInfo from "../components/BookInfo.js"
// 짧은 리뷰글 피드
import ShortReviewFeed from "../components/ShortReviewFeed.js"

//짧은 글 리뷰라고 이름 변경.
export default function ShortReview() {

  return (
    <div>
      <BookInfo />
      <ShortReviewFeed />
      <ShortReviewFeed />
      <ShortReviewFeed />
      <ShortReviewFeed />
    </div>
  )
}