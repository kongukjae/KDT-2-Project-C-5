import React from "react";
// 사용하는 컴포넌트들
// 사용자 정보
import FeedTopBar from "../components/FeedTopBar.js"
// 책 정보
import BookInfo from "../components/BookInfo.js"
// 짧은 리뷰글
export default function LongReview() {

  return (
    <div>
      
      <BookInfo />
      <div>
        <p>짧은 리뷰글 컨테이너(최소 3개)</p>
        <FeedTopBar />
        <div>사용자 한줄 리뷰</div>
        
        <div>
        </div>
      </div>
    </div>
  )
}