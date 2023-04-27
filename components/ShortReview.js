import React, { useState } from "react";
// 사용하는 컴포넌트들
// 책 정보
import BookInfo from "../components/BookInfo.js"
// 짧은 리뷰글 피드
import ShortReviewFeed from "../components/ShortReviewFeed.js"

export default function LongReview() {

  return (
    <div>
      <BookInfo />
      <ShortReviewFeed />
    </div>
  )
}