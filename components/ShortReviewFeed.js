import React, { useState } from "react";
// 사용하는 컴포넌트들
// 사용자 정보
import FeedTopBar from "../components/FeedTopBar.js"

export default function ShortReviewFeed() {
  const [ shortReview, setShortReview ] = useState("사용자 한줄 리뷰");

  return (
    <div>
      <FeedTopBar />
      <div>{shortReview}</div>
      <button>더보기</button>
    </div>
  )
}